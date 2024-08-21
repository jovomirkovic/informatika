"use strict";
(globalThis["webpackChunkcom_mkonekt_kartaRasta"] = globalThis["webpackChunkcom_mkonekt_kartaRasta"] || []).push([[795],{

/***/ 3795:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ MainLayout)
});

// EXTERNAL MODULE: ./node_modules/@vue/runtime-core/dist/runtime-core.esm-bundler.js
var runtime_core_esm_bundler = __webpack_require__(1758);
;// CONCATENATED MODULE: ./node_modules/@quasar/app-webpack/lib/webpack/loader.js.transform-quasar-imports.js!./node_modules/babel-loader/lib/index.js??clonedRuleSet-2.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/@quasar/app-webpack/lib/webpack/loader.vue.auto-import-quasar.js??ruleSet[0].use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[1]!./src/layouts/MainLayout.vue?vue&type=template&id=615d074a

function render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_router_view = (0,runtime_core_esm_bundler/* resolveComponent */.g2)("router-view");
  const _component_q_page_container = (0,runtime_core_esm_bundler/* resolveComponent */.g2)("q-page-container");
  const _component_q_layout = (0,runtime_core_esm_bundler/* resolveComponent */.g2)("q-layout");
  return (0,runtime_core_esm_bundler/* openBlock */.uX)(), (0,runtime_core_esm_bundler/* createBlock */.Wv)(_component_q_layout, {
    view: "lHh Lpr lFf"
  }, {
    default: (0,runtime_core_esm_bundler/* withCtx */.k6)(() => [(0,runtime_core_esm_bundler/* createVNode */.bF)(_component_q_page_container, null, {
      default: (0,runtime_core_esm_bundler/* withCtx */.k6)(() => [(0,runtime_core_esm_bundler/* createVNode */.bF)(_component_router_view, {
        selectedChild: _ctx.selectedChild,
        children: _ctx.children,
        onRemoveChild: _ctx.removeChild,
        onEditChild: _ctx.editChild,
        onPutChild: _ctx.putChild,
        onAddChild: _ctx.addChild,
        onResetujSelektovanoDete: _ctx.resetujSelektovanoDete,
        onSelectChild: _ctx.selectChild,
        onAddHeight: _ctx.addHeight,
        onRemoveHeight: _ctx.removeHeight
      }, null, 8, ["selectedChild", "children", "onRemoveChild", "onEditChild", "onPutChild", "onAddChild", "onResetujSelektovanoDete", "onSelectChild", "onAddHeight", "onRemoveHeight"])]),
      _: 1
    })]),
    _: 1
  });
}
// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.push.js
var es_array_push = __webpack_require__(239);
// EXTERNAL MODULE: ./node_modules/@vue/reactivity/dist/reactivity.esm-bundler.js
var reactivity_esm_bundler = __webpack_require__(8734);
// EXTERNAL MODULE: ./node_modules/localforage/dist/localforage.js
var localforage = __webpack_require__(7779);
var localforage_default = /*#__PURE__*/__webpack_require__.n(localforage);
// EXTERNAL MODULE: ./node_modules/vue-router/dist/vue-router.mjs
var vue_router = __webpack_require__(455);
// EXTERNAL MODULE: ./node_modules/quasar/src/composables/use-quasar/use-quasar.js
var use_quasar = __webpack_require__(4907);
// EXTERNAL MODULE: ./node_modules/quasar/src/utils/date/date.js
var date = __webpack_require__(6246);
// EXTERNAL MODULE: ./node_modules/vue-i18n/dist/vue-i18n.mjs + 3 modules
var vue_i18n = __webpack_require__(3537);
// EXTERNAL MODULE: ./node_modules/@capacitor/local-notifications/dist/esm/index.js + 1 modules
var esm = __webpack_require__(5235);
// EXTERNAL MODULE: ./node_modules/date-fns/addMinutes.mjs + 4 modules
var addMinutes = __webpack_require__(5010);
;// CONCATENATED MODULE: ./node_modules/@quasar/app-webpack/lib/webpack/loader.js.transform-quasar-imports.js!./node_modules/babel-loader/lib/index.js??clonedRuleSet-2.use[0]!./node_modules/@quasar/app-webpack/lib/webpack/loader.vue.auto-import-quasar.js??ruleSet[0].use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[1]!./src/layouts/MainLayout.vue?vue&type=script&lang=js








/* harmony default export */ const MainLayoutvue_type_script_lang_js = ((0,runtime_core_esm_bundler/* defineComponent */.pM)({
  name: "MainLayout",
  setup() {
    const t = (0,vue_i18n/* useI18n */.s9)();
    const $q = (0,use_quasar/* default */.A)();
    const children = (0,reactivity_esm_bundler/* ref */.KR)([]);
    const selectedChild = (0,reactivity_esm_bundler/* ref */.KR)({});
    const router = (0,vue_router/* useRouter */.rd)();
    (0,runtime_core_esm_bundler/* onMounted */.sV)(async () => {
      loadChildren();
      try {
        // Request notification permissions
        console.log(esm/* LocalNotifications */.W);
        const permission1 = await esm/* LocalNotifications */.W.checkPermissions();
        console.error(permission1);
        const permission = await esm/* LocalNotifications */.W.requestPermissions();
        if (permission.display !== 'granted') {
          console.error('Notification permission not granted.');
          return;
        }

        // Schedule the reminder notification
        scheduleReminderNotification();
      } catch (error) {
        console.error('Notification setup error: ', error);
      }
    });
    const scheduleReminderNotification = async () => {
      const sixMonthsLater = (0,addMinutes/* addMinutes */.z)(new Date(), 1);
      await esm/* LocalNotifications */.W.schedule({
        notifications: [{
          title: 'Reminder',
          body: 'It’s time to use the app again!',
          id: 1,
          schedule: {
            at: sixMonthsLater
          }
        }]
      });
    };
    const loadChildren = async () => {
      const storedChildren = await localforage_default().getItem("children");
      if (storedChildren) {
        children.value = JSON.parse(storedChildren).filter(e => e.gender != undefined);
        console.log("children.value");
        console.log(children.value);
        children.value.forEach((entry, index) => children.value[index].heightData.sort((a, b) => {
          return date/* default.extractDate */.Ay.extractDate(a.date, "YYYY-MM-DD").getTime() - date/* default.extractDate */.Ay.extractDate(b.date, "YYYY-MM-DD").getTime() > 0 ? 1 : -1;
        }));
        console.log("children.value");
        console.log(children.value);
        saveChildren();
      }
    };
    const removeChild = id => {
      children.value = children.value.filter(child => child.id !== id);
      saveChildren(t.t("general.childRemovedSuccessfully"), "info");
    };
    function addChild(newChild) {
      const child = {
        ...newChild,
        id: Date.now(),
        heightData: [{
          id: "childTargetHeight",
          date: date/* default.formatDate */.Ay.formatDate(date/* default.extractDate */.Ay.extractDate(newChild.dateOfBirth, "DD.MM.YYYY."), "YYYY-MM-DD"),
          height: newChild.birthHeight
        }]
      };
      if (newChild.id == null) children.value.push(child);else {
        let index = children.value.indexOf(children.value.filter(e => e.id == newChild.id)[0]);
        if (index != -1) children.value[index] = newChild;
      }
      saveChildren(t.t("general.childAddedSuccessfully"), "positive", "/myChildren");
    }
    const saveChildren = async (message, type, to) => {
      await localforage_default().setItem("children", JSON.stringify(children.value)).then(() => {
        if (message != undefined) {
          $q.notify({
            message: message,
            color: type,
            position: "top"
          });
        }
        if (to != undefined) {
          goTo(to);
        }
      }).catch(e => {
        console.log("ERROR");
        console.log(e);
        $q.notify({
          message: t.t("general.generalError"),
          color: "negative",
          position: "top"
        });
      });
    };
    function editChild(child) {
      selectedChild.value = child;
      if (child.gender == "male") router.push("/addSon");else router.push("/addDaughter");
    }
    const putChild = child => {
      const index = children.value.indexOf(children.value.filter(e => e.id == child.id)[0]);
      if (index != -1) {
        children.value[index] = child;
        children.value[index].heightData[children.value[index].heightData.indexOf(children.value[index].heightData.filter(e => e.id == "childTargetHeight")[0])] = {
          id: "childTargetHeight",
          height: child.birthHeight,
          date: date/* default.formatDate */.Ay.formatDate(date/* default.extractDate */.Ay.extractDate(child.dateOfBirth, "DD.MM.YYYY."), "YYYY-MM-DD")
        };
      }
      saveChildren(t.t("general.childEditedSuccessfully"), "positive", "/myChildren");
    };
    const addHeight = data => {
      const index = children.value.indexOf(children.value.filter(e => e.id == data.id)[0]);
      if (index != -1) {
        if (children.value[index].heightData == undefined) {
          children.value[index].heightData = [{
            date: date/* default.formatDate */.Ay.formatDate(date/* default.extractDate */.Ay.extractDate(data.date, "DD.MM.YYYY."), "YYYY-MM-DD"),
            height: data.height
          }];
        } else children.value[index].heightData.push({
          date: date/* default.formatDate */.Ay.formatDate(date/* default.extractDate */.Ay.extractDate(data.date, "DD.MM.YYYY."), "YYYY-MM-DD"),
          height: data.height
        });
      }
      saveChildren(t.t("general.heightAddedSuccessfully"), "positive");
    };
    const removeHeight = data => {
      const index = children.value.indexOf(children.value.filter(e => e.id == data.id)[0]);
      if (index != -1) {
        const index2 = children.value[index].heightData.indexOf(children.value[index].heightData.filter(e => e.date == data.data.date)[0]);
        children.value[index].heightData.splice(index2, 1);
      }
      saveChildren(t.t("general.heightRemovedSuccessfully"), "positive");
    };
    function resetujSelektovanoDete() {
      selectedChild.value = {};
    }
    function selectChild(child) {
      selectedChild.value = child;
    }
    function goTo(path) {
      router.push(path);
    }
    return {
      children,
      selectedChild,
      addChild,
      editChild,
      putChild,
      removeChild,
      selectChild,
      resetujSelektovanoDete,
      addHeight,
      removeHeight
    };
  }
}));
;// CONCATENATED MODULE: ./src/layouts/MainLayout.vue?vue&type=script&lang=js
 
// EXTERNAL MODULE: ./node_modules/vue-loader/dist/exportHelper.js
var exportHelper = __webpack_require__(2807);
// EXTERNAL MODULE: ./node_modules/quasar/src/components/layout/QLayout.js + 1 modules
var QLayout = __webpack_require__(9078);
// EXTERNAL MODULE: ./node_modules/quasar/src/components/page/QPageContainer.js
var QPageContainer = __webpack_require__(5205);
// EXTERNAL MODULE: ./node_modules/@quasar/app-webpack/lib/webpack/runtime.auto-import.js
var runtime_auto_import = __webpack_require__(8582);
var runtime_auto_import_default = /*#__PURE__*/__webpack_require__.n(runtime_auto_import);
;// CONCATENATED MODULE: ./src/layouts/MainLayout.vue




;
const __exports__ = /*#__PURE__*/(0,exportHelper/* default */.A)(MainLayoutvue_type_script_lang_js, [['render',render]])

/* harmony default export */ const MainLayout = (__exports__);
;


runtime_auto_import_default()(MainLayoutvue_type_script_lang_js, 'components', {QLayout: QLayout/* default */.A,QPageContainer: QPageContainer/* default */.A});


/***/ })

}]);
//# sourceMappingURL=795.js.map