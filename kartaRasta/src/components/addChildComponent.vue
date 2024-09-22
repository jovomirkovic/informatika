<template>
  <div class="componentContainer text-center">
    <q-input :color="gender" ref="firstNameRef" rounded outlined v-model="firstName"
      :rules="[(val) => !!val || $t('general.requiredField')]" :label="$t('general.firstName')" />
    <q-input :color="gender" ref="lastNameRef" rounded outlined v-model="lastName" :label="$t('general.lastName')"
      :rules="[(val) => !!val || $t('general.requiredField')]" />
    <!-- <q-input :color="gender" ref="dateOfBirthRef" rounded outlined v-model="dateOfBirth"
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
</q-input> -->
    <div class="row no-wrap"
      style="border: 1px solid #9a9a9a; border-radius: 30px; overflow: hidden; margin-bottom: 20px;">
      <VueScrollPicker @update:modelValue="proveriDatum" v-model="selectedDay" :options="dayOptions" />
      <VueScrollPicker @update:modelValue="proveriDatum" v-model="selectedMonth" :options="monthOptions" />
      <VueScrollPicker @update:modelValue="proveriDatum" v-model="selectedYear" :options="yearOptions" />
    </div>
    <q-input type="number" :color="gender" ref="birthWeightRef" rounded outlined v-model="birthWeight"
      :label="$t('general.birthWeight')" style="margin-bottom: 20px;" />
    <q-input type="number" :color="gender" ref="birthHeightRef" rounded outlined v-model="birthHeight"
      :label="$t('general.birthHeight')" style="margin-bottom: 20px;" />
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
import { VueScrollPicker } from 'vue-scroll-picker'
import "vue-scroll-picker/lib/style.css";

export default defineComponent({
  name: "addChildComponent",
  components: {
    base64,
    VueScrollPicker,
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


    let selectedDay = ref(null);
    let selectedMonth = ref(null);
    let selectedYear = ref(null);

    let dayOptions = ref([
      1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31
    ]);
    let monthOptions = ref([
      'Jan',
      'Feb',
      'Mar',
      'Apr',
      'May',
      'Jun',
      'Jul',
      'Aug',
      'Sep',
      'Oct',
      'Nov',
      'Dec',
    ]);
    let yearOptions = ref([
      1900,
      1901,
      1902,
      1903,
      1904,
      1905,
      1906,
      1907,
      1908,
      1909,
      1910,
      1911,
      1912,
      1913,
      1914,
      1915,
      1916,
      1917,
      1918,
      1919,
      1920,
      1921,
      1922,
      1923,
      1924,
      1925,
      1926,
      1927,
      1928,
      1929,
      1930,
      1931,
      1932,
      1933,
      1934,
      1935,
      1936,
      1937,
      1938,
      1939,
      1940,
      1941,
      1942,
      1943,
      1944,
      1945,
      1946,
      1947,
      1948,
      1949,
      1950,
      1951,
      1952,
      1953,
      1954,
      1955,
      1956,
      1957,
      1958,
      1959,
      1960,
      1961,
      1962,
      1963,
      1964,
      1965,
      1966,
      1967,
      1968,
      1969,
      1970,
      1971,
      1972,
      1973,
      1974,
      1975,
      1976,
      1977,
      1978,
      1979,
      1980,
      1981,
      1982,
      1983,
      1984,
      1985,
      1986,
      1987,
      1988,
      1989,
      1990,
      1991,
      1992,
      1993,
      1994,
      1995,
      1996,
      1997,
      1998,
      1999,
      2000,
      2001,
      2002,
      2003,
      2004,
      2005,
      2006,
      2007,
      2008,
      2009,
      2010,
      2011,
      2012,
      2013,
      2014,
      2015,
      2016,
      2017,
      2018,
      2019,
      2020,
      2021,
      2022,
      2023,
      2024,
      2025,
      2026,
      2027,
      2028,
      2029,
      2030,
      2031,
      2032,
      2033,
      2034,
      2035,
      2036,
      2037,
      2038,
      2039,
      2040,
      2041,
      2042,
      2043,
      2044,
      2045,
      2046,
      2047,
      2048,
      2049,
      2050,
      2051,
      2052,
      2053,
      2054,
      2055,
      2056,
      2057,
      2058,
      2059,
      2060,
      2061,
      2062,
      2063,
      2064,
      2065,
      2066,
      2067,
      2068,
      2069,
      2070,
      2071,
      2072,
      2073,
      2074,
      2075,
      2076,
      2077,
      2078,
      2079,
      2080,
      2081,
      2082,
      2083,
      2084,
      2085,
      2086,
      2087,
      2088,
      2089,
      2090,
      2091,
      2092,
      2093,
      2094,
      2095,
      2096,
      2097,
      2098,
      2099,
      2100,
      2101,
      2102,
      2103,
      2104,
      2105,
      2106,
      2107,
      2108,
      2109,
      2110,
      2111,
      2112,
      2113,
      2114,
      2115,
      2116,
      2117,
      2118,
      2119,
      2120,
      2121,
      2122,
      2123,
      2124,
      2125,
      2126,
      2127,
      2128,
      2129,
      2130,
      2131,
      2132,
      2133,
      2134,
      2135,
      2136,
      2137,
      2138,
      2139,
      2140,
      2141,
      2142,
      2143,
      2144,
      2145,
      2146,
      2147,
      2148,
      2149,
      2150,
      2151,
      2152,
      2153,
      2154,
      2155,
      2156,
      2157,
      2158,
      2159,
      2160,
      2161,
      2162,
      2163,
      2164,
      2165,
      2166,
      2167,
      2168,
      2169,
      2170,
      2171,
      2172,
      2173,
      2174,
      2175,
      2176,
      2177,
      2178,
      2179,
      2180,
      2181,
      2182,
      2183,
      2184,
      2185,
      2186,
      2187,
      2188,
      2189,
      2190,
      2191,
      2192,
      2193,
      2194,
      2195,
      2196,
      2197,
      2198,
      2199,
      2200
    ]);

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
      } else childTargetHeight.value = null
    });
    watch(mothersHeight, (newMothersHeight) => {
      if (newMothersHeight != null && newMothersHeight?.trim() != "" && fathersHeight.value != null && fathersHeight.value?.trim() != "") {
        childTargetHeight.value =
          (parseFloat(newMothersHeight) +
            parseFloat(fathersHeight.value) +
            (gender.value == "male" ? 13 : -13)) /
          2;
      } else childTargetHeight.value = null
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

        const today = date.extractDate(props.selectedChild.dateOfBirth, 'DD.MM.YYYY.')
        selectedDay.value = today.getDate(); // Get the day of the month (1-31)
        selectedMonth.value = monthOptions.value[today.getMonth()]; // Get the month as an index (0-11) and convert to abbreviation
        selectedYear.value = today.getFullYear(); // Get the full year (e.g., 2024)
      } else {
        gender.value = props.gender;

        const today = new Date();
        selectedDay.value = today.getDate(); // Get the day of the month (1-31)
        selectedMonth.value = monthOptions.value[today.getMonth()]; // Get the month as an index (0-11) and convert to abbreviation
        selectedYear.value = today.getFullYear(); // Get the full year (e.g., 2024)
      }


    });
    function getDaysInMonth(year, month) {
      return new Date(year, month + 1, 0).getDate();
    }
    async function updateDayOptions() {
      if (selectedYear.value !== null && selectedMonth.value !== null) {
        const monthIndex = monthOptions.value.indexOf(selectedMonth.value); // Get the month index
        const daysInMonth = getDaysInMonth(selectedYear.value, monthIndex);
        dayOptions.value = Array.from({ length: daysInMonth }, (v, i) => i + 1); // Fill with days

      }
      if (!dayOptions.value.includes(selectedDay.value)) {
        selectedDay.value = dayOptions.value[dayOptions.value.length - 1]
      }

      return ""
    }
    function goTo(path) {
      router.push(path);
    }

    function save() {
      if (
        firstName.value == null ||
        lastName.value == null ||
        dateOfBirth.value == null
      ) {
        firstNameRef.value.validate();
        lastNameRef.value.validate();
        dateOfBirthRef.value.validate();
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

    function timeout(ms) {
      if (ms == 0) return;
      else return new Promise((resolve) => setTimeout(resolve, ms));
    }
    async function proveriDatum(e) {
      await timeout(300)
      await updateDayOptions()

      dateOfBirth.value = date.formatDate(date.extractDate(selectedDay.value + "/" + (monthOptions.value.indexOf(selectedMonth.value) + 1) + "/" + selectedYear.value, "D/M/YYYY"), "DD.MM.YYYY.")
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
      selectedDay,
      selectedMonth,
      selectedYear,
      dayOptions,
      monthOptions,
      yearOptions,
      proveriDatum,
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

.vue-scroll-picker-layer-top {
  background: linear-gradient(180deg, #dae4ff 10%, #dae4ffb0);
}

.vue-scroll-picker-layer-bottom {
  background: linear-gradient(0deg, #dae4ff 10%, #dae4ffb0);
}

.vue-scroll-picker-item-selected {
  font-weight: 800;
  color: #000000;
}
</style>
