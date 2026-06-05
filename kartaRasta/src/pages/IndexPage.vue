<template>
  <q-page class="container flex justify-center">
    <q-toolbar style="color: #00000040">
      <q-toolbar-title style="
          font-weight: 800;
          font-size: 13vw;
          line-height: 1;
          margin: 25px 25px;
        ">
        {{ $t("general.title1") }} <br />
        {{ $t("general.title2") }}
      </q-toolbar-title>

      <q-btn-dropdown flat dense round dropdown-icon="more_vert" style="font-size: 5vw; margin-right: 15px"
        content-style="background-color: #00000000;">
        <div style="background-color: #00000040; color: #ffffff">
          <q-item @click="languageDialog = true" clickable v-ripple v-close-popup class="flex items-center">
            <q-icon size="1.5em" name="language" style="margin-right: 10px" />
            <span> {{ $t("general.language") }}</span>
          </q-item>

          <q-item @click="informationDialog = true" clickable v-ripple v-close-popup class="flex items-center">
            <q-icon size="1.5em" name="info" style="margin-right: 10px" />
            <span> {{ $t("general.info") }} </span>
          </q-item>

          <q-item @click="backupDialog = true" clickable v-ripple v-close-popup class="flex items-center">
            <q-icon size="1.5em" name="backup" style="margin-right: 10px" />
            <span> {{ $t("general.backup") }} </span>
          </q-item>
        </div>
      </q-btn-dropdown>
    </q-toolbar>

    <span style="height: 0px; overflow: visible; width: 80%;">
      <video width="100%" controls poster="../assets/placeholder.png">
        <source src="../assets/Merenje_visine_rasta.mp4" type="video/mp4">
        Your browser does not support HTML video.
      </video>
    </span>



    <div style="min-height: calc(100vh - 180px); margin: 10px" class="flex justify-end column">
      <span class="row">
        <q-btn @click="goTo('/addDaughter')" class="girlBtn mainBtn column no-wrap" push>
          <q-icon size="2.5em" name="female" />
          <div style="width: 90%;">{{ $t("general.addGirl") }}</div>
        </q-btn>

        <q-btn @click="goTo('/addSon')" class="boyBtn mainBtn column no-wrap" push>
          <q-icon size="2.5em" name="male" />
          <div style="width: 90%;">{{ $t("general.addBoy") }}</div>
        </q-btn>
      </span>

      <q-btn @click="goTo('/myChildren')" class="kidsBtn mainBtn" push>
        <q-icon size="2.5em" name="fa-solid fa-child-reaching" />
        <div style="width: 70%;">{{ $t("general.myChildren") }}</div>
      </q-btn>
      <p style="color: #00000040; text-align: center; font-size: 12pt">
        {{ $t("general.heightIsNotASmallThing") }}
      </p>
    </div>

    <q-dialog v-model="informationDialog">
      <q-card style="
          background: linear-gradient(180deg, #d5e2ff 0%, #f9effc 100%);
          color: #1e1e1e;
        ">
        <q-card-section class="row items-center q-pb-none">
          <div class="text-h6">{{ $t("general.aboutTheApp") }}</div>
          <q-space />
          <q-btn icon="close" flat round dense v-close-popup />
        </q-card-section>

        <q-card-section v-html="$t('general.aboutTheAppText')">
        </q-card-section>
      </q-card>
    </q-dialog>

    <q-dialog v-model="backupDialog">
      <q-card style="
          background: linear-gradient(180deg, #d5e2ff 0%, #f9effc 100%);
          color: #1e1e1e;
          width: 100%;
        ">
        <q-card-section class="row items-center q-pb-none">
          <div class="text-h6">{{ $t("general.backup") }}</div>
          <q-space />
          <q-btn icon="close" flat round dense v-close-popup />
        </q-card-section>

        <q-card-section>
          <p style="font-size: 11pt; margin-bottom: 16px">{{ $t("general.backupInfo") }}</p>

          <q-btn
            @click="exportBackup"
            class="full-width q-mb-md"
            color="primary"
            icon="upload"
            :label="$t('general.exportBackup')"
            push
          />

          <q-btn
            @click="$refs.fileInput.click()"
            class="full-width"
            color="secondary"
            icon="download"
            :label="$t('general.importBackup')"
            push
          />
          <input
            ref="fileInput"
            type="file"
            accept=".json"
            style="display: none"
            @change="importBackup"
          />
        </q-card-section>
      </q-card>
    </q-dialog>

    <q-dialog v-model="languageDialog">
      <q-card style="
          background: linear-gradient(180deg, #d5e2ff 0%, #f9effc 100%);
          color: #1e1e1e;
          width: 100%;
        ">
        <q-card-section class="row items-center q-pb-none">
          <div class="text-h6">{{ $t("general.languageSelection") }}</div>
          <q-space />
          <q-btn icon="close" flat round dense v-close-popup />
        </q-card-section>

        <q-card-section class="flex items-center column">
          <q-avatar style="margin: 20px">
            <img v-if="selectedLanguage.value == 'sr'" src="../assets/flags/srb.png" />
            <img v-else-if="selectedLanguage.value == 'en-US'" src="../assets/flags/eng.png" />
            <!-- <img :src="'../assets/flags/' + selectedLanguage.value + '.png'" /> -->
          </q-avatar>
          <q-select style="width: 100%; margin-bottom: 25px" rounded outlined v-model="selectedLanguage"
            :options="languageOptions" :label="$t('general.selectLanguage')" @update:model-value="changeLanguage" />
        </q-card-section>
      </q-card>
    </q-dialog>
  </q-page>
</template>

<script>
import { defineComponent, onMounted, ref } from "vue";
import { useRouter } from "vue-router";
import { useI18n } from "vue-i18n";
import { useQuasar } from "quasar";
import { Preferences } from "@capacitor/preferences";
import { Filesystem, Directory, Encoding } from "@capacitor/filesystem";
import { Share } from "@capacitor/share";

export default defineComponent({
  name: "IndexPage",
  setup(props, ctx) {
    let router = useRouter();
    const { locale, t } = useI18n({ useScope: "global" });
    const $q = useQuasar();

    let informationDialog = ref(false);
    let languageDialog = ref(false);
    let backupDialog = ref(false);
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

    onMounted(async () => {
      ctx.emit("resetuj-selektovano-dete", "");

      // Migracija: ako postoji stari localStorage lang, prebaci u Preferences
      const oldLang = localStorage.getItem("lang");
      if (oldLang) {
        await Preferences.set({ key: "lang", value: oldLang });
        localStorage.removeItem("lang");
      }

      const { value: lang } = await Preferences.get({ key: "lang" });
      if (lang != null) {
        if (lang === "sr") {
          selectedLanguage.value = { label: "Srpski", value: "sr" };
        } else {
          selectedLanguage.value = { label: "English", value: "en-US" };
        }
        changeLanguage();
      }
    });

    async function changeLanguage() {
      locale.value = selectedLanguage.value.value;
      await Preferences.set({ key: "lang", value: selectedLanguage.value.value });
    }

    const exportBackup = async () => {
      try {
        const { value: childrenData } = await Preferences.get({ key: "children" });
        const backup = {
          version: 1,
          exportDate: new Date().toISOString(),
          children: JSON.parse(childrenData || "[]"),
        };
        const fileName = `karta-rasta-${new Date().toISOString().split("T")[0]}.json`;
        await Filesystem.writeFile({
          path: fileName,
          data: JSON.stringify(backup, null, 2),
          directory: Directory.Cache,
          encoding: Encoding.UTF8,
        });
        const { uri } = await Filesystem.getUri({
          path: fileName,
          directory: Directory.Cache,
        });
        await Share.share({
          title: t("general.backup"),
          url: uri,
          dialogTitle: t("general.exportBackup"),
        });
      } catch (e) {
        console.error("Export failed:", e);
        $q.notify({ message: t("general.backupError"), color: "negative", position: "top" });
      }
    };

    const importBackup = async (event) => {
      const file = event.target.files[0];
      if (!file) return;
      event.target.value = "";
      const reader = new FileReader();
      reader.onload = async (e) => {
        try {
          const parsed = JSON.parse(e.target.result);
          const children = parsed.version && Array.isArray(parsed.children)
            ? parsed.children
            : Array.isArray(parsed) ? parsed : null;
          if (!children) throw new Error("Invalid format");
          await Preferences.set({ key: "children", value: JSON.stringify(children) });
          ctx.emit("restore-backup", children);
          backupDialog.value = false;
          $q.notify({ message: t("general.restoreSuccess"), color: "positive", position: "top" });
          router.push("/myChildren");
        } catch (err) {
          console.error("Import failed:", err);
          $q.notify({ message: t("general.restoreError"), color: "negative", position: "top" });
        }
      };
      reader.readAsText(file);
    };

    function goTo(path) {
      console.log(path);
      console.log(router);
      router.push(path);
    }

    return {
      informationDialog,
      languageDialog,
      backupDialog,
      selectedLanguage,
      languageOptions,
      goTo,
      changeLanguage,
      exportBackup,
      importBackup,
    };
  },
});
</script>
<style lang="scss">
.container {
  background: linear-gradient(180deg,
      rgba(117, 158, 255, 0.3) 0%,
      rgba(234, 202, 244, 0.3) 100%);
}

.mainBtn {
  text-shadow: 0px 3px 2px rgba(0, 0, 0, 0.3);
  font-size: 15pt;
  font-weight: 800;
  padding: 15px;
  margin: 10px;
  width: min(calc(50% - 20px), 200px);
  height: 150px;
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
  height: 80px;
  background-color: #e0d9d9;
  background-color: #00000030;
}
</style>
