<template>
  <q-page class="container">
    <q-toolbar style="color: #00000040">
      <q-btn flat icon="arrow_back_ios" @click="goTo('/myChildren')" />
      <q-toolbar-title
        style="
          font-weight: 800;
          font-size: 20pt;
          text-align: left;
          line-height: 1;
          margin: 25px 0px;
        "
      >
        {{ props.selectedChild.firstName + " " + props.selectedChild.lastName }}
      </q-toolbar-title>
      <q-btn flat icon="add" @click="addMeasurement" />
    </q-toolbar>

    <q-tabs v-model="selectedTab" dense align="justify" narrow-indicator>
      <q-tab name="mails" label="Detalji" />
      <q-tab name="alarms" label="Grafikon" />
      <q-tab name="movies" label="Tabela" />
    </q-tabs>

    <q-separator />

    <q-tab-panels
      style="background-color: transparent"
      v-model="selectedTab"
      animated
    >
      <q-tab-panel name="mails" class="q-pa-sm">
        <detailsComponent :child="props.selectedChild"></detailsComponent>
      </q-tab-panel>

      <q-tab-panel name="alarms" class="q-pa-sm">
        <graphComponent :child="props.selectedChild"></graphComponent>
      </q-tab-panel>

      <q-tab-panel name="movies" class="q-pa-sm">
        <tableComponent :child="props.selectedChild"></tableComponent>
      </q-tab-panel>
    </q-tab-panels>
  </q-page>
</template>

<script>
import { defineComponent, ref, onMounted } from "vue";
import { useRouter } from "vue-router";
import { useQuasar } from "quasar";
import detailsComponent from "../components/detailsComponent.vue";
import graphComponent from "../components/graphComponent.vue";
import tableComponent from "../components/tableComponent.vue";

export default defineComponent({
  name: "childInformation",
  components: {
    detailsComponent,
    graphComponent,
    tableComponent,
  },
  props: ["selectedChild"],
  setup(props, ctx) {
    let router = useRouter();
    const $q = useQuasar();

    const selectedTab = ref("mails");

    onMounted(() => {
      console.log("props.children");
      console.log(props);
      console.log(props);
    });

    function goTo(path) {
      router.push(path);
    }

    function addMeasurement() {
      console.log("Dodaj merenje");
    }

    return {
      props,
      selectedTab,
      goTo,
      addMeasurement,
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
