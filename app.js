const express = require("express");

const app = express();

const port = 3000;

app.get('/',(req,res)=>{
  res.send("Hello express_seolmin");
});
app.get('/admin',(req,res)=>{
  res.send("Hello express_seolmin22222");
});

app.listen(port, ()=>{
  console.log('빈포트에서 대기중', port);
});