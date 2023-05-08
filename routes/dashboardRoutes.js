const express = require('express');
const router = express.Router();

// Dashboard Model
const Dashboard = require('../models/dashboard');

// @route GET /dashboard
// @desc Get dashboard data
router.get('/', (req, res) => {
// Define query object to fetch the dashboard data
const query = {};

// Fetch dashboard data from database using a Promise
Dashboard.findOne(query)
.then(dashboard => {
res.json(dashboard);
})
.catch(error => {
console.log(error);
res.status(500).send('Server error');
});
});

// @route PUT /dashboard
// @desc Update dashboard data
router.put('/', (req, res) => {
// Define query object to update the dashboard data
const query = {};

// Update dashboard data in the database using a Promise
Dashboard.findOneAndUpdate(query, req.body, { new: true, upsert: true })
.then(dashboard => {
res.json(dashboard);
})
.catch(error => {
console.log(error);
res.status(500).send('Server error');
});
});

module.exports = router;
// const express = require('express');
// const router = express.Router();

// // Dashboard Model
// const Dashboard = require('../models/dashboard');

// // @route GET /dashboard
// // @desc Get dashboard data
// router.get('/', (req, res) => {
//   // Define query object to fetch the dashboard data
//   const query = {};

//   // Fetch dashboard data from database
//   Dashboard.findOne(query, (error, dashboard) => {
//     if (error) console.log(error)
//     res.json(dashboard)
//   })
// })

// // @route PUT /dashboard
// // @desc Update dashboard data
// router.put('/', (req, res) => {
//   // Define query object to update the dashboard data
//   const query = {};

//   // Update dashboard data in the database
//   Dashboard.findOneAndUpdate(query, req.body, { new: true, upsert: true }, (err, dashboard) => {
//     if (err) console.log(err);
//     res.json(dashboard)
//   })
// })

// module.exports = router;

// const express = require('express');
// const router = express.Router();

// // Dashboard Model
// const Dashboard = require('../models/dashboard');

// // @route GET /dashboard
// // @desc Get dashboard data
// router.get('/', (req, res) => {
//   // Fetch dashboard data from database
//   Dashboard.findOne({}, (error, dashboard) => {
//     if (error) console.log(error)
//     res.json(dashboard)
//   })
// })

// // @route PUT /dashboard
// // @desc Update dashboard data
// router.put('/', (req, res) => {
//   // Update dashboard data in the database
//   Dashboard.updateOne({}, req.body, { upsert: true }, (err, dashboard) => {
//     if (err) console.log(err);
//     res.json(dashboard)
//   })
// })

// module.exports = router;

