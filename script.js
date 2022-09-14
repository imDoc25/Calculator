// Store html id's to js variable
let calDisplay1 = document.querySelector("#display1");
let calDisplay2 = document.querySelector("#display2");
let calNumber = document.querySelectorAll("#Number");
let calOperation = document.querySelectorAll("#Operation");
let calAllClear = document.querySelector("#allClear");
let calClear = document.querySelector("#clear");
let calEquals = document.querySelector("#equals");

// Initialize new variable
let display1 = "";
let display2 = "";
let result = null;
let lastOperation = "";
let haveDot = false;

// Function to display number and limit decimal number
calNumber.forEach(Number => {
    Number.addEventListener("click", (e) => {
        if (e.target.innerText === "." && !haveDot){
            haveDot = true;
        }else if(e.target.innerText === "." && haveDot){
            return;
        }
        display2 += e.target.innerText;
        calDisplay2.innerText = display2; 
    })
});

// Function to display and compute inputted number and operation
calOperation.forEach(Operation => {
    Operation.addEventListener("click", (e) => {
        if (!display2)
            return;
            haveDot = false;
        const operationName = e.target.innerText;

        if (display1 && display2 && operationName){
            mathOperation();
        }else{
            result = parseFloat(display2);
        }
        clearVar(operationName);
        lastOperation = operationName;
        console.log("Result", result);
    })
});

function clearVar(name = "") {
    display1 += display2 + " " + name + " ";
    calDisplay1.innerText = display1;
    calDisplay2.innerText = "";
    display2 = "";
}   

// Function to compute depending on operation 
function mathOperation(){
    if (lastOperation === "x") {
        result = parseFloat(result) * parseFloat(display2);
    } else if (lastOperation === "+") {
        result = parseFloat(result) + parseFloat(display2);
    } else if (lastOperation === "-") {
        result = parseFloat(result) - parseFloat(display2);
    } else if (lastOperation === "÷") {
        result = parseFloat(result) / parseFloat(display2);
    } else if (lastOperation === "%") {
        result = (parseFloat(result)/100) * parseFloat(display2);
    } 
}

// Function to display computation result
calEquals.addEventListener("click", (e) => {
    if(!display1 || !display2)
        return;
    haveDot = "false";
    mathOperation();
    clearVar();
    calDisplay2.innerText = result;
    // calDisplay1.innerText = "";
    display2 = result;
    display1 = "";
    console.log(result);
})

// Function to remove last input number
calClear.addEventListener("click", (e) => {
    calDisplay2.innerText = "";
    display2 = "";
})

// Function to remove all the input data
calAllClear.addEventListener("click", (e) => {
    calDisplay1.innerText = "";
    calDisplay2.innerHTML = "";
    display1 = "";
    display2 = "";
})
