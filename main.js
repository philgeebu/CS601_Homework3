// declaring variables
let runProgram, userName, num1, num2, sum;

// Click event triggering welcome prompt and addTwoNumbers function
document.getElementById('initiate-button').addEventListener('click', () => {
    if (!welcomePrompt()) return; // exit if the user clicks "Cancel"
    do {
        if (!addTwoNumbers()) return; // exit if the user clicks "Cancel"
        runProgram = confirm('Add another set of numbers?')
    } while (runProgram)
});

// Arrow function that handles the welcome prompt for your name
let welcomePrompt = () => {
    alert('Hello!')
    do {
        userName = prompt('What is your name?')
        if (userName === null) return false;
    }
    while (userName == '')
    alert('Welcome, ' + userName)
    return true;
};

let addTwoNumbers = () => {
    do {
        num1 = prompt('What is the first number?')
        if (num1 === null) return false;
    }
    while (isNaN(num1) || num1 == '')
    do {
        num2 = prompt('What is the second number?')
        if (num2 === null) return false;
    }
    while (isNaN(num2) || num2 == '')
    sum = parseInt(num1) + parseInt(num2)
    alert('The sum of your two numbers is: ' + sum)
    if (sum > 10) {
        alert('That is a big number!')
    } else {
        alert('That is a small number.')
    }
    return true;
};

