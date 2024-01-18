<template>
  <div style="width: 30%; margin: 100px" class="mx-auto">
    <v-card>
      <v-card-title class="text-center text-h4"> Register </v-card-title>
      <v-card-text>
        <v-form @submit.prevent="register" v-model="valid">
          <v-container>
            <v-text-field
              v-model="user.name"
              variant="outlined"
              label="Name"
              required
              hide-details
              density="compact"
              class="mb-3"
            ></v-text-field>
            <v-text-field
              v-model="user.email"
              variant="outlined"
              label="Email"
              required
              hide-details
              density="compact"
              class="mb-3"
            ></v-text-field>
            <v-text-field
              v-model="user.password"
              label="Password"
              required
              hide-details
              density="compact"
              type="password"
              variant="outlined"
              class="mb-3"
            ></v-text-field>
            <v-btn type="submit" block class="mt-2" color="primary"
              >Submit</v-btn
            >
          </v-container>
        </v-form>
      </v-card-text>
    </v-card>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { useApi, ApiStatus } from "../../services/apiService";
import { userRegister } from "../../apis/userApi";
import { useAuthStore } from "../../stores/auth";
import { useRouter } from "vue-router";
import { routeNames } from "../../routes/routeNames";

const valid = ref(false);
const authStore = useAuthStore();
const router = useRouter();

const registerApi = useApi(userRegister);
const user = ref({
  name: "",
  email: "",
  password: "",
});

const register = async () => {
  await registerApi.call(user.value);

  if (registerApi.status.value == ApiStatus.SUCCESS) {
    let user = registerApi.response.value.data.user;
    let token = registerApi.response.value.data.accesstoken;
    authStore.storeAuth(user, token);
    router.push({ name: routeNames.homeView });
  }
};
</script>
