const multer = require("multer");
const path = require('path');

const studentUploadImage = () => {
  const storage = multer.diskStorage({
    destination: function (req, file, callBack) {
      const uploadDir = path.join(__dirname, "../Assets/", "students");
      callBack(null, uploadDir);
    },
    filename: function (req, file, callBack) {
      const fileName = `${Date.now()}-${file.originalname}`;
      if (!req.body[file.fieldname]) {
        req.body[file.fieldname] = [];
        req.body[file.fieldname].push(fileName);
      } else {
        req.body[file.fieldname].push(fileName);
      }
      callBack(null, fileName);
    },
  });

  return multer({ storage });
};

module.exports = { studentUploadImage };
