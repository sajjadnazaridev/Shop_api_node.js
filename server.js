const mongoose = require('mongoose');
const app = require('./app');
const port = 8003;

mongoose.connect('mongodb://localhost:27017/shop')
    .then(() => {
        console.log('Connected to MongoDB!');
        app.listen(port, () => {
            console.log(`Server is running on http://localhost:${port}`);
        });
    })
    .catch(err => console.error('MongoDB connection error:', err));