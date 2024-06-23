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
      gender="male"
      @add_child="addChild"
      @resetuj-selektovano-dete="resetujSelektovanoDete"
    ></addChildComponent>
  </q-page>
</template>

<script>
import { defineComponent, ref, onMounted, withCtx } from "vue";
import { useRouter } from "vue-router";
import { useQuasar, date } from "quasar";
import addChildComponent from "../components/addChildComponent.vue";
import localforage from "localforage";

export default defineComponent({
  name: "addSon",
  components: {
    addChildComponent,
  },
  props: ["selectedChild"],
  setup(props, ctx) {
    let router = useRouter();

    function addChild(newChild) {
      if (newChild.id != undefined && newChild.id != null)
        ctx.emit("put-child", newChild);
      else ctx.emit("add-child", { ...newChild, gender: "male" });
    }

    function generateDailyHeightData(dateOfBirth) {
      const heightData = [];
      const startDate = date.extractDate(dateOfBirth, "YYYY-MM-DD");
      const endDate = date.addToDate(startDate, { years: 15 });

      let currentDate = startDate;
      let height = Math.floor(Math.random() * 10) + 50; // Random initial height between 50cm and 60cm

      while (date.getDateDiff(endDate, currentDate, "days") >= 0) {
        console.log(1);
        // Generate daily height fluctuation (growth + some noise)
        const dailyGrowth = Math.random() * 0.03 + 0.01; // Between 0.01cm and 0.04cm per day
        height += dailyGrowth;

        heightData.push({
          date: date.formatDate(currentDate, "YYYY-MM-DD"),
          height: parseFloat(height.toFixed(2)), // Keeping height to 2 decimal places
        });

        // Increment the current date by one day
        currentDate = date.addToDate(currentDate, { days: 1 });
      }

      return heightData;
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
