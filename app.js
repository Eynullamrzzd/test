

const express = require('express');
const app = express();
const products = [
    {id:1, name:'Alma', count:'10', quantity:'100'},
    {id:2, name:'Armud', count:'20', quantity:'200'},
    {id:3, name:'Heyva', count:'30', quantity:'300'},
    {id:4, name:'Nar', count:'55', quantity:'400'},
    {id:5, name:'Gilas', count:'100', quantity:'500'},
    {id:6, name:'Alça', count:'56', quantity:'600'},
    {id:7, name:'Banan', count:'75', quantity:'700'},
    {id:8, name:'Ananas', count:'86', quantity:'800'},
    {id:9, name:'Şaftalı', count:'90', quantity:'900'},
    {id:10, name:'Manqo',count:'53', quantity:'1000'}
]
app.get('/', (req,res)=>{

    res.send("home page")
})

app.get('/products', (req,res)=>{
   
    res.send(products)
})
app.get('/products/:id', (req,res)=>{
    const userID = req.params.id;
    const selectedUser = products.find(products=>products.id == userID)
    // console.log(userID); 
    if(selectedUser){

        res.send(selectedUser)
    }else{
        res.status(404).send('istifadeci yoxdur')
    }
})

app.listen(4000, ()=>{
    console.log("server quruldu");
})
  
