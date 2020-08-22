const express = require("express");

//Set Variable
const port = 4000;

// Create an express app
const server = async () => {
  const app = express();

  //Configuration
  app.use(express.urlencoded());
  app.use(express.json());

  // Routes
  app.post("/story", (req, res) => {
    res.send(req.body);
  });

  app.listen(port, () => {
    console.log(`Server running at http://localhos:${port}`);

    console.table({
      "App Name": "Covid Anchor API",
      path: `http://localhost:${port}`,
    });
  });
};

module.exports = server;
