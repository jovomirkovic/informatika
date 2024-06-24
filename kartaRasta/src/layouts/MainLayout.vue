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

export default defineComponent({
  name: "MainLayout",

  setup() {
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

      console.log("children.value");
      console.log(children.value);
    };

    const removeChild = (id) => {
      console.log(children.value);
      children.value = children.value.filter((child) => child.id !== id);
      saveChildren("Dete je uspešno uklonjeno", "info");
    };

    function addChild(newChild) {
      console.log("newChild");
      console.log(newChild);
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
        debugger;
        let index = children.value.indexOf(
          children.value.filter((e) => e.id == newChild.id)[0]
        );
        if (index != -1) children.value[index] = newChild;
      }
      console.log(children.value);
      console.log(child);

      saveChildren("Dete je uspešno dodato", "positive", "/myChildren");
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
            message: "Došlo je do greške prilikom čuvanja",
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
      debugger;
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
      saveChildren("Dete je uspešno izmenjeno", "positive", "/myChildren");
    };

    const addHeight = (data) => {
      debugger;
      const index = children.value.indexOf(
        children.value.filter((e) => e.id == data.id)[0]
      );
      console.log("data");
      console.log(data);
      console.log({
        date: data.date,
        height: data.height,
      });
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
      saveChildren("Uspešno dodato merenje", "positive");
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
      saveChildren("Uspešno obrisano merenje", "positive");
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
