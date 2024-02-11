const { User } = require("../schema/User");
const { Book } = require("../schema/Books");

module.exports.getAdminData = (req, res) => {
  /**
   *
   * Get the Data and compare whether the user type is admin or student.
   * If admin give a positive response
   * Else give the error message
   */
};

module.exports.addBooks = (req, res) => {
  /**
   *
   * Get the Book Details and Add them to the DB
   * Reference: https://github.com/venkadesh004/survey-backend/blob/main/controllers/courseExitSurveyControllers.js#L44
   */
};

module.exports.getDueStudents = (req, res) => {
  /**
   *
   * Get the Student who are in DUE by getting the student list from the DB and comparing the Dates with them
   */
};
