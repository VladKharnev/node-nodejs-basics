import fs from "node:fs";

const rename = async () => {
  fs.stat("./src/fs/files/wrongFilename.txt", function (err) {
    if (!err) {
      fs.stat("./src/fs/files/properFilename.md", function (err) {
        if (!err) {
          console.log("FS operation failed");
        } else {
            fs.rename('./src/fs/files/wrongFilename.txt', './src/fs/files/properFilename.md', err => {
                if(err) throw err; // не удалось переименовать файл
                console.log('Файл успешно переименован');
             });
        }
      });
    } else if (err.code === "ENOENT") {
      console.log("FS operation failed");
    }
  });
};
await rename();
