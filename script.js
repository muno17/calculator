let first = 0;
let second = 0;
let operator;
let current = true;
let continuing = false;

function operate() {
    if (operator === "+") {
        return add(+first, +second);
    }

    if (operator === "-") {
        return subtract(+first, +second);
    }

    if (operator === "*") {
        return multiply(+first, +second);
    }

    if (operator === "/") {
        return divide(+first, +second);
    }
}

let display = document.querySelector("#display");

let buttons = document.querySelectorAll("button");
buttons.forEach(function (button) {
    button.addEventListener("click", () => {
        updater(button.innerHTML);

        displayUpdate();
    });
});

function updater(x) {
    // if both variables are filled and either another operator or = is clicked,
    // evaluate function and store in first variable (clear second variable)
    if (x == "=") {
        first = operate();
        current = true;
        return;
    }

    // check if operator is clicked - store operator and switch to next variable
    if (isOperator(x)) {
        operator = x;

        if (second != 0) {
            first = operate();
            second = 0;
            continuing = true;
            return;
        }

        current = false;

        return;
    }

    // append number to current variable
    if (current) {
        first += x;
    } else {
        second += x;
    }

    if (x == "clear") {
        clear();
        return;
    }
}

function isOperator(x) {
    if (x == "+" || x == "-" || x == "*" || x == "/") {
        return true;
    }
    return false;
}

function clear() {
    first = "";
    second = "";
    operator = "";
    display.innerHTML = 0;
}

function displayUpdate() {
    if (continuing == true) {
        display.innerHTML = first;
        continuing = false;
        return;
    }

    if (current) {
        display.innerHTML = first;
    } else {
        display.innerHTML = second;
    }
}

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

// if both variables are filled and either another operator or = is clicked,
// evaluate function and store in first variable (clear second variable)
