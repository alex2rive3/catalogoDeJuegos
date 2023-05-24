const category = require("../controllers/category.controller")
const express = require("express")
const router = express.Router()

router.get("/categories", category.getAll)
router.post("/create", category.create)
router.delete("/delete/:id", category.delete)

module.exports = router