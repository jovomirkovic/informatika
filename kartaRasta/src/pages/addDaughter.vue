<template>
  <q-page class="container">
    <q-toolbar style="color: #00000040">
      <q-btn flat icon="arrow_back_ios" @click="goTo('/')" />
      <q-toolbar-title
        style="
          font-weight: 800;
          font-size: 20pt;
          text-align: left;
          line-height: 1;
          margin: 25px 0px;
        "
      >
        DODAJ DEVOJČICU
      </q-toolbar-title>
    </q-toolbar>
    <addChildComponent
      :selectedChild="props.selectedChild"
      gender="female"
      @add_child="addChild"
    ></addChildComponent>
  </q-page>
</template>

<script>
import { defineComponent, onMounted, ref } from "vue";
import { useRouter } from "vue-router";
import { useQuasar } from "quasar";
import addChildComponent from "../components/addChildComponent.vue";
import localforage from "localforage";

export default defineComponent({
  name: "addDaughter",
  components: {
    addChildComponent,
  },
  props: ["selectedChild"],
  setup(props) {
    let router = useRouter();
    const $q = useQuasar();

    const children = ref([]);

    function addChild(newChild) {
      const child = {
        ...newChild,
        id: Date.now(),
        gender: "female",
        heightData: [{ height: "", date: "" }],
      };
      children.value.push(child);
      console.log(children.value);
      console.log(child);

      saveChildren(newChild);
    }

    const loadChildren = async () => {
      const storedChildren = await localforage.getItem("children");
      if (storedChildren) {
        children.value = JSON.parse(storedChildren);
      }
    };

    const saveChildren = async (newChild) => {
      await localforage
        .setItem("children", JSON.stringify(children.value))
        .then(() => {
          $q.notify({
            message: "Dodato dete " + newChild.firstName,
            color: "positive",
          });
        })
        .catch((e) => {
          console.log("ERROR");
          console.log(e);
          $q.notify({
            message: "Došlo je do greške",
            color: "negative",
          });
        });
    };

    onMounted(() => {
      loadChildren();
    });

    function goTo(path) {
      router.push(path);
    }

    return {
      props,
      addChild,
      goTo,
    };
  },
});
</script>
<style lang="scss">
.container {
  background: linear-gradient(
    180deg,
    rgba(117, 158, 255, 0.3) 0%,
    rgba(234, 202, 244, 0.3) 100%
  );
}
</style>
