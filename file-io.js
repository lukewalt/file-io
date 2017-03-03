const { readFileSync } = require('fs');

const fileArg = process.argv[2];

if (fileArg) {

  try {
    const data = readFileSync(fileArg, '')
    // console.log(data.toString());
    process.stdout.write(data)
  } catch(error) {
    console.log("error", error.stack);
  }

} else {
  process.exit();
}

console.log('this is the syncronous version');
