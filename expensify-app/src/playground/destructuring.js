// OBJECT DESTRUCTURING

// const person = {
//     name: 'Jonas',
//     age: 29,
//     location: {
//         city: 'Helsinki',
//         temp: 5
//     }
// };

// const { name: firstName = 'Anonymous', age } = person;

// console.log(`${firstName} is ${age}.`);

// const { city, temp: temperature } = person.location;

// if (city && temperature) {
//     console.log(`It's ${temperature}C in ${city}`);
// }

// const book = {
//     title: 'Ego is the Enemy',
//     author: 'Ryan Holiday',
//     publisher: {
//         name: 'Penguin'
//     }
// };

// const { name: publisherName = 'Self-Published' } = book.publisher;

// console.log(publisherName); // Penguin, Self-Published


// ARRAY DESTRUCTURING

const address = ['1299 S Juniper Street', 'Philadelphia', 'Pennsylvania', '19147'];

const [, city, state = 'NY'] = address;

console.log(`You are in ${city} ${state}.`);

const item = ['Coffee (hot)', '$3.00', '$3.50', '$3.75'];

const [coffeeType, , mediumPrice] = item;

console.log(`A medium ${coffeeType} costs ${mediumPrice}`);