const { readFile } = require('fs');

const fileArg = process.argv[2]

if (fileArg) {

  readFile(fileArg, (err, data) => {

    if (err) return console.error(err); //single return doesnt require curly brackets
    process.stdout.write(data)

  })

} else {
  process.exit()
}

console.log("this is the async version");
