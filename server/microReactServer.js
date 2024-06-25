const express = require("express");
const path = require("path");
const ip = require("ip");

const host = ip.address();
const port = 3001;
const app = express();

const staticPath = path.join(__dirname, "../micro-react-app/build");
console.log(staticPath, "staticPath");
app.use(express.static(staticPath));

// 启动 Node 服务
app.listen(port, host);
console.log(`server start at http://${host}:${port}/`);
