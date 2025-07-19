const express = require('express')
const blog  = require('./routes/blog')

const app = express()
const port = 3000

app.use(express.static("public"))
app.use('/blog',blog)

app.get('/', (req, res) => {
  console.log("Hey its a get Request.")
  res.send('Hello World21!')
})

app.post('/', (req, res) => {
  console.log("Hey its a Post Request.")
  res.send('Hello World Post')
})

// app.put('/', (req, res) => {
//   console.log("Hey its a Put Request.")
//   res.send('Hello World Put')
// })

// app.delete('/', (req, res) => {
//   console.log("Hey its a Delete Request.")
//   res.send('Hello World Delete')
// })


//we can use like that (i.e. Chaining of requests)
// app.get('/', (req, res) => {
//   console.log("Hey its a get Request.")
//   res.send('Hello World!')
// }).post('/', (req, res) => {
//   console.log("Hey its a Post Request.")
//   res.send('Hello World Post')
// }).put('/', (req, res) => {
//   console.log("Hey its a Put Request.")
//   res.send('Hello World Put')
// }).delete('/', (req, res) => {
//   console.log("Hey its a Delete Request.")
//   res.send('Hello World Delete')
// })




app.get('/index', (req, res) => {
  console.log("Hey its a Index.")
  res.sendFile("templates/index.html", { root: __dirname })
})


app.get('/api', (req,res)=>{
  res.json({ a : 1, b : 2, c : 3, name : ["haru","raghu"]})
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})