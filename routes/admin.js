//express모듈불러오고
//express속성router불러와서 변수에 담고

const express = require('express');
const router = express.Router();

router.get('/',(req,res)=>{
  res.send('admin 이후 url');
});

router.get('/products',(req, res)=>{
  res.send('product url입니다.');
});

//내보내기
module.exports = router;
