const videoGames = require("../controllers/videoGames.controller")
const express = require("express")
const router = express.Router()

router.get("/games", videoGames.list)
router.post("/create", videoGames.create)
router.delete("/delete/:id", videoGames.remove)

module.exports = router