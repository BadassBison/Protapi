const express = require('express');

const app = express();

app.get('/', (req, res) => console.log("hello world"));


const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server is now running on port ${PORT}`));