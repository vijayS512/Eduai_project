require("dotenv").config();

const express=require("express");
const app=express();

const cookieParser=require("cookie-parser");

const connectDB=require("./config/db");

connectDB();

app.use(express.urlencoded({extended:true}));
app.use(cookieParser());

app.set("view engine","ejs");

app.use(require("./routes/authRoutes"));
app.use(require("./routes/dashboardRoutes"));
app.use(require("./routes/chatbotRoutes"));

app.listen(process.env.PORT,()=>{
 console.log(
   `Server Running On ${process.env.PORT}`
 );
});