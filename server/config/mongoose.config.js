const mongoose = require("mongoose")
mongoose.set("strictQuery", false)
mongoose.connect(process.env.DATABASE, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => { console.log("DataBase Conected...") })
  .catch((err) => {
    console.log(`Ha ocurrido un error en la coneccion ${err}`)
  })