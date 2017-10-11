// arguments object - no longer bound with arrow functions

const add = (a, b) => {
    // console.log(arguments);  // no arguments object in arrow functions!
    return a + b;
};
console.log(add(54, 46, 'some other argument'));

// this keyword - no longer bound

const user = {
    name: 'Jonas',
    cities: ['Helsinki', 'Espoo', 'Kauniainen'],
    printPlacesLived() {
        return this.cities.map((city) => this.name + ' has lived in ' + city);
    }
};

console.log(user.printPlacesLived());


const multiplier = {
    numbers: [1, 2, 3],
    multiplyBy: 2,
    multiply() {
        return this.numbers.map((num) => num * this.multiplyBy);
    }
}

console.log(multiplier.multiply());