const express = require("express");
const admin = require("./routes/admin");
const nunjucks = require('nunjucks');

const app = express();

const port = 3000;

//nunjucks셋팅
//nunjucks.configure(폴더명,{})
nunjucks.configure('template',{
  autoescape : true,
  express : app
});



app.get('/',(req,res)=>{
  res.send("Hello express_seolmin");
});
app.use('/admin',admin);

app.listen(port, ()=>{
  console.log('빈포트에서 대기중', port);
});