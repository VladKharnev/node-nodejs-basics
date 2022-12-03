import fs from "node:fs";
const list = async () => {
  fs.stat("./src/fs/files", function (err) {
    if (!err) {
        fs.readdir('./src/fs/files', (err, data)=>{
            data.forEach(file => {
                console.log(file)
            })
        })
    } else if (err.code === "ENOENT") {
      console.log("FS operation failed");
    }
  });
};

await list();
