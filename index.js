const express = require('express');
const path = require('path');
const app = express();
const port = 3000;

// Serve static files from the portfolio/public directory
app.use(express.static(path.join(__dirname, 'portfolio', 'public')));

// Serve Next.js static files
app.use('/_next/static', express.static(path.join(__dirname, 'portfolio', '.next', 'static')));

// Handle all other requests with the Next.js index.html
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'portfolio', '.next', 'server', 'app', 'index.html'));
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});