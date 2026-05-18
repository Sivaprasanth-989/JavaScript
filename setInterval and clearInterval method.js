
// setInterval and clearInterval

let counter = 0;

let uniqueId = setInterval(function(){
    console.log(counter);
    counter = counter + 10;
},1);

clearInterval(uniqueId);
