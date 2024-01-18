<template>
  <ListWrapperComponent :data="data">
    <template #filters> header section </template>
    <template #actions>
      <v-btn
        class="ms-3 text-none"
        size="small"
        flat
        @click="
          router.push({ name: routeNames.productDetail, params: { id: 'new' } })
        "
        ><v-icon class="me-2" :icon="mdiPlus"></v-icon> Add</v-btn
      >
    </template>
    <template #list>
      <v-data-table-server
        :headers="headers"
        :items-length="itemsLength"
        :items="productList"
        :loading="productApi.status == ApiStatus.LOADING"
        item-value="name"
        height="450"
        density="compact"
        color="primary"
      ></v-data-table-server>
    </template>
  </ListWrapperComponent>
</template>

<script setup>
import ListWrapperComponent from "../../../components/backoffice/ListWrapperComponent.vue";
import { getList } from "../../../apis/productApi";
import { onMounted, ref } from "vue";
import { useApi, ApiStatus } from "../../../services/apiService";
import { mdiPlus } from "@mdi/js";
import { useRouter } from "vue-router";
import { routeNames } from "../../../routes/routeNames";

const router = useRouter();
const data = ref({
  breadcrumbs: ["System", "Product"],
});
const headers = ref([
  {
    title: "Name",
    align: "start",
    sortable: false,
    key: "name",
  },
  {
    title: "Code",
    align: "start",
    sortable: false,
    key: "code",
  },
  {
    title: "image",
    align: "start",
    sortable: false,
    key: "image",
  },
]);

const productList = ref([]);
const itemsLength = ref(0);

const productApi = useApi(getList);

const getProducts = async () => {
  await productApi.call();
  if (productApi.status.value == ApiStatus.SUCCESS) {
    productList.value = productApi.response.value.data.products;
    itemsLength.value = productApi.response.value.data.totalItems;
    console.log(productList.value, itemsLength.value);
  }
};

onMounted(() => {
  getProducts();
});
</script>
