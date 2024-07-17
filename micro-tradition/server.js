// 导入Express模块
const express = require('express');
const cors = require('cors');
// 创建一个Express应用
const app = express();
app.use(cors());

// 设置静态资源目录
app.use(express.static('public'));

// 设置端口号
const port = process.env.PORT || 3003;

// 启动服务器
app.listen(port, () => {
  console.log(`Static resource server is running on http://localhost:${port}`);
});