"use strict";
(globalThis["webpackChunkcom_mkonekt_kartaRasta"] = globalThis["webpackChunkcom_mkonekt_kartaRasta"] || []).push([[897],{

/***/ 4200:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ addSon)
});

// EXTERNAL MODULE: ./node_modules/@vue/runtime-core/dist/runtime-core.esm-bundler.js
var runtime_core_esm_bundler = __webpack_require__(1758);
// EXTERNAL MODULE: ./node_modules/@vue/shared/dist/shared.esm-bundler.js
var shared_esm_bundler = __webpack_require__(8790);
;// CONCATENATED MODULE: ./node_modules/@quasar/app-webpack/lib/webpack/loader.js.transform-quasar-imports.js!./node_modules/babel-loader/lib/index.js??clonedRuleSet-2.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/@quasar/app-webpack/lib/webpack/loader.vue.auto-import-quasar.js??ruleSet[0].use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[1]!./src/pages/addSon.vue?vue&type=template&id=b876406a

function render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_q_btn = (0,runtime_core_esm_bundler/* resolveComponent */.g2)("q-btn");
  const _component_q_toolbar_title = (0,runtime_core_esm_bundler/* resolveComponent */.g2)("q-toolbar-title");
  const _component_q_toolbar = (0,runtime_core_esm_bundler/* resolveComponent */.g2)("q-toolbar");
  const _component_addChildComponent = (0,runtime_core_esm_bundler/* resolveComponent */.g2)("addChildComponent");
  const _component_q_page = (0,runtime_core_esm_bundler/* resolveComponent */.g2)("q-page");
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
        onClick: _cache[0] || (_cache[0] = $event => _ctx.props.selectedChild.id ? _ctx.goTo('/myChildren') : _ctx.goTo('/'))
      }), (0,runtime_core_esm_bundler/* createVNode */.bF)(_component_q_toolbar_title, {
        style: {
          "overflow": "visible",
          "font-weight": "800",
          "font-size": "20pt",
          "text-align": "left",
          "line-height": "1",
          "margin": "25px 0px"
        }
      }, {
        default: (0,runtime_core_esm_bundler/* withCtx */.k6)(() => [(0,runtime_core_esm_bundler/* createTextVNode */.eW)((0,shared_esm_bundler/* toDisplayString */.v_)(_ctx.$t("general.addBoy")), 1)]),
        _: 1
      })]),
      _: 1
    }), (0,runtime_core_esm_bundler/* createVNode */.bF)(_component_addChildComponent, {
      selectedChild: _ctx.props.selectedChild,
      gender: "male",
      onAdd_child: _ctx.addChild,
      onResetujSelektovanoDete: _ctx.resetujSelektovanoDete
    }, null, 8, ["selectedChild", "onAdd_child", "onResetujSelektovanoDete"])]),
    _: 1
  });
}
// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.push.js
var es_array_push = __webpack_require__(239);
// EXTERNAL MODULE: ./node_modules/vue-router/dist/vue-router.mjs
var vue_router = __webpack_require__(455);
// EXTERNAL MODULE: ./src/components/addChildComponent.vue + 4 modules
var addChildComponent = __webpack_require__(6771);
;// CONCATENATED MODULE: ./node_modules/@quasar/app-webpack/lib/webpack/loader.js.transform-quasar-imports.js!./node_modules/babel-loader/lib/index.js??clonedRuleSet-2.use[0]!./node_modules/@quasar/app-webpack/lib/webpack/loader.vue.auto-import-quasar.js??ruleSet[0].use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[1]!./src/pages/addSon.vue?vue&type=script&lang=js




/* harmony default export */ const addSonvue_type_script_lang_js = ((0,runtime_core_esm_bundler/* defineComponent */.pM)({
  name: "addSon",
  components: {
    addChildComponent: addChildComponent/* default */.A
  },
  props: ["selectedChild"],
  setup(props, ctx) {
    let router = (0,vue_router/* useRouter */.rd)();
    function addChild(newChild) {
      if (newChild.id != undefined && newChild.id != null) ctx.emit("put-child", newChild);else ctx.emit("add-child", {
        ...newChild,
        gender: "male"
      });
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
      goTo
    };
  }
}));
;// CONCATENATED MODULE: ./src/pages/addSon.vue?vue&type=script&lang=js
 
// EXTERNAL MODULE: ./node_modules/vue-loader/dist/exportHelper.js
var exportHelper = __webpack_require__(2807);
// EXTERNAL MODULE: ./node_modules/quasar/src/components/page/QPage.js
var QPage = __webpack_require__(7716);
// EXTERNAL MODULE: ./node_modules/quasar/src/components/toolbar/QToolbar.js
var QToolbar = __webpack_require__(6914);
// EXTERNAL MODULE: ./node_modules/quasar/src/components/btn/QBtn.js
var QBtn = __webpack_require__(6384);
// EXTERNAL MODULE: ./node_modules/quasar/src/components/toolbar/QToolbarTitle.js
var QToolbarTitle = __webpack_require__(9150);
// EXTERNAL MODULE: ./node_modules/@quasar/app-webpack/lib/webpack/runtime.auto-import.js
var runtime_auto_import = __webpack_require__(8582);
var runtime_auto_import_default = /*#__PURE__*/__webpack_require__.n(runtime_auto_import);
;// CONCATENATED MODULE: ./src/pages/addSon.vue




;


const __exports__ = /*#__PURE__*/(0,exportHelper/* default */.A)(addSonvue_type_script_lang_js, [['render',render]])

/* harmony default export */ const addSon = (__exports__);
;




runtime_auto_import_default()(addSonvue_type_script_lang_js, 'components', {QPage: QPage/* default */.A,QToolbar: QToolbar/* default */.A,QBtn: QBtn/* default */.A,QToolbarTitle: QToolbarTitle/* default */.A});


/***/ })

}]);
//# sourceMappingURL=897.js.map