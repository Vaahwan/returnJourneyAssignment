// Middleware implimentation

const express = require('express')

const app = express();
const port = 3000;

// creating middleware which is required
const loggerMiddleware = (req,res,next)=>{
    const timeStamp = new Date().toISOString();
    const method = req.method;
    const url = req.originalUrl;
    console.log({
        'timeStamp' : timeStamp,
        'method' : method,
        'url' : url
    })
    next();
}

// using that middleware before every request
app.use(loggerMiddleware);

app.get('/hello',(req,res)=>{
    res.send('hello world');
})

app.post('/hello',(req,res)=>{
    res.send('hello world');
})

app.listen(port,()=>{
    console.log('server is running at port :',port);
})