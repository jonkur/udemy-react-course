var nameVar = 'Jonas';
var nameVar = 'Heikki';
console.log('nameVar', nameVar);

let nameLet = 'Jenni';
nameLet = 'Päivi';
console.log('nameLet', nameLet);

const nameConst = 'Ari';
//nameConst = 'Pekka';  // Not allowed
console.log('nameConst', nameConst);

function getPetName() {
    const petName = 'Wilma';
    return petName;
}

// Block scoping

const fullName = 'Jonas K';
let firstName;

if (fullName) {
    firstName = fullName.split(' ')[0];
    console.log(firstName);
}

console.log(firstName);