const mongoose = require('mongoose');

const dashboardSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  widgets: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Widget'
  }]
});

const Dashboard = mongoose.model('Dashboard', dashboardSchema);

module.exports = Dashboard;