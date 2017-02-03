/*
  utils.js
  Aaron Romel

  General utility functions
*/

const fs = require('fs');

// recursively list all files in a directory syncronously
const recurFileRead = (dir, filelist) => {
  const files = fs.readdirSync(dir);

  let fl = filelist || [];
  files.forEach((file) => {
    if (fs.statSync(`${dir}/${file}`).isDirectory()) {
      fl = recurFileRead(`${dir}${file}`, fl);
    } else {
      fl.push(`${dir}/${file}`);
    }
  });

  return fl;
};

module.exports.recurFileRead = recurFileRead;
