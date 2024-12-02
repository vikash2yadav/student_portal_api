const authentication = new (require("../Middleware/auth"))();

const studentController = new (require("../Controller/students"))();

const router = require("express").Router();

router.route("/add").post(authentication.check, studentController.add);

router.route("/update").put(authentication.check, studentController.update);

router.route("/delete").delete(authentication.check, studentController.delete);

router.route("/get/:id").get(authentication.check, studentController.getById);

router.route("/list").get(authentication.check, studentController.list);

module.exports = router;
