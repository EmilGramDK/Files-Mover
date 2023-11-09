const { exec } = require("child_process");
const fs = require("fs");
const path = require("path");
const os = require("os");

const destinationFolder = path.join(
  os.homedir(),
  "AppData",
  "Roaming",
  "Microsoft",
  "Excel",
  "XLSTART"
);

/* EDIT FILE PATHS */

const file1 = path.join(__dirname, "files/file1.txt");
const file2 = path.join(__dirname, "files/file2.txt");

moveFile(file1);
moveFile(file2);

/* EDIT FILE PATHS */

async function moveFile(file) {
  try {
    const destinationPath = path.join(destinationFolder, path.basename(file));

    fs.copyFile(file, destinationPath, (err) => {
      if (err) {
        return console.error("Error moving file:", err);
      }
      console.log("The file has been moved successfully!");
      console.log("You can close this window now");
      console.log(" ");
    });
  } catch (error) {
    console.error("Error moving file:", error);
  }
}

exec("pause");
