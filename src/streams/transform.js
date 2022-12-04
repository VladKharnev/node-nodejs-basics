import { Transform} from  'stream';
import { EOL } from 'os';
const transform = async () => {
    const reversStream = new Transform ({
        transform(chunk, encoding, callback){
            callback(null, chunk.toString().replace(EOL, '').split('').reverse().join('')+EOL);
        }
    })
    process.stdin.pipe(reversStream).pipe(process.stdout);
};

await transform();