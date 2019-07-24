const express = require('express');

const app = express();
const port = 8000;

app.use(express.static('app'));

app.listen(port, () => console.log(`App listening on port ${port}!`));
