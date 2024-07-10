const express = require("express");
const path = require("path");
const ip = require("ip");
const cors = require('cors');
const host = ip.address();
const port = 3002;
const app = express();

const staticPath = path.join(__dirname, "../micro-vue-app/dist");
console.log(staticPath, "staticPath");
app.use(cors());
app.use(express.static(staticPath));

// 启动 Node 服务
app.listen(port, host);
console.log(`server start at http://${host}:${port}/`);
