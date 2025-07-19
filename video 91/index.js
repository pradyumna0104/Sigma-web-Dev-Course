const fs = require("fs");
const path  = require("path")

let files = path.resolve("D:\\web coding\\sigma web development course\\Sigma-web-Dev-Course\\video 91\\all");

if (!fs.existsSync(files)) {
    fs.mkdirSync(files);
}

let fileDir = fs.readFileSync(files);
console.log(fileDir);
