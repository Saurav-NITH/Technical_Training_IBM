let status = true;
function dummy() {}
let examProm = new Promise(function (resolve, reject) {
  if (status) {
    setTimeout(dummy, 5000);
    resolve("Promise is fulfilled");
  } else {
    setTimeout(dummy, 5000);
    reject("Promise is not fulfilled");
  }
});

/*function greet() {
  console.log("hello");
}
function bye() {
  console.log("bye");
}
setTimeout(greet, 4000);
bye();
*/
/*
const students = {
  fName: "Tom",
  mName: "Marvolo",
  lName: "Riddle",
  age: 30,
  subOneMarks: [2, 4, 6, 8],
  subTwoMarks: [1, 3, 5, 7],
  subThreeMarks: [10, 12, 14, 16]
};

console.log("Access first Name of Object:", students.fName);
console.log("Access last name using bracket notation:", students["lName"]);
console.log("Check if alias property is present:", "alias" in students);
students.alias = "Voldemort";
console.log(
  "Check if alias property is added now or not:",
  "alias" in students,
  students
);
console.log(
  "check if mName property is present before deletion:",
  "mName" in students
);
delete students.mName;
console.log(
  "check if mName property is actually deleted or not:",
  "mName" in students
);
students.age = 50;
console.log("Check if age changed to 50 or not:", students.age);
console.log("----------- key-value pairs -----------");
for (let key in students) {
  console.log(
    "Key:",
    key,
    "  Value:",
    students[key],
    "  key datatype:",
    typeof key,
    "  value datatype:",
    typeof students[key]
  );
}

console.log("------------Destructuring------------");
*/
/*
let arrOne = [1, 2, 3];
let arrTwo = [4, 5, 6];
let arrThree = [...arrOne, 4, 5, 6];
console.log(arrThree);
console.log(arrOne.concat(arrTwo));
*/
/*const student = {
  fName: "Tom",
  lName: "Riddle",
  age: 30
};

let { fName: firstName, lName: lastName, age = 20 } = student;
console.log(firstName, lastName, age);
console.log(student);

function add(a, b, c, ...args) {
  console.log(a);
  console.log(b);
  console.log(c);
  console.log(args);

  return a + b + c + args.reduce((result, item) => result + item, 0);
}
console.log(add(1, 2, 3, 4, 5, 6));
*/
/*let newArray = [1, 2, 3, 4, 5];
let [x, y] = newArray;
console.log(x, y);
let [a, b] = newArray.slice(1, 3);
console.log(a, b);
let [c, , e] = newArray;
console.log(c, e);
*/

/*const student = {
  firstName: "Tom",
  age: 30,
  middelName: "Marvolo",
  "last name": "Riddle"
};

//console.log(student.firstName);
//console.log(student["last name"]); //bracket notation
student.middelName = "Voldemeort";
//console.log(student.middelName);
delete student.middelName;
student.salary = 5000;
//console.log(student);
//console.log("salary" in student);
let key;
for (key in student) {
  console.log("Key:", key);
  console.log("Value:", student[key]);
  console.log("Key datatype:", typeof key);
  console.log("value datatype:", typeof student[key]);
}
*/
/*let newNumber = 4;
let newName = "Hello";
let strNum = "5";
let cond = true;
console.log("4(num)+'Hello'(string):", newName + newNumber);
console.log("4(num)+'-1'(string):", newNumber + "-1");
console.log("4(num)-'-1'(string):", newNumber - "-1");
console.log("4(num)*'Hello'(string):", newNumber * newName);
console.log("'hello'(string)*'four'(string)", "hello" * "four");
console.log("'hello'(string)-'hell'(string)", "hello" - "hell");
console.log("4(num)+true(boolean):", newNumber + cond);
console.log('4(num)*"4"(string):', 4 * "4");
*/
/*
let fracSalary = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let actualSalary = fracSalary.map(function (num) {
  if (num % 2 === 0) return num * 1000;
  else return num * 999.99;
});
let evenSalaryAmount = actualSalary.filter((num) => num % 2 === 0);
let oddSalaryAmount = actualSalary.filter((num) => num % 2 !== 0);
let totalActualSalary = actualSalary.reduce(function (result, num) {
  return result + num;
}, 0);
console.log("Salary:", fracSalary);
console.log("map operation-Actual salary:", actualSalary);
console.log(
  "filter operation- even and odd salary:",
  evenSalaryAmount,
  oddSalaryAmount
);
console.log("reduce operation-total actual salary", totalActualSalary);
*/
/*let sentence = "Good morning everyone";
let splitSent = sentence.split(" ");
let joinSent = splitSent.join(" ");

console.log(sentence);
console.log(splitSent);
console.log(joinSent);*/
