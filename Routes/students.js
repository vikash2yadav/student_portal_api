const authentication = new (require("../Middleware/auth"))();

const studentController = new (require("../Controller/students"))();

const router = require("express").Router();

router.route("/add").post(studentController.add);

router.route("/update").put(studentController.update);

router.route("/status").put(studentController.status);

router.route("/delete/:id").delete(studentController.delete);

router.route("/get/:id").get(studentController.getById);

router.route("/list").get(studentController.list);

router.route("/mark/add").post(studentController.addMarks);

module.exports = router;
