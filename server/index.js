require('dotenv').config();

const express = require('express');
const app = express();
const cors = require('cors'); 
const PORT = process.env.PORT || 4000;
const connectDB = require('./config/db');
const jobRoutes = require('./routes/jobs')
const corsOptions = require("./config/corsOptions");







// Connect to MongoDB
app.use(express.json()); // Parse JSON requests
app.use(express.urlencoded({ extended: true }));
app.use(cors(corsOptions));
connectDB()
  .then((isConnected) => {
    if (isConnected) {
      app.listen(PORT, () => {
        console.log(`Server is running on port ${PORT}`);
      });
    } else {
      console.error('MongoDB connection failed. Exiting...');
      process.exit(1); // Exit with failure
    }
  })
  .catch((error) => {
    console.error('Error connecting to MongoDB:', error.message);
    process.exit(1); // Exit with failure
  });


app.get('/', (req, res) => {
  res.send('Hello, MongoDB!');
});


app.use('/api/v1/jobs',jobRoutes)
