const express = require("express");
const app = express();
const { createServer } = require("http");
const { config } = require("dotenv");
config({ path: ".env" });
const cors = require("cors");
const bodyParser = require("body-parser");
require("./Database/Schema/index");

const server = createServer(app);

app.use("/STUDENT_PORTAL/images", express.static(__dirname + "/Assets/"));

// middlewares
app.use(express.json());
app.use(cors());

app.use(express.urlencoded({ extended: true }));
app.use(bodyParser.json({ limit: "50mb" }));
app.use(bodyParser.text({ limit: "50mb" }));
app.use(
  bodyParser.urlencoded({
    limit: "50mb",
    extended: true,
    parameterLimit: 50000,
  })
);

//response handler
app.use((req, res, next) => {
  const ResponseHandler = require("./Config/response_handler");
  res.handler = new ResponseHandler(req, res);
  next();
});

// Perform routing
{
  const route = require("./Routes/index");
  route(app);
}

// listening server
const port = process.env.PORT || 9000;
server.listen(port, (req, res) => {
  console.log(`Server is listening on port no ${port}`);
});
