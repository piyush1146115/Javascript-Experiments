let listOfNumbers = [2, 3, 5, 7, 11];
console.log(listOfNumbers[2]);
console.log(listOfNumbers[2 - 1]);


let sequence = [1, 2, 3];
sequence.push(4);
sequence.push(5);
console.log(sequence);
console.log(sequence.pop());
console.log(sequence);




let anObject = {left: 1, right:2};
console.log(anObject.left);

delete anObject.left;
console.log(anObject.left);

console.log("left" in anObject);
console.log("right" in anObject);

// console.log(anObject.keys);


let object1 = {value: 10};
let object2 = object1;
let object3 = {value: 10};
console.log(object1 == object2);
console.log(object1 == object3);

object1.value = 15;
console.log(object2.value);
console.log(object3.value);
