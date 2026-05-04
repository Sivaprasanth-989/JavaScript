let person = {
  name : "Chirdeep",
  age : 19,
  city : "Tiruppur
}

//  JSON object to string
let stringifiedObject = JSON.stringify(person);
console.log(stringifiedObject);

// change to JSON object
let changeToobject = JSON.parse(stringifiedObject);
console.log(changeToobject);

