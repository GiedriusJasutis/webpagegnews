require('dotenv').config();
const express = require('express');
const app = express();
const cors = require('cors');
const path = require('path');
const connectDB = require('./db/database');
const logger = require('./middleware/logger');

// mongodb connection
connectDB();

app.use(cors());

app.use(express.json({ extended: false }));

// middleware
app.use(logger.searchLogger);

// routes
app.use('/api/gnews', require('./routes/gnews.js'));
app.use('/api/details', require('./routes/details'));

// #####
// serve client static files
app.use(express.static(path.join(__dirname, 'client/build')));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'client/build'));
});
// #####

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`server running on port ${PORT}`);
});
