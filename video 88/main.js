const express = require('express')
const app = express()
const port = 3000

app.use(express.static('public')) //<= everything inside public you can access
//http://127.0.0.1:3000/access.txt <= you can access this file
//http://127.0.0.1:3000/main.js <= you cann't access this file



//app.get or app.post or app.put or app.delete(path, handler)
app.get('/', (req, res) => {
  res.send('Hello World2!')
})
app.get('/about', (req, res) => {
  res.send('About us page')
})
app.get('/contact', (req, res) => {
  res.send('Contact us page')
})
app.get('/blog', (req, res) => {
  res.send('blog page')
})

app.get('/blog/intro-to-js', (req, res) => {
    // logic to fetch intro to js from the db
    res.send('Hello intro-to-js!')
})

app.get('/blog/intro-to-python', (req, res) => {
    // logic to fetch intro to python from the db
    res.send('Hello intro-to-python!')
})


//imp : this type of end point making is not good when we have thousands of end points and looking very complex


//so we use request parameters and queries
app.get('/:slug',(req,res)=>{
    res.send(`hello ${req.params.slug}`);
    // console.log(req);
    // console.log(req.params);//{ slug: 'padosi' }

})

// app.get('/:slug/:second',(req,res)=>{
//     res.send(`hello ${req.params.slug} and ${req.params.second}`);
// })

// app.get('/blog/:slug', (req, res) => {
//     //// logic to fetch {slug} from the db
//     //// For URL: http://localhost:3000/blog/intro-to-padosi
//     // console.log(req.params) // will output { slug: 'intro-to-padosi' }
//     //// For URL: http://localhost:3000/blog/intro-to-padosi?mode=dark&region=in
//     // console.log(req.query) // will output { mode: 'dark', region: 'in' }

//     res.send(`hello ${req.params.slug}`)
// })



app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})