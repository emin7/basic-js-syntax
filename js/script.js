/*
 * Add code as indicated by the comments.
 * Be careful not to change or modify the existing code.
 */

function sayHello() {

    // Make a variable called name and set it to your first name.
    let myName = "Emin"


    //Make a variable called message and using the name variable from above,
    // set it to be something like:  "Hello, Mary.  Very nice to meet you."
    let message = "Hello, " + myName + ". Nice to meet you.";
    console.log(message);
    // Log the message to the console.  Use console.log()



}

function evenOrOdd() {

    // Make a variable called number, and set it to a number between 1 and 10
    let number1 = 8;

    // Write a message (not just the number) to the console saying the value of the number
    let message = "my number is " + number1 + ".";
    console.log(message);

    // Use the modulus operator and an if statement to display a message    
    if (number1 % 2 === 0) {
        console.log("number is even")

    } else {
        console.log("the number is odd")
    }
    // in the console that says whether the number is even or odd



}

function countToTen() {

    // Write a for loop to count from 1 to 10
    // Use console.log() inside the loop to write out each number
    let number = 1;
    while (number >= 1 && number <= 10) {
        console.log(number);
        number++;

    }




}

function addNumbers() {

    // Make an array of 5 numbers, at least one number should be negative
    let numbers = [1, 2, 3, 4, -4];

    // Write the array to the console
    console.log(numbers)

    // Make a variable called total, set it to 0
    let total = 0
    console.log(total)

    // Use a for loop to set total to the sum of all of the numbers in the array
    for (num of numbers) {
        total = total + num
        console.log(total)
    }


    // Write a message to the console saying the value of total
    console.log("the value of total " + total)

    // Use an if statement to write a message to the console that says
    // whether total is greater than, less than, or equal to 50.
    if (total > 50)
        console.log("total is greater than 50");

    else
    if (total === 50)
        console.log("total is equal to 50");
    else
    if (total < 50)
        console.log("total is less than 50");
}




/*
 * DO NOT MODIFY THE CODE BELOW
 */
assignmentName = "HW1 - Basic JavaScript"
console.log(assignmentName);
console.log();

console.log("Say Hello");
sayHello();
console.log();

console.log("Even or Odd");
evenOrOdd();
console.log();

console.log("Count to 10");
countToTen();
console.log();

console.log("Add Numbers");
addNumbers();
console.log();