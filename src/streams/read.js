import fs from 'node:fs'
const read = async () => {
    const stream = fs.createReadStream('./src/streams/files/fileToRead.txt', 'utf-8');
    stream.pipe(process.stdout);
};

await read();