const express = require('express');
const helmet = require('helmet');
const cors = require('cors');
// const logger = require('./utils/logger');
// const errorHandler = require('./middlewares/errorHandler');
const userRoutes = require('./routes/userRoutes');

const app = express();

// Middleware
app.use(helmet());
app.use(cors());
app.use(express.json());
// app.use(logger);

// default route
app.get('/',(req,res) =>{
    return res.send("API is working")
})

// Routes
app.use('/api/users', userRoutes);

// Error Handling
// app.use(errorHandler);

module.exports = app;
