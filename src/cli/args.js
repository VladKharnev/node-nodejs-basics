const parseArgs = () => {
  const values = [];
  process.argv.forEach((value, index) => {
    if (value.includes("--")) {
      values.push(value.slice(2) + " is " + process.argv[index + 1] + ' ');
    }
  });
  console.log(`${values}`);
};

parseArgs();
