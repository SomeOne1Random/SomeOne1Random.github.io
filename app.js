const express = require('express');
const app = express();

// Serve static files from the "public" directory
app.use(express.static('public'));

// Set the view engine to EJS
app.set('view engine', 'ejs');

// Define routes
app.get('/', (req, res) => {
    res.render('index', { title: 'Home' });
});

app.get('/portfolio', (req, res) => {
    res.render('portfolio');
});

// Error Handling Middleware
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Something went wrong!');
});

// Catch-All Route for undefined routes - this should be the last route
app.get('*', (req, res) => {
    res.status(404).send('This route is not defined.');
});


// Start the server
app.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
});
