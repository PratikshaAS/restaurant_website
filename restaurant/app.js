const express=require("express")
const dotenv=require("dotenv")
const cors = require('cors');
const createError = require('http-errors')
const mongoose=require("mongoose")
const app=express()
dotenv.config({path:"./config.env"})
const port=process.env.PORT ||5000
require("./db/conn")

app.use(cors());

app.use(require("./router/auth"));
const User=require("./model/userShema")
// const { createProxyMiddleware } = require("http-proxy-middleware")
app.use(express.json());

const {createProxyMiddleware} = require('http-proxy-middleware');
app.use('/api', createProxyMiddleware({
    target: "http://localhost:5000/",
    changeOrigin:true,
    onProxyRes: function(proxyRes, req, res){
        proxyRes.headers['Access-Control-Allow-Origin'] = '*';
    }
}));

if(process.env.NODE_ENV==="production")
{
    app.use(express.static("client/build"));
}
app.listen(port,()=>{
    console.log("server is listening")
})
