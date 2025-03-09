const express = require('express');
const app = express();
const PORT = 3000;

// Middleware to serve static files (like your HTML, CSS, JS)
app.use(express.static('public')); // Change to your folder if different

// Example API route
app.get('/api/message', (req, res) => {
    res.json({ message: 'Hello from Express backend!' });
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});

