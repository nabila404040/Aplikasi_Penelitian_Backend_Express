const express = require('express');
const cors = require('cors');
const DBRoutes = require('./routes/DBRoutes');
const penelitianRoutes = require('./routes/MhsRoutes');
const app = express();

// Mengaktifkan CORS
app.use(cors());

// Middleware untuk mengurai JSON
app.use(express.json());

app.use('/api',
    DBRoutes,
    penelitianRoutes
);

module.exports = app;
