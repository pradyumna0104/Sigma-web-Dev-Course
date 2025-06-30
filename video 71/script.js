console.log("hey");

//website console

// document.querySelector(".box");
//      <div class=​"box">​I am a Box 1.​</div>​

// document.querySelector(".box").innerHTML
//      'I am a Box 1.'

// document.querySelector(".container").innerHTML
//      '\n        <div class="box">I am a Box 1.</div>\n        <div class="box">I am a Box 2.</div>\n  '

// document.querySelector(".container").innerText
//      'I am a Box 1.\nI am a Box 2.'

//outerHTML = innerHTML + itself

// document.querySelector(".container").outerHTML
//      '<div class="container">\n        <div class="box">I am a Box 1.</div>\n        <div class="box">I am a Box 2.</div>\n    </div>'

// document.querySelector(".container").outerText
//      'I am a Box 1.\nI am a Box 2.'

// document.querySelector(".container").tagName
//      'DIV'

// document.querySelector(".container").nodeName
//      'DIV'

//diff. is tagName only show it's element
//diff. is nodeName show it's nodes (it can be comment node,text node etc.. also)

// document.querySelector(".container").textContent
//      '\n        I am a Box 1.\n        I am a Box 2.\n    '

// document.querySelector(".container").hidden = true;
//       true

//document.querySelector(".box").innerHTML = "I am Harry";
//      'I am Harry'

// document.querySelector(".box").hasAttribute("style")
//      true

//document.querySelector(".box").getAttribute("style")
//      'display: flex;'

// document.querySelector(".box").setAttribute("style","background-color:aqua")
//      undefined

// document.querySelector(".box").removeAttribute("style")
//      undefined

// document.querySelector(".box").dataset
//      DOMStringMap {createdby: 'Harry', conceptby: 'Rohan'}


// <div class="container bg-green">...</div>

// document.querySelector(".container").classList
//      DOMTokenList(2) ['container', 'bg-green', value: 'container bg-green']

// document.querySelector(".container").classList.add = "red";
//      'red'

// document.querySelector(".container").classList
//      DOMTokenList(2) ['container', 'bg-green', add: 'red', value: 'container bg-green']

// document.querySelector(".container").className
//      'container bg-green'

// document.querySelector(".container").classList.remove("bg-green");
//       undefined

// document.querySelector(".container").classList
//      DOMTokenList ['container', add: 'red', value: 'container']


// <style>     .bg-green{  color: red;   }  </style>
// <div class="container bg-green">...</div>

// document.querySelector(".container").classList.toggle("bg-green");
//      false
// document.querySelector(".container").classList.toggle("bg-green");
//      true


















// Give us God power  on a website
// document.designMode = "on";
//      'on'