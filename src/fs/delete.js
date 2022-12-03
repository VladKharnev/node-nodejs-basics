import fs from "node:fs";

const remove = async () => {
  fs.stat("./src/fs/files/fileToRemove.txt", function (err) {
    if (!err) {
      fs.unlink("./src/fs/files/fileToRemove.txt", (err) => {
        if (err) throw err; // не удалось удалить файл
        console.log("Файл успешно удалён");
      });
    } else {
      console.log("FS operation failed");
    }
  });
};
await remove();
