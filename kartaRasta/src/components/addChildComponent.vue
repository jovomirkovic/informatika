<template>
  <div class="componentContainer text-center">
    <q-input
      :color="gender"
      ref="firstNameRef"
      rounded
      outlined
      v-model="firstName"
      :rules="[(val) => !!val || 'Obavezno polje']"
      label="Ime"
    />
    <q-input
      :color="gender"
      ref="lastNameRef"
      rounded
      outlined
      v-model="lastName"
      label="Prezime"
      :rules="[(val) => !!val || 'Obavezno polje']"
    />
    <q-input
      :color="gender"
      ref="dateOfBirthRef"
      rounded
      outlined
      v-model="dateOfBirth"
      label="Datum rođenja"
      mask="##.##.####."
      @click="dateOfBirthPopupRef.show()"
      :rules="[(val) => !!val || 'Obavezno polje']"
    >
      <template v-slot:append>
        <q-icon name="event" class="cursor-pointer">
          <q-popup-proxy
            ref="dateOfBirthPopupRef"
            cover
            transition-show="scale"
            transition-hide="scale"
          >
            <q-date :color="gender" v-model="dateOfBirth" mask="DD.MM.YYYY.">
              <div class="row items-center justify-end">
                <q-btn v-close-popup label="Close" color="primary" flat />
              </div>
            </q-date>
          </q-popup-proxy>
        </q-icon>
      </template>
    </q-input>
    <q-input
      :color="gender"
      ref="birthWeightRef"
      rounded
      outlined
      v-model="birthWeight"
      label="Telesna masa na rođenju (g)"
      :rules="[(val) => !!val || 'Obavezno polje']"
    />
    <q-input
      :color="gender"
      ref="birthHeightRef"
      rounded
      outlined
      v-model="birthHeight"
      label="Telesna dužina na rođenju (cm)"
      :rules="[(val) => !!val || 'Obavezno polje']"
    />
    <q-input
      :color="gender"
      ref="fathersHeightRef"
      rounded
      outlined
      v-model="fathersHeight"
      label="Visina oca (cm)"
      :rules="[(val) => !!val || 'Obavezno polje']"
    />
    <q-input
      :color="gender"
      ref="mothersHeightRef"
      rounded
      outlined
      v-model="mothersHeight"
      label="Visina majke (cm)"
      :rules="[(val) => !!val || 'Obavezno polje']"
    />

    <q-avatar size="10em" style="margin: 20px">
      <img v-if="childPhoto != null" :src="childPhoto" />
      <q-icon
        v-else
        name="fa-solid fa-baby"
        size="2em"
        :style="{ color: [gender == 'male' ? '#759eff' : '#de60ba'] }"
      />
    </q-avatar>

    <base64
      label="Dodaj fotografiju"
      :multiple="false"
      :gender="gender"
      @done="getAppIcon"
    ></base64>

    <div
      class="column items-center text-left text-bold q-mt-xl q-mb-xl"
      style="font-size: 12pt; color: #000000a0"
    >
      <div class="col">Cijana visina:</div>
      <div class="col">
        {{ childTargetHeight ? childTargetHeight + " cm" : "/" }}
      </div>
    </div>

    <div class="row">
      <q-btn
        push
        class="text-white bg-negative q-mr-sm col"
        label="Otkaži"
        @click="otkazi"
      />
      <q-btn
        push
        class="text-white bg-positive q-ml-sm col"
        label="Dodaj"
        @click="save"
      />
    </div>
  </div>
</template>

<script>
import { defineComponent, ref, onMounted } from "vue";
import { useRouter } from "vue-router";
import { useQuasar } from "quasar";
import base64 from "../components/base64.vue";

export default defineComponent({
  name: "addChildComponent",
  components: {
    base64,
  },
  props: ["gender", "selectedChild"],
  setup(props, ctx) {
    let router = useRouter();
    const $q = useQuasar();

    let id = ref(null);
    let firstName = ref(null);
    let lastName = ref(null);
    let dateOfBirth = ref(null);
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

    onMounted(() => {
      console.log("props");
      console.log(props);
      console.log(props.selectedChild);
      console.log("props");

      if (props.selectedChild.id != undefined) {
        id.value = props.selectedChild.id;
        firstName.value = props.selectedChild.firstName;
        lastName.value = props.selectedChild.lastName;
        dateOfBirth.value = props.selectedChild.dateOfBirth;
        birthWeight.value = props.selectedChild.birthWeight;
        birthHeight.value = props.selectedChild.birthHeight;
        fathersHeight.value = props.selectedChild.fathersHeight;
        heightData.value = props.selectedChild.heightData;
        mothersHeight.value = props.selectedChild.mothersHeight;
        gender.value = props.selectedChild.gender;
      }
    });

    function goTo(path) {
      router.push(path);
    }

    function save() {
      // proveri da li je sve uneto
      if (
        firstName.value == null ||
        lastName.value == null ||
        dateOfBirth.value == null ||
        birthWeight.value == null ||
        birthHeight.value == null ||
        fathersHeight.value == null ||
        mothersHeight.value == null
      ) {
        firstNameRef.value.validate();
        lastNameRef.value.validate();
        dateOfBirthRef.value.validate();
        birthWeightRef.value.validate();
        birthHeightRef.value.validate();
        fathersHeightRef.value.validate();
        mothersHeightRef.value.validate();
        $q.notify({
          message: "Sva polja su obavezna",
          color: "negative",
        });
        return;
      }

      let childInfomation = {
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

      console.log("childInfomation");
      console.log(childInfomation);
      ctx.emit("add_child", childInfomation);

      // goTo("/");
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
