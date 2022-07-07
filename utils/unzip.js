const extract = require("extract-zip");

(async () => {
  try {
    await extract("./csv.zip", { dir: __dirname });
    console.log("Extraction complete");
  } catch (err) {
    console.log("Error...", err);
  }
})();
