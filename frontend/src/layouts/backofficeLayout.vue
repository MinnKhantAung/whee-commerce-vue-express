<template>
  <v-layout class="rounded rounded-md">
    <v-app-bar flat color="primary" title="Whee Commerce"></v-app-bar>

    <v-navigation-drawer density="compact">
      <v-list rounded="shaped" nav>
        <v-list-group>
          <template #activator="{ props }">
            <v-list-item v-bind="props" title="System"></v-list-item>
          </template>
          <v-list-item
            :to="{ name: routeNames.productList }"
            class="text-caption"
            >Products</v-list-item
          >
        </v-list-group>

        <v-list-item title="Navigation drawer"></v-list-item>
        <v-list-item title="Navigation drawer"></v-list-item>
        <v-list-item title="Navigation drawer"></v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-main class="bg-grey-lighten-3" style="min-height: 300px">
      <router-view></router-view>
    </v-main>
  </v-layout>
</template>
<script setup>
import { routeNames } from "../routes/routeNames";
</script>
