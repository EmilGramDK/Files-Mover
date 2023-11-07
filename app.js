const { exec } = require("child_process");
const fs = require("fs");
const path = require("path");
const { promisify } = require("util");
const mkdir = promisify(fs.mkdir);

const desktopPath = path.join(require("os").homedir(), "Desktop");

/* EDIT FILE PATHS */

const file1 = path.join(__dirname, "files/file1.txt");
const file2 = path.join(__dirname, "files/file2.txt");

moveFile(file1);
moveFile(file2);

/* EDIT FILE PATHS */

async function moveFile(file) {
  try {
    const destinationFolder = path.join(desktopPath, "files");
    await mkdir(destinationFolder, { recursive: true });

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
