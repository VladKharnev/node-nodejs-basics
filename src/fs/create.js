import path from "node:path";
import  fs from "node:fs";
import url from "node:url";

const create = async () => {
  const __filename = url.fileURLToPath(import.meta.url);
  const __dirname = path.dirname(__filename);
  const filePath = path.join(__dirname, "files", "fresh.txt");
  fs.stat(filePath, function(err, stat) {
    if(err == null) {
        console.log('FS operation failed');
    } else if(err.code == 'ENOENT') {
        fs.writeFile(filePath, "I am fresh and young", (err) => {
            if (err) {
              throw err;
            }
            console.log("создан");
          });
    } else {
        console.log('Some other error: ', err.code);
    }
});
};

await create();