let data = {
    name:"Rahul",
    gender:"Male",
    email:"rsivaji132@gmail.com",
    status:"Active"
};

let options = {
    method:"POST",
    headers:{
        "Content-Type":"application/json",
        Accept:"application/json",
        Authorization:"Bearer 77a88dc984404554d9ba1ec32056cdca4b478d4c6078e702e1d6af307b6c0f88"
    },
    body:JSON.stringify(data)
};

fetch("https://gorest.co.in/public/v2/users",options)
.then(function(response){
    return response.json();
})
.then(function(jsonData){
    console.log(jsonData);
});
