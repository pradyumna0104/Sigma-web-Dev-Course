import fs from "fs/promises"
import fs1 from "fs"
import path from "path"


const basePath = "D:\\web coding\\sigma web development course\\Sigma-web-Dev-Course\\video 93";
let files = await fs.readdir(basePath);


for (const file of files) {
    let ext = file.split(".")[1];
    if (!ext) continue;
    // console.log(ext);
    if (ext != "js" && ext != "json") {
        const destDir = path.join(basePath, ext);
        if (!fs1.existsSync(destDir)) {
            await fs.mkdir(destDir);
        }
        await fs.rename(path.join(basePath, file), path.join(destDir, file));
    }
    // console.log(file);
}