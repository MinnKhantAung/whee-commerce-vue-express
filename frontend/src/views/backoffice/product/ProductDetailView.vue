<template>
  <DetailWrapperComponent>
    <template #actions>
      <v-btn class="me-2" size="small" variant="text">back</v-btn>
      <v-btn color="primary" size="small">Save</v-btn>
    </template>
    <template #form>
      <v-form>
        <v-row class="ma-0 pa-0" dense >
          <v-col cols="12" md="6">
            <v-text-field
              variant="outlined"
              density="compact"
              label="name"
            ></v-text-field>
          </v-col>
          <v-col cols="12" md="6">
            <v-text-field
              label="code"
              variant="outlined"
              density="compact"
            ></v-text-field>
          </v-col>
          <v-col cols="12">
            <v-text-field
              label="image"
              variant="outlined"
              density="compact"
            ></v-text-field>
          </v-col>
        </v-row>
      </v-form>
    </template>
  </DetailWrapperComponent>
</template>

<script setup>
import DetailWrapperComponent from "../../../components/backoffice/DetailWrapperComponent.vue";
</script>
