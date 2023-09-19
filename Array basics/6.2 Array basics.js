// For each of the questions below, answer the questions with this
// array:
const people = ["Greg", "Mary", "Devon", "James"];

people.shift()
people.pop()
people.unshift("Matt")
people.push("yinon")

console.log(people);

const people1 = people.slice(2);
console.log(people1);

console.log(people.indexOf('Mary'));

console.log(people.indexOf('Foo')); // "-1" appears because the value does not exist in the array

const people2 = ["Greg", "Mary", "Devon", "James"];

people2.splice(2,1,"Elizabeth");

console.log(people2);

const withBob = people2.concat(["bob"]);

console.log(withBob);