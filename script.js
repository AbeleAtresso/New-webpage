
// JavaScript goes here. 
// This is for class 6 lab. 


var userName = prompt('please enter your first name.'); 

alert('Hello, ' + userName + ' click OK to proceed.');

var hourNow = prompt('What time is it, friend? Use Military time.'); 

var greeting; 

if(hourNow >= 0 && hourNow < 6){ 
 greeting = ' Good Morning, ' + userName;
} else if (hourNow >= 6 && hourNow <= 12){
  greeting = ' Good afternoon ' + userName; 
} else if(hourNow >= 12 && hourNow <= 24){
  greeting = ' Good Evening ' + userName; 
} else {
  'Something went wrong!';
}

document.write(`<h1> style="color:blue"> + greeting + </h1`); 

/* 
This script is displays a greeting to the user based on the users input. */
