
// RESTful API development

const { json } = require('body-parser');
const express = require('express')

const app = express();
const port = 3050;

app.use(express.json());

let products = [];

const findIndexOf = (id)=>{
    for(let i=0; i<products.length; i++){
        if(products[i].productId==id){
            return i;
        }
    }
    return -1;
}

app.get('/products',(req,res)=>{
    res.json(products);
})

app.get('/products/:id',(req,res)=>{
    let productId = req.params.id;
    let index = findIndexOf(productId);
    let product = products[index];
    if(product){
        res.json(product);
    }
    else{
        res.status(404).send("product not found")
    }
    
})

app.post('/products',(req,res)=>{
    let productName = req.body.productName;
    let productPrice = req.body.productPrice;
    let productId = products.length;
    let newProduct = {
        productName : productName,
        productPrice : productPrice,
        productId : productId
    }
    products.push(newProduct);
    res.status(201).json(newProduct);
})

app.put('/products/:id',(req,res)=>{
    let productId = req.params.id;
    let productName = req.body.productName;
    let productPrice = req.body.productPrice;
    let updatedProduct = {
        productName : productName,
        productPrice : productPrice
    }
    let index = findIndexOf(productId);
    if(index!=-1){
        products[index] = {...products[index], ...updatedProduct}
        res.json(products[index]);
    }
    else{
        res.status(404).send('product not found');
    }
})

app.delete('/products/:id',(req,res)=>{
    let productId = req.params.id;
    let index = findIndexOf(productId);
    if(index!=-1){
        let deletedProduct = products.splice(index,1);
        res.status(200).json(deletedProduct[0]);
    }
    else{
        res.status(404).send('product not found');
    }
})

// app.listen(port,()=>{
//     console.log('app is listioning at port :',port);
// })

module.exports = app;