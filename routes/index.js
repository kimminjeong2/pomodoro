const express = require("express");
const router = express.Router();
const controller = require("../controller/Cmain");

router.get("/", controller.get_Index);

router.get("/login", controller.get_login);

router.get("/login/register", controller.get_Register);

router.get("/login/find", controller.get_find);

router.post("/register", controller.post_Register);

router.get("/feed", controller.get_Feed);

router.get("/calender", controller.get_Calender);

router.get(
  "/calender/:currentMonth/:currentYear",
  controller.get_Calender_currentData
);

router.get("/timer", controller.get_Timer);

router.get("/myPage", controller.get_MyPage);

router.post("/login", controller.post_login);

module.exports = router;
