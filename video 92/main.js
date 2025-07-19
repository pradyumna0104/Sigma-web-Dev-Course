const express = require('express')
const app = express()
const port = 3000


app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    let siteName = "Adidas";
    let siteContent = "Search Now";
    let arr = ["hey", 54, 65];
    //   res.sendFile("templates/index.html",{root:__dirname});
    res.render("index", { siteName: siteName, siteContent: siteContent, arr });
})

app.get('/:slug', (req, res) => {
    let title = "Adidas";
    let content = "Search Now";
    //   res.sendFile("templates/index.html",{root:__dirname});
    res.render("templates/index.html", { title: title, content: Content });
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})
