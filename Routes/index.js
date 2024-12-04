const { studentUploadImage } = require("../utils/file_uploader");

module.exports = (app) => {
  app.post("/", (req, res) => {
    res.send("Welcome To Student Portal");
  });

  app.use("/student", require("./students"));
  app.use("/subject", require("./subjects"));


  const upload = studentUploadImage();

  app.post("/students/upload", upload.single("profile_picture"), (req, res) => {
    try {
      res.status(200).json({
        message: "File uploaded successfully",
        file: req.file,
      });
    } catch (err) {
      res.status(500).json({ error: "File upload failed", details: err });
    }
  });
};