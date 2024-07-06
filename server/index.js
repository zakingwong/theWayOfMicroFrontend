const express = require("express");
const { JSDOM } = require("jsdom");
const fs = require("fs").promises;
const app = express();

app.get("/", async (req, res) => {
  try {
    // 同时读取 header.html 和 content.html 文件
    const [headerData, contentData] = await Promise.all([
      fs.readFile("header.html", "utf8"),
      fs.readFile("content.html", "utf8"),
    ]);

    // 拼接 header.html 和 content.html 的内容
    const combinedHtml = `${headerData}${contentData}`;

    const templateDOM = new JSDOM(`
        <!DOCTYPE html>
        <html lang="en">
          <head>
            <meta charset="UTF-8" />
            <meta http-equiv="X-UA-Compatible" content="IE=edge" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <title>SSR + MicroFrontend</title>
          </head>
          <body>
            ${combinedHtml}
          </body>
        </html>
        `);
    res.end(templateDOM.serialize());
  } catch (err) {
    console.error(err);
    res.status(500).send("Error reading HTML files");
  }
});

app.listen(8000);
