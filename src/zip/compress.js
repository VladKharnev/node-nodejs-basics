import fs from "fs";
import zlib from "zlib";
import path, { dirname } from "node:path";
import { fileURLToPath } from "node:url";

const compress = async () => {
  const __filename = fileURLToPath(import.meta.url);
  const __dirname = dirname(__filename);
  const zip = zlib.createGzip();
  const value = fs.createReadStream(path.join(__dirname, 'files', 'fileToCompress.txt'), 'utf-8');
  const outputValue = fs.createWriteStream(path.join(__dirname, 'files', 'archive.gz'));
  value.pipe(zip).pipe(outputValue)
};

await compress();
