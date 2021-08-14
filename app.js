const express = require('express');
const app = express();

const port = process.env.port || 8080;

app.get('/', (req, res) => {
  res.send('Welcome to my page! Be with me.');
});

app.listen(port, () => {
  console.log(`Server run on port: ${port}`);
});
