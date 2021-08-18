import express from "express";

const router = express.Router();

import user_signup from "../app-controllers/user-signup-controller.js"
//route to access user_signup_form

//route to submit input field data to the database storage
router.post('/',user_signup);

export default router;