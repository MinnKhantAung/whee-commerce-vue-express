<template>
  <div>
    <div class="px-5 pt-3">
      <div class="d-flex justify-space-between align-center">
        <div>
          <v-breadcrumbs
          class="text-caption px-0 mx-0"
          :items="props.data.breadcrumbs"
        ></v-breadcrumbs>
        </div>

        <div>
          <v-menu>
          <template #activator="{ props }">
            <v-btn v-bind="props" size="small" variant="tonal" color="primary">
              <span class="filter-btn"> block </span>
            </v-btn>
          </template>
          <v-card class="pa-3">
            <slot name="filters"></slot>
          </v-card>
        </v-menu>
        
        <slot name="actions"></slot>
        </div>
      </div>
    </div>
    <div class="px-5 pb-2">
      <v-card elevation="0" style="min-height: 500px;">
        <slot name="list"></slot>
      </v-card>
    </div>
  </div>
</template>
<script setup>
const props = defineProps({
  data: {
    type: Object,
    required: true,
  },
});
</script>
