const express = require('express');

// Constants
const PORT = process.env.PORT || 3333;
const HOST = '0.0.0.0';

// App
const app = express();
app.get('/', (req, res) => {
  res.send('Hello Worlds - Env ' + process.env.DEMO);
});

app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);
