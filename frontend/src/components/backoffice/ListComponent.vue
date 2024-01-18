<template>
    <v-data-table-server
      :headers="props.listData.headers"
      :items-length="props.listData.data.totalItems"
      :items="props.listData.data[props.listData.data.key]"
    ></v-data-table-server>
    <!-- <v-data-table-server
      v-model:items-per-page="itemsPerPage"
      :headers="props.listData.headers"
      :items-length="totalItems"
      :items="props.listData.items"
      :loading="loading"
      :search="search"
      item-value="name"
      @update:options="loadItems"
    ></v-data-table-server> -->
</template>

<script setup>
const props = defineProps({
  listData: {
    type: Object,
    required: true,
  },
});
</script>
