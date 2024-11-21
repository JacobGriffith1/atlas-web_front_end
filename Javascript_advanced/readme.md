# Javascript Advanced (Max's Version)
Project for Atlas School

## Description
"Javascript Advanced (Max's Version)" features a barebones index with a selection of buttons that execute various Javascript functions. Alerts have been used in additon to console logging to make the actual results of button clicks more apparent.

## Tasks

### 0. Readme
Write a good, substantial README.md!

### 1. Lexical scoping and welcome message
Create a function named welcome:

It takes two arguments: firstName (string) and lastName (string)
It contains a variable named fullName, that will contains the firstName followed by a space and then the lastName
Within the welcome function, write a function named displayFullName:
It should display an alert with the message Welcome + the variable fullName + and exclamation mark.
Call the function displayFullName at the end of the function welcome

### 2. Closure Scope Chain
Create a variable named globalVariable with value Welcome
Create a function outer that:
- alerts the content of the variable globalVariable
- creates a variable named course with value Holberton
- creates a function inner that:
- alerts the content of the variable globalVariable and course (concatenated)
- creates a variable named exclamation with value !
- creates a function inception that alerts the content of the variable globalVariable, course, and exclamation (concatenated)
- calls the function inception
- calls the function inner
Call the function outer

### 3. Closure
Write a function named welcomeMessage:

It accepts one argument fullName (string)
It should be a closure for an alert displaying Welcome <fullName>
After this function definition, create three variables:

- guillaume contains a call welcomeMessage with Guillaume as argument
- alex contains a call welcomeMessage with Alex as argument
- fred contains a call welcomeMessage with Fred as argument

### 4. Closure and loops
Write a function named createClassRoom:

It takes into argument numbersOfStudents (number)
Inside, it contains a function studentSeat, that takes into argument seat (number) and returns a function that returns the seat number
After the definition of studentSeat, create and populate a variable students (array)
Using a loop from 0 to numbersOfStudents, pass the number of iteration + 1 to studentSeat and add its return value to the students array
Returns the students array
Create a closure classRoom, calling createClassRoom with 10 students

### 5. Complex Closure
Create a function divideBy:

It takes into argument firstNumber (number)
It returns a function that takes into argument secondNumber (number)
It returns the second number divided by the first number
Create a function addBy:

- It takes into argument firstNumber (number)
- It returns a function that takes into argument secondNumber (number)
- It returns the sum of the two numbers
Create four closures:

- addBy100, that uses the function addBy with the number 100
- addBy1000, that uses the function addBy with the number 1000
- divideBy10, that uses the function divideBy with the number 10
- divideBy100, that uses the function divideBy with the number 100

### 6. Changing DOM with closure
Create a function named changeMode:

It accepts 5 arguments size (number), weight (string), transform (string), background (string), color (string)
Using closure, it changes the style of the entire page and set the font-size, font-weight, text-transform, background-color, and color
Write a function named main:

- Set a variable named spooky that passes the arguments 9, bold, uppercase, pink, green to changeMode
- Set a variable named darkMode that passes the arguments 12, bold, capitalize, black, white to changeMode
- Set a variable named screamMode that passes the arguments 12, normal, lowercase, white, black to changeMode
Add a paragraph to the body of the page with the text Welcome Atlas!
Add a button to the body with the text Spooky
Add a button to the body with the text Dark mode
Add a button to the body with the text Scream mode
When clicking on each button, the page CSS should change to the different themes you created previously
Call the main function

### 7. Private methods with closure
Write a class named studentHogwarts:

- It contains two variables privateScore set to 0, and name set to null
- It contains one private method changeScoreBy, it takes points in argument and add it to privateScore
- The class gives access to four public methods (return an object):
- setName, it takes into argument newName, and set the private variable name
- rewardStudent, it calls the method changeScoreBy with 1
- penalizeStudent, it calls the method changeScoreBy with -1
- getScore, it returns name: score (ex: Harry: 14)
Create one variable named harry, that is an instance of studentHogwarts:

- Set the name of the object to Harry
- Reward the student four times
- Log to the console the name and score
Create one variable named draco, that is an instance of studentHogwarts:

- Sets the name of the object to Draco
- Reward the student one time
- Penalize the student three times
- Log to the console the name and score

### 8. Stack order and setTimeout
Write the following commands in the following order:

1. Log to the console Start of the execution queue
2. Log to the console Final code block to be executed using setTimeout (with delay of 0)
3. Using a loop that iterates 100 times, each iteration logs to the console the iteration number
4. Log to the console End of the loop printing

### 9. Stack order in functions
Write a function processPayment:

- It takes one argument amount (number)
- It logs to the console Collecting payment of <amount>
Write a function named processOrder:

- It takes two arguments orderId (number), and amount (number)
- It logs to the console <orderId> is being processed
- It calls the function processPayment
- It logs to the console <orderId> has been fully processed
- In the main part of the code:

Logs to the console Processing orders
- Call processOrder with 12321 and 10.99
- Call processOrder with 12322 and 12.99
- Call processOrder with 12323 and 15.0
Logs to the console All the orders have been processed

### 10. Prime numbers & timing execution
Write a function named countPrimeNumbers:

- It will return the number of prime numbers from 2 to 100
- Log to the console the time in milliseconds to execute the function in this format: Execution time of printing countPrimeNumbers was <time used> milliseconds.

### 11. Execution stack & timing execution
Reuse the function countPrimeNumbers from 9-prime.js (copy/paste)

- Execute the function countPrimeNumbers 100 times
- Log to the console the time in milliseconds to execute the function 100 times

### 12. Changing stack order using setTimeout
Reuse the function countPrimeNumbers from 10-prime.js (copy/paste)

-Log to the console the time in milleseconds to execute the function 100 times
-Find a way to actually do most of the calculation at the end of the execution stack

### 13. Binding
Create an object named roomDimensions with the following three attributes:

- width: 50
- length: 100
- getArea: function that returns the surface area of a the object using the width and length
Create a variable named boundGetArea, that will bind the object roomDimensions to the getArea function

### 14. Binding + Closure
Write an object user with the attributes:

- hobby: Calligraphy
- favoriteSport: Hockey
- astrologicalSign: Aries
- firstName: Guillaume
- lastName: Johns
- location: Netherlands
- occupation: Engineer
Create a function named logWelcomeUser:

- It takes one argument welcomeString (String)
- It logs to the console <welcomeString>, <firstName>. Your occupation is: <occupation>
- Create a variable named bindLogWelcomeUser. It binds the logWelcomeUser function to the user object.

Call the function with the string Welcome

### 15. Simple callback
Write a new function named createElement:

- It accepts one argument data (String)
- It creates a paragraph element
- The content of the paragraph is set to data
- It appends to the document body the paragraph
Create a new function named queryWikipedia:

-It accepts one argument callback (function)
- Using XMLHttpRequest, it get the article of Stack Overflow with the URL https://en.wikipedia.org/w/api.php?format=json&action=query&prop=extracts&exintro&explaintext&redirects=1&titles=Stack%20Overflow&origin=*
- Once the fetch is correctly executed, it calls the callback function with the extract of the API response
Call queryWikipedia with createElement as callback

## Learning Objectives
By the end of this project, know:
- What is lexical scoping in JavaScript
- What is closure in JavaScript
- How to use closure
- How to chain different closures
- How to simulate private methods with Closure
- The execution stack order with JavaScript
- How to use binding
- How to use callbacks
