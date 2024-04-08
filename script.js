//Write a program to calculate the area of a rectangle using variables to store the length and width.

let width=5;
let length=6;
let area=width*length;
console.log("area of rectangle: " + area);

//Create a simple calculator program that takes two numbers as input and performs arithmetic operations (+, -, *, /) on them.

let x=5;
let y=6;

let add=x+y;
let subtract=y-x;
let multiply=x*y;
let div=y/x;

console.log(add);
console.log(subtract);
console.log(multiply);
console.log(div);

//Develop a program that asks the user for their name and greets them with a personalized message.

let name;
name=window .prompt("Enter your name: ");
console.log("Hi " + name);

//Write a program that takes a number as input and converts it to a string, then back to a number.

let num;
num=window.prompt("Enter your Num: ");
console.log(typeof num);
num=Number(num);
console.log(typeof num);

//Implement a program that calculates the circumference of a circle using a constant value for π.

const PI=3.15;
let r=7;
let circumference=2*PI*r;
console.log(circumference);

//Build a counter program that allows users to increment, decrement, and reset a counter value.

let counter=0;
let increment=++counter;
console.log(increment);

//Utilize the Math object to generate random numbers within a specific range.(0-100)

let num= Math.floor(Math.random()*100);
console.log(num);

//Create a program that generates a random number and asks the user to guess it. Provide hints if the guess is too high or too low.

let num=Math.floor(Math.random()*50);
console.log(num);
let attempt=0;
let running=true;
while(running){
    let guess=window.prompt("Enter guessing num between 0 to 50 exclusive");
    guess=Number(guess);
    if(isNaN(guess)){
        window.alert("Enter a valid number");
        
    }
    else if(guess>50 || guess<0){
        window.alert("Enter a number which is lying between 0 to 50");
       
    }
    else{
        attempt++;
        if(guess> num){
            window.alert("Guessing is Too High");
            
        }
        else if(guess< num){
            window.alert("Guessing is Too Low");
            
        }
        else{
            window.alert(`Guessing matched ${num} . it tooks ${attempt} attepmts`);
            running=false;
        }
    
    }
    
}




//Write a program that checks whether a given number is even or odd using if statements.

let num=46;
let status;
let remainder=num%2;
if(remainder==0){
    status="EVEN number";
}
else{
    status="ODD number";
}

console.log(status);

//Develop a program that checks if a checkbox is checked or unchecked and updates the display accordingly.

const status = document.getElementById("checkbox");
const update = document.getElementById("update");

function updateStatus() {
    if (status.checked) {
        update.textContent = "checked";
    } else {
        update.textContent = "unchecked";
    }
}

status.addEventListener('change', updateStatus);

updateStatus();


//Rewrite a simple if-else statement using the ternary operator.

let age=window.prompt("Enter your age: ");
let status;
status=age>=18 ? 'major' : 'minor';
document.getElementById("update").textContent=status;

//Implement a program that takes a day number (1-7) and returns the corresponding day of the week using a switch statement.

let day=4;
let status;
switch(day){
    case 1:
        status="sunday"
        break;
    case 2:
        status="monday"
        break;
    case 3:
        status="tuesday"
        break;
    case 4:
        status="wednesday"
        break;
    
    case 5:
        status="thursday"
        break;
    case 6:
        status="friday"
        break;
    case 7:
        status="saturday"
        break;
}
console.log(status);

//Create a program that takes a sentence as input and counts the number of vowels using string methods.

let sentence="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptates, blanditiis in a eos natus quae";
sentence=sentence.toLowerCase();
let count=0;
for(let i=0; i<sentence.length;i++){
    if(sentence[i]==='a' || sentence[i]==='e' || sentence[i]==='i' || sentence[i]==='o' || sentence[i]==='u' ){
        count++;
    }
}
console.log(count);

//Use method chaining to manipulate a string (e.g., convert to uppercase, reverse, and then replace characters).

let word="umbrella";
let result=word.toUpperCase().split('').reverse().join('').replaceAll("L","#");
console.log(result);

//Develop a program that checks whether a person is eligible for voting based on age and nationality using logical operators.

let age=45;
let nationality="Srilankan";
let status;
if(age>=21 && nationality.toLowerCase()==="srilankan"){
    status="Eligible for voting";
}
else{
    status="Not eligible";
}
console.log(status);

//Write a program that compares two values using strict equality and prints whether they are equal or not.

let number=50;
if(number==="50"){
    console.log("both are equal");
}
else{
    console.log("both are not equal");
}

//implement a program that counts down from a given number to 0 using a while loop.

let x=10;
while(x>=0){
    console.log(x);
    x--;
}

//Create a program that prints all even numbers between 1 and 50 using a for loop.

for(let i=1;i<=50;i++){
    if(i%2==0){
        console.log(i);
    }
}

//Extend the existing number guessing game to allow the user to specify the range of numbers.

const minNumber=parseInt(prompt("Enter the min number"));
const maxNumber=parseInt(prompt("Enter the max number"));
let num=Math.floor(Math.random()*(maxNumber-minNumber+1))+minNumber;
console.log(num);
let attempt=0;
let running=true;
while(running){
    let guess=window.prompt(`Enter guessing num between ${minNumber} to ${maxNumber} `);
    guess=Number(guess);
    if(isNaN(guess)){
        window.alert("Enter a valid number");
        
    }
    else if(guess>maxNumber || guess<minNumber){
        window.alert(`Enter a number which is lying between ${minNumber} to ${maxNumber}`);
       
    }
    else{
        attempt++;
        if(guess> num){
            window.alert("Guessing is Too High");
            
        }
        else if(guess< num){
            window.alert("Guessing is Too Low");
            
        }
        else{
            window.alert(`Guessing matched ${num} . it tooks ${attempt} attepmts`);
            running=false;
        }
    
    }
    
}

//Write a function that takes two numbers as parameters and returns their sum.

let num1=window.prompt("Enter the num1");
let num2=window.prompt("Enter the num2");

function sumOfNums(a,b){
    return Number(a)+Number(b);
}
let result=sumOfNums(num1,num2);
console.log(result);

//Demonstrate variable scope by declaring a variable inside and outside a function and try accessing them.

let x=5;

function abc(){
    let y=10;
    console.log(x);
    console.log(y);
}
abc();
console.log(x);
console.log(y); // we can only access within the function

//Build a program that converts temperature from Celsius to Fahrenheit and vice versa using functions.

function celciusToFahrenheit(cel){
    let fahrenheit=(((cel*9))/5 +32).toFixed(1);
    return fahrenheit;
}

function fahrenheitToCelsius(fah){
    let celsius=(((fah-32)*5)/9).toFixed(1);
    return celsius;
}

let fahrenheitConverter=fahrenheitToCelsius(56);
console.log(fahrenheitConverter + " °C");

let celsiusConverter=celciusToFahrenheit(100);
console.log(celsiusConverter + " °F");

//Create an array of numbers and write a program to find the sum of all the elements.

let num=[1,2,5,6,8,7,9];

function findSum(arr){
    let sum=0;
    for(let i=0; i<arr.length;i++){
        sum=sum+arr[i];
    }
    return sum;

}
let total=findSum(num);
console.log(total);

//Use the spread operator to concatenate two arrays.

let dogs=["lucky","rony","tison","alex"];
let cats=["kitty","rosy","whity","pinky"];

let animals=[... dogs,...cats];
console.log(animals);

//Write a function that takes a variable number of arguments and returns their sum using rest parameters.

function sum(...numbers){
    let result=0;

    for(let number of numbers){
        result=result+number;
    }
    return result;
}

console.log(sum(2,7,8,6,4,5,12,25));

//Develop a program that simulates rolling dice with a specified number of sides.

const sides=6;
const numOfRolls=10;

function rollingDice(sides){
    return Math.floor(Math.random()*sides)+1;

}
for(let i=1;i<=numOfRolls;i++){
    let result=rollingDice(sides);
    console.log(`Roll no ${i} : ${result}`);
}

//Build a program that generates a random password with a specified length.

let passwordLength=8;
let passwordChar=[];
for(let i=0; i<passwordLength;i++){
    passwordChar.push(Math.floor(Math.random()*10));
}
let password=passwordChar.join("");
console.log(`Password : ${password}`);

//Write a function that takes another function as a callback and executes it after a certain delay.

function executeWithDelay(callback,delay){
    setTimeout(callback,delay);
}

function myCallback(){
    console.log("calback executed after delay");
}

executeWithDelay(myCallback,3000);

//Use the forEach() method to iterate over an array and print each element to the console.

let fruits=["Apple","Pineapple","Orange","Banana","Mango","Grapes"];

fruits.forEach(printFruits);

function printFruits(element){
    console.log(element);
}

//Create a program that doubles each element in an array using the map() method.

let numbers=[1,2,5,6,8,9];
let doubledNumbers=numbers.map(doubles);
console.log(doubledNumbers);

function doubles(element){
    return element*2;
}

//Write a program that filters out even numbers from an array using the filter() method.

let numbers=[1,2,3,4,5,9,8,7,28,15,14,18,19,16,26,25,27];
let evens=numbers.filter(evenNum);
console.log(evens);

function evenNum(element){
    return element %2 == 0;
}

//Use the reduce() method to calculate the sum of all elements in an array.

let numbers=[12,15,14,16,25,28,36,48,99];
let total=numbers.reduce(sum);
console.log(total);

function sum(accumulator,element){
    return accumulator+element;
}

//Declare a function using a function expression and call it to print a message.

let message=function(){
    console.log("Hello!");
}
message();

//Rewrite a simple function using arrow function syntax.

//simple function
let numbers=[12,13,18,25,29,69,58,78,100,150,500,12,19,14,5];
let bigNum=numbers.filter(function(element){
    return element>80;
})
console.log(bigNum);

//arrow function
let biggerNum=numbers.filter((element) => element>80);
console.log(biggerNum)

