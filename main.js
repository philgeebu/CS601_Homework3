// declaring variables
let runProgram, userName, num1, num2, sum;

// Click event triggering mainProgram
document.getElementById('initiate-button').addEventListener('click', () => mainProgram());

const mainProgram = () => {
    if (!welcomePrompt()) return; // exit if the user clicks "Cancel"
    do {
        if (!calculatePrompt()) return; // exit if the user clicks "Cancel"
        displayLastCalculation(num1, num2, sum, userName)
        runProgram = confirm('Add another set of numbers?')
    } while (runProgram)
    alert('Thanks for using Phil\'s amazing calculator!')
    return;
}

// welcome prompt for user's name
const welcomePrompt = () => {
    alert('Welcome to Phil\'s amazing calculator!')

    do {
        userName = prompt('What is your name?')
        if (userName === null) return false;
    }
    while (userName == '') // keep asking if blank

    alert(`Welcome, ${userName}!`)

    return true;
};

// prompt for numbers to add
const calculatePrompt = () => {

    do {
        num1 = prompt('What is the first number?')
        if (num1 === null) return false;
    }
    while (isNaN(num1) || num1 == '') // keep asking if not a number or blank

    do {
        num2 = prompt('What is the second number?')
        if (num2 === null) return false;
    }
    while (isNaN(num2) || num2 == '') // keep asking if not a number or blank

    sum = addNumbers(parseInt(num1), parseInt(num2))

    alert(`The sum of your two numbers is: ${sum}`)

    if (sum > 10) {
        alert('That is a big number!')
    } else {
        alert('That is a small number.')
    }

    return true;
};

// add two numbers
const addNumbers = (a, b) => {
    return a + b;
}

// display last calculation on front-end
const displayLastCalculation = (num1, num2, sum, userName) => {
    document.getElementById('num1').innerText = num1.toString()
    document.getElementById('num2').innerText = num2.toString()
    document.getElementById('sum').innerText = sum.toString()
    document.getElementById('userName').innerText = userName.toString()
}