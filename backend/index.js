import express, { json } from "express";
import { PORT, mangoDBURL } from "./config.js";
import mongoose from "mongoose";
import { Book } from "./models/bookmodel.js";
import bookRoutes from './routes/booksRoutes.js'
import cors from 'cors'

const app = express();
  
app.use(express.json());

app.get("/", (req, res) => {
  console.log(req);
  return res.status(234).send("Learning mern stack");
});

app.use(cors())

// app.use(
//   cors({
//     origin: "http://localhost:3000/",
//     method: ['GET','POST','PUT',"DELETE"],
//     allowedHeader:['Content-Type'] 
//   }
// ))
app.use('/books',bookRoutes)
app.listen(PORT, () => {
  console.log(`Server started on port: ${PORT}`);
});

mongoose
  .connect(mangoDBURL)
  .then(() => {
    console.log("App is connected to database");
  })
  .catch((error) => {
    console.log(error);
  });
