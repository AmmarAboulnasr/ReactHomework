'use strict';

let express = require('express');

let PORT = process.env.PORT || 3000;
let app = express();

app.use(express.static('public'));

app.listen(PORT, () => {
  console.log('Server listening on port: ', PORT);
});