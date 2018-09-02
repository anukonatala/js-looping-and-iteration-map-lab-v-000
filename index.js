// Code your solution in this file.
function lowerCaseDrivers(drivers){
  return drivers.map(x => x.toLowerCase());
}

function nameToAttributes(drivers){
  for(let driver of drivers){
    let firstName = driver.split(' ')[0];
    let lastName = driver.split(' ')[1];
    Object.assign({}, { name: 'Laptop' })
  }
}