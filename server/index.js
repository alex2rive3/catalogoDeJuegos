const express = require("express")
const morgan = require("morgan")
const bodyParser = require("body-parser")
const cors = require("cors")
const app = express();

require("dotenv").config()
require("./config/mongoose.config")
app.use(cors())
app.use(morgan("dev"))
app.use(bodyParser.json())
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//direcciones de ruta de Categoria
app.use("/api/category", require("./routes/category.routes"));
app.use("/api/videogames", require("./routes/videoGames.routes"));


//Listen To Port
const port = process.env.PORT
app.listen(port, () => {
  console.log(`El servidos se esta ejecutando en el puerto ${port}`)
})