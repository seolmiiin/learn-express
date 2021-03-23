const express = require("express");
const admin = require("./routes/admin");


const app = express();

const port = 3000;

app.get('/',(req,res)=>{
  res.send("Hello express_seolmin");
});
app.use('/admin',admin);

app.listen(port, ()=>{
  console.log('빈포트에서 대기중', port);
});