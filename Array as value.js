let person = {
    name : "Chirdeep",
    age : 28,
    run : function(){
        console.log("Hello World!");
    },
    habits : ["Playing Chess", "Dancing"]
    
};
person.run();
console.log(person.habits[0]);
console.log(person["habits"]);
