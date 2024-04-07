import express from "express";
import bodyParser from "body-parser";

const app=express();
const port=3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

let List=[];
let wlist=[];
app.get("/",(req,res)=>{
    res.render("index.ejs",{todoList:List});
})
app.post("/", (req, res) => {
    const newval =req.body["newItem"];
    res.render("index.ejs",{todoList:List,nextItem:newval});
  });

app.get("/work",(req,res)=>{
    res.render("work.ejs",{todoList:wlist});
});
app.post("/work", (req, res) => {
  const newval =req.body["newItem"];
  res.render("work.ejs",{todoList:wlist,nextItem:newval});
});
app.listen(port, () => {
    console.log(`Server running on port ${port}`);
  });
