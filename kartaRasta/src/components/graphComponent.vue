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
    <div id="chartdiv"></div>
  </div>
</template>

<script>
import { defineComponent, ref, onMounted, watch } from "vue";
import { useRouter } from "vue-router";
import { useQuasar } from "quasar";
import * as am5 from "@amcharts/amcharts5";
import * as am5xy from "@amcharts/amcharts5/xy";
import am5themes_Animated from "@amcharts/amcharts5/themes/Animated";
import { date } from "quasar";
import averageHeight from "../scripts/averageHeight.vue";

export default defineComponent({
  name: "graphComponent",
  props: ["child"],
  setup(props, ctx) {
    let router = useRouter();
    const $q = useQuasar();
    const root = ref(null);

    onMounted(() => {
      createChard();
      console.log("props.child.heightData");
      console.log(props);
      console.log(props.child);
      console.log(props.child.heightData);
    });

    watch(props, (newProps) => {
      // if (root.value != null) root.value.dispose();
      // setTimeout(() => {
      //   root.value = null;
      //   createChard();
      // }, 500);
    });
    function createChard() {
      var root = am5.Root.new("chartdiv");
      console.log(root);
      console.log(root.value);

      root.setThemes([am5themes_Animated.new(root)]);

      var chart = root.container.children.push(
        am5xy.XYChart.new(root, {
          panY: false,
          wheelY: "zoomX",
          layout: root.verticalLayout,
        })
      );

      var dataa =
        props.child.gender == "male"
          ? averageHeight().boys
          : averageHeight().girls;

      var totalMonths =
        date.getDateDiff(
          date.extractDate(
            props.child.heightData[props.child.heightData.length - 1].date,
            "YYYY-MM-DD"
          ),
          date.extractDate(props.child.heightData[0].date, "YYYY-MM-DD"),
          "month"
        ) + 1;

      var procenjenaVisina =
        (parseFloat(props.child.fathersHeight) +
          parseFloat(props.child.mothersHeight) +
          13 * (props.child.gender == "male" ? 1 : -1)) /
        2;

      var koeficientRoditelja =
        procenjenaVisina / dataa.filter((e) => e.age == 240)[0].height;

      var data2 = dataa
        .filter((e) => e.age <= totalMonths)
        .map((e) => {
          return {
            date: date
              .addToDate(
                date.extractDate(props.child.heightData[0].date, "YYYY-MM-DD"),
                { months: e.age }
              )
              .getTime(),
            height: e.height,
          };
        });

      var data3 = dataa
        .filter((e) => e.age <= totalMonths)
        .map((e) => {
          return {
            date: date
              .addToDate(
                date.extractDate(props.child.heightData[0].date, "YYYY-MM-DD"),
                { months: e.age }
              )
              .getTime(),
            topHeight: e.height * koeficientRoditelja + 5,
            bottomHeight: e.height * koeficientRoditelja - 5,
          };
        });

      console.log("data3");
      console.log(data3);
      console.log(koeficientRoditelja);
      // Define data
      var data = props.child.heightData.map((e) => {
        return {
          date: new Date(e.date).getTime(),
          height: e.height,
          topHeight: parseFloat(e.height) + 0.07 * parseFloat(e.height),
          bottomHeight: parseFloat(e.height) - 0.07 * parseFloat(e.height),
          averageHeight: parseFloat(e.height) + 0.035 * parseFloat(e.height),
        };
      });
      debugger;

      // Craete Y-axis
      let yAxis = chart.yAxes.push(
        am5xy.ValueAxis.new(root, {
          renderer: am5xy.AxisRendererY.new(root, {}),
        })
      );

      // Create X-Axis
      var xAxis = chart.xAxes.push(
        am5xy.DateAxis.new(root, {
          baseInterval: { timeUnit: "day", count: 1 },
          renderer: am5xy.AxisRendererX.new(root, {}),
          tooltipDateFormat: "yyyy-MM-dd",
        })
      );
      // Create series
      var series1 = chart.series.push(
        am5xy.LineSeries.new(root, {
          name: "Visina deteta",
          xAxis: xAxis,
          yAxis: yAxis,
          valueYField: "height",
          valueXField: "date",
          tooltip: am5.Tooltip.new(root, {
            labelText: "{valueY}",
          }),
        })
      );
      series1.set("stroke", am5.color("#e55d8b"));
      series1.data.setAll(data);

      var series2 = chart.series.push(
        am5xy.LineSeries.new(root, {
          name: "Zona optimalnog rasta",
          xAxis: xAxis,
          yAxis: yAxis,
          valueYField: "topHeight",
          valueXField: "date",
        })
      );

      series2.fills.template.setAll({
        fillOpacity: 0.2,
        visible: true,
      });

      series2.set("fill", am5.color("#00ff00"));
      series2.set("stroke", am5.color("#00ff00"));
      series2.data.setAll(data3);

      var series3 = chart.series.push(
        am5xy.LineSeries.new(root, {
          name: "Zona niskog rasta",
          xAxis: xAxis,
          yAxis: yAxis,
          valueYField: "bottomHeight",
          valueXField: "date",
        })
      );

      series3.fills.template.setAll({
        fillOpacity: 0.5,
        visible: true,
      });

      series3.set("fill", am5.color("#ff0000"));
      series3.set("stroke", am5.color("#ff0000"));
      series3.data.setAll(data3);

      var series4 = chart.series.push(
        am5xy.LineSeries.new(root, {
          name: "Prosečna visina za uzrast",
          xAxis: xAxis,
          yAxis: yAxis,
          valueYField: "height",
          valueXField: "date",
        })
      );

      series4.set("stroke", am5.color("#000000"));
      series4.data.setAll(data2);

      chart.set(
        "scrollbarX",
        am5.Scrollbar.new(root, {
          orientation: "horizontal",
        })
      );
      // Add legend
      var legend = chart.children.push(am5.Legend.new(root, {}));
      legend.data.setAll(chart.series.values);
    }

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
#chartdiv {
  width: 100%;
  height: calc(100vh - 170px);
}
</style>
