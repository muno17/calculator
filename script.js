let first = "";
let second = "";
let operator;
let current = true; // true if on first number
let continuing = false; // true if first and second have data and additional operator is clicked
let decimalCheck = false; // true if decimal already been added to current variable
let operatorCheck = false; // true if an operator has already been clicked

let display = document.querySelector("#display");

let numbers = document.querySelectorAll(".number");
numbers.forEach(function (button) {
    button.addEventListener("click", () => {
        if (current) {
            first += button.innerHTML;
        } else {
            second += button.innerHTML;
        }

        displayUpdate();
    });
});

let operators = document.querySelectorAll(".operator");
operators.forEach(function (button) {
    button.addEventListener("click", () => {
        assignOperator(button.innerHTML);
    });
});

let equals = document.querySelector(".equals").addEventListener("click", () => {
    runOperation();
    displayUpdate();
});

let decimal = document
    .querySelector(".decimal")
    .addEventListener("click", () => {
        if (!decimalCheck) {
            if (current) {
                first += ".";
            } else {
                second += ".";
            }
        }

        decimalCheck = true;
        displayUpdate();
    });

let clear = document.querySelector(".clear").addEventListener("click", () => {
    clearer();
});

let negate = document.querySelector(".negate").addEventListener("click", () => {
    if (current) {
        first *= -1;
    } else {
        second *= -1;
    }
    displayUpdate();
});

let deleter = document
    .querySelector(".delete")
    .addEventListener("click", () => {
        let temp = "";
        if (current) {
            temp = first;
        } else {
            temp = second;
        }

        let length = temp.length;

        if (length != undefined) {
            if (length == 1) {
                temp = 0;
            } else {
                temp = temp.slice(0, temp.length - 1);
            }

            if (current) {
                if (temp == 0) {
                    first = "";
                    display.innerHTML = 0;
                } else {
                    first = temp;
                    displayUpdate();
                }
            } else {
                if (temp == 0) {
                    second = "";
                    display.innerHTML = 0;
                } else {
                    second = temp;
                    displayUpdate();
                }
            }
        }
    });

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

function clearer() {
    first = "";
    second = "";
    operator = "";
    display.innerHTML = "0";
    continuing = false;
    current = true;
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

function runOperation() {
    if (first != "" && second != "" && operator != "") {
        first = operate();
        if (!isInt(first)) {
            first = first.toFixed(2);
        }
        // current = true;
        // operatorCheck = false;
        let temp = first;
        clearer();
        first = temp;
        cleared = false;
    }
    return;
}

function assignOperator(x) {
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
