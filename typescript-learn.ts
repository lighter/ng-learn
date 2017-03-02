// types

function greeText(name: string): string {
    return "Hello " + name;
}

// function hello(name: string): string { // The return type is wrong
function hello(name: string): number {
    return 12;
}

// trying it out with a repl
// $ npm install -g tsun
// $ tsun

// Built-in types
var name: string = 'Hello world';

// Number
var age: number = 35;

// Boolean
var status: boolean = true;

// Array
var fruit: Array<string> = ['Apple', 'Banana', 'Orange'];
var fruit: string[] = ['Apple', 'Banana', 'Oragne'];
var numbers: Array<number> = [1,2,3];
var numbers: number[] = [1,2,3];

// Enums
enum Role {Employee, Manager, Admin};
var role: Role = Role.Employee;

enum Role {Employee = 3, Manager, Admin};
var role: Role = Role.Employee;

enum Role {Employee = 3, Manager = 5, Admin = 9};
var role: Role = Role.Employee;

enum Role {Employee, Manager, Admin};
console.log('Roles: ', Role[0], ',' , Role[1], ',', Role[2]);

// Any
var blablabla: any = 'blablabla string';
blablabla = 1;
blablabla = [1,2,3];

// void function
function test_func(name: string): void {
    this.name = name;
}

// Class

class Car {

}

// Properties, Method
class User {
    first_name: string;
    last_name: string;
    age: number;

    hello() {
        console.log("Hellow", this.first_name);
    }

    ageInYears(years: number): number {
        return this.age + years;
    }
}

var u: User = new User();
u.age = 18;
u.ageInYears(18);

// Constructors
class Vehicle {
    color: string;

    //constructor() {
    constructor(color: string) {
        this.color = color;
    }
}

// var v = new Vehicle();
var v = new Vehicle('red');

// Inheritance
class Report {
    data: Array<string>;

    constructor(data: Array<string>) {
        this.data = data;
    }

    run() {
        this.data.forEach(function(line) { console.log(line); });
    }
}

var r: Report = new Report(['First line', 'Second line']);
r.run();

class TabbedReport extends Report {
    headers: Array<string>;

    constructor(headers: string[], values: string[]) {
        super(values);
    }
}

var headers: string[] = ['Name'];
var data: string[] = ['Alice Green', 'Paul Gray', 'Louis Blakenship'];
var r: TabbedReport = new TabbedReport(headers, data);
r.run();

// Utilities
// Fat Arrow Functions
var data = ['AAA', 'BBB', 'CCC'];
data.forEach(function(line) { console.log(line); });

data.forEach( (line) => console.log(line) );

var evens = [2,4,6,8];
var odds = evens.map(v => v + 1);

data.forEach( line => {
    console.log(line.toUpperCase())
} );

// share the same `this` as the surrounding code.
var nate = {
    name: 'AAA',
    guitars: ['G1', 'G2', 'G3'],
    p_guitars: function() {
        var self = this;
        this.guitars.forEach(function(g) {
            console.log(self.name + " plays a " + g);
        });
    }
};

var nate = {
    name: 'AAA',
    guitars: ['G1', 'G2', 'G3'],
    p_guitars: function() {
        var self = this;
        this.guitars.forEach( (g) => {
            console.log(this.name + " plays a " + g);
        });
    }
}

// Template Strings
var hello = "Hello";
var world = "World";
var hello_world = `${hello} ${world}`;

var template = `
    <div>
        <p>hahahahahaha</p>
    </div>
`;
