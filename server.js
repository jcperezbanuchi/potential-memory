const express = require('express');
const app = express();


app.get('/', (req, res) => {
    res.send('Hello World 4');
});



app.listen(3000, () => {
    console.log('Server is up and running on port 3000! :)');
});