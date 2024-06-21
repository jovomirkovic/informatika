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
    :style="{
      color: [selectedChild.gender == 'male' ? '#759eff' : '#de60ba'],
    }"
    v-if="selectedChild"
  >
    <div
      class="flex flex-center column"
      style="width: 100%"
      @click="viewChildInformation"
    >
      <img
        style="
          width: 100%;
          border-radius: 15px 15px 0px 0px;
          height: 200px;
          object-fit: cover;
        "
        v-if="selectedChild.childPhoto"
        :src="selectedChild.childPhoto"
      />
      <q-icon v-else name="fa-solid fa-baby" size="7em" style="height: 200px" />
      <span class="title">{{
        selectedChild.firstName + " " + selectedChild.lastName
      }}</span>
      <span class="subtitle" style="margin-bottom: 20px">{{
        selectedChild.dateOfBirth
      }}</span>
      <div class="row flex justify-between items-center" style="width: 80%">
        <span class="row flex flex-center">
          <q-icon size="1.3em" class="q-ma-sm" name="straighten" />
          <span class="q-mr-md" style="color: #000000a0; font-weight: 500"
            >Dužina na rođenju</span
          >
        </span>
        <span class="rightSide">{{ selectedChild.birthHeight }}cm</span>
      </div>
      <div class="row flex justify-between items-center" style="width: 80%">
        <span class="row flex flex-center">
          <q-icon size="1.3em" class="q-ma-sm" name="scale" />
          <span class="q-mr-md" style="color: #000000a0; font-weight: 500"
            >Težina na rođenju</span
          >
        </span>
        <span class="rightSide">{{ selectedChild.birthWeight }}g</span>
      </div>
      <span
        class="separatorLine"
        :style="{
          backgroundColor: [
            selectedChild.gender == 'male' ? '#759eff' : '#de60ba',
          ],
        }"
      ></span>
      <span class="subtitle2">Poslednje izmerena visina</span>
      <div class="row flex justify-between" style="width: 80%">
        <span class="q-mr-md rightSide">{{
          selectedChild.heightData[selectedChild.heightData.length - 1].date
        }}</span>
        <span class="rightSide"
          >{{
            selectedChild.heightData[selectedChild.heightData.length - 1]
              .height
          }}cm</span
        >
      </div>
    </div>

    <div class="row q-mt-md" style="width: 80%">
      <q-btn
        push
        class="text-white bg-positive q-mr-sm col"
        label="Izmeni"
        @click="editChild"
      />
      <q-btn
        push
        class="text-white bg-negative q-ml-sm col"
        label="Obriši"
        @click="areYouSure = true"
      />
    </div>

    <q-dialog v-model="areYouSure">
      <q-card class="flex flex-center">
        <q-card-section
          class="row flex flex-center q-pb-none text-center q-mb-xl"
        >
          <span style="font-size: 12pt">
            Da li ste sigurni da želite da obrišete dete
          </span>
          <span style="font-size: 15pt; font-weight: 600">
            {{ selectedChild.firstName + " " + selectedChild.lastName }}
          </span>
        </q-card-section>

        <span class="row q-mb-lg" style="width: 90%">
          <q-btn
            v-close-popup
            push
            class="text-white bg-negative q-mr-sm col"
            label="Da"
            @click="removeChild"
          />
          <q-btn
            push
            class="text-white bg-positive q-ml-sm col"
            label="Ne"
            @click="areYouSure = false"
          />
        </span>
      </q-card>
    </q-dialog>
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
    let selectedChild = ref(null);
    let areYouSure = ref(false);

    onMounted(() => {
      selectedChild.value = props.child;
    });

    function goTo(path) {
      router.push(path);
    }

    function removeChild() {
      ctx.emit("remove-child", selectedChild.value);
    }
    function editChild() {
      ctx.emit("edit-child", selectedChild.value);
    }
    function viewChildInformation() {
      ctx.emit("select-child", selectedChild.value);
      goTo("/childInformation");
    }

    return {
      selectedChild,
      areYouSure,
      goTo,
      removeChild,
      editChild,
      viewChildInformation,
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
