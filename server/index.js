const express = require('express');

const app = express();

app.use(express.json());

app.listen(5050, () => console.log('Listening on Port 5050'));
