<template>
  <q-page class="container">
    <q-toolbar style="color: #00000040">
      <q-btn
        flat
        icon="arrow_back_ios"
        @click="props.selectedChild.id ? goTo('/myChildren') : goTo('/')"
      />
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
      @resetuj-selektovano-dete="resetujSelektovanoDete"
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
  setup(props, ctx) {
    let router = useRouter();

    function addChild(newChild) {
      if (newChild.id != undefined && newChild.id != null)
        ctx.emit("put-child", newChild);
      else ctx.emit("add-child", { ...newChild, gender: "female" });
    }

    function resetujSelektovanoDete() {
      ctx.emit("resetuj-selektovano-dete", "");
    }

    function goTo(path) {
      router.push(path);
    }

    return {
      props,
      resetujSelektovanoDete,
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
