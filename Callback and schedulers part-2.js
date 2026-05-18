let setIntervalBtn = document.getElementById("setIntervalBtn");
let clearIntervalBtn = document.getElementById("clearIntervalBtn");
let counter = 0;
let uniqueId;

setIntervalBtn.onclick = function() {
    uniqueId = setInterval(function() {
        console.log(counter);
        counter = counter + 1;
    }, 1000);

};

clearIntervalBtn.onclick = function() {
    clearInterval(uniqueId);
    console.log("Interval Cleared...!")
}

// setTimeout and clearTimeout
let uniqueID = setTimeout(function() {
    console.log("instruction to evryone!!");
}, 1000);

// clearInterval(uniqueID);
