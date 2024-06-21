<template>
  <div
    class="flex flex-center column"
    style="
      background-color: #ffffffa0;
      border-radius: 15px;
      box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
      margin: 8px 0px;
    "
    v-if="props.child"
    :style="{
      color: [props.child.gender == 'male' ? '#759eff' : '#de60ba'],
    }"
  >
    <q-table
      style="max-height: 75vh"
      title="Treats"
      :rows="rows"
      :columns="columns"
      row-key="name"
    />
  </div>
</template>

<script>
import { defineComponent, ref, onMounted } from "vue";
import { useRouter } from "vue-router";
import { useQuasar } from "quasar";
import base64 from "../components/base64.vue";
import { date } from "quasar";

export default defineComponent({
  name: "tableComponent",
  components: {
    base64,
  },
  props: ["child"],
  setup(props, ctx) {
    let router = useRouter();
    const $q = useQuasar();

    const columns = [
      {
        name: "height",
        align: "center",
        label: "Visina (cm)",
        field: "height",
        sortable: true,
      },
      {
        name: "age",
        align: "center",
        label: "Starost",
        field: "age",
        sortable: true,
      },
      {
        name: "date",
        align: "center",
        label: "Datum merenja",
        field: "date",
        sortable: true,
      },
    ];

    const rows = ref([]);
    onMounted(() => {
      console.log("props.child.heightData11");
      console.log("props.child.heightData11");
      console.log("props.child.heightData11");
      console.log(props.child.heightData);
      rows.value = props.child.heightData.map((e) => {
        return {
          height: e.height,
          age:
            date.getDateDiff(
              Date.now(),
              date.extractDate(e.date, "YYYY-MM-DD"),
              "years"
            ) +
            " god, " +
            (date.getDateDiff(
              Date.now(),
              date.extractDate(e.date, "YYYY-MM-DD"),
              "months"
            ) -
              12 *
                date.getDateDiff(
                  Date.now(),
                  date.extractDate(e.date, "YYYY-MM-DD"),
                  "years"
                )) +
            "mes",
          date: date.formatDate(
            date.extractDate(e.date, "YYYY-MM-DD"),
            "DD.MM.YYYY."
          ),
        };
      });
    });

    function goTo(path) {
      router.push(path);
    }

    return {
      props,
      columns,
      rows,
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
.q-table__container {
  background-color: transparent;
  box-shadow: none;
  width: 100%;
}
</style>
