const express         = require("express");
const router          = express.Router();
const headers         = require("./headers");
//mock questions. Use fs to read final database
const questions       = require("../public/data/quizQuestions.json");
const sessionUserQuiz = require("../public/data/sessionUserQuiz.json");
const { v4: uuidv4 }  = require("uuid");


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
/* PUT quiz. Handler fn writes the post body into temporary database */
router.put("/post/createquiz", (req, res) => {
   
});
/* POST edit quiz. Handler takes a quiz id as last parameter and overwrites corresponding quiz in the database */
router.post("/post/edit")
/* GET request for quiz content */
router.get("/quiz_questions", (req, res) => {
  res.status(200).send(questions);
});
/* GET request for any database folder and file */
router.get("/:folder/:imageID", (req, res) => {
  
});
// ----------------------------------------------------

module.exports = router;
