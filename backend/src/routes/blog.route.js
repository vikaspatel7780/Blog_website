import { Router } from "express";
import { loginUser, logout, registerUser} from "../controllers/user.controller.js";
import { AllPost, deleteBlog, getBlog, PostBlog, UpdateBlog } from "../controllers/blog.controller.js";
import {isAuthenticated} from "../middlewares/user.middleware.js";

const router = Router();

router.route("/login").post(loginUser)
router.route("/register").post(registerUser)
router.route("/logout").post(isAuthenticated, logout)
router.route("/posts").post(isAuthenticated, PostBlog)
router.route("/allPost").get(isAuthenticated, AllPost)
router.route("/posts/:id").get(isAuthenticated, getBlog)
router.route("/update/:id").put(isAuthenticated, UpdateBlog)
router.route("/delete/:id").delete(isAuthenticated, deleteBlog)

export default router;