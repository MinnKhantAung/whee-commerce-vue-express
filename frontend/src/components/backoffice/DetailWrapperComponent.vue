<template>
  <div class="px-5 pt-3">
    <div class="d-flex justify-space-between align-center">
      <div>
        <v-breadcrumbs
          class="text-caption px-0 mx-0"
          :items="['Foo', 'Bar', 'Fizz']"
        ></v-breadcrumbs>
      </div>
      <div>
        <slot name="actions"></slot>
      </div>
    </div>
  </div>
  <div class="px-5 pb-2">
    <v-card elevation="0" class="pa-5" style="min-height: 500px">
      <slot name="form"></slot>
    </v-card>
  </div>
</template>
<script setup></script>
