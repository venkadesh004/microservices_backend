const { Router } = require("express");
const studentControllers = require("../controllers/studentControllers");

const router = Router();

router.get("/getData", studentControllers.getStudentData);
router.get("/addStudent", studentControllers.addStudentData);
router.get("/getAllBooks", studentControllers.getAllBooks);
router.get("/getBook", studentControllers.getBooks);

module.exports = router;
