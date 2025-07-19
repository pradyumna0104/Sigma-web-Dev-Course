const express = require('express')
const app = express()
const port = 3000
//if we want to write middleware in a file
const fs = require("fs") //so include this


const blog = require('./routes/blog')
app.use('/blog', blog)


//By defalut Middle ware 
// app.use(express.static("public"));//URL: "http://localhost:3000/temp.txt"


// //Middleware 1
// app.use((req,res,next)=>{
//     // console.log("Middle Ware 1")

//     // console.log(`${Date.now()} is a ${req.method}`);//1752904483309 is a GET
    
//     //if we want to write middleware in a file
//     // fs.writeFileSync("logs.txt",`${Date.now()} is a ${req.method}\n`);
//     // fs.appendFileSync("logs.txt",`${Date.now()} is a ${req.method}\n`);
    
//     console.log(req.headers)
//     req.tempObj = "I am  temp Object.."

//     next()
// })

///Middleware 2
app.use((req,res,next)=>{
    console.log("Middle Ware 2")
    next()
})

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/about', (req, res) => {
  res.send('Hello about!' + req.tempObj);
})

app.get('/contact', (req, res) => {
  res.send('Hello contact!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
