# calculator-challenge
1. Intro:
In this challenge I designed and created a basic calculator. This calculator can add, subtract, divide and multiply.

2. Tools:

To complete this project, I used HTML, CSS and JavaScript and I used Sass to separate my styling into clear sections. Examples of these include my colour variables and my typography.

3. Method:

I started off by give the buttons specific names and classes using the BEM naming convention which then helped to divide them into number and operator buttons. I also gave each button a specific value that I could then target in my JavaScript. 

3a. Displaying the numbers:

I selected the relevant button/buttons using document.querySelector and then used a forEach function to loop through each button. Within the forEach fucntion, I used .addEventListener to define clicking on the particular button/buttons as an event which would target button value and display this by modifying the HTML element.

3b. Storing the sums:

To store the sums, I used .addEventListener again to trigger the numbers to be saved when an operator button was clicked. In order to do this, I created three variables for firstNumber, operator and secondNumber which I left as empty strings that I would be redefined when specific buttons were clicked. When an operator button such as +, /, * or - is clicked the first number is stored under the firstNumber variable. I did the same for the equals button which meant that the operator and the second number were stored under the secondNumber variable. I then sliced the second number using .slice so the string would just contain the number. Using .parseFloat on the firstNumber and secondNumber variables and creating if and else if statements for each operator, my calculator was able to finally calculate basic sums.

Potential Improvements:

- I would like to try modifying the calculator so that numbers and operators are stored in an array. This would also make it easier for me to created a delete button in addition to my clear button so that one number could be deleted from a sum instead of clearing the whole display. This would require .pop.

- I would like to eventually turn it into a scientific calculator that could perfom more complex tasks such as finding the square root of a number.

- I would like to have the whole sum displaying on the screen so the user could see what numbers they had typed.




