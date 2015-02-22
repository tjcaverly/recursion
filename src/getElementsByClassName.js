// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
var getElementsByClassName = function(className){
  var arr = [];     // Array to hold all node with the class

  var findAllElements = function(elementArray){

  	for (var i = 0; i<elementArray.length; i++){
  		var e = elementArray[i];

  		if (e.classList === undefined){
  			// Ignore nodes which don't have a class list
  			continue;
  		} else if (elementArray[i].classList.contains(className)){
  			// Add any elements with the className class to the result array
  			arr.push(elementArray[i]);
  		}

  		// Recursively search for all nodes with className class
  		findAllElements(elementArray[i].childNodes);
  	}
  }

  var body = document.body;
  findAllElements([body]);
  return arr;

};
