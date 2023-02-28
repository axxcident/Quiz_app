const express = require("express");
const router = express.Router();
const headers = require("./headers");
const questions = require("../public/data/quizQuestions.json");

// REGISTER OUR ROUTES -------------------------------

// Head
router.get("/", function (req, res, next) {
  res.send(200, "Welcome to the API!");
});
/* POST default handling */
router.post("/post", function (req, res) {
  console.log("post recieved");
  console.log(req.body);
  res.json({ status: "200 OK", content: req.body });
});
router.get("/quiz_questions", (req, res) => {
  res.status("200").send(questions);
});
// ----------------------------------------------------

module.exports = router;
