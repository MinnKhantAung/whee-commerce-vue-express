import router  from "../routes/index";
import { vuetify } from "./vuetify";
import { createPinia } from "pinia";

const pinia = createPinia();
const registerPlugins = (app) => {
  app.use(router).use(vuetify).use(pinia);
};

export default registerPlugins;
