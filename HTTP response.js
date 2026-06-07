let options = {
    method: "GET"
};
// Accessing HTTP responses
fetch("https://gorest.co.in/public/v2/users", options)
    .then(function(response) {
        console.log(response);
        return response.text();

    }) //as we know we can any parameter to the function as it belonging to another that returns an value or something   
    .then(function(data) {
        console.log(data);
    })


let person = {
    name: "Rahul",
    age: "29",
    designation: "Web"
}

console.log(person);
console.log(typeof(person));
console.log(person.stringify)

// converting JS object into JSON object using stringify
let JSONstringifiedOB = JSON.stringify(person);
console.log(JSONstringifiedOB);
console.log(JSON.parse(JSONstringifiedOB));
