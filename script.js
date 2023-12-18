let output = '';
let display = document.getElementById('display');
let buttons = document.querySelectorAll('button');

function appendToDisplay(value) {
    output += value;
    display.value = output;
}

function clearDisplay(){
    output = '';
    display.value = '';
}


function calculateResult() {
    try{
        let result = eval(output);
        if (isNaN(result)) throw new Error("Invalid Input");
        // If the calculation is correct, show the result on screen and clear the input field
        display.value = result;
        output = result.toString();
        } catch(error){
            alert("Error: " + error);
            // If there's an error in the calculation, show an error message on screen and clear the input field
        }
}