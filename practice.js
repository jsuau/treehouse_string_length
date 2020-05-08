
// 2. Add a prompt dialog to capture input from the user and store it in a variable

  var userName = prompt("What's your name?");

// 3. Add a second a prompt dialog to capture input from the user and store it in a second variable

  var userSurname = prompt("What's your surname?");

// 4. Create a third variable and which combines an uppercase version values in the two other variables separated by a space. For example, if the first two variables contain "sally" and "forth", this third variable should contain the string value "SALLY FORTH"

var fullName = userName.toUpperCase() + ' ' + userSurname.toUpperCase();

// 5. Create a fourth variable to store a number. The number should be the total number of characters in the third variable. 

var totalNumOfCharacters = fullName.length

// 6. Add an alert dialog box that says "The string '[insert value of third variable here]' is X number of characters long." For example, if the third variable contained the string "SALLY FORTH" then the alert dialog should says "The string 'SALLY FORTH' is 11 characters long."

alert("The string \"" + fullName + "\" is " + totalNumOfCharacters + " characters long.");













