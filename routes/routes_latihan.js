const express = require('express');
router = express.Router()
latihan = require("../controllers/con_latihan")

router.get("/", latihan.get_all);
router.post("/", latihan.create_a_task);

module.exports = router;