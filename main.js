// 1. assign values to number buttons on HTML
// 2. get buttons to produce value when clicked
// 3. get the to display on webpage when they have been clicked 
//4. access the display bit so what has been entered appears in the dev console
//5. change strings to integers

// accessing/ selecting all the non-operator buttons
let firstNumber = ""
let operator = ""
let secondNumber = ""
const numberButtons = document.querySelectorAll (".calculator__button")
const calculatorBox = document.querySelector("#calculator__answerbox")
const equals = document.querySelector("#calculator__equals")
//getting non-operator buttons to give their value as a string when clicked but need a foreach loop to do this
numberButtons.forEach((numberButton)=> {
  numberButton.addEventListener("click", (event) => { 
    let number = event.target.value;
    calculatorBox.innerHTML += number
    //number.toString;
    //let numberStored = number.toString need an array (?)
    
  })
})



equals.addEventListener("click",(event) =>{

  secondNumber = calculatorBox.innerHTML
  secondNumber = secondNumber.slice(1)
 firstNumber = Number.parseFloat(firstNumber)
  secondNumber = Number.parseFloat(secondNumber)
if(operator === "+"){
  calculatorBox.innerHTML = (firstNumber + secondNumber) 
  console.log(firstNumber + secondNumber)
}
else if (operator === "-"){
  calculatorBox.innerHTML = (firstNumber - secondNumber);
  console.log(firstNumber - secondNumber);
}
else if (operator === "*"){
  calculatorBox.innerHTML = (firstNumber * secondNumber);
}
else if (operator === "/"){
  calculatorBox.innerHTML = (firstNumber / secondNumber);
}

})
  



/*accessing operator buttons and displaying them, need to select them*/

/*need to access each element within the list */

//now we have accessed the individual elements, we need to specify the event and get event to act upon each element.

const operatorButtons = document.querySelectorAll(".calculator__operator")
operatorButtons.forEach((operatorButton) =>{
operatorButton.addEventListener("click", (event) => {
  operator = event.target.value
  firstNumber = calculatorBox.innerHTML
  calculatorBox.innerHTML = operator
  console.log(firstNumber)
})
})












//CLEAR BUTTON
// access clear button
const clearButton = document.querySelector("#calculator__clear") 

//specify event and get event to act upon clear button

clearButton.addEventListener("click", (event) => {
  
  calculatorBox.innerHTML = ""
})


