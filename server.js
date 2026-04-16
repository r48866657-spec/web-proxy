const express = require('express');
const request = require('request');
const morgan = require('morgan');

const app = express();
const PORT = 3000;

// Middleware to log requests
app.use(morgan('combined'));

app.use((req, res) => {
    const targetUrl = req.url.replace('/proxy/', ''); // Assuming URL in format /proxy/http://example.com

    req.pipe(request(targetUrl)).pipe(res);
});

// Error handling middleware
app.use((err, req, res, next) => {
    console.error(err);
    res.status(500).send('Something went wrong!');
});

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});