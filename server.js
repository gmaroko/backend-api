const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const dashboardRouter = require('./routes/dashboardRoutes');
const productsRouter = require('./routes/productRoutes');

const app = express();

// Middleware
app.use(bodyParser.json());
app.use(cors({
   origin: 'https://captsone-project-retailsales-app-client.onrender.com/api/dashboard',
   allowedHeaders: ['Content-Type', 'Authorization', 'Access-Control-Allow-Headers']
}));
app.use((req, res, next) => {
   res.setHeader('Access-Control-Allow-Origin', '*');
   res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
   res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
   next();
 });

//DB config
const MONGODB_URI = process.env.MONGODB_URI || require('./config').mongoDB_URI;

// Connect to MongoDB
mongoose.connect(MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })

// Check Connection
let db = mongoose.connection;
db.once('open', () => {
   console.log('Database connected successfully!')
})



// Check for DB Errors
db.on('error', (error) => {
   console.log(error);
   mongoose.set('StrictQuery', true);
})

// Routes
app.use('/api/dashboard', dashboardRouter);
app.use('/api/products', productsRouter);

// Define the PORT
const PORT = process.env.PORT || 5005

//Listening to port
app.listen(PORT, () => {
   console.log(`Server listening on port ${PORT}`)
})

// //Initialising imports
// const express = require('express');
// const mongoose = require('mongoose');
// const cors = require('cors');
// const dashboardRoute = require('./routes/productRoutes');
// const productRoute = require('./routes/dashboardRoutes');
// const Product = require('./models/products');


// // Initializing express
// const app = express()

// // Body parser middleware
// app.use(express.json())
// app.use(cors())


// //DB config
// const MONGODB_URI = process.env.MONGODB_URI || require('./config').mongoDB_URI

// // Connect to MongoDB
// mongoose.connect(MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })


// // Check Connection
// let db = mongoose.connection;
// db.once('open', () => {
//    console.log('Database connected successfully!')
// })

// // Check for DB Errors
// db.on('error', (error) => {
//    console.log(error);
//    mongoose.set('StrictQuery', true);
// })

// // Use Routes
// app.use('/Product', productRoute)

// // Define the PORT
// const PORT = process.env.PORT || 5005

// //Listening to port
// app.listen(PORT, () => {
//    console.log(`Server listening on port ${PORT}`)
// })
