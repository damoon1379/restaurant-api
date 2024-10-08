const express = require('express')
const app = express();
const {router}=require('./router')


app.set('view engine','ejs')
app.use(express.static('public'))
app.use(express.urlencoded({extended:true}))
app.use('/',router)

  app.listen(5000,()=>console.log('listening on port 5000'))