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
  let len = findString.length;
  newArr = drivers.map(function (driver) {
  let index = driver.split(" ");
  return {name: firstLast[0], hometown: firstLast[1]}
   });
}