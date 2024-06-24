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
      />
    </q-page-container>
  </q-layout>
</template>

<script>
import { defineComponent, onMounted, ref } from "vue";
import localforage from "localforage";
import { useRouter } from "vue-router";
import { useQuasar, date } from "quasar";
import { useI18n } from "vue-i18n";

export default defineComponent({
  name: "MainLayout",

  setup() {
    const t = useI18n();
    const $q = useQuasar();
    const children = ref([]);
    const selectedChild = ref({});
    const router = useRouter();

    onMounted(() => {
      loadChildren();
    });

    const loadChildren = async () => {
      const storedChildren = await localforage.getItem("children");
      if (storedChildren) {
        children.value = JSON.parse(storedChildren).filter(
          (e) => e.gender != undefined
        );
        saveChildren();
      }
    };

    const removeChild = (id) => {
      children.value = children.value.filter((child) => child.id !== id);
      saveChildren(t.t("general.childRemovedSuccessfully"), "info");
    };

    function addChild(newChild) {
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
            height: newChild.birthHeight,
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
      await localforage
        .setItem("children", JSON.stringify(children.value))
        .then(() => {
          if (message != undefined) {
            $q.notify({
              message: message,
              color: type,
            });
          }

          if (to != undefined) {
            goTo(to);
          }
        })
        .catch((e) => {
          console.log("ERROR");
          console.log(e);
          $q.notify({
            message: t.t("general.generalError"),
            color: "negative",
          });
        });
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
