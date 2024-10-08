const { Router } = require("express");
const router = Router()
const headers=new Headers({
  "Content-Type":"application/json",
  "x-api-key":"d7b4e77f135948f3a06941af7d71173a "
});

var requestOptions={
  method:'GET',
  headers: headers,
  redirect: 'follow'
};


  router.get('/',async(req,res)=>{
let menu;
   await fetch("https://api.spoonacular.com/recipes/random?number=10", requestOptions)
    .then(response=>response.json())
    .then(result=>{
      menu=result.recipes;
      
    })
    .catch(error=>console.log('error',error))
      
      res.render('index',{menu:menu});
  })

  router.get('/AboutUs',(req,res)=>{
    res.render('AboutUs');
  });

  router.post('/search',async(req,res)=>{
    let menu;
    console.log(req.body)
    await fetch(`https://api.spoonacular.com/recipes/complexSearch?query=${req.body.search}&number=2`, requestOptions)
     .then(response=>response.json())
     .then(result=>{
       menu=result.results;
       
     })
     .catch(error=>console.log('error',error))
       
       res.render('index',{menu:menu});
 
  })

module.exports={
    router,
}