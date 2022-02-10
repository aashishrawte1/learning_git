const fruits = []
fruits.push('banana', 'apple', 'peach')

let array1 = [1,2,3]
let array1Reference = array1;
array1[1] = 9;
console.log(array1Reference);
// Array [1,9,3]  - changes to array1 do affect array1Reference - it is not a copy

let shallowCopySpread = [...fruits]
// ["Strawberry", "Mango"]

let shallowCopySlice = fruits.slice()
// ["Strawberry", "Mango"]

let shallowCopyFrom = Array.from(fruits)
// ["Strawberry", "Mango"]

console.log(shallowCopySlice);
