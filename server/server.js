// import express from 'express'
// import "dotenv/config"
// import cors from "cors"

// const app = express()
// app.use(cors())

// app.get('/', (req, res)=> res.send("API is working"))

// const PORT = process.env.PORT || 3000

// app.listen(PORT, ()=> console.log(`Server running on port ${PORT}`))

import express from 'express'
import 'dotenv/config'
import cors from 'cors'
import db from './configs/database.js'
import { clerkMiddleware } from '@clerk/express'
import clerkWebhooks from './controllers/clerkWebhooks.js'

const port = 9000;


const app = express();
app.use(cors())

app.set("view engine", "ejs");
// app.use(express.urlencoded())
app.use(express.json())
app.use(clerkMiddleware)

app.use("/api/clerk", clerkWebhooks)

app.get('/', (req,res)=>{
    res.send("API is working");
})


app.listen(port, (err)=>{
    if(err)
    {
        console.log("Server is not connected");
        return false;
    }
    console.log("Server is connected on "+ port);
})



// const express = require('express');
// const {router} = require('./routes/routes');
// const db = require('./config/database');
// const cookies = require("cookie-parser");
// const session = require("express-session")
// const passport = require("passport");
// const {PassportAuth} = require("./middleware/PassportAuth");
// const { pRouter } = require('./routes/pRoutes');
// const {mailer} = require("./helper/mail");
// const { catRouter } = require('./routes/category.routes');
// const { subcatRouter } = require('./routes/subcategory.routes');

// PassportAuth(passport)

// const port = 9000;

// const app = express();
// app.use(cookies());
// app.use(session({secret:"private-key"}))

// app.set("view engine", "ejs");

// app.set("views", __dirname+"/views");
// app.use(express.urlencoded())
// app.use(express.json())
// app.use(express.static(__dirname+"/public"))
// app.use(passport.initialize())
// app.use(passport.session())


// app.get('/index', (req,res)=>{
//     res.render("index");
// })

// app.use(router);
// app.use("/product",pRouter);
// app.use("/category", catRouter)
// app.use("/subcategory", subcatRouter)

// app.listen(port, (err)=>{
//     if(err)
//     {
//         console.log("Server is not connected");
//         return false;
//     }
//     console.log("Server is connected on "+ port);
// })