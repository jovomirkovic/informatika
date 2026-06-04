<template>
  <q-page class="container">
    <q-toolbar style="color: #00000040">
      <q-btn flat icon="arrow_back_ios" @click="goTo('/myChildren')" />
      <q-toolbar-title style="
          font-weight: 800;
          font-size: 20pt;
          text-align: left;
          line-height: 1;
          margin: 25px 0px;
        ">
        {{ props.selectedChild.firstName + " " + props.selectedChild.lastName }}
      </q-toolbar-title>
      <q-btn style="
          position: fixed;
          bottom: 15px;
          left: calc(50vw - 105px);
          width: 210px;
          color: #ffffff;
          z-index: 1000;
        " :class="{
          'bg-girl': props.selectedChild.gender == 'female',
          'bg-boy': props.selectedChild.gender == 'male',
        }" rounded :label="$t('general.newMeasurement')" icon="add" @click="addHeightDialog = true" />
    </q-toolbar>

    <q-tabs v-model="selectedTab" dense align="justify" narrow-indicator>
      <q-tab name="details" :label="$t('general.details')" />
      <q-tab :disable="props.selectedChild.heightData &&
        props.selectedChild.heightData?.length <= 0
        " name="graph" :label="$t('general.graph')" />
      <q-tab name="table" :label="$t('general.table')" />
    </q-tabs>

    <q-separator />

    <q-tab-panels style="background-color: transparent" v-model="selectedTab" animated>
      <q-tab-panel name="details" class="q-pa-sm">
        <detailsComponent :child="props.selectedChild"></detailsComponent>
      </q-tab-panel>

      <q-tab-panel name="graph" class="q-pa-sm">
        <graphComponent :child="props.selectedChild"></graphComponent>
      </q-tab-panel>

      <q-tab-panel name="table" class="q-pa-sm">
        <tableComponent :child="props.selectedChild" @remove-height="removeHeight"></tableComponent>
      </q-tab-panel>
    </q-tab-panels>

    <q-dialog v-model="addHeightDialog">
      <q-card style="
          background: linear-gradient(180deg, #d5e2ff 0%, #f9effc 100%);
          color: #1e1e1e;
          width: 90vw;
        ">
        <q-card-section class="row items-center q-pb-none">
          <div class="text-h6">{{ $t("general.addNewMeasurement") }}</div>
          <q-space />
          <q-btn icon="close" flat round dense v-close-popup />
        </q-card-section>

        <q-card-section>
          <q-input style="width: 100%; margin-bottom: 25px" rounded type="number" outlined v-model="height"
            ref="heightRef" :rules="[(val) => !!val || $t('general.requiredField')]"
            :label="$t('general.heightLabel')" />

          <q-input :color="selectedChild.gender" ref="dateOfBirthRef" rounded outlined v-model="dateOfMeasurement"
            :label="$t('general.dateLabel')" mask="##.##.####." @click="dateOfMeasurementRef.show()"
            :rules="[(val) => !!val || $t('general.requiredField')]">
            <template v-slot:append>
              <q-icon name="event" class="cursor-pointer">
                <q-popup-proxy ref="dateOfMeasurementRef" cover transition-show="scale" transition-hide="scale">
                  <q-date :locale="locale == 'en-US' ? myLocaleEng : myLocaleSrb" :color="selectedChild.gender"
                    v-model="dateOfMeasurement" mask="DD.MM.YYYY." @update:model-value="dateOfMeasurementRef.hide()">
                    <div class="row items-center justify-end">
                      <q-btn v-close-popup label="Close" color="primary" flat />
                    </div>
                  </q-date>
                </q-popup-proxy>
              </q-icon>
            </template>
          </q-input>

          <div class="row">
            <q-btn push class="text-white bg-negative q-mr-sm col" :label="$t('general.cancel')" @click="cancel" />
            <q-btn push class="text-white bg-positive q-ml-sm col" :label="id == null || id == undefined
                ? $t('general.add')
                : $t('general.edit')
              " @click="addMeasurement" />
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
import { useI18n } from "vue-i18n";

export default defineComponent({
  name: "childInformation",
  components: {
    detailsComponent,
    graphComponent,
    tableComponent,
  },
  props: ["selectedChild"],
  setup(props, ctx) {
    const t = useI18n();
    const { locale } = useI18n({ useScope: "global" });
    let router = useRouter();
    const $q = useQuasar();

    const addHeightDialog = ref(false);
    const dateOfMeasurementRef = ref(null);
    const height = ref(null);
    const heightRef = ref(null);
    const dateOfMeasurement = ref(date.formatDate(Date.now(), "DD.MM.YYYY."));
    const selectedTab = ref("details");

    const myLocaleSrb = {
      /* starting with Sunday */
      days: "Nedelja_Ponedeljak_Utorak_Sreda_Četvrtak_Petak_Subota".split("_"),
      daysShort: "Ned_Pon_Uto_Sre_Čet_Pet_Sub".split("_"),
      months:
        "Januar_Februar_Mart_April_Maj_Jun_Jul_Avgust_Septembar_Oktobar_Novembar_Decembar".split(
          "_"
        ),
      monthsShort: "Jan_Feb_Mar_Apr_Maj_Jun_Jul_Avg_Sep_Okt_Nov_Dec".split("_"),
      firstDayOfWeek: 1, // 0-6, 0 - Sunday, 1 Monday, ...
      format24h: true,
      pluralDay: "i",
    };
    const myLocaleEng = {
      /* starting with Sunday */
      days: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split(
        "_"
      ),
      daysShort: "Sun_Mon_Tue_Wed_Thu_Fry_Sat".split("_"),
      months:
        "January_February_March_April_May_Jun_July_August_September_October_November_December".split(
          "_"
        ),
      monthsShort: "Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"),
      firstDayOfWeek: 1, // 0-6, 0 - Sunday, 1 Monday, ...
      format24h: true,
      pluralDay: "i",
    };

    watch(props, (newProps) => {
      // Bad Trick to refresh am5chart..
      // But it works!
      if (
        (selectedTab.value =
          "graph" && props.selectedChild.heightData.length > 0)
      ) {
        selectedTab.value = "nonExistentTab";
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
    });

    function goTo(path) {
      router.push(path);
    }
    function removeHeight(data) {
      ctx.emit("remove-height", data);
    }

    function addMeasurement() {
      if (height.value == null) {
        heightRef.value.validate();
        $q.notify({
          message: t.t("general.allFieldsAreRequired"),
          color: "negative",
          position: "top",
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
      myLocaleSrb,
      myLocaleEng,
      locale,
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
  background: linear-gradient(180deg,
      rgba(117, 158, 255, 0.3) 0%,
      rgba(234, 202, 244, 0.3) 100%);
}
</style>
