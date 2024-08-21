"use strict";
(globalThis["webpackChunkcom_mkonekt_kartaRasta"] = globalThis["webpackChunkcom_mkonekt_kartaRasta"] || []).push([[641],{

/***/ 4974:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var core_js_modules_es_array_push_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(239);
/* harmony import */ var core_js_modules_es_array_push_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_push_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1758);
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(8734);
/* harmony import */ var vue_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(455);
/* harmony import */ var quasar_src_composables_use_quasar_use_quasar_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(4907);
/* harmony import */ var quasar_src_utils_date_date_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6246);
/* harmony import */ var _amcharts_amcharts5__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(9841);
/* harmony import */ var _amcharts_amcharts5__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(6000);
/* harmony import */ var _amcharts_amcharts5__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(8842);
/* harmony import */ var _amcharts_amcharts5__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(8785);
/* harmony import */ var _amcharts_amcharts5__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(7341);
/* harmony import */ var _amcharts_amcharts5__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(4000);
/* harmony import */ var _amcharts_amcharts5__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(4043);
/* harmony import */ var _amcharts_amcharts5__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(4304);
/* harmony import */ var _amcharts_amcharts5_xy__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(1635);
/* harmony import */ var _amcharts_amcharts5_xy__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(6258);
/* harmony import */ var _amcharts_amcharts5_xy__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(7929);
/* harmony import */ var _amcharts_amcharts5_xy__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(1551);
/* harmony import */ var _amcharts_amcharts5_xy__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(7418);
/* harmony import */ var _amcharts_amcharts5_xy__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(4621);
/* harmony import */ var _amcharts_amcharts5_themes_Animated__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(6057);
/* harmony import */ var https_cdn_skypack_dev_d3_shape_3__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4512);
/* harmony import */ var _scripts_averageHeight_vue__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(975);
/* harmony import */ var vue_i18n__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(3537);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([https_cdn_skypack_dev_d3_shape_3__WEBPACK_IMPORTED_MODULE_2__]);
https_cdn_skypack_dev_d3_shape_3__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];










/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,vue__WEBPACK_IMPORTED_MODULE_3__/* .defineComponent */ .pM)({
  name: "graphComponent",
  props: ["child"],
  setup(props) {
    const t = (0,vue_i18n__WEBPACK_IMPORTED_MODULE_4__/* .useI18n */ .s9)();
    let router = (0,vue_router__WEBPACK_IMPORTED_MODULE_5__/* .useRouter */ .rd)();
    let topPosition = (0,vue__WEBPACK_IMPORTED_MODULE_6__/* .ref */ .KR)(100);
    const $q = (0,quasar_src_composables_use_quasar_use_quasar_js__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .A)();
    (0,vue__WEBPACK_IMPORTED_MODULE_3__/* .onMounted */ .sV)(() => {
      createChard();
    });
    function createChard() {
      var root = _amcharts_amcharts5__WEBPACK_IMPORTED_MODULE_8__/* .Root */ .b.new("chartdiv");
      root.setThemes([_amcharts_amcharts5_themes_Animated__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .A.new(root)]);
      var chart = root.container.children.push(_amcharts_amcharts5_xy__WEBPACK_IMPORTED_MODULE_10__/* .XYChart */ .C.new(root, {
        panY: false,
        wheelY: "zoomX",
        layout: root.verticalLayout
      }));
      chart.plotContainer.set("background", _amcharts_amcharts5__WEBPACK_IMPORTED_MODULE_11__/* .Rectangle */ .M.new(root, {
        fill: _amcharts_amcharts5__WEBPACK_IMPORTED_MODULE_12__/* .color */ .yW(0xff00ff),
        // dark background color for chart area
        fillOpacity: 1
      }));
      var averageDataFromWHO = props.child.gender == "male" ? (0,_scripts_averageHeight_vue__WEBPACK_IMPORTED_MODULE_13__/* ["default"] */ .A)().boys : (0,_scripts_averageHeight_vue__WEBPACK_IMPORTED_MODULE_13__/* ["default"] */ .A)().girls;
      var numberOfMonthsForDisplay = 216; //See full 18 years
      // date.getDateDiff(
      //   date.extractDate(
      //     props.child.heightData[props.child.heightData.length - 1].date,
      //     "YYYY-MM-DD"
      //   ),
      //   date.extractDate(props.child.heightData[0].date, "YYYY-MM-DD"),
      //   "month"
      // ) + 1;

      // 228 - is the last month of measured data gathered from WHO
      var coefficientBasedOnParents = props.child.childTargetHeight / averageDataFromWHO.filter(e => e.age == 228)[0].height;
      var averageHeightChartData = averageDataFromWHO.filter(e => e.age <= numberOfMonthsForDisplay).map(e => {
        return {
          date: quasar_src_utils_date_date_js__WEBPACK_IMPORTED_MODULE_1__/* ["default"].addToDate */ .Ay.addToDate(quasar_src_utils_date_date_js__WEBPACK_IMPORTED_MODULE_1__/* ["default"].extractDate */ .Ay.extractDate(props.child.heightData[0].date, "YYYY-MM-DD"), {
            months: e.age
          }).getTime(),
          height: e.height
        };
      });

      // How is the zone calculated:
      // We take the average height for the given age gathered from WHO
      // We add/subtract 4 times the standard deviation for that age
      // We adjust the data by multiplying it with the parent coefficient
      // The parent coefficient is the percentile difference from the target adult height and the average adult height

      var optimalHeightZoneChartData = averageDataFromWHO.filter(e => e.age <= numberOfMonthsForDisplay).map(e => {
        return {
          date: quasar_src_utils_date_date_js__WEBPACK_IMPORTED_MODULE_1__/* ["default"].addToDate */ .Ay.addToDate(quasar_src_utils_date_date_js__WEBPACK_IMPORTED_MODULE_1__/* ["default"].extractDate */ .Ay.extractDate(props.child.heightData[0].date, "YYYY-MM-DD"), {
            months: e.age
          }).getTime(),
          highHeight: e.height + 2 * e.deviation,
          topHeight: (e.height + 1 * e.deviation) * coefficientBasedOnParents,
          bottomHeight: (e.height - 1 * e.deviation) * coefficientBasedOnParents,
          lowHeight: e.height - 2 * e.deviation
        };
      });

      // Define childHeightChartData
      var childHeightChartData = props.child.heightData.map((e, index) => {
        console.log(index);
        let comparisonDateData = optimalHeightZoneChartData.filter(entry => {
          var date1 = new Date(e.date);
          var date2 = new Date(entry.date);
          var sameYear = date1.getFullYear() === date2.getFullYear();
          var sameMonth = date1.getMonth() === date2.getMonth(); // Months are zero-indexed (0 for January, 11 for December)

          return sameYear && sameMonth;
        })[0];
        if (e.height > comparisonDateData.highHeight) {
          $q.notify({
            message: "PREVISOKO",
            color: "negative",
            position: "top"
          });
        } else if (e.height < comparisonDateData.lowHeight) {
          $q.notify({
            message: "prenisko",
            color: "negative",
            position: "bottom"
          });
        }
        return {
          date: new Date(e.date).getTime(),
          height: e.height
        };
      });

      // Define target height dot
      var childTargetHeightData = [{
        date: optimalHeightZoneChartData[optimalHeightZoneChartData.length - 1].date,
        height: props.child.childTargetHeight
      }];

      // Create Y-axis
      let yAxis = chart.yAxes.push(_amcharts_amcharts5_xy__WEBPACK_IMPORTED_MODULE_14__/* .ValueAxis */ .F.new(root, {
        renderer: _amcharts_amcharts5_xy__WEBPACK_IMPORTED_MODULE_15__/* .AxisRendererY */ .Q.new(root, {}),
        extraMax: 0.1 // Adds 10% more space above the highest value
      }));

      // Create X-Axis
      var xAxis = chart.xAxes.push(_amcharts_amcharts5_xy__WEBPACK_IMPORTED_MODULE_16__/* .DateAxis */ .c.new(root, {
        baseInterval: {
          timeUnit: "day",
          count: 1
        },
        renderer: _amcharts_amcharts5_xy__WEBPACK_IMPORTED_MODULE_17__/* .AxisRendererX */ .j.new(root, {}),
        gridIntervals: [{
          timeUnit: "day",
          count: 1
        }, {
          timeUnit: "day",
          count: 2
        }, {
          timeUnit: "day",
          count: 3
        }, {
          timeUnit: "month",
          count: 1
        }, {
          timeUnit: "month",
          count: 2
        }, {
          timeUnit: "year",
          count: 1
        }, {
          timeUnit: "year",
          count: 2
        }],
        tooltipDateFormat: "yyyy-MM-dd"
      }));
      // Create series

      // Series 32 is the first because of the white fill
      var series32 = chart.series.push(_amcharts_amcharts5_xy__WEBPACK_IMPORTED_MODULE_18__/* .LineSeries */ .I.new(root, {
        name: t.t("general.highZone"),
        xAxis: xAxis,
        yAxis: yAxis,
        valueYField: "highHeight",
        valueXField: "date"
      }));
      series32.fills.template.set("above", true);
      series32.fills.template.setAll({
        fillOpacity: 1,
        visible: true
      });
      series32.set("fill", _amcharts_amcharts5__WEBPACK_IMPORTED_MODULE_12__/* .color */ .yW("#ffffff"));
      series32.set("stroke", _amcharts_amcharts5__WEBPACK_IMPORTED_MODULE_12__/* .color */ .yW("#ff00ff"));
      series32.data.setAll(optimalHeightZoneChartData);
      var series2 = chart.series.push(_amcharts_amcharts5_xy__WEBPACK_IMPORTED_MODULE_18__/* .LineSeries */ .I.new(root, {
        name: t.t("general.optimalZone"),
        xAxis: xAxis,
        yAxis: yAxis,
        valueYField: "topHeight",
        valueXField: "date"
      }));
      series2.fills.template.setAll({
        fillOpacity: 0.2,
        visible: true
      });
      series2.set("fill", _amcharts_amcharts5__WEBPACK_IMPORTED_MODULE_12__/* .color */ .yW("#00ff00"));
      series2.set("stroke", _amcharts_amcharts5__WEBPACK_IMPORTED_MODULE_12__/* .color */ .yW("#00ff00"));
      series2.data.setAll(optimalHeightZoneChartData);
      var series21 = chart.series.push(_amcharts_amcharts5_xy__WEBPACK_IMPORTED_MODULE_18__/* .LineSeries */ .I.new(root, {
        name: "hide",
        xAxis: xAxis,
        yAxis: yAxis,
        valueYField: "bottomHeight",
        valueXField: "date"
      }));
      series21.fills.template.setAll({
        fillOpacity: 0.8,
        visible: true
      });
      series21.set("fill", _amcharts_amcharts5__WEBPACK_IMPORTED_MODULE_12__/* .color */ .yW("#ffffff"));
      series21.set("stroke", _amcharts_amcharts5__WEBPACK_IMPORTED_MODULE_12__/* .color */ .yW("#00ff00"));
      series21.data.setAll(optimalHeightZoneChartData);
      var series3 = chart.series.push(_amcharts_amcharts5_xy__WEBPACK_IMPORTED_MODULE_18__/* .LineSeries */ .I.new(root, {
        name: t.t("general.lowZone"),
        xAxis: xAxis,
        yAxis: yAxis,
        valueYField: "lowHeight",
        valueXField: "date"
      }));
      series3.fills.template.setAll({
        fillOpacity: 0.5,
        visible: true
      });
      series3.set("fill", _amcharts_amcharts5__WEBPACK_IMPORTED_MODULE_12__/* .color */ .yW("#ff0000"));
      series3.set("stroke", _amcharts_amcharts5__WEBPACK_IMPORTED_MODULE_12__/* .color */ .yW("#ff0000"));
      series3.data.setAll(optimalHeightZoneChartData);
      var series4 = chart.series.push(_amcharts_amcharts5_xy__WEBPACK_IMPORTED_MODULE_18__/* .LineSeries */ .I.new(root, {
        name: t.t("general.averageHeightForAge"),
        xAxis: xAxis,
        yAxis: yAxis,
        valueYField: "height",
        valueXField: "date"
      }));
      series4.set("stroke", _amcharts_amcharts5__WEBPACK_IMPORTED_MODULE_12__/* .color */ .yW("#000000"));
      series4.data.setAll(averageHeightChartData);
      var series5 = chart.series.push(_amcharts_amcharts5_xy__WEBPACK_IMPORTED_MODULE_18__/* .LineSeries */ .I.new(root, {
        name: t.t("general.optimalHeightDot"),
        xAxis: xAxis,
        yAxis: yAxis,
        valueYField: "height",
        valueXField: "date"
      }));
      series5.set("stroke", _amcharts_amcharts5__WEBPACK_IMPORTED_MODULE_12__/* .color */ .yW("#00ff00"));
      series5.bullets.push(function () {
        return _amcharts_amcharts5__WEBPACK_IMPORTED_MODULE_19__/* .Bullet */ .D.new(root, {
          locationY: 0,
          sprite: _amcharts_amcharts5__WEBPACK_IMPORTED_MODULE_20__/* .Circle */ .j.new(root, {
            radius: 4,
            stroke: root.interfaceColors.get("background"),
            strokeWidth: 2,
            stroke: _amcharts_amcharts5__WEBPACK_IMPORTED_MODULE_12__/* .color */ .yW("#00ff00"),
            fill: _amcharts_amcharts5__WEBPACK_IMPORTED_MODULE_12__/* .color */ .yW("#ffffff")
          })
        });
      });
      series5.data.setAll(childTargetHeightData);
      var series1 = chart.series.push(_amcharts_amcharts5_xy__WEBPACK_IMPORTED_MODULE_18__/* .LineSeries */ .I.new(root, {
        name: t.t("general.childHeight"),
        xAxis: xAxis,
        yAxis: yAxis,
        valueYField: "height",
        valueXField: "date",
        tooltip: _amcharts_amcharts5__WEBPACK_IMPORTED_MODULE_21__/* .Tooltip */ .m.new(root, {
          labelText: "{valueY}"
        })
        // curveFactory: d3.curveNatural,
      }));
      series1.set("stroke", _amcharts_amcharts5__WEBPACK_IMPORTED_MODULE_12__/* .color */ .yW("#0000ff"));
      series1.bullets.push(function () {
        return _amcharts_amcharts5__WEBPACK_IMPORTED_MODULE_19__/* .Bullet */ .D.new(root, {
          locationY: 0,
          sprite: _amcharts_amcharts5__WEBPACK_IMPORTED_MODULE_20__/* .Circle */ .j.new(root, {
            radius: 4,
            stroke: root.interfaceColors.get("background"),
            strokeWidth: 2,
            fill: _amcharts_amcharts5__WEBPACK_IMPORTED_MODULE_12__/* .color */ .yW("#0000ff")
          })
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

      xAxis.get("renderer").labels.template.adapters.add("text", function (text, target) {
        var years = timePassed(Math.abs(quasar_src_utils_date_date_js__WEBPACK_IMPORTED_MODULE_1__/* ["default"].extractDate */ .Ay.extractDate(props.child.dateOfBirth, "DD.MM.YYYY.").getTime() - target.dataItem?._settings.value));
        return years; //yearsPassed(value) + " years ago";
      });
      chart.set("scrollbarX", _amcharts_amcharts5__WEBPACK_IMPORTED_MODULE_22__/* .Scrollbar */ .Z.new(root, {
        orientation: "horizontal"
      }));
      // Add legend
      var legend = chart.children.push(_amcharts_amcharts5__WEBPACK_IMPORTED_MODULE_23__/* .Legend */ .s.new(root, {}));
      legend.data.setAll(chart.series.values.filter(e => e._settings.name != "hide"));
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
      goTo
    };
  }
}));
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 1485:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var core_js_modules_es_array_push_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(239);
/* harmony import */ var core_js_modules_es_array_push_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_push_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(1758);
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(8734);
/* harmony import */ var vue_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(455);
/* harmony import */ var quasar_src_utils_date_date_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6246);
/* harmony import */ var quasar_src_composables_use_quasar_use_quasar_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(4907);
/* harmony import */ var _components_detailsComponent_vue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9797);
/* harmony import */ var _components_graphComponent_vue__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2332);
/* harmony import */ var _components_tableComponent_vue__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(7037);
/* harmony import */ var vue_i18n__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(3537);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_components_graphComponent_vue__WEBPACK_IMPORTED_MODULE_3__]);
_components_graphComponent_vue__WEBPACK_IMPORTED_MODULE_3__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];








/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,vue__WEBPACK_IMPORTED_MODULE_5__/* .defineComponent */ .pM)({
  name: "childInformation",
  components: {
    detailsComponent: _components_detailsComponent_vue__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .A,
    graphComponent: _components_graphComponent_vue__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .A,
    tableComponent: _components_tableComponent_vue__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .A
  },
  props: ["selectedChild"],
  setup(props, ctx) {
    const t = (0,vue_i18n__WEBPACK_IMPORTED_MODULE_6__/* .useI18n */ .s9)();
    const {
      locale
    } = (0,vue_i18n__WEBPACK_IMPORTED_MODULE_6__/* .useI18n */ .s9)({
      useScope: "global"
    });
    let router = (0,vue_router__WEBPACK_IMPORTED_MODULE_7__/* .useRouter */ .rd)();
    const $q = (0,quasar_src_composables_use_quasar_use_quasar_js__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .A)();
    const addHeightDialog = (0,vue__WEBPACK_IMPORTED_MODULE_9__/* .ref */ .KR)(false);
    const dateOfMeasurementRef = (0,vue__WEBPACK_IMPORTED_MODULE_9__/* .ref */ .KR)(null);
    const height = (0,vue__WEBPACK_IMPORTED_MODULE_9__/* .ref */ .KR)(null);
    const heightRef = (0,vue__WEBPACK_IMPORTED_MODULE_9__/* .ref */ .KR)(null);
    const dateOfMeasurement = (0,vue__WEBPACK_IMPORTED_MODULE_9__/* .ref */ .KR)(quasar_src_utils_date_date_js__WEBPACK_IMPORTED_MODULE_1__/* ["default"].formatDate */ .Ay.formatDate(Date.now(), "DD.MM.YYYY."));
    const selectedTab = (0,vue__WEBPACK_IMPORTED_MODULE_9__/* .ref */ .KR)("details");
    const myLocaleSrb = {
      /* starting with Sunday */
      days: "Nedelja_Ponedeljak_Utorak_Sreda_Četvrtak_Petak_Subota".split("_"),
      daysShort: "Ned_Pon_Uto_Sre_Čet_Pet_Sub".split("_"),
      months: "Januar_Februar_Mart_April_Maj_Jun_Jul_Avgust_Septembar_Oktobar_Novembar_Decembar".split("_"),
      monthsShort: "Jan_Feb_Mar_Apr_Maj_Jun_Jul_Avg_Sep_Okt_Nov_Dec".split("_"),
      firstDayOfWeek: 1,
      // 0-6, 0 - Sunday, 1 Monday, ...
      format24h: true,
      pluralDay: "i"
    };
    const myLocaleEng = {
      /* starting with Sunday */
      days: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),
      daysShort: "Sun_Mon_Tue_Wed_Thu_Fry_Sat".split("_"),
      months: "January_February_March_April_May_Jun_July_August_September_October_November_December".split("_"),
      monthsShort: "Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"),
      firstDayOfWeek: 1,
      // 0-6, 0 - Sunday, 1 Monday, ...
      format24h: true,
      pluralDay: "i"
    };
    (0,vue__WEBPACK_IMPORTED_MODULE_5__/* .watch */ .wB)(props, newProps => {
      // Bad Trick to refresh am5chart..
      // But it works!
      if (selectedTab.value =  true && props.selectedChild.heightData.length > 0) {
        selectedTab.value = "nonExistentTab";
        setTimeout(() => {
          selectedTab.value = "graph";
        }, 200);
      }
    });
    (0,vue__WEBPACK_IMPORTED_MODULE_5__/* .onMounted */ .sV)(() => {
      if (props.selectedChild == undefined || props.selectedChild.id == undefined) goTo("/myChildren");
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
          position: "top"
        });
        return;
      }
      ctx.emit("add-height", {
        id: props.selectedChild.id,
        date: dateOfMeasurement.value,
        height: height.value
      });
      selectedTab.value = "graph";
      cancel();
    }
    function cancel() {
      height.value = null;
      dateOfMeasurement.value = quasar_src_utils_date_date_js__WEBPACK_IMPORTED_MODULE_1__/* ["default"].formatDate */ .Ay.formatDate(Date.now(), "DD.MM.YYYY.");
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
      removeHeight
    };
  }
}));
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 9797:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  A: () => (/* binding */ detailsComponent)
});

// EXTERNAL MODULE: ./node_modules/@vue/runtime-core/dist/runtime-core.esm-bundler.js
var runtime_core_esm_bundler = __webpack_require__(1758);
// EXTERNAL MODULE: ./node_modules/@vue/shared/dist/shared.esm-bundler.js
var shared_esm_bundler = __webpack_require__(8790);
;// CONCATENATED MODULE: ./node_modules/@quasar/app-webpack/lib/webpack/loader.js.transform-quasar-imports.js!./node_modules/babel-loader/lib/index.js??clonedRuleSet-2.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/@quasar/app-webpack/lib/webpack/loader.vue.auto-import-quasar.js??ruleSet[0].use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[1]!./src/components/detailsComponent.vue?vue&type=template&id=2cc8bd27&scoped=true

const _withScopeId = n => (_pushScopeId("data-v-2cc8bd27"), n = n(), _popScopeId(), n);
const _hoisted_1 = ["src"];
const _hoisted_2 = {
  class: "title"
};
const _hoisted_3 = {
  class: "subtitle",
  style: {
    "margin-bottom": "20px"
  }
};
const _hoisted_4 = {
  class: "row flex justify-between items-center",
  style: {
    "width": "80%"
  }
};
const _hoisted_5 = {
  class: "row flex flex-center"
};
const _hoisted_6 = {
  class: "q-mr-md",
  style: {
    "color": "#000000a0",
    "font-weight": "500"
  }
};
const _hoisted_7 = {
  class: "rightSide"
};
const _hoisted_8 = {
  class: "row flex justify-between items-center",
  style: {
    "width": "80%"
  }
};
const _hoisted_9 = {
  class: "row flex flex-center"
};
const _hoisted_10 = {
  class: "q-mr-md",
  style: {
    "color": "#000000a0",
    "font-weight": "500"
  }
};
const _hoisted_11 = {
  class: "rightSide"
};
const _hoisted_12 = {
  class: "row flex justify-between items-center",
  style: {
    "width": "80%"
  }
};
const _hoisted_13 = {
  class: "row flex flex-center"
};
const _hoisted_14 = {
  class: "q-mr-md",
  style: {
    "color": "#000000a0",
    "font-weight": "500"
  }
};
const _hoisted_15 = {
  class: "rightSide"
};
const _hoisted_16 = {
  class: "row flex justify-between items-center",
  style: {
    "width": "80%"
  }
};
const _hoisted_17 = {
  class: "row flex flex-center"
};
const _hoisted_18 = {
  class: "q-mr-md",
  style: {
    "color": "#000000a0",
    "font-weight": "500"
  }
};
const _hoisted_19 = {
  class: "rightSide"
};
const _hoisted_20 = {
  class: "subtitle2"
};
const _hoisted_21 = {
  key: 2,
  class: "row flex justify-around",
  style: {
    "width": "80%"
  }
};
const _hoisted_22 = {
  class: "q-mr-md rightSide"
};
const _hoisted_23 = {
  class: "rightSide"
};
const _hoisted_24 = {
  class: "column flex items-center q-mt-md",
  style: {
    "width": "80%"
  }
};
const _hoisted_25 = {
  class: "subtitle2"
};
const _hoisted_26 = {
  class: "rightSide"
};
function render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_q_icon = (0,runtime_core_esm_bundler/* resolveComponent */.g2)("q-icon");
  return _ctx.props.child ? ((0,runtime_core_esm_bundler/* openBlock */.uX)(), (0,runtime_core_esm_bundler/* createElementBlock */.CE)("div", {
    key: 0,
    class: "flex flex-center column",
    style: (0,shared_esm_bundler/* normalizeStyle */.Tr)([{
      "background-color": "#ffffffa0",
      "border-radius": "15px",
      "box-shadow": "rgba(0, 0, 0, 0.16) 0px 1px 4px",
      "padding": "0px 0px 25px 0px",
      "margin": "8px 0px"
    }, {
      color: [_ctx.props.child.gender == 'male' ? '#759eff' : '#de60ba']
    }])
  }, [_ctx.props.child.childPhoto ? ((0,runtime_core_esm_bundler/* openBlock */.uX)(), (0,runtime_core_esm_bundler/* createElementBlock */.CE)("img", {
    key: 0,
    style: {
      "width": "100%",
      "border-radius": "15px 15px 0px 0px",
      "height": "calc(100vh - 600px)",
      "object-fit": "cover"
    },
    src: _ctx.props.child.childPhoto
  }, null, 8, _hoisted_1)) : ((0,runtime_core_esm_bundler/* openBlock */.uX)(), (0,runtime_core_esm_bundler/* createBlock */.Wv)(_component_q_icon, {
    key: 1,
    name: "fa-solid fa-baby",
    size: "7em",
    style: {
      "height": "200px"
    }
  })), (0,runtime_core_esm_bundler/* createElementVNode */.Lk)("span", _hoisted_2, (0,shared_esm_bundler/* toDisplayString */.v_)(_ctx.props.child.firstName + " " + _ctx.props.child.lastName), 1), (0,runtime_core_esm_bundler/* createElementVNode */.Lk)("span", _hoisted_3, (0,shared_esm_bundler/* toDisplayString */.v_)(_ctx.props.child.dateOfBirth), 1), (0,runtime_core_esm_bundler/* createElementVNode */.Lk)("div", _hoisted_4, [(0,runtime_core_esm_bundler/* createElementVNode */.Lk)("span", _hoisted_5, [(0,runtime_core_esm_bundler/* createVNode */.bF)(_component_q_icon, {
    size: "1.3em",
    class: "q-ma-sm",
    name: "straighten"
  }), (0,runtime_core_esm_bundler/* createElementVNode */.Lk)("span", _hoisted_6, (0,shared_esm_bundler/* toDisplayString */.v_)(_ctx.$t("general.birthHeightShort")), 1)]), (0,runtime_core_esm_bundler/* createElementVNode */.Lk)("span", _hoisted_7, (0,shared_esm_bundler/* toDisplayString */.v_)(_ctx.props.child.birthHeight) + " cm", 1)]), (0,runtime_core_esm_bundler/* createElementVNode */.Lk)("div", _hoisted_8, [(0,runtime_core_esm_bundler/* createElementVNode */.Lk)("span", _hoisted_9, [(0,runtime_core_esm_bundler/* createVNode */.bF)(_component_q_icon, {
    size: "1.3em",
    class: "q-ma-sm",
    name: "scale"
  }), (0,runtime_core_esm_bundler/* createElementVNode */.Lk)("span", _hoisted_10, (0,shared_esm_bundler/* toDisplayString */.v_)(_ctx.$t("general.birthWeightShort")), 1)]), (0,runtime_core_esm_bundler/* createElementVNode */.Lk)("span", _hoisted_11, (0,shared_esm_bundler/* toDisplayString */.v_)(_ctx.props.child.birthWeight) + " g", 1)]), (0,runtime_core_esm_bundler/* createElementVNode */.Lk)("div", _hoisted_12, [(0,runtime_core_esm_bundler/* createElementVNode */.Lk)("span", _hoisted_13, [(0,runtime_core_esm_bundler/* createVNode */.bF)(_component_q_icon, {
    size: "1.3em",
    class: "q-ma-sm",
    name: "height"
  }), (0,runtime_core_esm_bundler/* createElementVNode */.Lk)("span", _hoisted_14, (0,shared_esm_bundler/* toDisplayString */.v_)(_ctx.$t("general.fathersHeightShort")), 1)]), (0,runtime_core_esm_bundler/* createElementVNode */.Lk)("span", _hoisted_15, (0,shared_esm_bundler/* toDisplayString */.v_)(_ctx.props.child.fathersHeight) + " cm", 1)]), (0,runtime_core_esm_bundler/* createElementVNode */.Lk)("div", _hoisted_16, [(0,runtime_core_esm_bundler/* createElementVNode */.Lk)("span", _hoisted_17, [(0,runtime_core_esm_bundler/* createVNode */.bF)(_component_q_icon, {
    size: "1.3em",
    color: "girl",
    class: "q-ma-sm",
    name: "height"
  }), (0,runtime_core_esm_bundler/* createElementVNode */.Lk)("span", _hoisted_18, (0,shared_esm_bundler/* toDisplayString */.v_)(_ctx.$t("general.mothersHeightShort")), 1)]), (0,runtime_core_esm_bundler/* createElementVNode */.Lk)("span", _hoisted_19, (0,shared_esm_bundler/* toDisplayString */.v_)(_ctx.props.child.mothersHeight) + " cm", 1)]), (0,runtime_core_esm_bundler/* createElementVNode */.Lk)("span", {
    class: "separatorLine",
    style: (0,shared_esm_bundler/* normalizeStyle */.Tr)({
      backgroundColor: [_ctx.props.child.gender == 'male' ? '#759eff' : '#de60ba']
    })
  }, null, 4), (0,runtime_core_esm_bundler/* createElementVNode */.Lk)("span", _hoisted_20, (0,shared_esm_bundler/* toDisplayString */.v_)(_ctx.$t("general.lastMeasurement")), 1), _ctx.props.child.heightData != undefined && _ctx.props.child.heightData.length > 0 ? ((0,runtime_core_esm_bundler/* openBlock */.uX)(), (0,runtime_core_esm_bundler/* createElementBlock */.CE)("div", _hoisted_21, [(0,runtime_core_esm_bundler/* createElementVNode */.Lk)("span", _hoisted_22, (0,shared_esm_bundler/* toDisplayString */.v_)(_ctx.date.formatDate(_ctx.date.extractDate(_ctx.props.child.heightData[_ctx.props.child.heightData.length - 1].date, "YYYY-MM-DD"), "DD.MM.YYYY.")), 1), (0,runtime_core_esm_bundler/* createElementVNode */.Lk)("span", _hoisted_23, (0,shared_esm_bundler/* toDisplayString */.v_)(_ctx.props.child.heightData[_ctx.props.child.heightData.length - 1].height) + " cm", 1)])) : (0,runtime_core_esm_bundler/* createCommentVNode */.Q3)("", true), (0,runtime_core_esm_bundler/* createElementVNode */.Lk)("div", _hoisted_24, [(0,runtime_core_esm_bundler/* createElementVNode */.Lk)("span", _hoisted_25, (0,shared_esm_bundler/* toDisplayString */.v_)(_ctx.$t("general.targetHeight")), 1), (0,runtime_core_esm_bundler/* createElementVNode */.Lk)("span", _hoisted_26, (0,shared_esm_bundler/* toDisplayString */.v_)(_ctx.props.child.childTargetHeight) + " cm", 1)])], 4)) : (0,runtime_core_esm_bundler/* createCommentVNode */.Q3)("", true);
}
;// CONCATENATED MODULE: ./src/components/detailsComponent.vue?vue&type=template&id=2cc8bd27&scoped=true

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.push.js
var es_array_push = __webpack_require__(239);
// EXTERNAL MODULE: ./node_modules/vue-router/dist/vue-router.mjs
var vue_router = __webpack_require__(455);
// EXTERNAL MODULE: ./node_modules/quasar/src/utils/date/date.js
var date = __webpack_require__(6246);
// EXTERNAL MODULE: ./src/components/base64.vue + 4 modules
var base64 = __webpack_require__(8012);
;// CONCATENATED MODULE: ./node_modules/@quasar/app-webpack/lib/webpack/loader.js.transform-quasar-imports.js!./node_modules/babel-loader/lib/index.js??clonedRuleSet-2.use[0]!./node_modules/@quasar/app-webpack/lib/webpack/loader.vue.auto-import-quasar.js??ruleSet[0].use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[1]!./src/components/detailsComponent.vue?vue&type=script&lang=js





/* harmony default export */ const detailsComponentvue_type_script_lang_js = ((0,runtime_core_esm_bundler/* defineComponent */.pM)({
  name: "childCardComponent",
  components: {
    base64: base64/* default */.A
  },
  props: ["child"],
  setup(props) {
    let router = (0,vue_router/* useRouter */.rd)();
    function goTo(path) {
      router.push(path);
    }
    return {
      props,
      date: date/* default */.Ay,
      goTo
    };
  }
}));
;// CONCATENATED MODULE: ./src/components/detailsComponent.vue?vue&type=script&lang=js
 
// EXTERNAL MODULE: ./node_modules/vue-loader/dist/exportHelper.js
var exportHelper = __webpack_require__(2807);
// EXTERNAL MODULE: ./node_modules/quasar/src/components/icon/QIcon.js
var QIcon = __webpack_require__(492);
// EXTERNAL MODULE: ./node_modules/@quasar/app-webpack/lib/webpack/runtime.auto-import.js
var runtime_auto_import = __webpack_require__(8582);
var runtime_auto_import_default = /*#__PURE__*/__webpack_require__.n(runtime_auto_import);
;// CONCATENATED MODULE: ./src/components/detailsComponent.vue




;


const __exports__ = /*#__PURE__*/(0,exportHelper/* default */.A)(detailsComponentvue_type_script_lang_js, [['render',render],['__scopeId',"data-v-2cc8bd27"]])

/* harmony default export */ const detailsComponent = (__exports__);
;

runtime_auto_import_default()(detailsComponentvue_type_script_lang_js, 'components', {QIcon: QIcon/* default */.A});


/***/ }),

/***/ 2332:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _graphComponent_vue_vue_type_template_id_818341c6_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2594);
/* harmony import */ var _graphComponent_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3105);
/* harmony import */ var _node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2807);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_graphComponent_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__]);
_graphComponent_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];




;


const __exports__ = /*#__PURE__*/(0,_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .A)(_graphComponent_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A, [['render',_graphComponent_vue_vue_type_template_id_818341c6_scoped_true__WEBPACK_IMPORTED_MODULE_0__/* .render */ .X],['__scopeId',"data-v-818341c6"]])

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 7037:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  A: () => (/* binding */ tableComponent)
});

// EXTERNAL MODULE: ./node_modules/@vue/runtime-core/dist/runtime-core.esm-bundler.js
var runtime_core_esm_bundler = __webpack_require__(1758);
// EXTERNAL MODULE: ./node_modules/@vue/shared/dist/shared.esm-bundler.js
var shared_esm_bundler = __webpack_require__(8790);
;// CONCATENATED MODULE: ./node_modules/@quasar/app-webpack/lib/webpack/loader.js.transform-quasar-imports.js!./node_modules/babel-loader/lib/index.js??clonedRuleSet-2.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/@quasar/app-webpack/lib/webpack/loader.vue.auto-import-quasar.js??ruleSet[0].use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[1]!./src/components/tableComponent.vue?vue&type=template&id=6a71dc92&scoped=true

const _withScopeId = n => ((0,runtime_core_esm_bundler/* pushScopeId */.Qi)("data-v-6a71dc92"), n = n(), (0,runtime_core_esm_bundler/* popScopeId */.jt)(), n);
const _hoisted_1 = {
  style: {
    "font-size": "12pt"
  }
};
const _hoisted_2 = {
  style: {
    "font-size": "15pt",
    "font-weight": "600"
  }
};
const _hoisted_3 = /*#__PURE__*/_withScopeId(() => /*#__PURE__*/(0,runtime_core_esm_bundler/* createElementVNode */.Lk)("br", null, null, -1));
const _hoisted_4 = {
  class: "row q-mb-lg",
  style: {
    "width": "90%"
  }
};
function render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_q_btn = (0,runtime_core_esm_bundler/* resolveComponent */.g2)("q-btn");
  const _component_q_td = (0,runtime_core_esm_bundler/* resolveComponent */.g2)("q-td");
  const _component_q_table = (0,runtime_core_esm_bundler/* resolveComponent */.g2)("q-table");
  const _component_q_card_section = (0,runtime_core_esm_bundler/* resolveComponent */.g2)("q-card-section");
  const _component_q_card = (0,runtime_core_esm_bundler/* resolveComponent */.g2)("q-card");
  const _component_q_dialog = (0,runtime_core_esm_bundler/* resolveComponent */.g2)("q-dialog");
  const _directive_close_popup = (0,runtime_core_esm_bundler/* resolveDirective */.gN)("close-popup");
  return _ctx.props.child ? ((0,runtime_core_esm_bundler/* openBlock */.uX)(), (0,runtime_core_esm_bundler/* createElementBlock */.CE)("div", {
    key: 0,
    class: "flex flex-center column",
    style: (0,shared_esm_bundler/* normalizeStyle */.Tr)([{
      "background-color": "#ffffffa0",
      "border-radius": "15px",
      "box-shadow": "rgba(0, 0, 0, 0.16) 0px 1px 4px",
      "margin": "8px 0px"
    }, {
      color: [_ctx.props.child.gender == 'male' ? '#759eff' : '#de60ba']
    }])
  }, [(0,runtime_core_esm_bundler/* createVNode */.bF)(_component_q_table, {
    style: {
      "height": "calc(100vh - 195px)"
    },
    rows: _ctx.rows,
    columns: _ctx.columns,
    "row-key": "name",
    "no-results-label": _ctx.$t('general.noResults')
  }, {
    "body-cell-action": (0,runtime_core_esm_bundler/* withCtx */.k6)(props => [(0,runtime_core_esm_bundler/* createVNode */.bF)(_component_q_td, {
      key: "action",
      props: props
    }, {
      default: (0,runtime_core_esm_bundler/* withCtx */.k6)(() => [(0,runtime_core_esm_bundler/* createVNode */.bF)(_component_q_btn, {
        icon: "delete",
        disabled: props.row.id == 'childTargetHeight',
        push: "",
        class: "text-white bg-negative q-ml-sm col",
        round: "",
        onClick: $event => _ctx.removeHeight1(props.row)
      }, null, 8, ["disabled", "onClick"])]),
      _: 2
    }, 1032, ["props"])]),
    _: 1
  }, 8, ["rows", "columns", "no-results-label"]), (0,runtime_core_esm_bundler/* createVNode */.bF)(_component_q_dialog, {
    modelValue: _ctx.areYouSure,
    "onUpdate:modelValue": _cache[1] || (_cache[1] = $event => _ctx.areYouSure = $event)
  }, {
    default: (0,runtime_core_esm_bundler/* withCtx */.k6)(() => [(0,runtime_core_esm_bundler/* createVNode */.bF)(_component_q_card, {
      class: "flex flex-center"
    }, {
      default: (0,runtime_core_esm_bundler/* withCtx */.k6)(() => [(0,runtime_core_esm_bundler/* createVNode */.bF)(_component_q_card_section, {
        class: "row flex flex-center q-pb-none text-center q-mb-xl"
      }, {
        default: (0,runtime_core_esm_bundler/* withCtx */.k6)(() => [(0,runtime_core_esm_bundler/* createElementVNode */.Lk)("span", _hoisted_1, (0,shared_esm_bundler/* toDisplayString */.v_)(_ctx.$t("general.areYouSureDeleteMeasurement")), 1), (0,runtime_core_esm_bundler/* createElementVNode */.Lk)("span", _hoisted_2, [(0,runtime_core_esm_bundler/* createTextVNode */.eW)((0,shared_esm_bundler/* toDisplayString */.v_)(_ctx.date.formatDate(_ctx.date.extractDate(_ctx.selectedHeight.data.date, "YYYY-MM-DD"), "DD.MM.YYYY.")) + " ", 1), _hoisted_3, (0,runtime_core_esm_bundler/* createTextVNode */.eW)(" " + (0,shared_esm_bundler/* toDisplayString */.v_)(_ctx.selectedHeight.data.height + " cm"), 1)])]),
        _: 1
      }), (0,runtime_core_esm_bundler/* createElementVNode */.Lk)("span", _hoisted_4, [(0,runtime_core_esm_bundler/* withDirectives */.bo)((0,runtime_core_esm_bundler/* createVNode */.bF)(_component_q_btn, {
        push: "",
        class: "text-white bg-negative q-mr-sm col",
        label: "Da",
        onClick: _cache[0] || (_cache[0] = $event => _ctx.removeHeight())
      }, null, 512), [[_directive_close_popup]]), (0,runtime_core_esm_bundler/* createVNode */.bF)(_component_q_btn, {
        push: "",
        class: "text-white bg-positive q-ml-sm col",
        label: "Ne",
        onClick: _ctx.cancel
      }, null, 8, ["onClick"])])]),
      _: 1
    })]),
    _: 1
  }, 8, ["modelValue"])], 4)) : (0,runtime_core_esm_bundler/* createCommentVNode */.Q3)("", true);
}
;// CONCATENATED MODULE: ./src/components/tableComponent.vue?vue&type=template&id=6a71dc92&scoped=true

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.push.js
var es_array_push = __webpack_require__(239);
// EXTERNAL MODULE: ./node_modules/@vue/reactivity/dist/reactivity.esm-bundler.js
var reactivity_esm_bundler = __webpack_require__(8734);
// EXTERNAL MODULE: ./node_modules/vue-router/dist/vue-router.mjs
var vue_router = __webpack_require__(455);
// EXTERNAL MODULE: ./src/components/base64.vue + 4 modules
var base64 = __webpack_require__(8012);
// EXTERNAL MODULE: ./node_modules/quasar/src/utils/date/date.js
var date = __webpack_require__(6246);
// EXTERNAL MODULE: ./node_modules/vue-i18n/dist/vue-i18n.mjs + 3 modules
var vue_i18n = __webpack_require__(3537);
;// CONCATENATED MODULE: ./node_modules/@quasar/app-webpack/lib/webpack/loader.js.transform-quasar-imports.js!./node_modules/babel-loader/lib/index.js??clonedRuleSet-2.use[0]!./node_modules/@quasar/app-webpack/lib/webpack/loader.vue.auto-import-quasar.js??ruleSet[0].use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[1]!./src/components/tableComponent.vue?vue&type=script&lang=js






/* harmony default export */ const tableComponentvue_type_script_lang_js = ((0,runtime_core_esm_bundler/* defineComponent */.pM)({
  name: "tableComponent",
  components: {
    base64: base64/* default */.A
  },
  props: ["child"],
  setup(props, ctx) {
    const t = (0,vue_i18n/* useI18n */.s9)();
    let router = (0,vue_router/* useRouter */.rd)();
    let areYouSure = (0,reactivity_esm_bundler/* ref */.KR)(false);
    let selectedHeight = (0,reactivity_esm_bundler/* ref */.KR)(false);
    const columns = [{
      name: "height",
      align: "center",
      label: t.t("general.heightShortCM"),
      field: "height",
      sortable: false
    }, {
      name: "age",
      align: "center",
      label: t.t("general.age"),
      field: "age",
      sortable: false
    }, {
      name: "date",
      align: "center",
      label: t.t("general.dateLabel"),
      field: "date",
      sortable: false
    }, {
      name: "action",
      align: "center",
      label: t.t("general.action"),
      field: "action",
      sortable: false
    }];
    (0,runtime_core_esm_bundler/* watch */.wB)(props, newProps => {
      rows.value = newProps.child.heightData.map(e => {
        var age = "";
        if (date/* default.getDateDiff */.Ay.getDateDiff(date/* default.extractDate */.Ay.extractDate(e.date, "YYYY-MM-DD"), date/* default.extractDate */.Ay.extractDate(props.child.dateOfBirth, "DD.MM.YYYY."), "years") != 0) age = age + date/* default.getDateDiff */.Ay.getDateDiff(date/* default.extractDate */.Ay.extractDate(e.date, "YYYY-MM-DD"), date/* default.extractDate */.Ay.extractDate(props.child.dateOfBirth, "DD.MM.YYYY."), "years") + " " + t.t("general.yearShort") + "";
        if (date/* default.getDateDiff */.Ay.getDateDiff(date/* default.extractDate */.Ay.extractDate(e.date, "YYYY-MM-DD"), date/* default.extractDate */.Ay.extractDate(props.child.dateOfBirth, "DD.MM.YYYY."), "months") != 0) age = age + (age == "" ? "" : ", ") + (date/* default.getDateDiff */.Ay.getDateDiff(date/* default.extractDate */.Ay.extractDate(e.date, "YYYY-MM-DD"), date/* default.extractDate */.Ay.extractDate(props.child.dateOfBirth, "DD.MM.YYYY."), "months") - 12 * date/* default.getDateDiff */.Ay.getDateDiff(date/* default.extractDate */.Ay.extractDate(e.date, "YYYY-MM-DD"), date/* default.extractDate */.Ay.extractDate(props.child.dateOfBirth, "DD.MM.YYYY."), "years")) + " " + t.t("general.monthShort") + "";
        if (date/* default.getDateDiff */.Ay.getDateDiff(date/* default.extractDate */.Ay.extractDate(e.date, "YYYY-MM-DD"), date/* default.extractDate */.Ay.extractDate(props.child.dateOfBirth, "DD.MM.YYYY."), "years") == 0 && (date/* default.getDateDiff */.Ay.getDateDiff(date/* default.extractDate */.Ay.extractDate(e.date, "YYYY-MM-DD"), date/* default.extractDate */.Ay.extractDate(props.child.dateOfBirth, "DD.MM.YYYY."), "months") == 0 || date/* default.getDateDiff */.Ay.getDateDiff(date/* default.extractDate */.Ay.extractDate(e.date, "YYYY-MM-DD"), date/* default.extractDate */.Ay.extractDate(props.child.dateOfBirth, "DD.MM.YYYY."), "months") == 1 && date/* default.getDateDiff */.Ay.getDateDiff(date/* default.extractDate */.Ay.extractDate(e.date, "YYYY-MM-DD"), date/* default.extractDate */.Ay.extractDate(props.child.dateOfBirth, "DD.MM.YYYY."), "days") <= 31)) age = date/* default.getDateDiff */.Ay.getDateDiff(date/* default.extractDate */.Ay.extractDate(e.date, "YYYY-MM-DD"), date/* default.extractDate */.Ay.extractDate(props.child.dateOfBirth, "DD.MM.YYYY."), "days") + " " + t.t("general.dayShort") + "";
        return {
          id: e.id || "",
          height: e.height,
          age: age,
          date: date/* default.formatDate */.Ay.formatDate(date/* default.extractDate */.Ay.extractDate(e.date, "YYYY-MM-DD"), "DD.MM.YYYY.")
        };
      });
      rows.value.sort((a, b) => {
        return date/* default.extractDate */.Ay.extractDate(a.date, "DD.MM.YYYY.").getTime() - date/* default.extractDate */.Ay.extractDate(b.date, "DD.MM.YYYY.").getTime() > 0 ? -1 : 1;
      });
    });
    const rows = (0,reactivity_esm_bundler/* ref */.KR)([]);
    (0,runtime_core_esm_bundler/* onMounted */.sV)(() => {
      console.log(props.child);
      rows.value = props.child.heightData.map(e => {
        var age = "";
        if (date/* default.getDateDiff */.Ay.getDateDiff(date/* default.extractDate */.Ay.extractDate(e.date, "YYYY-MM-DD"), date/* default.extractDate */.Ay.extractDate(props.child.dateOfBirth, "DD.MM.YYYY."), "years") != 0) age = age + date/* default.getDateDiff */.Ay.getDateDiff(date/* default.extractDate */.Ay.extractDate(e.date, "YYYY-MM-DD"), date/* default.extractDate */.Ay.extractDate(props.child.dateOfBirth, "DD.MM.YYYY."), "years") + " " + t.t("general.yearShort") + "";
        if (date/* default.getDateDiff */.Ay.getDateDiff(date/* default.extractDate */.Ay.extractDate(e.date, "YYYY-MM-DD"), date/* default.extractDate */.Ay.extractDate(props.child.dateOfBirth, "DD.MM.YYYY."), "months") != 0) age = age + (age == "" ? "" : ", ") + (date/* default.getDateDiff */.Ay.getDateDiff(date/* default.extractDate */.Ay.extractDate(e.date, "YYYY-MM-DD"), date/* default.extractDate */.Ay.extractDate(props.child.dateOfBirth, "DD.MM.YYYY."), "months") - 12 * date/* default.getDateDiff */.Ay.getDateDiff(date/* default.extractDate */.Ay.extractDate(e.date, "YYYY-MM-DD"), date/* default.extractDate */.Ay.extractDate(props.child.dateOfBirth, "DD.MM.YYYY."), "years")) + " " + t.t("general.monthShort") + "";
        if (date/* default.getDateDiff */.Ay.getDateDiff(date/* default.extractDate */.Ay.extractDate(e.date, "YYYY-MM-DD"), date/* default.extractDate */.Ay.extractDate(props.child.dateOfBirth, "DD.MM.YYYY."), "years") == 0 && (date/* default.getDateDiff */.Ay.getDateDiff(date/* default.extractDate */.Ay.extractDate(e.date, "YYYY-MM-DD"), date/* default.extractDate */.Ay.extractDate(props.child.dateOfBirth, "DD.MM.YYYY."), "months") == 0 || date/* default.getDateDiff */.Ay.getDateDiff(date/* default.extractDate */.Ay.extractDate(e.date, "YYYY-MM-DD"), date/* default.extractDate */.Ay.extractDate(props.child.dateOfBirth, "DD.MM.YYYY."), "months") == 1 && date/* default.getDateDiff */.Ay.getDateDiff(date/* default.extractDate */.Ay.extractDate(e.date, "YYYY-MM-DD"), date/* default.extractDate */.Ay.extractDate(props.child.dateOfBirth, "DD.MM.YYYY."), "days") <= 31)) age = date/* default.getDateDiff */.Ay.getDateDiff(date/* default.extractDate */.Ay.extractDate(e.date, "YYYY-MM-DD"), date/* default.extractDate */.Ay.extractDate(props.child.dateOfBirth, "DD.MM.YYYY."), "days") + " " + t.t("general.dayShort") + "";
        return {
          id: e.id || "",
          height: e.height,
          age: age,
          date: date/* default.formatDate */.Ay.formatDate(date/* default.extractDate */.Ay.extractDate(e.date, "YYYY-MM-DD"), "DD.MM.YYYY.")
        };
      });
      rows.value.sort((a, b) => {
        return date/* default.extractDate */.Ay.extractDate(a.date, "DD.MM.YYYY.").getTime() - date/* default.extractDate */.Ay.extractDate(b.date, "DD.MM.YYYY.").getTime() > 0 ? -1 : 1;
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
          date: date/* default.formatDate */.Ay.formatDate(date/* default.extractDate */.Ay.extractDate(data.date, "DD.MM.YYYY."), "YYYY-MM-DD"),
          height: data.height
        }
      };
      selectedHeight.value = tmp;
    }
    return {
      props,
      columns,
      rows,
      areYouSure,
      selectedHeight,
      date: date/* default */.Ay,
      goTo,
      removeHeight1,
      removeHeight,
      cancel
    };
  }
}));
;// CONCATENATED MODULE: ./src/components/tableComponent.vue?vue&type=script&lang=js
 
// EXTERNAL MODULE: ./node_modules/vue-loader/dist/exportHelper.js
var exportHelper = __webpack_require__(2807);
// EXTERNAL MODULE: ./node_modules/quasar/src/components/table/QTable.js + 18 modules
var QTable = __webpack_require__(8199);
// EXTERNAL MODULE: ./node_modules/quasar/src/components/table/QTd.js
var QTd = __webpack_require__(5262);
// EXTERNAL MODULE: ./node_modules/quasar/src/components/btn/QBtn.js
var QBtn = __webpack_require__(6384);
// EXTERNAL MODULE: ./node_modules/quasar/src/components/dialog/QDialog.js + 3 modules
var QDialog = __webpack_require__(558);
// EXTERNAL MODULE: ./node_modules/quasar/src/components/card/QCard.js
var QCard = __webpack_require__(3316);
// EXTERNAL MODULE: ./node_modules/quasar/src/components/card/QCardSection.js
var QCardSection = __webpack_require__(4189);
// EXTERNAL MODULE: ./node_modules/quasar/src/directives/close-popup/ClosePopup.js
var ClosePopup = __webpack_require__(8672);
// EXTERNAL MODULE: ./node_modules/@quasar/app-webpack/lib/webpack/runtime.auto-import.js
var runtime_auto_import = __webpack_require__(8582);
var runtime_auto_import_default = /*#__PURE__*/__webpack_require__.n(runtime_auto_import);
;// CONCATENATED MODULE: ./src/components/tableComponent.vue




;


const __exports__ = /*#__PURE__*/(0,exportHelper/* default */.A)(tableComponentvue_type_script_lang_js, [['render',render],['__scopeId',"data-v-6a71dc92"]])

/* harmony default export */ const tableComponent = (__exports__);
;






runtime_auto_import_default()(tableComponentvue_type_script_lang_js, 'components', {QTable: QTable/* default */.A,QTd: QTd/* default */.A,QBtn: QBtn/* default */.A,QDialog: QDialog/* default */.A,QCard: QCard/* default */.A,QCardSection: QCardSection/* default */.A});runtime_auto_import_default()(tableComponentvue_type_script_lang_js, 'directives', {ClosePopup: ClosePopup/* default */.A});


/***/ }),

/***/ 1977:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _childInformation_vue_vue_type_template_id_2e046d5d__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8952);
/* harmony import */ var _childInformation_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3503);
/* harmony import */ var _node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2807);
/* harmony import */ var quasar_src_components_page_QPage_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(7716);
/* harmony import */ var quasar_src_components_toolbar_QToolbar_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6914);
/* harmony import */ var quasar_src_components_btn_QBtn_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(6384);
/* harmony import */ var quasar_src_components_toolbar_QToolbarTitle_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(9150);
/* harmony import */ var quasar_src_components_tabs_QTabs_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(2980);
/* harmony import */ var quasar_src_components_tabs_QTab_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(327);
/* harmony import */ var quasar_src_components_separator_QSeparator_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(386);
/* harmony import */ var quasar_src_components_tab_panels_QTabPanels_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(9041);
/* harmony import */ var quasar_src_components_tab_panels_QTabPanel_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(1746);
/* harmony import */ var quasar_src_components_dialog_QDialog_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(558);
/* harmony import */ var quasar_src_components_card_QCard_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(3316);
/* harmony import */ var quasar_src_components_card_QCardSection_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(4189);
/* harmony import */ var quasar_src_components_space_QSpace_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(3676);
/* harmony import */ var quasar_src_components_input_QInput_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(9270);
/* harmony import */ var quasar_src_components_icon_QIcon_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(492);
/* harmony import */ var quasar_src_components_popup_proxy_QPopupProxy_js__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(8975);
/* harmony import */ var quasar_src_components_date_QDate_js__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(8670);
/* harmony import */ var quasar_src_directives_close_popup_ClosePopup_js__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(8672);
/* harmony import */ var _node_modules_quasar_app_webpack_lib_webpack_runtime_auto_import_js__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(8582);
/* harmony import */ var _node_modules_quasar_app_webpack_lib_webpack_runtime_auto_import_js__WEBPACK_IMPORTED_MODULE_21___default = /*#__PURE__*/__webpack_require__.n(_node_modules_quasar_app_webpack_lib_webpack_runtime_auto_import_js__WEBPACK_IMPORTED_MODULE_21__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_childInformation_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__]);
_childInformation_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];




;


const __exports__ = /*#__PURE__*/(0,_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .A)(_childInformation_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A, [['render',_childInformation_vue_vue_type_template_id_2e046d5d__WEBPACK_IMPORTED_MODULE_0__/* .render */ .X]])

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);
;

















_node_modules_quasar_app_webpack_lib_webpack_runtime_auto_import_js__WEBPACK_IMPORTED_MODULE_21___default()(_childInformation_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A, 'components', {QPage: quasar_src_components_page_QPage_js__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .A,QToolbar: quasar_src_components_toolbar_QToolbar_js__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .A,QBtn: quasar_src_components_btn_QBtn_js__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .A,QToolbarTitle: quasar_src_components_toolbar_QToolbarTitle_js__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .A,QTabs: quasar_src_components_tabs_QTabs_js__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .A,QTab: quasar_src_components_tabs_QTab_js__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .A,QSeparator: quasar_src_components_separator_QSeparator_js__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .A,QTabPanels: quasar_src_components_tab_panels_QTabPanels_js__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .A,QTabPanel: quasar_src_components_tab_panels_QTabPanel_js__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .A,QDialog: quasar_src_components_dialog_QDialog_js__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .A,QCard: quasar_src_components_card_QCard_js__WEBPACK_IMPORTED_MODULE_13__/* ["default"] */ .A,QCardSection: quasar_src_components_card_QCardSection_js__WEBPACK_IMPORTED_MODULE_14__/* ["default"] */ .A,QSpace: quasar_src_components_space_QSpace_js__WEBPACK_IMPORTED_MODULE_15__/* ["default"] */ .A,QInput: quasar_src_components_input_QInput_js__WEBPACK_IMPORTED_MODULE_16__/* ["default"] */ .A,QIcon: quasar_src_components_icon_QIcon_js__WEBPACK_IMPORTED_MODULE_17__/* ["default"] */ .A,QPopupProxy: quasar_src_components_popup_proxy_QPopupProxy_js__WEBPACK_IMPORTED_MODULE_18__/* ["default"] */ .A,QDate: quasar_src_components_date_QDate_js__WEBPACK_IMPORTED_MODULE_19__/* ["default"] */ .A});_node_modules_quasar_app_webpack_lib_webpack_runtime_auto_import_js__WEBPACK_IMPORTED_MODULE_21___default()(_childInformation_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A, 'directives', {ClosePopup: quasar_src_directives_close_popup_ClosePopup_js__WEBPACK_IMPORTED_MODULE_20__/* ["default"] */ .A});

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 975:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  A: () => (/* binding */ scripts_averageHeight)
});

;// CONCATENATED MODULE: ./node_modules/@quasar/app-webpack/lib/webpack/loader.js.transform-quasar-imports.js!./node_modules/babel-loader/lib/index.js??clonedRuleSet-2.use[0]!./node_modules/@quasar/app-webpack/lib/webpack/loader.vue.auto-import-quasar.js??ruleSet[0].use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[1]!./src/scripts/averageHeight.vue?vue&type=script&lang=js
const averageHeight = function (podaci) {
  const data = {
    girls: [{
      age: 0,
      height: 49.1477,
      deviation: 1.86300000000001
    }, {
      age: 1,
      height: 53.6326,
      deviation: 1.953
    }, {
      age: 2,
      height: 56.9805,
      deviation: 2.034
    }, {
      age: 3,
      height: 59.6952,
      deviation: 2.102
    }, {
      age: 4,
      height: 61.9686,
      deviation: 2.161
    }, {
      age: 5,
      height: 63.9,
      deviation: 2.213
    }, {
      age: 6,
      height: 65.5911,
      deviation: 2.26199999999999
    }, {
      age: 7,
      height: 67.1355,
      deviation: 2.31099999999999
    }, {
      age: 8,
      height: 68.5855,
      deviation: 2.36
    }, {
      age: 9,
      height: 69.9666,
      deviation: 2.40899999999999
    }, {
      age: 10,
      height: 71.2926,
      deviation: 2.46100000000001
    }, {
      age: 11,
      height: 72.5702,
      deviation: 2.51199999999999
    }, {
      age: 12,
      height: 73.8034,
      deviation: 2.565
    }, {
      age: 13,
      height: 74.9959,
      deviation: 2.61999999999999
    }, {
      age: 14,
      height: 76.1504,
      deviation: 2.673
    }, {
      age: 15,
      height: 77.2695,
      deviation: 2.72799999999999
    }, {
      age: 16,
      height: 78.3563,
      deviation: 2.78099999999999
    }, {
      age: 17,
      height: 79.4134,
      deviation: 2.83499999999999
    }, {
      age: 18,
      height: 80.4423,
      deviation: 2.889
    }, {
      age: 19,
      height: 81.4448,
      deviation: 2.94399999999999
    }, {
      age: 20,
      height: 82.4228,
      deviation: 2.997
    }, {
      age: 21,
      height: 83.3775,
      deviation: 3.051
    }, {
      age: 22,
      height: 84.3096,
      deviation: 3.104
    }, {
      age: 23,
      height: 85.2197,
      deviation: 3.157
    }, {
      age: 24,
      height: 86.1089,
      deviation: 3.20899999999999
    }, {
      age: 25,
      height: 86.2782,
      deviation: 3.259
    }, {
      age: 26,
      height: 87.1286,
      deviation: 3.31100000000001
    }, {
      age: 27,
      height: 87.9605,
      deviation: 3.36
    }, {
      age: 28,
      height: 88.7737,
      deviation: 3.41200000000001
    }, {
      age: 29,
      height: 89.5684,
      deviation: 3.461
    }, {
      age: 30,
      height: 90.3453,
      deviation: 3.509
    }, {
      age: 31,
      height: 91.105,
      deviation: 3.557
    }, {
      age: 32,
      height: 91.8486,
      deviation: 3.605
    }, {
      age: 33,
      height: 92.5777,
      deviation: 3.651
    }, {
      age: 34,
      height: 93.2938,
      deviation: 3.696
    }, {
      age: 35,
      height: 93.998,
      deviation: 3.741
    }, {
      age: 36,
      height: 94.6914,
      deviation: 3.78400000000001
    }, {
      age: 37,
      height: 95.375,
      deviation: 3.82899999999999
    }, {
      age: 38,
      height: 96.0491,
      deviation: 3.873
    }, {
      age: 39,
      height: 96.7141,
      deviation: 3.91499999999999
    }, {
      age: 40,
      height: 97.3704,
      deviation: 3.95700000000001
    }, {
      age: 41,
      height: 98.0182,
      deviation: 3.999
    }, {
      age: 42,
      height: 98.6575,
      deviation: 4.041
    }, {
      age: 43,
      height: 99.2882,
      deviation: 4.08199999999999
    }, {
      age: 44,
      height: 99.9107,
      deviation: 4.12300000000001
    }, {
      age: 45,
      height: 100.525,
      deviation: 4.16200000000001
    }, {
      age: 46,
      height: 101.1313,
      deviation: 4.202
    }, {
      age: 47,
      height: 101.7299,
      deviation: 4.241
    }, {
      age: 48,
      height: 102.3212,
      deviation: 4.28
    }, {
      age: 49,
      height: 102.9059,
      deviation: 4.319
    }, {
      age: 50,
      height: 103.4842,
      deviation: 4.35599999999999
    }, {
      age: 51,
      height: 104.0565,
      deviation: 4.395
    }, {
      age: 52,
      height: 104.6233,
      deviation: 4.43300000000001
    }, {
      age: 53,
      height: 105.1846,
      deviation: 4.471
    }, {
      age: 54,
      height: 105.7406,
      deviation: 4.50700000000001
    }, {
      age: 55,
      height: 106.2915,
      deviation: 4.544
    }, {
      age: 56,
      height: 106.8371,
      deviation: 4.58
    }, {
      age: 57,
      height: 107.3775,
      deviation: 4.618
    }, {
      age: 58,
      height: 107.9127,
      deviation: 4.65299999999999
    }, {
      age: 59,
      height: 108.4427,
      deviation: 4.68899999999999
    }, {
      age: 60,
      height: 108.9678,
      deviation: 4.72500000000001
    }, {
      age: 61,
      height: 109.488,
      deviation: 4.761
    }, {
      age: 62,
      height: 110.1258,
      deviation: 4.8059
    }, {
      age: 63,
      height: 110.6451,
      deviation: 4.8385
    }, {
      age: 64,
      height: 111.1596,
      deviation: 4.871
    }, {
      age: 65,
      height: 111.6696,
      deviation: 4.9023
    }, {
      age: 66,
      height: 112.1753,
      deviation: 4.9346
    }, {
      age: 67,
      height: 112.6767,
      deviation: 4.9657
    }, {
      age: 68,
      height: 113.174,
      deviation: 4.9966
    }, {
      age: 69,
      height: 113.6672,
      deviation: 5.0275
    }, {
      age: 70,
      height: 114.1565,
      deviation: 5.0583
    }, {
      age: 71,
      height: 114.6421,
      deviation: 5.089
    }, {
      age: 72,
      height: 115.1244,
      deviation: 5.1196
    }, {
      age: 73,
      height: 115.6039,
      deviation: 5.149
    }, {
      age: 74,
      height: 116.0812,
      deviation: 5.1784
    }, {
      age: 75,
      height: 116.5568,
      deviation: 5.2089
    }, {
      age: 76,
      height: 117.0311,
      deviation: 5.2371
    }, {
      age: 77,
      height: 117.5044,
      deviation: 5.2665
    }, {
      age: 78,
      height: 117.9769,
      deviation: 5.296
    }, {
      age: 79,
      height: 118.4489,
      deviation: 5.3243
    }, {
      age: 80,
      height: 118.9208,
      deviation: 5.3538
    }, {
      age: 81,
      height: 119.3926,
      deviation: 5.3822
    }, {
      age: 82,
      height: 119.8648,
      deviation: 5.4107
    }, {
      age: 83,
      height: 120.3374,
      deviation: 5.4393
    }, {
      age: 84,
      height: 120.8105,
      deviation: 5.4667
    }, {
      age: 85,
      height: 121.2843,
      deviation: 5.4954
    }, {
      age: 86,
      height: 121.7587,
      deviation: 5.523
    }, {
      age: 87,
      height: 122.2338,
      deviation: 5.5519
    }, {
      age: 88,
      height: 122.7098,
      deviation: 5.5796
    }, {
      age: 89,
      height: 123.1868,
      deviation: 5.6062
    }, {
      age: 90,
      height: 123.6646,
      deviation: 5.6342
    }, {
      age: 91,
      height: 124.1435,
      deviation: 5.6622
    }, {
      age: 92,
      height: 124.6234,
      deviation: 5.6891
    }, {
      age: 93,
      height: 125.1045,
      deviation: 5.716
    }, {
      age: 94,
      height: 125.5869,
      deviation: 5.7431
    }, {
      age: 95,
      height: 126.0706,
      deviation: 5.7703
    }, {
      age: 96,
      height: 126.5558,
      deviation: 5.7975
    }, {
      age: 97,
      height: 127.0424,
      deviation: 5.8249
    }, {
      age: 98,
      height: 127.5304,
      deviation: 5.8511
    }, {
      age: 99,
      height: 128.0199,
      deviation: 5.8774
    }, {
      age: 100,
      height: 128.5109,
      deviation: 5.9038
    }, {
      age: 101,
      height: 129.0035,
      deviation: 5.9303
    }, {
      age: 102,
      height: 129.4975,
      deviation: 5.9569
    }, {
      age: 103,
      height: 129.9932,
      deviation: 5.9823
    }, {
      age: 104,
      height: 130.4904,
      deviation: 6.0078
    }, {
      age: 105,
      height: 130.9891,
      deviation: 6.0347
    }, {
      age: 106,
      height: 131.4895,
      deviation: 6.059
    }, {
      age: 107,
      height: 131.9912,
      deviation: 6.0848
    }, {
      age: 108,
      height: 132.4944,
      deviation: 6.1106
    }, {
      age: 109,
      height: 132.9989,
      deviation: 6.1352
    }, {
      age: 110,
      height: 133.5046,
      deviation: 6.1599
    }, {
      age: 111,
      height: 134.0118,
      deviation: 6.1846
    }, {
      age: 112,
      height: 134.5202,
      deviation: 6.2095
    }, {
      age: 113,
      height: 135.0299,
      deviation: 6.233
    }, {
      age: 114,
      height: 135.541,
      deviation: 6.2579
    }, {
      age: 115,
      height: 136.0533,
      deviation: 6.2816
    }, {
      age: 116,
      height: 136.567,
      deviation: 6.3039
    }, {
      age: 117,
      height: 137.0821,
      deviation: 6.3277
    }, {
      age: 118,
      height: 137.5987,
      deviation: 6.3516
    }, {
      age: 119,
      height: 138.1167,
      deviation: 6.3741
    }, {
      age: 120,
      height: 138.6363,
      deviation: 6.3967
    }, {
      age: 121,
      height: 139.1575,
      deviation: 6.4179
    }, {
      age: 122,
      height: 139.6803,
      deviation: 6.4407
    }, {
      age: 123,
      height: 140.2049,
      deviation: 6.462
    }, {
      age: 124,
      height: 140.7313,
      deviation: 6.4835
    }, {
      age: 125,
      height: 141.2594,
      deviation: 6.505
    }, {
      age: 126,
      height: 141.7892,
      deviation: 6.5266
    }, {
      age: 127,
      height: 142.3206,
      deviation: 6.5467
    }, {
      age: 128,
      height: 142.8534,
      deviation: 6.567
    }, {
      age: 129,
      height: 143.3874,
      deviation: 6.5872
    }, {
      age: 130,
      height: 143.9222,
      deviation: 6.6075
    }, {
      age: 131,
      height: 144.4575,
      deviation: 6.6277
    }, {
      age: 132,
      height: 144.9929,
      deviation: 6.6465
    }, {
      age: 133,
      height: 145.528,
      deviation: 6.6652
    }, {
      age: 134,
      height: 146.0622,
      deviation: 6.6838
    }, {
      age: 135,
      height: 146.5951,
      deviation: 6.7009
    }, {
      age: 136,
      height: 147.1262,
      deviation: 6.7193
    }, {
      age: 137,
      height: 147.6548,
      deviation: 6.736
    }, {
      age: 138,
      height: 148.1804,
      deviation: 6.7526
    }, {
      age: 139,
      height: 148.7023,
      deviation: 6.7689
    }, {
      age: 140,
      height: 149.2197,
      deviation: 6.7835
    }, {
      age: 141,
      height: 149.7322,
      deviation: 6.7993
    }, {
      age: 142,
      height: 150.239,
      deviation: 6.8133
    }, {
      age: 143,
      height: 150.7394,
      deviation: 6.827
    }, {
      age: 144,
      height: 151.2327,
      deviation: 6.8403
    }, {
      age: 145,
      height: 151.7182,
      deviation: 6.8516
    }, {
      age: 146,
      height: 152.1951,
      deviation: 6.864
    }, {
      age: 147,
      height: 152.6628,
      deviation: 6.8744
    }, {
      age: 148,
      height: 153.1206,
      deviation: 6.8858
    }, {
      age: 149,
      height: 153.5678,
      deviation: 6.8952
    }, {
      age: 150,
      height: 154.0041,
      deviation: 6.904
    }, {
      age: 151,
      height: 154.429,
      deviation: 6.9122
    }, {
      age: 152,
      height: 154.8423,
      deviation: 6.9184
    }, {
      age: 153,
      height: 155.2437,
      deviation: 6.9254
    }, {
      age: 154,
      height: 155.633,
      deviation: 6.9319
    }, {
      age: 155,
      height: 156.0101,
      deviation: 6.9362
    }, {
      age: 156,
      height: 156.3748,
      deviation: 6.9415
    }, {
      age: 157,
      height: 156.7269,
      deviation: 6.9446
    }, {
      age: 158,
      height: 157.0666,
      deviation: 6.9471
    }, {
      age: 159,
      height: 157.3936,
      deviation: 6.9489
    }, {
      age: 160,
      height: 157.7082,
      deviation: 6.9518
    }, {
      age: 161,
      height: 158.0102,
      deviation: 6.9524
    }, {
      age: 162,
      height: 158.2997,
      deviation: 6.9525
    }, {
      age: 163,
      height: 158.5771,
      deviation: 6.952
    }, {
      age: 164,
      height: 158.8425,
      deviation: 6.9509
    }, {
      age: 165,
      height: 159.0961,
      deviation: 6.9509
    }, {
      age: 166,
      height: 159.3382,
      deviation: 6.9487
    }, {
      age: 167,
      height: 159.5691,
      deviation: 6.946
    }, {
      age: 168,
      height: 159.789,
      deviation: 6.9428
    }, {
      age: 169,
      height: 159.9983,
      deviation: 6.9391
    }, {
      age: 170,
      height: 160.1971,
      deviation: 6.9365
    }, {
      age: 171,
      height: 160.3857,
      deviation: 6.9319
    }, {
      age: 172,
      height: 160.5643,
      deviation: 6.9267
    }, {
      age: 173,
      height: 160.7332,
      deviation: 6.9228
    }, {
      age: 174,
      height: 160.8927,
      deviation: 6.9168
    }, {
      age: 175,
      height: 161.043,
      deviation: 6.912
    }, {
      age: 176,
      height: 161.1845,
      deviation: 6.9051
    }, {
      age: 177,
      height: 161.3176,
      deviation: 6.8996
    }, {
      age: 178,
      height: 161.4425,
      deviation: 6.8936
    }, {
      age: 179,
      height: 161.5596,
      deviation: 6.8873
    }, {
      age: 180,
      height: 161.6692,
      deviation: 6.879
    }, {
      age: 181,
      height: 161.7717,
      deviation: 6.8721
    }, {
      age: 182,
      height: 161.8673,
      deviation: 6.8648
    }, {
      age: 183,
      height: 161.9564,
      deviation: 6.8589
    }, {
      age: 184,
      height: 162.0393,
      deviation: 6.851
    }, {
      age: 185,
      height: 162.1164,
      deviation: 6.8429
    }, {
      age: 186,
      height: 162.188,
      deviation: 6.8346
    }, {
      age: 187,
      height: 162.2542,
      deviation: 6.8277
    }, {
      age: 188,
      height: 162.3154,
      deviation: 6.8189
    }, {
      age: 189,
      height: 162.3719,
      deviation: 6.8115
    }, {
      age: 190,
      height: 162.4239,
      deviation: 6.8039
    }, {
      age: 191,
      height: 162.4717,
      deviation: 6.7946
    }, {
      age: 192,
      height: 162.5156,
      deviation: 6.7867
    }, {
      age: 193,
      height: 162.556,
      deviation: 6.7786
    }, {
      age: 194,
      height: 162.5933,
      deviation: 6.7704
    }, {
      age: 195,
      height: 162.6276,
      deviation: 6.7621
    }, {
      age: 196,
      height: 162.6594,
      deviation: 6.7536
    }, {
      age: 197,
      height: 162.689,
      deviation: 6.7467
    }, {
      age: 198,
      height: 162.7165,
      deviation: 6.7381
    }, {
      age: 199,
      height: 162.7425,
      deviation: 6.731
    }, {
      age: 200,
      height: 162.767,
      deviation: 6.7223
    }, {
      age: 201,
      height: 162.7904,
      deviation: 6.7151
    }, {
      age: 202,
      height: 162.8126,
      deviation: 6.7063
    }, {
      age: 203,
      height: 162.834,
      deviation: 6.699
    }, {
      age: 204,
      height: 162.8545,
      deviation: 6.6917
    }, {
      age: 205,
      height: 162.8743,
      deviation: 6.6844
    }, {
      age: 206,
      height: 162.8935,
      deviation: 6.677
    }, {
      age: 207,
      height: 162.912,
      deviation: 6.6696
    }, {
      age: 208,
      height: 162.93,
      deviation: 6.6622
    }, {
      age: 209,
      height: 162.9476,
      deviation: 6.6548
    }, {
      age: 210,
      height: 162.9649,
      deviation: 6.649
    }, {
      age: 211,
      height: 162.9817,
      deviation: 6.6415
    }, {
      age: 212,
      height: 162.9983,
      deviation: 6.6357
    }, {
      age: 213,
      height: 163.0144,
      deviation: 6.6282
    }, {
      age: 214,
      height: 163.03,
      deviation: 6.6223
    }, {
      age: 215,
      height: 163.0451,
      deviation: 6.6164
    }, {
      age: 216,
      height: 163.0595,
      deviation: 6.6088
    }, {
      age: 217,
      height: 163.0733,
      deviation: 6.6028
    }, {
      age: 218,
      height: 163.0862,
      deviation: 6.5968
    }, {
      age: 219,
      height: 163.0982,
      deviation: 6.5908
    }, {
      age: 220,
      height: 163.1092,
      deviation: 6.5847
    }, {
      age: 221,
      height: 163.1192,
      deviation: 6.5802
    }, {
      age: 222,
      height: 163.1279,
      deviation: 6.5741
    }, {
      age: 223,
      height: 163.1355,
      deviation: 6.5678
    }, {
      age: 224,
      height: 163.1418,
      deviation: 6.5632
    }, {
      age: 225,
      height: 163.1469,
      deviation: 6.5569
    }, {
      age: 226,
      height: 163.1508,
      deviation: 6.5521
    }, {
      age: 227,
      height: 163.1534,
      deviation: 6.5457
    }, {
      age: 228,
      height: 163.1548,
      deviation: 6.5409
    }],
    boys: [{
      age: 0,
      height: 49.8842,
      deviation: 1.893
    }, {
      age: 1,
      height: 54.6645,
      deviation: 1.945
    }, {
      age: 2,
      height: 58.3299,
      deviation: 1.999
    }, {
      age: 3,
      height: 61.3115,
      deviation: 2.043
    }, {
      age: 4,
      height: 63.758,
      deviation: 2.079
    }, {
      age: 5,
      height: 65.769,
      deviation: 2.10900000000001
    }, {
      age: 6,
      height: 67.4836,
      deviation: 2.13799999999999
    }, {
      age: 7,
      height: 69.0152,
      deviation: 2.16800000000001
    }, {
      age: 8,
      height: 70.4382,
      deviation: 2.20100000000001
    }, {
      age: 9,
      height: 71.7947,
      deviation: 2.239
    }, {
      age: 10,
      height: 73.096,
      deviation: 2.27900000000001
    }, {
      age: 11,
      height: 74.3433,
      deviation: 2.322
    }, {
      age: 12,
      height: 75.5431,
      deviation: 2.36800000000001
    }, {
      age: 13,
      height: 76.703,
      deviation: 2.417
    }, {
      age: 14,
      height: 77.8251,
      deviation: 2.467
    }, {
      age: 15,
      height: 78.9122,
      deviation: 2.51900000000001
    }, {
      age: 16,
      height: 79.9688,
      deviation: 2.57199999999999
    }, {
      age: 17,
      height: 80.9978,
      deviation: 2.62700000000001
    }, {
      age: 18,
      height: 82,
      deviation: 2.682
    }, {
      age: 19,
      height: 82.9759,
      deviation: 2.739
    }, {
      age: 20,
      height: 83.9267,
      deviation: 2.798
    }, {
      age: 21,
      height: 84.8549,
      deviation: 2.855
    }, {
      age: 22,
      height: 85.7613,
      deviation: 2.91499999999999
    }, {
      age: 23,
      height: 86.6477,
      deviation: 2.97499999999999
    }, {
      age: 24,
      height: 87.5162,
      deviation: 3.03400000000001
    }, {
      age: 25,
      height: 87.6668,
      deviation: 3.095
    }, {
      age: 26,
      height: 88.4972,
      deviation: 3.154
    }, {
      age: 27,
      height: 89.3066,
      deviation: 3.21300000000001
    }, {
      age: 28,
      height: 90.0957,
      deviation: 3.27000000000001
    }, {
      age: 29,
      height: 90.8641,
      deviation: 3.32600000000001
    }, {
      age: 30,
      height: 91.6118,
      deviation: 3.38199999999999
    }, {
      age: 31,
      height: 92.34,
      deviation: 3.435
    }, {
      age: 32,
      height: 93.0499,
      deviation: 3.488
    }, {
      age: 33,
      height: 93.7429,
      deviation: 3.539
    }, {
      age: 34,
      height: 94.4214,
      deviation: 3.58800000000001
    }, {
      age: 35,
      height: 95.0877,
      deviation: 3.636
    }, {
      age: 36,
      height: 95.7433,
      deviation: 3.68299999999999
    }, {
      age: 37,
      height: 96.3891,
      deviation: 3.72799999999999
    }, {
      age: 38,
      height: 97.0258,
      deviation: 3.774
    }, {
      age: 39,
      height: 97.6539,
      deviation: 3.816
    }, {
      age: 40,
      height: 98.2735,
      deviation: 3.86
    }, {
      age: 41,
      height: 98.8846,
      deviation: 3.90000000000001
    }, {
      age: 42,
      height: 99.487,
      deviation: 3.94099999999999
    }, {
      age: 43,
      height: 100.0805,
      deviation: 3.98
    }, {
      age: 44,
      height: 100.6659,
      deviation: 4.01899999999999
    }, {
      age: 45,
      height: 101.2435,
      deviation: 4.057
    }, {
      age: 46,
      height: 101.814,
      deviation: 4.09399999999999
    }, {
      age: 47,
      height: 102.3785,
      deviation: 4.131
    }, {
      age: 48,
      height: 102.938,
      deviation: 4.169
    }, {
      age: 49,
      height: 103.4936,
      deviation: 4.205
    }, {
      age: 50,
      height: 104.046,
      deviation: 4.242
    }, {
      age: 51,
      height: 104.5961,
      deviation: 4.27800000000001
    }, {
      age: 52,
      height: 105.1445,
      deviation: 4.31400000000001
    }, {
      age: 53,
      height: 105.6917,
      deviation: 4.351
    }, {
      age: 54,
      height: 106.2377,
      deviation: 4.387
    }, {
      age: 55,
      height: 106.7825,
      deviation: 4.422
    }, {
      age: 56,
      height: 107.3263,
      deviation: 4.458
    }, {
      age: 57,
      height: 107.8692,
      deviation: 4.495
    }, {
      age: 58,
      height: 108.4112,
      deviation: 4.53
    }, {
      age: 59,
      height: 108.9522,
      deviation: 4.56699999999999
    }, {
      age: 60,
      height: 109.4923,
      deviation: 4.60300000000001
    }, {
      age: 61,
      height: 110.0311,
      deviation: 4.63900000000001
    }, {
      age: 62,
      height: 110.8006,
      deviation: 4.6226
    }, {
      age: 63,
      height: 111.3338,
      deviation: 4.6538
    }, {
      age: 64,
      height: 111.8636,
      deviation: 4.6837
    }, {
      age: 65,
      height: 112.3895,
      deviation: 4.7147
    }, {
      age: 66,
      height: 112.911,
      deviation: 4.7456
    }, {
      age: 67,
      height: 113.428,
      deviation: 4.7765
    }, {
      age: 68,
      height: 113.941,
      deviation: 4.806
    }, {
      age: 69,
      height: 114.45,
      deviation: 4.8367
    }, {
      age: 70,
      height: 114.9547,
      deviation: 4.8672
    }, {
      age: 71,
      height: 115.4549,
      deviation: 4.8964
    }, {
      age: 72,
      height: 115.9509,
      deviation: 4.9268
    }, {
      age: 73,
      height: 116.4432,
      deviation: 4.957
    }, {
      age: 74,
      height: 116.9325,
      deviation: 4.986
    }, {
      age: 75,
      height: 117.4196,
      deviation: 5.0162
    }, {
      age: 76,
      height: 117.9046,
      deviation: 5.0463
    }, {
      age: 77,
      height: 118.388,
      deviation: 5.0753
    }, {
      age: 78,
      height: 118.87,
      deviation: 5.1055
    }, {
      age: 79,
      height: 119.3508,
      deviation: 5.1357
    }, {
      age: 80,
      height: 119.8303,
      deviation: 5.1659
    }, {
      age: 81,
      height: 120.3085,
      deviation: 5.1949
    }, {
      age: 82,
      height: 120.7853,
      deviation: 5.2252
    }, {
      age: 83,
      height: 121.2604,
      deviation: 5.2554
    }, {
      age: 84,
      height: 121.7338,
      deviation: 5.2857
    }, {
      age: 85,
      height: 122.2053,
      deviation: 5.3159
    }, {
      age: 86,
      height: 122.675,
      deviation: 5.3462
    }, {
      age: 87,
      height: 123.1429,
      deviation: 5.3764
    }, {
      age: 88,
      height: 123.6092,
      deviation: 5.4067
    }, {
      age: 89,
      height: 124.0736,
      deviation: 5.4369
    }, {
      age: 90,
      height: 124.5361,
      deviation: 5.4671
    }, {
      age: 91,
      height: 124.9964,
      deviation: 5.4973
    }, {
      age: 92,
      height: 125.4545,
      deviation: 5.5275
    }, {
      age: 93,
      height: 125.9104,
      deviation: 5.5577
    }, {
      age: 94,
      height: 126.364,
      deviation: 5.5878
    }, {
      age: 95,
      height: 126.8156,
      deviation: 5.6179
    }, {
      age: 96,
      height: 127.2651,
      deviation: 5.648
    }, {
      age: 97,
      height: 127.7129,
      deviation: 5.6781
    }, {
      age: 98,
      height: 128.159,
      deviation: 5.7082
    }, {
      age: 99,
      height: 128.6034,
      deviation: 5.7383
    }, {
      age: 100,
      height: 129.0466,
      deviation: 5.7684
    }, {
      age: 101,
      height: 129.4887,
      deviation: 5.7985
    }, {
      age: 102,
      height: 129.93,
      deviation: 5.83
    }, {
      age: 103,
      height: 130.3705,
      deviation: 5.8602
    }, {
      age: 104,
      height: 130.8103,
      deviation: 5.8904
    }, {
      age: 105,
      height: 131.2495,
      deviation: 5.9207
    }, {
      age: 106,
      height: 131.6884,
      deviation: 5.951
    }, {
      age: 107,
      height: 132.1269,
      deviation: 5.9814
    }, {
      age: 108,
      height: 132.5652,
      deviation: 6.0118
    }, {
      age: 109,
      height: 133.0031,
      deviation: 6.0423
    }, {
      age: 110,
      height: 133.4404,
      deviation: 6.0729
    }, {
      age: 111,
      height: 133.877,
      deviation: 6.1035
    }, {
      age: 112,
      height: 134.313,
      deviation: 6.1327
    }, {
      age: 113,
      height: 134.7483,
      deviation: 6.1634
    }, {
      age: 114,
      height: 135.1829,
      deviation: 6.1941
    }, {
      age: 115,
      height: 135.6168,
      deviation: 6.2235
    }, {
      age: 116,
      height: 136.0501,
      deviation: 6.2542
    }, {
      age: 117,
      height: 136.4829,
      deviation: 6.2837
    }, {
      age: 118,
      height: 136.9153,
      deviation: 6.3145
    }, {
      age: 119,
      height: 137.3474,
      deviation: 6.3441
    }, {
      age: 120,
      height: 137.7795,
      deviation: 6.3737
    }, {
      age: 121,
      height: 138.2119,
      deviation: 6.4034
    }, {
      age: 122,
      height: 138.6452,
      deviation: 6.4331
    }, {
      age: 123,
      height: 139.0797,
      deviation: 6.463
    }, {
      age: 124,
      height: 139.5158,
      deviation: 6.4931
    }, {
      age: 125,
      height: 139.954,
      deviation: 6.5233
    }, {
      age: 126,
      height: 140.3948,
      deviation: 6.5522
    }, {
      age: 127,
      height: 140.8387,
      deviation: 6.5828
    }, {
      age: 128,
      height: 141.2859,
      deviation: 6.6122
    }, {
      age: 129,
      height: 141.7368,
      deviation: 6.6418
    }, {
      age: 130,
      height: 142.1916,
      deviation: 6.6716
    }, {
      age: 131,
      height: 142.6501,
      deviation: 6.7017
    }, {
      age: 132,
      height: 143.1126,
      deviation: 6.7306
    }, {
      age: 133,
      height: 143.5795,
      deviation: 6.7612
    }, {
      age: 134,
      height: 144.0511,
      deviation: 6.7906
    }, {
      age: 135,
      height: 144.5276,
      deviation: 6.8203
    }, {
      age: 136,
      height: 145.0093,
      deviation: 6.8488
    }, {
      age: 137,
      height: 145.4964,
      deviation: 6.8791
    }, {
      age: 138,
      height: 145.9891,
      deviation: 6.9082
    }, {
      age: 139,
      height: 146.4878,
      deviation: 6.9377
    }, {
      age: 140,
      height: 146.9927,
      deviation: 6.9675
    }, {
      age: 141,
      height: 147.5041,
      deviation: 6.9976
    }, {
      age: 142,
      height: 148.0224,
      deviation: 7.0266
    }, {
      age: 143,
      height: 148.5478,
      deviation: 7.056
    }, {
      age: 144,
      height: 149.0807,
      deviation: 7.0858
    }, {
      age: 145,
      height: 149.6212,
      deviation: 7.1145
    }, {
      age: 146,
      height: 150.1694,
      deviation: 7.1451
    }, {
      age: 147,
      height: 150.7256,
      deviation: 7.173
    }, {
      age: 148,
      height: 151.2899,
      deviation: 7.2029
    }, {
      age: 149,
      height: 151.8623,
      deviation: 7.2317
    }, {
      age: 150,
      height: 152.4425,
      deviation: 7.2608
    }, {
      age: 151,
      height: 153.0298,
      deviation: 7.2888
    }, {
      age: 152,
      height: 153.6234,
      deviation: 7.3186
    }, {
      age: 153,
      height: 154.2223,
      deviation: 7.3456
    }, {
      age: 154,
      height: 154.8258,
      deviation: 7.3744
    }, {
      age: 155,
      height: 155.4329,
      deviation: 7.4017
    }, {
      age: 156,
      height: 156.0426,
      deviation: 7.4276
    }, {
      age: 157,
      height: 156.6539,
      deviation: 7.4536
    }, {
      age: 158,
      height: 157.266,
      deviation: 7.4796
    }, {
      age: 159,
      height: 157.8775,
      deviation: 7.5055
    }, {
      age: 160,
      height: 158.4871,
      deviation: 7.5297
    }, {
      age: 161,
      height: 159.0937,
      deviation: 7.5522
    }, {
      age: 162,
      height: 159.6962,
      deviation: 7.576
    }, {
      age: 163,
      height: 160.2939,
      deviation: 7.5979
    }, {
      age: 164,
      height: 160.8861,
      deviation: 7.618
    }, {
      age: 165,
      height: 161.472,
      deviation: 7.6376
    }, {
      age: 166,
      height: 162.0505,
      deviation: 7.6569
    }, {
      age: 167,
      height: 162.6207,
      deviation: 7.6757
    }, {
      age: 168,
      height: 163.1816,
      deviation: 7.6924
    }, {
      age: 169,
      height: 163.7321,
      deviation: 7.7069
    }, {
      age: 170,
      height: 164.2717,
      deviation: 7.7224
    }, {
      age: 171,
      height: 164.7994,
      deviation: 7.7357
    }, {
      age: 172,
      height: 165.3145,
      deviation: 7.7483
    }, {
      age: 173,
      height: 165.8165,
      deviation: 7.7586
    }, {
      age: 174,
      height: 166.305,
      deviation: 7.7681
    }, {
      age: 175,
      height: 166.7799,
      deviation: 7.7769
    }, {
      age: 176,
      height: 167.2415,
      deviation: 7.7851
    }, {
      age: 177,
      height: 167.6899,
      deviation: 7.7909
    }, {
      age: 178,
      height: 168.1255,
      deviation: 7.796
    }, {
      age: 179,
      height: 168.5482,
      deviation: 7.8004
    }, {
      age: 180,
      height: 168.958,
      deviation: 7.8042
    }, {
      age: 181,
      height: 169.3549,
      deviation: 7.8056
    }, {
      age: 182,
      height: 169.7389,
      deviation: 7.8063
    }, {
      age: 183,
      height: 170.1099,
      deviation: 7.8063
    }, {
      age: 184,
      height: 170.468,
      deviation: 7.8057
    }, {
      age: 185,
      height: 170.8136,
      deviation: 7.8045
    }, {
      age: 186,
      height: 171.1468,
      deviation: 7.8026
    }, {
      age: 187,
      height: 171.468,
      deviation: 7.7984
    }, {
      age: 188,
      height: 171.7773,
      deviation: 7.7953
    }, {
      age: 189,
      height: 172.0748,
      deviation: 7.7898
    }, {
      age: 190,
      height: 172.3606,
      deviation: 7.7838
    }, {
      age: 191,
      height: 172.6345,
      deviation: 7.7789
    }, {
      age: 192,
      height: 172.8967,
      deviation: 7.7717
    }, {
      age: 193,
      height: 173.147,
      deviation: 7.7639
    }, {
      age: 194,
      height: 173.3856,
      deviation: 7.7555
    }, {
      age: 195,
      height: 173.6126,
      deviation: 7.7466
    }, {
      age: 196,
      height: 173.828,
      deviation: 7.7371
    }, {
      age: 197,
      height: 174.0321,
      deviation: 7.727
    }, {
      age: 198,
      height: 174.2251,
      deviation: 7.7164
    }, {
      age: 199,
      height: 174.4071,
      deviation: 7.7053
    }, {
      age: 200,
      height: 174.5784,
      deviation: 7.6937
    }, {
      age: 201,
      height: 174.7392,
      deviation: 7.6815
    }, {
      age: 202,
      height: 174.8896,
      deviation: 7.6689
    }, {
      age: 203,
      height: 175.0301,
      deviation: 7.6576
    }, {
      age: 204,
      height: 175.1609,
      deviation: 7.644
    }, {
      age: 205,
      height: 175.2824,
      deviation: 7.63
    }, {
      age: 206,
      height: 175.3951,
      deviation: 7.6174
    }, {
      age: 207,
      height: 175.4995,
      deviation: 7.6026
    }, {
      age: 208,
      height: 175.5959,
      deviation: 7.5893
    }, {
      age: 209,
      height: 175.685,
      deviation: 7.5738
    }, {
      age: 210,
      height: 175.7672,
      deviation: 7.5597
    }, {
      age: 211,
      height: 175.8432,
      deviation: 7.5454
    }, {
      age: 212,
      height: 175.9133,
      deviation: 7.5308
    }, {
      age: 213,
      height: 175.9781,
      deviation: 7.516
    }, {
      age: 214,
      height: 176.038,
      deviation: 7.501
    }, {
      age: 215,
      height: 176.0935,
      deviation: 7.4857
    }, {
      age: 216,
      height: 176.1449,
      deviation: 7.4703
    }, {
      age: 217,
      height: 176.1925,
      deviation: 7.4565
    }, {
      age: 218,
      height: 176.2368,
      deviation: 7.4407
    }, {
      age: 219,
      height: 176.2779,
      deviation: 7.4266
    }, {
      age: 220,
      height: 176.3162,
      deviation: 7.4123
    }, {
      age: 221,
      height: 176.3518,
      deviation: 7.398
    }, {
      age: 222,
      height: 176.3851,
      deviation: 7.3817
    }, {
      age: 223,
      height: 176.4162,
      deviation: 7.3689
    }, {
      age: 224,
      height: 176.4453,
      deviation: 7.3542
    }, {
      age: 225,
      height: 176.4724,
      deviation: 7.3395
    }, {
      age: 226,
      height: 176.4976,
      deviation: 7.3247
    }, {
      age: 227,
      height: 176.5211,
      deviation: 7.3115
    }, {
      age: 228,
      height: 176.5432,
      deviation: 7.2983
    }]
  };
  return data;
};
/* harmony default export */ const averageHeightvue_type_script_lang_js = (averageHeight);
;// CONCATENATED MODULE: ./src/scripts/averageHeight.vue



const __exports__ = averageHeightvue_type_script_lang_js;

/* harmony default export */ const scripts_averageHeight = (__exports__);

/***/ }),

/***/ 3105:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (/* reexport safe */ _node_modules_quasar_app_webpack_lib_webpack_loader_js_transform_quasar_imports_js_node_modules_babel_loader_lib_index_js_clonedRuleSet_2_use_0_node_modules_quasar_app_webpack_lib_webpack_loader_vue_auto_import_quasar_js_ruleSet_0_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_1_graphComponent_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__.A)
/* harmony export */ });
/* harmony import */ var _node_modules_quasar_app_webpack_lib_webpack_loader_js_transform_quasar_imports_js_node_modules_babel_loader_lib_index_js_clonedRuleSet_2_use_0_node_modules_quasar_app_webpack_lib_webpack_loader_vue_auto_import_quasar_js_ruleSet_0_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_1_graphComponent_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4974);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_node_modules_quasar_app_webpack_lib_webpack_loader_js_transform_quasar_imports_js_node_modules_babel_loader_lib_index_js_clonedRuleSet_2_use_0_node_modules_quasar_app_webpack_lib_webpack_loader_vue_auto_import_quasar_js_ruleSet_0_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_1_graphComponent_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__]);
_node_modules_quasar_app_webpack_lib_webpack_loader_js_transform_quasar_imports_js_node_modules_babel_loader_lib_index_js_clonedRuleSet_2_use_0_node_modules_quasar_app_webpack_lib_webpack_loader_vue_auto_import_quasar_js_ruleSet_0_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_1_graphComponent_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];
 
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 3503:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (/* reexport safe */ _node_modules_quasar_app_webpack_lib_webpack_loader_js_transform_quasar_imports_js_node_modules_babel_loader_lib_index_js_clonedRuleSet_2_use_0_node_modules_quasar_app_webpack_lib_webpack_loader_vue_auto_import_quasar_js_ruleSet_0_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_1_childInformation_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__.A)
/* harmony export */ });
/* harmony import */ var _node_modules_quasar_app_webpack_lib_webpack_loader_js_transform_quasar_imports_js_node_modules_babel_loader_lib_index_js_clonedRuleSet_2_use_0_node_modules_quasar_app_webpack_lib_webpack_loader_vue_auto_import_quasar_js_ruleSet_0_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_1_childInformation_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1485);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_node_modules_quasar_app_webpack_lib_webpack_loader_js_transform_quasar_imports_js_node_modules_babel_loader_lib_index_js_clonedRuleSet_2_use_0_node_modules_quasar_app_webpack_lib_webpack_loader_vue_auto_import_quasar_js_ruleSet_0_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_1_childInformation_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__]);
_node_modules_quasar_app_webpack_lib_webpack_loader_js_transform_quasar_imports_js_node_modules_babel_loader_lib_index_js_clonedRuleSet_2_use_0_node_modules_quasar_app_webpack_lib_webpack_loader_vue_auto_import_quasar_js_ruleSet_0_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_1_childInformation_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];
 
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 2594:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  X: () => (/* reexport */ render)
});

// EXTERNAL MODULE: ./node_modules/@vue/runtime-core/dist/runtime-core.esm-bundler.js
var runtime_core_esm_bundler = __webpack_require__(1758);
// EXTERNAL MODULE: ./node_modules/@vue/shared/dist/shared.esm-bundler.js
var shared_esm_bundler = __webpack_require__(8790);
;// CONCATENATED MODULE: ./node_modules/@quasar/app-webpack/lib/webpack/loader.js.transform-quasar-imports.js!./node_modules/babel-loader/lib/index.js??clonedRuleSet-2.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/@quasar/app-webpack/lib/webpack/loader.vue.auto-import-quasar.js??ruleSet[0].use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[1]!./src/components/graphComponent.vue?vue&type=template&id=818341c6&scoped=true

const _withScopeId = n => ((0,runtime_core_esm_bundler/* pushScopeId */.Qi)("data-v-818341c6"), n = n(), (0,runtime_core_esm_bundler/* popScopeId */.jt)(), n);
const _hoisted_1 = /*#__PURE__*/_withScopeId(() => /*#__PURE__*/(0,runtime_core_esm_bundler/* createElementVNode */.Lk)("p", {
  style: {
    "text-align": "center",
    "margin": "0px",
    "position": "absolute",
    "top": "70px",
    "z-index": "1000",
    "left": "40%"
  }
}, " Zona visokog rasta ", -1));
const _hoisted_2 = /*#__PURE__*/_withScopeId(() => /*#__PURE__*/(0,runtime_core_esm_bundler/* createElementVNode */.Lk)("br", null, null, -1));
const _hoisted_3 = {
  id: "chartdiv",
  ref: "chartRef"
};
function render(_ctx, _cache, $props, $setup, $data, $options) {
  return _ctx.props.child ? ((0,runtime_core_esm_bundler/* openBlock */.uX)(), (0,runtime_core_esm_bundler/* createElementBlock */.CE)("div", {
    key: 0,
    class: "flex flex-center column",
    style: (0,shared_esm_bundler/* normalizeStyle */.Tr)([{
      "background-color": "#ffffffa0",
      "border-radius": "15px",
      "box-shadow": "rgba(0, 0, 0, 0.16) 0px 1px 4px",
      "padding": "0px 0px 25px 0px",
      "margin": "8px 0px"
    }, {
      color: [_ctx.props.child.gender == 'male' ? '#ffffff' : '#ffffff']
    }])
  }, [_hoisted_1, (0,runtime_core_esm_bundler/* createElementVNode */.Lk)("p", {
    style: (0,shared_esm_bundler/* normalizeStyle */.Tr)([{
      "text-align": "center",
      "margin": "0px",
      "position": "absolute",
      "z-index": "1000",
      "left": "25%"
    }, {
      top: [_ctx.topPosition + 'px']
    }])
  }, [(0,runtime_core_esm_bundler/* createTextVNode */.eW)(" Zona niskog rasta "), _hoisted_2, (0,runtime_core_esm_bundler/* createTextVNode */.eW)(" Obratite se vašem izabranom lekaru ")], 4), (0,runtime_core_esm_bundler/* createElementVNode */.Lk)("div", _hoisted_3, null, 512)], 4)) : (0,runtime_core_esm_bundler/* createCommentVNode */.Q3)("", true);
}
;// CONCATENATED MODULE: ./src/components/graphComponent.vue?vue&type=template&id=818341c6&scoped=true


/***/ }),

/***/ 8952:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  X: () => (/* reexport */ render)
});

// EXTERNAL MODULE: ./node_modules/@vue/runtime-core/dist/runtime-core.esm-bundler.js
var runtime_core_esm_bundler = __webpack_require__(1758);
// EXTERNAL MODULE: ./node_modules/@vue/shared/dist/shared.esm-bundler.js
var shared_esm_bundler = __webpack_require__(8790);
;// CONCATENATED MODULE: ./node_modules/@quasar/app-webpack/lib/webpack/loader.js.transform-quasar-imports.js!./node_modules/babel-loader/lib/index.js??clonedRuleSet-2.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/@quasar/app-webpack/lib/webpack/loader.vue.auto-import-quasar.js??ruleSet[0].use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[1]!./src/pages/childInformation.vue?vue&type=template&id=2e046d5d

const _hoisted_1 = {
  class: "text-h6"
};
const _hoisted_2 = {
  class: "row items-center justify-end"
};
const _hoisted_3 = {
  class: "row"
};
function render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_q_btn = (0,runtime_core_esm_bundler/* resolveComponent */.g2)("q-btn");
  const _component_q_toolbar_title = (0,runtime_core_esm_bundler/* resolveComponent */.g2)("q-toolbar-title");
  const _component_q_toolbar = (0,runtime_core_esm_bundler/* resolveComponent */.g2)("q-toolbar");
  const _component_q_tab = (0,runtime_core_esm_bundler/* resolveComponent */.g2)("q-tab");
  const _component_q_tabs = (0,runtime_core_esm_bundler/* resolveComponent */.g2)("q-tabs");
  const _component_q_separator = (0,runtime_core_esm_bundler/* resolveComponent */.g2)("q-separator");
  const _component_detailsComponent = (0,runtime_core_esm_bundler/* resolveComponent */.g2)("detailsComponent");
  const _component_q_tab_panel = (0,runtime_core_esm_bundler/* resolveComponent */.g2)("q-tab-panel");
  const _component_graphComponent = (0,runtime_core_esm_bundler/* resolveComponent */.g2)("graphComponent");
  const _component_tableComponent = (0,runtime_core_esm_bundler/* resolveComponent */.g2)("tableComponent");
  const _component_q_tab_panels = (0,runtime_core_esm_bundler/* resolveComponent */.g2)("q-tab-panels");
  const _component_q_space = (0,runtime_core_esm_bundler/* resolveComponent */.g2)("q-space");
  const _component_q_card_section = (0,runtime_core_esm_bundler/* resolveComponent */.g2)("q-card-section");
  const _component_q_input = (0,runtime_core_esm_bundler/* resolveComponent */.g2)("q-input");
  const _component_q_date = (0,runtime_core_esm_bundler/* resolveComponent */.g2)("q-date");
  const _component_q_popup_proxy = (0,runtime_core_esm_bundler/* resolveComponent */.g2)("q-popup-proxy");
  const _component_q_icon = (0,runtime_core_esm_bundler/* resolveComponent */.g2)("q-icon");
  const _component_q_card = (0,runtime_core_esm_bundler/* resolveComponent */.g2)("q-card");
  const _component_q_dialog = (0,runtime_core_esm_bundler/* resolveComponent */.g2)("q-dialog");
  const _component_q_page = (0,runtime_core_esm_bundler/* resolveComponent */.g2)("q-page");
  const _directive_close_popup = (0,runtime_core_esm_bundler/* resolveDirective */.gN)("close-popup");
  return (0,runtime_core_esm_bundler/* openBlock */.uX)(), (0,runtime_core_esm_bundler/* createBlock */.Wv)(_component_q_page, {
    class: "container"
  }, {
    default: (0,runtime_core_esm_bundler/* withCtx */.k6)(() => [(0,runtime_core_esm_bundler/* createVNode */.bF)(_component_q_toolbar, {
      style: {
        "color": "#00000040"
      }
    }, {
      default: (0,runtime_core_esm_bundler/* withCtx */.k6)(() => [(0,runtime_core_esm_bundler/* createVNode */.bF)(_component_q_btn, {
        flat: "",
        icon: "arrow_back_ios",
        onClick: _cache[0] || (_cache[0] = $event => _ctx.goTo('/myChildren'))
      }), (0,runtime_core_esm_bundler/* createVNode */.bF)(_component_q_toolbar_title, {
        style: {
          "font-weight": "800",
          "font-size": "20pt",
          "text-align": "left",
          "line-height": "1",
          "margin": "25px 0px"
        }
      }, {
        default: (0,runtime_core_esm_bundler/* withCtx */.k6)(() => [(0,runtime_core_esm_bundler/* createTextVNode */.eW)((0,shared_esm_bundler/* toDisplayString */.v_)(_ctx.props.selectedChild.firstName + " " + _ctx.props.selectedChild.lastName), 1)]),
        _: 1
      }), (0,runtime_core_esm_bundler/* createVNode */.bF)(_component_q_btn, {
        style: {
          "position": "fixed",
          "bottom": "15px",
          "left": "calc(50vw - 105px)",
          "width": "210px",
          "color": "#ffffff",
          "z-index": "1000"
        },
        class: (0,shared_esm_bundler/* normalizeClass */.C4)({
          'bg-girl': _ctx.props.selectedChild.gender == 'female',
          'bg-boy': _ctx.props.selectedChild.gender == 'male'
        }),
        rounded: "",
        label: _ctx.$t('general.newMeasurement'),
        icon: "add",
        onClick: _cache[1] || (_cache[1] = $event => _ctx.addHeightDialog = true)
      }, null, 8, ["class", "label"])]),
      _: 1
    }), (0,runtime_core_esm_bundler/* createVNode */.bF)(_component_q_tabs, {
      modelValue: _ctx.selectedTab,
      "onUpdate:modelValue": _cache[2] || (_cache[2] = $event => _ctx.selectedTab = $event),
      dense: "",
      align: "justify",
      "narrow-indicator": ""
    }, {
      default: (0,runtime_core_esm_bundler/* withCtx */.k6)(() => [(0,runtime_core_esm_bundler/* createVNode */.bF)(_component_q_tab, {
        name: "details",
        label: "Detalji"
      }), (0,runtime_core_esm_bundler/* createVNode */.bF)(_component_q_tab, {
        disable: _ctx.props.selectedChild.heightData && _ctx.props.selectedChild.heightData?.length <= 0,
        name: "graph",
        label: _ctx.$t('general.graph')
      }, null, 8, ["disable", "label"]), (0,runtime_core_esm_bundler/* createVNode */.bF)(_component_q_tab, {
        name: "table",
        label: _ctx.$t('general.table')
      }, null, 8, ["label"])]),
      _: 1
    }, 8, ["modelValue"]), (0,runtime_core_esm_bundler/* createVNode */.bF)(_component_q_separator), (0,runtime_core_esm_bundler/* createVNode */.bF)(_component_q_tab_panels, {
      style: {
        "background-color": "transparent"
      },
      modelValue: _ctx.selectedTab,
      "onUpdate:modelValue": _cache[3] || (_cache[3] = $event => _ctx.selectedTab = $event),
      animated: ""
    }, {
      default: (0,runtime_core_esm_bundler/* withCtx */.k6)(() => [(0,runtime_core_esm_bundler/* createVNode */.bF)(_component_q_tab_panel, {
        name: "details",
        class: "q-pa-sm"
      }, {
        default: (0,runtime_core_esm_bundler/* withCtx */.k6)(() => [(0,runtime_core_esm_bundler/* createVNode */.bF)(_component_detailsComponent, {
          child: _ctx.props.selectedChild
        }, null, 8, ["child"])]),
        _: 1
      }), (0,runtime_core_esm_bundler/* createVNode */.bF)(_component_q_tab_panel, {
        name: "graph",
        class: "q-pa-sm"
      }, {
        default: (0,runtime_core_esm_bundler/* withCtx */.k6)(() => [(0,runtime_core_esm_bundler/* createVNode */.bF)(_component_graphComponent, {
          child: _ctx.props.selectedChild
        }, null, 8, ["child"])]),
        _: 1
      }), (0,runtime_core_esm_bundler/* createVNode */.bF)(_component_q_tab_panel, {
        name: "table",
        class: "q-pa-sm"
      }, {
        default: (0,runtime_core_esm_bundler/* withCtx */.k6)(() => [(0,runtime_core_esm_bundler/* createVNode */.bF)(_component_tableComponent, {
          child: _ctx.props.selectedChild,
          onRemoveHeight: _ctx.removeHeight
        }, null, 8, ["child", "onRemoveHeight"])]),
        _: 1
      })]),
      _: 1
    }, 8, ["modelValue"]), (0,runtime_core_esm_bundler/* createVNode */.bF)(_component_q_dialog, {
      modelValue: _ctx.addHeightDialog,
      "onUpdate:modelValue": _cache[9] || (_cache[9] = $event => _ctx.addHeightDialog = $event)
    }, {
      default: (0,runtime_core_esm_bundler/* withCtx */.k6)(() => [(0,runtime_core_esm_bundler/* createVNode */.bF)(_component_q_card, {
        style: {
          "background": "linear-gradient(180deg, #d5e2ff 0%, #f9effc 100%)",
          "color": "#1e1e1e",
          "width": "90vw"
        }
      }, {
        default: (0,runtime_core_esm_bundler/* withCtx */.k6)(() => [(0,runtime_core_esm_bundler/* createVNode */.bF)(_component_q_card_section, {
          class: "row items-center q-pb-none"
        }, {
          default: (0,runtime_core_esm_bundler/* withCtx */.k6)(() => [(0,runtime_core_esm_bundler/* createElementVNode */.Lk)("div", _hoisted_1, (0,shared_esm_bundler/* toDisplayString */.v_)(_ctx.$t("general.addNewMeasurement")), 1), (0,runtime_core_esm_bundler/* createVNode */.bF)(_component_q_space), (0,runtime_core_esm_bundler/* withDirectives */.bo)((0,runtime_core_esm_bundler/* createVNode */.bF)(_component_q_btn, {
            icon: "close",
            flat: "",
            round: "",
            dense: ""
          }, null, 512), [[_directive_close_popup]])]),
          _: 1
        }), (0,runtime_core_esm_bundler/* createVNode */.bF)(_component_q_card_section, null, {
          default: (0,runtime_core_esm_bundler/* withCtx */.k6)(() => [(0,runtime_core_esm_bundler/* createVNode */.bF)(_component_q_input, {
            style: {
              "width": "100%",
              "margin-bottom": "25px"
            },
            rounded: "",
            type: "number",
            outlined: "",
            modelValue: _ctx.height,
            "onUpdate:modelValue": _cache[4] || (_cache[4] = $event => _ctx.height = $event),
            ref: "heightRef",
            rules: [val => !!val || _ctx.$t('general.requiredField')],
            label: _ctx.$t('general.heightLabel')
          }, null, 8, ["modelValue", "rules", "label"]), (0,runtime_core_esm_bundler/* createVNode */.bF)(_component_q_input, {
            color: _ctx.selectedChild.gender,
            ref: "dateOfBirthRef",
            rounded: "",
            outlined: "",
            modelValue: _ctx.dateOfMeasurement,
            "onUpdate:modelValue": _cache[7] || (_cache[7] = $event => _ctx.dateOfMeasurement = $event),
            label: _ctx.$t('general.dateLabel'),
            mask: "##.##.####.",
            onClick: _cache[8] || (_cache[8] = $event => _ctx.dateOfMeasurementRef.show()),
            rules: [val => !!val || _ctx.$t('general.requiredField')]
          }, {
            append: (0,runtime_core_esm_bundler/* withCtx */.k6)(() => [(0,runtime_core_esm_bundler/* createVNode */.bF)(_component_q_icon, {
              name: "event",
              class: "cursor-pointer"
            }, {
              default: (0,runtime_core_esm_bundler/* withCtx */.k6)(() => [(0,runtime_core_esm_bundler/* createVNode */.bF)(_component_q_popup_proxy, {
                ref: "dateOfMeasurementRef",
                cover: "",
                "transition-show": "scale",
                "transition-hide": "scale"
              }, {
                default: (0,runtime_core_esm_bundler/* withCtx */.k6)(() => [(0,runtime_core_esm_bundler/* createVNode */.bF)(_component_q_date, {
                  locale: _ctx.locale == 'en-US' ? _ctx.myLocaleEng : _ctx.myLocaleSrb,
                  color: _ctx.selectedChild.gender,
                  modelValue: _ctx.dateOfMeasurement,
                  "onUpdate:modelValue": [_cache[5] || (_cache[5] = $event => _ctx.dateOfMeasurement = $event), _cache[6] || (_cache[6] = $event => _ctx.dateOfMeasurementRef.hide())],
                  mask: "DD.MM.YYYY."
                }, {
                  default: (0,runtime_core_esm_bundler/* withCtx */.k6)(() => [(0,runtime_core_esm_bundler/* createElementVNode */.Lk)("div", _hoisted_2, [(0,runtime_core_esm_bundler/* withDirectives */.bo)((0,runtime_core_esm_bundler/* createVNode */.bF)(_component_q_btn, {
                    label: "Close",
                    color: "primary",
                    flat: ""
                  }, null, 512), [[_directive_close_popup]])])]),
                  _: 1
                }, 8, ["locale", "color", "modelValue"])]),
                _: 1
              }, 512)]),
              _: 1
            })]),
            _: 1
          }, 8, ["color", "modelValue", "label", "rules"]), (0,runtime_core_esm_bundler/* createElementVNode */.Lk)("div", _hoisted_3, [(0,runtime_core_esm_bundler/* createVNode */.bF)(_component_q_btn, {
            push: "",
            class: "text-white bg-negative q-mr-sm col",
            label: _ctx.$t('general.cancel'),
            onClick: _ctx.cancel
          }, null, 8, ["label", "onClick"]), (0,runtime_core_esm_bundler/* createVNode */.bF)(_component_q_btn, {
            push: "",
            class: "text-white bg-positive q-ml-sm col",
            label: _ctx.id == null || _ctx.id == undefined ? _ctx.$t('general.add') : _ctx.$t('general.edit'),
            onClick: _ctx.addMeasurement
          }, null, 8, ["label", "onClick"])])]),
          _: 1
        })]),
        _: 1
      })]),
      _: 1
    }, 8, ["modelValue"])]),
    _: 1
  });
}
;// CONCATENATED MODULE: ./src/pages/childInformation.vue?vue&type=template&id=2e046d5d


/***/ })

}]);
//# sourceMappingURL=641.js.map