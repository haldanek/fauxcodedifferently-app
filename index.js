const express = require('express');
const morgan = require('morgan');
const path = require('path');

app = express();

app.use(morgan('dev'));
app.use(express.static(path.join(__dirname, 'public')));

const PORT = process.env.PORT || 3000;

// Defines a POST route
app.post('/results.html', (req, res) => {
    res.status(200).send('<div> One moment please...</div>');
});

// Contact page setup
app.get('/contact', (req, res) => {
    res.sendFile(path.join(__dirname, 'contact.html'));
});

// Echo user input
app.post('/contact', express.urlencoded({ extended: true}), (req, res) => {
    const userInput = req.body; 
    res.json({ message: 'Form submitted successfully!', data:
        userInput });
});

// Finalizing the server
app.listen(PORT, () => {
    console.log('Server running on http://localhost:3000');
});
