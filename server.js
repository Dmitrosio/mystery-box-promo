const express = require('express');

const app = express();
const PORT = 3000;

// Middleware to serve static files (if needed)
app.use(express.static('public'));

// Basic route
app.get('/', (req, res) => {
    res.send('Development server is running!');
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});