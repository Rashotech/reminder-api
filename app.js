// Required Packages
const express = require('express');

// Routes
const reminderRoutes = require('./routes');

const PORT = process.env.PORT || 3000;

const app = express();
app.use(express.json());

// Routes
app.use('/reminders', reminderRoutes);

// middleware to handle invalid routes
app.use((req, res, next) => {
    const error = new Error('Could not find this route');
    throw error;
})

app.use((error, req, res, next) => {
    if (res.headerSent) {
        return next(error);
    }
    res.status(500).send(error.message)
})

app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`)
});