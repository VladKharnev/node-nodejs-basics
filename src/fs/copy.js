import  fs from "node:fs";
const copy = async () => {

    fs.stat('./src/fs/files_copy', function(err) {
        if (!err) {
            console.log('FS operation failed');
        }
        else if (err.code === 'ENOENT') {
            fs.stat('./src/fs/files', function(err) {
                if (!err) {
                    fs.mkdir('./src/fs/files_copy', { recursive: false }, err => {
                        if(err) throw err;
                     });
                    fs.readdir('./src/fs/files', (err, data)=>{
                        data.forEach(file => {
                            fs.writeFile(`./src/fs/files_copy/${file}`, "Текст", function(err){
                                if (err) {
                                    console.log(err);
                                } else {
                                    fs.copyFile(`./src/fs/files/${file}`, `./src/fs/files_copy/${file}`, (err) => {
                                        if (err) {
                                            console.error(err)
                                            return
                                        }
                                        console.log('Файл успешно копирован')
                                    });
                                }
                            });
                        })
                    })
                }
                else if (err.code === 'ENOENT') {
                    console.log('FS operation failed');
                }
            });
        }
    });
};

copy();