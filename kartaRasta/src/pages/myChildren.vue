<template>
  <q-page class="container flex column items-center">
    <q-toolbar style="color: #00000040" class="q-pt-md">
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
        {{ $t("general.myChildren") }}
      </q-toolbar-title>
    </q-toolbar>
    <childCardComponent
      style="width: calc(100% - 32px)"
      v-for="child in props.children"
      :key="child.id"
      :child="child"
      @remove-child="removeChild"
      @edit-child="editChild"
      @select-child="selectChild"
    ></childCardComponent>
    <span
      class="col column flex justify-end items-center"
      v-if="props.children == undefined || props.children.length <= 0"
    >
      <span
        class=""
        style="
          font-weight: 600;
          font-size: 15pt;
          line-height: 1;
          color: #00000040;
          margin: 50px 0px;
        "
        >{{ $t("general.noChildren") }}</span
      >
      <span class="row">
        <q-btn @click="goTo('/addDaughter')" class="girlBtn mainBtn" push>
          <q-icon size="3em" name="female" />
          <div style="width: 70%">{{ $t("general.addGirl") }}</div>
        </q-btn>

        <q-btn @click="goTo('/addSon')" class="boyBtn mainBtn" push>
          <q-icon size="3em" name="male" />
          <div style="width: 70%">{{ $t("general.addBoy") }}</div>
        </q-btn>
      </span>
    </span>
  </q-page>
</template>

<script>
import { defineComponent, ref, onMounted } from "vue";
import { useRouter } from "vue-router";
import childCardComponent from "../components/childCardComponent.vue";

export default defineComponent({
  name: "myChildren",
  components: {
    childCardComponent,
  },
  props: ["children"],
  setup(props, ctx) {
    let router = useRouter();

    function removeChild(child) {
      ctx.emit("remove-child", child.id);
    }
    function editChild(child) {
      ctx.emit("edit-child", child);
    }
    function selectChild(child) {
      ctx.emit("select-child", child);
    }

    function goTo(path) {
      router.push(path);
    }

    return {
      props,
      goTo,
      editChild,
      removeChild,
      selectChild,
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
