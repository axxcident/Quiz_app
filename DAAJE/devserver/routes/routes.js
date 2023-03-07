const express           = require("express");
const router            = express.Router();
const mwFunction        = require("./middleware");

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

/* POST quiz. Handler fn assigns a uuid to the url and redirects below to continue the request */
router.post("/post/create_quiz", mwFunction.assignQuizId, mwFunction.writeNewQuiz);
/* Handle the redirected request with added uuid parameter. Currently unused, problems redirecting while keeping the original req body. */
//router.post("/post/create_quiz/:uuid", mwFunction.writeNewQuiz);

/* PUT edit quiz. Handler takes a quiz id as last parameter and overwrites corresponding quiz in the database.
   If no ID is present in the url(since it might be unknown att the time of request) search the db and redirect
   the request to*/
router.put("/post/edit_quiz/:id?");
/* Alternate rerouted path for requests with initial missing id fields */
router.put("/post/edit_quiz/:id");

/* GET request for quiz content */
router.get("/quiz_questions", mwFunction.getMockQuestions);

/* GET request for any database folder and file */
router.get("/:folder/:item", (req, res) => {

});
// ----------------------------------------------------

module.exports = router;
