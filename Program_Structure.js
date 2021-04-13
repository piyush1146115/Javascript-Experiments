
//While Loop
let result = 1;
let counter = 0;

while(counter < 10){
    result *= 2;
    counter += 1;
}

console.log(result);

//For Loop
result = 1;

for(let counter = 0; counter < 10; counter++){
    result *= 2;
}
console.log(result);


//Switch case
switch(prompt("What is the weather like?")){
    case "rainy":
        console.log("Remembere to bring an umbrella");
        break;
    case "sunny":
        console.log("Dress lightly");
    case "cloudy":
        console.log("Go outside");
        break;
    default:
        console.log("Unknown weather type!");
        break;
}