const target = 15;
const userValue = "15";

const password = "JSisKool888";
const passwordConfirmation = "JSisCool888";

const sortOrder = "ALPHABETICAL";

// ADD YOUR CODE BELOW
let message;
let targetMatchesCoercedUserValue = target == userValue;
let targetMatchesUserValue = target === userValue;

let passwordMatchesConfirmation = password === passwordConfirmation;

let passwordMessage;
let fruits;

if(passwordMatchesConfirmation == false){
    passwordMessage = "Oops, your password and confirmation do not match!"
}

if (sortOrder == "ALPHABETICAL"){
    fruits = "banana, cherry, watermelon" 

}
   