var chocolateBars = ["snickers","hundred grand","kitkat","skittles"];

function addElementToBeginningofArray(arrayName, newElement){
  var newArray = arrayName;
  return newArray.unshift(newElement);
}

function destructivelyAddElementToBeginningofArray(arrayName, newElement){
  return arrayName.unshift(newElement);
}

function addElementToEndofArray(arrayName, newElement){
  var newEndArray = arrayName;
  return newEndArray.push(newElement);
}

function destructivelyAddElementToEndOfArray(arrayName, newElement){
  return arrayName.push(newElement);
}

function accessElementInArray(arrayName, index){
  return arrayName[index];
}

function destructivelyRemoveElementFromBeginningOfArray(arrayName){
  return arrayName.shift();
}

function removeElementFromBeginningOfArray(arrayName){
  var newArrayMinusFirst = arrayName;
  newArrayMinusFirst = newArrayMinusFirst.shift();
  return newArrayMinusFirst;
}

function destructivelyRemoveElementFromEndOfArray(arrayName){
  return arrayName.pop();
}

function removeElementFromEndOfArray(arrayName){
  var newArrayMinusLast = arrayName;
  return newArrayMinusLast.pop();
}

