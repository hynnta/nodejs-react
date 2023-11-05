import express from "express";
import homeController from "../controller/homeController";

const router = express.Router();
/**
 * 
 * @param {*} app : express app
 */
const initWebRoutes = (app) => {    
    router.get("/", homeController.handleHello)
    router.get("/users", homeController.hendleUser)
    router.post("/users/create-user", homeController.handleCreateUser)
    router.post("/delete-user/:id", homeController.handleDeleteUser)
    router.post("/update-user/:id", homeController.getUpdateUser)
    router.post("/users/update-user", homeController.handleUpdateUser)
    return app.use("/", router);
}
export default initWebRoutes;