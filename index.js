//for loop
const numbers = [1, 2, 3, 4, 5];
let sum = 0;
for (var i = 0; i < numbers.length; i++) {
  sum += numbers[i];
}
console.log(sum);


//forEach method (sum of array elements)
const numbers1 = [1, 2, 3, 4, 5];
let sum1 = 0;
numbers1.forEach(function (number) {
  sum1 += number;
});
console.log(sum);


//map method (to find square root of array elements)
let numbers2 = [5, 10, 15, 20, 25];
let squares = [];
squares = numbers2.map(function (number) {
  return number * number;
});
console.log(squares);


//filter method (to filter the elements in array)
let numbers3 = [10, 20, 30, 40, 50];
let final = [];
final = numbers3.filter(function (number) {
  return number >= 30;
});
console.log(final);


//find method (find elements of array)
let users = [
  { name: "Pasha", age: "22" },
  { name: "Salman", age: "24" },
  { name: "Baba", age: "25" },
];
let foundUser = [];
foundUser = users.find(function (user) {
  return user.age === "22";
});
console.log(foundUser);


//every (to check if every element satisfy the condition)
let users1 = [
  { name: "Pasha", age: "22" },
  { name: "Salman", age: "24" },
  { name: "Baba", age: "25" },
  { name: "Waseem", age: "17" },
];
   let isAllUsersAboveTwenty = true;

isAllUsersAboveTwenty = users1.every(function (user) {
  return user.age > 20;
});
console.log(isAllUsersAboveTwenty);


//some (to check if atleast one element satisfy the condition)
let users2 = [
  { name: "Pasha", age: "22" },
  { name: "Salman", age: "24" },
  { name: "Baba", age: "25" },
  { name: "Waseem", age: "17" },
];
  let someUserAboveTwenty = false;

someUserAboveTwenty = users2.some(function (user) {
  return user.age > 20;
});
console.log(someUserAboveTwenty);


//reduce method (multiplication of array elements)
let numbers4=[2,4,6,8,10];
let multiplication=0;

multiplication= numbers4.reduce(function(multiplication,number){
 return multiplication*number;
},1);
console.log(multiplication);