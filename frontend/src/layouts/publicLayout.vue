<template>
  <v-layout class="rounded rounded-md">
    <v-app-bar title="Whee Commerce" color="primary" elevation="0">
      <template v-slot:append>
        <v-menu>
          <template v-slot:activator="{ props }">
            <v-btn v-bind="props" :icon="mdiAccount"></v-btn>
          </template>
          <v-list>
            <v-list-item
              :to="{ name: routeNames.loginForm }"
              title="login"
            ></v-list-item>
            <v-list-item
              :to="{ name: routeNames.registerForm }"
              title="register"
            ></v-list-item>
          </v-list>
        </v-menu>
      </template>
    </v-app-bar>

    <v-main
      class="d-flex align-center justify-center"
      style="min-height: 300px"
    >
      <router-view></router-view>
    </v-main>
  </v-layout>
</template>

<script setup>
import { mdiAccount } from "@mdi/js";
import { routeNames } from "../routes/routeNames";
</script>
