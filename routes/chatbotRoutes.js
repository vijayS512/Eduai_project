const express=require("express");
const router=express.Router();

const chatbot=require("../controllers/chatbotController");

router.get("/chat",chatbot.chatPage);

router.post("/chat",chatbot.askQuestion);

module.exports=router;