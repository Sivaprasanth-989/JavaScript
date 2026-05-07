let myArray = [5, 6, 9, 1, 32, 7, 7];
let result = myArray.findIndex(function(ele) {
     if (ele === 7){
         console.log("Thala for a reason");
         return false
     }
});
console.log(result);
//  thats how the flow of  execution and performs upon the array  by using findIndex function method freaking loop logic by the way !!

let findId = customerData.findIndex(function(eachItem) {
    if (eachItem.id === 101) {
        return true
    } else {
        return false
    }
});

console.log(findId)
