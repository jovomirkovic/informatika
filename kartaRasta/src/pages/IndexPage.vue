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
        KARTA <br />
        RASTA
      </q-toolbar-title>

      <q-btn
        flat
        dense
        round
        icon="info"
        style="font-size: 8vw; margin-right: 15px"
      />
    </q-toolbar>
    <div
      style="min-height: calc(100vh - 180px); margin: 10px"
      class="flex justify-end column"
    >
      <span class="row">
        <q-btn class="girlBtn mainBtn" push>
          <q-icon size="3em" name="female" />
          <div style="width: 70%">Dodaj devojčicu</div>
        </q-btn>

        <q-btn class="boyBtn mainBtn" push>
          <q-icon size="3em" name="male" />
          <div style="width: 70%">Dodaj dečaka</div>
        </q-btn>
      </span>

      <q-btn class="kidsBtn mainBtn" push>
        <q-icon size="3em" name="fa-solid fa-child-reaching" />
        <div style="width: 70%">Moja Deca</div>
      </q-btn>
    </div>
  </q-page>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "IndexPage",
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
