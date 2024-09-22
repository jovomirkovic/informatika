<template>
  <div class="flex flex-center column" style="
      background-color: #ffffffa0;
      border-radius: 15px;
      box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
      padding: 0px 0px 25px 0px;
      margin: 8px 0px;
      font-size: 8pt;
    " v-if="props.child" :style="{
      color: [props.child.gender == 'male' ? '#000000' : '#000000'],
    }">
    <p
      style="color: #000000; text-align: center; margin: 0px; position: absolute; top: 70px; width: 100%; z-index: 1000; left: 20px">
      {{ $t("general.highZone") }}
      <br />
      {{ $t("general.callADoctor") }}
    </p>
    <p style="text-align: center; margin: 0px; position: absolute; z-index: 1000; width: 100%; left: 20px"
      :style="{ top: [topPosition + 'px'] }">
      {{ $t("general.lowZone") }}
      <br />
      {{ $t("general.callADoctor") }}
    </p>
    <div id="chartdiv" ref="chartRef"></div>
  </div>
</template>

<script>
import { defineComponent, onMounted, ref } from "vue";
import { useRouter } from "vue-router";
import { useQuasar, date } from "quasar";
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
    let topPosition = ref(100)
    const $q = useQuasar();

    onMounted(() => {
      createChard();
    });

    function createChard() {
      var root = am5.Root.new("chartdiv");

      root.setThemes([am5themes_Animated.new(root)]);

      var chart = root.container.children.push(
        am5xy.XYChart.new(root, {
          panY: false,
          wheelY: "zoomX",
          layout: root.verticalLayout,
        })
      );
      chart.plotContainer.set("background", am5.Rectangle.new(root, {
        fill: am5.color(props.child.gender == "male" ? "#c3e1ff " : "#ffe5ff"), // dark background color for chart area
        fillOpacity: 1
      }));


      var averageDataFromWHO =
        props.child.gender == "male"
          ? averageHeight().boys
          : averageHeight().girls;

      var numberOfMonthsForDisplay = 216 //See full 18 years
      // date.getDateDiff(
      //   date.extractDate(
      //     props.child.heightData[props.child.heightData.length - 1].date,
      //     "YYYY-MM-DD"
      //   ),
      //   date.extractDate(props.child.heightData[0].date, "YYYY-MM-DD"),
      //   "month"
      // ) + 1;

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
            highHeight:
              (e.height + 2 * e.deviation),
            topHeight: (e.height + 1 * e.deviation) * coefficientBasedOnParents,
            bottomHeight:
              (e.height - 1 * e.deviation) * coefficientBasedOnParents,
            lowHeight: (e.height - 2 * e.deviation),
          };
        });

      // Define childHeightChartData
      var childHeightChartData = props.child.heightData.map((e, index) => {
        console.log(index)
        let comparisonDateData = optimalHeightZoneChartData.filter(entry => {

          var date1 = new Date(e.date);
          var date2 = new Date(entry.date);

          var sameYear = date1.getFullYear() === date2.getFullYear();
          var sameMonth = date1.getMonth() === date2.getMonth(); // Months are zero-indexed (0 for January, 11 for December)

          return sameYear && sameMonth;
        })[0]
        if (e.height > comparisonDateData.highHeight && index == props.child.heightData.length - 1) {
          $q.notify({
            message: t.t("general.callADoctorHigh"),
            color: "negative",
            position: "center",
            timeout: 0,
            actions: [
              {
                icon: 'close',
                // for individual action (button):
                color: 'white',
                'aria-label': 'Dismiss'
              }
            ]
          });

        } else if (e.height < comparisonDateData.lowHeight && index == props.child.heightData.length - 1) {
          $q.notify({
            message: t.t("general.callADoctorLow"),
            color: "negative",
            position: "center",
            timeout: 0,
            actions: [
              {
                icon: 'close',
                // for individual action (button):
                color: 'white',
                'aria-label': 'Dismiss'
              }
            ]
          });

        }
        return {
          date: new Date(e.date).getTime(),
          height: e.height,
        };
      });

      // Define target height dot
      var childTargetHeightData = [{
        date: optimalHeightZoneChartData[optimalHeightZoneChartData.length - 1].date,
        height: props.child.childTargetHeight,
      }];

      // Create Y-axis
      let yAxis = chart.yAxes.push(
        am5xy.ValueAxis.new(root, {
          renderer: am5xy.AxisRendererY.new(root, {}),
          extraMax: 0.1 // Adds 10% more space above the highest value
        })
      );

      // Create X-Axis
      var xAxis = chart.xAxes.push(
        am5xy.DateAxis.new(root, {
          baseInterval: { timeUnit: "day", count: 1 },
          renderer: am5xy.AxisRendererX.new(root, {}),
          gridIntervals: [
            { timeUnit: "day", count: 1 },
            { timeUnit: "day", count: 2 },
            { timeUnit: "day", count: 3 },
            { timeUnit: "month", count: 1 },
            { timeUnit: "month", count: 2 },
            { timeUnit: "year", count: 1 },
            { timeUnit: "year", count: 2 },
          ],
          tooltipDateFormat: "yyyy-MM-dd",
        })
      );
      // Create series

      // Series 32 is the first because of the white fill
      var series32 = chart.series.push(
        am5xy.LineSeries.new(root, {
          name: t.t("general.highZone"),
          xAxis: xAxis,
          yAxis: yAxis,
          valueYField: "highHeight",
          valueXField: "date",
        })
      );

      // series32.fills.template.set("above", true);
      series32.fills.template.setAll({
        fillOpacity: 0.9,
        visible: true,
      });

      series32.set("fill", am5.color("#ffffff"));
      series32.set("stroke", am5.color(props.child.gender == "male" ? "#c3e1ff " : "#ffe5ff "));
      series32.data.setAll(optimalHeightZoneChartData);
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
        fillOpacity: 1,
        visible: true,
      });

      series3.set("fill", am5.color(props.child.gender == "male" ? "#76bbff" : "#ffb1ff"));
      series3.set("stroke", am5.color(props.child.gender == "male" ? "#76bbff" : "#ffb1ff"));
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

      var series5 = chart.series.push(
        am5xy.LineSeries.new(root, {
          name: t.t("general.optimalHeightDot"),
          xAxis: xAxis,
          yAxis: yAxis,
          valueYField: "height",
          valueXField: "date",
        })
      );

      series5.set("stroke", am5.color("#00ff00"));
      series5.bullets.push(function () {
        return am5.Bullet.new(root, {
          locationY: 0,
          sprite: am5.Circle.new(root, {
            radius: 6,
            stroke: root.interfaceColors.get("background"),
            strokeWidth: 2,
            stroke: am5.color("#00b300"),
            fill: am5.color("#00b300"),
          }),
        });
      });
      series5.data.setAll(childTargetHeightData);

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

      // Calculate the number of years passed from a given date to now
      function timePassed(ms) {
        // Constants for time calculations
        const msPerDay = 24 * 60 * 60 * 1000;
        const msPerYear = 365.25 * msPerDay;
        const msPerMonth = msPerYear / 12;

        // Calculate the years, months, and days
        const years = Math.floor(ms / msPerYear);
        ms %= msPerYear;

        const months = Math.floor(ms / msPerMonth);
        ms %= msPerMonth;

        const days = Math.floor(ms / msPerDay);

        if (years > 0) {
          return years + t.t("general.yearShort");
        } else if (months > 0) {
          return months + t.t("general.monthShort");
        } else {
          return days + t.t("general.dayShort");
        }
      }

      // Customize date axis labels
      // xAxis
      //   .get("renderer")
      //   .labels.template.adapters.add("text", function (text, target) {
      //     console.log("target");
      //     console.log(text);
      //     console.log(target);
      //     var date = target.dataItem.get("value");
      //     return yearsPassed(date) + " years ago";
      //   });

      xAxis
        .get("renderer")
        .labels.template.adapters.add("text", function (text, target) {
          var years = timePassed(
            Math.abs(
              date
                .extractDate(props.child.dateOfBirth, "DD.MM.YYYY.")
                .getTime() - target.dataItem?._settings.value
            )
          );

          return years; //yearsPassed(value) + " years ago";
        });
      chart.set(
        "scrollbarX",
        am5.Scrollbar.new(root, {
          orientation: "horizontal",
        })
      );
      // Add legend
      var legend = chart.children.push(am5.Legend.new(root, {}));
      legend.data.setAll(
        chart.series.values.filter((e) => e._settings.name != "hide")
      );


      root.events.on("frameended", function () {
        var chartContainerHeight = root.container.innerHeight();
        var legendHeight = legend.height();
        var plotAreaHeight = chartContainerHeight - legendHeight;
        topPosition.value = plotAreaHeight - 60;
      });
    }

    function goTo(path) {
      router.push(path);
    }

    return {
      props,
      topPosition,
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
