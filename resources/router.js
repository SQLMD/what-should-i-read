const router = require("express").Router();
const controller = require("./controller");

router.get("/", controller.getRandomBook);

module.exports = router;
