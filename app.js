const express = require('express');
const app = express();
const port = 3000;

app.use(express.json()); // Middleware to parse JSON bodies
// Route 1: Ger request to '/'
app.get('/', (req, res) => {
    const requestData = req.body;
    // Process requestData...
    res.send('Received Get request on route 1');
});
// Route 1: POST request to '/route1'
app.post('/route', (req, res) => {
    const requestData = req.body;
    // Process requestData...
    res.send('Received POST request on route 1');
});

// Route 2: POST request to '/route2'
app.post('/route1', (req, res) => {
    const requestData = req.body;
    // Process requestData...
    res.send('Received POST request on route 2');
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
