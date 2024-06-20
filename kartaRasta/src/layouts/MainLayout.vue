<template>
  <q-layout view="lHh Lpr lFf">
    <q-page-container>
      <router-view
        :selectedChild="selectedChild"
        @remove-child="removeChild"
        @edit-child="editChild"
        @put-child="putChild"
      />
    </q-page-container>
  </q-layout>
</template>

<script>
import { defineComponent, onMounted, ref } from "vue";
import localforage from "localforage";
import { useRouter } from "vue-router";

export default defineComponent({
  name: "MainLayout",

  setup() {
    const children = ref([]);
    const selectedChild = ref({});
    const router = useRouter();

    onMounted(() => {
      loadChildren();
    });

    const loadChildren = async () => {
      const storedChildren = await localforage.getItem("children");
      if (storedChildren) {
        children.value = storedChildren;
      }
    };

    const removeChild = (id) => {
      children.value = children.value.filter((child) => child.id !== id);
      saveChildren();
    };

    const saveChildren = async () => {
      await localforage.setItem("children", children.value);
    };

    function editChild(child) {
      selectedChild.value = child;

      setTimeout(() => {
        if (child.gender == "male") router.push("/addSon");
        else router.push("/addDaughter");
      }, 1000);
    }

    const putChild = (id) => {
      children.value = children.value.filter((child) => child.id !== id);
      saveChildren();
    };
    return {
      selectedChild,
      editChild,
      putChild,
      removeChild,
    };
  },
});
</script>
