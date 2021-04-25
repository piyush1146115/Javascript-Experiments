const square = function(x){
    return x*x;
}

console.log(square(12));

const makeNoise = function(){
    console.log("pling");
}

makeNoise();

const power = function(base, exponent){
    let result = 1;

    for (let count = 0; count < exponent; count++){
        result *= base;
    }
    return result;
}

console.log(power(2, 10));


let x = 10;

if (true) {
    let y = 20;
    var z = 30;
    console.log(x+y+z);
}

console.log(x+z);


//Function declarations are not part of the regular top-to-bottom flow of control 
console.log("The future says: ", future());

function future(){
    return "You'll never have flying cars";
}



//Arrow functions 

const power2 = (base, exponent) => {
    let result = 1;

    for (let count = 0; count < exponent; count++){
        result *= base;
    }
    return result;
}
console.log(power2(2, 10));

//These two definitions of square do the same thing
// const square1 = (x) => { return x*x; };
const square2 = x => x * x;
