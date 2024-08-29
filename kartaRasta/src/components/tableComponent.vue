<template>
  <div class="flex flex-center column" style="
      background-color: #ffffffa0;
      border-radius: 15px;
      box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
      margin: 8px 0px;
    " v-if="props.child" :style="{
      color: [props.child.gender == 'male' ? '#759eff' : '#de60ba'],
    }">
    <q-table style="height: calc(100vh - 195px)" :rows="rows" :columns="columns" row-key="name"
      :no-results-label="$t('general.noResults')" :rows-per-page-label="$t('general.rowsPerPage')">
      <template v-slot:body-cell-action="props">
        <q-td key="action" :props="props">
          <q-btn icon="delete" :disabled="props.row.id == 'childTargetHeight'" push
            class="text-white bg-negative q-ml-sm col" round @click="removeHeight1(props.row)" />
        </q-td>
      </template>
    </q-table>

    <q-dialog v-model="areYouSure">
      <q-card class="flex flex-center">
        <q-card-section class="row flex flex-center q-pb-none text-center q-mb-xl">
          <span style="font-size: 12pt">
            {{ $t("general.areYouSureDeleteMeasurement") }}
          </span>
          <span style="font-size: 15pt; font-weight: 600">
            {{
              date.formatDate(
                date.extractDate(selectedHeight.data.date, "YYYY-MM-DD"),
                "DD.MM.YYYY."
              )
            }}
            <br />
            {{ selectedHeight.data.height + " cm" }}
          </span>
        </q-card-section>

        <span class="row q-mb-lg" style="width: 90%">
          <q-btn v-close-popup push class="text-white bg-negative q-mr-sm col" label="Da" @click="removeHeight()" />
          <q-btn push class="text-white bg-positive q-ml-sm col" label="Ne" @click="cancel" />
        </span>
      </q-card>
    </q-dialog>
  </div>
</template>

<script>
import { defineComponent, ref, onMounted, watch } from "vue";
import { useRouter } from "vue-router";
import base64 from "../components/base64.vue";
import { date } from "quasar";
import { useI18n } from "vue-i18n";

export default defineComponent({
  name: "tableComponent",
  components: {
    base64,
  },
  props: ["child"],
  setup(props, ctx) {
    const t = useI18n();
    let router = useRouter();
    let areYouSure = ref(false);
    let selectedHeight = ref(false);

    const columns = [
      {
        name: "height",
        align: "center",
        label: t.t("general.heightShortCM"),
        field: "height",
        sortable: false,
      },
      {
        name: "age",
        align: "center",
        label: t.t("general.age"),
        field: "age",
        sortable: false,
      },
      {
        name: "date",
        align: "center",
        label: t.t("general.dateLabel"),
        field: "date",
        sortable: false,
      },
      {
        name: "action",
        align: "center",
        label: t.t("general.action"),
        field: "action",
        sortable: false,
      },
    ];

    watch(props, (newProps) => {
      rows.value = newProps.child.heightData.map((e) => {
        var age = "";
        if (
          date.getDateDiff(
            date.extractDate(e.date, "YYYY-MM-DD"),
            date.extractDate(props.child.dateOfBirth, "DD.MM.YYYY."),
            "years"
          ) != 0
        )
          age =
            age +
            date.getDateDiff(
              date.extractDate(e.date, "YYYY-MM-DD"),
              date.extractDate(props.child.dateOfBirth, "DD.MM.YYYY."),
              "years"
            ) +
            " " +
            t.t("general.yearShort") +
            "";
        if (
          date.getDateDiff(
            date.extractDate(e.date, "YYYY-MM-DD"),
            date.extractDate(props.child.dateOfBirth, "DD.MM.YYYY."),
            "months"
          ) != 0
        )
          age =
            age +
            (age == "" ? "" : ", ") +
            (date.getDateDiff(
              date.extractDate(e.date, "YYYY-MM-DD"),
              date.extractDate(props.child.dateOfBirth, "DD.MM.YYYY."),
              "months"
            ) -
              12 *
              date.getDateDiff(
                date.extractDate(e.date, "YYYY-MM-DD"),
                date.extractDate(props.child.dateOfBirth, "DD.MM.YYYY."),
                "years"
              )) +
            " " +
            t.t("general.monthShort") +
            "";

        if (
          date.getDateDiff(
            date.extractDate(e.date, "YYYY-MM-DD"),
            date.extractDate(props.child.dateOfBirth, "DD.MM.YYYY."),
            "years"
          ) == 0 &&
          (date.getDateDiff(
            date.extractDate(e.date, "YYYY-MM-DD"),
            date.extractDate(props.child.dateOfBirth, "DD.MM.YYYY."),
            "months"
          ) == 0 ||
            (date.getDateDiff(
              date.extractDate(e.date, "YYYY-MM-DD"),
              date.extractDate(props.child.dateOfBirth, "DD.MM.YYYY."),
              "months"
            ) == 1 &&
              date.getDateDiff(
                date.extractDate(e.date, "YYYY-MM-DD"),
                date.extractDate(props.child.dateOfBirth, "DD.MM.YYYY."),
                "days"
              ) <= 31))
        )
          age =
            date.getDateDiff(
              date.extractDate(e.date, "YYYY-MM-DD"),
              date.extractDate(props.child.dateOfBirth, "DD.MM.YYYY."),
              "days"
            ) +
            " " +
            t.t("general.dayShort") +
            "";
        return {
          id: e.id || "",
          height: e.height,
          age: age,
          date: date.formatDate(
            date.extractDate(e.date, "YYYY-MM-DD"),
            "DD.MM.YYYY."
          ),
        };
      });
      rows.value.sort((a, b) => {
        return date.extractDate(a.date, "DD.MM.YYYY.").getTime() -
          date.extractDate(b.date, "DD.MM.YYYY.").getTime() >
          0
          ? -1
          : 1;
      });
    });
    const rows = ref([]);
    onMounted(() => {
      console.log(props.child);
      rows.value = props.child.heightData.map((e) => {
        var age = "";
        if (
          date.getDateDiff(
            date.extractDate(e.date, "YYYY-MM-DD"),
            date.extractDate(props.child.dateOfBirth, "DD.MM.YYYY."),
            "years"
          ) != 0
        )
          age =
            age +
            date.getDateDiff(
              date.extractDate(e.date, "YYYY-MM-DD"),
              date.extractDate(props.child.dateOfBirth, "DD.MM.YYYY."),
              "years"
            ) +
            " " +
            t.t("general.yearShort") +
            "";
        if (
          date.getDateDiff(
            date.extractDate(e.date, "YYYY-MM-DD"),
            date.extractDate(props.child.dateOfBirth, "DD.MM.YYYY."),
            "months"
          ) != 0
        )
          age =
            age +
            (age == "" ? "" : ", ") +
            (date.getDateDiff(
              date.extractDate(e.date, "YYYY-MM-DD"),
              date.extractDate(props.child.dateOfBirth, "DD.MM.YYYY."),
              "months"
            ) -
              12 *
              date.getDateDiff(
                date.extractDate(e.date, "YYYY-MM-DD"),
                date.extractDate(props.child.dateOfBirth, "DD.MM.YYYY."),
                "years"
              )) +
            " " +
            t.t("general.monthShort") +
            "";

        if (
          date.getDateDiff(
            date.extractDate(e.date, "YYYY-MM-DD"),
            date.extractDate(props.child.dateOfBirth, "DD.MM.YYYY."),
            "years"
          ) == 0 &&
          (date.getDateDiff(
            date.extractDate(e.date, "YYYY-MM-DD"),
            date.extractDate(props.child.dateOfBirth, "DD.MM.YYYY."),
            "months"
          ) == 0 ||
            (date.getDateDiff(
              date.extractDate(e.date, "YYYY-MM-DD"),
              date.extractDate(props.child.dateOfBirth, "DD.MM.YYYY."),
              "months"
            ) == 1 &&
              date.getDateDiff(
                date.extractDate(e.date, "YYYY-MM-DD"),
                date.extractDate(props.child.dateOfBirth, "DD.MM.YYYY."),
                "days"
              ) <= 31))
        )
          age =
            date.getDateDiff(
              date.extractDate(e.date, "YYYY-MM-DD"),
              date.extractDate(props.child.dateOfBirth, "DD.MM.YYYY."),
              "days"
            ) +
            " " +
            t.t("general.dayShort") +
            "";

        return {
          id: e.id || "",
          height: e.height,
          age: age,
          date: date.formatDate(
            date.extractDate(e.date, "YYYY-MM-DD"),
            "DD.MM.YYYY."
          ),
        };
      });
      rows.value.sort((a, b) => {
        return date.extractDate(a.date, "DD.MM.YYYY.").getTime() -
          date.extractDate(b.date, "DD.MM.YYYY.").getTime() >
          0
          ? -1
          : 1;
      });
    });

    function goTo(path) {
      router.push(path);
    }

    function removeHeight() {
      ctx.emit("remove-height", selectedHeight.value);
    }
    function cancel() {
      selectedHeight.value = null;
      areYouSure.value = false;
    }
    function removeHeight1(data) {
      areYouSure.value = true;
      var tmp = {
        id: props.child.id,
        data: {
          date: date.formatDate(
            date.extractDate(data.date, "DD.MM.YYYY."),
            "YYYY-MM-DD"
          ),
          height: data.height,
        },
      };
      selectedHeight.value = tmp;
    }

    return {
      props,
      columns,
      rows,
      areYouSure,
      selectedHeight,
      date,
      goTo,
      removeHeight1,
      removeHeight,
      cancel,
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
