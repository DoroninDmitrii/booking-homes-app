require('dotenv').config();
const cors = require('cors');
const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 6000;

const indexRoute = require('./routes/indexRouter');

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use('/images', express.static(path.join(__dirname, 'images')));

app.use(cors({
  origin: ['http://localhost:3000'],
  credentials: true,
}));

app.use('/api', indexRoute);

app.listen(PORT, () => {
  console.log('Server started on port', PORT);
});
