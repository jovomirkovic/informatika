<template>
  <q-layout view="lHh Lpr lFf">
    <q-page-container>
      <router-view
        :selectedChild="selectedChild"
        :children="children"
        @remove-child="removeChild"
        @edit-child="editChild"
        @put-child="putChild"
        @add-child="addChild"
        @resetuj-selektovano-dete="resetujSelektovanoDete"
        @select-child="selectChild"
        @add-height="addHeight"
        @remove-height="removeHeight"
        @restore-backup="loadChildren"
      />
    </q-page-container>
  </q-layout>
</template>

<script>
import { defineComponent, onMounted, ref } from "vue";

import { useRouter } from "vue-router";
import { useQuasar, date } from "quasar";
import { useI18n } from "vue-i18n";
import { LocalNotifications } from "@capacitor/local-notifications";
import { addMonths, addMinutes, addSeconds } from "date-fns";
import logo from "../assets/logo.png";
import averageHeight from "../scripts/averageHeight.vue";
import localforage from "localforage";
import { Preferences } from "@capacitor/preferences";

// LocalNotifications.addListener('localNotificationReceived', async (notification) => {
//   console.log('Notification received:', notification);

//   // Reschedule the notification for another 6 months in the future
//   const now = new Date();
//   // const sixMonthsLater = addSeconds(new Date(), 15); // Calculate date 6 months from now
//   const sixMonthsLater = addMonths(now, 6); // Calculate date 6 months from now

//   await LocalNotifications.schedule({
//     notifications: [
//       {
//         id: notification.id, // Unique ID for the next notification
//         title: notification.title,
//         body: notification.body,
//         schedule: {
//           at: sixMonthsLater,
//         },
//         schedule: {
//           at: sixMonthsLater,
//           repeats: true, // Set to repeat
//           every: 'year', // Repeats every year after initial 6 months
//         },
//         sound: notification.sound,
//         smallIcon: notification.smallIcon,
//       }
//     ],
//   });
// });

export default defineComponent({
  name: "MainLayout",

  setup() {
    const t = useI18n();
    const $q = useQuasar();
    const children = ref([]);
    const selectedChild = ref({});
    const pendingNotifications = ref([]);
    const router = useRouter();

    onMounted(async () => {
      try {
        const permission = await LocalNotifications.requestPermissions();
        if (permission.display === "granted") {
          checkScheduledNotifications(true);
        } else {
          loadChildren();
        }
      } catch (error) {
        console.error("Notification setup error: ", error);
        loadChildren();
      }
    });

    const scheduleNotificationInSixMonths = async (child) => {
      const now = new Date();
      const sixMonthsLater = addMonths(now, 6); // 6 months from now
      const oneYearLater = addMonths(now, 12); // 1 year from now

      await LocalNotifications.schedule({
        notifications: [
          {
            id: child.id % 2000000000,
            title: t.t("general.reminder"),
            body:
              t.t("general.reminderText") +
              ": " +
              child.firstName +
              " " +
              child.lastName +
              "!",
            schedule: {
              at: sixMonthsLater,
              repeats: true, // Set to repeat
              every: "year", // Repeats every year after initial 6 months
            },
            sound: "default",
            smallIcon: logo,
          },
          {
            id: (child.id % 2000000000) + 1,
            title: t.t("general.reminder"),
            body:
              t.t("general.reminderText") +
              ": " +
              child.firstName +
              " " +
              child.lastName +
              "!",
            schedule: {
              at: oneYearLater,
              repeats: true, // Set to repeat
              every: "year", // Repeats every year after initial 1 year
            },
            sound: "default",
            smallIcon: logo,
          },
        ],
      });
    };
    const checkScheduledNotifications = async (test) => {
      try {
        const { notifications } = await LocalNotifications.getPending();

        if (notifications.length > 0) {
          console.log("Scheduled notifications:", notifications);
          pendingNotifications.value = notifications;
          // Process or display the notifications as needed
        } else {
          console.log("No scheduled notifications.");
        }
        if (test) loadChildren();
      } catch (error) {
        console.error("Error retrieving scheduled notifications:", error);
        if (test) loadChildren();
      }
    };

    const migrateToPreferences = async () => {
      try {
        const { value: migrated } = await Preferences.get({ key: "migrated_v2" });
        if (migrated) return;

        let data = null;

        // 1. Pokušaj iz localforage (IndexedDB)
        try {
          const lfData = await localforage.getItem("children");
          if (lfData) {
            data = typeof lfData === "string" ? lfData : JSON.stringify(lfData);
            console.log("Migration: pronađeni podaci u localforage");
          }
        } catch (e) {
          console.warn("Migration: localforage čitanje nije uspelo", e);
        }

        // 2. Pokušaj iz localStorage backup
        if (!data) {
          const lsBackup = localStorage.getItem("children_backup");
          if (lsBackup) {
            data = lsBackup;
            console.log("Migration: pronađeni podaci u localStorage backup");
          }
        }

        // 3. Pokušaj iz localStorage direktno
        if (!data) {
          const lsDirect = localStorage.getItem("children");
          if (lsDirect) {
            data = lsDirect;
            console.log("Migration: pronađeni podaci u localStorage");
          }
        }

        if (data) {
          await Preferences.set({ key: "children", value: data });
          console.log("Migration: podaci uspešno migrirani u Preferences");
        }

        await Preferences.set({ key: "migrated_v2", value: "true" });
      } catch (e) {
        console.error("Migration neuspešna:", e);
      }
    };

    const loadChildren = async () => {
      await migrateToPreferences();

      const { value: storedChildren } = await Preferences.get({
        key: "children",
      });

      if (storedChildren) {
        children.value = JSON.parse(storedChildren).filter(
          (e) => e.gender !== undefined
        );

        console.log("children.value", children.value);

        children.value.forEach((entry, index) => {
          children.value[index].heightData.sort((a, b) => {
            return (
              date.extractDate(a.date, "YYYY-MM-DD").getTime() -
              date.extractDate(b.date, "YYYY-MM-DD").getTime()
            );
          });
        });

        console.log("children.value after sort", children.value);
        saveChildren();
      }
    };

    const removeChild = (id) => {
      children.value = children.value.filter((child) => child.id !== id);
      saveChildren(t.t("general.childRemovedSuccessfully"), "info");
    };

    function addChild(newChild) {
      var averageDataFromWHO = 0;
      // newChild.gender == "male"
      //   ? averageHeight().boys[0].height
      //   : averageHeight().girls[0].height

      console.log(averageDataFromWHO);
      const child = {
        ...newChild,
        id: Date.now(),
        heightData: [
          {
            id: "childTargetHeight",
            date: date.formatDate(
              date.extractDate(newChild.dateOfBirth, "DD.MM.YYYY."),
              "YYYY-MM-DD"
            ),
            height: newChild.birthHeight || averageDataFromWHO,
          },
        ],
      };

      if (newChild.id == null) children.value.push(child);
      else {
        let index = children.value.indexOf(
          children.value.filter((e) => e.id == newChild.id)[0]
        );
        if (index != -1) children.value[index] = newChild;
      }

      saveChildren(
        t.t("general.childAddedSuccessfully"),
        "positive",
        "/myChildren"
      );
    }

    const saveChildren = async (message, type, to) => {
      try {
        await Preferences.set({
          key: "children",
          value: JSON.stringify(children.value),
        });

        if (message) {
          $q.notify({
            message: message,
            color: type,
            position: "top",
          });
        }

        if (to) {
          goTo(to);
        }
      } catch (e) {
        console.error("Error saving children:", e);
        $q.notify({
          message: t.t("general.generalError"),
          color: "negative",
          position: "top",
        });
      }

      // Notifikacije van try bloka - greska ne sme da blokira cuvanje
      try {
        children.value.forEach((entry) => {
          if (
            !pendingNotifications.value.some((e) =>
              e.body.includes(`${entry.firstName} ${entry.lastName}`)
            )
          ) {
            scheduleNotificationInSixMonths(entry);
          }
        });
        checkScheduledNotifications(false);
      } catch (e) {
        console.warn("Notification scheduling error (non-critical):", e);
      }
    };

    function editChild(child) {
      selectedChild.value = child;

      if (child.gender == "male") router.push("/addSon");
      else router.push("/addDaughter");
    }

    const putChild = (child) => {
      const index = children.value.indexOf(
        children.value.filter((e) => e.id == child.id)[0]
      );

      if (index != -1) {
        children.value[index] = child;
        children.value[index].heightData[
          children.value[index].heightData.indexOf(
            children.value[index].heightData.filter(
              (e) => e.id == "childTargetHeight"
            )[0]
          )
        ] = {
          id: "childTargetHeight",
          height: child.birthHeight,
          date: date.formatDate(
            date.extractDate(child.dateOfBirth, "DD.MM.YYYY."),
            "YYYY-MM-DD"
          ),
        };
      }
      saveChildren(
        t.t("general.childEditedSuccessfully"),
        "positive",
        "/myChildren"
      );
    };

    const addHeight = (data) => {
      const index = children.value.indexOf(
        children.value.filter((e) => e.id == data.id)[0]
      );

      if (index != -1) {
        if (children.value[index].heightData == undefined) {
          children.value[index].heightData = [
            {
              date: date.formatDate(
                date.extractDate(data.date, "DD.MM.YYYY."),
                "YYYY-MM-DD"
              ),
              height: data.height,
            },
          ];
        } else
          children.value[index].heightData.push({
            date: date.formatDate(
              date.extractDate(data.date, "DD.MM.YYYY."),
              "YYYY-MM-DD"
            ),
            height: data.height,
          });
      }
      saveChildren(t.t("general.heightAddedSuccessfully"), "positive");
    };
    const removeHeight = (data) => {
      const index = children.value.indexOf(
        children.value.filter((e) => e.id == data.id)[0]
      );

      if (index != -1) {
        const index2 = children.value[index].heightData.indexOf(
          children.value[index].heightData.filter(
            (e) => e.date == data.data.date
          )[0]
        );

        children.value[index].heightData.splice(index2, 1);
      }
      saveChildren(t.t("general.heightRemovedSuccessfully"), "positive");
    };

    function resetujSelektovanoDete() {
      selectedChild.value = {};
    }
    function selectChild(child) {
      selectedChild.value = child;
    }
    function goTo(path) {
      router.push(path);
    }
    return {
      children,
      selectedChild,
      addChild,
      editChild,
      putChild,
      removeChild,
      selectChild,
      resetujSelektovanoDete,
      addHeight,
      removeHeight,
    };
  },
});
</script>
