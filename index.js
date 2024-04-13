// Calculator program

const display = document.getElementById("dsplay");

function appendToDisplay(input){
    display.value += input;
}

function clerDisplay(){
    display.value = "";

}

function calculate(){
    try{
        display.value = eval(display.value);

    }
    catch(error){
        display.value = "Error";
    }    
}