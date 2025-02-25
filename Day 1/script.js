// let phoneNumber = null ;
// console.log("Phone Number : " , phoneNumber);
// console.log("Type of Phone Number : " , typeof phoneNumber);

// if(!phoneNumber){
//      console.log("null can't be exist");  
// }

// let uniqueId = Symbol("id");
// console.log("value of uId : " , uniqueId);
// console.log("Type of uId : " , typeof uniqueId);

// let person = {name : "Nimal" , age : 23};
// console.log("value of person : " , person);
// console.log("Type of person : " , typeof person);

// console.log("value of person.name : " , person.name);
// console.log("Type of person.name : " , typeof person.name);

// let myArray = [1,2,3,4,5];
// console.log("value of myArray : " , myArray);
// console.log("Type of myArray : " , typeof myArray);

// function greet(name){
//      return `Hello ${name}`;
// }
// console.log("value of greet : " , greet("Darshana"));
// console.log("Type of greet : " , typeof greet);

// const greeting = (name)=>{
//      return `Hi . Welcome ${name}`;
// }

// console.log(greeting("Sumanasiri"));

// let person = {
//      name : "Nimal" , 
//      age : 23 , 
//      data : {
//           sId : "s19004541", 
//           token : "asd123",
//           createdAt : "2025.03.05",
//           images : ["213123234","3243465456","567675634"]
//      }
// };

// const {name, age} = person
// console.log(`name : ${name} , age : ${age}`);

// const {sId , token} = person.data;
// console.log(`sId : ${sId} , token : ${token}`);


//    /* rest and spread*/
// let myArray = [1,2,3,4,5];
// let myArrayExtend = [...myArray, 6,7];

// console.log(myArray);
// console.log(myArrayExtend);

//  /*optional chaining*/ 
// let person = {
//      name : "Nimal" , 
//      age : 23 , 
//      data : {
//           sId : "s19004541", 
//           token : "asd123",
//           createdAt : "2025.03.05",
//           images : ["213123234","3243465456","567675634"]
//      }
// };

// console.log(person?.data?.email ?? "no data"); //nullish colletion

//   /*DOM manipulation*/

const startTime = performance.now();

//set local storage
localStorage.setItem("username" , "Darshana Chaturanga");

//get local storage
console.log("user name is " + localStorage.getItem("username"));

document.addEventListener("DOMContentLoaded", (event) => {

     const endTime = performance.now();
     const loadTime = (endTime - startTime).toFixed(2);

     console.log(`DOM load time : ${loadTime} ms`);
     console.log(event);

     // DOM elements
     const mainTitle = document.querySelector("#main-title");
     console.log(mainTitle);

     const btn = document.querySelector("#btn");
     btn.addEventListener("click", ()=>{
          //change the main title
          mainTitle.textContent = "Changed Title";           
     });
});








