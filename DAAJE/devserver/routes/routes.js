const express         = require("express");
const router          = express.Router();
const { headers }     = require("./middleware");
const mwFunctions     = require("./middleware");

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

/* POST quiz. Handler fn writes the post body into temporary database */
router.post("/post/create_quiz", (req, res) => {
   
});

/* PUT edit quiz. Handler takes a quiz id as last parameter and overwrites corresponding quiz in the database */
router.put("/post/edit_quiz/:id")

/* GET request for quiz content */
router.get("/quiz_questions", mwFunctions.getMockQuestions());

/* GET request for any database folder and file */
router.get("/:folder/:imageID", (req, res) => {
  
});
// ----------------------------------------------------

module.exports = router;
