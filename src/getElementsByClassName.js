// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
var getElementsByClassName = function(className){
  // your code here
  var arr = [];

  var findAllElements = function(elementArray){
  	for (var i = 0; i<elementArray.length; i++){
  		var e = elementArray[i];
  		if (e.classList === undefined){
  			continue;
  		}
  		if (elementArray[i].classList.contains(className)){
  			arr.push(elementArray[i]);
  		}
  		findAllElements(elementArray[i].childNodes);
  	}
  }
  var body = document.body;
  findAllElements([body]);
  return arr;
};
