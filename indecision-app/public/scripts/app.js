'use strict';

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Person = function () {
    function Person() {
        var name = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'Anonymous';
        var age = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
        var gender = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'male';

        _classCallCheck(this, Person);

        this.name = name;
        this.age = age;
        this.gender = gender;
    }

    _createClass(Person, [{
        key: 'getGreeting',
        value: function getGreeting() {
            return 'Hi. I am ' + this.name + '!';
        }
    }, {
        key: 'getDescription',
        value: function getDescription() {
            return 'This is ' + this.name + '. ' + (this.gender === 'male' ? 'He' : 'She') + ' is ' + this.age + ' years old.';
        }
    }]);

    return Person;
}();

var Student = function (_Person) {
    _inherits(Student, _Person);

    function Student(name, age, gender, major) {
        _classCallCheck(this, Student);

        var _this = _possibleConstructorReturn(this, (Student.__proto__ || Object.getPrototypeOf(Student)).call(this, name, age, gender));

        _this.major = major;
        return _this;
    }

    _createClass(Student, [{
        key: 'hasMajor',
        value: function hasMajor() {
            return !!this.major;
        }
    }, {
        key: 'getDescription',
        value: function getDescription() {
            var description = _get(Student.prototype.__proto__ || Object.getPrototypeOf(Student.prototype), 'getDescription', this).call(this);
            if (this.hasMajor()) {
                description += ' ' + (this.gender === 'male' ? 'His' : 'Her') + ' major is ' + this.major + '.';
            }

            return description;
        }
    }]);

    return Student;
}(Person);

var Traveler = function (_Person2) {
    _inherits(Traveler, _Person2);

    function Traveler(name, age, gender, homeLocation, placesVisited) {
        _classCallCheck(this, Traveler);

        var _this2 = _possibleConstructorReturn(this, (Traveler.__proto__ || Object.getPrototypeOf(Traveler)).call(this, name, age, gender));

        _this2.homeLocation = homeLocation;
        _this2.placesVisited = placesVisited;
        return _this2;
    }

    _createClass(Traveler, [{
        key: 'getGreeting',
        value: function getGreeting() {
            var _this3 = this;

            var greeting = _get(Traveler.prototype.__proto__ || Object.getPrototypeOf(Traveler.prototype), 'getGreeting', this).call(this);
            if (this.homeLocation) {
                greeting += ' I\'m from ' + this.homeLocation + '.';
            }
            if (this.placesVisited.length > 0) {
                var visitedStr = ' I have been to';
                var placesStr = this.placesVisited.reduce(function (last, now, i) {
                    return last += ' ' + now + (i === _this3.placesVisited.length - 1 ? '.' : ',');
                });
                greeting += visitedStr + ' ' + placesStr;
            }

            return greeting;
        }
    }]);

    return Traveler;
}(Person);

var me = new Student('Jonas', 29, 'male', 'Computer Science');
console.log(me);
console.log(me.getGreeting());
console.log(me.getDescription());
console.log('Has major: ' + me.hasMajor());

var jen = new Student('Jen', 26, 'female');
console.log(jen);
console.log(jen.getDescription());
console.log('Has major: ' + jen.hasMajor());

var other = new Student();
console.log(other.getGreeting());

console.log('\n--------------------------------------\n');

var heebo = new Traveler('Heebo', 35, 'male', 'Helsinki', ['Stockholm', 'London', 'Johannesburg']);
console.log(heebo);
console.log(heebo.getGreeting());
