/**
 * Exercise 1
 *
 * create a function "myName" which takes param(string)
 * of your name and console.log "My name is YOUR_NAME"
 */
let name = "Haminata";

function myName(name){
    console.log("My name is " + name);
}

/**
 * Exercise 2
 *
 * create a function "myAge" which takes param(string)
 * of your age and console.log "I'm YOUR_AGE years old"
 */

let age = "31";
function myAge(age){
    console.log("I'm " + age + " years old");
}
/**
 * Exercise 3
 *
 * create a function "aboutMe" which takes 2 params
 * your original city and country and console.log
 * "I'm from YOUR_CITY, YOUR_COUNTRY"
 */

 let city = "London";
 let country = "UK";
 function aboutMe(city, country){
     console.log("I'm from " + city + ", " + country);
 }
/**
 * Exercise 4
 * create a function "logSum" which will take any 2 numbers
 * as params and log sum.
 */

let a = 1;
let b = 3;
function logSum(a,b){
    console.log(a+b)

}

global.console = {
	log: jest.fn(),
	info: jest.fn(),
	error: jest.fn()
};

// Exercise 1
describe("myName", () => {
	test("myName is declared", () => {
		expect(myName).toBeDefined();
	});

	test("myName should log a valid string", () => {
		myName("Alex");

		expect(global.console.log).toHaveBeenCalledWith("My name is Alex");
	});
});

// Exercise 2
describe("myAge", () => {
	test("myAge is declared", () => {
		expect(myAge).toBeDefined();
	});

	test("myAge should log a valid string", () => {
		myAge(16);

		expect(global.console.log).toHaveBeenCalledWith("I'm 16 years old");
	});
});

// Exercise 3
describe("aboutMe", () => {
	test("aboutMe is declared", () => {
		expect(aboutMe).toBeDefined();
	});

	test("aboutMe should log a valid string", () => {
		aboutMe("Lviv", "Ukraine");

		expect(global.console.log).toHaveBeenCalledWith("I'm from Lviv, Ukraine");
	});
});

// Exercise 4
describe("logSum", () => {
	test("logSum is declared", () => {
		expect(logSum).toBeDefined();
	});

	test("logSum should log sum", () => {
		logSum(50, 20);

		expect(global.console.log).toHaveBeenCalledWith(70);
	});
});
