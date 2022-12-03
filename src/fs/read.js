import fs from "node:fs";
const read = async () => {
  fs.stat("./src/fs/files/fileToRead.txt", function (err) {
    if (!err) {
        fs.readFile("./src/fs/files/fileToRead.txt", "utf8", 
        function(error,data){
            if(error) throw error;
            console.log(data);
});
    } else if (err.code === "ENOENT") {
      console.log("FS operation failed");
    }
  });
};
await read();
