var chocolateBars = ["snickers","hundred grand","kitkat","skittles"];

function addElementToBeginningOfArray(array, element){
  var newArray = new Array();
  newArray = array;
  newArray.unshift(element);
  return newArray;
}

function destructivelyAddElementToBeginningOfArray(arrayName, newElement){
  arrayName.unshift(newElement);
  return arrayName;
}

function addElementToEndOfArray(arrayName, newElement){
  var newEndArray = arrayName;
  newEndArray.push(newElement);
  return newEndArray;
}

function destructivelyAddElementToEndOfArray(arrayName, newElement){
  arrayName.push(newElement);
  return arrayName;
}

function accessElementInArray(arrayName, index){
  return arrayName[index];
}

function destructivelyRemoveElementFromBeginningOfArray(arrayName){
  arrayName.shift();
  return arrayName;
}

function removeElementFromBeginningOfArray(arrayName){
  var newArrayMinusFirst = arrayName;
  newArrayMinusFirst.shift();
  return newArrayMinusFirst;
}

function destructivelyRemoveElementFromEndOfArray(arrayName){
  arrayName.pop();
  return arrayName;
}

function removeElementFromEndOfArray(arrayName){
  var newArrayMinusLast = arrayName;
  newArrayMinusLast.pop();
  return newArrayMinusLast;
}

