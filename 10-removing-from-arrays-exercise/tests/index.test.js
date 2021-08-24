/**
 * create an array {carBrands}
 * and assign to it ["Mercedes", "Volvo", "BMW", "Citroen", "Reno", "Vauxhall"]
 */
const carBrands = ["Mercedes", 
"Volvo", "BMW", "Citroen", "Reno", "Vauxhall"];

/**
 * Exercise 1
 *
 * remove the last element from the {carBrands} array
 *
 * * PS: console.log() the result to see the difference
 */

carBrands.shift();
console.log(carBrands);
/**
 * Exercise 2
 *
 * remove the first element from the {carBrands} array
 *
 * * PS: console.log() the result to see the difference
 */
carBrands.pop();
console.log(carBrands);
/**
 * Exercise 3
 *
 * from {carBrands} remove BMW
 *
 * * PS: console.log() the result to see the difference
 */
carBrands.splice(2,)
console.log(carBrands);
/**
 * Exercise 4
 *
 * in {carBrands} replace Citroen with Rolls-Royce
 *
 * * PS: console.log() the result to see the difference
 */

carBrands.splice(3,3,"Rolls-Royce")
 console.log(carBrands);
// splice

test("carBrands is declared", () => {
	expect(Array.isArray(carBrands)).toBe(true);
});

describe("Remove elements from carBrands", () => {
	// Exercise 1
	test("remove the last element", () => {
		expect(carBrands.includes("Land Rover")).toBe(false)
	});

	// Exercise 2
	test("remove the first element", () => {
		expect(carBrands.includes("Mercedes")).toBe(false)
	});

	// Exercise 3
	test("Vauxhall should be removed from carBrands", () => {
		expect(carBrands.includes("Vauxhall")).toBe(false);
	});

	// Exercise 4
	test("Citroen should be removed from carBrands", () => {
		expect(carBrands.includes("Citroen")).toBe(false);
	});

	test("carBrands should include Rolls-Royce", () => {
		expect(carBrands.includes("Rolls-Royce")).toBe(true);
	});
});
