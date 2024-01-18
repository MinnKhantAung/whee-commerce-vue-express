import { productRoutes } from "./productRoutes.js";
import { userRouter } from "./userRoutes.js";

export const registerRoute = (app) => {
  app.use("/users", userRouter);
  app.use("/products", productRoutes)
};
