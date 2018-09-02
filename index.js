// Code your solution in this file.
function lowerCaseDrivers(drivers){
  return drivers.map(x => x.toLowerCase());
}

function nameToAttributes(drivers){
  for(let driver of drivers){
    let fName = driver.split(' ')[0];
    let lName = driver.split(' ')[1];
    Object.assign({}, { firstName: fName }, { lastName: lName });
  }
}