const lineReader = require("line-reader");

lineReader.eachLine("./catdata.csv", function (line) {
  const arr = line.split(",");
  console.log(arr[1] + "," + arr[3] + "," + arr[5]);
});
