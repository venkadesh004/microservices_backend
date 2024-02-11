const { Router } = require("express");
const adminControllers = require("../controllers/adminControllers");

const router = Router();

router.get("/getAdminData", adminControllers.getAdminData);
router.get("/addBooks", adminControllers.addBooks);
router.get("/getDueStudents", adminControllers.getDueStudents);

module.exports = router;
