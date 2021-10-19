const express = require('express')
const app = express()
const {products} = require('./data')

app.get('/',(req,res)=>{
    res.send('<h1>Home Page</h1> <a href="/api/products">products</a>')
})

app.get('/api/products',(req,res)=>{
    const newProducts = products.map((product)=>{
        const {id,name,image} = product
        return {id,name,image}
    })
    res.json(newProducts)
})
app.get('/api/products/:productID',(req,res)=>{
    const {productID} = req.params
    const singleProduct = products.find((product)=> product.id === Number(productID))
      res.json(singleProduct)
})
//app.all('*',()=>{
//    res.status(404).send("not found")
//})
app.listen(5001,()=>{
    console.log("server is up and running")
})