<template>
  <q-page class="container">
    <q-toolbar style="color: #00000040">
      <q-toolbar-title
        style="
          font-weight: 800;
          font-size: 15vw;
          line-height: 1;
          margin: 25px 25px;
        "
      >
        {{ $t("general.title1") }} <br />
        {{ $t("general.title2") }}
      </q-toolbar-title>

      <q-btn-dropdown
        flat
        dense
        round
        dropdown-icon="more_vert"
        style="font-size: 5vw; margin-right: 15px"
        content-style="background-color: #00000000;"
      >
        <div style="background-color: #00000040; color: #ffffff">
          <q-item
            @click="languageDialog = true"
            clickable
            v-ripple
            v-close-popup
            class="flex items-center"
          >
            <q-icon size="1.5em" name="language" style="margin-right: 10px" />
            <span> {{ $t("general.language") }}</span>
          </q-item>

          <q-item
            @click="informationDialog = true"
            clickable
            v-ripple
            v-close-popup
            class="flex items-center"
          >
            <q-icon size="1.5em" name="info" style="margin-right: 10px" />
            <span> {{ $t("general.info") }} </span>
          </q-item>
        </div>
      </q-btn-dropdown>
    </q-toolbar>
    <div
      style="min-height: calc(100vh - 180px); margin: 10px"
      class="flex justify-end column"
    >
      <span class="row">
        <q-btn @click="goTo('/addDaughter')" class="girlBtn mainBtn" push>
          <q-icon size="3em" name="female" />
          <div style="width: 70%">{{ $t("general.addGirl") }}</div>
        </q-btn>

        <q-btn @click="goTo('/addSon')" class="boyBtn mainBtn" push>
          <q-icon size="3em" name="male" />
          <div style="width: 70%">{{ $t("general.addBoy") }}</div>
        </q-btn>
      </span>

      <q-btn @click="goTo('/myChildren')" class="kidsBtn mainBtn" push>
        <q-icon size="3em" name="fa-solid fa-child-reaching" />
        <div style="width: 70%">{{ $t("general.myChildren") }}</div>
      </q-btn>
      <p style="color: #00000040; text-align: center; font-size: 12pt">
        {{ $t("general.heightIsNotASmallThing") }}
      </p>
    </div>

    <q-dialog v-model="informationDialog">
      <q-card
        style="
          background: linear-gradient(180deg, #d5e2ff 0%, #f9effc 100%);
          color: #1e1e1e;
        "
      >
        <q-card-section class="row items-center q-pb-none">
          <div class="text-h6">{{ $t("general.aboutTheApp") }}</div>
          <q-space />
          <q-btn icon="close" flat round dense v-close-popup />
        </q-card-section>

        <q-card-section v-html="$t('general.aboutTheAppText')">
        </q-card-section>
      </q-card>
    </q-dialog>

    <q-dialog v-model="languageDialog">
      <q-card
        style="
          background: linear-gradient(180deg, #d5e2ff 0%, #f9effc 100%);
          color: #1e1e1e;
          width: 100%;
        "
      >
        <q-card-section class="row items-center q-pb-none">
          <div class="text-h6">{{ $t("general.languageSelection") }}</div>
          <q-space />
          <q-btn icon="close" flat round dense v-close-popup />
        </q-card-section>

        <q-card-section class="flex items-center column">
          <q-avatar style="margin: 20px">
            <img
              v-if="selectedLanguage.value == 'sr'"
              src="../assets/flags/srb.png"
            />
            <img
              v-else-if="selectedLanguage.value == 'en-US'"
              src="../assets/flags/eng.png"
            />
            <!-- <img :src="'../assets/flags/' + selectedLanguage.value + '.png'" /> -->
          </q-avatar>
          <q-select
            style="width: 100%; margin-bottom: 25px"
            rounded
            outlined
            v-model="selectedLanguage"
            :options="languageOptions"
            :label="$t('general.selectLanguage')"
            @update:model-value="changeLanguage"
          />
        </q-card-section>
      </q-card>
    </q-dialog>
  </q-page>
</template>

<script>
import { defineComponent, onMounted, ref } from "vue";
import { useRouter } from "vue-router";
import { useI18n } from "vue-i18n";

export default defineComponent({
  name: "IndexPage",
  setup(props, ctx) {
    let router = useRouter();
    const { locale } = useI18n({ useScope: "global" });

    let informationDialog = ref(false);
    let languageDialog = ref(false);
    let selectedLanguage = ref({
      label: "Srpski",
      value: "sr",
    });
    const languageOptions = [
      {
        label: "Srpski",
        value: "sr",
      },
      {
        label: "English",
        value: "en-US",
      },
    ];

    onMounted(() => {
      ctx.emit("resetuj-selektovano-dete", "");

      if (localStorage.getItem("lang") != null) {
        if (localStorage.getItem("lang") == "sr") {
          selectedLanguage.value = {
            label: "Srpski",
            value: "sr",
          };
        } else {
          selectedLanguage.value = {
            label: "English",
            value: "en-US",
          };
        }
      }
    });

    function changeLanguage() {
      locale.value = selectedLanguage.value.value;
      localStorage.setItem("lang", selectedLanguage.value.value);
    }
    function goTo(path) {
      console.log(path);
      console.log(router);
      router.push(path);
    }

    return {
      informationDialog,
      languageDialog,
      selectedLanguage,
      languageOptions,
      goTo,
      changeLanguage,
    };
  },
});
</script>
<style lang="scss">
.container {
  background: linear-gradient(
    180deg,
    rgba(117, 158, 255, 0.3) 0%,
    rgba(234, 202, 244, 0.3) 100%
  );
}

.mainBtn {
  text-shadow: 0px 3px 2px rgba(0, 0, 0, 0.3);
  font-size: 15pt;
  font-weight: 800;
  padding: 15px;
  margin: 10px;
  width: min(calc(50% - 20px), 200px);
  height: 180px;
  color: #ffffff;
  border-radius: 15px;
}

.girlBtn {
  background-color: var(--q-girl-color);
}
.boyBtn {
  background-color: var(--q-boy-color);
}
.kidsBtn {
  width: calc(100% - 20px);
  height: 100px;
  background-color: #e0d9d9;
  background-color: #00000030;
}
</style>
