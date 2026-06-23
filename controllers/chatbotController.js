const Chat = require("../models/Chat");

exports.chatPage=(req,res)=>{
   res.render("chatbot");
};

exports.askQuestion=async(req,res)=>{

 const {question}=req.body;

 let answer="";

 if(question.includes("javascript")){
   answer="JavaScript is a scripting language.";
 }
 else{
   answer="AI Response Generated";
 }

 await Chat.create({
   question,
   answer
 });

 res.render("chatbot",{answer});
};