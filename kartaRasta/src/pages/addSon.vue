<template>
  <q-page class="container">
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
        DODAJ DEVOJČICU
      </q-toolbar-title>
    </q-toolbar>
    <addChildComponent
      :selectedChild="props.selectedChild"
      gender="male"
      @add_child="addChild"
    ></addChildComponent>
  </q-page>
</template>

<script>
import { defineComponent, ref, onMounted } from "vue";
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
  setup(props) {
    let router = useRouter();
    const $q = useQuasar();

    const children = ref([]);

    function addChild(newChild) {
      const child = {
        ...newChild,
        id: Date.now(),
        gender: "male",
        heightData: [
          {
            date: "1900-01-01",
            height: 54.03,
          },
          {
            date: "1900-01-02",
            height: 54.06,
          },
          {
            date: "1900-01-03",
            height: 54.08,
          },
          {
            date: "1900-01-04",
            height: 54.1,
          },
          {
            date: "1900-01-05",
            height: 54.12,
          },
          {
            date: "1900-01-06",
            height: 54.15,
          },
          {
            date: "1900-01-07",
            height: 54.19,
          },
          {
            date: "1900-01-08",
            height: 54.21,
          },
          {
            date: "1900-01-09",
            height: 54.22,
          },
          {
            date: "1900-01-10",
            height: 54.26,
          },
          {
            date: "1900-01-11",
            height: 54.29,
          },
          {
            date: "1900-01-12",
            height: 54.33,
          },
          {
            date: "1900-01-13",
            height: 54.37,
          },
          {
            date: "1900-01-14",
            height: 54.38,
          },
          {
            date: "1900-01-15",
            height: 54.42,
          },
          {
            date: "1900-01-16",
            height: 54.45,
          },
          {
            date: "1900-01-17",
            height: 54.47,
          },
          {
            date: "1900-01-18",
            height: 54.5,
          },
          {
            date: "1900-01-19",
            height: 54.53,
          },
          {
            date: "1900-01-20",
            height: 54.55,
          },
          {
            date: "1900-01-21",
            height: 54.58,
          },
          {
            date: "1900-01-22",
            height: 54.61,
          },
          {
            date: "1900-01-23",
            height: 54.65,
          },
          {
            date: "1900-01-24",
            height: 54.66,
          },
          {
            date: "1900-01-25",
            height: 54.68,
          },
          {
            date: "1900-01-26",
            height: 54.7,
          },
          {
            date: "1900-01-27",
            height: 54.71,
          },
          {
            date: "1900-01-28",
            height: 54.73,
          },
          {
            date: "1900-01-29",
            height: 54.76,
          },
          {
            date: "1900-01-30",
            height: 54.78,
          },
          {
            date: "1900-01-31",
            height: 54.82,
          },
          {
            date: "1900-02-01",
            height: 54.85,
          },
          {
            date: "1900-02-02",
            height: 54.87,
          },
          {
            date: "1900-02-03",
            height: 54.9,
          },
          {
            date: "1900-02-04",
            height: 54.94,
          },
          {
            date: "1900-02-05",
            height: 54.97,
          },
          {
            date: "1900-02-06",
            height: 54.98,
          },
          {
            date: "1900-02-07",
            height: 55.01,
          },
          {
            date: "1900-02-08",
            height: 55.03,
          },
          {
            date: "1900-02-09",
            height: 55.04,
          },
          {
            date: "1900-02-10",
            height: 55.08,
          },
          {
            date: "1900-02-11",
            height: 55.1,
          },
          {
            date: "1900-02-12",
            height: 55.14,
          },
          {
            date: "1900-02-13",
            height: 55.17,
          },
          {
            date: "1900-02-14",
            height: 55.2,
          },
          {
            date: "1900-02-15",
            height: 55.21,
          },
          {
            date: "1900-02-16",
            height: 55.23,
          },
          {
            date: "1900-02-17",
            height: 55.25,
          },
          {
            date: "1900-02-18",
            height: 55.29,
          },
          {
            date: "1900-02-19",
            height: 55.31,
          },
          {
            date: "1900-02-20",
            height: 55.32,
          },
          {
            date: "1900-02-21",
            height: 55.34,
          },
          {
            date: "1900-02-22",
            height: 55.37,
          },
          {
            date: "1900-02-23",
            height: 55.4,
          },
          {
            date: "1900-02-24",
            height: 55.44,
          },
          {
            date: "1900-02-25",
            height: 55.48,
          },
          {
            date: "1900-02-26",
            height: 55.49,
          },
          {
            date: "1900-02-27",
            height: 55.52,
          },
          {
            date: "1900-02-28",
            height: 55.56,
          },
          {
            date: "1900-03-01",
            height: 55.58,
          },
          {
            date: "1900-03-02",
            height: 55.6,
          },
          {
            date: "1900-03-03",
            height: 55.62,
          },
          {
            date: "1900-03-04",
            height: 55.63,
          },
          {
            date: "1900-03-05",
            height: 55.67,
          },
          {
            date: "1900-03-06",
            height: 55.71,
          },
          {
            date: "1900-03-07",
            height: 55.72,
          },
          {
            date: "1900-03-08",
            height: 55.76,
          },
          {
            date: "1900-03-09",
            height: 55.79,
          },
          {
            date: "1900-03-10",
            height: 55.83,
          },
          {
            date: "1900-03-11",
            height: 55.86,
          },
          {
            date: "1900-03-12",
            height: 55.89,
          },
          {
            date: "1900-03-13",
            height: 55.9,
          },
          {
            date: "1900-03-14",
            height: 55.92,
          },
          {
            date: "1900-03-15",
            height: 55.95,
          },
          {
            date: "1900-03-16",
            height: 55.97,
          },
          {
            date: "1900-03-17",
            height: 55.99,
          },
          {
            date: "1900-03-18",
            height: 56.01,
          },
          {
            date: "1900-03-19",
            height: 56.04,
          },
          {
            date: "1900-03-20",
            height: 56.06,
          },
          {
            date: "1900-03-21",
            height: 56.09,
          },
          {
            date: "1900-03-22",
            height: 56.11,
          },
          {
            date: "1900-03-23",
            height: 56.13,
          },
          {
            date: "1900-03-24",
            height: 56.16,
          },
          {
            date: "1900-03-25",
            height: 56.17,
          },
          {
            date: "1900-03-26",
            height: 56.19,
          },
          {
            date: "1900-03-27",
            height: 56.23,
          },
          {
            date: "1900-03-28",
            height: 56.24,
          },
          {
            date: "1900-03-29",
            height: 56.27,
          },
          {
            date: "1900-03-30",
            height: 56.29,
          },
          {
            date: "1900-03-31",
            height: 56.3,
          },
          {
            date: "1900-04-01",
            height: 56.34,
          },
          {
            date: "1900-04-02",
            height: 56.36,
          },
          {
            date: "1900-04-03",
            height: 56.39,
          },
          {
            date: "1900-04-04",
            height: 56.41,
          },
          {
            date: "1900-04-05",
            height: 56.44,
          },
          {
            date: "1900-04-06",
            height: 56.45,
          },
          {
            date: "1900-04-07",
            height: 56.48,
          },
          {
            date: "1900-04-08",
            height: 56.49,
          },
          {
            date: "1900-04-09",
            height: 56.51,
          },
          {
            date: "1900-04-10",
            height: 56.54,
          },
          {
            date: "1900-04-11",
            height: 56.57,
          },
          {
            date: "1900-04-12",
            height: 56.61,
          },
          {
            date: "1900-04-13",
            height: 56.62,
          },
          {
            date: "1900-04-14",
            height: 56.64,
          },
          {
            date: "1900-04-15",
            height: 56.66,
          },
          {
            date: "1900-04-16",
            height: 56.7,
          },
          {
            date: "1900-04-17",
            height: 56.73,
          },
          {
            date: "1900-04-18",
            height: 56.75,
          },
          {
            date: "1900-04-19",
            height: 56.77,
          },
          {
            date: "1900-04-20",
            height: 56.79,
          },
          {
            date: "1900-04-21",
            height: 56.82,
          },
          {
            date: "1900-04-22",
            height: 56.84,
          },
          {
            date: "1900-04-23",
            height: 56.86,
          },
          {
            date: "1900-04-24",
            height: 56.88,
          },
          {
            date: "1900-04-25",
            height: 56.92,
          },
          {
            date: "1900-04-26",
            height: 56.94,
          },
          {
            date: "1900-04-27",
            height: 56.96,
          },
          {
            date: "1900-04-28",
            height: 57,
          },
          {
            date: "1900-04-29",
            height: 57.01,
          },
          {
            date: "1900-04-30",
            height: 57.03,
          },
          {
            date: "1900-05-01",
            height: 57.05,
          },
          {
            date: "1900-05-02",
            height: 57.08,
          },
          {
            date: "1900-05-03",
            height: 57.11,
          },
          {
            date: "1900-05-04",
            height: 57.13,
          },
          {
            date: "1900-05-05",
            height: 57.16,
          },
          {
            date: "1900-05-06",
            height: 57.19,
          },
          {
            date: "1900-05-07",
            height: 57.22,
          },
          {
            date: "1900-05-08",
            height: 57.25,
          },
          {
            date: "1900-05-09",
            height: 57.28,
          },
          {
            date: "1900-05-10",
            height: 57.31,
          },
          {
            date: "1900-05-11",
            height: 57.33,
          },
          {
            date: "1900-05-12",
            height: 57.35,
          },
          {
            date: "1900-05-13",
            height: 57.38,
          },
          {
            date: "1900-05-14",
            height: 57.42,
          },
          {
            date: "1900-05-15",
            height: 57.43,
          },
          {
            date: "1900-05-16",
            height: 57.47,
          },
          {
            date: "1900-05-17",
            height: 57.5,
          },
          {
            date: "1900-05-18",
            height: 57.52,
          },
          {
            date: "1900-05-19",
            height: 57.53,
          },
          {
            date: "1900-05-20",
            height: 57.56,
          },
          {
            date: "1900-05-21",
            height: 57.57,
          },
          {
            date: "1900-05-22",
            height: 57.61,
          },
          {
            date: "1900-05-23",
            height: 57.64,
          },
          {
            date: "1900-05-24",
            height: 57.67,
          },
          {
            date: "1900-05-25",
            height: 57.7,
          },
          {
            date: "1900-05-26",
            height: 57.71,
          },
          {
            date: "1900-05-27",
            height: 57.73,
          },
          {
            date: "1900-05-28",
            height: 57.74,
          },
          {
            date: "1900-05-29",
            height: 57.76,
          },
          {
            date: "1900-05-30",
            height: 57.79,
          },
          {
            date: "1900-05-31",
            height: 57.81,
          },
          {
            date: "1900-06-01",
            height: 57.84,
          },
          {
            date: "1900-06-02",
            height: 57.88,
          },
          {
            date: "1900-06-03",
            height: 57.9,
          },
          {
            date: "1900-06-04",
            height: 57.91,
          },
          {
            date: "1900-06-05",
            height: 57.94,
          },
          {
            date: "1900-06-06",
            height: 57.96,
          },
          {
            date: "1900-06-07",
            height: 57.97,
          },
          {
            date: "1900-06-08",
            height: 58,
          },
          {
            date: "1900-06-09",
            height: 58.04,
          },
          {
            date: "1900-06-10",
            height: 58.07,
          },
          {
            date: "1900-06-11",
            height: 58.09,
          },
          {
            date: "1900-06-12",
            height: 58.11,
          },
          {
            date: "1900-06-13",
            height: 58.13,
          },
          {
            date: "1900-06-14",
            height: 58.16,
          },
          {
            date: "1900-06-15",
            height: 58.17,
          },
          {
            date: "1900-06-16",
            height: 58.18,
          },
          {
            date: "1900-06-17",
            height: 58.21,
          },
          {
            date: "1900-06-18",
            height: 58.22,
          },
          {
            date: "1900-06-19",
            height: 58.25,
          },
          {
            date: "1900-06-20",
            height: 58.29,
          },
          {
            date: "1900-06-21",
            height: 58.32,
          },
          {
            date: "1900-06-22",
            height: 58.34,
          },
          {
            date: "1900-06-23",
            height: 58.36,
          },
          {
            date: "1900-06-24",
            height: 58.39,
          },
          {
            date: "1900-06-25",
            height: 58.43,
          },
          {
            date: "1900-06-26",
            height: 58.47,
          },
          {
            date: "1900-06-27",
            height: 58.49,
          },
          {
            date: "1900-06-28",
            height: 58.5,
          },
          {
            date: "1900-06-29",
            height: 58.54,
          },
          {
            date: "1900-06-30",
            height: 58.56,
          },
          {
            date: "1900-07-01",
            height: 58.6,
          },
          {
            date: "1900-07-02",
            height: 58.62,
          },
          {
            date: "1900-07-03",
            height: 58.64,
          },
          {
            date: "1900-07-04",
            height: 58.66,
          },
          {
            date: "1900-07-05",
            height: 58.69,
          },
          {
            date: "1900-07-06",
            height: 58.71,
          },
          {
            date: "1900-07-07",
            height: 58.72,
          },
          {
            date: "1900-07-08",
            height: 58.75,
          },
          {
            date: "1900-07-09",
            height: 58.78,
          },
          {
            date: "1900-07-10",
            height: 58.79,
          },
          {
            date: "1900-07-11",
            height: 58.82,
          },
          {
            date: "1900-07-12",
            height: 58.85,
          },
          {
            date: "1900-07-13",
            height: 58.87,
          },
          {
            date: "1900-07-14",
            height: 58.88,
          },
          {
            date: "1900-07-15",
            height: 58.92,
          },
          {
            date: "1900-07-16",
            height: 58.94,
          },
          {
            date: "1900-07-17",
            height: 58.97,
          },
          {
            date: "1900-07-18",
            height: 59,
          },
          {
            date: "1900-07-19",
            height: 59.03,
          },
          {
            date: "1900-07-20",
            height: 59.06,
          },
          {
            date: "1900-07-21",
            height: 59.08,
          },
          {
            date: "1900-07-22",
            height: 59.12,
          },
          {
            date: "1900-07-23",
            height: 59.14,
          },
          {
            date: "1900-07-24",
            height: 59.17,
          },
          {
            date: "1900-07-25",
            height: 59.19,
          },
          {
            date: "1900-07-26",
            height: 59.22,
          },
          {
            date: "1900-07-27",
            height: 59.24,
          },
          {
            date: "1900-07-28",
            height: 59.25,
          },
          {
            date: "1900-07-29",
            height: 59.28,
          },
          {
            date: "1900-07-30",
            height: 59.32,
          },
          {
            date: "1900-07-31",
            height: 59.33,
          },
          {
            date: "1900-08-01",
            height: 59.35,
          },
          {
            date: "1900-08-02",
            height: 59.37,
          },
          {
            date: "1900-08-03",
            height: 59.4,
          },
          {
            date: "1900-08-04",
            height: 59.42,
          },
          {
            date: "1900-08-05",
            height: 59.46,
          },
          {
            date: "1900-08-06",
            height: 59.48,
          },
          {
            date: "1900-08-07",
            height: 59.5,
          },
          {
            date: "1900-08-08",
            height: 59.54,
          },
          {
            date: "1900-08-09",
            height: 59.57,
          },
          {
            date: "1900-08-10",
            height: 59.59,
          },
          {
            date: "1900-08-11",
            height: 59.62,
          },
          {
            date: "1900-08-12",
            height: 59.64,
          },
          {
            date: "1900-08-13",
            height: 59.66,
          },
          {
            date: "1900-08-14",
            height: 59.68,
          },
          {
            date: "1900-08-15",
            height: 59.7,
          },
          {
            date: "1900-08-16",
            height: 59.72,
          },
          {
            date: "1900-08-17",
            height: 59.73,
          },
          {
            date: "1900-08-18",
            height: 59.76,
          },
          {
            date: "1900-08-19",
            height: 59.8,
          },
          {
            date: "1900-08-20",
            height: 59.83,
          },
          {
            date: "1900-08-21",
            height: 59.85,
          },
          {
            date: "1900-08-22",
            height: 59.86,
          },
          {
            date: "1900-08-23",
            height: 59.88,
          },
          {
            date: "1900-08-24",
            height: 59.91,
          },
          {
            date: "1900-08-25",
            height: 59.92,
          },
          {
            date: "1900-08-26",
            height: 59.94,
          },
          {
            date: "1900-08-27",
            height: 59.96,
          },
          {
            date: "1900-08-28",
            height: 59.99,
          },
          {
            date: "1900-08-29",
            height: 60.02,
          },
          {
            date: "1900-08-30",
            height: 60.05,
          },
          {
            date: "1900-08-31",
            height: 60.07,
          },
          {
            date: "1900-09-01",
            height: 60.11,
          },
          {
            date: "1900-09-02",
            height: 60.14,
          },
          {
            date: "1900-09-03",
            height: 60.16,
          },
          {
            date: "1900-09-04",
            height: 60.2,
          },
          {
            date: "1900-09-05",
            height: 60.22,
          },
          {
            date: "1900-09-06",
            height: 60.23,
          },
          {
            date: "1900-09-07",
            height: 60.26,
          },
          {
            date: "1900-09-08",
            height: 60.28,
          },
          {
            date: "1900-09-09",
            height: 60.31,
          },
          {
            date: "1900-09-10",
            height: 60.34,
          },
          {
            date: "1900-09-11",
            height: 60.37,
          },
          {
            date: "1900-09-12",
            height: 60.38,
          },
          {
            date: "1900-09-13",
            height: 60.41,
          },
          {
            date: "1900-09-14",
            height: 60.44,
          },
          {
            date: "1900-09-15",
            height: 60.46,
          },
          {
            date: "1900-09-16",
            height: 60.49,
          },
          {
            date: "1900-09-17",
            height: 60.51,
          },
          {
            date: "1900-09-18",
            height: 60.54,
          },
          {
            date: "1900-09-19",
            height: 60.56,
          },
          {
            date: "1900-09-20",
            height: 60.58,
          },
          {
            date: "1900-09-21",
            height: 60.62,
          },
          {
            date: "1900-09-22",
            height: 60.64,
          },
          {
            date: "1900-09-23",
            height: 60.66,
          },
          {
            date: "1900-09-24",
            height: 60.68,
          },
          {
            date: "1900-09-25",
            height: 60.69,
          },
          {
            date: "1900-09-26",
            height: 60.71,
          },
          {
            date: "1900-09-27",
            height: 60.72,
          },
          {
            date: "1900-09-28",
            height: 60.74,
          },
          {
            date: "1900-09-29",
            height: 60.77,
          },
          {
            date: "1900-09-30",
            height: 60.81,
          },
          {
            date: "1900-10-01",
            height: 60.82,
          },
          {
            date: "1900-10-02",
            height: 60.86,
          },
          {
            date: "1900-10-03",
            height: 60.89,
          },
          {
            date: "1900-10-04",
            height: 60.93,
          },
          {
            date: "1900-10-05",
            height: 60.97,
          },
          {
            date: "1900-10-06",
            height: 60.98,
          },
          {
            date: "1900-10-07",
            height: 61.02,
          },
          {
            date: "1900-10-08",
            height: 61.04,
          },
          {
            date: "1900-10-09",
            height: 61.07,
          },
          {
            date: "1900-10-10",
            height: 61.1,
          },
          {
            date: "1900-10-11",
            height: 61.14,
          },
          {
            date: "1900-10-12",
            height: 61.17,
          },
          {
            date: "1900-10-13",
            height: 61.2,
          },
          {
            date: "1900-10-14",
            height: 61.22,
          },
          {
            date: "1900-10-15",
            height: 61.23,
          },
          {
            date: "1900-10-16",
            height: 61.24,
          },
          {
            date: "1900-10-17",
            height: 61.26,
          },
          {
            date: "1900-10-18",
            height: 61.28,
          },
          {
            date: "1900-10-19",
            height: 61.32,
          },
          {
            date: "1900-10-20",
            height: 61.35,
          },
          {
            date: "1900-10-21",
            height: 61.38,
          },
          {
            date: "1900-10-22",
            height: 61.41,
          },
          {
            date: "1900-10-23",
            height: 61.45,
          },
          {
            date: "1900-10-24",
            height: 61.47,
          },
          {
            date: "1900-10-25",
            height: 61.49,
          },
          {
            date: "1900-10-26",
            height: 61.5,
          },
          {
            date: "1900-10-27",
            height: 61.53,
          },
          {
            date: "1900-10-28",
            height: 61.54,
          },
          {
            date: "1900-10-29",
            height: 61.57,
          },
          {
            date: "1900-10-30",
            height: 61.58,
          },
          {
            date: "1900-10-31",
            height: 61.61,
          },
          {
            date: "1900-11-01",
            height: 61.63,
          },
          {
            date: "1900-11-02",
            height: 61.65,
          },
          {
            date: "1900-11-03",
            height: 61.68,
          },
          {
            date: "1900-11-04",
            height: 61.7,
          },
          {
            date: "1900-11-05",
            height: 61.73,
          },
          {
            date: "1900-11-06",
            height: 61.75,
          },
          {
            date: "1900-11-07",
            height: 61.76,
          },
          {
            date: "1900-11-08",
            height: 61.8,
          },
          {
            date: "1900-11-09",
            height: 61.84,
          },
          {
            date: "1900-11-10",
            height: 61.85,
          },
          {
            date: "1900-11-11",
            height: 61.89,
          },
          {
            date: "1900-11-12",
            height: 61.92,
          },
          {
            date: "1900-11-13",
            height: 61.95,
          },
          {
            date: "1900-11-14",
            height: 61.98,
          },
          {
            date: "1900-11-15",
            height: 61.99,
          },
          {
            date: "1900-11-16",
            height: 62.01,
          },
          {
            date: "1900-11-17",
            height: 62.03,
          },
          {
            date: "1900-11-18",
            height: 62.05,
          },
          {
            date: "1900-11-19",
            height: 62.08,
          },
          {
            date: "1900-11-20",
            height: 62.1,
          },
          {
            date: "1900-11-21",
            height: 62.13,
          },
          {
            date: "1900-11-22",
            height: 62.14,
          },
          {
            date: "1900-11-23",
            height: 62.18,
          },
          {
            date: "1900-11-24",
            height: 62.2,
          },
          {
            date: "1900-11-25",
            height: 62.24,
          },
          {
            date: "1900-11-26",
            height: 62.26,
          },
          {
            date: "1900-11-27",
            height: 62.29,
          },
          {
            date: "1900-11-28",
            height: 62.31,
          },
          {
            date: "1900-11-29",
            height: 62.33,
          },
          {
            date: "1900-11-30",
            height: 62.35,
          },
          {
            date: "1900-12-01",
            height: 62.37,
          },
          {
            date: "1900-12-02",
            height: 62.4,
          },
          {
            date: "1900-12-03",
            height: 62.43,
          },
          {
            date: "1900-12-04",
            height: 62.44,
          },
          {
            date: "1900-12-05",
            height: 62.46,
          },
          {
            date: "1900-12-06",
            height: 62.5,
          },
          {
            date: "1900-12-07",
            height: 62.52,
          },
          {
            date: "1900-12-08",
            height: 62.54,
          },
          {
            date: "1900-12-09",
            height: 62.56,
          },
          {
            date: "1900-12-10",
            height: 62.59,
          },
          {
            date: "1900-12-11",
            height: 62.63,
          },
          {
            date: "1900-12-12",
            height: 62.64,
          },
          {
            date: "1900-12-13",
            height: 62.65,
          },
          {
            date: "1900-12-14",
            height: 62.69,
          },
          {
            date: "1900-12-15",
            height: 62.7,
          },
          {
            date: "1900-12-16",
            height: 62.73,
          },
          {
            date: "1900-12-17",
            height: 62.75,
          },
          {
            date: "1900-12-18",
            height: 62.79,
          },
          {
            date: "1900-12-19",
            height: 62.81,
          },
          {
            date: "1900-12-20",
            height: 62.85,
          },
          {
            date: "1900-12-21",
            height: 62.86,
          },
          {
            date: "1900-12-22",
            height: 62.89,
          },
          {
            date: "1900-12-23",
            height: 62.92,
          },
          {
            date: "1900-12-24",
            height: 62.94,
          },
          {
            date: "1900-12-25",
            height: 62.97,
          },
          {
            date: "1900-12-26",
            height: 62.99,
          },
          {
            date: "1900-12-27",
            height: 63.02,
          },
          {
            date: "1900-12-28",
            height: 63.04,
          },
          {
            date: "1900-12-29",
            height: 63.06,
          },
          {
            date: "1900-12-30",
            height: 63.09,
          },
          {
            date: "1900-12-31",
            height: 63.11,
          },
          {
            date: "1901-01-01",
            height: 63.14,
          },
          {
            date: "1901-01-02",
            height: 63.17,
          },
          {
            date: "1901-01-03",
            height: 63.19,
          },
          {
            date: "1901-01-04",
            height: 63.22,
          },
          {
            date: "1901-01-05",
            height: 63.23,
          },
          {
            date: "1901-01-06",
            height: 63.27,
          },
          {
            date: "1901-01-07",
            height: 63.3,
          },
          {
            date: "1901-01-08",
            height: 63.32,
          },
          {
            date: "1901-01-09",
            height: 63.35,
          },
          {
            date: "1901-01-10",
            height: 63.37,
          },
          {
            date: "1901-01-11",
            height: 63.41,
          },
          {
            date: "1901-01-12",
            height: 63.43,
          },
          {
            date: "1901-01-13",
            height: 63.46,
          },
          {
            date: "1901-01-14",
            height: 63.48,
          },
          {
            date: "1901-01-15",
            height: 63.49,
          },
          {
            date: "1901-01-16",
            height: 63.5,
          },
          {
            date: "1901-01-17",
            height: 63.51,
          },
          {
            date: "1901-01-18",
            height: 63.54,
          },
          {
            date: "1901-01-19",
            height: 63.56,
          },
          {
            date: "1901-01-20",
            height: 63.6,
          },
          {
            date: "1901-01-21",
            height: 63.62,
          },
          {
            date: "1901-01-22",
            height: 63.66,
          },
          {
            date: "1901-01-23",
            height: 63.68,
          },
          {
            date: "1901-01-24",
            height: 63.71,
          },
          {
            date: "1901-01-25",
            height: 63.74,
          },
          {
            date: "1901-01-26",
            height: 63.78,
          },
          {
            date: "1901-01-27",
            height: 63.81,
          },
          {
            date: "1901-01-28",
            height: 63.84,
          },
          {
            date: "1901-01-29",
            height: 63.87,
          },
          {
            date: "1901-01-30",
            height: 63.9,
          },
          {
            date: "1901-01-31",
            height: 63.92,
          },
          {
            date: "1901-02-01",
            height: 63.95,
          },
          {
            date: "1901-02-02",
            height: 63.99,
          },
          {
            date: "1901-02-03",
            height: 64.03,
          },
          {
            date: "1901-02-04",
            height: 64.05,
          },
          {
            date: "1901-02-05",
            height: 64.07,
          },
          {
            date: "1901-02-06",
            height: 64.1,
          },
          {
            date: "1901-02-07",
            height: 64.12,
          },
          {
            date: "1901-02-08",
            height: 64.16,
          },
          {
            date: "1901-02-09",
            height: 64.17,
          },
          {
            date: "1901-02-10",
            height: 64.21,
          },
          {
            date: "1901-02-11",
            height: 64.25,
          },
          {
            date: "1901-02-12",
            height: 64.28,
          },
          {
            date: "1901-02-13",
            height: 64.3,
          },
          {
            date: "1901-02-14",
            height: 64.32,
          },
          {
            date: "1901-02-15",
            height: 64.33,
          },
          {
            date: "1901-02-16",
            height: 64.36,
          },
          {
            date: "1901-02-17",
            height: 64.4,
          },
          {
            date: "1901-02-18",
            height: 64.41,
          },
          {
            date: "1901-02-19",
            height: 64.44,
          },
          {
            date: "1901-02-20",
            height: 64.48,
          },
          {
            date: "1901-02-21",
            height: 64.49,
          },
          {
            date: "1901-02-22",
            height: 64.5,
          },
          {
            date: "1901-02-23",
            height: 64.54,
          },
          {
            date: "1901-02-24",
            height: 64.55,
          },
          {
            date: "1901-02-25",
            height: 64.58,
          },
          {
            date: "1901-02-26",
            height: 64.59,
          },
          {
            date: "1901-02-27",
            height: 64.62,
          },
          {
            date: "1901-02-28",
            height: 64.64,
          },
          {
            date: "1901-03-01",
            height: 64.66,
          },
          {
            date: "1901-03-02",
            height: 64.68,
          },
          {
            date: "1901-03-03",
            height: 64.71,
          },
          {
            date: "1901-03-04",
            height: 64.73,
          },
          {
            date: "1901-03-05",
            height: 64.77,
          },
          {
            date: "1901-03-06",
            height: 64.79,
          },
          {
            date: "1901-03-07",
            height: 64.82,
          },
          {
            date: "1901-03-08",
            height: 64.84,
          },
          {
            date: "1901-03-09",
            height: 64.88,
          },
          {
            date: "1901-03-10",
            height: 64.89,
          },
          {
            date: "1901-03-11",
            height: 64.92,
          },
          {
            date: "1901-03-12",
            height: 64.94,
          },
          {
            date: "1901-03-13",
            height: 64.97,
          },
          {
            date: "1901-03-14",
            height: 65.01,
          },
          {
            date: "1901-03-15",
            height: 65.04,
          },
          {
            date: "1901-03-16",
            height: 65.06,
          },
          {
            date: "1901-03-17",
            height: 65.09,
          },
          {
            date: "1901-03-18",
            height: 65.1,
          },
          {
            date: "1901-03-19",
            height: 65.12,
          },
          {
            date: "1901-03-20",
            height: 65.16,
          },
          {
            date: "1901-03-21",
            height: 65.18,
          },
          {
            date: "1901-03-22",
            height: 65.22,
          },
          {
            date: "1901-03-23",
            height: 65.23,
          },
          {
            date: "1901-03-24",
            height: 65.26,
          },
          {
            date: "1901-03-25",
            height: 65.29,
          },
          {
            date: "1901-03-26",
            height: 65.33,
          },
          {
            date: "1901-03-27",
            height: 65.36,
          },
          {
            date: "1901-03-28",
            height: 65.4,
          },
          {
            date: "1901-03-29",
            height: 65.41,
          },
          {
            date: "1901-03-30",
            height: 65.44,
          },
          {
            date: "1901-03-31",
            height: 65.47,
          },
          {
            date: "1901-04-01",
            height: 65.48,
          },
          {
            date: "1901-04-02",
            height: 65.52,
          },
          {
            date: "1901-04-03",
            height: 65.55,
          },
          {
            date: "1901-04-04",
            height: 65.57,
          },
          {
            date: "1901-04-05",
            height: 65.58,
          },
          {
            date: "1901-04-06",
            height: 65.62,
          },
          {
            date: "1901-04-07",
            height: 65.65,
          },
          {
            date: "1901-04-08",
            height: 65.68,
          },
          {
            date: "1901-04-09",
            height: 65.7,
          },
          {
            date: "1901-04-10",
            height: 65.72,
          },
          {
            date: "1901-04-11",
            height: 65.76,
          },
          {
            date: "1901-04-12",
            height: 65.78,
          },
          {
            date: "1901-04-13",
            height: 65.81,
          },
          {
            date: "1901-04-14",
            height: 65.84,
          },
          {
            date: "1901-04-15",
            height: 65.86,
          },
          {
            date: "1901-04-16",
            height: 65.87,
          },
          {
            date: "1901-04-17",
            height: 65.9,
          },
          {
            date: "1901-04-18",
            height: 65.91,
          },
          {
            date: "1901-04-19",
            height: 65.93,
          },
          {
            date: "1901-04-20",
            height: 65.95,
          },
          {
            date: "1901-04-21",
            height: 65.99,
          },
          {
            date: "1901-04-22",
            height: 66.02,
          },
          {
            date: "1901-04-23",
            height: 66.04,
          },
          {
            date: "1901-04-24",
            height: 66.06,
          },
          {
            date: "1901-04-25",
            height: 66.09,
          },
          {
            date: "1901-04-26",
            height: 66.1,
          },
          {
            date: "1901-04-27",
            height: 66.13,
          },
          {
            date: "1901-04-28",
            height: 66.14,
          },
          {
            date: "1901-04-29",
            height: 66.16,
          },
          {
            date: "1901-04-30",
            height: 66.17,
          },
          {
            date: "1901-05-01",
            height: 66.21,
          },
          {
            date: "1901-05-02",
            height: 66.23,
          },
          {
            date: "1901-05-03",
            height: 66.26,
          },
          {
            date: "1901-05-04",
            height: 66.29,
          },
          {
            date: "1901-05-05",
            height: 66.31,
          },
          {
            date: "1901-05-06",
            height: 66.32,
          },
          {
            date: "1901-05-07",
            height: 66.35,
          },
          {
            date: "1901-05-08",
            height: 66.37,
          },
          {
            date: "1901-05-09",
            height: 66.41,
          },
          {
            date: "1901-05-10",
            height: 66.45,
          },
          {
            date: "1901-05-11",
            height: 66.46,
          },
          {
            date: "1901-05-12",
            height: 66.48,
          },
          {
            date: "1901-05-13",
            height: 66.5,
          },
          {
            date: "1901-05-14",
            height: 66.53,
          },
          {
            date: "1901-05-15",
            height: 66.56,
          },
          {
            date: "1901-05-16",
            height: 66.57,
          },
          {
            date: "1901-05-17",
            height: 66.61,
          },
          {
            date: "1901-05-18",
            height: 66.65,
          },
          {
            date: "1901-05-19",
            height: 66.68,
          },
          {
            date: "1901-05-20",
            height: 66.7,
          },
          {
            date: "1901-05-21",
            height: 66.71,
          },
          {
            date: "1901-05-22",
            height: 66.74,
          },
          {
            date: "1901-05-23",
            height: 66.77,
          },
          {
            date: "1901-05-24",
            height: 66.81,
          },
          {
            date: "1901-05-25",
            height: 66.82,
          },
          {
            date: "1901-05-26",
            height: 66.84,
          },
          {
            date: "1901-05-27",
            height: 66.86,
          },
          {
            date: "1901-05-28",
            height: 66.88,
          },
          {
            date: "1901-05-29",
            height: 66.92,
          },
          {
            date: "1901-05-30",
            height: 66.95,
          },
          {
            date: "1901-05-31",
            height: 66.96,
          },
          {
            date: "1901-06-01",
            height: 67,
          },
          {
            date: "1901-06-02",
            height: 67.04,
          },
          {
            date: "1901-06-03",
            height: 67.06,
          },
          {
            date: "1901-06-04",
            height: 67.09,
          },
          {
            date: "1901-06-05",
            height: 67.11,
          },
          {
            date: "1901-06-06",
            height: 67.15,
          },
          {
            date: "1901-06-07",
            height: 67.16,
          },
          {
            date: "1901-06-08",
            height: 67.19,
          },
          {
            date: "1901-06-09",
            height: 67.22,
          },
          {
            date: "1901-06-10",
            height: 67.24,
          },
          {
            date: "1901-06-11",
            height: 67.26,
          },
          {
            date: "1901-06-12",
            height: 67.29,
          },
          {
            date: "1901-06-13",
            height: 67.32,
          },
          {
            date: "1901-06-14",
            height: 67.35,
          },
          {
            date: "1901-06-15",
            height: 67.36,
          },
          {
            date: "1901-06-16",
            height: 67.4,
          },
          {
            date: "1901-06-17",
            height: 67.42,
          },
          {
            date: "1901-06-18",
            height: 67.44,
          },
          {
            date: "1901-06-19",
            height: 67.46,
          },
          {
            date: "1901-06-20",
            height: 67.5,
          },
          {
            date: "1901-06-21",
            height: 67.53,
          },
          {
            date: "1901-06-22",
            height: 67.55,
          },
          {
            date: "1901-06-23",
            height: 67.56,
          },
          {
            date: "1901-06-24",
            height: 67.57,
          },
          {
            date: "1901-06-25",
            height: 67.59,
          },
          {
            date: "1901-06-26",
            height: 67.61,
          },
          {
            date: "1901-06-27",
            height: 67.64,
          },
          {
            date: "1901-06-28",
            height: 67.68,
          },
          {
            date: "1901-06-29",
            height: 67.71,
          },
          {
            date: "1901-06-30",
            height: 67.74,
          },
          {
            date: "1901-07-01",
            height: 67.76,
          },
          {
            date: "1901-07-02",
            height: 67.78,
          },
          {
            date: "1901-07-03",
            height: 67.8,
          },
          {
            date: "1901-07-04",
            height: 67.82,
          },
          {
            date: "1901-07-05",
            height: 67.84,
          },
          {
            date: "1901-07-06",
            height: 67.86,
          },
          {
            date: "1901-07-07",
            height: 67.89,
          },
          {
            date: "1901-07-08",
            height: 67.91,
          },
          {
            date: "1901-07-09",
            height: 67.95,
          },
          {
            date: "1901-07-10",
            height: 67.98,
          },
          {
            date: "1901-07-11",
            height: 68.01,
          },
          {
            date: "1901-07-12",
            height: 68.05,
          },
          {
            date: "1901-07-13",
            height: 68.06,
          },
          {
            date: "1901-07-14",
            height: 68.09,
          },
          {
            date: "1901-07-15",
            height: 68.11,
          },
          {
            date: "1901-07-16",
            height: 68.14,
          },
          {
            date: "1901-07-17",
            height: 68.18,
          },
          {
            date: "1901-07-18",
            height: 68.19,
          },
          {
            date: "1901-07-19",
            height: 68.21,
          },
          {
            date: "1901-07-20",
            height: 68.23,
          },
          {
            date: "1901-07-21",
            height: 68.25,
          },
          {
            date: "1901-07-22",
            height: 68.28,
          },
          {
            date: "1901-07-23",
            height: 68.31,
          },
          {
            date: "1901-07-24",
            height: 68.34,
          },
          {
            date: "1901-07-25",
            height: 68.36,
          },
          {
            date: "1901-07-26",
            height: 68.37,
          },
          {
            date: "1901-07-27",
            height: 68.4,
          },
          {
            date: "1901-07-28",
            height: 68.43,
          },
          {
            date: "1901-07-29",
            height: 68.44,
          },
          {
            date: "1901-07-30",
            height: 68.48,
          },
          {
            date: "1901-07-31",
            height: 68.5,
          },
          {
            date: "1901-08-01",
            height: 68.53,
          },
          {
            date: "1901-08-02",
            height: 68.55,
          },
          {
            date: "1901-08-03",
            height: 68.59,
          },
          {
            date: "1901-08-04",
            height: 68.62,
          },
          {
            date: "1901-08-05",
            height: 68.65,
          },
          {
            date: "1901-08-06",
            height: 68.68,
          },
          {
            date: "1901-08-07",
            height: 68.7,
          },
          {
            date: "1901-08-08",
            height: 68.73,
          },
          {
            date: "1901-08-09",
            height: 68.75,
          },
          {
            date: "1901-08-10",
            height: 68.79,
          },
          {
            date: "1901-08-11",
            height: 68.81,
          },
          {
            date: "1901-08-12",
            height: 68.84,
          },
          {
            date: "1901-08-13",
            height: 68.88,
          },
          {
            date: "1901-08-14",
            height: 68.9,
          },
          {
            date: "1901-08-15",
            height: 68.92,
          },
          {
            date: "1901-08-16",
            height: 68.95,
          },
          {
            date: "1901-08-17",
            height: 68.96,
          },
          {
            date: "1901-08-18",
            height: 68.99,
          },
          {
            date: "1901-08-19",
            height: 69.01,
          },
          {
            date: "1901-08-20",
            height: 69.04,
          },
          {
            date: "1901-08-21",
            height: 69.08,
          },
          {
            date: "1901-08-22",
            height: 69.12,
          },
          {
            date: "1901-08-23",
            height: 69.14,
          },
          {
            date: "1901-08-24",
            height: 69.18,
          },
          {
            date: "1901-08-25",
            height: 69.21,
          },
          {
            date: "1901-08-26",
            height: 69.23,
          },
          {
            date: "1901-08-27",
            height: 69.27,
          },
          {
            date: "1901-08-28",
            height: 69.3,
          },
          {
            date: "1901-08-29",
            height: 69.33,
          },
          {
            date: "1901-08-30",
            height: 69.36,
          },
          {
            date: "1901-08-31",
            height: 69.38,
          },
          {
            date: "1901-09-01",
            height: 69.41,
          },
          {
            date: "1901-09-02",
            height: 69.44,
          },
          {
            date: "1901-09-03",
            height: 69.46,
          },
          {
            date: "1901-09-04",
            height: 69.48,
          },
          {
            date: "1901-09-05",
            height: 69.51,
          },
          {
            date: "1901-09-06",
            height: 69.55,
          },
          {
            date: "1901-09-07",
            height: 69.57,
          },
          {
            date: "1901-09-08",
            height: 69.59,
          },
          {
            date: "1901-09-09",
            height: 69.6,
          },
          {
            date: "1901-09-10",
            height: 69.63,
          },
          {
            date: "1901-09-11",
            height: 69.65,
          },
          {
            date: "1901-09-12",
            height: 69.68,
          },
          {
            date: "1901-09-13",
            height: 69.71,
          },
          {
            date: "1901-09-14",
            height: 69.74,
          },
          {
            date: "1901-09-15",
            height: 69.77,
          },
          {
            date: "1901-09-16",
            height: 69.8,
          },
          {
            date: "1901-09-17",
            height: 69.83,
          },
          {
            date: "1901-09-18",
            height: 69.85,
          },
          {
            date: "1901-09-19",
            height: 69.87,
          },
          {
            date: "1901-09-20",
            height: 69.9,
          },
          {
            date: "1901-09-21",
            height: 69.94,
          },
          {
            date: "1901-09-22",
            height: 69.95,
          },
          {
            date: "1901-09-23",
            height: 69.97,
          },
          {
            date: "1901-09-24",
            height: 70.01,
          },
          {
            date: "1901-09-25",
            height: 70.03,
          },
          {
            date: "1901-09-26",
            height: 70.05,
          },
          {
            date: "1901-09-27",
            height: 70.09,
          },
          {
            date: "1901-09-28",
            height: 70.12,
          },
          {
            date: "1901-09-29",
            height: 70.16,
          },
          {
            date: "1901-09-30",
            height: 70.17,
          },
          {
            date: "1901-10-01",
            height: 70.19,
          },
          {
            date: "1901-10-02",
            height: 70.22,
          },
          {
            date: "1901-10-03",
            height: 70.24,
          },
          {
            date: "1901-10-04",
            height: 70.27,
          },
          {
            date: "1901-10-05",
            height: 70.28,
          },
          {
            date: "1901-10-06",
            height: 70.3,
          },
          {
            date: "1901-10-07",
            height: 70.32,
          },
          {
            date: "1901-10-08",
            height: 70.34,
          },
          {
            date: "1901-10-09",
            height: 70.36,
          },
          {
            date: "1901-10-10",
            height: 70.37,
          },
          {
            date: "1901-10-11",
            height: 70.41,
          },
          {
            date: "1901-10-12",
            height: 70.43,
          },
          {
            date: "1901-10-13",
            height: 70.46,
          },
          {
            date: "1901-10-14",
            height: 70.48,
          },
          {
            date: "1901-10-15",
            height: 70.52,
          },
          {
            date: "1901-10-16",
            height: 70.55,
          },
          {
            date: "1901-10-17",
            height: 70.57,
          },
          {
            date: "1901-10-18",
            height: 70.59,
          },
          {
            date: "1901-10-19",
            height: 70.61,
          },
          {
            date: "1901-10-20",
            height: 70.63,
          },
          {
            date: "1901-10-21",
            height: 70.65,
          },
          {
            date: "1901-10-22",
            height: 70.66,
          },
          {
            date: "1901-10-23",
            height: 70.67,
          },
          {
            date: "1901-10-24",
            height: 70.7,
          },
          {
            date: "1901-10-25",
            height: 70.71,
          },
          {
            date: "1901-10-26",
            height: 70.75,
          },
          {
            date: "1901-10-27",
            height: 70.78,
          },
          {
            date: "1901-10-28",
            height: 70.8,
          },
          {
            date: "1901-10-29",
            height: 70.82,
          },
          {
            date: "1901-10-30",
            height: 70.84,
          },
          {
            date: "1901-10-31",
            height: 70.87,
          },
          {
            date: "1901-11-01",
            height: 70.9,
          },
          {
            date: "1901-11-02",
            height: 70.92,
          },
          {
            date: "1901-11-03",
            height: 70.94,
          },
          {
            date: "1901-11-04",
            height: 70.97,
          },
          {
            date: "1901-11-05",
            height: 70.99,
          },
          {
            date: "1901-11-06",
            height: 71.02,
          },
          {
            date: "1901-11-07",
            height: 71.05,
          },
          {
            date: "1901-11-08",
            height: 71.07,
          },
          {
            date: "1901-11-09",
            height: 71.1,
          },
          {
            date: "1901-11-10",
            height: 71.12,
          },
          {
            date: "1901-11-11",
            height: 71.16,
          },
          {
            date: "1901-11-12",
            height: 71.18,
          },
          {
            date: "1901-11-13",
            height: 71.2,
          },
          {
            date: "1901-11-14",
            height: 71.23,
          },
          {
            date: "1901-11-15",
            height: 71.26,
          },
          {
            date: "1901-11-16",
            height: 71.28,
          },
          {
            date: "1901-11-17",
            height: 71.3,
          },
          {
            date: "1901-11-18",
            height: 71.33,
          },
          {
            date: "1901-11-19",
            height: 71.34,
          },
          {
            date: "1901-11-20",
            height: 71.38,
          },
          {
            date: "1901-11-21",
            height: 71.41,
          },
          {
            date: "1901-11-22",
            height: 71.44,
          },
          {
            date: "1901-11-23",
            height: 71.46,
          },
          {
            date: "1901-11-24",
            height: 71.47,
          },
          {
            date: "1901-11-25",
            height: 71.5,
          },
          {
            date: "1901-11-26",
            height: 71.54,
          },
          {
            date: "1901-11-27",
            height: 71.55,
          },
          {
            date: "1901-11-28",
            height: 71.58,
          },
          {
            date: "1901-11-29",
            height: 71.6,
          },
          {
            date: "1901-11-30",
            height: 71.61,
          },
          {
            date: "1901-12-01",
            height: 71.65,
          },
          {
            date: "1901-12-02",
            height: 71.67,
          },
          {
            date: "1901-12-03",
            height: 71.7,
          },
          {
            date: "1901-12-04",
            height: 71.73,
          },
          {
            date: "1901-12-05",
            height: 71.75,
          },
          {
            date: "1901-12-06",
            height: 71.79,
          },
          {
            date: "1901-12-07",
            height: 71.8,
          },
          {
            date: "1901-12-08",
            height: 71.83,
          },
          {
            date: "1901-12-09",
            height: 71.84,
          },
          {
            date: "1901-12-10",
            height: 71.86,
          },
          {
            date: "1901-12-11",
            height: 71.89,
          },
          {
            date: "1901-12-12",
            height: 71.9,
          },
          {
            date: "1901-12-13",
            height: 71.92,
          },
          {
            date: "1901-12-14",
            height: 71.94,
          },
          {
            date: "1901-12-15",
            height: 71.95,
          },
          {
            date: "1901-12-16",
            height: 71.98,
          },
          {
            date: "1901-12-17",
            height: 72.01,
          },
          {
            date: "1901-12-18",
            height: 72.04,
          },
          {
            date: "1901-12-19",
            height: 72.08,
          },
          {
            date: "1901-12-20",
            height: 72.11,
          },
          {
            date: "1901-12-21",
            height: 72.15,
          },
          {
            date: "1901-12-22",
            height: 72.17,
          },
          {
            date: "1901-12-23",
            height: 72.21,
          },
          {
            date: "1901-12-24",
            height: 72.24,
          },
          {
            date: "1901-12-25",
            height: 72.26,
          },
          {
            date: "1901-12-26",
            height: 72.27,
          },
          {
            date: "1901-12-27",
            height: 72.31,
          },
          {
            date: "1901-12-28",
            height: 72.32,
          },
          {
            date: "1901-12-29",
            height: 72.34,
          },
          {
            date: "1901-12-30",
            height: 72.37,
          },
          {
            date: "1901-12-31",
            height: 72.39,
          },
          {
            date: "1902-01-01",
            height: 72.42,
          },
          {
            date: "1902-01-02",
            height: 72.44,
          },
          {
            date: "1902-01-03",
            height: 72.47,
          },
          {
            date: "1902-01-04",
            height: 72.48,
          },
          {
            date: "1902-01-05",
            height: 72.51,
          },
          {
            date: "1902-01-06",
            height: 72.55,
          },
          {
            date: "1902-01-07",
            height: 72.56,
          },
          {
            date: "1902-01-08",
            height: 72.6,
          },
          {
            date: "1902-01-09",
            height: 72.61,
          },
          {
            date: "1902-01-10",
            height: 72.65,
          },
          {
            date: "1902-01-11",
            height: 72.67,
          },
          {
            date: "1902-01-12",
            height: 72.7,
          },
          {
            date: "1902-01-13",
            height: 72.73,
          },
          {
            date: "1902-01-14",
            height: 72.74,
          },
          {
            date: "1902-01-15",
            height: 72.75,
          },
          {
            date: "1902-01-16",
            height: 72.79,
          },
          {
            date: "1902-01-17",
            height: 72.8,
          },
          {
            date: "1902-01-18",
            height: 72.83,
          },
          {
            date: "1902-01-19",
            height: 72.86,
          },
          {
            date: "1902-01-20",
            height: 72.9,
          },
          {
            date: "1902-01-21",
            height: 72.92,
          },
          {
            date: "1902-01-22",
            height: 72.95,
          },
          {
            date: "1902-01-23",
            height: 72.98,
          },
          {
            date: "1902-01-24",
            height: 73.01,
          },
          {
            date: "1902-01-25",
            height: 73.04,
          },
          {
            date: "1902-01-26",
            height: 73.06,
          },
          {
            date: "1902-01-27",
            height: 73.09,
          },
          {
            date: "1902-01-28",
            height: 73.12,
          },
          {
            date: "1902-01-29",
            height: 73.13,
          },
          {
            date: "1902-01-30",
            height: 73.15,
          },
          {
            date: "1902-01-31",
            height: 73.16,
          },
          {
            date: "1902-02-01",
            height: 73.18,
          },
          {
            date: "1902-02-02",
            height: 73.22,
          },
          {
            date: "1902-02-03",
            height: 73.23,
          },
          {
            date: "1902-02-04",
            height: 73.27,
          },
          {
            date: "1902-02-05",
            height: 73.28,
          },
          {
            date: "1902-02-06",
            height: 73.32,
          },
          {
            date: "1902-02-07",
            height: 73.35,
          },
          {
            date: "1902-02-08",
            height: 73.38,
          },
          {
            date: "1902-02-09",
            height: 73.41,
          },
          {
            date: "1902-02-10",
            height: 73.43,
          },
          {
            date: "1902-02-11",
            height: 73.46,
          },
          {
            date: "1902-02-12",
            height: 73.5,
          },
          {
            date: "1902-02-13",
            height: 73.52,
          },
          {
            date: "1902-02-14",
            height: 73.54,
          },
          {
            date: "1902-02-15",
            height: 73.58,
          },
          {
            date: "1902-02-16",
            height: 73.6,
          },
          {
            date: "1902-02-17",
            height: 73.62,
          },
          {
            date: "1902-02-18",
            height: 73.63,
          },
          {
            date: "1902-02-19",
            height: 73.66,
          },
          {
            date: "1902-02-20",
            height: 73.7,
          },
          {
            date: "1902-02-21",
            height: 73.73,
          },
          {
            date: "1902-02-22",
            height: 73.77,
          },
          {
            date: "1902-02-23",
            height: 73.8,
          },
          {
            date: "1902-02-24",
            height: 73.82,
          },
          {
            date: "1902-02-25",
            height: 73.84,
          },
          {
            date: "1902-02-26",
            height: 73.85,
          },
          {
            date: "1902-02-27",
            height: 73.88,
          },
          {
            date: "1902-02-28",
            height: 73.91,
          },
          {
            date: "1902-03-01",
            height: 73.93,
          },
          {
            date: "1902-03-02",
            height: 73.96,
          },
          {
            date: "1902-03-03",
            height: 74,
          },
          {
            date: "1902-03-04",
            height: 74.02,
          },
          {
            date: "1902-03-05",
            height: 74.06,
          },
          {
            date: "1902-03-06",
            height: 74.09,
          },
          {
            date: "1902-03-07",
            height: 74.11,
          },
          {
            date: "1902-03-08",
            height: 74.13,
          },
          {
            date: "1902-03-09",
            height: 74.17,
          },
          {
            date: "1902-03-10",
            height: 74.19,
          },
          {
            date: "1902-03-11",
            height: 74.22,
          },
          {
            date: "1902-03-12",
            height: 74.23,
          },
          {
            date: "1902-03-13",
            height: 74.26,
          },
          {
            date: "1902-03-14",
            height: 74.29,
          },
          {
            date: "1902-03-15",
            height: 74.31,
          },
          {
            date: "1902-03-16",
            height: 74.34,
          },
          {
            date: "1902-03-17",
            height: 74.37,
          },
          {
            date: "1902-03-18",
            height: 74.39,
          },
          {
            date: "1902-03-19",
            height: 74.42,
          },
          {
            date: "1902-03-20",
            height: 74.44,
          },
          {
            date: "1902-03-21",
            height: 74.47,
          },
          {
            date: "1902-03-22",
            height: 74.48,
          },
          {
            date: "1902-03-23",
            height: 74.5,
          },
          {
            date: "1902-03-24",
            height: 74.52,
          },
          {
            date: "1902-03-25",
            height: 74.55,
          },
          {
            date: "1902-03-26",
            height: 74.58,
          },
          {
            date: "1902-03-27",
            height: 74.61,
          },
          {
            date: "1902-03-28",
            height: 74.65,
          },
          {
            date: "1902-03-29",
            height: 74.68,
          },
          {
            date: "1902-03-30",
            height: 74.71,
          },
          {
            date: "1902-03-31",
            height: 74.75,
          },
          {
            date: "1902-04-01",
            height: 74.78,
          },
          {
            date: "1902-04-02",
            height: 74.8,
          },
          {
            date: "1902-04-03",
            height: 74.82,
          },
          {
            date: "1902-04-04",
            height: 74.84,
          },
          {
            date: "1902-04-05",
            height: 74.86,
          },
          {
            date: "1902-04-06",
            height: 74.89,
          },
          {
            date: "1902-04-07",
            height: 74.92,
          },
          {
            date: "1902-04-08",
            height: 74.96,
          },
          {
            date: "1902-04-09",
            height: 74.99,
          },
          {
            date: "1902-04-10",
            height: 75,
          },
          {
            date: "1902-04-11",
            height: 75.03,
          },
          {
            date: "1902-04-12",
            height: 75.04,
          },
          {
            date: "1902-04-13",
            height: 75.06,
          },
          {
            date: "1902-04-14",
            height: 75.1,
          },
          {
            date: "1902-04-15",
            height: 75.12,
          },
          {
            date: "1902-04-16",
            height: 75.14,
          },
          {
            date: "1902-04-17",
            height: 75.15,
          },
          {
            date: "1902-04-18",
            height: 75.18,
          },
          {
            date: "1902-04-19",
            height: 75.2,
          },
          {
            date: "1902-04-20",
            height: 75.24,
          },
          {
            date: "1902-04-21",
            height: 75.27,
          },
          {
            date: "1902-04-22",
            height: 75.29,
          },
          {
            date: "1902-04-23",
            height: 75.3,
          },
          {
            date: "1902-04-24",
            height: 75.34,
          },
          {
            date: "1902-04-25",
            height: 75.37,
          },
          {
            date: "1902-04-26",
            height: 75.41,
          },
          {
            date: "1902-04-27",
            height: 75.44,
          },
          {
            date: "1902-04-28",
            height: 75.47,
          },
          {
            date: "1902-04-29",
            height: 75.51,
          },
          {
            date: "1902-04-30",
            height: 75.52,
          },
          {
            date: "1902-05-01",
            height: 75.54,
          },
          {
            date: "1902-05-02",
            height: 75.56,
          },
          {
            date: "1902-05-03",
            height: 75.58,
          },
          {
            date: "1902-05-04",
            height: 75.6,
          },
          {
            date: "1902-05-05",
            height: 75.62,
          },
          {
            date: "1902-05-06",
            height: 75.66,
          },
          {
            date: "1902-05-07",
            height: 75.7,
          },
          {
            date: "1902-05-08",
            height: 75.71,
          },
          {
            date: "1902-05-09",
            height: 75.74,
          },
          {
            date: "1902-05-10",
            height: 75.75,
          },
          {
            date: "1902-05-11",
            height: 75.77,
          },
          {
            date: "1902-05-12",
            height: 75.79,
          },
          {
            date: "1902-05-13",
            height: 75.8,
          },
          {
            date: "1902-05-14",
            height: 75.84,
          },
          {
            date: "1902-05-15",
            height: 75.86,
          },
          {
            date: "1902-05-16",
            height: 75.9,
          },
          {
            date: "1902-05-17",
            height: 75.92,
          },
          {
            date: "1902-05-18",
            height: 75.95,
          },
          {
            date: "1902-05-19",
            height: 75.97,
          },
          {
            date: "1902-05-20",
            height: 75.99,
          },
          {
            date: "1902-05-21",
            height: 76,
          },
          {
            date: "1902-05-22",
            height: 76.02,
          },
          {
            date: "1902-05-23",
            height: 76.05,
          },
          {
            date: "1902-05-24",
            height: 76.09,
          },
          {
            date: "1902-05-25",
            height: 76.11,
          },
          {
            date: "1902-05-26",
            height: 76.13,
          },
          {
            date: "1902-05-27",
            height: 76.16,
          },
          {
            date: "1902-05-28",
            height: 76.2,
          },
          {
            date: "1902-05-29",
            height: 76.21,
          },
          {
            date: "1902-05-30",
            height: 76.25,
          },
          {
            date: "1902-05-31",
            height: 76.28,
          },
          {
            date: "1902-06-01",
            height: 76.32,
          },
          {
            date: "1902-06-02",
            height: 76.34,
          },
          {
            date: "1902-06-03",
            height: 76.35,
          },
          {
            date: "1902-06-04",
            height: 76.39,
          },
          {
            date: "1902-06-05",
            height: 76.4,
          },
          {
            date: "1902-06-06",
            height: 76.44,
          },
          {
            date: "1902-06-07",
            height: 76.47,
          },
          {
            date: "1902-06-08",
            height: 76.5,
          },
          {
            date: "1902-06-09",
            height: 76.53,
          },
          {
            date: "1902-06-10",
            height: 76.54,
          },
          {
            date: "1902-06-11",
            height: 76.57,
          },
          {
            date: "1902-06-12",
            height: 76.61,
          },
          {
            date: "1902-06-13",
            height: 76.63,
          },
          {
            date: "1902-06-14",
            height: 76.66,
          },
          {
            date: "1902-06-15",
            height: 76.69,
          },
          {
            date: "1902-06-16",
            height: 76.73,
          },
          {
            date: "1902-06-17",
            height: 76.74,
          },
          {
            date: "1902-06-18",
            height: 76.75,
          },
          {
            date: "1902-06-19",
            height: 76.77,
          },
          {
            date: "1902-06-20",
            height: 76.8,
          },
          {
            date: "1902-06-21",
            height: 76.84,
          },
          {
            date: "1902-06-22",
            height: 76.86,
          },
          {
            date: "1902-06-23",
            height: 76.87,
          },
          {
            date: "1902-06-24",
            height: 76.91,
          },
          {
            date: "1902-06-25",
            height: 76.94,
          },
          {
            date: "1902-06-26",
            height: 76.97,
          },
          {
            date: "1902-06-27",
            height: 77.01,
          },
          {
            date: "1902-06-28",
            height: 77.05,
          },
          {
            date: "1902-06-29",
            height: 77.07,
          },
          {
            date: "1902-06-30",
            height: 77.09,
          },
          {
            date: "1902-07-01",
            height: 77.12,
          },
          {
            date: "1902-07-02",
            height: 77.14,
          },
          {
            date: "1902-07-03",
            height: 77.16,
          },
          {
            date: "1902-07-04",
            height: 77.18,
          },
          {
            date: "1902-07-05",
            height: 77.21,
          },
          {
            date: "1902-07-06",
            height: 77.22,
          },
          {
            date: "1902-07-07",
            height: 77.24,
          },
          {
            date: "1902-07-08",
            height: 77.28,
          },
          {
            date: "1902-07-09",
            height: 77.29,
          },
          {
            date: "1902-07-10",
            height: 77.32,
          },
          {
            date: "1902-07-11",
            height: 77.34,
          },
          {
            date: "1902-07-12",
            height: 77.36,
          },
          {
            date: "1902-07-13",
            height: 77.38,
          },
          {
            date: "1902-07-14",
            height: 77.4,
          },
          {
            date: "1902-07-15",
            height: 77.41,
          },
          {
            date: "1902-07-16",
            height: 77.44,
          },
          {
            date: "1902-07-17",
            height: 77.46,
          },
          {
            date: "1902-07-18",
            height: 77.48,
          },
          {
            date: "1902-07-19",
            height: 77.5,
          },
          {
            date: "1902-07-20",
            height: 77.53,
          },
          {
            date: "1902-07-21",
            height: 77.55,
          },
          {
            date: "1902-07-22",
            height: 77.57,
          },
          {
            date: "1902-07-23",
            height: 77.58,
          },
          {
            date: "1902-07-24",
            height: 77.6,
          },
          {
            date: "1902-07-25",
            height: 77.63,
          },
          {
            date: "1902-07-26",
            height: 77.65,
          },
          {
            date: "1902-07-27",
            height: 77.66,
          },
          {
            date: "1902-07-28",
            height: 77.7,
          },
          {
            date: "1902-07-29",
            height: 77.71,
          },
          {
            date: "1902-07-30",
            height: 77.73,
          },
          {
            date: "1902-07-31",
            height: 77.76,
          },
          {
            date: "1902-08-01",
            height: 77.79,
          },
          {
            date: "1902-08-02",
            height: 77.82,
          },
          {
            date: "1902-08-03",
            height: 77.83,
          },
          {
            date: "1902-08-04",
            height: 77.85,
          },
          {
            date: "1902-08-05",
            height: 77.87,
          },
          {
            date: "1902-08-06",
            height: 77.88,
          },
          {
            date: "1902-08-07",
            height: 77.89,
          },
          {
            date: "1902-08-08",
            height: 77.93,
          },
          {
            date: "1902-08-09",
            height: 77.96,
          },
          {
            date: "1902-08-10",
            height: 77.98,
          },
          {
            date: "1902-08-11",
            height: 78.01,
          },
          {
            date: "1902-08-12",
            height: 78.04,
          },
          {
            date: "1902-08-13",
            height: 78.06,
          },
          {
            date: "1902-08-14",
            height: 78.07,
          },
          {
            date: "1902-08-15",
            height: 78.09,
          },
          {
            date: "1902-08-16",
            height: 78.12,
          },
          {
            date: "1902-08-17",
            height: 78.15,
          },
          {
            date: "1902-08-18",
            height: 78.18,
          },
          {
            date: "1902-08-19",
            height: 78.19,
          },
          {
            date: "1902-08-20",
            height: 78.21,
          },
          {
            date: "1902-08-21",
            height: 78.23,
          },
          {
            date: "1902-08-22",
            height: 78.25,
          },
          {
            date: "1902-08-23",
            height: 78.28,
          },
          {
            date: "1902-08-24",
            height: 78.32,
          },
          {
            date: "1902-08-25",
            height: 78.34,
          },
          {
            date: "1902-08-26",
            height: 78.37,
          },
          {
            date: "1902-08-27",
            height: 78.4,
          },
          {
            date: "1902-08-28",
            height: 78.42,
          },
          {
            date: "1902-08-29",
            height: 78.45,
          },
          {
            date: "1902-08-30",
            height: 78.48,
          },
          {
            date: "1902-08-31",
            height: 78.51,
          },
          {
            date: "1902-09-01",
            height: 78.55,
          },
          {
            date: "1902-09-02",
            height: 78.57,
          },
          {
            date: "1902-09-03",
            height: 78.59,
          },
          {
            date: "1902-09-04",
            height: 78.6,
          },
          {
            date: "1902-09-05",
            height: 78.63,
          },
          {
            date: "1902-09-06",
            height: 78.67,
          },
          {
            date: "1902-09-07",
            height: 78.69,
          },
          {
            date: "1902-09-08",
            height: 78.73,
          },
          {
            date: "1902-09-09",
            height: 78.75,
          },
          {
            date: "1902-09-10",
            height: 78.77,
          },
          {
            date: "1902-09-11",
            height: 78.8,
          },
          {
            date: "1902-09-12",
            height: 78.82,
          },
          {
            date: "1902-09-13",
            height: 78.86,
          },
          {
            date: "1902-09-14",
            height: 78.88,
          },
          {
            date: "1902-09-15",
            height: 78.89,
          },
          {
            date: "1902-09-16",
            height: 78.91,
          },
          {
            date: "1902-09-17",
            height: 78.92,
          },
          {
            date: "1902-09-18",
            height: 78.94,
          },
          {
            date: "1902-09-19",
            height: 78.97,
          },
          {
            date: "1902-09-20",
            height: 79,
          },
          {
            date: "1902-09-21",
            height: 79.03,
          },
          {
            date: "1902-09-22",
            height: 79.06,
          },
          {
            date: "1902-09-23",
            height: 79.09,
          },
          {
            date: "1902-09-24",
            height: 79.13,
          },
          {
            date: "1902-09-25",
            height: 79.16,
          },
          {
            date: "1902-09-26",
            height: 79.17,
          },
          {
            date: "1902-09-27",
            height: 79.21,
          },
          {
            date: "1902-09-28",
            height: 79.22,
          },
          {
            date: "1902-09-29",
            height: 79.25,
          },
          {
            date: "1902-09-30",
            height: 79.27,
          },
          {
            date: "1902-10-01",
            height: 79.3,
          },
          {
            date: "1902-10-02",
            height: 79.31,
          },
          {
            date: "1902-10-03",
            height: 79.32,
          },
          {
            date: "1902-10-04",
            height: 79.34,
          },
          {
            date: "1902-10-05",
            height: 79.37,
          },
          {
            date: "1902-10-06",
            height: 79.4,
          },
          {
            date: "1902-10-07",
            height: 79.41,
          },
          {
            date: "1902-10-08",
            height: 79.43,
          },
          {
            date: "1902-10-09",
            height: 79.46,
          },
          {
            date: "1902-10-10",
            height: 79.49,
          },
          {
            date: "1902-10-11",
            height: 79.52,
          },
          {
            date: "1902-10-12",
            height: 79.55,
          },
          {
            date: "1902-10-13",
            height: 79.56,
          },
          {
            date: "1902-10-14",
            height: 79.6,
          },
          {
            date: "1902-10-15",
            height: 79.62,
          },
          {
            date: "1902-10-16",
            height: 79.63,
          },
          {
            date: "1902-10-17",
            height: 79.67,
          },
          {
            date: "1902-10-18",
            height: 79.69,
          },
          {
            date: "1902-10-19",
            height: 79.71,
          },
          {
            date: "1902-10-20",
            height: 79.74,
          },
          {
            date: "1902-10-21",
            height: 79.76,
          },
          {
            date: "1902-10-22",
            height: 79.8,
          },
          {
            date: "1902-10-23",
            height: 79.83,
          },
          {
            date: "1902-10-24",
            height: 79.85,
          },
          {
            date: "1902-10-25",
            height: 79.87,
          },
          {
            date: "1902-10-26",
            height: 79.89,
          },
          {
            date: "1902-10-27",
            height: 79.92,
          },
          {
            date: "1902-10-28",
            height: 79.93,
          },
          {
            date: "1902-10-29",
            height: 79.96,
          },
          {
            date: "1902-10-30",
            height: 80,
          },
          {
            date: "1902-10-31",
            height: 80.01,
          },
          {
            date: "1902-11-01",
            height: 80.04,
          },
          {
            date: "1902-11-02",
            height: 80.08,
          },
          {
            date: "1902-11-03",
            height: 80.11,
          },
          {
            date: "1902-11-04",
            height: 80.13,
          },
          {
            date: "1902-11-05",
            height: 80.15,
          },
          {
            date: "1902-11-06",
            height: 80.19,
          },
          {
            date: "1902-11-07",
            height: 80.2,
          },
          {
            date: "1902-11-08",
            height: 80.23,
          },
          {
            date: "1902-11-09",
            height: 80.26,
          },
          {
            date: "1902-11-10",
            height: 80.28,
          },
          {
            date: "1902-11-11",
            height: 80.32,
          },
          {
            date: "1902-11-12",
            height: 80.35,
          },
          {
            date: "1902-11-13",
            height: 80.36,
          },
          {
            date: "1902-11-14",
            height: 80.39,
          },
          {
            date: "1902-11-15",
            height: 80.43,
          },
          {
            date: "1902-11-16",
            height: 80.44,
          },
          {
            date: "1902-11-17",
            height: 80.48,
          },
          {
            date: "1902-11-18",
            height: 80.51,
          },
          {
            date: "1902-11-19",
            height: 80.54,
          },
          {
            date: "1902-11-20",
            height: 80.56,
          },
          {
            date: "1902-11-21",
            height: 80.59,
          },
          {
            date: "1902-11-22",
            height: 80.63,
          },
          {
            date: "1902-11-23",
            height: 80.67,
          },
          {
            date: "1902-11-24",
            height: 80.7,
          },
          {
            date: "1902-11-25",
            height: 80.73,
          },
          {
            date: "1902-11-26",
            height: 80.76,
          },
          {
            date: "1902-11-27",
            height: 80.8,
          },
          {
            date: "1902-11-28",
            height: 80.83,
          },
          {
            date: "1902-11-29",
            height: 80.87,
          },
          {
            date: "1902-11-30",
            height: 80.9,
          },
          {
            date: "1902-12-01",
            height: 80.91,
          },
          {
            date: "1902-12-02",
            height: 80.93,
          },
          {
            date: "1902-12-03",
            height: 80.96,
          },
          {
            date: "1902-12-04",
            height: 81,
          },
          {
            date: "1902-12-05",
            height: 81.02,
          },
          {
            date: "1902-12-06",
            height: 81.05,
          },
          {
            date: "1902-12-07",
            height: 81.07,
          },
          {
            date: "1902-12-08",
            height: 81.08,
          },
          {
            date: "1902-12-09",
            height: 81.11,
          },
          {
            date: "1902-12-10",
            height: 81.12,
          },
          {
            date: "1902-12-11",
            height: 81.15,
          },
          {
            date: "1902-12-12",
            height: 81.17,
          },
          {
            date: "1902-12-13",
            height: 81.21,
          },
          {
            date: "1902-12-14",
            height: 81.24,
          },
          {
            date: "1902-12-15",
            height: 81.27,
          },
          {
            date: "1902-12-16",
            height: 81.31,
          },
          {
            date: "1902-12-17",
            height: 81.32,
          },
          {
            date: "1902-12-18",
            height: 81.35,
          },
          {
            date: "1902-12-19",
            height: 81.37,
          },
          {
            date: "1902-12-20",
            height: 81.39,
          },
          {
            date: "1902-12-21",
            height: 81.41,
          },
          {
            date: "1902-12-22",
            height: 81.44,
          },
          {
            date: "1902-12-23",
            height: 81.47,
          },
          {
            date: "1902-12-24",
            height: 81.49,
          },
          {
            date: "1902-12-25",
            height: 81.5,
          },
          {
            date: "1902-12-26",
            height: 81.53,
          },
          {
            date: "1902-12-27",
            height: 81.55,
          },
          {
            date: "1902-12-28",
            height: 81.57,
          },
          {
            date: "1902-12-29",
            height: 81.58,
          },
          {
            date: "1902-12-30",
            height: 81.61,
          },
          {
            date: "1902-12-31",
            height: 81.64,
          },
          {
            date: "1903-01-01",
            height: 81.68,
          },
          {
            date: "1903-01-02",
            height: 81.7,
          },
          {
            date: "1903-01-03",
            height: 81.73,
          },
          {
            date: "1903-01-04",
            height: 81.75,
          },
          {
            date: "1903-01-05",
            height: 81.79,
          },
          {
            date: "1903-01-06",
            height: 81.81,
          },
          {
            date: "1903-01-07",
            height: 81.83,
          },
          {
            date: "1903-01-08",
            height: 81.85,
          },
          {
            date: "1903-01-09",
            height: 81.89,
          },
          {
            date: "1903-01-10",
            height: 81.92,
          },
          {
            date: "1903-01-11",
            height: 81.96,
          },
          {
            date: "1903-01-12",
            height: 81.97,
          },
          {
            date: "1903-01-13",
            height: 81.99,
          },
          {
            date: "1903-01-14",
            height: 82,
          },
          {
            date: "1903-01-15",
            height: 82.04,
          },
          {
            date: "1903-01-16",
            height: 82.06,
          },
          {
            date: "1903-01-17",
            height: 82.09,
          },
          {
            date: "1903-01-18",
            height: 82.12,
          },
          {
            date: "1903-01-19",
            height: 82.15,
          },
          {
            date: "1903-01-20",
            height: 82.19,
          },
          {
            date: "1903-01-21",
            height: 82.21,
          },
          {
            date: "1903-01-22",
            height: 82.25,
          },
          {
            date: "1903-01-23",
            height: 82.29,
          },
          {
            date: "1903-01-24",
            height: 82.3,
          },
          {
            date: "1903-01-25",
            height: 82.33,
          },
          {
            date: "1903-01-26",
            height: 82.34,
          },
          {
            date: "1903-01-27",
            height: 82.35,
          },
          {
            date: "1903-01-28",
            height: 82.38,
          },
          {
            date: "1903-01-29",
            height: 82.42,
          },
          {
            date: "1903-01-30",
            height: 82.44,
          },
          {
            date: "1903-01-31",
            height: 82.47,
          },
          {
            date: "1903-02-01",
            height: 82.48,
          },
          {
            date: "1903-02-02",
            height: 82.5,
          },
          {
            date: "1903-02-03",
            height: 82.53,
          },
          {
            date: "1903-02-04",
            height: 82.55,
          },
          {
            date: "1903-02-05",
            height: 82.57,
          },
          {
            date: "1903-02-06",
            height: 82.6,
          },
          {
            date: "1903-02-07",
            height: 82.64,
          },
          {
            date: "1903-02-08",
            height: 82.67,
          },
          {
            date: "1903-02-09",
            height: 82.7,
          },
          {
            date: "1903-02-10",
            height: 82.71,
          },
          {
            date: "1903-02-11",
            height: 82.73,
          },
          {
            date: "1903-02-12",
            height: 82.74,
          },
          {
            date: "1903-02-13",
            height: 82.78,
          },
          {
            date: "1903-02-14",
            height: 82.8,
          },
          {
            date: "1903-02-15",
            height: 82.82,
          },
          {
            date: "1903-02-16",
            height: 82.84,
          },
          {
            date: "1903-02-17",
            height: 82.88,
          },
          {
            date: "1903-02-18",
            height: 82.89,
          },
          {
            date: "1903-02-19",
            height: 82.91,
          },
          {
            date: "1903-02-20",
            height: 82.95,
          },
          {
            date: "1903-02-21",
            height: 82.96,
          },
          {
            date: "1903-02-22",
            height: 82.99,
          },
          {
            date: "1903-02-23",
            height: 83.01,
          },
          {
            date: "1903-02-24",
            height: 83.04,
          },
          {
            date: "1903-02-25",
            height: 83.08,
          },
          {
            date: "1903-02-26",
            height: 83.11,
          },
          {
            date: "1903-02-27",
            height: 83.14,
          },
          {
            date: "1903-02-28",
            height: 83.16,
          },
          {
            date: "1903-03-01",
            height: 83.2,
          },
          {
            date: "1903-03-02",
            height: 83.23,
          },
          {
            date: "1903-03-03",
            height: 83.27,
          },
          {
            date: "1903-03-04",
            height: 83.29,
          },
          {
            date: "1903-03-05",
            height: 83.32,
          },
          {
            date: "1903-03-06",
            height: 83.36,
          },
          {
            date: "1903-03-07",
            height: 83.37,
          },
          {
            date: "1903-03-08",
            height: 83.38,
          },
          {
            date: "1903-03-09",
            height: 83.42,
          },
          {
            date: "1903-03-10",
            height: 83.45,
          },
          {
            date: "1903-03-11",
            height: 83.49,
          },
          {
            date: "1903-03-12",
            height: 83.51,
          },
          {
            date: "1903-03-13",
            height: 83.55,
          },
          {
            date: "1903-03-14",
            height: 83.57,
          },
          {
            date: "1903-03-15",
            height: 83.59,
          },
          {
            date: "1903-03-16",
            height: 83.63,
          },
          {
            date: "1903-03-17",
            height: 83.67,
          },
          {
            date: "1903-03-18",
            height: 83.68,
          },
          {
            date: "1903-03-19",
            height: 83.71,
          },
          {
            date: "1903-03-20",
            height: 83.74,
          },
          {
            date: "1903-03-21",
            height: 83.77,
          },
          {
            date: "1903-03-22",
            height: 83.8,
          },
          {
            date: "1903-03-23",
            height: 83.84,
          },
          {
            date: "1903-03-24",
            height: 83.86,
          },
          {
            date: "1903-03-25",
            height: 83.87,
          },
          {
            date: "1903-03-26",
            height: 83.89,
          },
          {
            date: "1903-03-27",
            height: 83.92,
          },
          {
            date: "1903-03-28",
            height: 83.94,
          },
          {
            date: "1903-03-29",
            height: 83.97,
          },
          {
            date: "1903-03-30",
            height: 84.01,
          },
          {
            date: "1903-03-31",
            height: 84.03,
          },
          {
            date: "1903-04-01",
            height: 84.06,
          },
          {
            date: "1903-04-02",
            height: 84.09,
          },
          {
            date: "1903-04-03",
            height: 84.11,
          },
          {
            date: "1903-04-04",
            height: 84.13,
          },
          {
            date: "1903-04-05",
            height: 84.14,
          },
          {
            date: "1903-04-06",
            height: 84.17,
          },
          {
            date: "1903-04-07",
            height: 84.2,
          },
          {
            date: "1903-04-08",
            height: 84.21,
          },
          {
            date: "1903-04-09",
            height: 84.22,
          },
          {
            date: "1903-04-10",
            height: 84.25,
          },
          {
            date: "1903-04-11",
            height: 84.27,
          },
          {
            date: "1903-04-12",
            height: 84.31,
          },
          {
            date: "1903-04-13",
            height: 84.33,
          },
          {
            date: "1903-04-14",
            height: 84.35,
          },
          {
            date: "1903-04-15",
            height: 84.36,
          },
          {
            date: "1903-04-16",
            height: 84.4,
          },
          {
            date: "1903-04-17",
            height: 84.42,
          },
          {
            date: "1903-04-18",
            height: 84.43,
          },
          {
            date: "1903-04-19",
            height: 84.46,
          },
          {
            date: "1903-04-20",
            height: 84.48,
          },
          {
            date: "1903-04-21",
            height: 84.5,
          },
          {
            date: "1903-04-22",
            height: 84.53,
          },
          {
            date: "1903-04-23",
            height: 84.54,
          },
          {
            date: "1903-04-24",
            height: 84.56,
          },
          {
            date: "1903-04-25",
            height: 84.58,
          },
          {
            date: "1903-04-26",
            height: 84.61,
          },
          {
            date: "1903-04-27",
            height: 84.62,
          },
          {
            date: "1903-04-28",
            height: 84.65,
          },
          {
            date: "1903-04-29",
            height: 84.66,
          },
          {
            date: "1903-04-30",
            height: 84.7,
          },
          {
            date: "1903-05-01",
            height: 84.73,
          },
          {
            date: "1903-05-02",
            height: 84.76,
          },
          {
            date: "1903-05-03",
            height: 84.79,
          },
          {
            date: "1903-05-04",
            height: 84.8,
          },
          {
            date: "1903-05-05",
            height: 84.81,
          },
          {
            date: "1903-05-06",
            height: 84.83,
          },
          {
            date: "1903-05-07",
            height: 84.85,
          },
          {
            date: "1903-05-08",
            height: 84.88,
          },
          {
            date: "1903-05-09",
            height: 84.91,
          },
          {
            date: "1903-05-10",
            height: 84.94,
          },
          {
            date: "1903-05-11",
            height: 84.97,
          },
          {
            date: "1903-05-12",
            height: 84.99,
          },
          {
            date: "1903-05-13",
            height: 85.02,
          },
          {
            date: "1903-05-14",
            height: 85.04,
          },
          {
            date: "1903-05-15",
            height: 85.06,
          },
          {
            date: "1903-05-16",
            height: 85.08,
          },
          {
            date: "1903-05-17",
            height: 85.1,
          },
          {
            date: "1903-05-18",
            height: 85.12,
          },
          {
            date: "1903-05-19",
            height: 85.14,
          },
          {
            date: "1903-05-20",
            height: 85.17,
          },
          {
            date: "1903-05-21",
            height: 85.19,
          },
          {
            date: "1903-05-22",
            height: 85.23,
          },
          {
            date: "1903-05-23",
            height: 85.24,
          },
          {
            date: "1903-05-24",
            height: 85.27,
          },
          {
            date: "1903-05-25",
            height: 85.3,
          },
          {
            date: "1903-05-26",
            height: 85.31,
          },
          {
            date: "1903-05-27",
            height: 85.34,
          },
          {
            date: "1903-05-28",
            height: 85.36,
          },
          {
            date: "1903-05-29",
            height: 85.39,
          },
          {
            date: "1903-05-30",
            height: 85.42,
          },
          {
            date: "1903-05-31",
            height: 85.44,
          },
          {
            date: "1903-06-01",
            height: 85.47,
          },
          {
            date: "1903-06-02",
            height: 85.5,
          },
          {
            date: "1903-06-03",
            height: 85.51,
          },
          {
            date: "1903-06-04",
            height: 85.52,
          },
          {
            date: "1903-06-05",
            height: 85.55,
          },
          {
            date: "1903-06-06",
            height: 85.56,
          },
          {
            date: "1903-06-07",
            height: 85.58,
          },
          {
            date: "1903-06-08",
            height: 85.59,
          },
          {
            date: "1903-06-09",
            height: 85.63,
          },
          {
            date: "1903-06-10",
            height: 85.65,
          },
          {
            date: "1903-06-11",
            height: 85.67,
          },
          {
            date: "1903-06-12",
            height: 85.71,
          },
          {
            date: "1903-06-13",
            height: 85.72,
          },
          {
            date: "1903-06-14",
            height: 85.74,
          },
          {
            date: "1903-06-15",
            height: 85.77,
          },
          {
            date: "1903-06-16",
            height: 85.8,
          },
          {
            date: "1903-06-17",
            height: 85.83,
          },
          {
            date: "1903-06-18",
            height: 85.84,
          },
          {
            date: "1903-06-19",
            height: 85.86,
          },
          {
            date: "1903-06-20",
            height: 85.9,
          },
          {
            date: "1903-06-21",
            height: 85.92,
          },
          {
            date: "1903-06-22",
            height: 85.95,
          },
          {
            date: "1903-06-23",
            height: 85.99,
          },
          {
            date: "1903-06-24",
            height: 86.02,
          },
          {
            date: "1903-06-25",
            height: 86.05,
          },
          {
            date: "1903-06-26",
            height: 86.07,
          },
          {
            date: "1903-06-27",
            height: 86.1,
          },
          {
            date: "1903-06-28",
            height: 86.12,
          },
          {
            date: "1903-06-29",
            height: 86.15,
          },
          {
            date: "1903-06-30",
            height: 86.19,
          },
          {
            date: "1903-07-01",
            height: 86.2,
          },
          {
            date: "1903-07-02",
            height: 86.23,
          },
          {
            date: "1903-07-03",
            height: 86.25,
          },
          {
            date: "1903-07-04",
            height: 86.26,
          },
          {
            date: "1903-07-05",
            height: 86.29,
          },
          {
            date: "1903-07-06",
            height: 86.32,
          },
          {
            date: "1903-07-07",
            height: 86.35,
          },
          {
            date: "1903-07-08",
            height: 86.36,
          },
          {
            date: "1903-07-09",
            height: 86.4,
          },
          {
            date: "1903-07-10",
            height: 86.42,
          },
          {
            date: "1903-07-11",
            height: 86.46,
          },
          {
            date: "1903-07-12",
            height: 86.48,
          },
          {
            date: "1903-07-13",
            height: 86.51,
          },
          {
            date: "1903-07-14",
            height: 86.53,
          },
          {
            date: "1903-07-15",
            height: 86.54,
          },
          {
            date: "1903-07-16",
            height: 86.57,
          },
          {
            date: "1903-07-17",
            height: 86.61,
          },
          {
            date: "1903-07-18",
            height: 86.64,
          },
          {
            date: "1903-07-19",
            height: 86.66,
          },
          {
            date: "1903-07-20",
            height: 86.69,
          },
          {
            date: "1903-07-21",
            height: 86.72,
          },
          {
            date: "1903-07-22",
            height: 86.74,
          },
          {
            date: "1903-07-23",
            height: 86.77,
          },
          {
            date: "1903-07-24",
            height: 86.79,
          },
          {
            date: "1903-07-25",
            height: 86.82,
          },
          {
            date: "1903-07-26",
            height: 86.84,
          },
          {
            date: "1903-07-27",
            height: 86.88,
          },
          {
            date: "1903-07-28",
            height: 86.89,
          },
          {
            date: "1903-07-29",
            height: 86.91,
          },
          {
            date: "1903-07-30",
            height: 86.94,
          },
          {
            date: "1903-07-31",
            height: 86.95,
          },
          {
            date: "1903-08-01",
            height: 86.97,
          },
          {
            date: "1903-08-02",
            height: 87,
          },
          {
            date: "1903-08-03",
            height: 87.01,
          },
          {
            date: "1903-08-04",
            height: 87.04,
          },
          {
            date: "1903-08-05",
            height: 87.05,
          },
          {
            date: "1903-08-06",
            height: 87.08,
          },
          {
            date: "1903-08-07",
            height: 87.1,
          },
          {
            date: "1903-08-08",
            height: 87.12,
          },
          {
            date: "1903-08-09",
            height: 87.15,
          },
          {
            date: "1903-08-10",
            height: 87.16,
          },
          {
            date: "1903-08-11",
            height: 87.18,
          },
          {
            date: "1903-08-12",
            height: 87.22,
          },
          {
            date: "1903-08-13",
            height: 87.24,
          },
          {
            date: "1903-08-14",
            height: 87.25,
          },
          {
            date: "1903-08-15",
            height: 87.28,
          },
          {
            date: "1903-08-16",
            height: 87.32,
          },
          {
            date: "1903-08-17",
            height: 87.33,
          },
          {
            date: "1903-08-18",
            height: 87.36,
          },
          {
            date: "1903-08-19",
            height: 87.38,
          },
          {
            date: "1903-08-20",
            height: 87.42,
          },
          {
            date: "1903-08-21",
            height: 87.43,
          },
          {
            date: "1903-08-22",
            height: 87.45,
          },
          {
            date: "1903-08-23",
            height: 87.49,
          },
          {
            date: "1903-08-24",
            height: 87.51,
          },
          {
            date: "1903-08-25",
            height: 87.52,
          },
          {
            date: "1903-08-26",
            height: 87.55,
          },
          {
            date: "1903-08-27",
            height: 87.58,
          },
          {
            date: "1903-08-28",
            height: 87.59,
          },
          {
            date: "1903-08-29",
            height: 87.62,
          },
          {
            date: "1903-08-30",
            height: 87.64,
          },
          {
            date: "1903-08-31",
            height: 87.66,
          },
          {
            date: "1903-09-01",
            height: 87.7,
          },
          {
            date: "1903-09-02",
            height: 87.72,
          },
          {
            date: "1903-09-03",
            height: 87.76,
          },
          {
            date: "1903-09-04",
            height: 87.78,
          },
          {
            date: "1903-09-05",
            height: 87.79,
          },
          {
            date: "1903-09-06",
            height: 87.83,
          },
          {
            date: "1903-09-07",
            height: 87.84,
          },
          {
            date: "1903-09-08",
            height: 87.88,
          },
          {
            date: "1903-09-09",
            height: 87.91,
          },
          {
            date: "1903-09-10",
            height: 87.92,
          },
          {
            date: "1903-09-11",
            height: 87.96,
          },
          {
            date: "1903-09-12",
            height: 87.97,
          },
          {
            date: "1903-09-13",
            height: 88,
          },
          {
            date: "1903-09-14",
            height: 88.03,
          },
          {
            date: "1903-09-15",
            height: 88.04,
          },
          {
            date: "1903-09-16",
            height: 88.06,
          },
          {
            date: "1903-09-17",
            height: 88.09,
          },
          {
            date: "1903-09-18",
            height: 88.11,
          },
          {
            date: "1903-09-19",
            height: 88.13,
          },
          {
            date: "1903-09-20",
            height: 88.15,
          },
          {
            date: "1903-09-21",
            height: 88.18,
          },
          {
            date: "1903-09-22",
            height: 88.22,
          },
          {
            date: "1903-09-23",
            height: 88.24,
          },
          {
            date: "1903-09-24",
            height: 88.26,
          },
          {
            date: "1903-09-25",
            height: 88.3,
          },
          {
            date: "1903-09-26",
            height: 88.34,
          },
          {
            date: "1903-09-27",
            height: 88.36,
          },
          {
            date: "1903-09-28",
            height: 88.38,
          },
          {
            date: "1903-09-29",
            height: 88.41,
          },
          {
            date: "1903-09-30",
            height: 88.44,
          },
          {
            date: "1903-10-01",
            height: 88.48,
          },
          {
            date: "1903-10-02",
            height: 88.51,
          },
          {
            date: "1903-10-03",
            height: 88.52,
          },
          {
            date: "1903-10-04",
            height: 88.55,
          },
          {
            date: "1903-10-05",
            height: 88.58,
          },
          {
            date: "1903-10-06",
            height: 88.61,
          },
          {
            date: "1903-10-07",
            height: 88.63,
          },
          {
            date: "1903-10-08",
            height: 88.67,
          },
          {
            date: "1903-10-09",
            height: 88.7,
          },
          {
            date: "1903-10-10",
            height: 88.71,
          },
          {
            date: "1903-10-11",
            height: 88.73,
          },
          {
            date: "1903-10-12",
            height: 88.76,
          },
          {
            date: "1903-10-13",
            height: 88.79,
          },
          {
            date: "1903-10-14",
            height: 88.81,
          },
          {
            date: "1903-10-15",
            height: 88.83,
          },
          {
            date: "1903-10-16",
            height: 88.87,
          },
          {
            date: "1903-10-17",
            height: 88.9,
          },
          {
            date: "1903-10-18",
            height: 88.92,
          },
          {
            date: "1903-10-19",
            height: 88.96,
          },
          {
            date: "1903-10-20",
            height: 89,
          },
          {
            date: "1903-10-21",
            height: 89.02,
          },
          {
            date: "1903-10-22",
            height: 89.05,
          },
          {
            date: "1903-10-23",
            height: 89.06,
          },
          {
            date: "1903-10-24",
            height: 89.1,
          },
          {
            date: "1903-10-25",
            height: 89.12,
          },
          {
            date: "1903-10-26",
            height: 89.15,
          },
          {
            date: "1903-10-27",
            height: 89.18,
          },
          {
            date: "1903-10-28",
            height: 89.21,
          },
          {
            date: "1903-10-29",
            height: 89.23,
          },
          {
            date: "1903-10-30",
            height: 89.26,
          },
          {
            date: "1903-10-31",
            height: 89.27,
          },
          {
            date: "1903-11-01",
            height: 89.3,
          },
          {
            date: "1903-11-02",
            height: 89.32,
          },
          {
            date: "1903-11-03",
            height: 89.33,
          },
          {
            date: "1903-11-04",
            height: 89.37,
          },
          {
            date: "1903-11-05",
            height: 89.39,
          },
          {
            date: "1903-11-06",
            height: 89.43,
          },
          {
            date: "1903-11-07",
            height: 89.45,
          },
          {
            date: "1903-11-08",
            height: 89.47,
          },
          {
            date: "1903-11-09",
            height: 89.48,
          },
          {
            date: "1903-11-10",
            height: 89.51,
          },
          {
            date: "1903-11-11",
            height: 89.52,
          },
          {
            date: "1903-11-12",
            height: 89.55,
          },
          {
            date: "1903-11-13",
            height: 89.58,
          },
          {
            date: "1903-11-14",
            height: 89.6,
          },
          {
            date: "1903-11-15",
            height: 89.62,
          },
          {
            date: "1903-11-16",
            height: 89.64,
          },
          {
            date: "1903-11-17",
            height: 89.67,
          },
          {
            date: "1903-11-18",
            height: 89.71,
          },
          {
            date: "1903-11-19",
            height: 89.72,
          },
          {
            date: "1903-11-20",
            height: 89.73,
          },
          {
            date: "1903-11-21",
            height: 89.76,
          },
          {
            date: "1903-11-22",
            height: 89.78,
          },
          {
            date: "1903-11-23",
            height: 89.79,
          },
          {
            date: "1903-11-24",
            height: 89.81,
          },
          {
            date: "1903-11-25",
            height: 89.85,
          },
          {
            date: "1903-11-26",
            height: 89.88,
          },
          {
            date: "1903-11-27",
            height: 89.9,
          },
          {
            date: "1903-11-28",
            height: 89.93,
          },
          {
            date: "1903-11-29",
            height: 89.96,
          },
          {
            date: "1903-11-30",
            height: 89.99,
          },
          {
            date: "1903-12-01",
            height: 90,
          },
          {
            date: "1903-12-02",
            height: 90.03,
          },
          {
            date: "1903-12-03",
            height: 90.05,
          },
          {
            date: "1903-12-04",
            height: 90.09,
          },
          {
            date: "1903-12-05",
            height: 90.12,
          },
          {
            date: "1903-12-06",
            height: 90.13,
          },
          {
            date: "1903-12-07",
            height: 90.14,
          },
          {
            date: "1903-12-08",
            height: 90.18,
          },
          {
            date: "1903-12-09",
            height: 90.2,
          },
          {
            date: "1903-12-10",
            height: 90.23,
          },
          {
            date: "1903-12-11",
            height: 90.25,
          },
          {
            date: "1903-12-12",
            height: 90.26,
          },
          {
            date: "1903-12-13",
            height: 90.3,
          },
          {
            date: "1903-12-14",
            height: 90.32,
          },
          {
            date: "1903-12-15",
            height: 90.35,
          },
          {
            date: "1903-12-16",
            height: 90.37,
          },
          {
            date: "1903-12-17",
            height: 90.41,
          },
          {
            date: "1903-12-18",
            height: 90.42,
          },
          {
            date: "1903-12-19",
            height: 90.44,
          },
          {
            date: "1903-12-20",
            height: 90.45,
          },
          {
            date: "1903-12-21",
            height: 90.48,
          },
          {
            date: "1903-12-22",
            height: 90.52,
          },
          {
            date: "1903-12-23",
            height: 90.53,
          },
          {
            date: "1903-12-24",
            height: 90.55,
          },
          {
            date: "1903-12-25",
            height: 90.59,
          },
          {
            date: "1903-12-26",
            height: 90.62,
          },
          {
            date: "1903-12-27",
            height: 90.64,
          },
          {
            date: "1903-12-28",
            height: 90.66,
          },
          {
            date: "1903-12-29",
            height: 90.69,
          },
          {
            date: "1903-12-30",
            height: 90.71,
          },
          {
            date: "1903-12-31",
            height: 90.73,
          },
          {
            date: "1904-01-01",
            height: 90.77,
          },
          {
            date: "1904-01-02",
            height: 90.8,
          },
          {
            date: "1904-01-03",
            height: 90.84,
          },
          {
            date: "1904-01-04",
            height: 90.86,
          },
          {
            date: "1904-01-05",
            height: 90.89,
          },
          {
            date: "1904-01-06",
            height: 90.93,
          },
          {
            date: "1904-01-07",
            height: 90.95,
          },
          {
            date: "1904-01-08",
            height: 90.97,
          },
          {
            date: "1904-01-09",
            height: 91,
          },
          {
            date: "1904-01-10",
            height: 91.02,
          },
          {
            date: "1904-01-11",
            height: 91.03,
          },
          {
            date: "1904-01-12",
            height: 91.05,
          },
          {
            date: "1904-01-13",
            height: 91.07,
          },
          {
            date: "1904-01-14",
            height: 91.08,
          },
          {
            date: "1904-01-15",
            height: 91.1,
          },
          {
            date: "1904-01-16",
            height: 91.11,
          },
          {
            date: "1904-01-17",
            height: 91.13,
          },
          {
            date: "1904-01-18",
            height: 91.14,
          },
          {
            date: "1904-01-19",
            height: 91.17,
          },
          {
            date: "1904-01-20",
            height: 91.2,
          },
          {
            date: "1904-01-21",
            height: 91.21,
          },
          {
            date: "1904-01-22",
            height: 91.24,
          },
          {
            date: "1904-01-23",
            height: 91.27,
          },
          {
            date: "1904-01-24",
            height: 91.3,
          },
          {
            date: "1904-01-25",
            height: 91.31,
          },
          {
            date: "1904-01-26",
            height: 91.35,
          },
          {
            date: "1904-01-27",
            height: 91.38,
          },
          {
            date: "1904-01-28",
            height: 91.42,
          },
          {
            date: "1904-01-29",
            height: 91.45,
          },
          {
            date: "1904-01-30",
            height: 91.49,
          },
          {
            date: "1904-01-31",
            height: 91.52,
          },
          {
            date: "1904-02-01",
            height: 91.56,
          },
          {
            date: "1904-02-02",
            height: 91.58,
          },
          {
            date: "1904-02-03",
            height: 91.6,
          },
          {
            date: "1904-02-04",
            height: 91.62,
          },
          {
            date: "1904-02-05",
            height: 91.64,
          },
          {
            date: "1904-02-06",
            height: 91.65,
          },
          {
            date: "1904-02-07",
            height: 91.67,
          },
          {
            date: "1904-02-08",
            height: 91.7,
          },
          {
            date: "1904-02-09",
            height: 91.71,
          },
          {
            date: "1904-02-10",
            height: 91.74,
          },
          {
            date: "1904-02-11",
            height: 91.77,
          },
          {
            date: "1904-02-12",
            height: 91.79,
          },
          {
            date: "1904-02-13",
            height: 91.82,
          },
          {
            date: "1904-02-14",
            height: 91.85,
          },
          {
            date: "1904-02-15",
            height: 91.87,
          },
          {
            date: "1904-02-16",
            height: 91.91,
          },
          {
            date: "1904-02-17",
            height: 91.92,
          },
          {
            date: "1904-02-18",
            height: 91.96,
          },
          {
            date: "1904-02-19",
            height: 91.99,
          },
          {
            date: "1904-02-20",
            height: 92.02,
          },
          {
            date: "1904-02-21",
            height: 92.03,
          },
          {
            date: "1904-02-22",
            height: 92.07,
          },
          {
            date: "1904-02-23",
            height: 92.1,
          },
          {
            date: "1904-02-24",
            height: 92.14,
          },
          {
            date: "1904-02-25",
            height: 92.16,
          },
          {
            date: "1904-02-26",
            height: 92.17,
          },
          {
            date: "1904-02-27",
            height: 92.2,
          },
          {
            date: "1904-02-28",
            height: 92.22,
          },
          {
            date: "1904-02-29",
            height: 92.24,
          },
          {
            date: "1904-03-01",
            height: 92.25,
          },
          {
            date: "1904-03-02",
            height: 92.26,
          },
          {
            date: "1904-03-03",
            height: 92.3,
          },
          {
            date: "1904-03-04",
            height: 92.33,
          },
          {
            date: "1904-03-05",
            height: 92.36,
          },
          {
            date: "1904-03-06",
            height: 92.39,
          },
          {
            date: "1904-03-07",
            height: 92.41,
          },
          {
            date: "1904-03-08",
            height: 92.43,
          },
          {
            date: "1904-03-09",
            height: 92.45,
          },
          {
            date: "1904-03-10",
            height: 92.49,
          },
          {
            date: "1904-03-11",
            height: 92.51,
          },
          {
            date: "1904-03-12",
            height: 92.53,
          },
          {
            date: "1904-03-13",
            height: 92.56,
          },
          {
            date: "1904-03-14",
            height: 92.58,
          },
          {
            date: "1904-03-15",
            height: 92.62,
          },
          {
            date: "1904-03-16",
            height: 92.63,
          },
          {
            date: "1904-03-17",
            height: 92.67,
          },
          {
            date: "1904-03-18",
            height: 92.7,
          },
          {
            date: "1904-03-19",
            height: 92.72,
          },
          {
            date: "1904-03-20",
            height: 92.76,
          },
          {
            date: "1904-03-21",
            height: 92.78,
          },
          {
            date: "1904-03-22",
            height: 92.82,
          },
          {
            date: "1904-03-23",
            height: 92.86,
          },
          {
            date: "1904-03-24",
            height: 92.88,
          },
          {
            date: "1904-03-25",
            height: 92.92,
          },
          {
            date: "1904-03-26",
            height: 92.93,
          },
          {
            date: "1904-03-27",
            height: 92.96,
          },
          {
            date: "1904-03-28",
            height: 92.98,
          },
          {
            date: "1904-03-29",
            height: 93.01,
          },
          {
            date: "1904-03-30",
            height: 93.04,
          },
          {
            date: "1904-03-31",
            height: 93.05,
          },
          {
            date: "1904-04-01",
            height: 93.08,
          },
          {
            date: "1904-04-02",
            height: 93.11,
          },
          {
            date: "1904-04-03",
            height: 93.14,
          },
          {
            date: "1904-04-04",
            height: 93.18,
          },
          {
            date: "1904-04-05",
            height: 93.2,
          },
          {
            date: "1904-04-06",
            height: 93.22,
          },
          {
            date: "1904-04-07",
            height: 93.24,
          },
          {
            date: "1904-04-08",
            height: 93.26,
          },
          {
            date: "1904-04-09",
            height: 93.3,
          },
          {
            date: "1904-04-10",
            height: 93.33,
          },
          {
            date: "1904-04-11",
            height: 93.35,
          },
          {
            date: "1904-04-12",
            height: 93.36,
          },
          {
            date: "1904-04-13",
            height: 93.4,
          },
          {
            date: "1904-04-14",
            height: 93.42,
          },
          {
            date: "1904-04-15",
            height: 93.45,
          },
          {
            date: "1904-04-16",
            height: 93.48,
          },
          {
            date: "1904-04-17",
            height: 93.51,
          },
          {
            date: "1904-04-18",
            height: 93.53,
          },
          {
            date: "1904-04-19",
            height: 93.57,
          },
          {
            date: "1904-04-20",
            height: 93.59,
          },
          {
            date: "1904-04-21",
            height: 93.62,
          },
          {
            date: "1904-04-22",
            height: 93.63,
          },
          {
            date: "1904-04-23",
            height: 93.65,
          },
          {
            date: "1904-04-24",
            height: 93.67,
          },
          {
            date: "1904-04-25",
            height: 93.71,
          },
          {
            date: "1904-04-26",
            height: 93.74,
          },
          {
            date: "1904-04-27",
            height: 93.78,
          },
          {
            date: "1904-04-28",
            height: 93.81,
          },
          {
            date: "1904-04-29",
            height: 93.83,
          },
          {
            date: "1904-04-30",
            height: 93.85,
          },
          {
            date: "1904-05-01",
            height: 93.87,
          },
          {
            date: "1904-05-02",
            height: 93.91,
          },
          {
            date: "1904-05-03",
            height: 93.94,
          },
          {
            date: "1904-05-04",
            height: 93.98,
          },
          {
            date: "1904-05-05",
            height: 94.01,
          },
          {
            date: "1904-05-06",
            height: 94.02,
          },
          {
            date: "1904-05-07",
            height: 94.04,
          },
          {
            date: "1904-05-08",
            height: 94.05,
          },
          {
            date: "1904-05-09",
            height: 94.07,
          },
          {
            date: "1904-05-10",
            height: 94.09,
          },
          {
            date: "1904-05-11",
            height: 94.1,
          },
          {
            date: "1904-05-12",
            height: 94.11,
          },
          {
            date: "1904-05-13",
            height: 94.15,
          },
          {
            date: "1904-05-14",
            height: 94.17,
          },
          {
            date: "1904-05-15",
            height: 94.19,
          },
          {
            date: "1904-05-16",
            height: 94.21,
          },
          {
            date: "1904-05-17",
            height: 94.22,
          },
          {
            date: "1904-05-18",
            height: 94.25,
          },
          {
            date: "1904-05-19",
            height: 94.29,
          },
          {
            date: "1904-05-20",
            height: 94.33,
          },
          {
            date: "1904-05-21",
            height: 94.37,
          },
          {
            date: "1904-05-22",
            height: 94.4,
          },
          {
            date: "1904-05-23",
            height: 94.43,
          },
          {
            date: "1904-05-24",
            height: 94.46,
          },
          {
            date: "1904-05-25",
            height: 94.49,
          },
          {
            date: "1904-05-26",
            height: 94.5,
          },
          {
            date: "1904-05-27",
            height: 94.51,
          },
          {
            date: "1904-05-28",
            height: 94.55,
          },
          {
            date: "1904-05-29",
            height: 94.58,
          },
          {
            date: "1904-05-30",
            height: 94.62,
          },
          {
            date: "1904-05-31",
            height: 94.66,
          },
          {
            date: "1904-06-01",
            height: 94.67,
          },
          {
            date: "1904-06-02",
            height: 94.68,
          },
          {
            date: "1904-06-03",
            height: 94.7,
          },
          {
            date: "1904-06-04",
            height: 94.71,
          },
          {
            date: "1904-06-05",
            height: 94.74,
          },
          {
            date: "1904-06-06",
            height: 94.75,
          },
          {
            date: "1904-06-07",
            height: 94.78,
          },
          {
            date: "1904-06-08",
            height: 94.81,
          },
          {
            date: "1904-06-09",
            height: 94.82,
          },
          {
            date: "1904-06-10",
            height: 94.86,
          },
          {
            date: "1904-06-11",
            height: 94.89,
          },
          {
            date: "1904-06-12",
            height: 94.92,
          },
          {
            date: "1904-06-13",
            height: 94.95,
          },
          {
            date: "1904-06-14",
            height: 94.96,
          },
          {
            date: "1904-06-15",
            height: 94.98,
          },
          {
            date: "1904-06-16",
            height: 95,
          },
          {
            date: "1904-06-17",
            height: 95.03,
          },
          {
            date: "1904-06-18",
            height: 95.06,
          },
          {
            date: "1904-06-19",
            height: 95.08,
          },
          {
            date: "1904-06-20",
            height: 95.09,
          },
          {
            date: "1904-06-21",
            height: 95.13,
          },
          {
            date: "1904-06-22",
            height: 95.15,
          },
          {
            date: "1904-06-23",
            height: 95.19,
          },
          {
            date: "1904-06-24",
            height: 95.21,
          },
          {
            date: "1904-06-25",
            height: 95.23,
          },
          {
            date: "1904-06-26",
            height: 95.24,
          },
          {
            date: "1904-06-27",
            height: 95.27,
          },
          {
            date: "1904-06-28",
            height: 95.31,
          },
          {
            date: "1904-06-29",
            height: 95.33,
          },
          {
            date: "1904-06-30",
            height: 95.36,
          },
          {
            date: "1904-07-01",
            height: 95.39,
          },
          {
            date: "1904-07-02",
            height: 95.4,
          },
          {
            date: "1904-07-03",
            height: 95.44,
          },
          {
            date: "1904-07-04",
            height: 95.47,
          },
          {
            date: "1904-07-05",
            height: 95.5,
          },
          {
            date: "1904-07-06",
            height: 95.53,
          },
          {
            date: "1904-07-07",
            height: 95.57,
          },
          {
            date: "1904-07-08",
            height: 95.6,
          },
          {
            date: "1904-07-09",
            height: 95.63,
          },
          {
            date: "1904-07-10",
            height: 95.64,
          },
          {
            date: "1904-07-11",
            height: 95.66,
          },
          {
            date: "1904-07-12",
            height: 95.68,
          },
          {
            date: "1904-07-13",
            height: 95.7,
          },
          {
            date: "1904-07-14",
            height: 95.72,
          },
          {
            date: "1904-07-15",
            height: 95.75,
          },
          {
            date: "1904-07-16",
            height: 95.78,
          },
          {
            date: "1904-07-17",
            height: 95.81,
          },
          {
            date: "1904-07-18",
            height: 95.83,
          },
          {
            date: "1904-07-19",
            height: 95.86,
          },
          {
            date: "1904-07-20",
            height: 95.89,
          },
          {
            date: "1904-07-21",
            height: 95.92,
          },
          {
            date: "1904-07-22",
            height: 95.93,
          },
          {
            date: "1904-07-23",
            height: 95.95,
          },
          {
            date: "1904-07-24",
            height: 95.97,
          },
          {
            date: "1904-07-25",
            height: 96,
          },
          {
            date: "1904-07-26",
            height: 96.01,
          },
          {
            date: "1904-07-27",
            height: 96.03,
          },
          {
            date: "1904-07-28",
            height: 96.06,
          },
          {
            date: "1904-07-29",
            height: 96.07,
          },
          {
            date: "1904-07-30",
            height: 96.08,
          },
          {
            date: "1904-07-31",
            height: 96.09,
          },
          {
            date: "1904-08-01",
            height: 96.12,
          },
          {
            date: "1904-08-02",
            height: 96.13,
          },
          {
            date: "1904-08-03",
            height: 96.16,
          },
          {
            date: "1904-08-04",
            height: 96.18,
          },
          {
            date: "1904-08-05",
            height: 96.21,
          },
          {
            date: "1904-08-06",
            height: 96.24,
          },
          {
            date: "1904-08-07",
            height: 96.27,
          },
          {
            date: "1904-08-08",
            height: 96.28,
          },
          {
            date: "1904-08-09",
            height: 96.31,
          },
          {
            date: "1904-08-10",
            height: 96.33,
          },
          {
            date: "1904-08-11",
            height: 96.37,
          },
          {
            date: "1904-08-12",
            height: 96.4,
          },
          {
            date: "1904-08-13",
            height: 96.42,
          },
          {
            date: "1904-08-14",
            height: 96.43,
          },
          {
            date: "1904-08-15",
            height: 96.45,
          },
          {
            date: "1904-08-16",
            height: 96.48,
          },
          {
            date: "1904-08-17",
            height: 96.49,
          },
          {
            date: "1904-08-18",
            height: 96.52,
          },
          {
            date: "1904-08-19",
            height: 96.54,
          },
          {
            date: "1904-08-20",
            height: 96.56,
          },
          {
            date: "1904-08-21",
            height: 96.59,
          },
          {
            date: "1904-08-22",
            height: 96.62,
          },
          {
            date: "1904-08-23",
            height: 96.64,
          },
          {
            date: "1904-08-24",
            height: 96.67,
          },
          {
            date: "1904-08-25",
            height: 96.69,
          },
          {
            date: "1904-08-26",
            height: 96.73,
          },
          {
            date: "1904-08-27",
            height: 96.77,
          },
          {
            date: "1904-08-28",
            height: 96.8,
          },
          {
            date: "1904-08-29",
            height: 96.84,
          },
          {
            date: "1904-08-30",
            height: 96.86,
          },
          {
            date: "1904-08-31",
            height: 96.9,
          },
          {
            date: "1904-09-01",
            height: 96.92,
          },
          {
            date: "1904-09-02",
            height: 96.94,
          },
          {
            date: "1904-09-03",
            height: 96.96,
          },
          {
            date: "1904-09-04",
            height: 97,
          },
          {
            date: "1904-09-05",
            height: 97.04,
          },
          {
            date: "1904-09-06",
            height: 97.05,
          },
          {
            date: "1904-09-07",
            height: 97.08,
          },
          {
            date: "1904-09-08",
            height: 97.1,
          },
          {
            date: "1904-09-09",
            height: 97.13,
          },
          {
            date: "1904-09-10",
            height: 97.17,
          },
          {
            date: "1904-09-11",
            height: 97.21,
          },
          {
            date: "1904-09-12",
            height: 97.24,
          },
          {
            date: "1904-09-13",
            height: 97.26,
          },
          {
            date: "1904-09-14",
            height: 97.29,
          },
          {
            date: "1904-09-15",
            height: 97.31,
          },
          {
            date: "1904-09-16",
            height: 97.34,
          },
          {
            date: "1904-09-17",
            height: 97.36,
          },
          {
            date: "1904-09-18",
            height: 97.38,
          },
          {
            date: "1904-09-19",
            height: 97.41,
          },
          {
            date: "1904-09-20",
            height: 97.43,
          },
          {
            date: "1904-09-21",
            height: 97.45,
          },
          {
            date: "1904-09-22",
            height: 97.47,
          },
          {
            date: "1904-09-23",
            height: 97.5,
          },
          {
            date: "1904-09-24",
            height: 97.52,
          },
          {
            date: "1904-09-25",
            height: 97.54,
          },
          {
            date: "1904-09-26",
            height: 97.55,
          },
          {
            date: "1904-09-27",
            height: 97.58,
          },
          {
            date: "1904-09-28",
            height: 97.61,
          },
          {
            date: "1904-09-29",
            height: 97.62,
          },
          {
            date: "1904-09-30",
            height: 97.65,
          },
          {
            date: "1904-10-01",
            height: 97.69,
          },
          {
            date: "1904-10-02",
            height: 97.7,
          },
          {
            date: "1904-10-03",
            height: 97.72,
          },
          {
            date: "1904-10-04",
            height: 97.74,
          },
          {
            date: "1904-10-05",
            height: 97.75,
          },
          {
            date: "1904-10-06",
            height: 97.78,
          },
          {
            date: "1904-10-07",
            height: 97.81,
          },
          {
            date: "1904-10-08",
            height: 97.85,
          },
          {
            date: "1904-10-09",
            height: 97.87,
          },
          {
            date: "1904-10-10",
            height: 97.88,
          },
          {
            date: "1904-10-11",
            height: 97.9,
          },
          {
            date: "1904-10-12",
            height: 97.92,
          },
          {
            date: "1904-10-13",
            height: 97.94,
          },
          {
            date: "1904-10-14",
            height: 97.98,
          },
          {
            date: "1904-10-15",
            height: 98.01,
          },
          {
            date: "1904-10-16",
            height: 98.03,
          },
          {
            date: "1904-10-17",
            height: 98.05,
          },
          {
            date: "1904-10-18",
            height: 98.07,
          },
          {
            date: "1904-10-19",
            height: 98.09,
          },
          {
            date: "1904-10-20",
            height: 98.12,
          },
          {
            date: "1904-10-21",
            height: 98.16,
          },
          {
            date: "1904-10-22",
            height: 98.2,
          },
          {
            date: "1904-10-23",
            height: 98.22,
          },
          {
            date: "1904-10-24",
            height: 98.25,
          },
          {
            date: "1904-10-25",
            height: 98.27,
          },
          {
            date: "1904-10-26",
            height: 98.31,
          },
          {
            date: "1904-10-27",
            height: 98.34,
          },
          {
            date: "1904-10-28",
            height: 98.36,
          },
          {
            date: "1904-10-29",
            height: 98.38,
          },
          {
            date: "1904-10-30",
            height: 98.41,
          },
          {
            date: "1904-10-31",
            height: 98.45,
          },
          {
            date: "1904-11-01",
            height: 98.47,
          },
          {
            date: "1904-11-02",
            height: 98.49,
          },
          {
            date: "1904-11-03",
            height: 98.52,
          },
          {
            date: "1904-11-04",
            height: 98.55,
          },
          {
            date: "1904-11-05",
            height: 98.59,
          },
          {
            date: "1904-11-06",
            height: 98.61,
          },
          {
            date: "1904-11-07",
            height: 98.63,
          },
          {
            date: "1904-11-08",
            height: 98.66,
          },
          {
            date: "1904-11-09",
            height: 98.68,
          },
          {
            date: "1904-11-10",
            height: 98.71,
          },
          {
            date: "1904-11-11",
            height: 98.72,
          },
          {
            date: "1904-11-12",
            height: 98.76,
          },
          {
            date: "1904-11-13",
            height: 98.79,
          },
          {
            date: "1904-11-14",
            height: 98.81,
          },
          {
            date: "1904-11-15",
            height: 98.82,
          },
          {
            date: "1904-11-16",
            height: 98.85,
          },
          {
            date: "1904-11-17",
            height: 98.88,
          },
          {
            date: "1904-11-18",
            height: 98.91,
          },
          {
            date: "1904-11-19",
            height: 98.94,
          },
          {
            date: "1904-11-20",
            height: 98.96,
          },
          {
            date: "1904-11-21",
            height: 98.97,
          },
          {
            date: "1904-11-22",
            height: 98.99,
          },
          {
            date: "1904-11-23",
            height: 99.01,
          },
          {
            date: "1904-11-24",
            height: 99.04,
          },
          {
            date: "1904-11-25",
            height: 99.06,
          },
          {
            date: "1904-11-26",
            height: 99.09,
          },
          {
            date: "1904-11-27",
            height: 99.1,
          },
          {
            date: "1904-11-28",
            height: 99.12,
          },
          {
            date: "1904-11-29",
            height: 99.14,
          },
          {
            date: "1904-11-30",
            height: 99.18,
          },
          {
            date: "1904-12-01",
            height: 99.2,
          },
          {
            date: "1904-12-02",
            height: 99.23,
          },
          {
            date: "1904-12-03",
            height: 99.26,
          },
          {
            date: "1904-12-04",
            height: 99.28,
          },
          {
            date: "1904-12-05",
            height: 99.3,
          },
          {
            date: "1904-12-06",
            height: 99.32,
          },
          {
            date: "1904-12-07",
            height: 99.35,
          },
          {
            date: "1904-12-08",
            height: 99.37,
          },
          {
            date: "1904-12-09",
            height: 99.39,
          },
          {
            date: "1904-12-10",
            height: 99.41,
          },
          {
            date: "1904-12-11",
            height: 99.43,
          },
          {
            date: "1904-12-12",
            height: 99.47,
          },
          {
            date: "1904-12-13",
            height: 99.48,
          },
          {
            date: "1904-12-14",
            height: 99.49,
          },
          {
            date: "1904-12-15",
            height: 99.51,
          },
          {
            date: "1904-12-16",
            height: 99.55,
          },
          {
            date: "1904-12-17",
            height: 99.56,
          },
          {
            date: "1904-12-18",
            height: 99.59,
          },
          {
            date: "1904-12-19",
            height: 99.63,
          },
          {
            date: "1904-12-20",
            height: 99.65,
          },
          {
            date: "1904-12-21",
            height: 99.67,
          },
          {
            date: "1904-12-22",
            height: 99.68,
          },
          {
            date: "1904-12-23",
            height: 99.7,
          },
          {
            date: "1904-12-24",
            height: 99.74,
          },
          {
            date: "1904-12-25",
            height: 99.77,
          },
          {
            date: "1904-12-26",
            height: 99.79,
          },
          {
            date: "1904-12-27",
            height: 99.81,
          },
          {
            date: "1904-12-28",
            height: 99.85,
          },
          {
            date: "1904-12-29",
            height: 99.87,
          },
          {
            date: "1904-12-30",
            height: 99.91,
          },
          {
            date: "1904-12-31",
            height: 99.94,
          },
          {
            date: "1905-01-01",
            height: 99.95,
          },
          {
            date: "1905-01-02",
            height: 99.99,
          },
          {
            date: "1905-01-03",
            height: 100.01,
          },
          {
            date: "1905-01-04",
            height: 100.04,
          },
          {
            date: "1905-01-05",
            height: 100.07,
          },
          {
            date: "1905-01-06",
            height: 100.09,
          },
          {
            date: "1905-01-07",
            height: 100.13,
          },
          {
            date: "1905-01-08",
            height: 100.16,
          },
          {
            date: "1905-01-09",
            height: 100.18,
          },
          {
            date: "1905-01-10",
            height: 100.2,
          },
          {
            date: "1905-01-11",
            height: 100.23,
          },
          {
            date: "1905-01-12",
            height: 100.27,
          },
          {
            date: "1905-01-13",
            height: 100.29,
          },
          {
            date: "1905-01-14",
            height: 100.32,
          },
          {
            date: "1905-01-15",
            height: 100.35,
          },
          {
            date: "1905-01-16",
            height: 100.37,
          },
          {
            date: "1905-01-17",
            height: 100.39,
          },
          {
            date: "1905-01-18",
            height: 100.41,
          },
          {
            date: "1905-01-19",
            height: 100.43,
          },
          {
            date: "1905-01-20",
            height: 100.46,
          },
          {
            date: "1905-01-21",
            height: 100.47,
          },
          {
            date: "1905-01-22",
            height: 100.49,
          },
          {
            date: "1905-01-23",
            height: 100.51,
          },
          {
            date: "1905-01-24",
            height: 100.54,
          },
          {
            date: "1905-01-25",
            height: 100.58,
          },
          {
            date: "1905-01-26",
            height: 100.59,
          },
          {
            date: "1905-01-27",
            height: 100.62,
          },
          {
            date: "1905-01-28",
            height: 100.66,
          },
          {
            date: "1905-01-29",
            height: 100.7,
          },
          {
            date: "1905-01-30",
            height: 100.73,
          },
          {
            date: "1905-01-31",
            height: 100.75,
          },
          {
            date: "1905-02-01",
            height: 100.78,
          },
          {
            date: "1905-02-02",
            height: 100.82,
          },
          {
            date: "1905-02-03",
            height: 100.85,
          },
          {
            date: "1905-02-04",
            height: 100.87,
          },
          {
            date: "1905-02-05",
            height: 100.88,
          },
          {
            date: "1905-02-06",
            height: 100.91,
          },
          {
            date: "1905-02-07",
            height: 100.93,
          },
          {
            date: "1905-02-08",
            height: 100.96,
          },
          {
            date: "1905-02-09",
            height: 100.98,
          },
          {
            date: "1905-02-10",
            height: 100.99,
          },
          {
            date: "1905-02-11",
            height: 101.01,
          },
          {
            date: "1905-02-12",
            height: 101.04,
          },
          {
            date: "1905-02-13",
            height: 101.07,
          },
          {
            date: "1905-02-14",
            height: 101.11,
          },
          {
            date: "1905-02-15",
            height: 101.12,
          },
          {
            date: "1905-02-16",
            height: 101.15,
          },
          {
            date: "1905-02-17",
            height: 101.18,
          },
          {
            date: "1905-02-18",
            height: 101.21,
          },
          {
            date: "1905-02-19",
            height: 101.22,
          },
          {
            date: "1905-02-20",
            height: 101.25,
          },
          {
            date: "1905-02-21",
            height: 101.28,
          },
          {
            date: "1905-02-22",
            height: 101.31,
          },
          {
            date: "1905-02-23",
            height: 101.33,
          },
          {
            date: "1905-02-24",
            height: 101.37,
          },
          {
            date: "1905-02-25",
            height: 101.41,
          },
          {
            date: "1905-02-26",
            height: 101.44,
          },
          {
            date: "1905-02-27",
            height: 101.48,
          },
          {
            date: "1905-02-28",
            height: 101.5,
          },
          {
            date: "1905-03-01",
            height: 101.52,
          },
          {
            date: "1905-03-02",
            height: 101.56,
          },
          {
            date: "1905-03-03",
            height: 101.57,
          },
          {
            date: "1905-03-04",
            height: 101.61,
          },
          {
            date: "1905-03-05",
            height: 101.64,
          },
          {
            date: "1905-03-06",
            height: 101.65,
          },
          {
            date: "1905-03-07",
            height: 101.68,
          },
          {
            date: "1905-03-08",
            height: 101.69,
          },
          {
            date: "1905-03-09",
            height: 101.71,
          },
          {
            date: "1905-03-10",
            height: 101.74,
          },
          {
            date: "1905-03-11",
            height: 101.76,
          },
          {
            date: "1905-03-12",
            height: 101.78,
          },
          {
            date: "1905-03-13",
            height: 101.81,
          },
          {
            date: "1905-03-14",
            height: 101.84,
          },
          {
            date: "1905-03-15",
            height: 101.87,
          },
          {
            date: "1905-03-16",
            height: 101.89,
          },
          {
            date: "1905-03-17",
            height: 101.93,
          },
          {
            date: "1905-03-18",
            height: 101.96,
          },
          {
            date: "1905-03-19",
            height: 101.99,
          },
          {
            date: "1905-03-20",
            height: 102.02,
          },
          {
            date: "1905-03-21",
            height: 102.05,
          },
          {
            date: "1905-03-22",
            height: 102.07,
          },
          {
            date: "1905-03-23",
            height: 102.1,
          },
          {
            date: "1905-03-24",
            height: 102.12,
          },
          {
            date: "1905-03-25",
            height: 102.14,
          },
          {
            date: "1905-03-26",
            height: 102.15,
          },
          {
            date: "1905-03-27",
            height: 102.19,
          },
          {
            date: "1905-03-28",
            height: 102.21,
          },
          {
            date: "1905-03-29",
            height: 102.25,
          },
          {
            date: "1905-03-30",
            height: 102.27,
          },
          {
            date: "1905-03-31",
            height: 102.3,
          },
          {
            date: "1905-04-01",
            height: 102.32,
          },
          {
            date: "1905-04-02",
            height: 102.34,
          },
          {
            date: "1905-04-03",
            height: 102.38,
          },
          {
            date: "1905-04-04",
            height: 102.4,
          },
          {
            date: "1905-04-05",
            height: 102.42,
          },
          {
            date: "1905-04-06",
            height: 102.46,
          },
          {
            date: "1905-04-07",
            height: 102.5,
          },
          {
            date: "1905-04-08",
            height: 102.52,
          },
          {
            date: "1905-04-09",
            height: 102.53,
          },
          {
            date: "1905-04-10",
            height: 102.56,
          },
          {
            date: "1905-04-11",
            height: 102.6,
          },
          {
            date: "1905-04-12",
            height: 102.62,
          },
          {
            date: "1905-04-13",
            height: 102.65,
          },
          {
            date: "1905-04-14",
            height: 102.68,
          },
          {
            date: "1905-04-15",
            height: 102.69,
          },
          {
            date: "1905-04-16",
            height: 102.73,
          },
          {
            date: "1905-04-17",
            height: 102.75,
          },
          {
            date: "1905-04-18",
            height: 102.78,
          },
          {
            date: "1905-04-19",
            height: 102.81,
          },
          {
            date: "1905-04-20",
            height: 102.84,
          },
          {
            date: "1905-04-21",
            height: 102.88,
          },
          {
            date: "1905-04-22",
            height: 102.9,
          },
          {
            date: "1905-04-23",
            height: 102.92,
          },
          {
            date: "1905-04-24",
            height: 102.93,
          },
          {
            date: "1905-04-25",
            height: 102.97,
          },
          {
            date: "1905-04-26",
            height: 103,
          },
          {
            date: "1905-04-27",
            height: 103.03,
          },
          {
            date: "1905-04-28",
            height: 103.04,
          },
          {
            date: "1905-04-29",
            height: 103.06,
          },
          {
            date: "1905-04-30",
            height: 103.09,
          },
          {
            date: "1905-05-01",
            height: 103.11,
          },
          {
            date: "1905-05-02",
            height: 103.13,
          },
          {
            date: "1905-05-03",
            height: 103.15,
          },
          {
            date: "1905-05-04",
            height: 103.17,
          },
          {
            date: "1905-05-05",
            height: 103.2,
          },
          {
            date: "1905-05-06",
            height: 103.23,
          },
          {
            date: "1905-05-07",
            height: 103.25,
          },
          {
            date: "1905-05-08",
            height: 103.29,
          },
          {
            date: "1905-05-09",
            height: 103.33,
          },
          {
            date: "1905-05-10",
            height: 103.35,
          },
          {
            date: "1905-05-11",
            height: 103.37,
          },
          {
            date: "1905-05-12",
            height: 103.4,
          },
          {
            date: "1905-05-13",
            height: 103.43,
          },
          {
            date: "1905-05-14",
            height: 103.47,
          },
          {
            date: "1905-05-15",
            height: 103.5,
          },
          {
            date: "1905-05-16",
            height: 103.52,
          },
          {
            date: "1905-05-17",
            height: 103.55,
          },
          {
            date: "1905-05-18",
            height: 103.59,
          },
          {
            date: "1905-05-19",
            height: 103.62,
          },
          {
            date: "1905-05-20",
            height: 103.66,
          },
          {
            date: "1905-05-21",
            height: 103.69,
          },
          {
            date: "1905-05-22",
            height: 103.7,
          },
          {
            date: "1905-05-23",
            height: 103.72,
          },
          {
            date: "1905-05-24",
            height: 103.75,
          },
          {
            date: "1905-05-25",
            height: 103.76,
          },
          {
            date: "1905-05-26",
            height: 103.79,
          },
          {
            date: "1905-05-27",
            height: 103.82,
          },
          {
            date: "1905-05-28",
            height: 103.83,
          },
          {
            date: "1905-05-29",
            height: 103.86,
          },
          {
            date: "1905-05-30",
            height: 103.89,
          },
          {
            date: "1905-05-31",
            height: 103.9,
          },
          {
            date: "1905-06-01",
            height: 103.93,
          },
          {
            date: "1905-06-02",
            height: 103.94,
          },
          {
            date: "1905-06-03",
            height: 103.96,
          },
          {
            date: "1905-06-04",
            height: 104,
          },
          {
            date: "1905-06-05",
            height: 104.01,
          },
          {
            date: "1905-06-06",
            height: 104.05,
          },
          {
            date: "1905-06-07",
            height: 104.07,
          },
          {
            date: "1905-06-08",
            height: 104.08,
          },
          {
            date: "1905-06-09",
            height: 104.11,
          },
          {
            date: "1905-06-10",
            height: 104.15,
          },
          {
            date: "1905-06-11",
            height: 104.18,
          },
          {
            date: "1905-06-12",
            height: 104.21,
          },
          {
            date: "1905-06-13",
            height: 104.23,
          },
          {
            date: "1905-06-14",
            height: 104.26,
          },
          {
            date: "1905-06-15",
            height: 104.28,
          },
          {
            date: "1905-06-16",
            height: 104.31,
          },
          {
            date: "1905-06-17",
            height: 104.33,
          },
          {
            date: "1905-06-18",
            height: 104.36,
          },
          {
            date: "1905-06-19",
            height: 104.37,
          },
          {
            date: "1905-06-20",
            height: 104.4,
          },
          {
            date: "1905-06-21",
            height: 104.41,
          },
          {
            date: "1905-06-22",
            height: 104.45,
          },
          {
            date: "1905-06-23",
            height: 104.49,
          },
          {
            date: "1905-06-24",
            height: 104.52,
          },
          {
            date: "1905-06-25",
            height: 104.56,
          },
          {
            date: "1905-06-26",
            height: 104.57,
          },
          {
            date: "1905-06-27",
            height: 104.59,
          },
          {
            date: "1905-06-28",
            height: 104.61,
          },
          {
            date: "1905-06-29",
            height: 104.62,
          },
          {
            date: "1905-06-30",
            height: 104.65,
          },
          {
            date: "1905-07-01",
            height: 104.67,
          },
          {
            date: "1905-07-02",
            height: 104.69,
          },
          {
            date: "1905-07-03",
            height: 104.7,
          },
          {
            date: "1905-07-04",
            height: 104.72,
          },
          {
            date: "1905-07-05",
            height: 104.73,
          },
          {
            date: "1905-07-06",
            height: 104.75,
          },
          {
            date: "1905-07-07",
            height: 104.77,
          },
          {
            date: "1905-07-08",
            height: 104.81,
          },
          {
            date: "1905-07-09",
            height: 104.83,
          },
          {
            date: "1905-07-10",
            height: 104.85,
          },
          {
            date: "1905-07-11",
            height: 104.89,
          },
          {
            date: "1905-07-12",
            height: 104.92,
          },
          {
            date: "1905-07-13",
            height: 104.93,
          },
          {
            date: "1905-07-14",
            height: 104.95,
          },
          {
            date: "1905-07-15",
            height: 104.96,
          },
          {
            date: "1905-07-16",
            height: 104.98,
          },
          {
            date: "1905-07-17",
            height: 105.01,
          },
          {
            date: "1905-07-18",
            height: 105.03,
          },
          {
            date: "1905-07-19",
            height: 105.04,
          },
          {
            date: "1905-07-20",
            height: 105.06,
          },
          {
            date: "1905-07-21",
            height: 105.09,
          },
          {
            date: "1905-07-22",
            height: 105.12,
          },
          {
            date: "1905-07-23",
            height: 105.16,
          },
          {
            date: "1905-07-24",
            height: 105.19,
          },
          {
            date: "1905-07-25",
            height: 105.22,
          },
          {
            date: "1905-07-26",
            height: 105.23,
          },
          {
            date: "1905-07-27",
            height: 105.26,
          },
          {
            date: "1905-07-28",
            height: 105.27,
          },
          {
            date: "1905-07-29",
            height: 105.29,
          },
          {
            date: "1905-07-30",
            height: 105.32,
          },
          {
            date: "1905-07-31",
            height: 105.35,
          },
          {
            date: "1905-08-01",
            height: 105.37,
          },
          {
            date: "1905-08-02",
            height: 105.38,
          },
          {
            date: "1905-08-03",
            height: 105.4,
          },
          {
            date: "1905-08-04",
            height: 105.44,
          },
          {
            date: "1905-08-05",
            height: 105.47,
          },
          {
            date: "1905-08-06",
            height: 105.5,
          },
          {
            date: "1905-08-07",
            height: 105.53,
          },
          {
            date: "1905-08-08",
            height: 105.56,
          },
          {
            date: "1905-08-09",
            height: 105.58,
          },
          {
            date: "1905-08-10",
            height: 105.6,
          },
          {
            date: "1905-08-11",
            height: 105.63,
          },
          {
            date: "1905-08-12",
            height: 105.65,
          },
          {
            date: "1905-08-13",
            height: 105.67,
          },
          {
            date: "1905-08-14",
            height: 105.68,
          },
          {
            date: "1905-08-15",
            height: 105.69,
          },
          {
            date: "1905-08-16",
            height: 105.72,
          },
          {
            date: "1905-08-17",
            height: 105.75,
          },
          {
            date: "1905-08-18",
            height: 105.76,
          },
          {
            date: "1905-08-19",
            height: 105.77,
          },
          {
            date: "1905-08-20",
            height: 105.79,
          },
          {
            date: "1905-08-21",
            height: 105.82,
          },
          {
            date: "1905-08-22",
            height: 105.85,
          },
          {
            date: "1905-08-23",
            height: 105.89,
          },
          {
            date: "1905-08-24",
            height: 105.91,
          },
          {
            date: "1905-08-25",
            height: 105.94,
          },
          {
            date: "1905-08-26",
            height: 105.96,
          },
          {
            date: "1905-08-27",
            height: 106,
          },
          {
            date: "1905-08-28",
            height: 106.01,
          },
          {
            date: "1905-08-29",
            height: 106.05,
          },
          {
            date: "1905-08-30",
            height: 106.07,
          },
          {
            date: "1905-08-31",
            height: 106.1,
          },
          {
            date: "1905-09-01",
            height: 106.13,
          },
          {
            date: "1905-09-02",
            height: 106.14,
          },
          {
            date: "1905-09-03",
            height: 106.16,
          },
          {
            date: "1905-09-04",
            height: 106.19,
          },
          {
            date: "1905-09-05",
            height: 106.21,
          },
          {
            date: "1905-09-06",
            height: 106.24,
          },
          {
            date: "1905-09-07",
            height: 106.26,
          },
          {
            date: "1905-09-08",
            height: 106.3,
          },
          {
            date: "1905-09-09",
            height: 106.33,
          },
          {
            date: "1905-09-10",
            height: 106.35,
          },
          {
            date: "1905-09-11",
            height: 106.38,
          },
          {
            date: "1905-09-12",
            height: 106.42,
          },
          {
            date: "1905-09-13",
            height: 106.45,
          },
          {
            date: "1905-09-14",
            height: 106.47,
          },
          {
            date: "1905-09-15",
            height: 106.51,
          },
          {
            date: "1905-09-16",
            height: 106.52,
          },
          {
            date: "1905-09-17",
            height: 106.56,
          },
          {
            date: "1905-09-18",
            height: 106.58,
          },
          {
            date: "1905-09-19",
            height: 106.61,
          },
          {
            date: "1905-09-20",
            height: 106.64,
          },
          {
            date: "1905-09-21",
            height: 106.66,
          },
          {
            date: "1905-09-22",
            height: 106.68,
          },
          {
            date: "1905-09-23",
            height: 106.7,
          },
          {
            date: "1905-09-24",
            height: 106.74,
          },
          {
            date: "1905-09-25",
            height: 106.75,
          },
          {
            date: "1905-09-26",
            height: 106.79,
          },
          {
            date: "1905-09-27",
            height: 106.81,
          },
          {
            date: "1905-09-28",
            height: 106.84,
          },
          {
            date: "1905-09-29",
            height: 106.87,
          },
          {
            date: "1905-09-30",
            height: 106.9,
          },
          {
            date: "1905-10-01",
            height: 106.94,
          },
          {
            date: "1905-10-02",
            height: 106.98,
          },
          {
            date: "1905-10-03",
            height: 107.01,
          },
          {
            date: "1905-10-04",
            height: 107.05,
          },
          {
            date: "1905-10-05",
            height: 107.08,
          },
          {
            date: "1905-10-06",
            height: 107.11,
          },
          {
            date: "1905-10-07",
            height: 107.13,
          },
          {
            date: "1905-10-08",
            height: 107.16,
          },
          {
            date: "1905-10-09",
            height: 107.19,
          },
          {
            date: "1905-10-10",
            height: 107.2,
          },
          {
            date: "1905-10-11",
            height: 107.22,
          },
          {
            date: "1905-10-12",
            height: 107.25,
          },
          {
            date: "1905-10-13",
            height: 107.26,
          },
          {
            date: "1905-10-14",
            height: 107.29,
          },
          {
            date: "1905-10-15",
            height: 107.33,
          },
          {
            date: "1905-10-16",
            height: 107.35,
          },
          {
            date: "1905-10-17",
            height: 107.38,
          },
          {
            date: "1905-10-18",
            height: 107.41,
          },
          {
            date: "1905-10-19",
            height: 107.45,
          },
          {
            date: "1905-10-20",
            height: 107.48,
          },
          {
            date: "1905-10-21",
            height: 107.49,
          },
          {
            date: "1905-10-22",
            height: 107.51,
          },
          {
            date: "1905-10-23",
            height: 107.54,
          },
          {
            date: "1905-10-24",
            height: 107.56,
          },
          {
            date: "1905-10-25",
            height: 107.58,
          },
          {
            date: "1905-10-26",
            height: 107.6,
          },
          {
            date: "1905-10-27",
            height: 107.63,
          },
          {
            date: "1905-10-28",
            height: 107.64,
          },
          {
            date: "1905-10-29",
            height: 107.66,
          },
          {
            date: "1905-10-30",
            height: 107.7,
          },
          {
            date: "1905-10-31",
            height: 107.73,
          },
          {
            date: "1905-11-01",
            height: 107.76,
          },
          {
            date: "1905-11-02",
            height: 107.79,
          },
          {
            date: "1905-11-03",
            height: 107.82,
          },
          {
            date: "1905-11-04",
            height: 107.84,
          },
          {
            date: "1905-11-05",
            height: 107.87,
          },
          {
            date: "1905-11-06",
            height: 107.89,
          },
          {
            date: "1905-11-07",
            height: 107.91,
          },
          {
            date: "1905-11-08",
            height: 107.93,
          },
          {
            date: "1905-11-09",
            height: 107.97,
          },
          {
            date: "1905-11-10",
            height: 107.99,
          },
          {
            date: "1905-11-11",
            height: 108,
          },
          {
            date: "1905-11-12",
            height: 108.04,
          },
          {
            date: "1905-11-13",
            height: 108.06,
          },
          {
            date: "1905-11-14",
            height: 108.07,
          },
          {
            date: "1905-11-15",
            height: 108.11,
          },
          {
            date: "1905-11-16",
            height: 108.12,
          },
          {
            date: "1905-11-17",
            height: 108.14,
          },
          {
            date: "1905-11-18",
            height: 108.17,
          },
          {
            date: "1905-11-19",
            height: 108.2,
          },
          {
            date: "1905-11-20",
            height: 108.24,
          },
          {
            date: "1905-11-21",
            height: 108.27,
          },
          {
            date: "1905-11-22",
            height: 108.3,
          },
          {
            date: "1905-11-23",
            height: 108.33,
          },
          {
            date: "1905-11-24",
            height: 108.35,
          },
          {
            date: "1905-11-25",
            height: 108.39,
          },
          {
            date: "1905-11-26",
            height: 108.43,
          },
          {
            date: "1905-11-27",
            height: 108.44,
          },
          {
            date: "1905-11-28",
            height: 108.46,
          },
          {
            date: "1905-11-29",
            height: 108.5,
          },
          {
            date: "1905-11-30",
            height: 108.54,
          },
          {
            date: "1905-12-01",
            height: 108.56,
          },
          {
            date: "1905-12-02",
            height: 108.57,
          },
          {
            date: "1905-12-03",
            height: 108.59,
          },
          {
            date: "1905-12-04",
            height: 108.6,
          },
          {
            date: "1905-12-05",
            height: 108.63,
          },
          {
            date: "1905-12-06",
            height: 108.64,
          },
          {
            date: "1905-12-07",
            height: 108.67,
          },
          {
            date: "1905-12-08",
            height: 108.7,
          },
          {
            date: "1905-12-09",
            height: 108.72,
          },
          {
            date: "1905-12-10",
            height: 108.75,
          },
          {
            date: "1905-12-11",
            height: 108.79,
          },
          {
            date: "1905-12-12",
            height: 108.81,
          },
          {
            date: "1905-12-13",
            height: 108.84,
          },
          {
            date: "1905-12-14",
            height: 108.87,
          },
          {
            date: "1905-12-15",
            height: 108.89,
          },
          {
            date: "1905-12-16",
            height: 108.93,
          },
          {
            date: "1905-12-17",
            height: 108.95,
          },
          {
            date: "1905-12-18",
            height: 108.99,
          },
          {
            date: "1905-12-19",
            height: 109.03,
          },
          {
            date: "1905-12-20",
            height: 109.05,
          },
          {
            date: "1905-12-21",
            height: 109.06,
          },
          {
            date: "1905-12-22",
            height: 109.08,
          },
          {
            date: "1905-12-23",
            height: 109.09,
          },
          {
            date: "1905-12-24",
            height: 109.13,
          },
          {
            date: "1905-12-25",
            height: 109.17,
          },
          {
            date: "1905-12-26",
            height: 109.18,
          },
          {
            date: "1905-12-27",
            height: 109.21,
          },
          {
            date: "1905-12-28",
            height: 109.24,
          },
          {
            date: "1905-12-29",
            height: 109.26,
          },
          {
            date: "1905-12-30",
            height: 109.29,
          },
          {
            date: "1905-12-31",
            height: 109.32,
          },
          {
            date: "1906-01-01",
            height: 109.34,
          },
          {
            date: "1906-01-02",
            height: 109.36,
          },
          {
            date: "1906-01-03",
            height: 109.39,
          },
          {
            date: "1906-01-04",
            height: 109.41,
          },
          {
            date: "1906-01-05",
            height: 109.43,
          },
          {
            date: "1906-01-06",
            height: 109.46,
          },
          {
            date: "1906-01-07",
            height: 109.47,
          },
          {
            date: "1906-01-08",
            height: 109.49,
          },
          {
            date: "1906-01-09",
            height: 109.51,
          },
          {
            date: "1906-01-10",
            height: 109.53,
          },
          {
            date: "1906-01-11",
            height: 109.55,
          },
          {
            date: "1906-01-12",
            height: 109.58,
          },
          {
            date: "1906-01-13",
            height: 109.6,
          },
          {
            date: "1906-01-14",
            height: 109.62,
          },
          {
            date: "1906-01-15",
            height: 109.65,
          },
          {
            date: "1906-01-16",
            height: 109.69,
          },
          {
            date: "1906-01-17",
            height: 109.73,
          },
          {
            date: "1906-01-18",
            height: 109.76,
          },
          {
            date: "1906-01-19",
            height: 109.8,
          },
          {
            date: "1906-01-20",
            height: 109.81,
          },
          {
            date: "1906-01-21",
            height: 109.83,
          },
          {
            date: "1906-01-22",
            height: 109.85,
          },
          {
            date: "1906-01-23",
            height: 109.86,
          },
          {
            date: "1906-01-24",
            height: 109.87,
          },
          {
            date: "1906-01-25",
            height: 109.9,
          },
          {
            date: "1906-01-26",
            height: 109.93,
          },
          {
            date: "1906-01-27",
            height: 109.95,
          },
          {
            date: "1906-01-28",
            height: 109.98,
          },
          {
            date: "1906-01-29",
            height: 110,
          },
          {
            date: "1906-01-30",
            height: 110.04,
          },
          {
            date: "1906-01-31",
            height: 110.07,
          },
          {
            date: "1906-02-01",
            height: 110.11,
          },
          {
            date: "1906-02-02",
            height: 110.13,
          },
          {
            date: "1906-02-03",
            height: 110.15,
          },
          {
            date: "1906-02-04",
            height: 110.16,
          },
          {
            date: "1906-02-05",
            height: 110.19,
          },
          {
            date: "1906-02-06",
            height: 110.23,
          },
          {
            date: "1906-02-07",
            height: 110.25,
          },
          {
            date: "1906-02-08",
            height: 110.26,
          },
          {
            date: "1906-02-09",
            height: 110.29,
          },
          {
            date: "1906-02-10",
            height: 110.31,
          },
          {
            date: "1906-02-11",
            height: 110.34,
          },
          {
            date: "1906-02-12",
            height: 110.35,
          },
          {
            date: "1906-02-13",
            height: 110.38,
          },
          {
            date: "1906-02-14",
            height: 110.41,
          },
          {
            date: "1906-02-15",
            height: 110.43,
          },
          {
            date: "1906-02-16",
            height: 110.46,
          },
          {
            date: "1906-02-17",
            height: 110.47,
          },
          {
            date: "1906-02-18",
            height: 110.49,
          },
          {
            date: "1906-02-19",
            height: 110.52,
          },
          {
            date: "1906-02-20",
            height: 110.54,
          },
          {
            date: "1906-02-21",
            height: 110.57,
          },
          {
            date: "1906-02-22",
            height: 110.58,
          },
          {
            date: "1906-02-23",
            height: 110.61,
          },
          {
            date: "1906-02-24",
            height: 110.63,
          },
          {
            date: "1906-02-25",
            height: 110.67,
          },
          {
            date: "1906-02-26",
            height: 110.68,
          },
          {
            date: "1906-02-27",
            height: 110.7,
          },
          {
            date: "1906-02-28",
            height: 110.71,
          },
          {
            date: "1906-03-01",
            height: 110.74,
          },
          {
            date: "1906-03-02",
            height: 110.77,
          },
          {
            date: "1906-03-03",
            height: 110.78,
          },
          {
            date: "1906-03-04",
            height: 110.82,
          },
          {
            date: "1906-03-05",
            height: 110.85,
          },
          {
            date: "1906-03-06",
            height: 110.88,
          },
          {
            date: "1906-03-07",
            height: 110.91,
          },
          {
            date: "1906-03-08",
            height: 110.93,
          },
          {
            date: "1906-03-09",
            height: 110.94,
          },
          {
            date: "1906-03-10",
            height: 110.96,
          },
          {
            date: "1906-03-11",
            height: 110.99,
          },
          {
            date: "1906-03-12",
            height: 111.02,
          },
          {
            date: "1906-03-13",
            height: 111.05,
          },
          {
            date: "1906-03-14",
            height: 111.08,
          },
          {
            date: "1906-03-15",
            height: 111.09,
          },
          {
            date: "1906-03-16",
            height: 111.13,
          },
          {
            date: "1906-03-17",
            height: 111.16,
          },
          {
            date: "1906-03-18",
            height: 111.19,
          },
          {
            date: "1906-03-19",
            height: 111.22,
          },
          {
            date: "1906-03-20",
            height: 111.24,
          },
          {
            date: "1906-03-21",
            height: 111.27,
          },
          {
            date: "1906-03-22",
            height: 111.3,
          },
          {
            date: "1906-03-23",
            height: 111.32,
          },
          {
            date: "1906-03-24",
            height: 111.34,
          },
          {
            date: "1906-03-25",
            height: 111.36,
          },
          {
            date: "1906-03-26",
            height: 111.39,
          },
          {
            date: "1906-03-27",
            height: 111.42,
          },
          {
            date: "1906-03-28",
            height: 111.46,
          },
          {
            date: "1906-03-29",
            height: 111.48,
          },
          {
            date: "1906-03-30",
            height: 111.51,
          },
          {
            date: "1906-03-31",
            height: 111.54,
          },
          {
            date: "1906-04-01",
            height: 111.55,
          },
          {
            date: "1906-04-02",
            height: 111.57,
          },
          {
            date: "1906-04-03",
            height: 111.59,
          },
          {
            date: "1906-04-04",
            height: 111.6,
          },
          {
            date: "1906-04-05",
            height: 111.64,
          },
          {
            date: "1906-04-06",
            height: 111.68,
          },
          {
            date: "1906-04-07",
            height: 111.69,
          },
          {
            date: "1906-04-08",
            height: 111.72,
          },
          {
            date: "1906-04-09",
            height: 111.76,
          },
          {
            date: "1906-04-10",
            height: 111.77,
          },
          {
            date: "1906-04-11",
            height: 111.8,
          },
          {
            date: "1906-04-12",
            height: 111.83,
          },
          {
            date: "1906-04-13",
            height: 111.87,
          },
          {
            date: "1906-04-14",
            height: 111.9,
          },
          {
            date: "1906-04-15",
            height: 111.91,
          },
          {
            date: "1906-04-16",
            height: 111.95,
          },
          {
            date: "1906-04-17",
            height: 111.97,
          },
          {
            date: "1906-04-18",
            height: 111.99,
          },
          {
            date: "1906-04-19",
            height: 112.02,
          },
          {
            date: "1906-04-20",
            height: 112.04,
          },
          {
            date: "1906-04-21",
            height: 112.06,
          },
          {
            date: "1906-04-22",
            height: 112.08,
          },
          {
            date: "1906-04-23",
            height: 112.1,
          },
          {
            date: "1906-04-24",
            height: 112.13,
          },
          {
            date: "1906-04-25",
            height: 112.15,
          },
          {
            date: "1906-04-26",
            height: 112.18,
          },
          {
            date: "1906-04-27",
            height: 112.2,
          },
          {
            date: "1906-04-28",
            height: 112.23,
          },
          {
            date: "1906-04-29",
            height: 112.24,
          },
          {
            date: "1906-04-30",
            height: 112.26,
          },
          {
            date: "1906-05-01",
            height: 112.28,
          },
          {
            date: "1906-05-02",
            height: 112.31,
          },
          {
            date: "1906-05-03",
            height: 112.32,
          },
          {
            date: "1906-05-04",
            height: 112.36,
          },
          {
            date: "1906-05-05",
            height: 112.38,
          },
          {
            date: "1906-05-06",
            height: 112.4,
          },
          {
            date: "1906-05-07",
            height: 112.42,
          },
          {
            date: "1906-05-08",
            height: 112.45,
          },
          {
            date: "1906-05-09",
            height: 112.49,
          },
          {
            date: "1906-05-10",
            height: 112.51,
          },
          {
            date: "1906-05-11",
            height: 112.53,
          },
          {
            date: "1906-05-12",
            height: 112.54,
          },
          {
            date: "1906-05-13",
            height: 112.57,
          },
          {
            date: "1906-05-14",
            height: 112.6,
          },
          {
            date: "1906-05-15",
            height: 112.64,
          },
          {
            date: "1906-05-16",
            height: 112.65,
          },
          {
            date: "1906-05-17",
            height: 112.67,
          },
          {
            date: "1906-05-18",
            height: 112.71,
          },
          {
            date: "1906-05-19",
            height: 112.73,
          },
          {
            date: "1906-05-20",
            height: 112.75,
          },
          {
            date: "1906-05-21",
            height: 112.77,
          },
          {
            date: "1906-05-22",
            height: 112.78,
          },
          {
            date: "1906-05-23",
            height: 112.81,
          },
          {
            date: "1906-05-24",
            height: 112.82,
          },
          {
            date: "1906-05-25",
            height: 112.85,
          },
          {
            date: "1906-05-26",
            height: 112.89,
          },
          {
            date: "1906-05-27",
            height: 112.92,
          },
          {
            date: "1906-05-28",
            height: 112.94,
          },
          {
            date: "1906-05-29",
            height: 112.96,
          },
          {
            date: "1906-05-30",
            height: 112.97,
          },
          {
            date: "1906-05-31",
            height: 112.99,
          },
          {
            date: "1906-06-01",
            height: 113,
          },
          {
            date: "1906-06-02",
            height: 113.04,
          },
          {
            date: "1906-06-03",
            height: 113.08,
          },
          {
            date: "1906-06-04",
            height: 113.11,
          },
          {
            date: "1906-06-05",
            height: 113.12,
          },
          {
            date: "1906-06-06",
            height: 113.15,
          },
          {
            date: "1906-06-07",
            height: 113.17,
          },
          {
            date: "1906-06-08",
            height: 113.19,
          },
          {
            date: "1906-06-09",
            height: 113.22,
          },
          {
            date: "1906-06-10",
            height: 113.23,
          },
          {
            date: "1906-06-11",
            height: 113.27,
          },
          {
            date: "1906-06-12",
            height: 113.3,
          },
          {
            date: "1906-06-13",
            height: 113.33,
          },
          {
            date: "1906-06-14",
            height: 113.37,
          },
          {
            date: "1906-06-15",
            height: 113.4,
          },
          {
            date: "1906-06-16",
            height: 113.42,
          },
          {
            date: "1906-06-17",
            height: 113.44,
          },
          {
            date: "1906-06-18",
            height: 113.47,
          },
          {
            date: "1906-06-19",
            height: 113.5,
          },
          {
            date: "1906-06-20",
            height: 113.52,
          },
          {
            date: "1906-06-21",
            height: 113.54,
          },
          {
            date: "1906-06-22",
            height: 113.57,
          },
          {
            date: "1906-06-23",
            height: 113.58,
          },
          {
            date: "1906-06-24",
            height: 113.61,
          },
          {
            date: "1906-06-25",
            height: 113.63,
          },
          {
            date: "1906-06-26",
            height: 113.66,
          },
          {
            date: "1906-06-27",
            height: 113.68,
          },
          {
            date: "1906-06-28",
            height: 113.69,
          },
          {
            date: "1906-06-29",
            height: 113.72,
          },
          {
            date: "1906-06-30",
            height: 113.75,
          },
          {
            date: "1906-07-01",
            height: 113.76,
          },
          {
            date: "1906-07-02",
            height: 113.77,
          },
          {
            date: "1906-07-03",
            height: 113.81,
          },
          {
            date: "1906-07-04",
            height: 113.84,
          },
          {
            date: "1906-07-05",
            height: 113.87,
          },
          {
            date: "1906-07-06",
            height: 113.89,
          },
          {
            date: "1906-07-07",
            height: 113.92,
          },
          {
            date: "1906-07-08",
            height: 113.95,
          },
          {
            date: "1906-07-09",
            height: 113.98,
          },
          {
            date: "1906-07-10",
            height: 114.02,
          },
          {
            date: "1906-07-11",
            height: 114.03,
          },
          {
            date: "1906-07-12",
            height: 114.05,
          },
          {
            date: "1906-07-13",
            height: 114.07,
          },
          {
            date: "1906-07-14",
            height: 114.1,
          },
          {
            date: "1906-07-15",
            height: 114.14,
          },
          {
            date: "1906-07-16",
            height: 114.15,
          },
          {
            date: "1906-07-17",
            height: 114.19,
          },
          {
            date: "1906-07-18",
            height: 114.2,
          },
          {
            date: "1906-07-19",
            height: 114.23,
          },
          {
            date: "1906-07-20",
            height: 114.25,
          },
          {
            date: "1906-07-21",
            height: 114.27,
          },
          {
            date: "1906-07-22",
            height: 114.29,
          },
          {
            date: "1906-07-23",
            height: 114.32,
          },
          {
            date: "1906-07-24",
            height: 114.35,
          },
          {
            date: "1906-07-25",
            height: 114.38,
          },
          {
            date: "1906-07-26",
            height: 114.4,
          },
          {
            date: "1906-07-27",
            height: 114.43,
          },
          {
            date: "1906-07-28",
            height: 114.44,
          },
          {
            date: "1906-07-29",
            height: 114.47,
          },
          {
            date: "1906-07-30",
            height: 114.5,
          },
          {
            date: "1906-07-31",
            height: 114.54,
          },
          {
            date: "1906-08-01",
            height: 114.55,
          },
          {
            date: "1906-08-02",
            height: 114.57,
          },
          {
            date: "1906-08-03",
            height: 114.6,
          },
          {
            date: "1906-08-04",
            height: 114.61,
          },
          {
            date: "1906-08-05",
            height: 114.63,
          },
          {
            date: "1906-08-06",
            height: 114.64,
          },
          {
            date: "1906-08-07",
            height: 114.65,
          },
          {
            date: "1906-08-08",
            height: 114.66,
          },
          {
            date: "1906-08-09",
            height: 114.69,
          },
          {
            date: "1906-08-10",
            height: 114.71,
          },
          {
            date: "1906-08-11",
            height: 114.73,
          },
          {
            date: "1906-08-12",
            height: 114.76,
          },
          {
            date: "1906-08-13",
            height: 114.77,
          },
          {
            date: "1906-08-14",
            height: 114.8,
          },
          {
            date: "1906-08-15",
            height: 114.83,
          },
          {
            date: "1906-08-16",
            height: 114.86,
          },
          {
            date: "1906-08-17",
            height: 114.9,
          },
          {
            date: "1906-08-18",
            height: 114.94,
          },
          {
            date: "1906-08-19",
            height: 114.97,
          },
          {
            date: "1906-08-20",
            height: 115.01,
          },
          {
            date: "1906-08-21",
            height: 115.04,
          },
          {
            date: "1906-08-22",
            height: 115.07,
          },
          {
            date: "1906-08-23",
            height: 115.1,
          },
          {
            date: "1906-08-24",
            height: 115.14,
          },
          {
            date: "1906-08-25",
            height: 115.16,
          },
          {
            date: "1906-08-26",
            height: 115.17,
          },
          {
            date: "1906-08-27",
            height: 115.2,
          },
          {
            date: "1906-08-28",
            height: 115.21,
          },
          {
            date: "1906-08-29",
            height: 115.25,
          },
          {
            date: "1906-08-30",
            height: 115.28,
          },
          {
            date: "1906-08-31",
            height: 115.29,
          },
          {
            date: "1906-09-01",
            height: 115.32,
          },
          {
            date: "1906-09-02",
            height: 115.35,
          },
          {
            date: "1906-09-03",
            height: 115.38,
          },
          {
            date: "1906-09-04",
            height: 115.39,
          },
          {
            date: "1906-09-05",
            height: 115.42,
          },
          {
            date: "1906-09-06",
            height: 115.44,
          },
          {
            date: "1906-09-07",
            height: 115.48,
          },
          {
            date: "1906-09-08",
            height: 115.51,
          },
          {
            date: "1906-09-09",
            height: 115.54,
          },
          {
            date: "1906-09-10",
            height: 115.57,
          },
          {
            date: "1906-09-11",
            height: 115.61,
          },
          {
            date: "1906-09-12",
            height: 115.64,
          },
          {
            date: "1906-09-13",
            height: 115.67,
          },
          {
            date: "1906-09-14",
            height: 115.68,
          },
          {
            date: "1906-09-15",
            height: 115.71,
          },
          {
            date: "1906-09-16",
            height: 115.73,
          },
          {
            date: "1906-09-17",
            height: 115.75,
          },
          {
            date: "1906-09-18",
            height: 115.78,
          },
          {
            date: "1906-09-19",
            height: 115.8,
          },
          {
            date: "1906-09-20",
            height: 115.82,
          },
          {
            date: "1906-09-21",
            height: 115.84,
          },
          {
            date: "1906-09-22",
            height: 115.86,
          },
          {
            date: "1906-09-23",
            height: 115.88,
          },
          {
            date: "1906-09-24",
            height: 115.91,
          },
          {
            date: "1906-09-25",
            height: 115.95,
          },
          {
            date: "1906-09-26",
            height: 115.96,
          },
          {
            date: "1906-09-27",
            height: 115.98,
          },
          {
            date: "1906-09-28",
            height: 116.01,
          },
          {
            date: "1906-09-29",
            height: 116.05,
          },
          {
            date: "1906-09-30",
            height: 116.08,
          },
          {
            date: "1906-10-01",
            height: 116.11,
          },
          {
            date: "1906-10-02",
            height: 116.14,
          },
          {
            date: "1906-10-03",
            height: 116.17,
          },
          {
            date: "1906-10-04",
            height: 116.21,
          },
          {
            date: "1906-10-05",
            height: 116.24,
          },
          {
            date: "1906-10-06",
            height: 116.26,
          },
          {
            date: "1906-10-07",
            height: 116.29,
          },
          {
            date: "1906-10-08",
            height: 116.32,
          },
          {
            date: "1906-10-09",
            height: 116.35,
          },
          {
            date: "1906-10-10",
            height: 116.38,
          },
          {
            date: "1906-10-11",
            height: 116.39,
          },
          {
            date: "1906-10-12",
            height: 116.4,
          },
          {
            date: "1906-10-13",
            height: 116.43,
          },
          {
            date: "1906-10-14",
            height: 116.46,
          },
          {
            date: "1906-10-15",
            height: 116.5,
          },
          {
            date: "1906-10-16",
            height: 116.53,
          },
          {
            date: "1906-10-17",
            height: 116.55,
          },
          {
            date: "1906-10-18",
            height: 116.58,
          },
          {
            date: "1906-10-19",
            height: 116.61,
          },
          {
            date: "1906-10-20",
            height: 116.63,
          },
          {
            date: "1906-10-21",
            height: 116.65,
          },
          {
            date: "1906-10-22",
            height: 116.68,
          },
          {
            date: "1906-10-23",
            height: 116.71,
          },
          {
            date: "1906-10-24",
            height: 116.74,
          },
          {
            date: "1906-10-25",
            height: 116.76,
          },
          {
            date: "1906-10-26",
            height: 116.79,
          },
          {
            date: "1906-10-27",
            height: 116.8,
          },
          {
            date: "1906-10-28",
            height: 116.83,
          },
          {
            date: "1906-10-29",
            height: 116.85,
          },
          {
            date: "1906-10-30",
            height: 116.88,
          },
          {
            date: "1906-10-31",
            height: 116.91,
          },
          {
            date: "1906-11-01",
            height: 116.93,
          },
          {
            date: "1906-11-02",
            height: 116.97,
          },
          {
            date: "1906-11-03",
            height: 116.99,
          },
          {
            date: "1906-11-04",
            height: 117.03,
          },
          {
            date: "1906-11-05",
            height: 117.05,
          },
          {
            date: "1906-11-06",
            height: 117.06,
          },
          {
            date: "1906-11-07",
            height: 117.1,
          },
          {
            date: "1906-11-08",
            height: 117.13,
          },
          {
            date: "1906-11-09",
            height: 117.14,
          },
          {
            date: "1906-11-10",
            height: 117.16,
          },
          {
            date: "1906-11-11",
            height: 117.19,
          },
          {
            date: "1906-11-12",
            height: 117.21,
          },
          {
            date: "1906-11-13",
            height: 117.23,
          },
          {
            date: "1906-11-14",
            height: 117.24,
          },
          {
            date: "1906-11-15",
            height: 117.25,
          },
          {
            date: "1906-11-16",
            height: 117.29,
          },
          {
            date: "1906-11-17",
            height: 117.31,
          },
          {
            date: "1906-11-18",
            height: 117.35,
          },
          {
            date: "1906-11-19",
            height: 117.39,
          },
          {
            date: "1906-11-20",
            height: 117.42,
          },
          {
            date: "1906-11-21",
            height: 117.45,
          },
          {
            date: "1906-11-22",
            height: 117.47,
          },
          {
            date: "1906-11-23",
            height: 117.51,
          },
          {
            date: "1906-11-24",
            height: 117.52,
          },
          {
            date: "1906-11-25",
            height: 117.53,
          },
          {
            date: "1906-11-26",
            height: 117.57,
          },
          {
            date: "1906-11-27",
            height: 117.58,
          },
          {
            date: "1906-11-28",
            height: 117.62,
          },
          {
            date: "1906-11-29",
            height: 117.65,
          },
          {
            date: "1906-11-30",
            height: 117.69,
          },
          {
            date: "1906-12-01",
            height: 117.72,
          },
          {
            date: "1906-12-02",
            height: 117.74,
          },
          {
            date: "1906-12-03",
            height: 117.76,
          },
          {
            date: "1906-12-04",
            height: 117.79,
          },
          {
            date: "1906-12-05",
            height: 117.82,
          },
          {
            date: "1906-12-06",
            height: 117.83,
          },
          {
            date: "1906-12-07",
            height: 117.86,
          },
          {
            date: "1906-12-08",
            height: 117.89,
          },
          {
            date: "1906-12-09",
            height: 117.91,
          },
          {
            date: "1906-12-10",
            height: 117.94,
          },
          {
            date: "1906-12-11",
            height: 117.96,
          },
          {
            date: "1906-12-12",
            height: 117.99,
          },
          {
            date: "1906-12-13",
            height: 118,
          },
          {
            date: "1906-12-14",
            height: 118.01,
          },
          {
            date: "1906-12-15",
            height: 118.02,
          },
          {
            date: "1906-12-16",
            height: 118.06,
          },
          {
            date: "1906-12-17",
            height: 118.09,
          },
          {
            date: "1906-12-18",
            height: 118.11,
          },
          {
            date: "1906-12-19",
            height: 118.14,
          },
          {
            date: "1906-12-20",
            height: 118.15,
          },
          {
            date: "1906-12-21",
            height: 118.19,
          },
          {
            date: "1906-12-22",
            height: 118.2,
          },
          {
            date: "1906-12-23",
            height: 118.24,
          },
          {
            date: "1906-12-24",
            height: 118.26,
          },
          {
            date: "1906-12-25",
            height: 118.28,
          },
          {
            date: "1906-12-26",
            height: 118.32,
          },
          {
            date: "1906-12-27",
            height: 118.33,
          },
          {
            date: "1906-12-28",
            height: 118.36,
          },
          {
            date: "1906-12-29",
            height: 118.38,
          },
          {
            date: "1906-12-30",
            height: 118.42,
          },
          {
            date: "1906-12-31",
            height: 118.44,
          },
          {
            date: "1907-01-01",
            height: 118.47,
          },
          {
            date: "1907-01-02",
            height: 118.48,
          },
          {
            date: "1907-01-03",
            height: 118.5,
          },
          {
            date: "1907-01-04",
            height: 118.53,
          },
          {
            date: "1907-01-05",
            height: 118.56,
          },
          {
            date: "1907-01-06",
            height: 118.59,
          },
          {
            date: "1907-01-07",
            height: 118.62,
          },
          {
            date: "1907-01-08",
            height: 118.63,
          },
          {
            date: "1907-01-09",
            height: 118.65,
          },
          {
            date: "1907-01-10",
            height: 118.67,
          },
          {
            date: "1907-01-11",
            height: 118.7,
          },
          {
            date: "1907-01-12",
            height: 118.72,
          },
          {
            date: "1907-01-13",
            height: 118.75,
          },
          {
            date: "1907-01-14",
            height: 118.78,
          },
          {
            date: "1907-01-15",
            height: 118.81,
          },
          {
            date: "1907-01-16",
            height: 118.85,
          },
          {
            date: "1907-01-17",
            height: 118.87,
          },
          {
            date: "1907-01-18",
            height: 118.89,
          },
          {
            date: "1907-01-19",
            height: 118.91,
          },
          {
            date: "1907-01-20",
            height: 118.92,
          },
          {
            date: "1907-01-21",
            height: 118.94,
          },
          {
            date: "1907-01-22",
            height: 118.97,
          },
          {
            date: "1907-01-23",
            height: 118.99,
          },
          {
            date: "1907-01-24",
            height: 119.01,
          },
          {
            date: "1907-01-25",
            height: 119.02,
          },
          {
            date: "1907-01-26",
            height: 119.04,
          },
          {
            date: "1907-01-27",
            height: 119.06,
          },
          {
            date: "1907-01-28",
            height: 119.09,
          },
          {
            date: "1907-01-29",
            height: 119.1,
          },
          {
            date: "1907-01-30",
            height: 119.12,
          },
          {
            date: "1907-01-31",
            height: 119.14,
          },
          {
            date: "1907-02-01",
            height: 119.18,
          },
          {
            date: "1907-02-02",
            height: 119.19,
          },
          {
            date: "1907-02-03",
            height: 119.23,
          },
          {
            date: "1907-02-04",
            height: 119.25,
          },
          {
            date: "1907-02-05",
            height: 119.26,
          },
          {
            date: "1907-02-06",
            height: 119.28,
          },
          {
            date: "1907-02-07",
            height: 119.32,
          },
          {
            date: "1907-02-08",
            height: 119.34,
          },
          {
            date: "1907-02-09",
            height: 119.36,
          },
          {
            date: "1907-02-10",
            height: 119.38,
          },
          {
            date: "1907-02-11",
            height: 119.4,
          },
          {
            date: "1907-02-12",
            height: 119.44,
          },
          {
            date: "1907-02-13",
            height: 119.47,
          },
          {
            date: "1907-02-14",
            height: 119.5,
          },
          {
            date: "1907-02-15",
            height: 119.53,
          },
          {
            date: "1907-02-16",
            height: 119.56,
          },
          {
            date: "1907-02-17",
            height: 119.58,
          },
          {
            date: "1907-02-18",
            height: 119.61,
          },
          {
            date: "1907-02-19",
            height: 119.63,
          },
          {
            date: "1907-02-20",
            height: 119.67,
          },
          {
            date: "1907-02-21",
            height: 119.68,
          },
          {
            date: "1907-02-22",
            height: 119.7,
          },
          {
            date: "1907-02-23",
            height: 119.73,
          },
          {
            date: "1907-02-24",
            height: 119.77,
          },
          {
            date: "1907-02-25",
            height: 119.8,
          },
          {
            date: "1907-02-26",
            height: 119.81,
          },
          {
            date: "1907-02-27",
            height: 119.85,
          },
          {
            date: "1907-02-28",
            height: 119.86,
          },
          {
            date: "1907-03-01",
            height: 119.89,
          },
          {
            date: "1907-03-02",
            height: 119.92,
          },
          {
            date: "1907-03-03",
            height: 119.94,
          },
          {
            date: "1907-03-04",
            height: 119.98,
          },
          {
            date: "1907-03-05",
            height: 119.99,
          },
          {
            date: "1907-03-06",
            height: 120.02,
          },
          {
            date: "1907-03-07",
            height: 120.04,
          },
          {
            date: "1907-03-08",
            height: 120.06,
          },
          {
            date: "1907-03-09",
            height: 120.1,
          },
          {
            date: "1907-03-10",
            height: 120.11,
          },
          {
            date: "1907-03-11",
            height: 120.12,
          },
          {
            date: "1907-03-12",
            height: 120.16,
          },
          {
            date: "1907-03-13",
            height: 120.19,
          },
          {
            date: "1907-03-14",
            height: 120.21,
          },
          {
            date: "1907-03-15",
            height: 120.23,
          },
          {
            date: "1907-03-16",
            height: 120.27,
          },
          {
            date: "1907-03-17",
            height: 120.29,
          },
          {
            date: "1907-03-18",
            height: 120.3,
          },
          {
            date: "1907-03-19",
            height: 120.32,
          },
          {
            date: "1907-03-20",
            height: 120.35,
          },
          {
            date: "1907-03-21",
            height: 120.39,
          },
          {
            date: "1907-03-22",
            height: 120.42,
          },
          {
            date: "1907-03-23",
            height: 120.44,
          },
          {
            date: "1907-03-24",
            height: 120.46,
          },
          {
            date: "1907-03-25",
            height: 120.48,
          },
          {
            date: "1907-03-26",
            height: 120.52,
          },
          {
            date: "1907-03-27",
            height: 120.53,
          },
          {
            date: "1907-03-28",
            height: 120.55,
          },
          {
            date: "1907-03-29",
            height: 120.58,
          },
          {
            date: "1907-03-30",
            height: 120.6,
          },
          {
            date: "1907-03-31",
            height: 120.62,
          },
          {
            date: "1907-04-01",
            height: 120.63,
          },
          {
            date: "1907-04-02",
            height: 120.66,
          },
          {
            date: "1907-04-03",
            height: 120.67,
          },
          {
            date: "1907-04-04",
            height: 120.69,
          },
          {
            date: "1907-04-05",
            height: 120.72,
          },
          {
            date: "1907-04-06",
            height: 120.75,
          },
          {
            date: "1907-04-07",
            height: 120.77,
          },
          {
            date: "1907-04-08",
            height: 120.79,
          },
          {
            date: "1907-04-09",
            height: 120.83,
          },
          {
            date: "1907-04-10",
            height: 120.84,
          },
          {
            date: "1907-04-11",
            height: 120.85,
          },
          {
            date: "1907-04-12",
            height: 120.88,
          },
          {
            date: "1907-04-13",
            height: 120.91,
          },
          {
            date: "1907-04-14",
            height: 120.95,
          },
          {
            date: "1907-04-15",
            height: 120.97,
          },
          {
            date: "1907-04-16",
            height: 120.98,
          },
          {
            date: "1907-04-17",
            height: 121,
          },
          {
            date: "1907-04-18",
            height: 121.03,
          },
          {
            date: "1907-04-19",
            height: 121.07,
          },
          {
            date: "1907-04-20",
            height: 121.08,
          },
          {
            date: "1907-04-21",
            height: 121.12,
          },
          {
            date: "1907-04-22",
            height: 121.15,
          },
          {
            date: "1907-04-23",
            height: 121.16,
          },
          {
            date: "1907-04-24",
            height: 121.2,
          },
          {
            date: "1907-04-25",
            height: 121.21,
          },
          {
            date: "1907-04-26",
            height: 121.23,
          },
          {
            date: "1907-04-27",
            height: 121.27,
          },
          {
            date: "1907-04-28",
            height: 121.3,
          },
          {
            date: "1907-04-29",
            height: 121.34,
          },
          {
            date: "1907-04-30",
            height: 121.36,
          },
          {
            date: "1907-05-01",
            height: 121.39,
          },
          {
            date: "1907-05-02",
            height: 121.42,
          },
          {
            date: "1907-05-03",
            height: 121.45,
          },
          {
            date: "1907-05-04",
            height: 121.49,
          },
          {
            date: "1907-05-05",
            height: 121.5,
          },
          {
            date: "1907-05-06",
            height: 121.53,
          },
          {
            date: "1907-05-07",
            height: 121.56,
          },
          {
            date: "1907-05-08",
            height: 121.57,
          },
          {
            date: "1907-05-09",
            height: 121.61,
          },
          {
            date: "1907-05-10",
            height: 121.65,
          },
          {
            date: "1907-05-11",
            height: 121.69,
          },
          {
            date: "1907-05-12",
            height: 121.71,
          },
          {
            date: "1907-05-13",
            height: 121.74,
          },
          {
            date: "1907-05-14",
            height: 121.75,
          },
          {
            date: "1907-05-15",
            height: 121.77,
          },
          {
            date: "1907-05-16",
            height: 121.8,
          },
          {
            date: "1907-05-17",
            height: 121.82,
          },
          {
            date: "1907-05-18",
            height: 121.85,
          },
          {
            date: "1907-05-19",
            height: 121.88,
          },
          {
            date: "1907-05-20",
            height: 121.91,
          },
          {
            date: "1907-05-21",
            height: 121.93,
          },
          {
            date: "1907-05-22",
            height: 121.97,
          },
          {
            date: "1907-05-23",
            height: 122,
          },
          {
            date: "1907-05-24",
            height: 122.02,
          },
          {
            date: "1907-05-25",
            height: 122.04,
          },
          {
            date: "1907-05-26",
            height: 122.06,
          },
          {
            date: "1907-05-27",
            height: 122.08,
          },
          {
            date: "1907-05-28",
            height: 122.11,
          },
          {
            date: "1907-05-29",
            height: 122.15,
          },
          {
            date: "1907-05-30",
            height: 122.18,
          },
          {
            date: "1907-05-31",
            height: 122.2,
          },
          {
            date: "1907-06-01",
            height: 122.24,
          },
          {
            date: "1907-06-02",
            height: 122.25,
          },
          {
            date: "1907-06-03",
            height: 122.29,
          },
          {
            date: "1907-06-04",
            height: 122.33,
          },
          {
            date: "1907-06-05",
            height: 122.34,
          },
          {
            date: "1907-06-06",
            height: 122.38,
          },
          {
            date: "1907-06-07",
            height: 122.39,
          },
          {
            date: "1907-06-08",
            height: 122.41,
          },
          {
            date: "1907-06-09",
            height: 122.42,
          },
          {
            date: "1907-06-10",
            height: 122.46,
          },
          {
            date: "1907-06-11",
            height: 122.47,
          },
          {
            date: "1907-06-12",
            height: 122.5,
          },
          {
            date: "1907-06-13",
            height: 122.53,
          },
          {
            date: "1907-06-14",
            height: 122.56,
          },
          {
            date: "1907-06-15",
            height: 122.57,
          },
          {
            date: "1907-06-16",
            height: 122.59,
          },
          {
            date: "1907-06-17",
            height: 122.6,
          },
          {
            date: "1907-06-18",
            height: 122.63,
          },
          {
            date: "1907-06-19",
            height: 122.66,
          },
          {
            date: "1907-06-20",
            height: 122.7,
          },
          {
            date: "1907-06-21",
            height: 122.72,
          },
          {
            date: "1907-06-22",
            height: 122.75,
          },
          {
            date: "1907-06-23",
            height: 122.77,
          },
          {
            date: "1907-06-24",
            height: 122.79,
          },
          {
            date: "1907-06-25",
            height: 122.82,
          },
          {
            date: "1907-06-26",
            height: 122.85,
          },
          {
            date: "1907-06-27",
            height: 122.88,
          },
          {
            date: "1907-06-28",
            height: 122.89,
          },
          {
            date: "1907-06-29",
            height: 122.92,
          },
          {
            date: "1907-06-30",
            height: 122.94,
          },
          {
            date: "1907-07-01",
            height: 122.98,
          },
          {
            date: "1907-07-02",
            height: 122.99,
          },
          {
            date: "1907-07-03",
            height: 123.03,
          },
          {
            date: "1907-07-04",
            height: 123.05,
          },
          {
            date: "1907-07-05",
            height: 123.09,
          },
          {
            date: "1907-07-06",
            height: 123.13,
          },
          {
            date: "1907-07-07",
            height: 123.16,
          },
          {
            date: "1907-07-08",
            height: 123.18,
          },
          {
            date: "1907-07-09",
            height: 123.2,
          },
          {
            date: "1907-07-10",
            height: 123.23,
          },
          {
            date: "1907-07-11",
            height: 123.25,
          },
          {
            date: "1907-07-12",
            height: 123.27,
          },
          {
            date: "1907-07-13",
            height: 123.3,
          },
          {
            date: "1907-07-14",
            height: 123.33,
          },
          {
            date: "1907-07-15",
            height: 123.37,
          },
          {
            date: "1907-07-16",
            height: 123.39,
          },
          {
            date: "1907-07-17",
            height: 123.4,
          },
          {
            date: "1907-07-18",
            height: 123.43,
          },
          {
            date: "1907-07-19",
            height: 123.46,
          },
          {
            date: "1907-07-20",
            height: 123.49,
          },
          {
            date: "1907-07-21",
            height: 123.52,
          },
          {
            date: "1907-07-22",
            height: 123.54,
          },
          {
            date: "1907-07-23",
            height: 123.55,
          },
          {
            date: "1907-07-24",
            height: 123.59,
          },
          {
            date: "1907-07-25",
            height: 123.61,
          },
          {
            date: "1907-07-26",
            height: 123.64,
          },
          {
            date: "1907-07-27",
            height: 123.68,
          },
          {
            date: "1907-07-28",
            height: 123.71,
          },
          {
            date: "1907-07-29",
            height: 123.75,
          },
          {
            date: "1907-07-30",
            height: 123.77,
          },
          {
            date: "1907-07-31",
            height: 123.81,
          },
          {
            date: "1907-08-01",
            height: 123.84,
          },
          {
            date: "1907-08-02",
            height: 123.86,
          },
          {
            date: "1907-08-03",
            height: 123.87,
          },
          {
            date: "1907-08-04",
            height: 123.9,
          },
          {
            date: "1907-08-05",
            height: 123.92,
          },
          {
            date: "1907-08-06",
            height: 123.95,
          },
          {
            date: "1907-08-07",
            height: 123.98,
          },
          {
            date: "1907-08-08",
            height: 124.02,
          },
          {
            date: "1907-08-09",
            height: 124.05,
          },
          {
            date: "1907-08-10",
            height: 124.09,
          },
          {
            date: "1907-08-11",
            height: 124.11,
          },
          {
            date: "1907-08-12",
            height: 124.13,
          },
          {
            date: "1907-08-13",
            height: 124.16,
          },
          {
            date: "1907-08-14",
            height: 124.18,
          },
          {
            date: "1907-08-15",
            height: 124.22,
          },
          {
            date: "1907-08-16",
            height: 124.24,
          },
          {
            date: "1907-08-17",
            height: 124.26,
          },
          {
            date: "1907-08-18",
            height: 124.29,
          },
          {
            date: "1907-08-19",
            height: 124.32,
          },
          {
            date: "1907-08-20",
            height: 124.34,
          },
          {
            date: "1907-08-21",
            height: 124.35,
          },
          {
            date: "1907-08-22",
            height: 124.39,
          },
          {
            date: "1907-08-23",
            height: 124.43,
          },
          {
            date: "1907-08-24",
            height: 124.46,
          },
          {
            date: "1907-08-25",
            height: 124.47,
          },
          {
            date: "1907-08-26",
            height: 124.5,
          },
          {
            date: "1907-08-27",
            height: 124.53,
          },
          {
            date: "1907-08-28",
            height: 124.56,
          },
          {
            date: "1907-08-29",
            height: 124.59,
          },
          {
            date: "1907-08-30",
            height: 124.63,
          },
          {
            date: "1907-08-31",
            height: 124.66,
          },
          {
            date: "1907-09-01",
            height: 124.69,
          },
          {
            date: "1907-09-02",
            height: 124.72,
          },
          {
            date: "1907-09-03",
            height: 124.75,
          },
          {
            date: "1907-09-04",
            height: 124.78,
          },
          {
            date: "1907-09-05",
            height: 124.8,
          },
          {
            date: "1907-09-06",
            height: 124.82,
          },
          {
            date: "1907-09-07",
            height: 124.86,
          },
          {
            date: "1907-09-08",
            height: 124.9,
          },
          {
            date: "1907-09-09",
            height: 124.92,
          },
          {
            date: "1907-09-10",
            height: 124.95,
          },
          {
            date: "1907-09-11",
            height: 124.97,
          },
          {
            date: "1907-09-12",
            height: 125,
          },
          {
            date: "1907-09-13",
            height: 125.01,
          },
          {
            date: "1907-09-14",
            height: 125.04,
          },
          {
            date: "1907-09-15",
            height: 125.06,
          },
          {
            date: "1907-09-16",
            height: 125.07,
          },
          {
            date: "1907-09-17",
            height: 125.09,
          },
          {
            date: "1907-09-18",
            height: 125.1,
          },
          {
            date: "1907-09-19",
            height: 125.13,
          },
          {
            date: "1907-09-20",
            height: 125.14,
          },
          {
            date: "1907-09-21",
            height: 125.17,
          },
          {
            date: "1907-09-22",
            height: 125.19,
          },
          {
            date: "1907-09-23",
            height: 125.21,
          },
          {
            date: "1907-09-24",
            height: 125.25,
          },
          {
            date: "1907-09-25",
            height: 125.26,
          },
          {
            date: "1907-09-26",
            height: 125.29,
          },
          {
            date: "1907-09-27",
            height: 125.31,
          },
          {
            date: "1907-09-28",
            height: 125.34,
          },
          {
            date: "1907-09-29",
            height: 125.36,
          },
          {
            date: "1907-09-30",
            height: 125.4,
          },
          {
            date: "1907-10-01",
            height: 125.41,
          },
          {
            date: "1907-10-02",
            height: 125.45,
          },
          {
            date: "1907-10-03",
            height: 125.46,
          },
          {
            date: "1907-10-04",
            height: 125.47,
          },
          {
            date: "1907-10-05",
            height: 125.49,
          },
          {
            date: "1907-10-06",
            height: 125.52,
          },
          {
            date: "1907-10-07",
            height: 125.56,
          },
          {
            date: "1907-10-08",
            height: 125.59,
          },
          {
            date: "1907-10-09",
            height: 125.6,
          },
          {
            date: "1907-10-10",
            height: 125.62,
          },
          {
            date: "1907-10-11",
            height: 125.65,
          },
          {
            date: "1907-10-12",
            height: 125.67,
          },
          {
            date: "1907-10-13",
            height: 125.7,
          },
          {
            date: "1907-10-14",
            height: 125.72,
          },
          {
            date: "1907-10-15",
            height: 125.75,
          },
          {
            date: "1907-10-16",
            height: 125.78,
          },
          {
            date: "1907-10-17",
            height: 125.8,
          },
          {
            date: "1907-10-18",
            height: 125.81,
          },
          {
            date: "1907-10-19",
            height: 125.84,
          },
          {
            date: "1907-10-20",
            height: 125.88,
          },
          {
            date: "1907-10-21",
            height: 125.9,
          },
          {
            date: "1907-10-22",
            height: 125.92,
          },
          {
            date: "1907-10-23",
            height: 125.93,
          },
          {
            date: "1907-10-24",
            height: 125.96,
          },
          {
            date: "1907-10-25",
            height: 126,
          },
          {
            date: "1907-10-26",
            height: 126.02,
          },
          {
            date: "1907-10-27",
            height: 126.05,
          },
          {
            date: "1907-10-28",
            height: 126.07,
          },
          {
            date: "1907-10-29",
            height: 126.09,
          },
          {
            date: "1907-10-30",
            height: 126.13,
          },
          {
            date: "1907-10-31",
            height: 126.15,
          },
          {
            date: "1907-11-01",
            height: 126.19,
          },
          {
            date: "1907-11-02",
            height: 126.2,
          },
          {
            date: "1907-11-03",
            height: 126.24,
          },
          {
            date: "1907-11-04",
            height: 126.26,
          },
          {
            date: "1907-11-05",
            height: 126.29,
          },
          {
            date: "1907-11-06",
            height: 126.32,
          },
          {
            date: "1907-11-07",
            height: 126.36,
          },
          {
            date: "1907-11-08",
            height: 126.39,
          },
          {
            date: "1907-11-09",
            height: 126.4,
          },
          {
            date: "1907-11-10",
            height: 126.43,
          },
          {
            date: "1907-11-11",
            height: 126.45,
          },
          {
            date: "1907-11-12",
            height: 126.47,
          },
          {
            date: "1907-11-13",
            height: 126.48,
          },
          {
            date: "1907-11-14",
            height: 126.5,
          },
          {
            date: "1907-11-15",
            height: 126.51,
          },
          {
            date: "1907-11-16",
            height: 126.52,
          },
          {
            date: "1907-11-17",
            height: 126.55,
          },
          {
            date: "1907-11-18",
            height: 126.57,
          },
          {
            date: "1907-11-19",
            height: 126.6,
          },
          {
            date: "1907-11-20",
            height: 126.62,
          },
          {
            date: "1907-11-21",
            height: 126.63,
          },
          {
            date: "1907-11-22",
            height: 126.64,
          },
          {
            date: "1907-11-23",
            height: 126.67,
          },
          {
            date: "1907-11-24",
            height: 126.71,
          },
          {
            date: "1907-11-25",
            height: 126.73,
          },
          {
            date: "1907-11-26",
            height: 126.75,
          },
          {
            date: "1907-11-27",
            height: 126.78,
          },
          {
            date: "1907-11-28",
            height: 126.79,
          },
          {
            date: "1907-11-29",
            height: 126.82,
          },
          {
            date: "1907-11-30",
            height: 126.86,
          },
          {
            date: "1907-12-01",
            height: 126.9,
          },
          {
            date: "1907-12-02",
            height: 126.91,
          },
          {
            date: "1907-12-03",
            height: 126.94,
          },
          {
            date: "1907-12-04",
            height: 126.95,
          },
          {
            date: "1907-12-05",
            height: 126.97,
          },
          {
            date: "1907-12-06",
            height: 126.99,
          },
          {
            date: "1907-12-07",
            height: 127,
          },
          {
            date: "1907-12-08",
            height: 127.03,
          },
          {
            date: "1907-12-09",
            height: 127.05,
          },
          {
            date: "1907-12-10",
            height: 127.07,
          },
          {
            date: "1907-12-11",
            height: 127.09,
          },
          {
            date: "1907-12-12",
            height: 127.11,
          },
          {
            date: "1907-12-13",
            height: 127.12,
          },
          {
            date: "1907-12-14",
            height: 127.16,
          },
          {
            date: "1907-12-15",
            height: 127.19,
          },
          {
            date: "1907-12-16",
            height: 127.21,
          },
          {
            date: "1907-12-17",
            height: 127.24,
          },
          {
            date: "1907-12-18",
            height: 127.27,
          },
          {
            date: "1907-12-19",
            height: 127.28,
          },
          {
            date: "1907-12-20",
            height: 127.32,
          },
          {
            date: "1907-12-21",
            height: 127.35,
          },
          {
            date: "1907-12-22",
            height: 127.37,
          },
          {
            date: "1907-12-23",
            height: 127.41,
          },
          {
            date: "1907-12-24",
            height: 127.44,
          },
          {
            date: "1907-12-25",
            height: 127.46,
          },
          {
            date: "1907-12-26",
            height: 127.49,
          },
          {
            date: "1907-12-27",
            height: 127.51,
          },
          {
            date: "1907-12-28",
            height: 127.53,
          },
          {
            date: "1907-12-29",
            height: 127.55,
          },
          {
            date: "1907-12-30",
            height: 127.58,
          },
          {
            date: "1907-12-31",
            height: 127.62,
          },
          {
            date: "1908-01-01",
            height: 127.65,
          },
          {
            date: "1908-01-02",
            height: 127.66,
          },
          {
            date: "1908-01-03",
            height: 127.67,
          },
          {
            date: "1908-01-04",
            height: 127.7,
          },
          {
            date: "1908-01-05",
            height: 127.74,
          },
          {
            date: "1908-01-06",
            height: 127.76,
          },
          {
            date: "1908-01-07",
            height: 127.79,
          },
          {
            date: "1908-01-08",
            height: 127.8,
          },
          {
            date: "1908-01-09",
            height: 127.82,
          },
          {
            date: "1908-01-10",
            height: 127.83,
          },
          {
            date: "1908-01-11",
            height: 127.85,
          },
          {
            date: "1908-01-12",
            height: 127.86,
          },
          {
            date: "1908-01-13",
            height: 127.88,
          },
          {
            date: "1908-01-14",
            height: 127.9,
          },
          {
            date: "1908-01-15",
            height: 127.94,
          },
          {
            date: "1908-01-16",
            height: 127.97,
          },
          {
            date: "1908-01-17",
            height: 128,
          },
          {
            date: "1908-01-18",
            height: 128.04,
          },
          {
            date: "1908-01-19",
            height: 128.08,
          },
          {
            date: "1908-01-20",
            height: 128.1,
          },
          {
            date: "1908-01-21",
            height: 128.13,
          },
          {
            date: "1908-01-22",
            height: 128.15,
          },
          {
            date: "1908-01-23",
            height: 128.19,
          },
          {
            date: "1908-01-24",
            height: 128.2,
          },
          {
            date: "1908-01-25",
            height: 128.22,
          },
          {
            date: "1908-01-26",
            height: 128.25,
          },
          {
            date: "1908-01-27",
            height: 128.27,
          },
          {
            date: "1908-01-28",
            height: 128.3,
          },
          {
            date: "1908-01-29",
            height: 128.33,
          },
          {
            date: "1908-01-30",
            height: 128.37,
          },
          {
            date: "1908-01-31",
            height: 128.4,
          },
          {
            date: "1908-02-01",
            height: 128.42,
          },
          {
            date: "1908-02-02",
            height: 128.44,
          },
          {
            date: "1908-02-03",
            height: 128.46,
          },
          {
            date: "1908-02-04",
            height: 128.48,
          },
          {
            date: "1908-02-05",
            height: 128.52,
          },
          {
            date: "1908-02-06",
            height: 128.53,
          },
          {
            date: "1908-02-07",
            height: 128.55,
          },
          {
            date: "1908-02-08",
            height: 128.58,
          },
          {
            date: "1908-02-09",
            height: 128.61,
          },
          {
            date: "1908-02-10",
            height: 128.63,
          },
          {
            date: "1908-02-11",
            height: 128.64,
          },
          {
            date: "1908-02-12",
            height: 128.68,
          },
          {
            date: "1908-02-13",
            height: 128.69,
          },
          {
            date: "1908-02-14",
            height: 128.72,
          },
          {
            date: "1908-02-15",
            height: 128.76,
          },
          {
            date: "1908-02-16",
            height: 128.79,
          },
          {
            date: "1908-02-17",
            height: 128.8,
          },
          {
            date: "1908-02-18",
            height: 128.84,
          },
          {
            date: "1908-02-19",
            height: 128.87,
          },
          {
            date: "1908-02-20",
            height: 128.91,
          },
          {
            date: "1908-02-21",
            height: 128.93,
          },
          {
            date: "1908-02-22",
            height: 128.95,
          },
          {
            date: "1908-02-23",
            height: 128.98,
          },
          {
            date: "1908-02-24",
            height: 129.01,
          },
          {
            date: "1908-02-25",
            height: 129.04,
          },
          {
            date: "1908-02-26",
            height: 129.07,
          },
          {
            date: "1908-02-27",
            height: 129.1,
          },
          {
            date: "1908-02-28",
            height: 129.13,
          },
          {
            date: "1908-02-29",
            height: 129.15,
          },
          {
            date: "1908-03-01",
            height: 129.16,
          },
          {
            date: "1908-03-02",
            height: 129.19,
          },
          {
            date: "1908-03-03",
            height: 129.21,
          },
          {
            date: "1908-03-04",
            height: 129.24,
          },
          {
            date: "1908-03-05",
            height: 129.27,
          },
          {
            date: "1908-03-06",
            height: 129.3,
          },
          {
            date: "1908-03-07",
            height: 129.31,
          },
          {
            date: "1908-03-08",
            height: 129.32,
          },
          {
            date: "1908-03-09",
            height: 129.34,
          },
          {
            date: "1908-03-10",
            height: 129.35,
          },
          {
            date: "1908-03-11",
            height: 129.37,
          },
          {
            date: "1908-03-12",
            height: 129.39,
          },
          {
            date: "1908-03-13",
            height: 129.4,
          },
          {
            date: "1908-03-14",
            height: 129.43,
          },
          {
            date: "1908-03-15",
            height: 129.47,
          },
          {
            date: "1908-03-16",
            height: 129.51,
          },
          {
            date: "1908-03-17",
            height: 129.53,
          },
          {
            date: "1908-03-18",
            height: 129.56,
          },
          {
            date: "1908-03-19",
            height: 129.59,
          },
          {
            date: "1908-03-20",
            height: 129.63,
          },
          {
            date: "1908-03-21",
            height: 129.66,
          },
          {
            date: "1908-03-22",
            height: 129.69,
          },
          {
            date: "1908-03-23",
            height: 129.72,
          },
          {
            date: "1908-03-24",
            height: 129.76,
          },
          {
            date: "1908-03-25",
            height: 129.79,
          },
          {
            date: "1908-03-26",
            height: 129.81,
          },
          {
            date: "1908-03-27",
            height: 129.84,
          },
          {
            date: "1908-03-28",
            height: 129.86,
          },
          {
            date: "1908-03-29",
            height: 129.9,
          },
          {
            date: "1908-03-30",
            height: 129.91,
          },
          {
            date: "1908-03-31",
            height: 129.93,
          },
          {
            date: "1908-04-01",
            height: 129.95,
          },
          {
            date: "1908-04-02",
            height: 129.96,
          },
          {
            date: "1908-04-03",
            height: 130,
          },
          {
            date: "1908-04-04",
            height: 130.01,
          },
          {
            date: "1908-04-05",
            height: 130.03,
          },
          {
            date: "1908-04-06",
            height: 130.06,
          },
          {
            date: "1908-04-07",
            height: 130.08,
          },
          {
            date: "1908-04-08",
            height: 130.09,
          },
          {
            date: "1908-04-09",
            height: 130.1,
          },
          {
            date: "1908-04-10",
            height: 130.13,
          },
          {
            date: "1908-04-11",
            height: 130.15,
          },
          {
            date: "1908-04-12",
            height: 130.19,
          },
          {
            date: "1908-04-13",
            height: 130.23,
          },
          {
            date: "1908-04-14",
            height: 130.24,
          },
          {
            date: "1908-04-15",
            height: 130.27,
          },
          {
            date: "1908-04-16",
            height: 130.3,
          },
          {
            date: "1908-04-17",
            height: 130.33,
          },
          {
            date: "1908-04-18",
            height: 130.36,
          },
          {
            date: "1908-04-19",
            height: 130.38,
          },
          {
            date: "1908-04-20",
            height: 130.4,
          },
          {
            date: "1908-04-21",
            height: 130.43,
          },
          {
            date: "1908-04-22",
            height: 130.46,
          },
          {
            date: "1908-04-23",
            height: 130.49,
          },
          {
            date: "1908-04-24",
            height: 130.51,
          },
          {
            date: "1908-04-25",
            height: 130.52,
          },
          {
            date: "1908-04-26",
            height: 130.55,
          },
          {
            date: "1908-04-27",
            height: 130.58,
          },
          {
            date: "1908-04-28",
            height: 130.62,
          },
          {
            date: "1908-04-29",
            height: 130.65,
          },
          {
            date: "1908-04-30",
            height: 130.67,
          },
          {
            date: "1908-05-01",
            height: 130.71,
          },
          {
            date: "1908-05-02",
            height: 130.74,
          },
          {
            date: "1908-05-03",
            height: 130.76,
          },
          {
            date: "1908-05-04",
            height: 130.8,
          },
          {
            date: "1908-05-05",
            height: 130.82,
          },
          {
            date: "1908-05-06",
            height: 130.85,
          },
          {
            date: "1908-05-07",
            height: 130.86,
          },
          {
            date: "1908-05-08",
            height: 130.88,
          },
          {
            date: "1908-05-09",
            height: 130.9,
          },
          {
            date: "1908-05-10",
            height: 130.93,
          },
          {
            date: "1908-05-11",
            height: 130.94,
          },
          {
            date: "1908-05-12",
            height: 130.96,
          },
          {
            date: "1908-05-13",
            height: 131,
          },
          {
            date: "1908-05-14",
            height: 131.03,
          },
          {
            date: "1908-05-15",
            height: 131.04,
          },
          {
            date: "1908-05-16",
            height: 131.07,
          },
          {
            date: "1908-05-17",
            height: 131.09,
          },
          {
            date: "1908-05-18",
            height: 131.12,
          },
          {
            date: "1908-05-19",
            height: 131.15,
          },
          {
            date: "1908-05-20",
            height: 131.18,
          },
          {
            date: "1908-05-21",
            height: 131.2,
          },
          {
            date: "1908-05-22",
            height: 131.24,
          },
          {
            date: "1908-05-23",
            height: 131.27,
          },
          {
            date: "1908-05-24",
            height: 131.28,
          },
          {
            date: "1908-05-25",
            height: 131.3,
          },
          {
            date: "1908-05-26",
            height: 131.31,
          },
          {
            date: "1908-05-27",
            height: 131.34,
          },
          {
            date: "1908-05-28",
            height: 131.36,
          },
          {
            date: "1908-05-29",
            height: 131.4,
          },
          {
            date: "1908-05-30",
            height: 131.42,
          },
          {
            date: "1908-05-31",
            height: 131.44,
          },
          {
            date: "1908-06-01",
            height: 131.48,
          },
          {
            date: "1908-06-02",
            height: 131.51,
          },
          {
            date: "1908-06-03",
            height: 131.52,
          },
          {
            date: "1908-06-04",
            height: 131.56,
          },
          {
            date: "1908-06-05",
            height: 131.57,
          },
          {
            date: "1908-06-06",
            height: 131.61,
          },
          {
            date: "1908-06-07",
            height: 131.64,
          },
          {
            date: "1908-06-08",
            height: 131.68,
          },
          {
            date: "1908-06-09",
            height: 131.7,
          },
          {
            date: "1908-06-10",
            height: 131.71,
          },
          {
            date: "1908-06-11",
            height: 131.73,
          },
          {
            date: "1908-06-12",
            height: 131.76,
          },
          {
            date: "1908-06-13",
            height: 131.78,
          },
          {
            date: "1908-06-14",
            height: 131.79,
          },
          {
            date: "1908-06-15",
            height: 131.83,
          },
          {
            date: "1908-06-16",
            height: 131.86,
          },
          {
            date: "1908-06-17",
            height: 131.88,
          },
          {
            date: "1908-06-18",
            height: 131.92,
          },
          {
            date: "1908-06-19",
            height: 131.96,
          },
          {
            date: "1908-06-20",
            height: 131.99,
          },
          {
            date: "1908-06-21",
            height: 132,
          },
          {
            date: "1908-06-22",
            height: 132.02,
          },
          {
            date: "1908-06-23",
            height: 132.04,
          },
          {
            date: "1908-06-24",
            height: 132.08,
          },
          {
            date: "1908-06-25",
            height: 132.11,
          },
          {
            date: "1908-06-26",
            height: 132.12,
          },
          {
            date: "1908-06-27",
            height: 132.16,
          },
          {
            date: "1908-06-28",
            height: 132.19,
          },
          {
            date: "1908-06-29",
            height: 132.22,
          },
          {
            date: "1908-06-30",
            height: 132.23,
          },
          {
            date: "1908-07-01",
            height: 132.27,
          },
          {
            date: "1908-07-02",
            height: 132.29,
          },
          {
            date: "1908-07-03",
            height: 132.31,
          },
          {
            date: "1908-07-04",
            height: 132.34,
          },
          {
            date: "1908-07-05",
            height: 132.37,
          },
          {
            date: "1908-07-06",
            height: 132.39,
          },
          {
            date: "1908-07-07",
            height: 132.42,
          },
          {
            date: "1908-07-08",
            height: 132.43,
          },
          {
            date: "1908-07-09",
            height: 132.47,
          },
          {
            date: "1908-07-10",
            height: 132.48,
          },
          {
            date: "1908-07-11",
            height: 132.51,
          },
          {
            date: "1908-07-12",
            height: 132.54,
          },
          {
            date: "1908-07-13",
            height: 132.57,
          },
          {
            date: "1908-07-14",
            height: 132.59,
          },
          {
            date: "1908-07-15",
            height: 132.61,
          },
          {
            date: "1908-07-16",
            height: 132.65,
          },
          {
            date: "1908-07-17",
            height: 132.68,
          },
          {
            date: "1908-07-18",
            height: 132.7,
          },
          {
            date: "1908-07-19",
            height: 132.73,
          },
          {
            date: "1908-07-20",
            height: 132.76,
          },
          {
            date: "1908-07-21",
            height: 132.8,
          },
          {
            date: "1908-07-22",
            height: 132.83,
          },
          {
            date: "1908-07-23",
            height: 132.86,
          },
          {
            date: "1908-07-24",
            height: 132.89,
          },
          {
            date: "1908-07-25",
            height: 132.9,
          },
          {
            date: "1908-07-26",
            height: 132.92,
          },
          {
            date: "1908-07-27",
            height: 132.94,
          },
          {
            date: "1908-07-28",
            height: 132.98,
          },
          {
            date: "1908-07-29",
            height: 133,
          },
          {
            date: "1908-07-30",
            height: 133.03,
          },
          {
            date: "1908-07-31",
            height: 133.06,
          },
          {
            date: "1908-08-01",
            height: 133.1,
          },
          {
            date: "1908-08-02",
            height: 133.12,
          },
          {
            date: "1908-08-03",
            height: 133.14,
          },
          {
            date: "1908-08-04",
            height: 133.17,
          },
          {
            date: "1908-08-05",
            height: 133.19,
          },
          {
            date: "1908-08-06",
            height: 133.21,
          },
          {
            date: "1908-08-07",
            height: 133.25,
          },
          {
            date: "1908-08-08",
            height: 133.26,
          },
          {
            date: "1908-08-09",
            height: 133.3,
          },
          {
            date: "1908-08-10",
            height: 133.31,
          },
          {
            date: "1908-08-11",
            height: 133.33,
          },
          {
            date: "1908-08-12",
            height: 133.34,
          },
          {
            date: "1908-08-13",
            height: 133.36,
          },
          {
            date: "1908-08-14",
            height: 133.38,
          },
          {
            date: "1908-08-15",
            height: 133.4,
          },
          {
            date: "1908-08-16",
            height: 133.42,
          },
          {
            date: "1908-08-17",
            height: 133.46,
          },
          {
            date: "1908-08-18",
            height: 133.48,
          },
          {
            date: "1908-08-19",
            height: 133.51,
          },
          {
            date: "1908-08-20",
            height: 133.54,
          },
          {
            date: "1908-08-21",
            height: 133.57,
          },
          {
            date: "1908-08-22",
            height: 133.61,
          },
          {
            date: "1908-08-23",
            height: 133.64,
          },
          {
            date: "1908-08-24",
            height: 133.67,
          },
          {
            date: "1908-08-25",
            height: 133.7,
          },
          {
            date: "1908-08-26",
            height: 133.74,
          },
          {
            date: "1908-08-27",
            height: 133.75,
          },
          {
            date: "1908-08-28",
            height: 133.77,
          },
          {
            date: "1908-08-29",
            height: 133.79,
          },
          {
            date: "1908-08-30",
            height: 133.8,
          },
          {
            date: "1908-08-31",
            height: 133.82,
          },
          {
            date: "1908-09-01",
            height: 133.83,
          },
          {
            date: "1908-09-02",
            height: 133.86,
          },
          {
            date: "1908-09-03",
            height: 133.88,
          },
          {
            date: "1908-09-04",
            height: 133.91,
          },
          {
            date: "1908-09-05",
            height: 133.94,
          },
          {
            date: "1908-09-06",
            height: 133.96,
          },
          {
            date: "1908-09-07",
            height: 133.99,
          },
          {
            date: "1908-09-08",
            height: 134,
          },
          {
            date: "1908-09-09",
            height: 134.02,
          },
          {
            date: "1908-09-10",
            height: 134.05,
          },
          {
            date: "1908-09-11",
            height: 134.06,
          },
          {
            date: "1908-09-12",
            height: 134.09,
          },
          {
            date: "1908-09-13",
            height: 134.11,
          },
          {
            date: "1908-09-14",
            height: 134.14,
          },
          {
            date: "1908-09-15",
            height: 134.15,
          },
          {
            date: "1908-09-16",
            height: 134.16,
          },
          {
            date: "1908-09-17",
            height: 134.17,
          },
          {
            date: "1908-09-18",
            height: 134.19,
          },
          {
            date: "1908-09-19",
            height: 134.21,
          },
          {
            date: "1908-09-20",
            height: 134.23,
          },
          {
            date: "1908-09-21",
            height: 134.25,
          },
          {
            date: "1908-09-22",
            height: 134.26,
          },
          {
            date: "1908-09-23",
            height: 134.29,
          },
          {
            date: "1908-09-24",
            height: 134.31,
          },
          {
            date: "1908-09-25",
            height: 134.33,
          },
          {
            date: "1908-09-26",
            height: 134.36,
          },
          {
            date: "1908-09-27",
            height: 134.4,
          },
          {
            date: "1908-09-28",
            height: 134.41,
          },
          {
            date: "1908-09-29",
            height: 134.44,
          },
          {
            date: "1908-09-30",
            height: 134.45,
          },
          {
            date: "1908-10-01",
            height: 134.49,
          },
          {
            date: "1908-10-02",
            height: 134.5,
          },
          {
            date: "1908-10-03",
            height: 134.52,
          },
          {
            date: "1908-10-04",
            height: 134.55,
          },
          {
            date: "1908-10-05",
            height: 134.59,
          },
          {
            date: "1908-10-06",
            height: 134.63,
          },
          {
            date: "1908-10-07",
            height: 134.64,
          },
          {
            date: "1908-10-08",
            height: 134.66,
          },
          {
            date: "1908-10-09",
            height: 134.68,
          },
          {
            date: "1908-10-10",
            height: 134.7,
          },
          {
            date: "1908-10-11",
            height: 134.72,
          },
          {
            date: "1908-10-12",
            height: 134.74,
          },
          {
            date: "1908-10-13",
            height: 134.78,
          },
          {
            date: "1908-10-14",
            height: 134.8,
          },
          {
            date: "1908-10-15",
            height: 134.84,
          },
          {
            date: "1908-10-16",
            height: 134.85,
          },
          {
            date: "1908-10-17",
            height: 134.88,
          },
          {
            date: "1908-10-18",
            height: 134.91,
          },
          {
            date: "1908-10-19",
            height: 134.92,
          },
          {
            date: "1908-10-20",
            height: 134.94,
          },
          {
            date: "1908-10-21",
            height: 134.96,
          },
          {
            date: "1908-10-22",
            height: 134.98,
          },
          {
            date: "1908-10-23",
            height: 135,
          },
          {
            date: "1908-10-24",
            height: 135.04,
          },
          {
            date: "1908-10-25",
            height: 135.07,
          },
          {
            date: "1908-10-26",
            height: 135.08,
          },
          {
            date: "1908-10-27",
            height: 135.1,
          },
          {
            date: "1908-10-28",
            height: 135.13,
          },
          {
            date: "1908-10-29",
            height: 135.15,
          },
          {
            date: "1908-10-30",
            height: 135.19,
          },
          {
            date: "1908-10-31",
            height: 135.23,
          },
          {
            date: "1908-11-01",
            height: 135.26,
          },
          {
            date: "1908-11-02",
            height: 135.28,
          },
          {
            date: "1908-11-03",
            height: 135.3,
          },
          {
            date: "1908-11-04",
            height: 135.33,
          },
          {
            date: "1908-11-05",
            height: 135.37,
          },
          {
            date: "1908-11-06",
            height: 135.4,
          },
          {
            date: "1908-11-07",
            height: 135.43,
          },
          {
            date: "1908-11-08",
            height: 135.44,
          },
          {
            date: "1908-11-09",
            height: 135.46,
          },
          {
            date: "1908-11-10",
            height: 135.48,
          },
          {
            date: "1908-11-11",
            height: 135.5,
          },
          {
            date: "1908-11-12",
            height: 135.52,
          },
          {
            date: "1908-11-13",
            height: 135.55,
          },
          {
            date: "1908-11-14",
            height: 135.57,
          },
          {
            date: "1908-11-15",
            height: 135.59,
          },
          {
            date: "1908-11-16",
            height: 135.6,
          },
          {
            date: "1908-11-17",
            height: 135.61,
          },
          {
            date: "1908-11-18",
            height: 135.63,
          },
          {
            date: "1908-11-19",
            height: 135.66,
          },
          {
            date: "1908-11-20",
            height: 135.69,
          },
          {
            date: "1908-11-21",
            height: 135.72,
          },
          {
            date: "1908-11-22",
            height: 135.75,
          },
          {
            date: "1908-11-23",
            height: 135.77,
          },
          {
            date: "1908-11-24",
            height: 135.81,
          },
          {
            date: "1908-11-25",
            height: 135.84,
          },
          {
            date: "1908-11-26",
            height: 135.86,
          },
          {
            date: "1908-11-27",
            height: 135.88,
          },
          {
            date: "1908-11-28",
            height: 135.92,
          },
          {
            date: "1908-11-29",
            height: 135.94,
          },
          {
            date: "1908-11-30",
            height: 135.95,
          },
          {
            date: "1908-12-01",
            height: 135.97,
          },
          {
            date: "1908-12-02",
            height: 136,
          },
          {
            date: "1908-12-03",
            height: 136.02,
          },
          {
            date: "1908-12-04",
            height: 136.06,
          },
          {
            date: "1908-12-05",
            height: 136.08,
          },
          {
            date: "1908-12-06",
            height: 136.12,
          },
          {
            date: "1908-12-07",
            height: 136.16,
          },
          {
            date: "1908-12-08",
            height: 136.2,
          },
          {
            date: "1908-12-09",
            height: 136.23,
          },
          {
            date: "1908-12-10",
            height: 136.25,
          },
          {
            date: "1908-12-11",
            height: 136.27,
          },
          {
            date: "1908-12-12",
            height: 136.29,
          },
          {
            date: "1908-12-13",
            height: 136.31,
          },
          {
            date: "1908-12-14",
            height: 136.33,
          },
          {
            date: "1908-12-15",
            height: 136.35,
          },
          {
            date: "1908-12-16",
            height: 136.38,
          },
          {
            date: "1908-12-17",
            height: 136.4,
          },
          {
            date: "1908-12-18",
            height: 136.43,
          },
          {
            date: "1908-12-19",
            height: 136.45,
          },
          {
            date: "1908-12-20",
            height: 136.47,
          },
          {
            date: "1908-12-21",
            height: 136.5,
          },
          {
            date: "1908-12-22",
            height: 136.53,
          },
          {
            date: "1908-12-23",
            height: 136.56,
          },
          {
            date: "1908-12-24",
            height: 136.59,
          },
          {
            date: "1908-12-25",
            height: 136.6,
          },
          {
            date: "1908-12-26",
            height: 136.63,
          },
          {
            date: "1908-12-27",
            height: 136.66,
          },
          {
            date: "1908-12-28",
            height: 136.7,
          },
          {
            date: "1908-12-29",
            height: 136.73,
          },
          {
            date: "1908-12-30",
            height: 136.76,
          },
          {
            date: "1908-12-31",
            height: 136.79,
          },
          {
            date: "1909-01-01",
            height: 136.8,
          },
          {
            date: "1909-01-02",
            height: 136.84,
          },
          {
            date: "1909-01-03",
            height: 136.85,
          },
          {
            date: "1909-01-04",
            height: 136.88,
          },
          {
            date: "1909-01-05",
            height: 136.91,
          },
          {
            date: "1909-01-06",
            height: 136.94,
          },
          {
            date: "1909-01-07",
            height: 136.96,
          },
          {
            date: "1909-01-08",
            height: 137,
          },
          {
            date: "1909-01-09",
            height: 137.01,
          },
          {
            date: "1909-01-10",
            height: 137.03,
          },
          {
            date: "1909-01-11",
            height: 137.04,
          },
          {
            date: "1909-01-12",
            height: 137.06,
          },
          {
            date: "1909-01-13",
            height: 137.09,
          },
          {
            date: "1909-01-14",
            height: 137.13,
          },
          {
            date: "1909-01-15",
            height: 137.17,
          },
          {
            date: "1909-01-16",
            height: 137.2,
          },
          {
            date: "1909-01-17",
            height: 137.23,
          },
          {
            date: "1909-01-18",
            height: 137.25,
          },
          {
            date: "1909-01-19",
            height: 137.28,
          },
          {
            date: "1909-01-20",
            height: 137.31,
          },
          {
            date: "1909-01-21",
            height: 137.32,
          },
          {
            date: "1909-01-22",
            height: 137.34,
          },
          {
            date: "1909-01-23",
            height: 137.35,
          },
          {
            date: "1909-01-24",
            height: 137.38,
          },
          {
            date: "1909-01-25",
            height: 137.41,
          },
          {
            date: "1909-01-26",
            height: 137.43,
          },
          {
            date: "1909-01-27",
            height: 137.45,
          },
          {
            date: "1909-01-28",
            height: 137.47,
          },
          {
            date: "1909-01-29",
            height: 137.5,
          },
          {
            date: "1909-01-30",
            height: 137.52,
          },
          {
            date: "1909-01-31",
            height: 137.54,
          },
          {
            date: "1909-02-01",
            height: 137.55,
          },
          {
            date: "1909-02-02",
            height: 137.57,
          },
          {
            date: "1909-02-03",
            height: 137.59,
          },
          {
            date: "1909-02-04",
            height: 137.6,
          },
          {
            date: "1909-02-05",
            height: 137.63,
          },
          {
            date: "1909-02-06",
            height: 137.64,
          },
          {
            date: "1909-02-07",
            height: 137.67,
          },
          {
            date: "1909-02-08",
            height: 137.7,
          },
          {
            date: "1909-02-09",
            height: 137.73,
          },
          {
            date: "1909-02-10",
            height: 137.74,
          },
          {
            date: "1909-02-11",
            height: 137.75,
          },
          {
            date: "1909-02-12",
            height: 137.79,
          },
          {
            date: "1909-02-13",
            height: 137.82,
          },
          {
            date: "1909-02-14",
            height: 137.84,
          },
          {
            date: "1909-02-15",
            height: 137.87,
          },
          {
            date: "1909-02-16",
            height: 137.9,
          },
          {
            date: "1909-02-17",
            height: 137.93,
          },
          {
            date: "1909-02-18",
            height: 137.95,
          },
          {
            date: "1909-02-19",
            height: 137.97,
          },
          {
            date: "1909-02-20",
            height: 138,
          },
          {
            date: "1909-02-21",
            height: 138.04,
          },
          {
            date: "1909-02-22",
            height: 138.07,
          },
          {
            date: "1909-02-23",
            height: 138.08,
          },
          {
            date: "1909-02-24",
            height: 138.12,
          },
          {
            date: "1909-02-25",
            height: 138.15,
          },
          {
            date: "1909-02-26",
            height: 138.18,
          },
          {
            date: "1909-02-27",
            height: 138.2,
          },
          {
            date: "1909-02-28",
            height: 138.24,
          },
          {
            date: "1909-03-01",
            height: 138.27,
          },
          {
            date: "1909-03-02",
            height: 138.28,
          },
          {
            date: "1909-03-03",
            height: 138.3,
          },
          {
            date: "1909-03-04",
            height: 138.32,
          },
          {
            date: "1909-03-05",
            height: 138.34,
          },
          {
            date: "1909-03-06",
            height: 138.36,
          },
          {
            date: "1909-03-07",
            height: 138.39,
          },
          {
            date: "1909-03-08",
            height: 138.41,
          },
          {
            date: "1909-03-09",
            height: 138.45,
          },
          {
            date: "1909-03-10",
            height: 138.46,
          },
          {
            date: "1909-03-11",
            height: 138.48,
          },
          {
            date: "1909-03-12",
            height: 138.51,
          },
          {
            date: "1909-03-13",
            height: 138.53,
          },
          {
            date: "1909-03-14",
            height: 138.55,
          },
          {
            date: "1909-03-15",
            height: 138.59,
          },
          {
            date: "1909-03-16",
            height: 138.62,
          },
          {
            date: "1909-03-17",
            height: 138.64,
          },
          {
            date: "1909-03-18",
            height: 138.67,
          },
          {
            date: "1909-03-19",
            height: 138.7,
          },
          {
            date: "1909-03-20",
            height: 138.71,
          },
          {
            date: "1909-03-21",
            height: 138.73,
          },
          {
            date: "1909-03-22",
            height: 138.74,
          },
          {
            date: "1909-03-23",
            height: 138.78,
          },
          {
            date: "1909-03-24",
            height: 138.79,
          },
          {
            date: "1909-03-25",
            height: 138.81,
          },
          {
            date: "1909-03-26",
            height: 138.85,
          },
          {
            date: "1909-03-27",
            height: 138.88,
          },
          {
            date: "1909-03-28",
            height: 138.9,
          },
          {
            date: "1909-03-29",
            height: 138.92,
          },
          {
            date: "1909-03-30",
            height: 138.96,
          },
          {
            date: "1909-03-31",
            height: 139,
          },
          {
            date: "1909-04-01",
            height: 139.01,
          },
          {
            date: "1909-04-02",
            height: 139.03,
          },
          {
            date: "1909-04-03",
            height: 139.05,
          },
          {
            date: "1909-04-04",
            height: 139.07,
          },
          {
            date: "1909-04-05",
            height: 139.09,
          },
          {
            date: "1909-04-06",
            height: 139.1,
          },
          {
            date: "1909-04-07",
            height: 139.13,
          },
          {
            date: "1909-04-08",
            height: 139.16,
          },
          {
            date: "1909-04-09",
            height: 139.19,
          },
          {
            date: "1909-04-10",
            height: 139.22,
          },
          {
            date: "1909-04-11",
            height: 139.26,
          },
          {
            date: "1909-04-12",
            height: 139.27,
          },
          {
            date: "1909-04-13",
            height: 139.3,
          },
          {
            date: "1909-04-14",
            height: 139.32,
          },
          {
            date: "1909-04-15",
            height: 139.34,
          },
          {
            date: "1909-04-16",
            height: 139.36,
          },
          {
            date: "1909-04-17",
            height: 139.39,
          },
          {
            date: "1909-04-18",
            height: 139.42,
          },
          {
            date: "1909-04-19",
            height: 139.46,
          },
          {
            date: "1909-04-20",
            height: 139.5,
          },
          {
            date: "1909-04-21",
            height: 139.53,
          },
          {
            date: "1909-04-22",
            height: 139.54,
          },
          {
            date: "1909-04-23",
            height: 139.55,
          },
          {
            date: "1909-04-24",
            height: 139.58,
          },
          {
            date: "1909-04-25",
            height: 139.6,
          },
          {
            date: "1909-04-26",
            height: 139.62,
          },
          {
            date: "1909-04-27",
            height: 139.64,
          },
          {
            date: "1909-04-28",
            height: 139.66,
          },
          {
            date: "1909-04-29",
            height: 139.68,
          },
          {
            date: "1909-04-30",
            height: 139.71,
          },
          {
            date: "1909-05-01",
            height: 139.73,
          },
          {
            date: "1909-05-02",
            height: 139.74,
          },
          {
            date: "1909-05-03",
            height: 139.76,
          },
          {
            date: "1909-05-04",
            height: 139.78,
          },
          {
            date: "1909-05-05",
            height: 139.8,
          },
          {
            date: "1909-05-06",
            height: 139.82,
          },
          {
            date: "1909-05-07",
            height: 139.84,
          },
          {
            date: "1909-05-08",
            height: 139.88,
          },
          {
            date: "1909-05-09",
            height: 139.89,
          },
          {
            date: "1909-05-10",
            height: 139.93,
          },
          {
            date: "1909-05-11",
            height: 139.96,
          },
          {
            date: "1909-05-12",
            height: 139.98,
          },
          {
            date: "1909-05-13",
            height: 140,
          },
          {
            date: "1909-05-14",
            height: 140.04,
          },
          {
            date: "1909-05-15",
            height: 140.08,
          },
          {
            date: "1909-05-16",
            height: 140.1,
          },
          {
            date: "1909-05-17",
            height: 140.14,
          },
          {
            date: "1909-05-18",
            height: 140.15,
          },
          {
            date: "1909-05-19",
            height: 140.17,
          },
          {
            date: "1909-05-20",
            height: 140.18,
          },
          {
            date: "1909-05-21",
            height: 140.21,
          },
          {
            date: "1909-05-22",
            height: 140.25,
          },
          {
            date: "1909-05-23",
            height: 140.27,
          },
          {
            date: "1909-05-24",
            height: 140.3,
          },
          {
            date: "1909-05-25",
            height: 140.33,
          },
          {
            date: "1909-05-26",
            height: 140.35,
          },
          {
            date: "1909-05-27",
            height: 140.38,
          },
          {
            date: "1909-05-28",
            height: 140.39,
          },
          {
            date: "1909-05-29",
            height: 140.4,
          },
          {
            date: "1909-05-30",
            height: 140.43,
          },
          {
            date: "1909-05-31",
            height: 140.47,
          },
          {
            date: "1909-06-01",
            height: 140.48,
          },
          {
            date: "1909-06-02",
            height: 140.51,
          },
          {
            date: "1909-06-03",
            height: 140.52,
          },
          {
            date: "1909-06-04",
            height: 140.54,
          },
          {
            date: "1909-06-05",
            height: 140.57,
          },
          {
            date: "1909-06-06",
            height: 140.61,
          },
          {
            date: "1909-06-07",
            height: 140.63,
          },
          {
            date: "1909-06-08",
            height: 140.66,
          },
          {
            date: "1909-06-09",
            height: 140.69,
          },
          {
            date: "1909-06-10",
            height: 140.71,
          },
          {
            date: "1909-06-11",
            height: 140.73,
          },
          {
            date: "1909-06-12",
            height: 140.75,
          },
          {
            date: "1909-06-13",
            height: 140.77,
          },
          {
            date: "1909-06-14",
            height: 140.78,
          },
          {
            date: "1909-06-15",
            height: 140.81,
          },
          {
            date: "1909-06-16",
            height: 140.83,
          },
          {
            date: "1909-06-17",
            height: 140.86,
          },
          {
            date: "1909-06-18",
            height: 140.89,
          },
          {
            date: "1909-06-19",
            height: 140.91,
          },
          {
            date: "1909-06-20",
            height: 140.93,
          },
          {
            date: "1909-06-21",
            height: 140.95,
          },
          {
            date: "1909-06-22",
            height: 140.97,
          },
          {
            date: "1909-06-23",
            height: 140.98,
          },
          {
            date: "1909-06-24",
            height: 141.01,
          },
          {
            date: "1909-06-25",
            height: 141.04,
          },
          {
            date: "1909-06-26",
            height: 141.08,
          },
          {
            date: "1909-06-27",
            height: 141.1,
          },
          {
            date: "1909-06-28",
            height: 141.11,
          },
          {
            date: "1909-06-29",
            height: 141.12,
          },
          {
            date: "1909-06-30",
            height: 141.15,
          },
          {
            date: "1909-07-01",
            height: 141.17,
          },
          {
            date: "1909-07-02",
            height: 141.19,
          },
          {
            date: "1909-07-03",
            height: 141.21,
          },
          {
            date: "1909-07-04",
            height: 141.25,
          },
          {
            date: "1909-07-05",
            height: 141.27,
          },
          {
            date: "1909-07-06",
            height: 141.28,
          },
          {
            date: "1909-07-07",
            height: 141.32,
          },
          {
            date: "1909-07-08",
            height: 141.35,
          },
          {
            date: "1909-07-09",
            height: 141.37,
          },
          {
            date: "1909-07-10",
            height: 141.41,
          },
          {
            date: "1909-07-11",
            height: 141.42,
          },
          {
            date: "1909-07-12",
            height: 141.44,
          },
          {
            date: "1909-07-13",
            height: 141.45,
          },
          {
            date: "1909-07-14",
            height: 141.47,
          },
          {
            date: "1909-07-15",
            height: 141.49,
          },
          {
            date: "1909-07-16",
            height: 141.52,
          },
          {
            date: "1909-07-17",
            height: 141.55,
          },
          {
            date: "1909-07-18",
            height: 141.57,
          },
          {
            date: "1909-07-19",
            height: 141.58,
          },
          {
            date: "1909-07-20",
            height: 141.62,
          },
          {
            date: "1909-07-21",
            height: 141.64,
          },
          {
            date: "1909-07-22",
            height: 141.67,
          },
          {
            date: "1909-07-23",
            height: 141.71,
          },
          {
            date: "1909-07-24",
            height: 141.74,
          },
          {
            date: "1909-07-25",
            height: 141.77,
          },
          {
            date: "1909-07-26",
            height: 141.79,
          },
          {
            date: "1909-07-27",
            height: 141.83,
          },
          {
            date: "1909-07-28",
            height: 141.85,
          },
          {
            date: "1909-07-29",
            height: 141.89,
          },
          {
            date: "1909-07-30",
            height: 141.91,
          },
          {
            date: "1909-07-31",
            height: 141.93,
          },
          {
            date: "1909-08-01",
            height: 141.96,
          },
          {
            date: "1909-08-02",
            height: 141.99,
          },
          {
            date: "1909-08-03",
            height: 142.03,
          },
          {
            date: "1909-08-04",
            height: 142.06,
          },
          {
            date: "1909-08-05",
            height: 142.08,
          },
          {
            date: "1909-08-06",
            height: 142.11,
          },
          {
            date: "1909-08-07",
            height: 142.14,
          },
          {
            date: "1909-08-08",
            height: 142.16,
          },
          {
            date: "1909-08-09",
            height: 142.18,
          },
          {
            date: "1909-08-10",
            height: 142.21,
          },
          {
            date: "1909-08-11",
            height: 142.25,
          },
          {
            date: "1909-08-12",
            height: 142.26,
          },
          {
            date: "1909-08-13",
            height: 142.28,
          },
          {
            date: "1909-08-14",
            height: 142.3,
          },
          {
            date: "1909-08-15",
            height: 142.32,
          },
          {
            date: "1909-08-16",
            height: 142.34,
          },
          {
            date: "1909-08-17",
            height: 142.37,
          },
          {
            date: "1909-08-18",
            height: 142.39,
          },
          {
            date: "1909-08-19",
            height: 142.42,
          },
          {
            date: "1909-08-20",
            height: 142.45,
          },
          {
            date: "1909-08-21",
            height: 142.47,
          },
          {
            date: "1909-08-22",
            height: 142.5,
          },
          {
            date: "1909-08-23",
            height: 142.53,
          },
          {
            date: "1909-08-24",
            height: 142.56,
          },
          {
            date: "1909-08-25",
            height: 142.58,
          },
          {
            date: "1909-08-26",
            height: 142.6,
          },
          {
            date: "1909-08-27",
            height: 142.64,
          },
          {
            date: "1909-08-28",
            height: 142.67,
          },
          {
            date: "1909-08-29",
            height: 142.69,
          },
          {
            date: "1909-08-30",
            height: 142.73,
          },
          {
            date: "1909-08-31",
            height: 142.76,
          },
          {
            date: "1909-09-01",
            height: 142.77,
          },
          {
            date: "1909-09-02",
            height: 142.8,
          },
          {
            date: "1909-09-03",
            height: 142.82,
          },
          {
            date: "1909-09-04",
            height: 142.85,
          },
          {
            date: "1909-09-05",
            height: 142.89,
          },
          {
            date: "1909-09-06",
            height: 142.91,
          },
          {
            date: "1909-09-07",
            height: 142.95,
          },
          {
            date: "1909-09-08",
            height: 142.97,
          },
          {
            date: "1909-09-09",
            height: 143,
          },
          {
            date: "1909-09-10",
            height: 143.02,
          },
          {
            date: "1909-09-11",
            height: 143.05,
          },
          {
            date: "1909-09-12",
            height: 143.07,
          },
          {
            date: "1909-09-13",
            height: 143.09,
          },
          {
            date: "1909-09-14",
            height: 143.12,
          },
          {
            date: "1909-09-15",
            height: 143.13,
          },
          {
            date: "1909-09-16",
            height: 143.17,
          },
          {
            date: "1909-09-17",
            height: 143.21,
          },
          {
            date: "1909-09-18",
            height: 143.22,
          },
          {
            date: "1909-09-19",
            height: 143.25,
          },
          {
            date: "1909-09-20",
            height: 143.27,
          },
          {
            date: "1909-09-21",
            height: 143.29,
          },
          {
            date: "1909-09-22",
            height: 143.33,
          },
          {
            date: "1909-09-23",
            height: 143.36,
          },
          {
            date: "1909-09-24",
            height: 143.39,
          },
          {
            date: "1909-09-25",
            height: 143.4,
          },
          {
            date: "1909-09-26",
            height: 143.42,
          },
          {
            date: "1909-09-27",
            height: 143.46,
          },
          {
            date: "1909-09-28",
            height: 143.48,
          },
          {
            date: "1909-09-29",
            height: 143.51,
          },
          {
            date: "1909-09-30",
            height: 143.53,
          },
          {
            date: "1909-10-01",
            height: 143.56,
          },
          {
            date: "1909-10-02",
            height: 143.58,
          },
          {
            date: "1909-10-03",
            height: 143.61,
          },
          {
            date: "1909-10-04",
            height: 143.62,
          },
          {
            date: "1909-10-05",
            height: 143.65,
          },
          {
            date: "1909-10-06",
            height: 143.67,
          },
          {
            date: "1909-10-07",
            height: 143.69,
          },
          {
            date: "1909-10-08",
            height: 143.72,
          },
          {
            date: "1909-10-09",
            height: 143.75,
          },
          {
            date: "1909-10-10",
            height: 143.78,
          },
          {
            date: "1909-10-11",
            height: 143.8,
          },
          {
            date: "1909-10-12",
            height: 143.84,
          },
          {
            date: "1909-10-13",
            height: 143.86,
          },
          {
            date: "1909-10-14",
            height: 143.89,
          },
          {
            date: "1909-10-15",
            height: 143.91,
          },
          {
            date: "1909-10-16",
            height: 143.92,
          },
          {
            date: "1909-10-17",
            height: 143.95,
          },
          {
            date: "1909-10-18",
            height: 143.97,
          },
          {
            date: "1909-10-19",
            height: 143.99,
          },
          {
            date: "1909-10-20",
            height: 144.03,
          },
          {
            date: "1909-10-21",
            height: 144.05,
          },
          {
            date: "1909-10-22",
            height: 144.06,
          },
          {
            date: "1909-10-23",
            height: 144.08,
          },
          {
            date: "1909-10-24",
            height: 144.1,
          },
          {
            date: "1909-10-25",
            height: 144.14,
          },
          {
            date: "1909-10-26",
            height: 144.15,
          },
          {
            date: "1909-10-27",
            height: 144.19,
          },
          {
            date: "1909-10-28",
            height: 144.21,
          },
          {
            date: "1909-10-29",
            height: 144.22,
          },
          {
            date: "1909-10-30",
            height: 144.25,
          },
          {
            date: "1909-10-31",
            height: 144.29,
          },
          {
            date: "1909-11-01",
            height: 144.31,
          },
          {
            date: "1909-11-02",
            height: 144.32,
          },
          {
            date: "1909-11-03",
            height: 144.34,
          },
          {
            date: "1909-11-04",
            height: 144.37,
          },
          {
            date: "1909-11-05",
            height: 144.39,
          },
          {
            date: "1909-11-06",
            height: 144.42,
          },
          {
            date: "1909-11-07",
            height: 144.45,
          },
          {
            date: "1909-11-08",
            height: 144.48,
          },
          {
            date: "1909-11-09",
            height: 144.52,
          },
          {
            date: "1909-11-10",
            height: 144.55,
          },
          {
            date: "1909-11-11",
            height: 144.56,
          },
          {
            date: "1909-11-12",
            height: 144.6,
          },
          {
            date: "1909-11-13",
            height: 144.63,
          },
          {
            date: "1909-11-14",
            height: 144.67,
          },
          {
            date: "1909-11-15",
            height: 144.69,
          },
          {
            date: "1909-11-16",
            height: 144.71,
          },
          {
            date: "1909-11-17",
            height: 144.72,
          },
          {
            date: "1909-11-18",
            height: 144.76,
          },
          {
            date: "1909-11-19",
            height: 144.79,
          },
          {
            date: "1909-11-20",
            height: 144.82,
          },
          {
            date: "1909-11-21",
            height: 144.85,
          },
          {
            date: "1909-11-22",
            height: 144.87,
          },
          {
            date: "1909-11-23",
            height: 144.89,
          },
          {
            date: "1909-11-24",
            height: 144.91,
          },
          {
            date: "1909-11-25",
            height: 144.94,
          },
          {
            date: "1909-11-26",
            height: 144.98,
          },
          {
            date: "1909-11-27",
            height: 145.01,
          },
          {
            date: "1909-11-28",
            height: 145.03,
          },
          {
            date: "1909-11-29",
            height: 145.05,
          },
          {
            date: "1909-11-30",
            height: 145.06,
          },
          {
            date: "1909-12-01",
            height: 145.09,
          },
          {
            date: "1909-12-02",
            height: 145.1,
          },
          {
            date: "1909-12-03",
            height: 145.14,
          },
          {
            date: "1909-12-04",
            height: 145.18,
          },
          {
            date: "1909-12-05",
            height: 145.2,
          },
          {
            date: "1909-12-06",
            height: 145.23,
          },
          {
            date: "1909-12-07",
            height: 145.26,
          },
          {
            date: "1909-12-08",
            height: 145.28,
          },
          {
            date: "1909-12-09",
            height: 145.3,
          },
          {
            date: "1909-12-10",
            height: 145.34,
          },
          {
            date: "1909-12-11",
            height: 145.35,
          },
          {
            date: "1909-12-12",
            height: 145.38,
          },
          {
            date: "1909-12-13",
            height: 145.4,
          },
          {
            date: "1909-12-14",
            height: 145.41,
          },
          {
            date: "1909-12-15",
            height: 145.44,
          },
          {
            date: "1909-12-16",
            height: 145.45,
          },
          {
            date: "1909-12-17",
            height: 145.47,
          },
          {
            date: "1909-12-18",
            height: 145.49,
          },
          {
            date: "1909-12-19",
            height: 145.53,
          },
          {
            date: "1909-12-20",
            height: 145.56,
          },
          {
            date: "1909-12-21",
            height: 145.58,
          },
          {
            date: "1909-12-22",
            height: 145.6,
          },
          {
            date: "1909-12-23",
            height: 145.63,
          },
          {
            date: "1909-12-24",
            height: 145.65,
          },
          {
            date: "1909-12-25",
            height: 145.67,
          },
          {
            date: "1909-12-26",
            height: 145.7,
          },
          {
            date: "1909-12-27",
            height: 145.73,
          },
          {
            date: "1909-12-28",
            height: 145.75,
          },
          {
            date: "1909-12-29",
            height: 145.79,
          },
          {
            date: "1909-12-30",
            height: 145.81,
          },
          {
            date: "1909-12-31",
            height: 145.83,
          },
          {
            date: "1910-01-01",
            height: 145.85,
          },
          {
            date: "1910-01-02",
            height: 145.89,
          },
          {
            date: "1910-01-03",
            height: 145.92,
          },
          {
            date: "1910-01-04",
            height: 145.94,
          },
          {
            date: "1910-01-05",
            height: 145.97,
          },
          {
            date: "1910-01-06",
            height: 146,
          },
          {
            date: "1910-01-07",
            height: 146.03,
          },
          {
            date: "1910-01-08",
            height: 146.05,
          },
          {
            date: "1910-01-09",
            height: 146.09,
          },
          {
            date: "1910-01-10",
            height: 146.1,
          },
          {
            date: "1910-01-11",
            height: 146.11,
          },
          {
            date: "1910-01-12",
            height: 146.13,
          },
          {
            date: "1910-01-13",
            height: 146.16,
          },
          {
            date: "1910-01-14",
            height: 146.2,
          },
          {
            date: "1910-01-15",
            height: 146.22,
          },
          {
            date: "1910-01-16",
            height: 146.24,
          },
          {
            date: "1910-01-17",
            height: 146.27,
          },
          {
            date: "1910-01-18",
            height: 146.29,
          },
          {
            date: "1910-01-19",
            height: 146.3,
          },
          {
            date: "1910-01-20",
            height: 146.34,
          },
          {
            date: "1910-01-21",
            height: 146.37,
          },
          {
            date: "1910-01-22",
            height: 146.39,
          },
          {
            date: "1910-01-23",
            height: 146.41,
          },
          {
            date: "1910-01-24",
            height: 146.45,
          },
          {
            date: "1910-01-25",
            height: 146.49,
          },
          {
            date: "1910-01-26",
            height: 146.51,
          },
          {
            date: "1910-01-27",
            height: 146.54,
          },
          {
            date: "1910-01-28",
            height: 146.57,
          },
          {
            date: "1910-01-29",
            height: 146.6,
          },
          {
            date: "1910-01-30",
            height: 146.62,
          },
          {
            date: "1910-01-31",
            height: 146.64,
          },
          {
            date: "1910-02-01",
            height: 146.66,
          },
          {
            date: "1910-02-02",
            height: 146.69,
          },
          {
            date: "1910-02-03",
            height: 146.72,
          },
          {
            date: "1910-02-04",
            height: 146.75,
          },
          {
            date: "1910-02-05",
            height: 146.77,
          },
          {
            date: "1910-02-06",
            height: 146.8,
          },
          {
            date: "1910-02-07",
            height: 146.84,
          },
          {
            date: "1910-02-08",
            height: 146.88,
          },
          {
            date: "1910-02-09",
            height: 146.89,
          },
          {
            date: "1910-02-10",
            height: 146.93,
          },
          {
            date: "1910-02-11",
            height: 146.95,
          },
          {
            date: "1910-02-12",
            height: 146.96,
          },
          {
            date: "1910-02-13",
            height: 147,
          },
          {
            date: "1910-02-14",
            height: 147.02,
          },
          {
            date: "1910-02-15",
            height: 147.05,
          },
          {
            date: "1910-02-16",
            height: 147.08,
          },
          {
            date: "1910-02-17",
            height: 147.12,
          },
          {
            date: "1910-02-18",
            height: 147.13,
          },
          {
            date: "1910-02-19",
            height: 147.15,
          },
          {
            date: "1910-02-20",
            height: 147.17,
          },
          {
            date: "1910-02-21",
            height: 147.18,
          },
          {
            date: "1910-02-22",
            height: 147.2,
          },
          {
            date: "1910-02-23",
            height: 147.21,
          },
          {
            date: "1910-02-24",
            height: 147.24,
          },
          {
            date: "1910-02-25",
            height: 147.25,
          },
          {
            date: "1910-02-26",
            height: 147.27,
          },
          {
            date: "1910-02-27",
            height: 147.3,
          },
          {
            date: "1910-02-28",
            height: 147.32,
          },
          {
            date: "1910-03-01",
            height: 147.34,
          },
          {
            date: "1910-03-02",
            height: 147.38,
          },
          {
            date: "1910-03-03",
            height: 147.39,
          },
          {
            date: "1910-03-04",
            height: 147.42,
          },
          {
            date: "1910-03-05",
            height: 147.44,
          },
          {
            date: "1910-03-06",
            height: 147.46,
          },
          {
            date: "1910-03-07",
            height: 147.49,
          },
          {
            date: "1910-03-08",
            height: 147.51,
          },
          {
            date: "1910-03-09",
            height: 147.55,
          },
          {
            date: "1910-03-10",
            height: 147.57,
          },
          {
            date: "1910-03-11",
            height: 147.61,
          },
          {
            date: "1910-03-12",
            height: 147.64,
          },
          {
            date: "1910-03-13",
            height: 147.66,
          },
          {
            date: "1910-03-14",
            height: 147.69,
          },
          {
            date: "1910-03-15",
            height: 147.73,
          },
          {
            date: "1910-03-16",
            height: 147.76,
          },
          {
            date: "1910-03-17",
            height: 147.78,
          },
          {
            date: "1910-03-18",
            height: 147.82,
          },
          {
            date: "1910-03-19",
            height: 147.86,
          },
          {
            date: "1910-03-20",
            height: 147.89,
          },
          {
            date: "1910-03-21",
            height: 147.92,
          },
          {
            date: "1910-03-22",
            height: 147.95,
          },
          {
            date: "1910-03-23",
            height: 147.97,
          },
          {
            date: "1910-03-24",
            height: 148,
          },
          {
            date: "1910-03-25",
            height: 148.02,
          },
          {
            date: "1910-03-26",
            height: 148.03,
          },
          {
            date: "1910-03-27",
            height: 148.07,
          },
          {
            date: "1910-03-28",
            height: 148.09,
          },
          {
            date: "1910-03-29",
            height: 148.11,
          },
          {
            date: "1910-03-30",
            height: 148.14,
          },
          {
            date: "1910-03-31",
            height: 148.15,
          },
          {
            date: "1910-04-01",
            height: 148.18,
          },
          {
            date: "1910-04-02",
            height: 148.2,
          },
          {
            date: "1910-04-03",
            height: 148.21,
          },
          {
            date: "1910-04-04",
            height: 148.25,
          },
          {
            date: "1910-04-05",
            height: 148.26,
          },
          {
            date: "1910-04-06",
            height: 148.3,
          },
          {
            date: "1910-04-07",
            height: 148.34,
          },
          {
            date: "1910-04-08",
            height: 148.37,
          },
          {
            date: "1910-04-09",
            height: 148.41,
          },
          {
            date: "1910-04-10",
            height: 148.42,
          },
          {
            date: "1910-04-11",
            height: 148.44,
          },
          {
            date: "1910-04-12",
            height: 148.45,
          },
          {
            date: "1910-04-13",
            height: 148.48,
          },
          {
            date: "1910-04-14",
            height: 148.49,
          },
          {
            date: "1910-04-15",
            height: 148.51,
          },
          {
            date: "1910-04-16",
            height: 148.55,
          },
          {
            date: "1910-04-17",
            height: 148.58,
          },
          {
            date: "1910-04-18",
            height: 148.61,
          },
          {
            date: "1910-04-19",
            height: 148.64,
          },
          {
            date: "1910-04-20",
            height: 148.67,
          },
          {
            date: "1910-04-21",
            height: 148.68,
          },
          {
            date: "1910-04-22",
            height: 148.7,
          },
          {
            date: "1910-04-23",
            height: 148.72,
          },
          {
            date: "1910-04-24",
            height: 148.75,
          },
          {
            date: "1910-04-25",
            height: 148.78,
          },
          {
            date: "1910-04-26",
            height: 148.82,
          },
          {
            date: "1910-04-27",
            height: 148.84,
          },
          {
            date: "1910-04-28",
            height: 148.87,
          },
          {
            date: "1910-04-29",
            height: 148.91,
          },
          {
            date: "1910-04-30",
            height: 148.94,
          },
          {
            date: "1910-05-01",
            height: 148.97,
          },
          {
            date: "1910-05-02",
            height: 148.99,
          },
          {
            date: "1910-05-03",
            height: 149.03,
          },
          {
            date: "1910-05-04",
            height: 149.04,
          },
          {
            date: "1910-05-05",
            height: 149.08,
          },
          {
            date: "1910-05-06",
            height: 149.09,
          },
          {
            date: "1910-05-07",
            height: 149.13,
          },
          {
            date: "1910-05-08",
            height: 149.14,
          },
          {
            date: "1910-05-09",
            height: 149.16,
          },
          {
            date: "1910-05-10",
            height: 149.17,
          },
          {
            date: "1910-05-11",
            height: 149.2,
          },
          {
            date: "1910-05-12",
            height: 149.24,
          },
          {
            date: "1910-05-13",
            height: 149.27,
          },
          {
            date: "1910-05-14",
            height: 149.29,
          },
          {
            date: "1910-05-15",
            height: 149.32,
          },
          {
            date: "1910-05-16",
            height: 149.34,
          },
          {
            date: "1910-05-17",
            height: 149.38,
          },
          {
            date: "1910-05-18",
            height: 149.4,
          },
          {
            date: "1910-05-19",
            height: 149.42,
          },
          {
            date: "1910-05-20",
            height: 149.44,
          },
          {
            date: "1910-05-21",
            height: 149.46,
          },
          {
            date: "1910-05-22",
            height: 149.47,
          },
          {
            date: "1910-05-23",
            height: 149.5,
          },
          {
            date: "1910-05-24",
            height: 149.51,
          },
          {
            date: "1910-05-25",
            height: 149.54,
          },
          {
            date: "1910-05-26",
            height: 149.57,
          },
          {
            date: "1910-05-27",
            height: 149.6,
          },
          {
            date: "1910-05-28",
            height: 149.63,
          },
          {
            date: "1910-05-29",
            height: 149.66,
          },
          {
            date: "1910-05-30",
            height: 149.68,
          },
          {
            date: "1910-05-31",
            height: 149.7,
          },
          {
            date: "1910-06-01",
            height: 149.72,
          },
          {
            date: "1910-06-02",
            height: 149.76,
          },
          {
            date: "1910-06-03",
            height: 149.79,
          },
          {
            date: "1910-06-04",
            height: 149.8,
          },
          {
            date: "1910-06-05",
            height: 149.82,
          },
          {
            date: "1910-06-06",
            height: 149.84,
          },
          {
            date: "1910-06-07",
            height: 149.86,
          },
          {
            date: "1910-06-08",
            height: 149.89,
          },
          {
            date: "1910-06-09",
            height: 149.91,
          },
          {
            date: "1910-06-10",
            height: 149.93,
          },
          {
            date: "1910-06-11",
            height: 149.97,
          },
          {
            date: "1910-06-12",
            height: 150,
          },
          {
            date: "1910-06-13",
            height: 150.04,
          },
          {
            date: "1910-06-14",
            height: 150.06,
          },
          {
            date: "1910-06-15",
            height: 150.09,
          },
          {
            date: "1910-06-16",
            height: 150.11,
          },
          {
            date: "1910-06-17",
            height: 150.13,
          },
          {
            date: "1910-06-18",
            height: 150.15,
          },
          {
            date: "1910-06-19",
            height: 150.17,
          },
          {
            date: "1910-06-20",
            height: 150.19,
          },
          {
            date: "1910-06-21",
            height: 150.21,
          },
          {
            date: "1910-06-22",
            height: 150.24,
          },
          {
            date: "1910-06-23",
            height: 150.26,
          },
          {
            date: "1910-06-24",
            height: 150.27,
          },
          {
            date: "1910-06-25",
            height: 150.3,
          },
          {
            date: "1910-06-26",
            height: 150.32,
          },
          {
            date: "1910-06-27",
            height: 150.34,
          },
          {
            date: "1910-06-28",
            height: 150.37,
          },
          {
            date: "1910-06-29",
            height: 150.4,
          },
          {
            date: "1910-06-30",
            height: 150.43,
          },
          {
            date: "1910-07-01",
            height: 150.46,
          },
          {
            date: "1910-07-02",
            height: 150.48,
          },
          {
            date: "1910-07-03",
            height: 150.49,
          },
          {
            date: "1910-07-04",
            height: 150.53,
          },
          {
            date: "1910-07-05",
            height: 150.54,
          },
          {
            date: "1910-07-06",
            height: 150.58,
          },
          {
            date: "1910-07-07",
            height: 150.6,
          },
          {
            date: "1910-07-08",
            height: 150.63,
          },
          {
            date: "1910-07-09",
            height: 150.67,
          },
          {
            date: "1910-07-10",
            height: 150.69,
          },
          {
            date: "1910-07-11",
            height: 150.72,
          },
          {
            date: "1910-07-12",
            height: 150.75,
          },
          {
            date: "1910-07-13",
            height: 150.79,
          },
          {
            date: "1910-07-14",
            height: 150.8,
          },
          {
            date: "1910-07-15",
            height: 150.81,
          },
          {
            date: "1910-07-16",
            height: 150.83,
          },
          {
            date: "1910-07-17",
            height: 150.85,
          },
          {
            date: "1910-07-18",
            height: 150.87,
          },
          {
            date: "1910-07-19",
            height: 150.89,
          },
          {
            date: "1910-07-20",
            height: 150.9,
          },
          {
            date: "1910-07-21",
            height: 150.93,
          },
          {
            date: "1910-07-22",
            height: 150.94,
          },
          {
            date: "1910-07-23",
            height: 150.97,
          },
          {
            date: "1910-07-24",
            height: 151.01,
          },
          {
            date: "1910-07-25",
            height: 151.05,
          },
          {
            date: "1910-07-26",
            height: 151.06,
          },
          {
            date: "1910-07-27",
            height: 151.07,
          },
          {
            date: "1910-07-28",
            height: 151.09,
          },
          {
            date: "1910-07-29",
            height: 151.1,
          },
          {
            date: "1910-07-30",
            height: 151.12,
          },
          {
            date: "1910-07-31",
            height: 151.15,
          },
          {
            date: "1910-08-01",
            height: 151.18,
          },
          {
            date: "1910-08-02",
            height: 151.21,
          },
          {
            date: "1910-08-03",
            height: 151.23,
          },
          {
            date: "1910-08-04",
            height: 151.27,
          },
          {
            date: "1910-08-05",
            height: 151.29,
          },
          {
            date: "1910-08-06",
            height: 151.31,
          },
          {
            date: "1910-08-07",
            height: 151.33,
          },
          {
            date: "1910-08-08",
            height: 151.35,
          },
          {
            date: "1910-08-09",
            height: 151.37,
          },
          {
            date: "1910-08-10",
            height: 151.38,
          },
          {
            date: "1910-08-11",
            height: 151.4,
          },
          {
            date: "1910-08-12",
            height: 151.43,
          },
          {
            date: "1910-08-13",
            height: 151.47,
          },
          {
            date: "1910-08-14",
            height: 151.5,
          },
          {
            date: "1910-08-15",
            height: 151.53,
          },
          {
            date: "1910-08-16",
            height: 151.55,
          },
          {
            date: "1910-08-17",
            height: 151.56,
          },
          {
            date: "1910-08-18",
            height: 151.6,
          },
          {
            date: "1910-08-19",
            height: 151.62,
          },
          {
            date: "1910-08-20",
            height: 151.64,
          },
          {
            date: "1910-08-21",
            height: 151.68,
          },
          {
            date: "1910-08-22",
            height: 151.71,
          },
          {
            date: "1910-08-23",
            height: 151.73,
          },
          {
            date: "1910-08-24",
            height: 151.76,
          },
          {
            date: "1910-08-25",
            height: 151.78,
          },
          {
            date: "1910-08-26",
            height: 151.79,
          },
          {
            date: "1910-08-27",
            height: 151.82,
          },
          {
            date: "1910-08-28",
            height: 151.85,
          },
          {
            date: "1910-08-29",
            height: 151.86,
          },
          {
            date: "1910-08-30",
            height: 151.87,
          },
          {
            date: "1910-08-31",
            height: 151.9,
          },
          {
            date: "1910-09-01",
            height: 151.92,
          },
          {
            date: "1910-09-02",
            height: 151.93,
          },
          {
            date: "1910-09-03",
            height: 151.97,
          },
          {
            date: "1910-09-04",
            height: 151.99,
          },
          {
            date: "1910-09-05",
            height: 152.01,
          },
          {
            date: "1910-09-06",
            height: 152.02,
          },
          {
            date: "1910-09-07",
            height: 152.04,
          },
          {
            date: "1910-09-08",
            height: 152.06,
          },
          {
            date: "1910-09-09",
            height: 152.07,
          },
          {
            date: "1910-09-10",
            height: 152.08,
          },
          {
            date: "1910-09-11",
            height: 152.12,
          },
          {
            date: "1910-09-12",
            height: 152.16,
          },
          {
            date: "1910-09-13",
            height: 152.19,
          },
          {
            date: "1910-09-14",
            height: 152.2,
          },
          {
            date: "1910-09-15",
            height: 152.22,
          },
          {
            date: "1910-09-16",
            height: 152.26,
          },
          {
            date: "1910-09-17",
            height: 152.27,
          },
          {
            date: "1910-09-18",
            height: 152.29,
          },
          {
            date: "1910-09-19",
            height: 152.32,
          },
          {
            date: "1910-09-20",
            height: 152.35,
          },
          {
            date: "1910-09-21",
            height: 152.37,
          },
          {
            date: "1910-09-22",
            height: 152.38,
          },
          {
            date: "1910-09-23",
            height: 152.4,
          },
          {
            date: "1910-09-24",
            height: 152.41,
          },
          {
            date: "1910-09-25",
            height: 152.45,
          },
          {
            date: "1910-09-26",
            height: 152.46,
          },
          {
            date: "1910-09-27",
            height: 152.49,
          },
          {
            date: "1910-09-28",
            height: 152.51,
          },
          {
            date: "1910-09-29",
            height: 152.52,
          },
          {
            date: "1910-09-30",
            height: 152.56,
          },
          {
            date: "1910-10-01",
            height: 152.59,
          },
          {
            date: "1910-10-02",
            height: 152.6,
          },
          {
            date: "1910-10-03",
            height: 152.62,
          },
          {
            date: "1910-10-04",
            height: 152.65,
          },
          {
            date: "1910-10-05",
            height: 152.69,
          },
          {
            date: "1910-10-06",
            height: 152.7,
          },
          {
            date: "1910-10-07",
            height: 152.71,
          },
          {
            date: "1910-10-08",
            height: 152.73,
          },
          {
            date: "1910-10-09",
            height: 152.76,
          },
          {
            date: "1910-10-10",
            height: 152.79,
          },
          {
            date: "1910-10-11",
            height: 152.8,
          },
          {
            date: "1910-10-12",
            height: 152.83,
          },
          {
            date: "1910-10-13",
            height: 152.84,
          },
          {
            date: "1910-10-14",
            height: 152.86,
          },
          {
            date: "1910-10-15",
            height: 152.9,
          },
          {
            date: "1910-10-16",
            height: 152.91,
          },
          {
            date: "1910-10-17",
            height: 152.94,
          },
          {
            date: "1910-10-18",
            height: 152.97,
          },
          {
            date: "1910-10-19",
            height: 152.98,
          },
          {
            date: "1910-10-20",
            height: 153.02,
          },
          {
            date: "1910-10-21",
            height: 153.04,
          },
          {
            date: "1910-10-22",
            height: 153.07,
          },
          {
            date: "1910-10-23",
            height: 153.1,
          },
          {
            date: "1910-10-24",
            height: 153.12,
          },
          {
            date: "1910-10-25",
            height: 153.14,
          },
          {
            date: "1910-10-26",
            height: 153.17,
          },
          {
            date: "1910-10-27",
            height: 153.19,
          },
          {
            date: "1910-10-28",
            height: 153.22,
          },
          {
            date: "1910-10-29",
            height: 153.24,
          },
          {
            date: "1910-10-30",
            height: 153.25,
          },
          {
            date: "1910-10-31",
            height: 153.27,
          },
          {
            date: "1910-11-01",
            height: 153.28,
          },
          {
            date: "1910-11-02",
            height: 153.31,
          },
          {
            date: "1910-11-03",
            height: 153.32,
          },
          {
            date: "1910-11-04",
            height: 153.35,
          },
          {
            date: "1910-11-05",
            height: 153.39,
          },
          {
            date: "1910-11-06",
            height: 153.42,
          },
          {
            date: "1910-11-07",
            height: 153.44,
          },
          {
            date: "1910-11-08",
            height: 153.46,
          },
          {
            date: "1910-11-09",
            height: 153.48,
          },
          {
            date: "1910-11-10",
            height: 153.51,
          },
          {
            date: "1910-11-11",
            height: 153.55,
          },
          {
            date: "1910-11-12",
            height: 153.57,
          },
          {
            date: "1910-11-13",
            height: 153.61,
          },
          {
            date: "1910-11-14",
            height: 153.64,
          },
          {
            date: "1910-11-15",
            height: 153.65,
          },
          {
            date: "1910-11-16",
            height: 153.67,
          },
          {
            date: "1910-11-17",
            height: 153.69,
          },
          {
            date: "1910-11-18",
            height: 153.71,
          },
          {
            date: "1910-11-19",
            height: 153.73,
          },
          {
            date: "1910-11-20",
            height: 153.76,
          },
          {
            date: "1910-11-21",
            height: 153.78,
          },
          {
            date: "1910-11-22",
            height: 153.79,
          },
          {
            date: "1910-11-23",
            height: 153.81,
          },
          {
            date: "1910-11-24",
            height: 153.84,
          },
          {
            date: "1910-11-25",
            height: 153.87,
          },
          {
            date: "1910-11-26",
            height: 153.89,
          },
          {
            date: "1910-11-27",
            height: 153.9,
          },
          {
            date: "1910-11-28",
            height: 153.92,
          },
          {
            date: "1910-11-29",
            height: 153.94,
          },
          {
            date: "1910-11-30",
            height: 153.98,
          },
          {
            date: "1910-12-01",
            height: 154,
          },
          {
            date: "1910-12-02",
            height: 154.03,
          },
          {
            date: "1910-12-03",
            height: 154.04,
          },
          {
            date: "1910-12-04",
            height: 154.05,
          },
          {
            date: "1910-12-05",
            height: 154.09,
          },
          {
            date: "1910-12-06",
            height: 154.11,
          },
          {
            date: "1910-12-07",
            height: 154.15,
          },
          {
            date: "1910-12-08",
            height: 154.18,
          },
          {
            date: "1910-12-09",
            height: 154.2,
          },
          {
            date: "1910-12-10",
            height: 154.24,
          },
          {
            date: "1910-12-11",
            height: 154.25,
          },
          {
            date: "1910-12-12",
            height: 154.28,
          },
          {
            date: "1910-12-13",
            height: 154.3,
          },
          {
            date: "1910-12-14",
            height: 154.33,
          },
          {
            date: "1910-12-15",
            height: 154.36,
          },
          {
            date: "1910-12-16",
            height: 154.39,
          },
          {
            date: "1910-12-17",
            height: 154.42,
          },
          {
            date: "1910-12-18",
            height: 154.46,
          },
          {
            date: "1910-12-19",
            height: 154.49,
          },
          {
            date: "1910-12-20",
            height: 154.52,
          },
          {
            date: "1910-12-21",
            height: 154.53,
          },
          {
            date: "1910-12-22",
            height: 154.56,
          },
          {
            date: "1910-12-23",
            height: 154.59,
          },
          {
            date: "1910-12-24",
            height: 154.63,
          },
          {
            date: "1910-12-25",
            height: 154.64,
          },
          {
            date: "1910-12-26",
            height: 154.65,
          },
          {
            date: "1910-12-27",
            height: 154.66,
          },
          {
            date: "1910-12-28",
            height: 154.68,
          },
          {
            date: "1910-12-29",
            height: 154.71,
          },
          {
            date: "1910-12-30",
            height: 154.75,
          },
          {
            date: "1910-12-31",
            height: 154.79,
          },
          {
            date: "1911-01-01",
            height: 154.82,
          },
          {
            date: "1911-01-02",
            height: 154.84,
          },
          {
            date: "1911-01-03",
            height: 154.87,
          },
          {
            date: "1911-01-04",
            height: 154.89,
          },
          {
            date: "1911-01-05",
            height: 154.92,
          },
          {
            date: "1911-01-06",
            height: 154.95,
          },
          {
            date: "1911-01-07",
            height: 154.98,
          },
          {
            date: "1911-01-08",
            height: 155,
          },
          {
            date: "1911-01-09",
            height: 155.04,
          },
          {
            date: "1911-01-10",
            height: 155.06,
          },
          {
            date: "1911-01-11",
            height: 155.1,
          },
          {
            date: "1911-01-12",
            height: 155.12,
          },
          {
            date: "1911-01-13",
            height: 155.13,
          },
          {
            date: "1911-01-14",
            height: 155.16,
          },
          {
            date: "1911-01-15",
            height: 155.17,
          },
          {
            date: "1911-01-16",
            height: 155.21,
          },
          {
            date: "1911-01-17",
            height: 155.22,
          },
          {
            date: "1911-01-18",
            height: 155.23,
          },
          {
            date: "1911-01-19",
            height: 155.27,
          },
          {
            date: "1911-01-20",
            height: 155.29,
          },
          {
            date: "1911-01-21",
            height: 155.31,
          },
          {
            date: "1911-01-22",
            height: 155.35,
          },
          {
            date: "1911-01-23",
            height: 155.37,
          },
          {
            date: "1911-01-24",
            height: 155.4,
          },
          {
            date: "1911-01-25",
            height: 155.44,
          },
          {
            date: "1911-01-26",
            height: 155.45,
          },
          {
            date: "1911-01-27",
            height: 155.47,
          },
          {
            date: "1911-01-28",
            height: 155.51,
          },
          {
            date: "1911-01-29",
            height: 155.53,
          },
          {
            date: "1911-01-30",
            height: 155.55,
          },
          {
            date: "1911-01-31",
            height: 155.58,
          },
          {
            date: "1911-02-01",
            height: 155.6,
          },
          {
            date: "1911-02-02",
            height: 155.63,
          },
          {
            date: "1911-02-03",
            height: 155.66,
          },
          {
            date: "1911-02-04",
            height: 155.69,
          },
          {
            date: "1911-02-05",
            height: 155.72,
          },
          {
            date: "1911-02-06",
            height: 155.75,
          },
          {
            date: "1911-02-07",
            height: 155.78,
          },
          {
            date: "1911-02-08",
            height: 155.81,
          },
          {
            date: "1911-02-09",
            height: 155.85,
          },
          {
            date: "1911-02-10",
            height: 155.88,
          },
          {
            date: "1911-02-11",
            height: 155.9,
          },
          {
            date: "1911-02-12",
            height: 155.92,
          },
          {
            date: "1911-02-13",
            height: 155.95,
          },
          {
            date: "1911-02-14",
            height: 155.96,
          },
          {
            date: "1911-02-15",
            height: 155.99,
          },
          {
            date: "1911-02-16",
            height: 156,
          },
          {
            date: "1911-02-17",
            height: 156.02,
          },
          {
            date: "1911-02-18",
            height: 156.05,
          },
          {
            date: "1911-02-19",
            height: 156.09,
          },
          {
            date: "1911-02-20",
            height: 156.13,
          },
          {
            date: "1911-02-21",
            height: 156.16,
          },
          {
            date: "1911-02-22",
            height: 156.18,
          },
          {
            date: "1911-02-23",
            height: 156.22,
          },
          {
            date: "1911-02-24",
            height: 156.24,
          },
          {
            date: "1911-02-25",
            height: 156.25,
          },
          {
            date: "1911-02-26",
            height: 156.27,
          },
          {
            date: "1911-02-27",
            height: 156.31,
          },
          {
            date: "1911-02-28",
            height: 156.32,
          },
          {
            date: "1911-03-01",
            height: 156.35,
          },
          {
            date: "1911-03-02",
            height: 156.37,
          },
          {
            date: "1911-03-03",
            height: 156.4,
          },
          {
            date: "1911-03-04",
            height: 156.41,
          },
          {
            date: "1911-03-05",
            height: 156.45,
          },
          {
            date: "1911-03-06",
            height: 156.47,
          },
          {
            date: "1911-03-07",
            height: 156.49,
          },
          {
            date: "1911-03-08",
            height: 156.51,
          },
          {
            date: "1911-03-09",
            height: 156.53,
          },
          {
            date: "1911-03-10",
            height: 156.57,
          },
          {
            date: "1911-03-11",
            height: 156.61,
          },
          {
            date: "1911-03-12",
            height: 156.64,
          },
          {
            date: "1911-03-13",
            height: 156.66,
          },
          {
            date: "1911-03-14",
            height: 156.67,
          },
          {
            date: "1911-03-15",
            height: 156.71,
          },
          {
            date: "1911-03-16",
            height: 156.74,
          },
          {
            date: "1911-03-17",
            height: 156.78,
          },
          {
            date: "1911-03-18",
            height: 156.81,
          },
          {
            date: "1911-03-19",
            height: 156.83,
          },
          {
            date: "1911-03-20",
            height: 156.85,
          },
          {
            date: "1911-03-21",
            height: 156.87,
          },
          {
            date: "1911-03-22",
            height: 156.88,
          },
          {
            date: "1911-03-23",
            height: 156.9,
          },
          {
            date: "1911-03-24",
            height: 156.92,
          },
          {
            date: "1911-03-25",
            height: 156.95,
          },
          {
            date: "1911-03-26",
            height: 156.98,
          },
          {
            date: "1911-03-27",
            height: 157,
          },
          {
            date: "1911-03-28",
            height: 157.02,
          },
          {
            date: "1911-03-29",
            height: 157.04,
          },
          {
            date: "1911-03-30",
            height: 157.07,
          },
          {
            date: "1911-03-31",
            height: 157.11,
          },
          {
            date: "1911-04-01",
            height: 157.12,
          },
          {
            date: "1911-04-02",
            height: 157.15,
          },
          {
            date: "1911-04-03",
            height: 157.16,
          },
          {
            date: "1911-04-04",
            height: 157.17,
          },
          {
            date: "1911-04-05",
            height: 157.2,
          },
          {
            date: "1911-04-06",
            height: 157.23,
          },
          {
            date: "1911-04-07",
            height: 157.26,
          },
          {
            date: "1911-04-08",
            height: 157.29,
          },
          {
            date: "1911-04-09",
            height: 157.31,
          },
          {
            date: "1911-04-10",
            height: 157.34,
          },
          {
            date: "1911-04-11",
            height: 157.35,
          },
          {
            date: "1911-04-12",
            height: 157.38,
          },
          {
            date: "1911-04-13",
            height: 157.41,
          },
          {
            date: "1911-04-14",
            height: 157.43,
          },
          {
            date: "1911-04-15",
            height: 157.46,
          },
          {
            date: "1911-04-16",
            height: 157.49,
          },
          {
            date: "1911-04-17",
            height: 157.52,
          },
          {
            date: "1911-04-18",
            height: 157.55,
          },
          {
            date: "1911-04-19",
            height: 157.58,
          },
          {
            date: "1911-04-20",
            height: 157.62,
          },
          {
            date: "1911-04-21",
            height: 157.65,
          },
          {
            date: "1911-04-22",
            height: 157.68,
          },
          {
            date: "1911-04-23",
            height: 157.7,
          },
          {
            date: "1911-04-24",
            height: 157.73,
          },
          {
            date: "1911-04-25",
            height: 157.77,
          },
          {
            date: "1911-04-26",
            height: 157.8,
          },
          {
            date: "1911-04-27",
            height: 157.84,
          },
          {
            date: "1911-04-28",
            height: 157.86,
          },
          {
            date: "1911-04-29",
            height: 157.9,
          },
          {
            date: "1911-04-30",
            height: 157.91,
          },
          {
            date: "1911-05-01",
            height: 157.94,
          },
          {
            date: "1911-05-02",
            height: 157.97,
          },
          {
            date: "1911-05-03",
            height: 158,
          },
          {
            date: "1911-05-04",
            height: 158.04,
          },
          {
            date: "1911-05-05",
            height: 158.05,
          },
          {
            date: "1911-05-06",
            height: 158.07,
          },
          {
            date: "1911-05-07",
            height: 158.08,
          },
          {
            date: "1911-05-08",
            height: 158.09,
          },
          {
            date: "1911-05-09",
            height: 158.12,
          },
          {
            date: "1911-05-10",
            height: 158.16,
          },
          {
            date: "1911-05-11",
            height: 158.17,
          },
          {
            date: "1911-05-12",
            height: 158.2,
          },
          {
            date: "1911-05-13",
            height: 158.21,
          },
          {
            date: "1911-05-14",
            height: 158.23,
          },
          {
            date: "1911-05-15",
            height: 158.27,
          },
          {
            date: "1911-05-16",
            height: 158.29,
          },
          {
            date: "1911-05-17",
            height: 158.31,
          },
          {
            date: "1911-05-18",
            height: 158.35,
          },
          {
            date: "1911-05-19",
            height: 158.38,
          },
          {
            date: "1911-05-20",
            height: 158.4,
          },
          {
            date: "1911-05-21",
            height: 158.42,
          },
          {
            date: "1911-05-22",
            height: 158.45,
          },
          {
            date: "1911-05-23",
            height: 158.47,
          },
          {
            date: "1911-05-24",
            height: 158.5,
          },
          {
            date: "1911-05-25",
            height: 158.54,
          },
          {
            date: "1911-05-26",
            height: 158.57,
          },
          {
            date: "1911-05-27",
            height: 158.61,
          },
          {
            date: "1911-05-28",
            height: 158.65,
          },
          {
            date: "1911-05-29",
            height: 158.68,
          },
          {
            date: "1911-05-30",
            height: 158.7,
          },
          {
            date: "1911-05-31",
            height: 158.72,
          },
          {
            date: "1911-06-01",
            height: 158.74,
          },
          {
            date: "1911-06-02",
            height: 158.77,
          },
          {
            date: "1911-06-03",
            height: 158.79,
          },
          {
            date: "1911-06-04",
            height: 158.82,
          },
          {
            date: "1911-06-05",
            height: 158.83,
          },
          {
            date: "1911-06-06",
            height: 158.85,
          },
          {
            date: "1911-06-07",
            height: 158.89,
          },
          {
            date: "1911-06-08",
            height: 158.91,
          },
          {
            date: "1911-06-09",
            height: 158.93,
          },
          {
            date: "1911-06-10",
            height: 158.96,
          },
          {
            date: "1911-06-11",
            height: 158.98,
          },
          {
            date: "1911-06-12",
            height: 159.01,
          },
          {
            date: "1911-06-13",
            height: 159.04,
          },
          {
            date: "1911-06-14",
            height: 159.06,
          },
          {
            date: "1911-06-15",
            height: 159.1,
          },
          {
            date: "1911-06-16",
            height: 159.11,
          },
          {
            date: "1911-06-17",
            height: 159.13,
          },
          {
            date: "1911-06-18",
            height: 159.16,
          },
          {
            date: "1911-06-19",
            height: 159.18,
          },
          {
            date: "1911-06-20",
            height: 159.19,
          },
          {
            date: "1911-06-21",
            height: 159.23,
          },
          {
            date: "1911-06-22",
            height: 159.25,
          },
          {
            date: "1911-06-23",
            height: 159.27,
          },
          {
            date: "1911-06-24",
            height: 159.28,
          },
          {
            date: "1911-06-25",
            height: 159.32,
          },
          {
            date: "1911-06-26",
            height: 159.36,
          },
          {
            date: "1911-06-27",
            height: 159.39,
          },
          {
            date: "1911-06-28",
            height: 159.42,
          },
          {
            date: "1911-06-29",
            height: 159.44,
          },
          {
            date: "1911-06-30",
            height: 159.48,
          },
          {
            date: "1911-07-01",
            height: 159.49,
          },
          {
            date: "1911-07-02",
            height: 159.52,
          },
          {
            date: "1911-07-03",
            height: 159.55,
          },
          {
            date: "1911-07-04",
            height: 159.58,
          },
          {
            date: "1911-07-05",
            height: 159.6,
          },
          {
            date: "1911-07-06",
            height: 159.62,
          },
          {
            date: "1911-07-07",
            height: 159.66,
          },
          {
            date: "1911-07-08",
            height: 159.69,
          },
          {
            date: "1911-07-09",
            height: 159.71,
          },
          {
            date: "1911-07-10",
            height: 159.75,
          },
          {
            date: "1911-07-11",
            height: 159.78,
          },
          {
            date: "1911-07-12",
            height: 159.79,
          },
          {
            date: "1911-07-13",
            height: 159.83,
          },
          {
            date: "1911-07-14",
            height: 159.87,
          },
          {
            date: "1911-07-15",
            height: 159.89,
          },
          {
            date: "1911-07-16",
            height: 159.9,
          },
          {
            date: "1911-07-17",
            height: 159.94,
          },
          {
            date: "1911-07-18",
            height: 159.96,
          },
          {
            date: "1911-07-19",
            height: 159.99,
          },
          {
            date: "1911-07-20",
            height: 160,
          },
          {
            date: "1911-07-21",
            height: 160.04,
          },
          {
            date: "1911-07-22",
            height: 160.06,
          },
          {
            date: "1911-07-23",
            height: 160.08,
          },
          {
            date: "1911-07-24",
            height: 160.1,
          },
          {
            date: "1911-07-25",
            height: 160.13,
          },
          {
            date: "1911-07-26",
            height: 160.17,
          },
          {
            date: "1911-07-27",
            height: 160.18,
          },
          {
            date: "1911-07-28",
            height: 160.22,
          },
          {
            date: "1911-07-29",
            height: 160.26,
          },
          {
            date: "1911-07-30",
            height: 160.28,
          },
          {
            date: "1911-07-31",
            height: 160.32,
          },
          {
            date: "1911-08-01",
            height: 160.33,
          },
          {
            date: "1911-08-02",
            height: 160.34,
          },
          {
            date: "1911-08-03",
            height: 160.38,
          },
          {
            date: "1911-08-04",
            height: 160.39,
          },
          {
            date: "1911-08-05",
            height: 160.42,
          },
          {
            date: "1911-08-06",
            height: 160.45,
          },
          {
            date: "1911-08-07",
            height: 160.46,
          },
          {
            date: "1911-08-08",
            height: 160.5,
          },
          {
            date: "1911-08-09",
            height: 160.52,
          },
          {
            date: "1911-08-10",
            height: 160.54,
          },
          {
            date: "1911-08-11",
            height: 160.57,
          },
          {
            date: "1911-08-12",
            height: 160.59,
          },
          {
            date: "1911-08-13",
            height: 160.61,
          },
          {
            date: "1911-08-14",
            height: 160.64,
          },
          {
            date: "1911-08-15",
            height: 160.66,
          },
          {
            date: "1911-08-16",
            height: 160.7,
          },
          {
            date: "1911-08-17",
            height: 160.73,
          },
          {
            date: "1911-08-18",
            height: 160.76,
          },
          {
            date: "1911-08-19",
            height: 160.77,
          },
          {
            date: "1911-08-20",
            height: 160.79,
          },
          {
            date: "1911-08-21",
            height: 160.83,
          },
          {
            date: "1911-08-22",
            height: 160.84,
          },
          {
            date: "1911-08-23",
            height: 160.88,
          },
          {
            date: "1911-08-24",
            height: 160.89,
          },
          {
            date: "1911-08-25",
            height: 160.92,
          },
          {
            date: "1911-08-26",
            height: 160.96,
          },
          {
            date: "1911-08-27",
            height: 160.97,
          },
          {
            date: "1911-08-28",
            height: 160.98,
          },
          {
            date: "1911-08-29",
            height: 161.01,
          },
          {
            date: "1911-08-30",
            height: 161.03,
          },
          {
            date: "1911-08-31",
            height: 161.05,
          },
          {
            date: "1911-09-01",
            height: 161.09,
          },
          {
            date: "1911-09-02",
            height: 161.11,
          },
          {
            date: "1911-09-03",
            height: 161.13,
          },
          {
            date: "1911-09-04",
            height: 161.15,
          },
          {
            date: "1911-09-05",
            height: 161.17,
          },
          {
            date: "1911-09-06",
            height: 161.19,
          },
          {
            date: "1911-09-07",
            height: 161.22,
          },
          {
            date: "1911-09-08",
            height: 161.25,
          },
          {
            date: "1911-09-09",
            height: 161.28,
          },
          {
            date: "1911-09-10",
            height: 161.29,
          },
          {
            date: "1911-09-11",
            height: 161.31,
          },
          {
            date: "1911-09-12",
            height: 161.34,
          },
          {
            date: "1911-09-13",
            height: 161.38,
          },
          {
            date: "1911-09-14",
            height: 161.41,
          },
          {
            date: "1911-09-15",
            height: 161.44,
          },
          {
            date: "1911-09-16",
            height: 161.47,
          },
          {
            date: "1911-09-17",
            height: 161.5,
          },
          {
            date: "1911-09-18",
            height: 161.52,
          },
          {
            date: "1911-09-19",
            height: 161.55,
          },
          {
            date: "1911-09-20",
            height: 161.58,
          },
          {
            date: "1911-09-21",
            height: 161.6,
          },
          {
            date: "1911-09-22",
            height: 161.64,
          },
          {
            date: "1911-09-23",
            height: 161.67,
          },
          {
            date: "1911-09-24",
            height: 161.7,
          },
          {
            date: "1911-09-25",
            height: 161.73,
          },
          {
            date: "1911-09-26",
            height: 161.76,
          },
          {
            date: "1911-09-27",
            height: 161.78,
          },
          {
            date: "1911-09-28",
            height: 161.8,
          },
          {
            date: "1911-09-29",
            height: 161.84,
          },
          {
            date: "1911-09-30",
            height: 161.87,
          },
          {
            date: "1911-10-01",
            height: 161.9,
          },
          {
            date: "1911-10-02",
            height: 161.94,
          },
          {
            date: "1911-10-03",
            height: 161.96,
          },
          {
            date: "1911-10-04",
            height: 161.98,
          },
          {
            date: "1911-10-05",
            height: 162,
          },
          {
            date: "1911-10-06",
            height: 162.02,
          },
          {
            date: "1911-10-07",
            height: 162.05,
          },
          {
            date: "1911-10-08",
            height: 162.06,
          },
          {
            date: "1911-10-09",
            height: 162.08,
          },
          {
            date: "1911-10-10",
            height: 162.12,
          },
          {
            date: "1911-10-11",
            height: 162.16,
          },
          {
            date: "1911-10-12",
            height: 162.17,
          },
          {
            date: "1911-10-13",
            height: 162.2,
          },
          {
            date: "1911-10-14",
            height: 162.22,
          },
          {
            date: "1911-10-15",
            height: 162.25,
          },
          {
            date: "1911-10-16",
            height: 162.27,
          },
          {
            date: "1911-10-17",
            height: 162.3,
          },
          {
            date: "1911-10-18",
            height: 162.33,
          },
          {
            date: "1911-10-19",
            height: 162.35,
          },
          {
            date: "1911-10-20",
            height: 162.36,
          },
          {
            date: "1911-10-21",
            height: 162.39,
          },
          {
            date: "1911-10-22",
            height: 162.4,
          },
          {
            date: "1911-10-23",
            height: 162.42,
          },
          {
            date: "1911-10-24",
            height: 162.43,
          },
          {
            date: "1911-10-25",
            height: 162.46,
          },
          {
            date: "1911-10-26",
            height: 162.48,
          },
          {
            date: "1911-10-27",
            height: 162.51,
          },
          {
            date: "1911-10-28",
            height: 162.55,
          },
          {
            date: "1911-10-29",
            height: 162.58,
          },
          {
            date: "1911-10-30",
            height: 162.59,
          },
          {
            date: "1911-10-31",
            height: 162.62,
          },
          {
            date: "1911-11-01",
            height: 162.65,
          },
          {
            date: "1911-11-02",
            height: 162.66,
          },
          {
            date: "1911-11-03",
            height: 162.69,
          },
          {
            date: "1911-11-04",
            height: 162.73,
          },
          {
            date: "1911-11-05",
            height: 162.75,
          },
          {
            date: "1911-11-06",
            height: 162.77,
          },
          {
            date: "1911-11-07",
            height: 162.79,
          },
          {
            date: "1911-11-08",
            height: 162.81,
          },
          {
            date: "1911-11-09",
            height: 162.82,
          },
          {
            date: "1911-11-10",
            height: 162.86,
          },
          {
            date: "1911-11-11",
            height: 162.88,
          },
          {
            date: "1911-11-12",
            height: 162.9,
          },
          {
            date: "1911-11-13",
            height: 162.93,
          },
          {
            date: "1911-11-14",
            height: 162.97,
          },
          {
            date: "1911-11-15",
            height: 162.99,
          },
          {
            date: "1911-11-16",
            height: 163.01,
          },
          {
            date: "1911-11-17",
            height: 163.02,
          },
          {
            date: "1911-11-18",
            height: 163.05,
          },
          {
            date: "1911-11-19",
            height: 163.07,
          },
          {
            date: "1911-11-20",
            height: 163.09,
          },
          {
            date: "1911-11-21",
            height: 163.1,
          },
          {
            date: "1911-11-22",
            height: 163.12,
          },
          {
            date: "1911-11-23",
            height: 163.16,
          },
          {
            date: "1911-11-24",
            height: 163.19,
          },
          {
            date: "1911-11-25",
            height: 163.22,
          },
          {
            date: "1911-11-26",
            height: 163.23,
          },
          {
            date: "1911-11-27",
            height: 163.26,
          },
          {
            date: "1911-11-28",
            height: 163.29,
          },
          {
            date: "1911-11-29",
            height: 163.32,
          },
          {
            date: "1911-11-30",
            height: 163.34,
          },
          {
            date: "1911-12-01",
            height: 163.36,
          },
          {
            date: "1911-12-02",
            height: 163.37,
          },
          {
            date: "1911-12-03",
            height: 163.39,
          },
          {
            date: "1911-12-04",
            height: 163.43,
          },
          {
            date: "1911-12-05",
            height: 163.44,
          },
          {
            date: "1911-12-06",
            height: 163.46,
          },
          {
            date: "1911-12-07",
            height: 163.5,
          },
          {
            date: "1911-12-08",
            height: 163.53,
          },
          {
            date: "1911-12-09",
            height: 163.55,
          },
          {
            date: "1911-12-10",
            height: 163.57,
          },
          {
            date: "1911-12-11",
            height: 163.58,
          },
          {
            date: "1911-12-12",
            height: 163.6,
          },
          {
            date: "1911-12-13",
            height: 163.64,
          },
          {
            date: "1911-12-14",
            height: 163.66,
          },
          {
            date: "1911-12-15",
            height: 163.68,
          },
          {
            date: "1911-12-16",
            height: 163.7,
          },
          {
            date: "1911-12-17",
            height: 163.74,
          },
          {
            date: "1911-12-18",
            height: 163.76,
          },
          {
            date: "1911-12-19",
            height: 163.79,
          },
          {
            date: "1911-12-20",
            height: 163.81,
          },
          {
            date: "1911-12-21",
            height: 163.84,
          },
          {
            date: "1911-12-22",
            height: 163.86,
          },
          {
            date: "1911-12-23",
            height: 163.88,
          },
          {
            date: "1911-12-24",
            height: 163.91,
          },
          {
            date: "1911-12-25",
            height: 163.93,
          },
          {
            date: "1911-12-26",
            height: 163.95,
          },
          {
            date: "1911-12-27",
            height: 163.97,
          },
          {
            date: "1911-12-28",
            height: 163.98,
          },
          {
            date: "1911-12-29",
            height: 164.02,
          },
          {
            date: "1911-12-30",
            height: 164.04,
          },
          {
            date: "1911-12-31",
            height: 164.05,
          },
          {
            date: "1912-01-01",
            height: 164.07,
          },
          {
            date: "1912-01-02",
            height: 164.1,
          },
          {
            date: "1912-01-03",
            height: 164.13,
          },
          {
            date: "1912-01-04",
            height: 164.16,
          },
          {
            date: "1912-01-05",
            height: 164.19,
          },
          {
            date: "1912-01-06",
            height: 164.2,
          },
          {
            date: "1912-01-07",
            height: 164.23,
          },
          {
            date: "1912-01-08",
            height: 164.27,
          },
          {
            date: "1912-01-09",
            height: 164.3,
          },
          {
            date: "1912-01-10",
            height: 164.32,
          },
          {
            date: "1912-01-11",
            height: 164.33,
          },
          {
            date: "1912-01-12",
            height: 164.35,
          },
          {
            date: "1912-01-13",
            height: 164.38,
          },
          {
            date: "1912-01-14",
            height: 164.42,
          },
          {
            date: "1912-01-15",
            height: 164.44,
          },
          {
            date: "1912-01-16",
            height: 164.45,
          },
          {
            date: "1912-01-17",
            height: 164.48,
          },
          {
            date: "1912-01-18",
            height: 164.51,
          },
          {
            date: "1912-01-19",
            height: 164.53,
          },
          {
            date: "1912-01-20",
            height: 164.55,
          },
          {
            date: "1912-01-21",
            height: 164.58,
          },
          {
            date: "1912-01-22",
            height: 164.6,
          },
          {
            date: "1912-01-23",
            height: 164.64,
          },
          {
            date: "1912-01-24",
            height: 164.67,
          },
          {
            date: "1912-01-25",
            height: 164.71,
          },
          {
            date: "1912-01-26",
            height: 164.74,
          },
          {
            date: "1912-01-27",
            height: 164.77,
          },
          {
            date: "1912-01-28",
            height: 164.81,
          },
          {
            date: "1912-01-29",
            height: 164.82,
          },
          {
            date: "1912-01-30",
            height: 164.83,
          },
          {
            date: "1912-01-31",
            height: 164.85,
          },
          {
            date: "1912-02-01",
            height: 164.87,
          },
          {
            date: "1912-02-02",
            height: 164.89,
          },
          {
            date: "1912-02-03",
            height: 164.9,
          },
          {
            date: "1912-02-04",
            height: 164.94,
          },
          {
            date: "1912-02-05",
            height: 164.97,
          },
          {
            date: "1912-02-06",
            height: 165,
          },
          {
            date: "1912-02-07",
            height: 165.03,
          },
          {
            date: "1912-02-08",
            height: 165.05,
          },
          {
            date: "1912-02-09",
            height: 165.09,
          },
          {
            date: "1912-02-10",
            height: 165.1,
          },
          {
            date: "1912-02-11",
            height: 165.12,
          },
          {
            date: "1912-02-12",
            height: 165.14,
          },
          {
            date: "1912-02-13",
            height: 165.16,
          },
          {
            date: "1912-02-14",
            height: 165.18,
          },
          {
            date: "1912-02-15",
            height: 165.2,
          },
          {
            date: "1912-02-16",
            height: 165.22,
          },
          {
            date: "1912-02-17",
            height: 165.26,
          },
          {
            date: "1912-02-18",
            height: 165.27,
          },
          {
            date: "1912-02-19",
            height: 165.29,
          },
          {
            date: "1912-02-20",
            height: 165.32,
          },
          {
            date: "1912-02-21",
            height: 165.35,
          },
          {
            date: "1912-02-22",
            height: 165.39,
          },
          {
            date: "1912-02-23",
            height: 165.41,
          },
          {
            date: "1912-02-24",
            height: 165.43,
          },
          {
            date: "1912-02-25",
            height: 165.46,
          },
          {
            date: "1912-02-26",
            height: 165.47,
          },
          {
            date: "1912-02-27",
            height: 165.49,
          },
          {
            date: "1912-02-28",
            height: 165.5,
          },
          {
            date: "1912-02-29",
            height: 165.52,
          },
          {
            date: "1912-03-01",
            height: 165.55,
          },
          {
            date: "1912-03-02",
            height: 165.58,
          },
          {
            date: "1912-03-03",
            height: 165.62,
          },
          {
            date: "1912-03-04",
            height: 165.64,
          },
          {
            date: "1912-03-05",
            height: 165.67,
          },
          {
            date: "1912-03-06",
            height: 165.69,
          },
          {
            date: "1912-03-07",
            height: 165.71,
          },
          {
            date: "1912-03-08",
            height: 165.74,
          },
          {
            date: "1912-03-09",
            height: 165.76,
          },
          {
            date: "1912-03-10",
            height: 165.77,
          },
          {
            date: "1912-03-11",
            height: 165.8,
          },
          {
            date: "1912-03-12",
            height: 165.84,
          },
          {
            date: "1912-03-13",
            height: 165.87,
          },
          {
            date: "1912-03-14",
            height: 165.89,
          },
          {
            date: "1912-03-15",
            height: 165.92,
          },
          {
            date: "1912-03-16",
            height: 165.95,
          },
          {
            date: "1912-03-17",
            height: 165.99,
          },
          {
            date: "1912-03-18",
            height: 166.01,
          },
          {
            date: "1912-03-19",
            height: 166.02,
          },
          {
            date: "1912-03-20",
            height: 166.04,
          },
          {
            date: "1912-03-21",
            height: 166.06,
          },
          {
            date: "1912-03-22",
            height: 166.07,
          },
          {
            date: "1912-03-23",
            height: 166.11,
          },
          {
            date: "1912-03-24",
            height: 166.15,
          },
          {
            date: "1912-03-25",
            height: 166.17,
          },
          {
            date: "1912-03-26",
            height: 166.19,
          },
          {
            date: "1912-03-27",
            height: 166.21,
          },
          {
            date: "1912-03-28",
            height: 166.24,
          },
          {
            date: "1912-03-29",
            height: 166.27,
          },
          {
            date: "1912-03-30",
            height: 166.28,
          },
          {
            date: "1912-03-31",
            height: 166.31,
          },
          {
            date: "1912-04-01",
            height: 166.35,
          },
          {
            date: "1912-04-02",
            height: 166.36,
          },
          {
            date: "1912-04-03",
            height: 166.38,
          },
          {
            date: "1912-04-04",
            height: 166.42,
          },
          {
            date: "1912-04-05",
            height: 166.45,
          },
          {
            date: "1912-04-06",
            height: 166.49,
          },
          {
            date: "1912-04-07",
            height: 166.52,
          },
          {
            date: "1912-04-08",
            height: 166.55,
          },
          {
            date: "1912-04-09",
            height: 166.58,
          },
          {
            date: "1912-04-10",
            height: 166.61,
          },
          {
            date: "1912-04-11",
            height: 166.65,
          },
          {
            date: "1912-04-12",
            height: 166.67,
          },
          {
            date: "1912-04-13",
            height: 166.69,
          },
          {
            date: "1912-04-14",
            height: 166.73,
          },
          {
            date: "1912-04-15",
            height: 166.75,
          },
          {
            date: "1912-04-16",
            height: 166.78,
          },
          {
            date: "1912-04-17",
            height: 166.8,
          },
          {
            date: "1912-04-18",
            height: 166.83,
          },
          {
            date: "1912-04-19",
            height: 166.87,
          },
          {
            date: "1912-04-20",
            height: 166.89,
          },
          {
            date: "1912-04-21",
            height: 166.91,
          },
          {
            date: "1912-04-22",
            height: 166.94,
          },
          {
            date: "1912-04-23",
            height: 166.97,
          },
          {
            date: "1912-04-24",
            height: 166.99,
          },
          {
            date: "1912-04-25",
            height: 167.03,
          },
          {
            date: "1912-04-26",
            height: 167.05,
          },
          {
            date: "1912-04-27",
            height: 167.09,
          },
          {
            date: "1912-04-28",
            height: 167.1,
          },
          {
            date: "1912-04-29",
            height: 167.12,
          },
          {
            date: "1912-04-30",
            height: 167.15,
          },
          {
            date: "1912-05-01",
            height: 167.19,
          },
          {
            date: "1912-05-02",
            height: 167.21,
          },
          {
            date: "1912-05-03",
            height: 167.24,
          },
          {
            date: "1912-05-04",
            height: 167.27,
          },
          {
            date: "1912-05-05",
            height: 167.31,
          },
          {
            date: "1912-05-06",
            height: 167.32,
          },
          {
            date: "1912-05-07",
            height: 167.35,
          },
          {
            date: "1912-05-08",
            height: 167.38,
          },
          {
            date: "1912-05-09",
            height: 167.4,
          },
          {
            date: "1912-05-10",
            height: 167.41,
          },
          {
            date: "1912-05-11",
            height: 167.43,
          },
          {
            date: "1912-05-12",
            height: 167.46,
          },
          {
            date: "1912-05-13",
            height: 167.47,
          },
          {
            date: "1912-05-14",
            height: 167.5,
          },
          {
            date: "1912-05-15",
            height: 167.52,
          },
          {
            date: "1912-05-16",
            height: 167.55,
          },
          {
            date: "1912-05-17",
            height: 167.57,
          },
          {
            date: "1912-05-18",
            height: 167.6,
          },
          {
            date: "1912-05-19",
            height: 167.61,
          },
          {
            date: "1912-05-20",
            height: 167.64,
          },
          {
            date: "1912-05-21",
            height: 167.66,
          },
          {
            date: "1912-05-22",
            height: 167.69,
          },
          {
            date: "1912-05-23",
            height: 167.71,
          },
          {
            date: "1912-05-24",
            height: 167.72,
          },
          {
            date: "1912-05-25",
            height: 167.75,
          },
          {
            date: "1912-05-26",
            height: 167.78,
          },
          {
            date: "1912-05-27",
            height: 167.81,
          },
          {
            date: "1912-05-28",
            height: 167.83,
          },
          {
            date: "1912-05-29",
            height: 167.84,
          },
          {
            date: "1912-05-30",
            height: 167.85,
          },
          {
            date: "1912-05-31",
            height: 167.89,
          },
          {
            date: "1912-06-01",
            height: 167.92,
          },
          {
            date: "1912-06-02",
            height: 167.93,
          },
          {
            date: "1912-06-03",
            height: 167.95,
          },
          {
            date: "1912-06-04",
            height: 167.97,
          },
          {
            date: "1912-06-05",
            height: 168,
          },
          {
            date: "1912-06-06",
            height: 168.02,
          },
          {
            date: "1912-06-07",
            height: 168.05,
          },
          {
            date: "1912-06-08",
            height: 168.07,
          },
          {
            date: "1912-06-09",
            height: 168.1,
          },
          {
            date: "1912-06-10",
            height: 168.13,
          },
          {
            date: "1912-06-11",
            height: 168.16,
          },
          {
            date: "1912-06-12",
            height: 168.2,
          },
          {
            date: "1912-06-13",
            height: 168.21,
          },
          {
            date: "1912-06-14",
            height: 168.24,
          },
          {
            date: "1912-06-15",
            height: 168.28,
          },
          {
            date: "1912-06-16",
            height: 168.29,
          },
          {
            date: "1912-06-17",
            height: 168.33,
          },
          {
            date: "1912-06-18",
            height: 168.35,
          },
          {
            date: "1912-06-19",
            height: 168.38,
          },
          {
            date: "1912-06-20",
            height: 168.41,
          },
          {
            date: "1912-06-21",
            height: 168.43,
          },
          {
            date: "1912-06-22",
            height: 168.46,
          },
          {
            date: "1912-06-23",
            height: 168.48,
          },
          {
            date: "1912-06-24",
            height: 168.5,
          },
          {
            date: "1912-06-25",
            height: 168.53,
          },
          {
            date: "1912-06-26",
            height: 168.55,
          },
          {
            date: "1912-06-27",
            height: 168.58,
          },
          {
            date: "1912-06-28",
            height: 168.59,
          },
          {
            date: "1912-06-29",
            height: 168.62,
          },
          {
            date: "1912-06-30",
            height: 168.66,
          },
          {
            date: "1912-07-01",
            height: 168.69,
          },
          {
            date: "1912-07-02",
            height: 168.7,
          },
          {
            date: "1912-07-03",
            height: 168.74,
          },
          {
            date: "1912-07-04",
            height: 168.75,
          },
          {
            date: "1912-07-05",
            height: 168.77,
          },
          {
            date: "1912-07-06",
            height: 168.79,
          },
          {
            date: "1912-07-07",
            height: 168.83,
          },
          {
            date: "1912-07-08",
            height: 168.86,
          },
          {
            date: "1912-07-09",
            height: 168.88,
          },
          {
            date: "1912-07-10",
            height: 168.92,
          },
          {
            date: "1912-07-11",
            height: 168.96,
          },
          {
            date: "1912-07-12",
            height: 168.99,
          },
          {
            date: "1912-07-13",
            height: 169.03,
          },
          {
            date: "1912-07-14",
            height: 169.05,
          },
          {
            date: "1912-07-15",
            height: 169.08,
          },
          {
            date: "1912-07-16",
            height: 169.1,
          },
          {
            date: "1912-07-17",
            height: 169.11,
          },
          {
            date: "1912-07-18",
            height: 169.14,
          },
          {
            date: "1912-07-19",
            height: 169.16,
          },
          {
            date: "1912-07-20",
            height: 169.2,
          },
          {
            date: "1912-07-21",
            height: 169.22,
          },
          {
            date: "1912-07-22",
            height: 169.24,
          },
          {
            date: "1912-07-23",
            height: 169.26,
          },
          {
            date: "1912-07-24",
            height: 169.28,
          },
          {
            date: "1912-07-25",
            height: 169.32,
          },
          {
            date: "1912-07-26",
            height: 169.34,
          },
          {
            date: "1912-07-27",
            height: 169.35,
          },
          {
            date: "1912-07-28",
            height: 169.37,
          },
          {
            date: "1912-07-29",
            height: 169.4,
          },
          {
            date: "1912-07-30",
            height: 169.44,
          },
          {
            date: "1912-07-31",
            height: 169.48,
          },
          {
            date: "1912-08-01",
            height: 169.51,
          },
          {
            date: "1912-08-02",
            height: 169.54,
          },
          {
            date: "1912-08-03",
            height: 169.58,
          },
          {
            date: "1912-08-04",
            height: 169.61,
          },
          {
            date: "1912-08-05",
            height: 169.64,
          },
          {
            date: "1912-08-06",
            height: 169.66,
          },
          {
            date: "1912-08-07",
            height: 169.68,
          },
          {
            date: "1912-08-08",
            height: 169.69,
          },
          {
            date: "1912-08-09",
            height: 169.71,
          },
          {
            date: "1912-08-10",
            height: 169.75,
          },
          {
            date: "1912-08-11",
            height: 169.79,
          },
          {
            date: "1912-08-12",
            height: 169.82,
          },
          {
            date: "1912-08-13",
            height: 169.83,
          },
          {
            date: "1912-08-14",
            height: 169.85,
          },
          {
            date: "1912-08-15",
            height: 169.89,
          },
          {
            date: "1912-08-16",
            height: 169.91,
          },
          {
            date: "1912-08-17",
            height: 169.94,
          },
          {
            date: "1912-08-18",
            height: 169.95,
          },
          {
            date: "1912-08-19",
            height: 169.98,
          },
          {
            date: "1912-08-20",
            height: 169.99,
          },
          {
            date: "1912-08-21",
            height: 170.01,
          },
          {
            date: "1912-08-22",
            height: 170.04,
          },
          {
            date: "1912-08-23",
            height: 170.06,
          },
          {
            date: "1912-08-24",
            height: 170.1,
          },
          {
            date: "1912-08-25",
            height: 170.13,
          },
          {
            date: "1912-08-26",
            height: 170.16,
          },
          {
            date: "1912-08-27",
            height: 170.2,
          },
          {
            date: "1912-08-28",
            height: 170.21,
          },
          {
            date: "1912-08-29",
            height: 170.24,
          },
          {
            date: "1912-08-30",
            height: 170.26,
          },
          {
            date: "1912-08-31",
            height: 170.3,
          },
          {
            date: "1912-09-01",
            height: 170.33,
          },
          {
            date: "1912-09-02",
            height: 170.36,
          },
          {
            date: "1912-09-03",
            height: 170.4,
          },
          {
            date: "1912-09-04",
            height: 170.44,
          },
          {
            date: "1912-09-05",
            height: 170.45,
          },
          {
            date: "1912-09-06",
            height: 170.47,
          },
          {
            date: "1912-09-07",
            height: 170.49,
          },
          {
            date: "1912-09-08",
            height: 170.51,
          },
          {
            date: "1912-09-09",
            height: 170.54,
          },
          {
            date: "1912-09-10",
            height: 170.58,
          },
          {
            date: "1912-09-11",
            height: 170.59,
          },
          {
            date: "1912-09-12",
            height: 170.63,
          },
          {
            date: "1912-09-13",
            height: 170.64,
          },
          {
            date: "1912-09-14",
            height: 170.66,
          },
          {
            date: "1912-09-15",
            height: 170.68,
          },
          {
            date: "1912-09-16",
            height: 170.71,
          },
          {
            date: "1912-09-17",
            height: 170.72,
          },
          {
            date: "1912-09-18",
            height: 170.75,
          },
          {
            date: "1912-09-19",
            height: 170.77,
          },
          {
            date: "1912-09-20",
            height: 170.8,
          },
          {
            date: "1912-09-21",
            height: 170.81,
          },
          {
            date: "1912-09-22",
            height: 170.83,
          },
          {
            date: "1912-09-23",
            height: 170.85,
          },
          {
            date: "1912-09-24",
            height: 170.88,
          },
          {
            date: "1912-09-25",
            height: 170.92,
          },
          {
            date: "1912-09-26",
            height: 170.94,
          },
          {
            date: "1912-09-27",
            height: 170.97,
          },
          {
            date: "1912-09-28",
            height: 170.99,
          },
          {
            date: "1912-09-29",
            height: 171.03,
          },
          {
            date: "1912-09-30",
            height: 171.06,
          },
          {
            date: "1912-10-01",
            height: 171.07,
          },
          {
            date: "1912-10-02",
            height: 171.11,
          },
          {
            date: "1912-10-03",
            height: 171.15,
          },
          {
            date: "1912-10-04",
            height: 171.17,
          },
          {
            date: "1912-10-05",
            height: 171.21,
          },
          {
            date: "1912-10-06",
            height: 171.25,
          },
          {
            date: "1912-10-07",
            height: 171.28,
          },
          {
            date: "1912-10-08",
            height: 171.3,
          },
          {
            date: "1912-10-09",
            height: 171.31,
          },
          {
            date: "1912-10-10",
            height: 171.33,
          },
          {
            date: "1912-10-11",
            height: 171.36,
          },
          {
            date: "1912-10-12",
            height: 171.38,
          },
          {
            date: "1912-10-13",
            height: 171.39,
          },
          {
            date: "1912-10-14",
            height: 171.42,
          },
          {
            date: "1912-10-15",
            height: 171.44,
          },
          {
            date: "1912-10-16",
            height: 171.47,
          },
          {
            date: "1912-10-17",
            height: 171.49,
          },
          {
            date: "1912-10-18",
            height: 171.51,
          },
          {
            date: "1912-10-19",
            height: 171.53,
          },
          {
            date: "1912-10-20",
            height: 171.55,
          },
          {
            date: "1912-10-21",
            height: 171.59,
          },
          {
            date: "1912-10-22",
            height: 171.62,
          },
          {
            date: "1912-10-23",
            height: 171.65,
          },
          {
            date: "1912-10-24",
            height: 171.67,
          },
          {
            date: "1912-10-25",
            height: 171.71,
          },
          {
            date: "1912-10-26",
            height: 171.75,
          },
          {
            date: "1912-10-27",
            height: 171.78,
          },
          {
            date: "1912-10-28",
            height: 171.81,
          },
          {
            date: "1912-10-29",
            height: 171.84,
          },
          {
            date: "1912-10-30",
            height: 171.88,
          },
          {
            date: "1912-10-31",
            height: 171.91,
          },
          {
            date: "1912-11-01",
            height: 171.93,
          },
          {
            date: "1912-11-02",
            height: 171.97,
          },
          {
            date: "1912-11-03",
            height: 171.99,
          },
          {
            date: "1912-11-04",
            height: 172.02,
          },
          {
            date: "1912-11-05",
            height: 172.04,
          },
          {
            date: "1912-11-06",
            height: 172.07,
          },
          {
            date: "1912-11-07",
            height: 172.1,
          },
          {
            date: "1912-11-08",
            height: 172.13,
          },
          {
            date: "1912-11-09",
            height: 172.17,
          },
          {
            date: "1912-11-10",
            height: 172.19,
          },
          {
            date: "1912-11-11",
            height: 172.23,
          },
          {
            date: "1912-11-12",
            height: 172.26,
          },
          {
            date: "1912-11-13",
            height: 172.29,
          },
          {
            date: "1912-11-14",
            height: 172.32,
          },
          {
            date: "1912-11-15",
            height: 172.36,
          },
          {
            date: "1912-11-16",
            height: 172.38,
          },
          {
            date: "1912-11-17",
            height: 172.41,
          },
          {
            date: "1912-11-18",
            height: 172.43,
          },
          {
            date: "1912-11-19",
            height: 172.46,
          },
          {
            date: "1912-11-20",
            height: 172.47,
          },
          {
            date: "1912-11-21",
            height: 172.48,
          },
          {
            date: "1912-11-22",
            height: 172.5,
          },
          {
            date: "1912-11-23",
            height: 172.53,
          },
          {
            date: "1912-11-24",
            height: 172.55,
          },
          {
            date: "1912-11-25",
            height: 172.59,
          },
          {
            date: "1912-11-26",
            height: 172.61,
          },
          {
            date: "1912-11-27",
            height: 172.65,
          },
          {
            date: "1912-11-28",
            height: 172.68,
          },
          {
            date: "1912-11-29",
            height: 172.69,
          },
          {
            date: "1912-11-30",
            height: 172.71,
          },
          {
            date: "1912-12-01",
            height: 172.74,
          },
          {
            date: "1912-12-02",
            height: 172.77,
          },
          {
            date: "1912-12-03",
            height: 172.79,
          },
          {
            date: "1912-12-04",
            height: 172.83,
          },
          {
            date: "1912-12-05",
            height: 172.86,
          },
          {
            date: "1912-12-06",
            height: 172.88,
          },
          {
            date: "1912-12-07",
            height: 172.91,
          },
          {
            date: "1912-12-08",
            height: 172.93,
          },
          {
            date: "1912-12-09",
            height: 172.95,
          },
          {
            date: "1912-12-10",
            height: 172.98,
          },
          {
            date: "1912-12-11",
            height: 173.01,
          },
          {
            date: "1912-12-12",
            height: 173.05,
          },
          {
            date: "1912-12-13",
            height: 173.08,
          },
          {
            date: "1912-12-14",
            height: 173.11,
          },
          {
            date: "1912-12-15",
            height: 173.14,
          },
          {
            date: "1912-12-16",
            height: 173.18,
          },
          {
            date: "1912-12-17",
            height: 173.19,
          },
          {
            date: "1912-12-18",
            height: 173.21,
          },
          {
            date: "1912-12-19",
            height: 173.23,
          },
          {
            date: "1912-12-20",
            height: 173.25,
          },
          {
            date: "1912-12-21",
            height: 173.26,
          },
          {
            date: "1912-12-22",
            height: 173.28,
          },
          {
            date: "1912-12-23",
            height: 173.3,
          },
          {
            date: "1912-12-24",
            height: 173.34,
          },
          {
            date: "1912-12-25",
            height: 173.38,
          },
          {
            date: "1912-12-26",
            height: 173.41,
          },
          {
            date: "1912-12-27",
            height: 173.43,
          },
          {
            date: "1912-12-28",
            height: 173.45,
          },
          {
            date: "1912-12-29",
            height: 173.49,
          },
          {
            date: "1912-12-30",
            height: 173.51,
          },
          {
            date: "1912-12-31",
            height: 173.54,
          },
          {
            date: "1913-01-01",
            height: 173.56,
          },
          {
            date: "1913-01-02",
            height: 173.6,
          },
          {
            date: "1913-01-03",
            height: 173.61,
          },
          {
            date: "1913-01-04",
            height: 173.62,
          },
          {
            date: "1913-01-05",
            height: 173.65,
          },
          {
            date: "1913-01-06",
            height: 173.68,
          },
          {
            date: "1913-01-07",
            height: 173.7,
          },
          {
            date: "1913-01-08",
            height: 173.71,
          },
          {
            date: "1913-01-09",
            height: 173.74,
          },
          {
            date: "1913-01-10",
            height: 173.76,
          },
          {
            date: "1913-01-11",
            height: 173.77,
          },
          {
            date: "1913-01-12",
            height: 173.79,
          },
          {
            date: "1913-01-13",
            height: 173.8,
          },
          {
            date: "1913-01-14",
            height: 173.84,
          },
          {
            date: "1913-01-15",
            height: 173.85,
          },
          {
            date: "1913-01-16",
            height: 173.89,
          },
          {
            date: "1913-01-17",
            height: 173.9,
          },
          {
            date: "1913-01-18",
            height: 173.93,
          },
          {
            date: "1913-01-19",
            height: 173.96,
          },
          {
            date: "1913-01-20",
            height: 173.98,
          },
          {
            date: "1913-01-21",
            height: 174,
          },
          {
            date: "1913-01-22",
            height: 174.01,
          },
          {
            date: "1913-01-23",
            height: 174.05,
          },
          {
            date: "1913-01-24",
            height: 174.08,
          },
          {
            date: "1913-01-25",
            height: 174.1,
          },
          {
            date: "1913-01-26",
            height: 174.13,
          },
          {
            date: "1913-01-27",
            height: 174.14,
          },
          {
            date: "1913-01-28",
            height: 174.16,
          },
          {
            date: "1913-01-29",
            height: 174.19,
          },
          {
            date: "1913-01-30",
            height: 174.21,
          },
          {
            date: "1913-01-31",
            height: 174.24,
          },
          {
            date: "1913-02-01",
            height: 174.26,
          },
          {
            date: "1913-02-02",
            height: 174.28,
          },
          {
            date: "1913-02-03",
            height: 174.32,
          },
          {
            date: "1913-02-04",
            height: 174.34,
          },
          {
            date: "1913-02-05",
            height: 174.35,
          },
          {
            date: "1913-02-06",
            height: 174.39,
          },
          {
            date: "1913-02-07",
            height: 174.41,
          },
          {
            date: "1913-02-08",
            height: 174.43,
          },
          {
            date: "1913-02-09",
            height: 174.46,
          },
          {
            date: "1913-02-10",
            height: 174.49,
          },
          {
            date: "1913-02-11",
            height: 174.52,
          },
          {
            date: "1913-02-12",
            height: 174.55,
          },
          {
            date: "1913-02-13",
            height: 174.57,
          },
          {
            date: "1913-02-14",
            height: 174.59,
          },
          {
            date: "1913-02-15",
            height: 174.62,
          },
          {
            date: "1913-02-16",
            height: 174.65,
          },
          {
            date: "1913-02-17",
            height: 174.68,
          },
          {
            date: "1913-02-18",
            height: 174.71,
          },
          {
            date: "1913-02-19",
            height: 174.73,
          },
          {
            date: "1913-02-20",
            height: 174.76,
          },
          {
            date: "1913-02-21",
            height: 174.78,
          },
          {
            date: "1913-02-22",
            height: 174.8,
          },
          {
            date: "1913-02-23",
            height: 174.83,
          },
          {
            date: "1913-02-24",
            height: 174.84,
          },
          {
            date: "1913-02-25",
            height: 174.88,
          },
          {
            date: "1913-02-26",
            height: 174.89,
          },
          {
            date: "1913-02-27",
            height: 174.92,
          },
          {
            date: "1913-02-28",
            height: 174.93,
          },
          {
            date: "1913-03-01",
            height: 174.95,
          },
          {
            date: "1913-03-02",
            height: 174.98,
          },
          {
            date: "1913-03-03",
            height: 174.99,
          },
          {
            date: "1913-03-04",
            height: 175.01,
          },
          {
            date: "1913-03-05",
            height: 175.03,
          },
          {
            date: "1913-03-06",
            height: 175.04,
          },
          {
            date: "1913-03-07",
            height: 175.06,
          },
          {
            date: "1913-03-08",
            height: 175.08,
          },
          {
            date: "1913-03-09",
            height: 175.1,
          },
          {
            date: "1913-03-10",
            height: 175.13,
          },
          {
            date: "1913-03-11",
            height: 175.15,
          },
          {
            date: "1913-03-12",
            height: 175.19,
          },
          {
            date: "1913-03-13",
            height: 175.21,
          },
          {
            date: "1913-03-14",
            height: 175.22,
          },
          {
            date: "1913-03-15",
            height: 175.25,
          },
          {
            date: "1913-03-16",
            height: 175.27,
          },
          {
            date: "1913-03-17",
            height: 175.29,
          },
          {
            date: "1913-03-18",
            height: 175.3,
          },
          {
            date: "1913-03-19",
            height: 175.34,
          },
          {
            date: "1913-03-20",
            height: 175.37,
          },
          {
            date: "1913-03-21",
            height: 175.39,
          },
          {
            date: "1913-03-22",
            height: 175.41,
          },
          {
            date: "1913-03-23",
            height: 175.43,
          },
          {
            date: "1913-03-24",
            height: 175.44,
          },
          {
            date: "1913-03-25",
            height: 175.46,
          },
          {
            date: "1913-03-26",
            height: 175.48,
          },
          {
            date: "1913-03-27",
            height: 175.5,
          },
          {
            date: "1913-03-28",
            height: 175.53,
          },
          {
            date: "1913-03-29",
            height: 175.54,
          },
          {
            date: "1913-03-30",
            height: 175.56,
          },
          {
            date: "1913-03-31",
            height: 175.58,
          },
          {
            date: "1913-04-01",
            height: 175.59,
          },
          {
            date: "1913-04-02",
            height: 175.6,
          },
          {
            date: "1913-04-03",
            height: 175.63,
          },
          {
            date: "1913-04-04",
            height: 175.67,
          },
          {
            date: "1913-04-05",
            height: 175.69,
          },
          {
            date: "1913-04-06",
            height: 175.73,
          },
          {
            date: "1913-04-07",
            height: 175.76,
          },
          {
            date: "1913-04-08",
            height: 175.8,
          },
          {
            date: "1913-04-09",
            height: 175.83,
          },
          {
            date: "1913-04-10",
            height: 175.86,
          },
          {
            date: "1913-04-11",
            height: 175.9,
          },
          {
            date: "1913-04-12",
            height: 175.92,
          },
          {
            date: "1913-04-13",
            height: 175.94,
          },
          {
            date: "1913-04-14",
            height: 175.97,
          },
          {
            date: "1913-04-15",
            height: 175.99,
          },
          {
            date: "1913-04-16",
            height: 176.02,
          },
          {
            date: "1913-04-17",
            height: 176.03,
          },
          {
            date: "1913-04-18",
            height: 176.05,
          },
          {
            date: "1913-04-19",
            height: 176.07,
          },
          {
            date: "1913-04-20",
            height: 176.09,
          },
          {
            date: "1913-04-21",
            height: 176.13,
          },
          {
            date: "1913-04-22",
            height: 176.16,
          },
          {
            date: "1913-04-23",
            height: 176.17,
          },
          {
            date: "1913-04-24",
            height: 176.19,
          },
          {
            date: "1913-04-25",
            height: 176.2,
          },
          {
            date: "1913-04-26",
            height: 176.22,
          },
          {
            date: "1913-04-27",
            height: 176.25,
          },
          {
            date: "1913-04-28",
            height: 176.28,
          },
          {
            date: "1913-04-29",
            height: 176.32,
          },
          {
            date: "1913-04-30",
            height: 176.35,
          },
          {
            date: "1913-05-01",
            height: 176.38,
          },
          {
            date: "1913-05-02",
            height: 176.4,
          },
          {
            date: "1913-05-03",
            height: 176.42,
          },
          {
            date: "1913-05-04",
            height: 176.46,
          },
          {
            date: "1913-05-05",
            height: 176.5,
          },
          {
            date: "1913-05-06",
            height: 176.51,
          },
          {
            date: "1913-05-07",
            height: 176.54,
          },
          {
            date: "1913-05-08",
            height: 176.56,
          },
          {
            date: "1913-05-09",
            height: 176.58,
          },
          {
            date: "1913-05-10",
            height: 176.6,
          },
          {
            date: "1913-05-11",
            height: 176.63,
          },
          {
            date: "1913-05-12",
            height: 176.66,
          },
          {
            date: "1913-05-13",
            height: 176.69,
          },
          {
            date: "1913-05-14",
            height: 176.7,
          },
          {
            date: "1913-05-15",
            height: 176.74,
          },
          {
            date: "1913-05-16",
            height: 176.75,
          },
          {
            date: "1913-05-17",
            height: 176.79,
          },
          {
            date: "1913-05-18",
            height: 176.81,
          },
          {
            date: "1913-05-19",
            height: 176.85,
          },
          {
            date: "1913-05-20",
            height: 176.88,
          },
          {
            date: "1913-05-21",
            height: 176.9,
          },
          {
            date: "1913-05-22",
            height: 176.94,
          },
          {
            date: "1913-05-23",
            height: 176.96,
          },
          {
            date: "1913-05-24",
            height: 177,
          },
          {
            date: "1913-05-25",
            height: 177.04,
          },
          {
            date: "1913-05-26",
            height: 177.06,
          },
          {
            date: "1913-05-27",
            height: 177.1,
          },
          {
            date: "1913-05-28",
            height: 177.13,
          },
          {
            date: "1913-05-29",
            height: 177.17,
          },
          {
            date: "1913-05-30",
            height: 177.2,
          },
          {
            date: "1913-05-31",
            height: 177.24,
          },
          {
            date: "1913-06-01",
            height: 177.26,
          },
          {
            date: "1913-06-02",
            height: 177.29,
          },
          {
            date: "1913-06-03",
            height: 177.31,
          },
          {
            date: "1913-06-04",
            height: 177.33,
          },
          {
            date: "1913-06-05",
            height: 177.37,
          },
          {
            date: "1913-06-06",
            height: 177.39,
          },
          {
            date: "1913-06-07",
            height: 177.42,
          },
          {
            date: "1913-06-08",
            height: 177.45,
          },
          {
            date: "1913-06-09",
            height: 177.49,
          },
          {
            date: "1913-06-10",
            height: 177.52,
          },
          {
            date: "1913-06-11",
            height: 177.54,
          },
          {
            date: "1913-06-12",
            height: 177.57,
          },
          {
            date: "1913-06-13",
            height: 177.6,
          },
          {
            date: "1913-06-14",
            height: 177.63,
          },
          {
            date: "1913-06-15",
            height: 177.64,
          },
          {
            date: "1913-06-16",
            height: 177.67,
          },
          {
            date: "1913-06-17",
            height: 177.7,
          },
          {
            date: "1913-06-18",
            height: 177.73,
          },
          {
            date: "1913-06-19",
            height: 177.75,
          },
          {
            date: "1913-06-20",
            height: 177.77,
          },
          {
            date: "1913-06-21",
            height: 177.79,
          },
          {
            date: "1913-06-22",
            height: 177.8,
          },
          {
            date: "1913-06-23",
            height: 177.82,
          },
          {
            date: "1913-06-24",
            height: 177.85,
          },
          {
            date: "1913-06-25",
            height: 177.88,
          },
          {
            date: "1913-06-26",
            height: 177.89,
          },
          {
            date: "1913-06-27",
            height: 177.92,
          },
          {
            date: "1913-06-28",
            height: 177.96,
          },
          {
            date: "1913-06-29",
            height: 177.99,
          },
          {
            date: "1913-06-30",
            height: 178,
          },
          {
            date: "1913-07-01",
            height: 178.04,
          },
          {
            date: "1913-07-02",
            height: 178.08,
          },
          {
            date: "1913-07-03",
            height: 178.11,
          },
          {
            date: "1913-07-04",
            height: 178.14,
          },
          {
            date: "1913-07-05",
            height: 178.18,
          },
          {
            date: "1913-07-06",
            height: 178.19,
          },
          {
            date: "1913-07-07",
            height: 178.21,
          },
          {
            date: "1913-07-08",
            height: 178.25,
          },
          {
            date: "1913-07-09",
            height: 178.28,
          },
          {
            date: "1913-07-10",
            height: 178.31,
          },
          {
            date: "1913-07-11",
            height: 178.33,
          },
          {
            date: "1913-07-12",
            height: 178.35,
          },
          {
            date: "1913-07-13",
            height: 178.39,
          },
          {
            date: "1913-07-14",
            height: 178.4,
          },
          {
            date: "1913-07-15",
            height: 178.42,
          },
          {
            date: "1913-07-16",
            height: 178.43,
          },
          {
            date: "1913-07-17",
            height: 178.46,
          },
          {
            date: "1913-07-18",
            height: 178.47,
          },
          {
            date: "1913-07-19",
            height: 178.5,
          },
          {
            date: "1913-07-20",
            height: 178.54,
          },
          {
            date: "1913-07-21",
            height: 178.57,
          },
          {
            date: "1913-07-22",
            height: 178.59,
          },
          {
            date: "1913-07-23",
            height: 178.63,
          },
          {
            date: "1913-07-24",
            height: 178.66,
          },
          {
            date: "1913-07-25",
            height: 178.69,
          },
          {
            date: "1913-07-26",
            height: 178.7,
          },
          {
            date: "1913-07-27",
            height: 178.72,
          },
          {
            date: "1913-07-28",
            height: 178.76,
          },
          {
            date: "1913-07-29",
            height: 178.79,
          },
          {
            date: "1913-07-30",
            height: 178.8,
          },
          {
            date: "1913-07-31",
            height: 178.84,
          },
          {
            date: "1913-08-01",
            height: 178.86,
          },
          {
            date: "1913-08-02",
            height: 178.87,
          },
          {
            date: "1913-08-03",
            height: 178.9,
          },
          {
            date: "1913-08-04",
            height: 178.92,
          },
          {
            date: "1913-08-05",
            height: 178.95,
          },
          {
            date: "1913-08-06",
            height: 178.99,
          },
          {
            date: "1913-08-07",
            height: 179.01,
          },
          {
            date: "1913-08-08",
            height: 179.02,
          },
          {
            date: "1913-08-09",
            height: 179.04,
          },
          {
            date: "1913-08-10",
            height: 179.06,
          },
          {
            date: "1913-08-11",
            height: 179.08,
          },
          {
            date: "1913-08-12",
            height: 179.1,
          },
          {
            date: "1913-08-13",
            height: 179.13,
          },
          {
            date: "1913-08-14",
            height: 179.15,
          },
          {
            date: "1913-08-15",
            height: 179.18,
          },
          {
            date: "1913-08-16",
            height: 179.19,
          },
          {
            date: "1913-08-17",
            height: 179.21,
          },
          {
            date: "1913-08-18",
            height: 179.25,
          },
          {
            date: "1913-08-19",
            height: 179.26,
          },
          {
            date: "1913-08-20",
            height: 179.29,
          },
          {
            date: "1913-08-21",
            height: 179.31,
          },
          {
            date: "1913-08-22",
            height: 179.34,
          },
          {
            date: "1913-08-23",
            height: 179.37,
          },
          {
            date: "1913-08-24",
            height: 179.39,
          },
          {
            date: "1913-08-25",
            height: 179.42,
          },
          {
            date: "1913-08-26",
            height: 179.43,
          },
          {
            date: "1913-08-27",
            height: 179.46,
          },
          {
            date: "1913-08-28",
            height: 179.48,
          },
          {
            date: "1913-08-29",
            height: 179.51,
          },
          {
            date: "1913-08-30",
            height: 179.54,
          },
          {
            date: "1913-08-31",
            height: 179.58,
          },
          {
            date: "1913-09-01",
            height: 179.6,
          },
          {
            date: "1913-09-02",
            height: 179.62,
          },
          {
            date: "1913-09-03",
            height: 179.66,
          },
          {
            date: "1913-09-04",
            height: 179.69,
          },
          {
            date: "1913-09-05",
            height: 179.73,
          },
          {
            date: "1913-09-06",
            height: 179.76,
          },
          {
            date: "1913-09-07",
            height: 179.78,
          },
          {
            date: "1913-09-08",
            height: 179.81,
          },
          {
            date: "1913-09-09",
            height: 179.84,
          },
          {
            date: "1913-09-10",
            height: 179.86,
          },
          {
            date: "1913-09-11",
            height: 179.89,
          },
          {
            date: "1913-09-12",
            height: 179.9,
          },
          {
            date: "1913-09-13",
            height: 179.94,
          },
          {
            date: "1913-09-14",
            height: 179.97,
          },
          {
            date: "1913-09-15",
            height: 180.01,
          },
          {
            date: "1913-09-16",
            height: 180.04,
          },
          {
            date: "1913-09-17",
            height: 180.08,
          },
          {
            date: "1913-09-18",
            height: 180.1,
          },
          {
            date: "1913-09-19",
            height: 180.13,
          },
          {
            date: "1913-09-20",
            height: 180.16,
          },
          {
            date: "1913-09-21",
            height: 180.18,
          },
          {
            date: "1913-09-22",
            height: 180.21,
          },
          {
            date: "1913-09-23",
            height: 180.25,
          },
          {
            date: "1913-09-24",
            height: 180.27,
          },
          {
            date: "1913-09-25",
            height: 180.31,
          },
          {
            date: "1913-09-26",
            height: 180.32,
          },
          {
            date: "1913-09-27",
            height: 180.35,
          },
          {
            date: "1913-09-28",
            height: 180.37,
          },
          {
            date: "1913-09-29",
            height: 180.38,
          },
          {
            date: "1913-09-30",
            height: 180.42,
          },
          {
            date: "1913-10-01",
            height: 180.45,
          },
          {
            date: "1913-10-02",
            height: 180.49,
          },
          {
            date: "1913-10-03",
            height: 180.52,
          },
          {
            date: "1913-10-04",
            height: 180.53,
          },
          {
            date: "1913-10-05",
            height: 180.56,
          },
          {
            date: "1913-10-06",
            height: 180.59,
          },
          {
            date: "1913-10-07",
            height: 180.63,
          },
          {
            date: "1913-10-08",
            height: 180.66,
          },
          {
            date: "1913-10-09",
            height: 180.69,
          },
          {
            date: "1913-10-10",
            height: 180.72,
          },
          {
            date: "1913-10-11",
            height: 180.73,
          },
          {
            date: "1913-10-12",
            height: 180.75,
          },
          {
            date: "1913-10-13",
            height: 180.76,
          },
          {
            date: "1913-10-14",
            height: 180.77,
          },
          {
            date: "1913-10-15",
            height: 180.79,
          },
          {
            date: "1913-10-16",
            height: 180.83,
          },
          {
            date: "1913-10-17",
            height: 180.86,
          },
          {
            date: "1913-10-18",
            height: 180.89,
          },
          {
            date: "1913-10-19",
            height: 180.92,
          },
          {
            date: "1913-10-20",
            height: 180.95,
          },
          {
            date: "1913-10-21",
            height: 180.97,
          },
          {
            date: "1913-10-22",
            height: 181,
          },
          {
            date: "1913-10-23",
            height: 181.03,
          },
          {
            date: "1913-10-24",
            height: 181.06,
          },
          {
            date: "1913-10-25",
            height: 181.09,
          },
          {
            date: "1913-10-26",
            height: 181.1,
          },
          {
            date: "1913-10-27",
            height: 181.13,
          },
          {
            date: "1913-10-28",
            height: 181.15,
          },
          {
            date: "1913-10-29",
            height: 181.18,
          },
          {
            date: "1913-10-30",
            height: 181.19,
          },
          {
            date: "1913-10-31",
            height: 181.21,
          },
          {
            date: "1913-11-01",
            height: 181.24,
          },
          {
            date: "1913-11-02",
            height: 181.26,
          },
          {
            date: "1913-11-03",
            height: 181.28,
          },
          {
            date: "1913-11-04",
            height: 181.29,
          },
          {
            date: "1913-11-05",
            height: 181.32,
          },
          {
            date: "1913-11-06",
            height: 181.34,
          },
          {
            date: "1913-11-07",
            height: 181.37,
          },
          {
            date: "1913-11-08",
            height: 181.39,
          },
          {
            date: "1913-11-09",
            height: 181.43,
          },
          {
            date: "1913-11-10",
            height: 181.44,
          },
          {
            date: "1913-11-11",
            height: 181.46,
          },
          {
            date: "1913-11-12",
            height: 181.48,
          },
          {
            date: "1913-11-13",
            height: 181.52,
          },
          {
            date: "1913-11-14",
            height: 181.53,
          },
          {
            date: "1913-11-15",
            height: 181.57,
          },
          {
            date: "1913-11-16",
            height: 181.59,
          },
          {
            date: "1913-11-17",
            height: 181.6,
          },
          {
            date: "1913-11-18",
            height: 181.62,
          },
          {
            date: "1913-11-19",
            height: 181.63,
          },
          {
            date: "1913-11-20",
            height: 181.67,
          },
          {
            date: "1913-11-21",
            height: 181.7,
          },
          {
            date: "1913-11-22",
            height: 181.71,
          },
          {
            date: "1913-11-23",
            height: 181.75,
          },
          {
            date: "1913-11-24",
            height: 181.78,
          },
          {
            date: "1913-11-25",
            height: 181.8,
          },
          {
            date: "1913-11-26",
            height: 181.82,
          },
          {
            date: "1913-11-27",
            height: 181.86,
          },
          {
            date: "1913-11-28",
            height: 181.89,
          },
          {
            date: "1913-11-29",
            height: 181.92,
          },
          {
            date: "1913-11-30",
            height: 181.96,
          },
          {
            date: "1913-12-01",
            height: 181.98,
          },
          {
            date: "1913-12-02",
            height: 181.99,
          },
          {
            date: "1913-12-03",
            height: 182.01,
          },
          {
            date: "1913-12-04",
            height: 182.05,
          },
          {
            date: "1913-12-05",
            height: 182.08,
          },
          {
            date: "1913-12-06",
            height: 182.11,
          },
          {
            date: "1913-12-07",
            height: 182.14,
          },
          {
            date: "1913-12-08",
            height: 182.16,
          },
          {
            date: "1913-12-09",
            height: 182.19,
          },
          {
            date: "1913-12-10",
            height: 182.2,
          },
          {
            date: "1913-12-11",
            height: 182.22,
          },
          {
            date: "1913-12-12",
            height: 182.24,
          },
          {
            date: "1913-12-13",
            height: 182.27,
          },
          {
            date: "1913-12-14",
            height: 182.28,
          },
          {
            date: "1913-12-15",
            height: 182.32,
          },
          {
            date: "1913-12-16",
            height: 182.35,
          },
          {
            date: "1913-12-17",
            height: 182.39,
          },
          {
            date: "1913-12-18",
            height: 182.41,
          },
          {
            date: "1913-12-19",
            height: 182.44,
          },
          {
            date: "1913-12-20",
            height: 182.48,
          },
          {
            date: "1913-12-21",
            height: 182.49,
          },
          {
            date: "1913-12-22",
            height: 182.5,
          },
          {
            date: "1913-12-23",
            height: 182.51,
          },
          {
            date: "1913-12-24",
            height: 182.53,
          },
          {
            date: "1913-12-25",
            height: 182.55,
          },
          {
            date: "1913-12-26",
            height: 182.59,
          },
          {
            date: "1913-12-27",
            height: 182.61,
          },
          {
            date: "1913-12-28",
            height: 182.62,
          },
          {
            date: "1913-12-29",
            height: 182.63,
          },
          {
            date: "1913-12-30",
            height: 182.67,
          },
          {
            date: "1913-12-31",
            height: 182.69,
          },
          {
            date: "1914-01-01",
            height: 182.72,
          },
          {
            date: "1914-01-02",
            height: 182.73,
          },
          {
            date: "1914-01-03",
            height: 182.77,
          },
          {
            date: "1914-01-04",
            height: 182.8,
          },
          {
            date: "1914-01-05",
            height: 182.82,
          },
          {
            date: "1914-01-06",
            height: 182.85,
          },
          {
            date: "1914-01-07",
            height: 182.87,
          },
          {
            date: "1914-01-08",
            height: 182.89,
          },
          {
            date: "1914-01-09",
            height: 182.9,
          },
          {
            date: "1914-01-10",
            height: 182.93,
          },
          {
            date: "1914-01-11",
            height: 182.96,
          },
          {
            date: "1914-01-12",
            height: 182.99,
          },
          {
            date: "1914-01-13",
            height: 183.02,
          },
          {
            date: "1914-01-14",
            height: 183.04,
          },
          {
            date: "1914-01-15",
            height: 183.05,
          },
          {
            date: "1914-01-16",
            height: 183.08,
          },
          {
            date: "1914-01-17",
            height: 183.11,
          },
          {
            date: "1914-01-18",
            height: 183.13,
          },
          {
            date: "1914-01-19",
            height: 183.15,
          },
          {
            date: "1914-01-20",
            height: 183.17,
          },
          {
            date: "1914-01-21",
            height: 183.19,
          },
          {
            date: "1914-01-22",
            height: 183.2,
          },
          {
            date: "1914-01-23",
            height: 183.21,
          },
          {
            date: "1914-01-24",
            height: 183.24,
          },
          {
            date: "1914-01-25",
            height: 183.26,
          },
          {
            date: "1914-01-26",
            height: 183.29,
          },
          {
            date: "1914-01-27",
            height: 183.33,
          },
          {
            date: "1914-01-28",
            height: 183.34,
          },
          {
            date: "1914-01-29",
            height: 183.36,
          },
          {
            date: "1914-01-30",
            height: 183.4,
          },
          {
            date: "1914-01-31",
            height: 183.44,
          },
          {
            date: "1914-02-01",
            height: 183.45,
          },
          {
            date: "1914-02-02",
            height: 183.48,
          },
          {
            date: "1914-02-03",
            height: 183.52,
          },
          {
            date: "1914-02-04",
            height: 183.54,
          },
          {
            date: "1914-02-05",
            height: 183.56,
          },
          {
            date: "1914-02-06",
            height: 183.58,
          },
          {
            date: "1914-02-07",
            height: 183.6,
          },
          {
            date: "1914-02-08",
            height: 183.62,
          },
          {
            date: "1914-02-09",
            height: 183.65,
          },
          {
            date: "1914-02-10",
            height: 183.68,
          },
          {
            date: "1914-02-11",
            height: 183.7,
          },
          {
            date: "1914-02-12",
            height: 183.72,
          },
          {
            date: "1914-02-13",
            height: 183.75,
          },
          {
            date: "1914-02-14",
            height: 183.78,
          },
          {
            date: "1914-02-15",
            height: 183.79,
          },
          {
            date: "1914-02-16",
            height: 183.83,
          },
          {
            date: "1914-02-17",
            height: 183.85,
          },
          {
            date: "1914-02-18",
            height: 183.87,
          },
          {
            date: "1914-02-19",
            height: 183.89,
          },
          {
            date: "1914-02-20",
            height: 183.92,
          },
          {
            date: "1914-02-21",
            height: 183.95,
          },
          {
            date: "1914-02-22",
            height: 183.98,
          },
          {
            date: "1914-02-23",
            height: 183.99,
          },
          {
            date: "1914-02-24",
            height: 184.01,
          },
          {
            date: "1914-02-25",
            height: 184.05,
          },
          {
            date: "1914-02-26",
            height: 184.07,
          },
          {
            date: "1914-02-27",
            height: 184.09,
          },
          {
            date: "1914-02-28",
            height: 184.13,
          },
          {
            date: "1914-03-01",
            height: 184.14,
          },
          {
            date: "1914-03-02",
            height: 184.17,
          },
          {
            date: "1914-03-03",
            height: 184.19,
          },
          {
            date: "1914-03-04",
            height: 184.21,
          },
          {
            date: "1914-03-05",
            height: 184.25,
          },
          {
            date: "1914-03-06",
            height: 184.26,
          },
          {
            date: "1914-03-07",
            height: 184.28,
          },
          {
            date: "1914-03-08",
            height: 184.3,
          },
          {
            date: "1914-03-09",
            height: 184.34,
          },
          {
            date: "1914-03-10",
            height: 184.36,
          },
          {
            date: "1914-03-11",
            height: 184.4,
          },
          {
            date: "1914-03-12",
            height: 184.43,
          },
          {
            date: "1914-03-13",
            height: 184.45,
          },
          {
            date: "1914-03-14",
            height: 184.47,
          },
          {
            date: "1914-03-15",
            height: 184.5,
          },
          {
            date: "1914-03-16",
            height: 184.53,
          },
          {
            date: "1914-03-17",
            height: 184.56,
          },
          {
            date: "1914-03-18",
            height: 184.6,
          },
          {
            date: "1914-03-19",
            height: 184.63,
          },
          {
            date: "1914-03-20",
            height: 184.66,
          },
          {
            date: "1914-03-21",
            height: 184.69,
          },
          {
            date: "1914-03-22",
            height: 184.71,
          },
          {
            date: "1914-03-23",
            height: 184.73,
          },
          {
            date: "1914-03-24",
            height: 184.77,
          },
          {
            date: "1914-03-25",
            height: 184.8,
          },
          {
            date: "1914-03-26",
            height: 184.82,
          },
          {
            date: "1914-03-27",
            height: 184.84,
          },
          {
            date: "1914-03-28",
            height: 184.86,
          },
          {
            date: "1914-03-29",
            height: 184.88,
          },
          {
            date: "1914-03-30",
            height: 184.91,
          },
          {
            date: "1914-03-31",
            height: 184.93,
          },
          {
            date: "1914-04-01",
            height: 184.96,
          },
          {
            date: "1914-04-02",
            height: 185,
          },
          {
            date: "1914-04-03",
            height: 185.03,
          },
          {
            date: "1914-04-04",
            height: 185.07,
          },
          {
            date: "1914-04-05",
            height: 185.09,
          },
          {
            date: "1914-04-06",
            height: 185.11,
          },
          {
            date: "1914-04-07",
            height: 185.13,
          },
          {
            date: "1914-04-08",
            height: 185.15,
          },
          {
            date: "1914-04-09",
            height: 185.18,
          },
          {
            date: "1914-04-10",
            height: 185.21,
          },
          {
            date: "1914-04-11",
            height: 185.23,
          },
          {
            date: "1914-04-12",
            height: 185.25,
          },
          {
            date: "1914-04-13",
            height: 185.29,
          },
          {
            date: "1914-04-14",
            height: 185.31,
          },
          {
            date: "1914-04-15",
            height: 185.34,
          },
          {
            date: "1914-04-16",
            height: 185.37,
          },
          {
            date: "1914-04-17",
            height: 185.4,
          },
          {
            date: "1914-04-18",
            height: 185.43,
          },
          {
            date: "1914-04-19",
            height: 185.46,
          },
          {
            date: "1914-04-20",
            height: 185.48,
          },
          {
            date: "1914-04-21",
            height: 185.52,
          },
          {
            date: "1914-04-22",
            height: 185.55,
          },
          {
            date: "1914-04-23",
            height: 185.57,
          },
          {
            date: "1914-04-24",
            height: 185.6,
          },
          {
            date: "1914-04-25",
            height: 185.63,
          },
          {
            date: "1914-04-26",
            height: 185.65,
          },
          {
            date: "1914-04-27",
            height: 185.69,
          },
          {
            date: "1914-04-28",
            height: 185.71,
          },
          {
            date: "1914-04-29",
            height: 185.73,
          },
          {
            date: "1914-04-30",
            height: 185.77,
          },
          {
            date: "1914-05-01",
            height: 185.79,
          },
          {
            date: "1914-05-02",
            height: 185.8,
          },
          {
            date: "1914-05-03",
            height: 185.83,
          },
          {
            date: "1914-05-04",
            height: 185.86,
          },
          {
            date: "1914-05-05",
            height: 185.9,
          },
          {
            date: "1914-05-06",
            height: 185.92,
          },
          {
            date: "1914-05-07",
            height: 185.94,
          },
          {
            date: "1914-05-08",
            height: 185.95,
          },
          {
            date: "1914-05-09",
            height: 185.98,
          },
          {
            date: "1914-05-10",
            height: 186.01,
          },
          {
            date: "1914-05-11",
            height: 186.04,
          },
          {
            date: "1914-05-12",
            height: 186.07,
          },
          {
            date: "1914-05-13",
            height: 186.08,
          },
          {
            date: "1914-05-14",
            height: 186.1,
          },
          {
            date: "1914-05-15",
            height: 186.13,
          },
          {
            date: "1914-05-16",
            height: 186.16,
          },
          {
            date: "1914-05-17",
            height: 186.18,
          },
          {
            date: "1914-05-18",
            height: 186.21,
          },
          {
            date: "1914-05-19",
            height: 186.23,
          },
          {
            date: "1914-05-20",
            height: 186.25,
          },
          {
            date: "1914-05-21",
            height: 186.27,
          },
          {
            date: "1914-05-22",
            height: 186.28,
          },
          {
            date: "1914-05-23",
            height: 186.31,
          },
          {
            date: "1914-05-24",
            height: 186.34,
          },
          {
            date: "1914-05-25",
            height: 186.38,
          },
          {
            date: "1914-05-26",
            height: 186.41,
          },
          {
            date: "1914-05-27",
            height: 186.42,
          },
          {
            date: "1914-05-28",
            height: 186.44,
          },
          {
            date: "1914-05-29",
            height: 186.47,
          },
          {
            date: "1914-05-30",
            height: 186.51,
          },
          {
            date: "1914-05-31",
            height: 186.53,
          },
          {
            date: "1914-06-01",
            height: 186.56,
          },
          {
            date: "1914-06-02",
            height: 186.57,
          },
          {
            date: "1914-06-03",
            height: 186.6,
          },
          {
            date: "1914-06-04",
            height: 186.61,
          },
          {
            date: "1914-06-05",
            height: 186.64,
          },
          {
            date: "1914-06-06",
            height: 186.67,
          },
          {
            date: "1914-06-07",
            height: 186.69,
          },
          {
            date: "1914-06-08",
            height: 186.7,
          },
          {
            date: "1914-06-09",
            height: 186.73,
          },
          {
            date: "1914-06-10",
            height: 186.77,
          },
          {
            date: "1914-06-11",
            height: 186.8,
          },
          {
            date: "1914-06-12",
            height: 186.82,
          },
          {
            date: "1914-06-13",
            height: 186.85,
          },
          {
            date: "1914-06-14",
            height: 186.89,
          },
          {
            date: "1914-06-15",
            height: 186.91,
          },
          {
            date: "1914-06-16",
            height: 186.94,
          },
          {
            date: "1914-06-17",
            height: 186.96,
          },
          {
            date: "1914-06-18",
            height: 186.98,
          },
          {
            date: "1914-06-19",
            height: 187,
          },
          {
            date: "1914-06-20",
            height: 187.03,
          },
          {
            date: "1914-06-21",
            height: 187.06,
          },
          {
            date: "1914-06-22",
            height: 187.07,
          },
          {
            date: "1914-06-23",
            height: 187.09,
          },
          {
            date: "1914-06-24",
            height: 187.12,
          },
          {
            date: "1914-06-25",
            height: 187.14,
          },
          {
            date: "1914-06-26",
            height: 187.16,
          },
          {
            date: "1914-06-27",
            height: 187.18,
          },
          {
            date: "1914-06-28",
            height: 187.21,
          },
          {
            date: "1914-06-29",
            height: 187.23,
          },
          {
            date: "1914-06-30",
            height: 187.24,
          },
          {
            date: "1914-07-01",
            height: 187.27,
          },
          {
            date: "1914-07-02",
            height: 187.29,
          },
          {
            date: "1914-07-03",
            height: 187.32,
          },
          {
            date: "1914-07-04",
            height: 187.33,
          },
          {
            date: "1914-07-05",
            height: 187.36,
          },
          {
            date: "1914-07-06",
            height: 187.38,
          },
          {
            date: "1914-07-07",
            height: 187.41,
          },
          {
            date: "1914-07-08",
            height: 187.44,
          },
          {
            date: "1914-07-09",
            height: 187.46,
          },
          {
            date: "1914-07-10",
            height: 187.47,
          },
          {
            date: "1914-07-11",
            height: 187.49,
          },
          {
            date: "1914-07-12",
            height: 187.53,
          },
          {
            date: "1914-07-13",
            height: 187.54,
          },
          {
            date: "1914-07-14",
            height: 187.57,
          },
          {
            date: "1914-07-15",
            height: 187.61,
          },
          {
            date: "1914-07-16",
            height: 187.64,
          },
          {
            date: "1914-07-17",
            height: 187.66,
          },
          {
            date: "1914-07-18",
            height: 187.67,
          },
          {
            date: "1914-07-19",
            height: 187.7,
          },
          {
            date: "1914-07-20",
            height: 187.74,
          },
          {
            date: "1914-07-21",
            height: 187.77,
          },
          {
            date: "1914-07-22",
            height: 187.81,
          },
          {
            date: "1914-07-23",
            height: 187.84,
          },
          {
            date: "1914-07-24",
            height: 187.86,
          },
          {
            date: "1914-07-25",
            height: 187.88,
          },
          {
            date: "1914-07-26",
            height: 187.9,
          },
          {
            date: "1914-07-27",
            height: 187.92,
          },
          {
            date: "1914-07-28",
            height: 187.95,
          },
          {
            date: "1914-07-29",
            height: 187.99,
          },
          {
            date: "1914-07-30",
            height: 188.01,
          },
          {
            date: "1914-07-31",
            height: 188.03,
          },
          {
            date: "1914-08-01",
            height: 188.06,
          },
          {
            date: "1914-08-02",
            height: 188.09,
          },
          {
            date: "1914-08-03",
            height: 188.11,
          },
          {
            date: "1914-08-04",
            height: 188.13,
          },
          {
            date: "1914-08-05",
            height: 188.16,
          },
          {
            date: "1914-08-06",
            height: 188.17,
          },
          {
            date: "1914-08-07",
            height: 188.18,
          },
          {
            date: "1914-08-08",
            height: 188.2,
          },
          {
            date: "1914-08-09",
            height: 188.23,
          },
          {
            date: "1914-08-10",
            height: 188.25,
          },
          {
            date: "1914-08-11",
            height: 188.28,
          },
          {
            date: "1914-08-12",
            height: 188.31,
          },
          {
            date: "1914-08-13",
            height: 188.35,
          },
          {
            date: "1914-08-14",
            height: 188.37,
          },
          {
            date: "1914-08-15",
            height: 188.4,
          },
          {
            date: "1914-08-16",
            height: 188.41,
          },
          {
            date: "1914-08-17",
            height: 188.44,
          },
          {
            date: "1914-08-18",
            height: 188.46,
          },
          {
            date: "1914-08-19",
            height: 188.48,
          },
          {
            date: "1914-08-20",
            height: 188.5,
          },
          {
            date: "1914-08-21",
            height: 188.53,
          },
          {
            date: "1914-08-22",
            height: 188.55,
          },
          {
            date: "1914-08-23",
            height: 188.59,
          },
          {
            date: "1914-08-24",
            height: 188.62,
          },
          {
            date: "1914-08-25",
            height: 188.66,
          },
          {
            date: "1914-08-26",
            height: 188.7,
          },
          {
            date: "1914-08-27",
            height: 188.72,
          },
          {
            date: "1914-08-28",
            height: 188.73,
          },
          {
            date: "1914-08-29",
            height: 188.75,
          },
          {
            date: "1914-08-30",
            height: 188.79,
          },
          {
            date: "1914-08-31",
            height: 188.81,
          },
          {
            date: "1914-09-01",
            height: 188.84,
          },
          {
            date: "1914-09-02",
            height: 188.86,
          },
          {
            date: "1914-09-03",
            height: 188.88,
          },
          {
            date: "1914-09-04",
            height: 188.91,
          },
          {
            date: "1914-09-05",
            height: 188.93,
          },
          {
            date: "1914-09-06",
            height: 188.95,
          },
          {
            date: "1914-09-07",
            height: 188.97,
          },
          {
            date: "1914-09-08",
            height: 189,
          },
          {
            date: "1914-09-09",
            height: 189.01,
          },
          {
            date: "1914-09-10",
            height: 189.04,
          },
          {
            date: "1914-09-11",
            height: 189.07,
          },
          {
            date: "1914-09-12",
            height: 189.1,
          },
          {
            date: "1914-09-13",
            height: 189.14,
          },
          {
            date: "1914-09-14",
            height: 189.17,
          },
          {
            date: "1914-09-15",
            height: 189.2,
          },
          {
            date: "1914-09-16",
            height: 189.21,
          },
          {
            date: "1914-09-17",
            height: 189.22,
          },
          {
            date: "1914-09-18",
            height: 189.26,
          },
          {
            date: "1914-09-19",
            height: 189.29,
          },
          {
            date: "1914-09-20",
            height: 189.32,
          },
          {
            date: "1914-09-21",
            height: 189.36,
          },
          {
            date: "1914-09-22",
            height: 189.39,
          },
          {
            date: "1914-09-23",
            height: 189.4,
          },
          {
            date: "1914-09-24",
            height: 189.43,
          },
          {
            date: "1914-09-25",
            height: 189.46,
          },
          {
            date: "1914-09-26",
            height: 189.49,
          },
          {
            date: "1914-09-27",
            height: 189.5,
          },
          {
            date: "1914-09-28",
            height: 189.53,
          },
          {
            date: "1914-09-29",
            height: 189.56,
          },
          {
            date: "1914-09-30",
            height: 189.6,
          },
          {
            date: "1914-10-01",
            height: 189.62,
          },
          {
            date: "1914-10-02",
            height: 189.64,
          },
          {
            date: "1914-10-03",
            height: 189.66,
          },
          {
            date: "1914-10-04",
            height: 189.69,
          },
          {
            date: "1914-10-05",
            height: 189.73,
          },
          {
            date: "1914-10-06",
            height: 189.74,
          },
          {
            date: "1914-10-07",
            height: 189.78,
          },
          {
            date: "1914-10-08",
            height: 189.8,
          },
          {
            date: "1914-10-09",
            height: 189.82,
          },
          {
            date: "1914-10-10",
            height: 189.85,
          },
          {
            date: "1914-10-11",
            height: 189.87,
          },
          {
            date: "1914-10-12",
            height: 189.9,
          },
          {
            date: "1914-10-13",
            height: 189.92,
          },
          {
            date: "1914-10-14",
            height: 189.94,
          },
          {
            date: "1914-10-15",
            height: 189.95,
          },
          {
            date: "1914-10-16",
            height: 189.99,
          },
          {
            date: "1914-10-17",
            height: 190.01,
          },
          {
            date: "1914-10-18",
            height: 190.02,
          },
          {
            date: "1914-10-19",
            height: 190.06,
          },
          {
            date: "1914-10-20",
            height: 190.09,
          },
          {
            date: "1914-10-21",
            height: 190.11,
          },
          {
            date: "1914-10-22",
            height: 190.14,
          },
          {
            date: "1914-10-23",
            height: 190.17,
          },
          {
            date: "1914-10-24",
            height: 190.2,
          },
          {
            date: "1914-10-25",
            height: 190.24,
          },
          {
            date: "1914-10-26",
            height: 190.26,
          },
          {
            date: "1914-10-27",
            height: 190.29,
          },
          {
            date: "1914-10-28",
            height: 190.31,
          },
          {
            date: "1914-10-29",
            height: 190.34,
          },
          {
            date: "1914-10-30",
            height: 190.37,
          },
          {
            date: "1914-10-31",
            height: 190.4,
          },
          {
            date: "1914-11-01",
            height: 190.42,
          },
          {
            date: "1914-11-02",
            height: 190.46,
          },
          {
            date: "1914-11-03",
            height: 190.49,
          },
          {
            date: "1914-11-04",
            height: 190.53,
          },
          {
            date: "1914-11-05",
            height: 190.57,
          },
          {
            date: "1914-11-06",
            height: 190.58,
          },
          {
            date: "1914-11-07",
            height: 190.59,
          },
          {
            date: "1914-11-08",
            height: 190.62,
          },
          {
            date: "1914-11-09",
            height: 190.64,
          },
          {
            date: "1914-11-10",
            height: 190.67,
          },
          {
            date: "1914-11-11",
            height: 190.71,
          },
          {
            date: "1914-11-12",
            height: 190.73,
          },
          {
            date: "1914-11-13",
            height: 190.74,
          },
          {
            date: "1914-11-14",
            height: 190.77,
          },
          {
            date: "1914-11-15",
            height: 190.79,
          },
          {
            date: "1914-11-16",
            height: 190.82,
          },
          {
            date: "1914-11-17",
            height: 190.84,
          },
          {
            date: "1914-11-18",
            height: 190.87,
          },
          {
            date: "1914-11-19",
            height: 190.89,
          },
          {
            date: "1914-11-20",
            height: 190.91,
          },
          {
            date: "1914-11-21",
            height: 190.94,
          },
          {
            date: "1914-11-22",
            height: 190.95,
          },
          {
            date: "1914-11-23",
            height: 190.98,
          },
          {
            date: "1914-11-24",
            height: 191,
          },
          {
            date: "1914-11-25",
            height: 191.01,
          },
          {
            date: "1914-11-26",
            height: 191.02,
          },
          {
            date: "1914-11-27",
            height: 191.04,
          },
          {
            date: "1914-11-28",
            height: 191.07,
          },
          {
            date: "1914-11-29",
            height: 191.09,
          },
          {
            date: "1914-11-30",
            height: 191.13,
          },
          {
            date: "1914-12-01",
            height: 191.16,
          },
          {
            date: "1914-12-02",
            height: 191.19,
          },
          {
            date: "1914-12-03",
            height: 191.22,
          },
          {
            date: "1914-12-04",
            height: 191.23,
          },
          {
            date: "1914-12-05",
            height: 191.26,
          },
          {
            date: "1914-12-06",
            height: 191.29,
          },
          {
            date: "1914-12-07",
            height: 191.31,
          },
          {
            date: "1914-12-08",
            height: 191.34,
          },
          {
            date: "1914-12-09",
            height: 191.37,
          },
          {
            date: "1914-12-10",
            height: 191.39,
          },
          {
            date: "1914-12-11",
            height: 191.42,
          },
          {
            date: "1914-12-12",
            height: 191.45,
          },
          {
            date: "1914-12-13",
            height: 191.46,
          },
          {
            date: "1914-12-14",
            height: 191.48,
          },
          {
            date: "1914-12-15",
            height: 191.51,
          },
          {
            date: "1914-12-16",
            height: 191.55,
          },
          {
            date: "1914-12-17",
            height: 191.57,
          },
          {
            date: "1914-12-18",
            height: 191.6,
          },
          {
            date: "1914-12-19",
            height: 191.62,
          },
          {
            date: "1914-12-20",
            height: 191.66,
          },
          {
            date: "1914-12-21",
            height: 191.67,
          },
          {
            date: "1914-12-22",
            height: 191.69,
          },
          {
            date: "1914-12-23",
            height: 191.72,
          },
          {
            date: "1914-12-24",
            height: 191.74,
          },
          {
            date: "1914-12-25",
            height: 191.78,
          },
          {
            date: "1914-12-26",
            height: 191.8,
          },
          {
            date: "1914-12-27",
            height: 191.84,
          },
          {
            date: "1914-12-28",
            height: 191.86,
          },
          {
            date: "1914-12-29",
            height: 191.88,
          },
          {
            date: "1914-12-30",
            height: 191.92,
          },
          {
            date: "1914-12-31",
            height: 191.96,
          },
          {
            date: "1915-01-01",
            height: 191.99,
          },
        ],
      };
      if (newChild.id == null) children.value.push(child);
      else {
        debugger;
        let index = children.value.indexOf(
          children.value.filter((e) => e.id == newChild.id)[0]
        );
        if (index != -1) children.value[index] = newChild;
      }
      console.log(children.value);
      console.log(child);

      saveChildren(newChild);
    }

    const loadChildren = async () => {
      const storedChildren = await localforage.getItem("children");
      if (storedChildren) {
        children.value = JSON.parse(storedChildren);
      }
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

    onMounted(() => {
      loadChildren();

      // var tmp = generateDailyHeightData();

      // console.log(tmp);
    });

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

    function goTo(path) {
      router.push(path);
    }

    return {
      props,
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
