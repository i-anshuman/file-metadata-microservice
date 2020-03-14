const express = require('express');
const app = express();
const formidable = require('formidable');

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.use(express.static(__dirname + "/assets/"));

app.post('/api/fileanalyse', (req, res) => {
  const form = formidable();
  form.parse(req, (err, fields, files) => {
    if (err) {
      next(err);
      return;
    }
    res.json({
      name: files.upfile.name,
      type: files.upfile.type,
      size: files.upfile.size
    });
  });
});

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/views/index.html");
});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
