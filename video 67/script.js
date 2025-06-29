console.log("working.");

//below all workinng in console(browser)


// ip > document.body
// op<  <body>​…​</body>​

// ip > document.body.childNodes
// op < (click)> NodeList(9) [text, div.container, text, script, text, comment, text, script, text]

// ip > document.body.childNodes[1]
// op <div class=​"container">​…​</div>​

// ip > document.body.childNodes[0]
// op < #text

// ip > document.body.childNodes[1].style.backgroundColor = "red";
// op < 'red'

// ip > document.body.childNodes
// op < (click) > NodeList(9) [text, div.container, text, script, text, comment, text, script, text]

// ip > document.body.childNodes[1].childNodes
// op < (click) > NodeList(11) [text, div.box, text, div.box, text, div.box, text, div.box, text, div.box, text]




// document.body.children
//      HTMLCollection(3) [div.container, script, script]
//                0 : div.container
//                1 : script  //our script.js
//                2 : script  //browser js file for svg support
//                length : 3

// document.body.firstElementChild
//      <div class=​"container">​…​</div>​

// document.body.lastElementChild
//      <script>​…​</script>​




// document.body.firstElementChild
//      <div class=​"container">​…​</div>​

// document.body.firstElementChild.childNodes
//      NodeList(11) [text, div.box, text, div.box, text, div.box, text, div.box, text, div.box, text]

// document.body.firstElementChild.firstElementChild
//      <div class=​"box">​box 1​</div>​




// let cont = document.body.childNodes[1]
//      undefined

// cont.firstChild
//     #text
// cont.firstElementChild
//     <div class=​"box">​box 1​</div>​

// cont.lastElementChild
//     <div class=​"box">​box 5​</div>​

// cont.children
//     HTMLCollection(5) [div.box, div.box, div.box, div.box, div.box]

// cont.children[1]
//      <div class=​"box">​box 2​</div>​

// cont.children[4]
//      <div class=​"box">​box 5​</div>​

// cont.children[4].parentElement
//      <div class=​"container">​…​</div>​

// cont.children[3].previousElementSibling
//      <div class=​"box">​box 3​</div>​

// cont.children[3].nextElementSibling
//      <div class=​"box">​box 5​</div>​

// cont.children[3].nextElementSibling.style.color = "red";
//      'red'
// cont.children[3].nextElementSibling.style.backgroundColor = "green";
//      'green'