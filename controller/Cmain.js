const User = require("../models/index").User;
const Task = require("../models/Task").Task;
const Timer = require("../models/Timer").Timer;
const bcrypt = require("bcrypt");
const saltRounds = 10;
const multer = require("multer");
const upload = multer({
  dest: "uploads/",
});
// multer 세부 설정
const uploadDetail = multer({
  storage: multer.diskStorage({
    destination(req, file, done) {
      done(null, "uploads/");
    },
    filename(req, file, done) {
      const ext = path.extname(file.originalname);
      done(null, path.basename(file.originalname, ext) + Date.now() + ext);
    },

    limites: { fileSize: 5 * 1024 * 1024 }, //5MB
  }),
});

exports.get_Index = (req, res) => {
  // 세션 권한 없으면 login으로 가야함!!!
  if (req.session.isAuthenticated) {
    res.render("index");
  } else {
    // 데이터 구현시 index 대신 login 넣기!!!
    res.render("index");
  }
};
exports.get_login = () => {
  res.render("login");
};

exports.post_login = (req, res) => {
  const { email, password } = req.body;
  // 로그인 성공 실패 판단 조건 넣기
  if (true) {
    req.session.isAuthenticated = true;
    return res.redirect("/");
  } else {
    return res.render("login", { error: "로그인 실패. 다시 시도하세요." });
  }
};

// Register post 요청 받아오기
exports.get_Register = async (req, res) => {
  res.render("register");
};

exports.get_find = async (req, res) => {
  res.render("find");
};

exports.get_Feed = (req, res) => {
  res.render("feed");
};

exports.get_Calender = (req, res) => {
  const today = new Date();

  const year = today.getFullYear();
  const month = today.getMonth() + 1;
  const lastDay = new Date(year, month, 0).getDate();
  const dayNames = ["일", "월", "화", "수", "목", "금", "토"];
  const firstDayOfMonth = new Date(
    today.getFullYear(),
    today.getMonth(),
    1
  ).getDay();

  res.render("calender", {
    year: year,
    month: month,
    lastDay: lastDay,
    firstDayOfMonth: firstDayOfMonth,
    dayNames: dayNames,
  });
};
exports.get_Calender_currentData = (req, res) => {
  const today = new Date();
  let month = req.params.currentMonth;
  let year = req.params.currentYear;
  console.log(month, year);

  const lastDay = new Date(year, month, 0).getDate();
  const dayNames = ["일", "월", "화", "수", "목", "금", "토"];
  const firstDayOfMonth = new Date(year, month - 1, 1).getDay();

  res.json({
    month: month,
    lastDay: lastDay,
    firstDayOfMonth: firstDayOfMonth,
    dayNames: dayNames,
  });
};

exports.get_Timer = (req, res) => {
  res.render("timer");
};

exports.get_MyPage = (req, res) => {
  res.render("myPage");
};

exports.post_Register = () => {
  res.render("register");
};
