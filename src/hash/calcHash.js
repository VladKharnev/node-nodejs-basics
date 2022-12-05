import fs from "node:fs";
const { createHash } = await import("node:crypto");
const calculateHash = async () => {
  fs.readFile(
    "./src/hash/files/fileToCalculateHashFor.txt",
    "utf8",
    (err, data) => {
      if (err) throw err;
      const hash = createHash('sha256', data)
      console.log(hash.digest("hex"))
    }
  );
};

await calculateHash();
