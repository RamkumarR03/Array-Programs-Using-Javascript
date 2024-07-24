
//First Question...

// let num;
// for(num=1;num<=100;num++){
// if(num%3==0 && num%5==0){
//     document.write("FIZZBUZZ");
// }
// else if(num%5==0){
//     document.write("BUZZ");
// }
// else if(num%3==0){
//     document.write("FIZZ");
// }
// }

//Second Question....

//  let str="madam";
// let str1=str.split("").reverse().join("");
// if(str==str1){
//     console.log("Palindrome");  
// }
// else{
//     console.log("Not Palindrome");
// }



//third Question....

// let arr1=[1,2,3,4,5];
// let arr2=arr1.sort();
// {
// document.write("Largest value is :"+ arr2[arr2.length-1]);
// }

// 4th Questions....

// function countCharacterOccurences(str){
//     const charCount={};
//     for(let i=0;i<str.length;i++){
//     const char=str[i];
//     if(charCount[char]){
//         charCount[char]++;
//     }
//     else{
//         charCount[char]=1;
//     }
//     }
//     return charCount;
// }
// const result=console.log(countCharacterOccurences("Hello"));
// console.log(result);



//5th Question...

// function longeststr(str){
//     let max = 0;
//     let longestword = "";
//     let words = str.split(" ");
//     for(let i=0; i<words.length; i++){
//         if(words[i].length > max){
//             max = words[i].length;
//             longestword = words[i];
//         }
//     }    
//     console.log(longestword)
// }
// let str=("I am Ram");
// console.log(longeststr(str));


// 6th Question....

// function factorial(number){
//         if(number === 0){
//             return 1;
//         }
//         else{
//             return number * factorial(number-1);
//         }       
//     }
//     console.log(factorial(3));


// const person={
//     fname:"Ram",
//     lname:"R",
//     name:function(){
//   console.log(this.fname + this.lname);
//     }
// }
// person.name()


//  ARRAY Questions.........


//1. Array Creation and Initialization

// let fruits=["apple","orange","Mango"];
// document.write(fruits);

//2.Array Manipulation

//push.. 

// let arr=[1,2,3,4,5];
// arr.push(6);
// console.log(arr);

//3 unshift...

// let arr1=[10,20,30];
// arr1.unshift(40);
// console.log(arr1);

// pop()...

// let arr2=[1,2,3,4];
// arr2.pop();
// console.log(arr2);

// shift()...

// let num=[10,20,30,40];
// num.shift(30);
// console.log("shifting the num is :"+num);

//4 Array Searching

//INdexOf()...

// let num1=[1,2,3,4,5];
// num1.indexOf();
// console.log("indexOf num1 is :" + num1.indexOf(3));

// 5  find()...
// let num2=[10,20,30,40];
//  num2.find(30);
//  console.log(num2.find(30));

//5.Array Filtering....
// let num3=[31,35,33,34,32,36];
// let evenNumber=num3.filter(function(num3){
//     return num3%2==0;
// });
// console.log(evenNumber);

// 6.Array Sorting...
// let num4=[31,35,33,34];
// num4.sort();
// console.log("Sorting Arrays is:"+num4);


// 7.Reverse number....

// let str="madam";
// let str1=str.split("").reverse().join("");
// if(str==str1){
//     console.log("Palindrome");  
// }
// else{
//     console.log("Not Palindrome");
// }

//8)....

// let arr1=[10,20,30];
// arr1.unshift(40);
// console.log(arr1);


// let nu=10;
// let sum=0;
// for(i=1;i<=nu*2;i+=2){
//     sum=sum+i;
//     {
//     console.log(sum);
//     }
// }

// Array joining and splitting...
// let arr=["Ram","Naveen","Ramu"];
// let str=arr.join("R R");
// let arr2=arr.slice(0,2);
// let arr3=str.split(" ");
// console.log(str);
// console.log(arr2);
// console.log(arr3);

// //Array sorting...
// let num=[10,0.3,29,60];
// console.log(num.sort());


//24.07.2024

//1) Array Destructing...
let array=[1,2,3,4,5];
let [first,third]=array;
console.log(first);
console.log(third);
let [Second,...rest]=array;
console.log(Second);
console.log(rest);

//2)Array Spreading...
let array1=['Ram','Ramu','Sathish'];
let array2=[...array1];
console.log(array2);

//3)Array maximum ...
let array3=[10,20,30,60,50];
let max=Math.max(...array3);
console.log(max);
//Array minimum...
let mini=[20,30,10,40];
let min=Math.min(...mini);
console.log(min);

//4)Flattening Array...
let  arr=[1,2,[3,4,5]];               //Concatenated with all sub array..........
console.log(arr.flat());

//5)Checking Array elements...
let fruits=['Apple',"Orange",'PineApple'];
let fruit=fruits.includes('Apple');
console.log(fruit);
