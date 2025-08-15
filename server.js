const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./config/db');

// Load env vars
dotenv.config();

// Connect to database
connectDB();

const app = express();

// Init Middleware
app.use(express.json());

app.get('/', (req, res) => res.send('API Running'));

// Mount routers
const carRoutes = require('./routes/carRoutes');
const authRoutes = require('./routes/authRoutes');

app.use('/api/cars', carRoutes);
app.use('/api/auth', authRoutes);

const userRoutes = require('./routes/userRoutes');
app.use('/api/users', userRoutes);


const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));