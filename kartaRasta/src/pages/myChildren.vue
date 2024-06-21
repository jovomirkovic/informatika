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
      v-for="child in props.children"
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
  props: ["children"],
  setup(props, ctx) {
    let router = useRouter();
    const $q = useQuasar();

    function removeChild(child) {
      ctx.emit("remove-child", child.id);
    }
    function editChild(child) {
      ctx.emit("edit-child", child);
    }

    function goTo(path) {
      router.push(path);
    }

    onMounted(() => {
      console.log("props.children");
      console.log(props);
      console.log(props.children);
    });
    return {
      props,
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
