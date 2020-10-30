const path = require('path');
const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const connectDB = require('./config/db');

dotenv.config({ path: './config/config.env' });
//Connect to database
connectDB();

const app = express();

//Enable body Parser

app.use(express.json());

//Use cors
app.use(cors());

//Routes
app.use('/api/v1/stores', require('./routes/stores'));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () =>
  console.log(`Server runing in ${process.env.NODE_ENV} mode on port ${PORT}`)
);
