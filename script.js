var buttons = document.getElementsByClassName("button");
var arr = [...buttons];

arr.forEach((element, index) => {
  element.addEventListener("click", () => {
    element.style.opacity = "1";
    if (index == 0) {
      document.getElementsByTagName("body")[0].classList.add('theme-1');
      document.getElementsByTagName("body")[0].classList.remove('theme-2');
      document.getElementsByTagName("body")[0].classList.remove('theme-3');
    } else if (index == 1) {
        document.getElementsByTagName("body")[0].classList.add('theme-2');
        document.getElementsByTagName("body")[0].classList.remove('theme-1');
        document.getElementsByTagName("body")[0].classList.remove('theme-3');
    } else {
        document.getElementsByTagName("body")[0].classList.add('theme-3');
        document.getElementsByTagName("body")[0].classList.remove('theme-1');
        document.getElementsByTagName("body")[0].classList.remove('theme-2');
    }
    arr
      .filter(function (item) {
        return item != element;
      })
      .forEach((item) => {
        item.style.opacity = "0";
      });
  });
});

let oput_wrapper = document.getElementById('oput-wrapper');

let last_output = document.getElementById('written-output');
let output = document.getElementById('output');
output.innerHTML = "0";
last_output.innerHTML = "";

let zero = document.getElementById('zero');
let one = document.getElementById('one');
let two = document.getElementById('two');
let three = document.getElementById('three');
let four = document.getElementById('four');
let five = document.getElementById('five');
let six = document.getElementById('six');
let seven = document.getElementById('seven');
let eight = document.getElementById('eight');
let nine = document.getElementById('nine');
let plus = document.getElementById('plus');
let minus = document.getElementById('minus');
let divide = document.getElementById('sub');
let multi = document.getElementById('multi');
let dot = document.getElementById('dot');
let equal = document.getElementById('equal');
let del = document.getElementById('del');
let reset = document.getElementById('reset');


zero.addEventListener('click', inputNum);
one.addEventListener('click', inputNum);
two.addEventListener('click', inputNum);
three.addEventListener('click', inputNum);
four.addEventListener('click', inputNum);
five.addEventListener('click', inputNum);
six.addEventListener('click', inputNum);
seven.addEventListener('click', inputNum);
eight.addEventListener('click', inputNum);
nine.addEventListener('click', inputNum);

dot.addEventListener('click', dotFun);

plus.addEventListener('click', plusFun);
minus.addEventListener('click', minusFun);
divide.addEventListener('click', divideFun);
multi.addEventListener('click', multiFun);

del.addEventListener('click', deleteNum);
reset.addEventListener('click', resetFunction);
equal.addEventListener('click', resultFun);


function inputNum(e) {
    if(e.target == zero && output.innerHTML != "0" && last_output.innerHTML != "0") {
        output.innerHTML += "0";
        last_output.innerHTML += "0";
    }

    if(e.target == one && output.innerHTML == "0") {
        output.innerHTML = "1";
        last_output.innerHTML += "1";
    } else if(e.target == one) {
        output.innerHTML += "1";
        last_output.innerHTML += "1";
    }

    if(e.target == two && output.innerHTML == "0") {
        output.innerHTML = "2";
        last_output.innerHTML += "2";
    } else if(e.target == two) {
        output.innerHTML += "2";
        last_output.innerHTML += "2";
    }

    if(e.target == three && output.innerHTML == "0") {
        output.innerHTML = "3";
        last_output.innerHTML += "3";
    } else if(e.target == three) {
        output.innerHTML += "3";
        last_output.innerHTML += "3";
    }

    if(e.target == four && output.innerHTML == "0") {
        output.innerHTML = "4";
        last_output.innerHTML += "4";
    } else if(e.target == four) {
        output.innerHTML += "4";
        last_output.innerHTML += "4";
    }

    if(e.target == five && output.innerHTML == "0") {
        output.innerHTML = "5";
        last_output.innerHTML += "5";
    } else if(e.target == five) {
        output.innerHTML += "5";
        last_output.innerHTML += "5";
    }

    if(e.target == six && output.innerHTML == "0") {
        output.innerHTML = "6";
        last_output.innerHTML += "6";
    } else if(e.target == six) {
        output.innerHTML += "6";
        last_output.innerHTML += "6";
    }

    if(e.target == seven && output.innerHTML == "0") {
        output.innerHTML = "7";
        last_output.innerHTML += "7";
    } else if(e.target == seven) {
        output.innerHTML += "7";
        last_output.innerHTML += "7";
    }

    if(e.target == eight && output.innerHTML == "0") {
        output.innerHTML = "8";
        last_output.innerHTML += "8";
    } else if(e.target == eight) {
        output.innerHTML += "8";
        last_output.innerHTML += "8";
    }

    if(e.target == nine && output.innerHTML == "0") {
        output.innerHTML = "9";
        last_output.innerHTML += "9";
    } else if(e.target == nine) {
        output.innerHTML += "9";
        last_output.innerHTML += "9";
    }
}

function plusFun() {
    if(output.innerHTML[output.innerHTML.length - 1] != "+" && output.innerHTML[output.innerHTML.length - 1] != "-" && output.innerHTML[output.innerHTML.length - 1] != "x" && output.innerHTML[output.innerHTML.length - 1] != "/" && output.innerHTML[output.innerHTML.length - 1] != "." && output.innerHTML != "0") {
        last_output.innerHTML += "+";
        last_output.style.display = "inline";
        output.style.fontSize = "3rem";
        oput_wrapper.style.gap = "5px";

        output.innerHTML = "0";
    }
}

function minusFun() {
    if(output.innerHTML[output.innerHTML.length - 1] != "+" && output.innerHTML[output.innerHTML.length - 1] != "-" && output.innerHTML[output.innerHTML.length - 1] != "x" && output.innerHTML[output.innerHTML.length - 1] != "/" && output.innerHTML[output.innerHTML.length - 1] != "." && output.innerHTML != "0") {
        last_output.innerHTML += "-";
        last_output.style.display = "inline";
        output.style.fontSize = "3rem";
        oput_wrapper.style.gap = "5px";

        output.innerHTML = "0";
    }

    if(output.innerHTML == "0" && last_output.innerHTML == "0") {
        output.innerHTML = "-";
    }
}
    
function divideFun() {
    if(output.innerHTML[output.innerHTML.length - 1] != "+" && output.innerHTML[output.innerHTML.length - 1] != "-" && output.innerHTML[output.innerHTML.length - 1] != "x" && output.innerHTML[output.innerHTML.length - 1] != "/" && output.innerHTML[output.innerHTML.length - 1] != "." && output.innerHTML != "0") {
        last_output.innerHTML += "/";
        last_output.style.display = "inline";
        output.style.fontSize = "3rem";
        oput_wrapper.style.gap = "5px";

        output.innerHTML = "0";
    }
}

function multiFun() {
    if(output.innerHTML[output.innerHTML.length - 1] != "+" && output.innerHTML[output.innerHTML.length - 1] != "-" && output.innerHTML[output.innerHTML.length - 1] != "x" && output.innerHTML[output.innerHTML.length - 1] != "/" && output.innerHTML[output.innerHTML.length - 1] != "." && output.innerHTML != "0") {
        last_output.innerHTML += "*";
        last_output.style.display = "inline";
        output.style.fontSize = "3rem";
        oput_wrapper.style.gap = "5px";

        output.innerHTML = "0";
    }
}

function dotFun() {
    if(!output.innerHTML.includes(".")) {
        output.innerHTML += ".";
        last_output.innerHTML += ".";
    }
}

function deleteNum() {
    output.innerHTML = output.innerHTML.substring(0, output.innerHTML.length - 1);
    last_output.innerHTML = last_output.innerHTML.substring(0, last_output.innerHTML.length - 1);

    if(output.innerHTML == "") {
        output.innerHTML = "0";
        
    }

    if(last_output.innerHTML == "") {
        last_output.style.display = "none";
        output.style.fontSize = "5.5rem";
    }
}

function resetFunction() {
    output.innerHTML = "0";
    last_output.innerHTML = "";
    last_output.style.display = "none";
    output.style.fontSize = "5.5rem";
}

function resultFun() {
    if(last_output.innerHTML[last_output.innerHTML.length - 1] != ".") {
        output.innerHTML = parseFloat(eval(last_output.innerHTML)).toFixed(4);
        last_output.innerHTML = eval(last_output.innerHTML);
        last_output.style.display = "none";
        output.style.fontSize = "5.5rem";
    }
    
}
