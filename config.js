module.exports = function(){

	var mongodb_services = [
	    {
	      "credentials": {
	        "db_type": "mongodb",
	        "name": "bmix-lon-yp-a4f4833f-501c-4966-b538-021cce0adef4",
	        "uri_cli": "mongo --ssl --sslAllowInvalidCertificates sl-eu-lon-2-portal.3.dblayer.com:17056/admin -u admin -p IFENXRNTEEFOBGSZ",
	        "ca_certificate_base64": "LS0tLS1CRUdJTiBDRVJUSUZJQ0FURS0tLS0tCk1JSURoekNDQW0rZ0F3SUJBZ0lFV05WTVZEQU5CZ2txaGtpRzl3MEJBUTBGQURCRk1VTXdRUVlEVlFRREREcGgKYW1SbGJHRm5kV2xzWVVCamNtOXpjM1poYkdVdVkyOXRMVE0wTWpabE1UTTNNMlkyTXpGbU5XVTJOVGhtTkRNMApNVGhtTjJJM1lqRTRNQjRYRFRFM01ETXlOREUyTkRFMU5sb1hEVE0zTURNeU5ERTJNREF3TUZvd1JURkRNRUVHCkExVUVBd3c2WVdwa1pXeGhaM1ZwYkdGQVkzSnZjM04yWVd4bExtTnZiUzB6TkRJMlpURXpOek5tTmpNeFpqVmwKTmpVNFpqUXpOREU0WmpkaU4ySXhPRENDQVNJd0RRWUpLb1pJaHZjTkFRRUJCUUFEZ2dFUEFEQ0NBUW9DZ2dFQgpBS0xwYlNkU0xUcU52RzZUN0YxQkYvK290clE4S1lYTzJabzRzRTNxZjhsYVFzdlZyYlloeDJKQ1o0WmRRd0xUCks1VDRsWTlRQ0xKc3pIR0szVExGbmt6STNmUHVQbzAzMjJMWENMUjh1UjBqWlV2d1lKQjQ0V01HcGJTZkNwMzgKODJuNFFjZWpzZjhNUktuS3JmN3JXSmhXQWR0NFgwYWM1SmxLdFVyZ045WmJGYlZZbmk1b0M5c1UrazN6UzNpUgpIdE0yckd1c0pLL09WTm1sMjBCajQ2dHh4dEI3djBPOS9EUW00Wmd0SUZJbkNoRHpyZkFqSTlWTmRBdEcvbURDCngzNGhBb25vZUJ4RmtUVHFhU3ZuUkl0eTRxRlpWU1ViS1pROWVPSWYxV0RwLzJTNTVYeDlqdmNLMG0xV3p0OFMKaTdZR1FEUm9PTk0wZER0cy85ZXBBUDBDQXdFQUFhTi9NSDB3SFFZRFZSME9CQllFRkd5dFVDdldORHJweWJVSgppMTJwTWs0cGxtK2hNQTRHQTFVZER3RUIvd1FFQXdJQ0JEQWRCZ05WSFNVRUZqQVVCZ2dyQmdFRkJRY0RBUVlJCkt3WUJCUVVIQXdJd0RBWURWUjBUQkFVd0F3RUIvekFmQmdOVkhTTUVHREFXZ0JSc3JWQXIxalE2NmNtMUNZdGQKcVRKT0taWnZvVEFOQmdrcWhraUc5dzBCQVEwRkFBT0NBUUVBVGQ2R010WnE4MTdZVFZiY09IVG9MalpWSGNLQgp6OHJHejk2Q05mNml5RTcyZVoxcC9HQVlZdnl2Q0NDY2NYUCtZYUZKbWJacHZDVm8wQXlWWGhmNWpTeGVjbVFLCmk3cno4a2pwdFpnY0FtbHBlSW8rTDl5eU1FcXcwUUszYlZVd0tKVWJJN3VHTEE3bkd4YUVlUmpUTXhPcElsU2wKL2gyd2NteXNXaTgwRWpzZzY2eXphVERqTFZYbVpSb3hNeXpkejEwd1k3MXhTdHQveDYzbHlFck82b2VSVDl3QwpXMG1TUzlBYTR1TnJHcmxHWU56RnM4WUdpL0NHZDJzUG1DdThiTFVnRm11bkZtQ3JUbVN1di92V3RIUUNaaTAwCjhHQzE0blZSRUhacWF4WFJtNDFKMWsyb2Y4NlVMc2dDQlQzaURONkt5ZkdSU1FucjdkMXRiV0I4VEE9PQotLS0tLUVORCBDRVJUSUZJQ0FURS0tLS0tCg==",
	        "deployment_id": "58d54c4c3fb8410014001b15",
	        "uri": "mongodb://admin:IFENXRNTEEFOBGSZ@sl-eu-lon-2-portal.3.dblayer.com:17056/xv-ubo,sl-eu-lon-2-portal.2.dblayer.com:17056/xv-ubo?authSource=admin&ssl=true"
	      },
	      "syslog_drain_url": null,
	      "label": "compose-for-mongodb",
	      "provider": null,
	      "plan": "Standard",
	      "name": "Compose for MongoDB-08",
	      "tags": [
	        "big_data",
	        "data_management",
	        "ibm_created"
	      ]
	    }
	  ];

	// We now take the first bound MongoDB service and extract it's credentials object
	var credentials = mongodb_services[0].credentials;

	// Within the credentials, an entry ca_certificate_base64 contains the SSL pinning key
	// We convert that from a string into a Buffer entry in an array which we use when
	// connecting.
	//var ca = [new Buffer(credentials.ca_certificate_base64, "base64")];
	
	return {URL: credentials.uri, OPTIONS: {
        mongos: {
            ssl: false,
            sslValidate: false,
            //sslCA: ca,
            poolSize: 1,
            reconnectTries: 1
        }}};

	//return {URL: 'mongodb://127.0.0.1:27017/ubo-dev'};
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