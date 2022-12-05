import fs from 'node:fs'
export const write = async () => {
    const stream = fs.createWriteStream('./src/streams/files/fileToWrite.txt');
    process.stdin.pipe(stream);
    console.log("Напишите что-то/n");
};

await write();