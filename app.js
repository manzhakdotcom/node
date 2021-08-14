const express = require('express');
const app = express();

const port = process.env.port || 3000;

app.get('/', (req, res) => {
  res.send('Welcome to my page!');
});

app.listen(port, () => {
  console.log(`Server run on port: ${port}`);
});
