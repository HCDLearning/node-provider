
function Provider (options) {

	options = options || {};

	return loadProvider(options);
}

function loadProvider(options){
	if(!options.name){
		return;
	}

	var logger;

	switch(options.name){
		case "logger":

			if(options.param){
				logger = require('logger')(options.param);
			}else{
				logger = require('logger')();
			}
			
			break;
	}

	return logger;
};

module.exports = Provider;