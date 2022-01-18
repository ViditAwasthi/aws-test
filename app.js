const express = require("express")
const app = express();
const mongoose = require('mongoose');
const bodyParser = require("body-parser");
const dotenv = require('dotenv');
dotenv.config()
 
//db connection
mongoose.connect(
  process.env.MONGO_URI,
  {useNewUrlParser: true}
)
.then(() => console.log('DB Connected'))
 
mongoose.connection.on('error', err => {
  console.log(`DB connection error: ${err.message}`)
});



const postRoutes = require("./routes/post")


app.use(bodyParser.json()); 
app.use("/",postRoutes)


app.listen(3000, ()=>{
console.log("Server Started at port 3000");
})