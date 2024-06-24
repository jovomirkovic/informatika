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
      <q-btn
        style="
          position: fixed;
          bottom: 15px;
          left: calc(50vw - 90px);
          width: 180px;
          color: #ffffff;
        "
        :class="{
          'bg-girl': props.selectedChild.gender == 'female',
          'bg-boy': props.selectedChild.gender == 'male',
        }"
        rounded
        label="Novo merenje"
        icon="add"
        @click="addHeightDialog = true"
      />
    </q-toolbar>

    <q-tabs v-model="selectedTab" dense align="justify" narrow-indicator>
      <q-tab name="details" label="Detalji" />
      <q-tab
        :disable="
          props.selectedChild.heightData &&
          props.selectedChild.heightData?.length <= 0
        "
        name="graph"
        label="Grafikon"
      />
      <q-tab name="table" label="Tabela" />
    </q-tabs>

    <q-separator />

    <q-tab-panels
      style="background-color: transparent"
      v-model="selectedTab"
      animated
    >
      <q-tab-panel name="details" class="q-pa-sm">
        <detailsComponent :child="props.selectedChild"></detailsComponent>
      </q-tab-panel>

      <q-tab-panel name="graph" class="q-pa-sm">
        <graphComponent :child="props.selectedChild"></graphComponent>
      </q-tab-panel>

      <q-tab-panel name="table" class="q-pa-sm">
        <tableComponent
          :child="props.selectedChild"
          @remove-height="removeHeight"
        ></tableComponent>
      </q-tab-panel>
    </q-tab-panels>

    <q-dialog v-model="addHeightDialog">
      <q-card
        style="
          background: linear-gradient(180deg, #d5e2ff 0%, #f9effc 100%);
          color: #1e1e1e;
          width: 90vw;
        "
      >
        <q-card-section class="row items-center q-pb-none">
          <div class="text-h6">Unesite novo merenje</div>
          <q-space />
          <q-btn icon="close" flat round dense v-close-popup />
        </q-card-section>

        <q-card-section>
          <q-input
            style="width: 100%; margin-bottom: 25px"
            rounded
            type="number"
            outlined
            v-model="height"
            ref="heightRef"
            :rules="[(val) => !!val || 'Obavezno polje!']"
            label="Visina (cm)"
          />

          <q-input
            :color="selectedChild.gender"
            ref="dateOfBirthRef"
            rounded
            outlined
            v-model="dateOfMeasurement"
            label="Datum merenja"
            mask="##.##.####."
            @click="dateOfMeasurementRef.show()"
            :rules="[(val) => !!val || 'Obavezno polje']"
          >
            <template v-slot:append>
              <q-icon name="event" class="cursor-pointer">
                <q-popup-proxy
                  ref="dateOfMeasurementRef"
                  cover
                  transition-show="scale"
                  transition-hide="scale"
                >
                  <q-date
                    :color="selectedChild.gender"
                    v-model="dateOfMeasurement"
                    mask="DD.MM.YYYY."
                    @update:model-value="dateOfMeasurementRef.hide()"
                  >
                    <div class="row items-center justify-end">
                      <q-btn v-close-popup label="Close" color="primary" flat />
                    </div>
                  </q-date>
                </q-popup-proxy>
              </q-icon>
            </template>
          </q-input>

          <div class="row">
            <q-btn
              push
              class="text-white bg-negative q-mr-sm col"
              label="Otkaži"
              @click="cancel"
            />
            <q-btn
              push
              class="text-white bg-positive q-ml-sm col"
              :label="id == null || id == undefined ? 'Dodaj' : 'Izmeni'"
              @click="addMeasurement"
            />
          </div>
        </q-card-section>
      </q-card>
    </q-dialog>
  </q-page>
</template>

<script>
import { defineComponent, ref, onMounted, watch } from "vue";
import { useRouter } from "vue-router";
import { date, useQuasar } from "quasar";
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

    const addHeightDialog = ref(false);
    const dateOfMeasurementRef = ref(null);
    const height = ref(null);
    const heightRef = ref(null);
    const dateOfMeasurement = ref(date.formatDate(Date.now(), "DD.MM.YYYY."));
    const selectedTab = ref("details");

    watch(props, (newProps) => {
      // Bad Trick to refresh am5chart..
      // But it works!
      if (
        (selectedTab.value =
          "graph" && props.selectedChild.heightData.length > 0)
      ) {
        selectedTab.value = "adfg";
        setTimeout(() => {
          selectedTab.value = "graph";
        }, 200);
      }
    });
    onMounted(() => {
      if (
        props.selectedChild == undefined ||
        props.selectedChild.id == undefined
      )
        goTo("/myChildren");
      console.log("props.children");
      console.log(props);
      console.log(props);
    });

    function goTo(path) {
      router.push(path);
    }
    function removeHeight(data) {
      console.log("data1");
      console.log(data);
      ctx.emit("remove-height", data);
    }

    function addMeasurement() {
      console.log("Dodaj merenje");
      console.log(height.value);
      console.log(dateOfMeasurement.value);

      if (height.value == null) {
        heightRef.value.validate();
        $q.notify({
          message: "Sva polja su obavezna",
          color: "negative",
        });
        return;
      }

      ctx.emit("add-height", {
        id: props.selectedChild.id,
        date: dateOfMeasurement.value,
        height: height.value,
      });

      selectedTab.value = "graph";

      cancel();
    }

    function cancel() {
      height.value = null;
      dateOfMeasurement.value = date.formatDate(Date.now(), "DD.MM.YYYY.");
      addHeightDialog.value = false;
    }

    return {
      props,
      selectedTab,
      addHeightDialog,
      height,
      heightRef,
      dateOfMeasurement,
      dateOfMeasurementRef,
      goTo,
      addMeasurement,
      cancel,
      removeHeight,
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
