const User = require("../models/index").User;
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
  res.render("index");
};
