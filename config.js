module.exports = function(){
	return {URL: 'mongodb://127.0.0.1:27017/ubo-dev'};
	/*
    switch(process.env.NODE_ENV){
        case 'dev':
            return {URL: 'mongodb://ualvtstrhel1.compassbnk.com/ubo-dev'};
        case 'test':
            return {URL: 'mongodb://ualvtstrhel1.compassbnk.com/ubo-test'};
        case 'qa':
            return {URL: 'mongodb://ualvtstrhel1.compassbnk.com/ubo-qa'};
        default:
            return {URL: 'mongodb://ualvtstrhel1.compassbnk.com/ubo-dev'};
    }
	*/
};