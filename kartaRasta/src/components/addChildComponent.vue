<template>
  <div class="componentContainer text-center">
    <q-input :color="gender" ref="firstNameRef" rounded outlined v-model="firstName"
      :rules="[(val) => !!val || $t('general.requiredField')]" :label="$t('general.firstName')" />
    <q-input :color="gender" ref="lastNameRef" rounded outlined v-model="lastName" :label="$t('general.lastName')"
      :rules="[(val) => !!val || $t('general.requiredField')]" />
    <q-input :color="gender" ref="dateOfBirthRef" rounded outlined v-model="dateOfBirth"
      :label="$t('general.dateOfBirth')" mask="##.##.####." @click="dateOfBirthPopupRef.show()"
      :rules="[(val) => !!val || $t('general.requiredField')]">
      <template v-slot:append>
        <q-icon name="event" class="cursor-pointer">
          <q-popup-proxy ref="dateOfBirthPopupRef" cover transition-show="scale" transition-hide="scale">
            <q-date :locale="locale == 'en-US' ? myLocaleEng : myLocaleSrb" :color="gender" v-model="dateOfBirth"
              mask="DD.MM.YYYY." @update:model-value="dateOfBirthPopupRef.hide()">
              <div class="row items-center justify-end">
                <q-btn v-close-popup label="Close" color="primary" flat />
              </div>
            </q-date>
          </q-popup-proxy>
        </q-icon>
      </template>
    </q-input>
    <q-input type="number" :color="gender" ref="birthWeightRef" rounded outlined v-model="birthWeight"
      :label="$t('general.birthWeight')" :rules="[(val) => !!val || $t('general.requiredField')]" />
    <q-input type="number" :color="gender" ref="birthHeightRef" rounded outlined v-model="birthHeight"
      :label="$t('general.birthHeight')" :rules="[(val) => !!val || $t('general.requiredField')]" />
    <q-input type="number" :color="gender" ref="fathersHeightRef" rounded outlined v-model="fathersHeight"
      class="q-mb-lg" :label="$t('general.fathersHeight')" />
    <q-input type="number" :color="gender" ref="mothersHeightRef" rounded outlined v-model="mothersHeight"
      :label="$t('general.mothersHeight')" />

    <q-avatar size="10em" style="margin: 20px">
      <img v-if="childPhoto != null" :src="childPhoto" style="object-fit: cover" />
      <q-icon v-else name="fa-solid fa-baby" size="2em"
        :style="{ color: [gender == 'male' ? '#759eff' : '#de60ba'] }" />
    </q-avatar>

    <base64 :label="$t('general.addPhoto')" :multiple="false" :gender="gender" @done="getAppIcon"></base64>

    <div class="column items-center text-left text-bold q-mt-xl q-mb-xl" style="font-size: 12pt; color: #000000a0">
      <div class="col">{{ $t("general.targetHeight") }}:</div>
      <div class="col">
        {{ childTargetHeight ? childTargetHeight + " cm" : "/" }}
      </div>
    </div>

    <div class="row">
      <q-btn push class="text-white bg-negative q-mr-sm col" :label="$t('general.cancel')" @click="otkazi" />
      <q-btn push class="text-white bg-positive q-ml-sm col" :label="id == null || id == undefined ? $t('general.add') : $t('general.edit')
        " @click="save" />
    </div>
  </div>
</template>

<script>
import { defineComponent, ref, onMounted, watch } from "vue";
import { useRouter } from "vue-router";
import { useQuasar, date } from "quasar";
import base64 from "../components/base64.vue";
import { useI18n } from "vue-i18n";

export default defineComponent({
  name: "addChildComponent",
  components: {
    base64,
  },
  props: ["gender", "selectedChild"],
  setup(props, ctx) {
    let router = useRouter();
    const $q = useQuasar();
    const { locale } = useI18n({ useScope: "global" });

    let id = ref(null);
    let firstName = ref(null);
    let lastName = ref(null);
    let dateOfBirth = ref(date.formatDate(Date.now(), "DD.MM.YYYY."));
    let birthWeight = ref(null);
    let birthHeight = ref(null);
    let fathersHeight = ref(null);
    let mothersHeight = ref(null);
    let childPhoto = ref(null);
    let childTargetHeight = ref(null);

    let firstNameRef = ref(null);
    let lastNameRef = ref(null);
    let dateOfBirthRef = ref(null);
    let dateOfBirthPopupRef = ref(null);
    let birthWeightRef = ref(null);
    let birthHeightRef = ref(null);
    let fathersHeightRef = ref(null);
    let mothersHeightRef = ref(null);

    let heightData = ref(undefined);
    let gender = ref(undefined);

    const myLocaleSrb = {
      /* starting with Sunday */
      days: "Nedelja_Ponedeljak_Utorak_Sreda_Četvrtak_Petak_Subota".split("_"),
      daysShort: "Ned_Pon_Uto_Sre_Čet_Pet_Sub".split("_"),
      months:
        "Januar_Februar_Mart_April_Maj_Jun_Jul_Avgust_Septembar_Oktobar_Novembar_Decembar".split(
          "_"
        ),
      monthsShort: "Jan_Feb_Mar_Apr_Maj_Jun_Jul_Avg_Sep_Okt_Nov_Dec".split("_"),
      firstDayOfWeek: 1, // 0-6, 0 - Sunday, 1 Monday, ...
      format24h: true,
      pluralDay: "i",
    };
    const myLocaleEng = {
      /* starting with Sunday */
      days: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split(
        "_"
      ),
      daysShort: "Sun_Mon_Tue_Wed_Thu_Fry_Sat".split("_"),
      months:
        "January_February_March_April_May_Jun_July_August_September_October_November_December".split(
          "_"
        ),
      monthsShort: "Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"),
      firstDayOfWeek: 1, // 0-6, 0 - Sunday, 1 Monday, ...
      format24h: true,
      pluralDay: "i",
    };

    watch(fathersHeight, (newFathersHeight) => {
      if (newFathersHeight != null && newFathersHeight?.trim() != "" && mothersHeight.value != null && mothersHeight.value?.trim() != "") {
        childTargetHeight.value =
          (parseFloat(newFathersHeight) +
            parseFloat(mothersHeight.value) +
            (gender == "male" ? 13 : -13)) /
          2;
      }
    });
    watch(mothersHeight, (newMothersHeight) => {
      if (newMothersHeight != null && newMothersHeight?.trim() != "" && fathersHeight.value != null && fathersHeight.value?.trim() != "") {
        childTargetHeight.value =
          (parseFloat(newMothersHeight) +
            parseFloat(fathersHeight.value) +
            (gender.value == "male" ? 13 : -13)) /
          2;
      }
    });
    onMounted(() => {
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
      if (
        firstName.value == null ||
        lastName.value == null ||
        dateOfBirth.value == null ||
        birthWeight.value == null ||
        birthHeight.value == null
      ) {
        firstNameRef.value.validate();
        lastNameRef.value.validate();
        dateOfBirthRef.value.validate();
        birthWeightRef.value.validate();
        birthHeightRef.value.validate();
        $q.notify({
          message: $t("general.allFieldsAreRequired"),
          color: "negative",
          position: "top",
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
        heightData: heightData.value,
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
        newHeight = Math.floor((oldHeight / oldWidth) * newWidth);

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
      save,
    };
  },
});
</script>
<style lang="scss">
.componentContainer {
  padding: 15px;
}
</style>
