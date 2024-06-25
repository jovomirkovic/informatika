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
import { defineComponent, onMounted } from "vue";
import { useRouter } from "vue-router";
import { date } from "quasar";
import * as am5 from "@amcharts/amcharts5";
import * as am5xy from "@amcharts/amcharts5/xy";
import am5themes_Animated from "@amcharts/amcharts5/themes/Animated";
import * as d3 from "https://cdn.skypack.dev/d3-shape@3";

import averageHeight from "../scripts/averageHeight.vue";
import { useI18n } from "vue-i18n";

export default defineComponent({
  name: "graphComponent",
  props: ["child"],
  setup(props) {
    const t = useI18n();
    let router = useRouter();

    onMounted(() => {
      createChard();
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

      var averageDataFromWHO =
        props.child.gender == "male"
          ? averageHeight().boys
          : averageHeight().girls;

      var numberOfMonthsForDisplay =
        date.getDateDiff(
          date.extractDate(
            props.child.heightData[props.child.heightData.length - 1].date,
            "YYYY-MM-DD"
          ),
          date.extractDate(props.child.heightData[0].date, "YYYY-MM-DD"),
          "month"
        ) + 1;

      // 228 - is the last month of measured data gathered from WHO
      var coefficientBasedOnParents =
        props.child.childTargetHeight /
        averageDataFromWHO.filter((e) => e.age == 228)[0].height;

      var averageHeightChartData = averageDataFromWHO
        .filter((e) => e.age <= numberOfMonthsForDisplay)
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

      // How is the zone calculated:
      // We take the average height for the given age gathered from WHO
      // We add/subtract 4 times the standard deviation for that age
      // We adjust the data by multiplying it with the parent coefficient
      // The parent coefficient is the percentile difference from the target adult height and the average adult height

      var optimalHeightZoneChartData = averageDataFromWHO
        .filter((e) => e.age <= numberOfMonthsForDisplay)
        .map((e) => {
          return {
            date: date
              .addToDate(
                date.extractDate(props.child.heightData[0].date, "YYYY-MM-DD"),
                { months: e.age }
              )
              .getTime(),
            topHeight: (e.height + 1 * e.deviation) * coefficientBasedOnParents,
            bottomHeight:
              (e.height - 1 * e.deviation) * coefficientBasedOnParents,
            lowHeight: (e.height - 3 * e.deviation) * coefficientBasedOnParents,
          };
        });

      // Define childHeightChartData
      var childHeightChartData = props.child.heightData.map((e) => {
        return {
          date: new Date(e.date).getTime(),
          height: e.height,
        };
      });

      // Create Y-axis
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

      var series2 = chart.series.push(
        am5xy.LineSeries.new(root, {
          name: t.t("general.optimalZone"),
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
      series2.data.setAll(optimalHeightZoneChartData);

      var series21 = chart.series.push(
        am5xy.LineSeries.new(root, {
          name: "hide",
          xAxis: xAxis,
          yAxis: yAxis,
          valueYField: "bottomHeight",
          valueXField: "date",
        })
      );

      series21.fills.template.setAll({
        fillOpacity: 0.8,
        visible: true,
      });

      series21.set("fill", am5.color("#ffffff"));
      series21.set("stroke", am5.color("#00ff00"));
      series21.data.setAll(optimalHeightZoneChartData);

      var series3 = chart.series.push(
        am5xy.LineSeries.new(root, {
          name: t.t("general.lowZone"),
          xAxis: xAxis,
          yAxis: yAxis,
          valueYField: "lowHeight",
          valueXField: "date",
        })
      );

      series3.fills.template.setAll({
        fillOpacity: 0.5,
        visible: true,
      });

      series3.set("fill", am5.color("#ff0000"));
      series3.set("stroke", am5.color("#ff0000"));
      series3.data.setAll(optimalHeightZoneChartData);

      var series4 = chart.series.push(
        am5xy.LineSeries.new(root, {
          name: t.t("general.averageHeightForAge"),
          xAxis: xAxis,
          yAxis: yAxis,
          valueYField: "height",
          valueXField: "date",
        })
      );

      series4.set("stroke", am5.color("#000000"));
      series4.data.setAll(averageHeightChartData);

      var series1 = chart.series.push(
        am5xy.LineSeries.new(root, {
          name: t.t("general.childHeight"),
          xAxis: xAxis,
          yAxis: yAxis,
          valueYField: "height",
          valueXField: "date",
          tooltip: am5.Tooltip.new(root, {
            labelText: "{valueY}",
          }),
          // curveFactory: d3.curveNatural,
        })
      );
      series1.set("stroke", am5.color("#0000ff"));

      series1.bullets.push(function () {
        return am5.Bullet.new(root, {
          locationY: 0,
          sprite: am5.Circle.new(root, {
            radius: 4,
            stroke: root.interfaceColors.get("background"),
            strokeWidth: 2,
            fill: am5.color("#0000ff"),
          }),
        });
      });

      series1.data.setAll(childHeightChartData);

      chart.set(
        "scrollbarX",
        am5.Scrollbar.new(root, {
          orientation: "horizontal",
        })
      );
      // Add legend
      var legend = chart.children.push(am5.Legend.new(root, {}));
      console.log("chart.series.values");
      console.log(chart.series.values);
      console.log(
        chart.series.values.filter((e) => e._settings.name != "hide")
      );
      legend.data.setAll(
        chart.series.values.filter((e) => e._settings.name != "hide")
      );
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
  height: calc(100vh - 220px);
}
</style>
