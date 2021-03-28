const os = require("os");
const fs = require("fs");
const http = require("http");

console.log("Hello World");

console.log(`Architecture ${os.arch()}`);
console.log(`CPUs ${os.cpus().length}`);
console.log(`OS ${os.platform()}`);

const filename = __dirname + "/test.txt";
const outFileName = __dirname + "/test-copy.txt";

fs.readFile(filename, (err, data) => {
  if (err) console.log(err);
  else console.log(data.toString());
});

const data = fs.readFileSync(filename);
console.log(data.toString());

const readStream = fs.createReadStream(filename);
const writeStream = fs.createWriteStream(outFileName);

readStream.pipe(writeStream);

readStream.on("data", (chunk) => {
  console.log(chunk.toString());
});

const server = http.createServer((req, res) => {
  res.setHeader("Content-Type", "text/html");

  switch (req.method) {
    case "GET":
      res.write("<h1>Hello World</h1>");
      res.end();
      break;
    case "POST":
      req.on("data", (chunk) => {
        res.write(`<h1>Hello, ${chunk}<h1>`);
        res.end();
      });
      break;
  }
});

server.listen(3000, (err) => {
  console.log("Server is running on port 3000");
});
