# calculator-app-js
Project to practice in JavaScript. Calculator app applying functions, methods and DOM.
<br>
<br>
URL: [CalculatorApp](https://calculator-app-tobigfioroni.netlify.app/)
<br>
<br>
![Texto alternativo](img/screenshot-calculator.png)
<br><br>
let expression = " '';: A variable named expression is declared here and initialized with an empty string. This variable is used to store the mathematical expression to be evaluated.
<br><br>
function updateScreen() {...}: This function is responsible for updating the value of the screen element (<input>) with the current expression. It uses document.getElementById() to get the screen element by its ID, and then assigns the value of the expression variable to the element's value attribute.
<br><br>
function appendNumber(number) {...}: This function is responsible for adding a number to the current expression. Concatenate the number to the expression variable and then call the updateScreen() function to update the screen.
<br><br>
function appendOperator(operator) {...}: This function is responsible for adding an operator (+, -, *, /, %) to the current expression. Concatenate the operator to the expression variable, and then call the updateScreen() function to update the screen.
<br><br>
function appendDecimal() {...}: This function is responsible for adding a decimal point to the current expression. Check if the expression already contains a decimal point using the includes() method. If it does not contain it, concatenates a point to the variable 'expression' and then calls the updateScreen() function to update the screen.
<br><br>
function clearEntry() {...}: This function is responsible for clearing the current entry of the expression. Assign an empty string to the expression variable, and then call the updateScreen() function to update the screen.
<br><br>
function clearAll() {...}: This function is responsible for clearing the entire expression. Like clearEntry(), it assigns an empty string to the expression variable and then calls the updateScreen() function to update the screen.
<br><br>
function backspace() {...}: This function is responsible for removing the last character of the expression. Use the slice() method to remove the last character from the expression variable, and then call the updateScreen() function to update the screen.
<br><br>
function calculate() {...}: This function is responsible for evaluating the mathematical expression. Use the eval() function to evaluate the expression stored in the expression variable. If the evaluation is successful, the result is assigned to the result variable and then converted to a string using the toString() method. Finally, the expression variable is updated with the result, and the updateScreen() function is called to update the screen. If any errors occur during evaluation, they are caught in the catch block and handled by setting the expression variable to an empty string and calling updateScreen().
<br><br>

tobigfioroni 2023
