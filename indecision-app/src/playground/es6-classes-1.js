
class Person {
    constructor(name = 'Anonymous', age = 0, gender = 'male') {
        this.name = name;
        this.age = age;
        this.gender = gender;
    }

    getGreeting() {
        return `Hi. I am ${this.name}!`;
    }

    getDescription() {
        return `This is ${this.name}. ${this.gender === 'male' ? 'He' : 'She'} is ${this.age} years old.`;
    }
}

class Student extends Person {
    constructor(name, age, gender, major) {
        super(name, age, gender);
        this.major = major;
    }

    hasMajor() {
        return !!this.major;
    }

    getDescription() {
        let description = super.getDescription();
        if (this.hasMajor()) {
            description += ` ${this.gender === 'male' ? 'His' : 'Her'} major is ${this.major}.`;
        }

        return description;
    }
}

class Traveler extends Person {
    constructor(name, age, gender, homeLocation, placesVisited) {
        super(name, age, gender);
        this.homeLocation = homeLocation;
        this.placesVisited = placesVisited;
    }

    getGreeting() {
        let greeting = super.getGreeting();
        if (this.homeLocation) {
            greeting += ` I'm from ${this.homeLocation}.`;
        }
        if (this.placesVisited.length > 0) {
            let visitedStr = ' I have been to';
            let placesStr = this.placesVisited.reduce((last, now , i) => {
                return last += `${i === 1 ? ', ' : ' '}${i === this.placesVisited.length - 1 ? 'and ' : ''}${now}${i === this.placesVisited.length - 1 ? '.' : ','}`;
            });
            greeting += `${visitedStr} ${placesStr}`;
        }

        return greeting;
    }
}

const me = new Student('Jonas', 29, 'male', 'Computer Science');
console.log(me)
console.log(me.getGreeting());
console.log(me.getDescription());
console.log(`Has major: ${me.hasMajor()}`);

const jen = new Student('Jen', 26, 'female');
console.log(jen);
console.log(jen.getDescription());
console.log(`Has major: ${jen.hasMajor()}`);

const other = new Student();
console.log(other.getGreeting());

console.log('\n--------------------------------------\n');

const heebo = new Traveler('Heebo', 35, 'male', 'Helsinki', ['Stockholm', 'London', 'Johannesburg', 'Berlin']);
console.log(heebo);
console.log(heebo.getGreeting());