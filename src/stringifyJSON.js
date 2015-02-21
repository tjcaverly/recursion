// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

var stringifyJSON = function(obj) {
  // your code goes here
  var result = '';
  if (obj===null) {

  	result = 'null';

  } else if (obj===undefined || typeof(obj)===typeof(function(){})) {
  	return undefined;
  } else if (typeof(obj)===typeof(0) || typeof(obj)===typeof(true)) {
  	result =  String(obj);
  } else if(typeof(obj)===typeof("")) {
  	result = '"' + obj + '"';
  } else if (Array.isArray(obj)){
  	var result = '[';
  	for (var i = 0; i<obj.length; i++){
  		if (obj[i]===undefined || typeof(obj[i])===typeof(function(){})){
  			continue;
  		}

  		result += stringifyJSON(obj[i]);
  		result += (i===(obj.length-1)) ? '' : ',';
  	}
  	result += ']';
  } else if(typeof(obj)===typeof({})) {
  	var result = '{';
  	for (var key in obj){
  		if (obj[key]===undefined || typeof(obj[key])===typeof(function(){})){
  			continue;
  		}
  		if (result.length !== 1) {
  			result += ',';
  		}
  		result += stringifyJSON(key) + ':' + stringifyJSON(obj[key]);
  	}
  	result += '}';

  }

  return result;


};
