var mongoose = require('mongoose');

var userSchema = new mongoose.Schema({
    userId: {type: String, required: true, uppercase: true },
    userFirstNm: String,
    userLastNm: String,
    userEmail: String,
    userCostCenter: String,
    records: [{
        customer: {
            firstNm: String,
            lastNm: String,
            businessNm: String,
            customerNr: String
        },
        account: {accountNr: Number},
        card: {cardNr: Number},
        timestamp: Date,
        application: String
    }]
});

module.exports = mongoose.model('User', userSchema);