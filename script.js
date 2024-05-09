let first = "";
let second = "";
let operator;
let current = true; // true if on first number
let continuing = false; // true if first and second have data and additional operator is clicked
let cleared = false; // true if clear was pressed
let decimalCheck = false; // true if decimal already been added to current variable
let operatorCheck = false; // true if an operator has already been clicked

let display = document.querySelector("#display");

let buttons = document.querySelectorAll("button");
buttons.forEach(function (button) {
    button.addEventListener("click", () => {
        updater(button.innerHTML);

        if (!cleared) {
            displayUpdate();
        } else {
            cleared = false;
        }
    });
});

function updater(x) {
    // if both variables are filled and either another operator or = is clicked,
    // evaluate function and store in first variable (clear second variable)
    if (x == "=") {
        if (first != "" && second != "" && operator != "") {
            first = operate();
            if (!isInt(first)) {
                first = first.toFixed(2);
            }
            // current = true;
            // operatorCheck = false;
            let temp = first;
            clear();
            first = temp;
            cleared = false;

        }
        return;
    }

    if (x == "+/-") {
    }

    // check if operator is clicked - store operator and switch to next variable
    if (isOperator(x)) {
        if (!operatorCheck) {
            operatorCheck = true;
            operator = x;
            decimalCheck = false;

            if (second != 0) {
                first = operate();
                second = 0;
                continuing = true;
                return;
            }

            current = false;
        }
        return;
    }

    // if a number is clicked, append number to current variable
    // don't allow multiple decimals to be added to either variable
    if (!decimalCheck || x != ".") {
        if (current) {
            first += x;
        } else {
            second += x;
        }
    }

    if (x == ".") {
        decimalCheck = true;
        return;
    }

    if (x == "clear") {
        clear();
        return;
    }
}

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
        if (second == "0") {
            display.innerHTML = "CAN'T DIVIDE BY 0";
            return;
        }
        return divide(+first, +second);
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
    display.innerHTML = "0";
    continuing = false;
    current = true;
    cleared = true;
    decimalCheck = false;
    operatorCheck = false;
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
    if (y === 0) {
        return;
    }
    return x / y;
}

function isInt(n) {
    return n % 1 === 0;
}

// don't allow division by 0

// add +/- functionality
