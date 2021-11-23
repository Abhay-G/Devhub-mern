require('dotenv').config();
const express = require('express');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const app = express();
require('./database')();
const router = require('./routes');
const PORT = process.env.PORT || 5500;
app.use(cookieParser());
const corsOptions = {
    credentials: true,
    origin: ['http://localhost:3000'],
};
app.use(cors(corsOptions));
app.use('/storage', express.static('storage'));
app.use(express.json({ limit: '8mb' }));
app.use(router);
app.get('/', (req, res) => res.send('Hello from server'));
app.listen(PORT, () => console.log(`Listening on port ${PORT}`));
