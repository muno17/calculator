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

function operate(x, y, op) {
    if (op === "+") {
        return add(x, y);
    }

    if (op === "-") {
        return subtract(x, y);
    }

    if (op === "*") {
        return multiply(x, y);
    }

    if (op === "/") {
        return divide(x, y);
    }
}

let display = document.querySelector("#display");

let buttons = document.querySelectorAll("button");
buttons.forEach(function (button) {
    button.addEventListener("click", () => {
        console.log(`${button.innerHTML}`);
    });
});
