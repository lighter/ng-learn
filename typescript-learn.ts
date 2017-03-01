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
}
