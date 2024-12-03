const authentication = new (require("../Middleware/auth"))();

const subjectController = new (require("../Controller/subjects"))();

const router = require("express").Router();

router.route("/add").post(subjectController.add);

router.route("/update").put(subjectController.update);

router.route("/status").put(subjectController.status);

router.route("/delete/:id").delete(subjectController.delete);

router.route("/get/:id").get(subjectController.getById);

router.route("/list").get(subjectController.list);

module.exports = router;
