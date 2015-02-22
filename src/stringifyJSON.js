// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

var stringifyJSON = function(obj) {

  var result;

  // returns true if obj is undefined or a function
  var isUnstringable = function(obj) {
  	return ( (obj === undefined) || (typeof(obj)===typeof(function(){})) );
  }

  // stringify null
  if (obj === null) 
  {
  	result = 'null';
  } 
  // ignore unstringifyable objects
  else if ( isUnstringable(obj) ) 
  {
  	result = undefined;
  } 
  // stringify numbers and booleans
  else if (typeof(obj)===typeof(0) || typeof(obj)===typeof(true)) 
  {
  	result = String(obj);
  } 
  // stringify strings
  else if(typeof(obj)===typeof("")) 
  {
  	result = '"' + obj + '"';
  } 
  //stringify arrays
  else if (Array.isArray(obj))
  {
  	var result = '[';
  	for (var i = 0; i<obj.length; i++){
  		if ( isUnstringable(obj[i]) ){
  			continue;
  		}

  		result += stringifyJSON(obj[i]);
  		result += (i === (obj.length-1)) ? '' : ','; // place commas between elements
  	}
  	result += ']';
  } 
  // stringify non-array objects 
  else if(typeof(obj) === typeof({})) 
  {
  	var result = '{';
  	for (var key in obj){
  		if ( isUnstringable(obj[key]) ){
  			continue;
  		}
  		if (result.length !== 1) {
  			result += ','; //place commas between elements
  		}
  		result += stringifyJSON(key) + ':' + stringifyJSON(obj[key]); //stringify an element
  	}
  	result += '}';

  }

  return result;
};
