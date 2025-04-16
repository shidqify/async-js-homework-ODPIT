const fs = require('fs');

module.exports.readJson = (fileName) => {
  fs.readFile(fileName, 'utf-8', (err, fileData) => {
    if (err) return console.error("Error:", err);

    const data = JSON.parse(fileData);
    data[8].first_name = "shidqi";
    console.log(data);
    fs.writeFile(fileName, JSON.stringify(data, null, 2), (err) => {
      if (err) return console.error("Error writing file:", err);
      console.log("File successfully updated");
    });
  });
};