const mongoose = require('mongoose');

const projectSchema = mongoose.Schema({
    title: String,
	creation_date: {
		type: Date,
		default: Date.now
	}
});

module.exports = mongoose.model('Project', projectSchema);