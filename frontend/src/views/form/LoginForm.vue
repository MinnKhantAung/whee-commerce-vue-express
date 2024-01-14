<template>
  <div style="width: 30%; margin: 100px" class="mx-auto">
    <v-card>
      <v-card-title class="text-center text-h4"> Login </v-card-title>
      <v-card-text>
        <v-form @submit.prevent="login" v-model="valid">
          <v-container>
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
import { userLogin } from "../../apis/userApi";
import { useAuthStore } from "../../stores/auth";

const valid = ref(false);
const authStore = useAuthStore();

const loginApi = useApi(userLogin);
const user = ref({
  email: "",
  password: "",
});

const login = async () => {
  await loginApi.call(user.value);

  if (loginApi.status.value == ApiStatus.SUCCESS) {
    console.log(loginApi.response.value);
    let user = loginApi.response.value.data.user;
    let token = loginApi.response.value.data.accesstoken;
    authStore.storeAuth(user, token);
  }
};
</script>
