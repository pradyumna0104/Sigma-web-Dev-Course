//          path module
import path from "path"

// console.log(path)

//example to check some path functionalities
let myPath = "D:\\web coding\\sigma web development course\\Sigma-web-Dev-Course\\video 87\\harry.txt"; 

console.log(path.extname(myPath));//.txt
console.log(path.dirname(myPath));//D:\web coding\sigma web development course\Sigma-web-Dev-Course\video 87
console.log(path.basename(myPath));//harry.txt

console.log(path.join("c:/","web coding\\sigma web development course\\Sigma-web-Dev-Course\\video 87\\check.txt"));
//c:\web coding\sigma web development course\Sigma-web-Dev-Course\video 87\check.txt