<template>
  <div
    class="flex flex-center column"
    style="
      background-color: #ffffffa0;
      border-radius: 15px;
      box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
      padding: 0px 0px 25px 0px;
      margin: 8px 0px;
    "
    v-if="props.child"
    :style="{
      color: [props.child.gender == 'male' ? '#759eff' : '#de60ba'],
    }"
  >
    <img
      style="
        width: 100%;
        border-radius: 15px 15px 0px 0px;
        height: calc(100vh - 535px);
        object-fit: cover;
      "
      v-if="props.child.childPhoto"
      :src="props.child.childPhoto"
    />
    <q-icon v-else name="fa-solid fa-baby" size="7em" style="height: 200px" />
    <span class="title">{{
      props.child.firstName + " " + props.child.lastName
    }}</span>
    <span class="subtitle" style="margin-bottom: 20px">{{
      props.child.dateOfBirth
    }}</span>
    <div class="row flex justify-between items-center" style="width: 80%">
      <span class="row flex flex-center">
        <q-icon size="1.3em" class="q-ma-sm" name="straighten" />
        <span class="q-mr-md" style="color: #000000a0; font-weight: 500"
          >Dužina na rođenju</span
        >
      </span>
      <span class="rightSide">{{ props.child.birthHeight }}cm</span>
    </div>
    <div class="row flex justify-between items-center" style="width: 80%">
      <span class="row flex flex-center">
        <q-icon size="1.3em" class="q-ma-sm" name="scale" />
        <span class="q-mr-md" style="color: #000000a0; font-weight: 500"
          >Težina na rođenju</span
        >
      </span>
      <span class="rightSide">{{ props.child.birthWeight }}g</span>
    </div>
    <span
      class="separatorLine"
      :style="{
        backgroundColor: [props.child.gender == 'male' ? '#759eff' : '#de60ba'],
      }"
    ></span>
    <span class="subtitle2">Poslednje izmerena visina</span>
    <div
      class="row flex justify-around"
      v-if="
        props.child.heightData != undefined && props.child.heightData.length > 0
      "
      style="width: 80%"
    >
      <span class="q-mr-md rightSide">{{
        props.child.heightData[props.child.heightData.length - 1].date
      }}</span>
      <span class="rightSide"
        >{{
          props.child.heightData[props.child.heightData.length - 1].height
        }}cm</span
      >
    </div>
    <div class="column flex items-center q-mt-md" style="width: 80%">
      <span class="subtitle2">Ciljana visina</span>
      <span class="rightSide">{{ props.child.childTargetHeight }}cm</span>
    </div>
  </div>
</template>

<script>
import { defineComponent, ref, onMounted } from "vue";
import { useRouter } from "vue-router";
import { useQuasar } from "quasar";
import base64 from "../components/base64.vue";

export default defineComponent({
  name: "childCardComponent",
  components: {
    base64,
  },
  props: ["child"],
  setup(props, ctx) {
    let router = useRouter();
    const $q = useQuasar();

    function goTo(path) {
      router.push(path);
    }

    return {
      props,
      goTo,
    };
  },
});
</script>
<style scoped lang="scss">
.componentContainer {
  padding: 15px;
}
.title {
  font-size: 15pt;
  font-weight: 600;
}
.subtitle {
  font-size: 11pt;
  font-style: italic;
}
.subtitle2 {
  font-size: 11pt;
  // margin: 10px;
  color: #000000a0;
  font-weight: 500;
  margin-bottom: 10px;
}

.rightSide {
  font-weight: 600;
}
.separatorLine {
  width: 50%;
  height: 0.5px;
  margin: 25px;
}
</style>
