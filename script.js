function add(x, y) {
    return x + y;
}

function subtract(x, y) {
    return x - y;
}

function multiply(x, y) {
    return x * y;
}

function divide(x, y) {
    return x / y;
}

let first;
let second;
let operator;
let current = true;

function operate() {
    if (operator === "+") {
        return add(first, second);
    }

    if (operator === "-") {
        return subtract(first, second);
    }

    if (operator === "*") {
        return multiply(first, second);
    }

    if (operator === "/") {
        return divide(first, second);
    }
}

let display = document.querySelector("#display");

let buttons = document.querySelectorAll("button");
buttons.forEach(function (button) {
    button.addEventListener("click", () => {
        console.log(`${button.innerHTML}`);
    });
});

function updater(x) {
    // if both variables are filled and either another operator or = is clicked,
    // evaluate function and store in first variable (clear second variable)
    if (x == '=') {
        first = operate()
    }

    // check if operator is clicked - store operator and switch to next variable
    if (x == "+" || x == "-" || x == "*" || x == "/") {
        operator = x;
        current = false;
    }

    // append number to current variable
    if (current) {
        first += x;
    } else {
        second += x;
    }

    if (x == 'clear') {
        first = '';
        second = '';
        operator = '';
        display.innerHTML = 0;
    }
}


// if both variables are filled and either another operator or = is clicked,
// evaluate function and store in first variable (clear second variable)


// update display