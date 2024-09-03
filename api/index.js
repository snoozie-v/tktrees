const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
const path = require('path');
const cors = require('cors');
app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, '../public')));



app.post('/submit-quote', (req, res) => {
    const { name, email, phone, service, description } = req.body;
    console.log(req.body)
    res.sendFile(path.join(__dirname, '../public/thank-you.html'));

});

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
