// Code your solution in this file.
function lowerCaseDrivers(drivers){
  return drivers.map(x => x.toLowerCase());
}

function nameToAttributes(drivers) {
  newArr = drivers.map(function (driver) {
  const firstLast = driver.split(" ");
  return {firstName: firstLast[0], lastName: firstLast[1]}
   });
  return newArr
}

function attributesToPhrase(drivers){
  let findString = " is from ";
  console.log("findString == " + findString);
  let len = findString.length;
  console.log("length == "+ len);
  newArr = drivers.map(function (driver) {
  let index = driver.indexOf(findString);
  console.log("index == " + index);
  return {name: driver.slice(0,index), hometown: driver.slice(index+len)}
   });
   return newArr;
}