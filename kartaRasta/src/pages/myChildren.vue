<template>
  <q-page class="container q-pa-md">
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
        MOJA DECA
      </q-toolbar-title>
    </q-toolbar>
    <childCardComponent
      v-for="child in children"
      :key="child.id"
      :child="child"
      @remove-child="removeChild"
      @edit-child="editChild"
    ></childCardComponent>
  </q-page>
</template>

<script>
import { defineComponent, ref, onMounted } from "vue";
import { useRouter } from "vue-router";
import { useQuasar } from "quasar";
import childCardComponent from "../components/childCardComponent.vue";
import localforage from "localforage";

export default defineComponent({
  name: "myChildren",
  components: {
    childCardComponent,
  },
  setup(props, ctx) {
    let router = useRouter();
    const $q = useQuasar();

    const children = ref([]);

    const loadChildren = async () => {
      const storedChildren = await localforage.getItem("children");
      if (storedChildren) {
        children.value = JSON.parse(storedChildren);
      }
      console.log("children.value");
      console.log(children.value);
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

    function removeChild(child) {
      ctx.emit("remove-child", child);
    }
    function editChild(child) {
      ctx.emit("edit-child", child);
    }

    onMounted(() => {
      loadChildren();
    });

    function goTo(path) {
      router.push(path);
    }

    return {
      children,
      goTo,
      editChild,
      removeChild,
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
