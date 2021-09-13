const express = require('express');

// Constants
const PORT = process.env.PORT || 3000;
const HOST = '0.0.0.0';

// App
const app = express();
app.get('/', (req, res) => {
  res.send('Hello World - env ' + process.env.DEMOS + ' - ' + process.env.DEMOST + ' - ' + process.env.TST);
});

console.log(process.env)

app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);
