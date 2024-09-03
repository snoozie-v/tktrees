const express = require('express');
const path = require('path');

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());
app.use(express.urlencoded({ extended : true}))

// Serve static files from the 'public' folder which is a sibling to 'backEnd'
app.use(express.static(path.join(__dirname, '..', 'public')));

// Route for root path
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '..', 'public', 'index.html'));
});

app.post('/submit-quote', (req, res) => {
    try {
        const { name, email, phone, service, description } = req.body;
        console.log(req.body);
        res.sendFile(path.join(__dirname, '..', 'public', 'thank-you.html'));
    } catch (error) {
        console.error('Error processing request:', error);
        res.status(400).send('Invalid request data');
    }
});

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});