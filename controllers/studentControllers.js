const { User } = require("../schema/User");
const { Book } = require("../schema/Books");

// Use this for Handling the Student Errors
// Reference: https://github.com/venkadesh004/jwt_authentication/blob/main/controllers/authController.js
const { handleUserError } = require("../util/errorHandler");

module.exports.getStudentData = (req, res) => {
  /**
   *
   * Get the Student Data and Call the Login method
   * Reference: https://github.com/venkadesh004/jwt_authentication/blob/main/controllers/authController.js
   * Use the above link for Reference
   */
};

module.exports.addStudentData = (req, res) => {
  /**
   *
   * Get the student data and add them to the DB
   * Use the same link above for reference
   */
};

module.exports.getAllBooks = (req, res) => {
  /**
   *
   * Get the Books from the DB and send it to the User
   */
};

module.exports.getBooks = (req, res) => {
  /**
   *
   * Get the Book Name and find the Details from the Book DB
   * Reference: https://github.com/venkadesh004/survey-backend/blob/main/controllers/courseExitSurveyControllers.js#L205
   */
};
