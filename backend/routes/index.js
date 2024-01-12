import { userRouter } from "./userRoutes.js"

export const registerRoute = (app) => {
    app.use(userRouter)
}