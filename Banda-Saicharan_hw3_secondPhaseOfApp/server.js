const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Create a route to serve an HTML form
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/user-info-form');
});

// Handle form submission
app.post('/submit', (req, res) => {
    const name = req.body.name;
    console.log('User submitted name: ' + name);
    res.send('Form submitted successfully!');
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});