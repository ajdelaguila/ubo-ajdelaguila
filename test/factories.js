module.exports.userOne = function() {
    return {
        userId: 'QA0001',
        userFirstNm: 'Test',
        userLastNm: 'UserOne',
        userEmail: 'qa0001@bbva.com',
        userCostCenter: '123',
        records: []
    };
};

module.exports.userTwo = function() {
    return {
        userId: 'QA0002',
        records: [{
            customer: {
                firstNm: 'Customer',
                lastNm: 'One',
                businessNm: 'Google',
                customerNr: 234
            },
            account: {accountNr: 234},
            card: {cardNr: 234},
            timestamp: '2017-01-13T20:32:09.117Z',
            application: 'App'
        }]
    };
};

module.exports.userThree = function() {
    return {
        userId: 'QA0003',
        userFirstNm: 'Complete',
        userLastNm: 'User',
        userEmail: 'qa0003@bbva.com',
        userCostCenter: '345',
        records: [{
            customer: {
                firstNm: 'Customer',
                lastNm: 'Two',
                businessNm: 'Business',
                customerNr: 345
            },
            account: {accountNr: 345},
            card: {cardNr: 345},
            timestamp: '2017-01-13T20:32:09.117Z',
            application: 'Other App'
        }]
    };
};