//strings
var name = 'vamsi';
console.log(typeof (name));

//integers
var number = 23;
console.log(typeof (number));

//float or double
var currency = 50.5;
console.log(typeof (currency));

//boolean
var condition = true;
console.log(typeof (condition));

//arrays
var details = [];
console.log(typeof (details));
details['name'] = 'vamsi';
console.log(details);
details.push('raj');

//objects
var personalDetails = {
    name: 'krish',
    age: 24,
    degree: 'MS',
    percentage: 69.99
};
console.log(typeof (personalDetails));
console.log(personalDetails);

var numbers = [123, 234, 456, 678, 789, 890];
console.log(numbers.sort());

//functions and arthimatic operators
function addition(a, b) {
    return a + b;
}

function multiply(a, b) {
    return a * b;
}

var result1 = addition(500, 20);
var result2 = multiply(20, 30);
console.log(result1);
console.log(result2);

//logical operators and conditionals
let score = 50;
if (score == '50') {
    console.log('value is equal');
}

if (score == '50') {
    console.log('value is identical');
} else {
    console.log('value is not identical');
}

var total = 100;
if (total > 90) {
    console.log('A grade');
} else if (total > 80 && total < 90) {
    console.log('B grade');
} else {
    console.log('fail');
}

var win = 50;
if (win == 40 || win == 50) {
    console.log('identified');
}

// switch
var fruit = 'grapes';
switch (fruit) {
    case 'grapes':
        console.log('I got grapes');
        break;

    case 'orange':
        console.log('I got orange');
        break;

    default:
        console.log('I dont need it');

}

// diffrence between let and var
function getName() {
    var name = 'krish';
    return name;

}

function manipulateValue() {
    return name = 'gopi';
}

var result = getName();
var result = manipulateValue();
console.log(result);
// let and var simple way
var name = 'vamsi';

function printName() {
    let name = 'gopi';
    return name;
}
console.log(name);
var number = 120;
console.log(120);
console.log(name);

//objects
var man = {
    firstName: 'vamsi',
    lastName: 'srungavarapu',
    age: 24,
    degree: 'MS',
    gender: 'male',
    children: ['kp', 'vp', 'sp'],
    address: {
        street: 'market st',
        citi: 'bloomington',
        country: 'USA',
        Zip: 61701
    },
    fullName: function () {
        return this.firstName + ' ' + this.lastName;
    },
    fullName2: () => {
        return man.firstName + 'krish ' + man.lastName;
    },
    fullName3: () => man.firstName + ' ' + man.lastName

}
console.log(man);
console.log(man.fullName());
console.log(man.address.Zip);
console.log(man.fullName2());
console.log(man.fullName3());


// Object Literal
var apple = new Object();
apple.color = 'red';
apple.cost = 3;
apple.type = ['shimla', 'kashmir'];
apple.info = {
    size: 'small',
    age: 10,
    stae: 'IL'
}
apple.getInfo = function () {
    return apple.color;
}
console.log(apple);
console.log(apple.getInfo());

//constructor pattern
function fruits(name, color, shape) {
    this.name = name;
    this.color = color;
    this.shape = shape;
    this.describe = function () {
        return this.name + ' ' + this.shape;
    }
}
var appleInfo = new fruits('apple', 'red', 'oval');
console.log(appleInfo);
console.log(appleInfo.describe());

//loops

for (var i = 0; i < 10; i++) {
    //console.log(i);
}

//while loop
var numbers = [1, 2, 3, 4, 5, 6]
var i = 0;
while (i < numbers.length) {
    //console.log(i);
    i++;
}

//for each
numbers.forEach(function (num) {
    console.log(num);
});

//Events
function clickMe() {
    alert('changed');
}

function changeText(button) {
    button.innerHTML = 'tect changed';
}

function showDate(button) {
    var head1 = document.getElementById('mainHead');
    console.log(head1);
}

function changeHead(button) {
    var head1 = document.getElementById('mainHead');
    head1.innerHTML = Date();
}

function changeColor(button) {
    var head1 = document.getElementById('mainHead');
    console.log(head1);
}