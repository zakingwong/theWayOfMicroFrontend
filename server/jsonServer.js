const express = require("express");
const fs = require("fs");
const path = require("path");
const cors = require('cors');
const ip = require("ip");
const host = ip.address();

const app = express();
const port = 3000;
app.use(cors());

app.get("/micro-config", (req, res) => {
  const dirVue = "../micro-vue-app/dist";
  const dirReact = "../micro-react-app/build";

  const readData = (dir) => {
    try {
      const files = fs.readdirSync(dir);
      const data = {};

      files.forEach((file) => {
        if (file.endsWith("asset-manifest.json")) {
          const filePath = path.join(dir, file);
          const content = fs.readFileSync(filePath, "utf-8");
          const json = JSON.parse(content);
          data[file] = json;
        }
      });

      return data;
    } catch (error) {
      console.error("Error reading directory:", error);
      return {};
    }
  };

  const dataVue = readData(dirVue);
  const dataReact = readData(dirReact);

  const combinedData = {
    vue: {
      ...dataVue,
    },
    react: {
      ...dataReact,
    },
  };
  console.log(combinedData)
  res.json(combinedData);
});

app.listen(port,host, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
