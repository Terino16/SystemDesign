const express = require('express');
const app = express();
const port = 3000;

app.get('/hello', (req, res) => {
    console.log(req.headers);
  res.send('Hello');
});

app.listen(port, () => {
  console.log(`Server is running and listening on port ${port}`);
});
