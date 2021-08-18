import express from "express"

const router = express.Router();

import user_login from "../app-controllers/user-login-controller.js";

//route accesses the login form
router.get('/')

//route submits the input field data from the login form
router.post('/',user_login)

export default router;