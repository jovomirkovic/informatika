"use strict";
(globalThis["webpackChunkcom_mkonekt_kartaRasta"] = globalThis["webpackChunkcom_mkonekt_kartaRasta"] || []).push([[996],{

/***/ 6771:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  A: () => (/* binding */ addChildComponent)
});

// EXTERNAL MODULE: ./node_modules/@vue/runtime-core/dist/runtime-core.esm-bundler.js
var runtime_core_esm_bundler = __webpack_require__(1758);
// EXTERNAL MODULE: ./node_modules/@vue/shared/dist/shared.esm-bundler.js
var shared_esm_bundler = __webpack_require__(8790);
;// CONCATENATED MODULE: ./node_modules/@quasar/app-webpack/lib/webpack/loader.js.transform-quasar-imports.js!./node_modules/babel-loader/lib/index.js??clonedRuleSet-2.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/@quasar/app-webpack/lib/webpack/loader.vue.auto-import-quasar.js??ruleSet[0].use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[1]!./src/components/addChildComponent.vue?vue&type=template&id=77b7407c

const _hoisted_1 = {
  class: "componentContainer text-center"
};
const _hoisted_2 = {
  class: "row items-center justify-end"
};
const _hoisted_3 = ["src"];
const _hoisted_4 = {
  class: "column items-center text-left text-bold q-mt-xl q-mb-xl",
  style: {
    "font-size": "12pt",
    "color": "#000000a0"
  }
};
const _hoisted_5 = {
  class: "col"
};
const _hoisted_6 = {
  class: "col"
};
const _hoisted_7 = {
  class: "row"
};
function render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_q_input = (0,runtime_core_esm_bundler/* resolveComponent */.g2)("q-input");
  const _component_q_btn = (0,runtime_core_esm_bundler/* resolveComponent */.g2)("q-btn");
  const _component_q_date = (0,runtime_core_esm_bundler/* resolveComponent */.g2)("q-date");
  const _component_q_popup_proxy = (0,runtime_core_esm_bundler/* resolveComponent */.g2)("q-popup-proxy");
  const _component_q_icon = (0,runtime_core_esm_bundler/* resolveComponent */.g2)("q-icon");
  const _component_q_avatar = (0,runtime_core_esm_bundler/* resolveComponent */.g2)("q-avatar");
  const _component_base64 = (0,runtime_core_esm_bundler/* resolveComponent */.g2)("base64");
  const _directive_close_popup = (0,runtime_core_esm_bundler/* resolveDirective */.gN)("close-popup");
  return (0,runtime_core_esm_bundler/* openBlock */.uX)(), (0,runtime_core_esm_bundler/* createElementBlock */.CE)("div", _hoisted_1, [(0,runtime_core_esm_bundler/* createVNode */.bF)(_component_q_input, {
    color: _ctx.gender,
    ref: "firstNameRef",
    rounded: "",
    outlined: "",
    modelValue: _ctx.firstName,
    "onUpdate:modelValue": _cache[0] || (_cache[0] = $event => _ctx.firstName = $event),
    rules: [val => !!val || _ctx.$t('general.requiredField')],
    label: _ctx.$t('general.firstName')
  }, null, 8, ["color", "modelValue", "rules", "label"]), (0,runtime_core_esm_bundler/* createVNode */.bF)(_component_q_input, {
    color: _ctx.gender,
    ref: "lastNameRef",
    rounded: "",
    outlined: "",
    modelValue: _ctx.lastName,
    "onUpdate:modelValue": _cache[1] || (_cache[1] = $event => _ctx.lastName = $event),
    label: _ctx.$t('general.lastName'),
    rules: [val => !!val || _ctx.$t('general.requiredField')]
  }, null, 8, ["color", "modelValue", "label", "rules"]), (0,runtime_core_esm_bundler/* createVNode */.bF)(_component_q_input, {
    color: _ctx.gender,
    ref: "dateOfBirthRef",
    rounded: "",
    outlined: "",
    modelValue: _ctx.dateOfBirth,
    "onUpdate:modelValue": _cache[4] || (_cache[4] = $event => _ctx.dateOfBirth = $event),
    label: _ctx.$t('general.dateOfBirth'),
    mask: "##.##.####.",
    onClick: _cache[5] || (_cache[5] = $event => _ctx.dateOfBirthPopupRef.show()),
    rules: [val => !!val || _ctx.$t('general.requiredField')]
  }, {
    append: (0,runtime_core_esm_bundler/* withCtx */.k6)(() => [(0,runtime_core_esm_bundler/* createVNode */.bF)(_component_q_icon, {
      name: "event",
      class: "cursor-pointer"
    }, {
      default: (0,runtime_core_esm_bundler/* withCtx */.k6)(() => [(0,runtime_core_esm_bundler/* createVNode */.bF)(_component_q_popup_proxy, {
        ref: "dateOfBirthPopupRef",
        cover: "",
        "transition-show": "scale",
        "transition-hide": "scale"
      }, {
        default: (0,runtime_core_esm_bundler/* withCtx */.k6)(() => [(0,runtime_core_esm_bundler/* createVNode */.bF)(_component_q_date, {
          locale: _ctx.locale == 'en-US' ? _ctx.myLocaleEng : _ctx.myLocaleSrb,
          color: _ctx.gender,
          modelValue: _ctx.dateOfBirth,
          "onUpdate:modelValue": [_cache[2] || (_cache[2] = $event => _ctx.dateOfBirth = $event), _cache[3] || (_cache[3] = $event => _ctx.dateOfBirthPopupRef.hide())],
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
  }, 8, ["color", "modelValue", "label", "rules"]), (0,runtime_core_esm_bundler/* createVNode */.bF)(_component_q_input, {
    type: "number",
    color: _ctx.gender,
    ref: "birthWeightRef",
    rounded: "",
    outlined: "",
    modelValue: _ctx.birthWeight,
    "onUpdate:modelValue": _cache[6] || (_cache[6] = $event => _ctx.birthWeight = $event),
    label: _ctx.$t('general.birthWeight'),
    rules: [val => !!val || _ctx.$t('general.requiredField')]
  }, null, 8, ["color", "modelValue", "label", "rules"]), (0,runtime_core_esm_bundler/* createVNode */.bF)(_component_q_input, {
    type: "number",
    color: _ctx.gender,
    ref: "birthHeightRef",
    rounded: "",
    outlined: "",
    modelValue: _ctx.birthHeight,
    "onUpdate:modelValue": _cache[7] || (_cache[7] = $event => _ctx.birthHeight = $event),
    label: _ctx.$t('general.birthHeight'),
    rules: [val => !!val || _ctx.$t('general.requiredField')]
  }, null, 8, ["color", "modelValue", "label", "rules"]), (0,runtime_core_esm_bundler/* createVNode */.bF)(_component_q_input, {
    type: "number",
    color: _ctx.gender,
    ref: "fathersHeightRef",
    rounded: "",
    outlined: "",
    modelValue: _ctx.fathersHeight,
    "onUpdate:modelValue": _cache[8] || (_cache[8] = $event => _ctx.fathersHeight = $event),
    label: _ctx.$t('general.fathersHeight'),
    rules: [val => !!val || _ctx.$t('general.requiredField')]
  }, null, 8, ["color", "modelValue", "label", "rules"]), (0,runtime_core_esm_bundler/* createVNode */.bF)(_component_q_input, {
    type: "number",
    color: _ctx.gender,
    ref: "mothersHeightRef",
    rounded: "",
    outlined: "",
    modelValue: _ctx.mothersHeight,
    "onUpdate:modelValue": _cache[9] || (_cache[9] = $event => _ctx.mothersHeight = $event),
    label: _ctx.$t('general.mothersHeight'),
    rules: [val => !!val || _ctx.$t('general.requiredField')]
  }, null, 8, ["color", "modelValue", "label", "rules"]), (0,runtime_core_esm_bundler/* createVNode */.bF)(_component_q_avatar, {
    size: "10em",
    style: {
      "margin": "20px"
    }
  }, {
    default: (0,runtime_core_esm_bundler/* withCtx */.k6)(() => [_ctx.childPhoto != null ? ((0,runtime_core_esm_bundler/* openBlock */.uX)(), (0,runtime_core_esm_bundler/* createElementBlock */.CE)("img", {
      key: 0,
      src: _ctx.childPhoto,
      style: {
        "object-fit": "cover"
      }
    }, null, 8, _hoisted_3)) : ((0,runtime_core_esm_bundler/* openBlock */.uX)(), (0,runtime_core_esm_bundler/* createBlock */.Wv)(_component_q_icon, {
      key: 1,
      name: "fa-solid fa-baby",
      size: "2em",
      style: (0,shared_esm_bundler/* normalizeStyle */.Tr)({
        color: [_ctx.gender == 'male' ? '#759eff' : '#de60ba']
      })
    }, null, 8, ["style"]))]),
    _: 1
  }), (0,runtime_core_esm_bundler/* createVNode */.bF)(_component_base64, {
    label: _ctx.$t('general.addPhoto'),
    multiple: false,
    gender: _ctx.gender,
    onDone: _ctx.getAppIcon
  }, null, 8, ["label", "gender", "onDone"]), (0,runtime_core_esm_bundler/* createElementVNode */.Lk)("div", _hoisted_4, [(0,runtime_core_esm_bundler/* createElementVNode */.Lk)("div", _hoisted_5, (0,shared_esm_bundler/* toDisplayString */.v_)(_ctx.$t("general.targetHeight")) + ":", 1), (0,runtime_core_esm_bundler/* createElementVNode */.Lk)("div", _hoisted_6, (0,shared_esm_bundler/* toDisplayString */.v_)(_ctx.childTargetHeight ? _ctx.childTargetHeight + " cm" : "/"), 1)]), (0,runtime_core_esm_bundler/* createElementVNode */.Lk)("div", _hoisted_7, [(0,runtime_core_esm_bundler/* createVNode */.bF)(_component_q_btn, {
    push: "",
    class: "text-white bg-negative q-mr-sm col",
    label: _ctx.$t('general.cancel'),
    onClick: _ctx.otkazi
  }, null, 8, ["label", "onClick"]), (0,runtime_core_esm_bundler/* createVNode */.bF)(_component_q_btn, {
    push: "",
    class: "text-white bg-positive q-ml-sm col",
    label: _ctx.id == null || _ctx.id == undefined ? _ctx.$t('general.add') : _ctx.$t('general.edit'),
    onClick: _ctx.save
  }, null, 8, ["label", "onClick"])])]);
}
;// CONCATENATED MODULE: ./src/components/addChildComponent.vue?vue&type=template&id=77b7407c

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.push.js
var es_array_push = __webpack_require__(239);
// EXTERNAL MODULE: ./node_modules/@vue/reactivity/dist/reactivity.esm-bundler.js
var reactivity_esm_bundler = __webpack_require__(8734);
// EXTERNAL MODULE: ./node_modules/vue-router/dist/vue-router.mjs
var vue_router = __webpack_require__(455);
// EXTERNAL MODULE: ./node_modules/quasar/src/composables/use-quasar/use-quasar.js
var use_quasar = __webpack_require__(4907);
// EXTERNAL MODULE: ./node_modules/quasar/src/utils/date/date.js
var date = __webpack_require__(6246);
// EXTERNAL MODULE: ./src/components/base64.vue + 4 modules
var base64 = __webpack_require__(8012);
// EXTERNAL MODULE: ./node_modules/vue-i18n/dist/vue-i18n.mjs + 3 modules
var vue_i18n = __webpack_require__(3537);
;// CONCATENATED MODULE: ./node_modules/@quasar/app-webpack/lib/webpack/loader.js.transform-quasar-imports.js!./node_modules/babel-loader/lib/index.js??clonedRuleSet-2.use[0]!./node_modules/@quasar/app-webpack/lib/webpack/loader.vue.auto-import-quasar.js??ruleSet[0].use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[1]!./src/components/addChildComponent.vue?vue&type=script&lang=js






/* harmony default export */ const addChildComponentvue_type_script_lang_js = ((0,runtime_core_esm_bundler/* defineComponent */.pM)({
  name: "addChildComponent",
  components: {
    base64: base64/* default */.A
  },
  props: ["gender", "selectedChild"],
  setup(props, ctx) {
    let router = (0,vue_router/* useRouter */.rd)();
    const $q = (0,use_quasar/* default */.A)();
    const {
      locale
    } = (0,vue_i18n/* useI18n */.s9)({
      useScope: "global"
    });
    let id = (0,reactivity_esm_bundler/* ref */.KR)(null);
    let firstName = (0,reactivity_esm_bundler/* ref */.KR)(null);
    let lastName = (0,reactivity_esm_bundler/* ref */.KR)(null);
    let dateOfBirth = (0,reactivity_esm_bundler/* ref */.KR)(date/* default.formatDate */.Ay.formatDate(Date.now(), "DD.MM.YYYY."));
    let birthWeight = (0,reactivity_esm_bundler/* ref */.KR)(null);
    let birthHeight = (0,reactivity_esm_bundler/* ref */.KR)(null);
    let fathersHeight = (0,reactivity_esm_bundler/* ref */.KR)(null);
    let mothersHeight = (0,reactivity_esm_bundler/* ref */.KR)(null);
    let childPhoto = (0,reactivity_esm_bundler/* ref */.KR)(null);
    let childTargetHeight = (0,reactivity_esm_bundler/* ref */.KR)(null);
    let firstNameRef = (0,reactivity_esm_bundler/* ref */.KR)(null);
    let lastNameRef = (0,reactivity_esm_bundler/* ref */.KR)(null);
    let dateOfBirthRef = (0,reactivity_esm_bundler/* ref */.KR)(null);
    let dateOfBirthPopupRef = (0,reactivity_esm_bundler/* ref */.KR)(null);
    let birthWeightRef = (0,reactivity_esm_bundler/* ref */.KR)(null);
    let birthHeightRef = (0,reactivity_esm_bundler/* ref */.KR)(null);
    let fathersHeightRef = (0,reactivity_esm_bundler/* ref */.KR)(null);
    let mothersHeightRef = (0,reactivity_esm_bundler/* ref */.KR)(null);
    let heightData = (0,reactivity_esm_bundler/* ref */.KR)(undefined);
    let gender = (0,reactivity_esm_bundler/* ref */.KR)(undefined);
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
    (0,runtime_core_esm_bundler/* watch */.wB)(fathersHeight, newFathersHeight => {
      if (newFathersHeight != null && mothersHeight.value != null) {
        childTargetHeight.value = (parseFloat(newFathersHeight) + parseFloat(mothersHeight.value) + (gender == "male" ? 13 : -13)) / 2;
      }
    });
    (0,runtime_core_esm_bundler/* watch */.wB)(mothersHeight, newMothersHeight => {
      if (newMothersHeight != null && fathersHeight.value != null) {
        childTargetHeight.value = (parseFloat(newMothersHeight) + parseFloat(fathersHeight.value) + (gender.value == "male" ? 13 : -13)) / 2;
      }
    });
    (0,runtime_core_esm_bundler/* onMounted */.sV)(() => {
      if (props.selectedChild.id != undefined) {
        id.value = props.selectedChild.id;
        firstName.value = props.selectedChild.firstName;
        lastName.value = props.selectedChild.lastName;
        dateOfBirth.value = props.selectedChild.dateOfBirth;
        birthWeight.value = props.selectedChild.birthWeight;
        birthHeight.value = props.selectedChild.birthHeight;
        fathersHeight.value = props.selectedChild.fathersHeight;
        mothersHeight.value = props.selectedChild.mothersHeight;
        childPhoto.value = props.selectedChild.childPhoto;
        heightData.value = props.selectedChild.heightData;
        gender.value = props.selectedChild.gender;
      } else gender.value = props.gender;
    });
    function goTo(path) {
      router.push(path);
    }
    function save() {
      if (firstName.value == null || lastName.value == null || dateOfBirth.value == null || birthWeight.value == null || birthHeight.value == null || fathersHeight.value == null || mothersHeight.value == null) {
        firstNameRef.value.validate();
        lastNameRef.value.validate();
        dateOfBirthRef.value.validate();
        birthWeightRef.value.validate();
        birthHeightRef.value.validate();
        fathersHeightRef.value.validate();
        mothersHeightRef.value.validate();
        $q.notify({
          message: $t("general.allFieldsAreRequired"),
          color: "negative",
          position: "top"
        });
        return;
      }
      let childInformation = {
        id: id.value,
        firstName: firstName.value,
        lastName: lastName.value,
        dateOfBirth: dateOfBirth.value,
        birthWeight: birthWeight.value,
        birthHeight: birthHeight.value,
        fathersHeight: fathersHeight.value,
        mothersHeight: mothersHeight.value,
        childPhoto: childPhoto.value,
        childTargetHeight: childTargetHeight.value,
        gender: gender.value,
        heightData: heightData.value
      };
      ctx.emit("add_child", childInformation);
    }
    function otkazi() {
      ctx.emit("resetuj-selektovano-dete", "");
      goTo("/");
    }
    function getAppIcon(files) {
      downscaleImage(files.base64, 320, "image/jpeg", 0.7);
    }
    function downscaleImage(dataUrl, newWidth, imageType, imageArguments) {
      "use strict";

      var image, oldWidth, oldHeight, newHeight, canvas, ctx, newDataUrl;
      debugger;
      // Provide default values
      imageType = imageType || "image/jpeg";
      imageArguments = imageArguments || 0.7;

      // Create a temporary image so that we can compute the height of the downscaled image.
      image = new Image();
      image.src = dataUrl;
      // Sacekamo da se slika ucita inace nece raditi
      image.onload = function () {
        // izracunamo visinu na osnovu zeljene sirine
        oldWidth = image.width;
        oldHeight = image.height;
        newHeight = Math.floor(oldHeight / oldWidth * newWidth);

        // Create a temporary canvas to draw the downscaled image on.
        canvas = document.createElement("canvas");
        canvas.width = newWidth;
        canvas.height = newHeight;

        // Draw the downscaled image on the canvas and return the new data URL.
        ctx = canvas.getContext("2d");
        ctx.drawImage(image, 0, 0, newWidth, newHeight);
        newDataUrl = canvas.toDataURL(imageType, imageArguments);
        childPhoto.value = newDataUrl;
        // i sada samo sacuvamo to tamo gde nam treba
        return newDataUrl;
      };
    }
    return {
      id,
      firstName,
      lastName,
      dateOfBirth,
      birthWeight,
      birthHeight,
      fathersHeight,
      mothersHeight,
      childPhoto,
      childTargetHeight,
      firstNameRef,
      lastNameRef,
      dateOfBirthRef,
      dateOfBirthPopupRef,
      birthWeightRef,
      birthHeightRef,
      fathersHeightRef,
      mothersHeightRef,
      myLocaleSrb,
      myLocaleEng,
      locale,
      otkazi,
      goTo,
      getAppIcon,
      save
    };
  }
}));
;// CONCATENATED MODULE: ./src/components/addChildComponent.vue?vue&type=script&lang=js
 
// EXTERNAL MODULE: ./node_modules/vue-loader/dist/exportHelper.js
var exportHelper = __webpack_require__(2807);
// EXTERNAL MODULE: ./node_modules/quasar/src/components/input/QInput.js + 2 modules
var QInput = __webpack_require__(9270);
// EXTERNAL MODULE: ./node_modules/quasar/src/components/icon/QIcon.js
var QIcon = __webpack_require__(492);
// EXTERNAL MODULE: ./node_modules/quasar/src/components/popup-proxy/QPopupProxy.js
var QPopupProxy = __webpack_require__(8975);
// EXTERNAL MODULE: ./node_modules/quasar/src/components/date/QDate.js + 1 modules
var QDate = __webpack_require__(8670);
// EXTERNAL MODULE: ./node_modules/quasar/src/components/btn/QBtn.js
var QBtn = __webpack_require__(6384);
// EXTERNAL MODULE: ./node_modules/quasar/src/components/avatar/QAvatar.js
var QAvatar = __webpack_require__(3952);
// EXTERNAL MODULE: ./node_modules/quasar/src/directives/close-popup/ClosePopup.js
var ClosePopup = __webpack_require__(8672);
// EXTERNAL MODULE: ./node_modules/@quasar/app-webpack/lib/webpack/runtime.auto-import.js
var runtime_auto_import = __webpack_require__(8582);
var runtime_auto_import_default = /*#__PURE__*/__webpack_require__.n(runtime_auto_import);
;// CONCATENATED MODULE: ./src/components/addChildComponent.vue




;


const __exports__ = /*#__PURE__*/(0,exportHelper/* default */.A)(addChildComponentvue_type_script_lang_js, [['render',render]])

/* harmony default export */ const addChildComponent = (__exports__);
;






runtime_auto_import_default()(addChildComponentvue_type_script_lang_js, 'components', {QInput: QInput/* default */.A,QIcon: QIcon/* default */.A,QPopupProxy: QPopupProxy/* default */.A,QDate: QDate/* default */.A,QBtn: QBtn/* default */.A,QAvatar: QAvatar/* default */.A});runtime_auto_import_default()(addChildComponentvue_type_script_lang_js, 'directives', {ClosePopup: ClosePopup/* default */.A});


/***/ }),

/***/ 8012:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  A: () => (/* binding */ base64)
});

// EXTERNAL MODULE: ./node_modules/@vue/runtime-core/dist/runtime-core.esm-bundler.js
var runtime_core_esm_bundler = __webpack_require__(1758);
// EXTERNAL MODULE: ./node_modules/@vue/shared/dist/shared.esm-bundler.js
var shared_esm_bundler = __webpack_require__(8790);
;// CONCATENATED MODULE: ./node_modules/@quasar/app-webpack/lib/webpack/loader.js.transform-quasar-imports.js!./node_modules/babel-loader/lib/index.js??clonedRuleSet-2.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/@quasar/app-webpack/lib/webpack/loader.vue.auto-import-quasar.js??ruleSet[0].use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[1]!./src/components/base64.vue?vue&type=template&id=c8c99e2e&scoped=true

const _withScopeId = n => ((0,runtime_core_esm_bundler/* pushScopeId */.Qi)("data-v-c8c99e2e"), n = n(), (0,runtime_core_esm_bundler/* popScopeId */.jt)(), n);
const _hoisted_1 = {
  key: 0
};
const _hoisted_2 = /*#__PURE__*/_withScopeId(() => /*#__PURE__*/(0,runtime_core_esm_bundler/* createElementVNode */.Lk)("br", null, null, -1));
const _hoisted_3 = ["multiple"];
function render(_ctx, _cache, $props, $setup, $data, $options) {
  return (0,runtime_core_esm_bundler/* openBlock */.uX)(), (0,runtime_core_esm_bundler/* createElementBlock */.CE)("div", null, [$data.allFiles.length > 0 ? ((0,runtime_core_esm_bundler/* openBlock */.uX)(), (0,runtime_core_esm_bundler/* createElementBlock */.CE)("label", _hoisted_1, (0,shared_esm_bundler/* toDisplayString */.v_)($data.allFiles[0].name), 1)) : (0,runtime_core_esm_bundler/* createCommentVNode */.Q3)("", true), _hoisted_2, (0,runtime_core_esm_bundler/* createElementVNode */.Lk)("input", {
    type: "file",
    onChange: _cache[0] || (_cache[0] = (...args) => $options.onChange && $options.onChange(...args)),
    multiple: $props.multiple,
    name: "file",
    id: "file",
    class: "inputfile"
  }, null, 40, _hoisted_3), (0,runtime_core_esm_bundler/* createElementVNode */.Lk)("label", {
    for: "file",
    style: (0,shared_esm_bundler/* normalizeStyle */.Tr)([{
      "text-transform": "uppercase",
      "font-size": "10pt",
      "color": "white",
      "border-radius": "8px",
      "box-shadow": "3px 0px 0px"
    }, {
      backgroundColor: $data.genderLocal,
      boxShadow: ['0px 3px 0px 0px ' + $data.shadowColor + ', 0 1px 5px rgba(0, 0, 0, 0.2), 0 2px 2px rgba(0, 0, 0, 0.14), 0 3px 1px -2px rgba(0, 0, 0, 0.12)']
    }]),
    class: "myShadow"
  }, (0,shared_esm_bundler/* toDisplayString */.v_)($props.label), 5)]);
}
;// CONCATENATED MODULE: ./src/components/base64.vue?vue&type=template&id=c8c99e2e&scoped=true

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.push.js
var es_array_push = __webpack_require__(239);
;// CONCATENATED MODULE: ./node_modules/@quasar/app-webpack/lib/webpack/loader.js.transform-quasar-imports.js!./node_modules/babel-loader/lib/index.js??clonedRuleSet-2.use[0]!./node_modules/@quasar/app-webpack/lib/webpack/loader.vue.auto-import-quasar.js??ruleSet[0].use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[1]!./src/components/base64.vue?vue&type=script&lang=js

/*! Copyright (c) 2016 Naufal Rabbani (http://github.com/BosNaufal)
 * Licensed Under MIT (http://opensource.org/licenses/MIT)
 *
 * Vue File Base64 @ Version 1.0.0
 *
 * refs: https://developer.mozilla.org/en-US/docs/Web/API/FileReader/readAsDataURL
 */
/* harmony default export */ const base64vue_type_script_lang_js = ({
  props: ["multiple", "label", "gender"],
  data() {
    return {
      genderLocal: "",
      shadowColor: "",
      allFiles: []
    };
  },
  mounted() {
    this.genderLocal = this.gender == "male" ? "#759eff" : this.gender == "female" ? "#de60ba" : "#e1e1e1";
    this.shadowColor = this.gender == "male" ? "#5d7ecc" : this.gender == "female" ? "#ab498f" : "#c1c1c1";
    console.log("onMounted");
    console.log(this.gender);
    console.log(this.label);
    if (this.label == undefined || this.label == "") this.label = "Choose a file";
  },
  methods: {
    reset() {
      document.getElementById("file").value = null;
    },
    onChange(e) {
      debugger;
      let files = e.target.files;
      // if(files[0].size/1000 > 900){
      //   this.$q.notify({
      //       message: "Fajl ne sme biti veci od 900kb!",
      //       color: "red",
      // position: "top",
      //     });
      //     return;
      // }
      // Prvo proveri da li je slika
      if (!files[0].type.startsWith("image/")) {
        this.$q.notify({
          message: "Fajl mora biti slika!",
          color: "red",
          position: "top"
        });
        return;
      }
      // Process each file
      this.allFiles = [];
      for (var i = 0; i < files.length; i++) {
        let file = files[i];
        // Make new FileReader
        let reader = new FileReader();
        // Convert the file to base64 text
        reader.readAsDataURL(file);
        // on reader load somthing...
        reader.onload = () => {
          // Make a fileInfo Object

          let fileInfo = {
            name: file.name,
            type: file.type,
            size: Math.round(file.size / 1000) + " kB",
            base64: reader.result,
            file: file
          };
          // Push it to the state
          this.allFiles.push(fileInfo);
          // If all files have been proceed
          if (this.allFiles.length == files.length) {
            // Apply Callback function
            console.log(this.allFiles);
            console.log(this.multiple);
            if (this.multiple) this.$emit("done", this.allFiles);else this.$emit("done", this.allFiles[0]);
          }
        }; // reader.onload
      } // for
    } // onChange()
  }
});
;// CONCATENATED MODULE: ./src/components/base64.vue?vue&type=script&lang=js
 
// EXTERNAL MODULE: ./node_modules/vue-loader/dist/exportHelper.js
var exportHelper = __webpack_require__(2807);
;// CONCATENATED MODULE: ./src/components/base64.vue




;


const __exports__ = /*#__PURE__*/(0,exportHelper/* default */.A)(base64vue_type_script_lang_js, [['render',render],['__scopeId',"data-v-c8c99e2e"]])

/* harmony default export */ const base64 = (__exports__);

/***/ })

}]);
//# sourceMappingURL=chunk-common.js.map