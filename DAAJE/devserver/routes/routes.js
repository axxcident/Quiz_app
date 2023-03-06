const express         = require("express");
const router          = express.Router();
const { headers }     = require("./middleware");
const mwFunctions     = require("./middleware");

// REGISTER OUR ROUTES -------------------------------

// Head
router.get("/", function (req, res) {
  res.send(200, "Welcome to the API!");
});

/* POST default handling */
router.post("/post", function (req, res) {
  console.log("post recieved");
  console.log(req.body);
  res.json({ status: "200 OK", content: req.body });
});

/* POST quiz. Handler fn writes the post body into temporary database */
router.post("/post/create_quiz", mwFunctions.addNewQuiz());

/* PUT edit quiz. Handler takes a quiz id as last parameter and overwrites corresponding quiz in the database.
   If no ID is present in the url(since it might be unknown att the time of request) search the db and redirect
   the request to*/
router.put("/post/edit_quiz/:id?");
/* Alternate rerouted path for requests with initial missing id fields */
router.put("/post/edit_quiz/:id");

/* GET request for quiz content */
router.get("/quiz_questions", mwFunctions.getMockQuestions());

/* GET request for any database folder and file */
router.get("/:folder/:item", (req, res) => {
  
});
// ----------------------------------------------------

module.exports = router;
