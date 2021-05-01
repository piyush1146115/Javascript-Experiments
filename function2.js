function greet(who) {
    console.log("Hello" + " " + who);
}

greet("PK");
console.log("Bye");


// Javascript is broad-minded about the number of arguments you pass to the function
// If you pass too many, the extra ones are ignored.
// If you pass too few, thhe missing parameters get assigned the value undefined

function minus(a, b)
{
    if(b === undefined) return -a;
    else return a - b;
}

console.log(minus(10));
console.log(minus(10, 5));


//If you write an = operator after a parameter, followed by an expression ,
// the value of that expression will replace the argument when it  is not given

function power(base, exponent = 2){
    let result = 1;

    for (let count = 0; count < exponent; count++){
        result *= base;
    }
    return result;
}

console.log(power(4));
console.log(power(2, 6));






//Closure - A function that references bindings from local scopes around it is called a closure

//Different calls can't template on one another's local bindings
function wrapValue(n){
    let local = n;
    return() => local;
}
let wrap1 = wrapValue(1);
let wrap2 = wrapValue(2);
console.log(wrap1());
console.log(wrap2());


// In this example, multiplier is called and created an environment in which it's factor parameter is bound to 2
// The function value it returns , which is stored in twice, remembers the environment
// So when it is called, it  multiplies the argument by 2

function multiplier(factor){
    return number => number * factor;
}

let twice = multiplier(2);
console.log(twice(5));



// Recursion - A function that calls itself is called recursive function
// Consider a puzzle: By starting from number 1 and repeatedly either adding 5 or multiplying by 3, an infinite set of numbers can be produced
// Write a function that, given a number, tries to find a sequence of such additions and multiplications that produces that number?

function findSolution(target){
    function find(current, history){
        if(current == target){
            return history;
        }
        else if(current > target){
            return null;
        }
        else{
            return find(current + 5, `(${history} + 5)`) ||
                   find(current * 3, `(${history} * 3)`);
        }
    }
    return find(1, "1");
}

console.log(findSolution(24));
console.log(findSolution(20));
console.log(findSolution(212));
// (((1*3) + 5) * 3)


function printFarmInventory(cows, chickens){
    let cowString = String(cows);
    while(cowString.length < 3){
        cowString = "0" + cowString;
    }
    console.log(`${cowString} Cows`);
    let chickenString = String(chickens);
    while(chickenString.length < 3){
        chickenString = "0" + chickenString;
    }
    console.log(`${chickenString} Chickens`);
}

printFarmInventory(7, 11);

//Adding extensibility to the above function
function zeroPad(number, width){
    let string = String(number);
    while(string.length < width){
        string = "0" + string;
    }
    return string;
}

function printFarmInventory2(cows, chickens, pigs){
    console.log(`${zeroPad(cows, 3)} Cows`);
    console.log(`${zeroPad(chickens, 3)} Chickens`);
    console.log(`${zeroPad(pigs, 3)} Pigs`);
}

printFarmInventory2(7, 16, 3);
