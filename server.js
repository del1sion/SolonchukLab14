const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => res.sendFile(path.join(__dirname, 'public', 'index.html')));
app.get('/task1', (req, res) => res.sendFile(path.join(__dirname, 'public', 'task1.html')));
app.get('/task2', (req, res) => res.sendFile(path.join(__dirname, 'public', 'task2.html')));

app.listen(PORT, () => console.log(`Lab 14 running at http://localhost:${PORT}`));
