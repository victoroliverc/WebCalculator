// Variables of each button
var zero = document.querySelector("#zero");
var one = document.querySelector("#one");
var two = document.querySelector("#two");
var three = document.querySelector("#three");
var four = document.querySelector("#four");
var five = document.querySelector("#five");
var six = document.querySelector("#six");
var seven = document.querySelector("#seven");
var eight = document.querySelector("#eight");
var nine = document.querySelector("#nine");
var add = document.querySelector("#add");
var sub = document.querySelector("#sub");
var mult = document.querySelector("#mult");
var sub = document.querySelector("#sub");
var dot = document.querySelector("#dot");
var equals = document.querySelector("#equals");
var reset = document.querySelector("#reset");
var del = document.querySelector("#del");

// Areas variables
var result = document.querySelector("#result");
var buttons = document.getElementsByClassName("btn");
var numbers = document.querySelector("#numbers");


/*
    The main goal is store every input of user in a string variable and in the end, change it to a number using the method eval
*/


// Variable that will store the entire operation typed by user
var stringOperation = "";

// Click function of each button
zero.addEventListener("click", function putZero() {
    result.innerHTML += "0";
    stringOperation += "0";
})

one.addEventListener("click", function putOne() {
    result.innerHTML += "1";
    stringOperation += "1";
})

two.addEventListener("click", function putTwo() {
    result.innerHTML += "2";
    stringOperation += "2";
})

three.addEventListener("click", function putThree() {
    result.innerHTML += "3";
    stringOperation += "3";
})

four.addEventListener("click", function putFour() {
    result.innerHTML += "4";
    stringOperation += "4";
})

five.addEventListener("click", function putFive() {
    result.innerHTML += "5";
    stringOperation += "5";
})

six.addEventListener("click", function putSix() {
    result.innerHTML += "6";
    stringOperation += "6";
})

seven.addEventListener("click", function putSeven() {
    result.innerHTML += "7";
    stringOperation += "7";
})

eight.addEventListener("click", function putEight() {
    result.innerHTML += "8";
    stringOperation += "8";
})

nine.addEventListener("click", function putNine() {
    result.innerHTML += "9";
    stringOperation += "9";
})

// Addition operation
add.addEventListener("click", function sum() {
    if ((result.innerHTML == "" && numbers.innerHTML == "") || stringOperation.slice(-2) == " ") {
        return;
    } 
    stringOperation += " + ";
    numbers.innerHTML = stringOperation.replace("*", "x");
    result.innerHTML = "";
})

// Subtraction operation
sub.addEventListener("click", function sub() {
    if ((result.innerHTML == "" && numbers.innerHTML == "") || stringOperation.slice(-2) == " ") {
        return;
    }
    stringOperation += " - ";
    numbers.innerHTML = stringOperation.replace("*", "x");
    result.innerHTML = "";
})

// Multiplication operation
mult.addEventListener("click", function mult() {
    if ((result.innerHTML == "" && numbers.innerHTML == "") || stringOperation.slice(-2) == " ") {
        return;
    }
    stringOperation += " * ";
    numbers.innerHTML = stringOperation.replace("*", "x");
    result.innerHTML = "";
})


// Division operation
div.addEventListener("click", function div() {
    if ((result.innerHTML == "" && numbers.innerHTML == "") || stringOperation.slice(-2) == " ") {
        return;
    }
    stringOperation += " / "
    numbers.innerHTML = stringOperation.replace("*", "x");
    result.innerHTML = "";
})

dot.addEventListener("click", function IntoaFloatNumber() {
    if (result.innerHTML.includes(".") || result.innerHTML == "") {
        return;
    }
    result.innerHTML += ".";
    stringOperation += ".";
})

del.addEventListener("click", function delet() {

    if (result.innerHTML != "") {
        result.innerHTML = result.innerHTML.slice(0, -1);
        stringOperation = stringOperation.slice(0, -1);
    } else {
        if (stringOperation.slice(-1) == " ") {
            stringOperation = stringOperation.slice(0, -2);
            numbers.innerHTML = stringOperation;
        } else {
            stringOperation = stringOperation.slice(0, -1);
            numbers.innerHTML = stringOperation;
        }
    }
})

reset.addEventListener("click", function reset() {
    result.innerHTML = "";
    numbers.innerHTML = "";
    stringOperation = "";
})

equals.addEventListener("click", function displayResult() {

    if (stringOperation.slice(-1) == " " || result.innerHTML == eval(stringOperation).toString()) {
        return;
    }

    numbers.innerHTML += result.innerHTML 

    if ((eval(stringOperation)).toString().slice(".", -1).length > 11){
        result.innerHTML = (eval(stringOperation)).toFixed(9);
    } else {
        result.innerHTML = eval(stringOperation);
    }

})

// Button pressed animation
for (var i of buttons) {
    i.addEventListener("click", function pressButton() {

        let btn = this;
        btn.style.boxShadow = "none";
        btn.style.transform = "translateY(4px)";
        
        setTimeout(function returnBtnState() {

            if(btn.getAttribute("id") == "equals") {
                btn.style.boxShadow = "0 4px var(--equals-shadow)";
                btn.style.transform = "translateY(0)";
            } else if(btn.getAttribute("id") == "del" || btn.getAttribute("id") == "reset") {
                btn.style.boxShadow = "0 4px var(--special-shadow)";
                btn.style.transform = "translateY(0)";
            } else {
                btn.style.boxShadow = "0 4px var(--btn-shadow)";
                btn.style.transform = "translateY(0)";
            }

        }, 100);

    })

}

// Change the color theme
function changeTheme() {
    let header = document.getElementsByTagName("header")[0];
    let display = document.querySelector(".display");
    let theme = document.querySelector("#theme");
    let root = document.documentElement;

    if (theme.value == 1) {
        root.style.setProperty("--bg-color", "#3B4664");
        root.style.setProperty("--bg-dark", "#262B3F");
        root.style.setProperty("--btn-color", "#E8E2DC");
        root.style.setProperty("--special-btn", "#65719a");
        root.style.setProperty("--equals-btn", "#D13F30");   
        root.style.setProperty("--special-color", "white");   
        root.style.setProperty("--numb-op-color", "#333");  
        root.style.setProperty("--btn-shadow", "#a8a49f"); 
        root.style.setProperty("--special-shadow", "#474f69");    
        root.style.setProperty("--equals-shadow", "#922c21");    

        header.style.color = "white";
        display.style.color = "white";
        display.style.backgroundColor = "#191F32";    
        
    } else if(theme.value == 2) {
        
        root.style.setProperty("--bg-color", "#E5E5E5");
        root.style.setProperty("--bg-dark", "#D5CBCB");
        root.style.setProperty("--btn-color", "#E8E2DC");
        root.style.setProperty("--special-btn", "#368087");
        root.style.setProperty("--equals-btn", "#C75301"); 
        root.style.setProperty("--special-color", "white");
        root.style.setProperty("--numb-op-color", "#333"); 
        root.style.setProperty("--btn-shadow", "#a8a49f"); 
        root.style.setProperty("--special-shadow", "#474f69");    
        root.style.setProperty("--equals-shadow", "#922c21");      
        
        header.style.color = "var(--numb-op-color)";
        display.style.color = "var(--numb-op-color)";
        display.style.backgroundColor = "#EFEFEF" ;

    } else {

        root.style.setProperty("--bg-color", "#160729");
        root.style.setProperty("--bg-dark", "#1C0735");
        root.style.setProperty("--btn-color", "#341A4E");
        root.style.setProperty("--special-btn", "#59097A");
        root.style.setProperty("--equals-btn", "#00DECE"); 
        root.style.setProperty("--special-color", "white");
        root.style.setProperty("--numb-op-color", "#DDC24D");    
        root.style.setProperty("--btn-shadow", "#63297a");    
        root.style.setProperty("--special-shadow", "#9b0cad");    
        root.style.setProperty("--equals-shadow", "#1efced");    
        
        header.style.color = "var(--numb-op-color)";
        display.style.color = "var(--numb-op-color)";
        display.style.backgroundColor = "#1C0735" ;
    }
}
