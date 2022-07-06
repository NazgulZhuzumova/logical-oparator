/*const password = prompt("Enter your password");
if(password.length >= 6 && password.indexOf(' ') === -1){
    console.log("VALID PASSWORD!")
}else{
    console.log("TRY AGAIN!")
}*/
/* const firstName = prompt("Enter your name");
 if (firstName.length >=7){
    console.log("Hello darling, nice to meet you:)")
 }else{
     console.log("Please try again")
 }
// true || false = true , true|| true = true, false||true =true false||false = false

/* 
 0 -5 free
 5-10 $10
 10-65 $20
 65+ free
*/ 
// && rund before || or has priority always 
/*const age = 4;
if (age >= 0 && age < 5 || age >= 65){
 console.log("Free");
}else if( age >= 5 && age < 10){
 console.log("$10");
}else if(age >= 10 && age < 65){
 console.log("$20");
}else {
    console.log("invalid age!");
}*/
// not - logical operator
/*const  firstName = prompt("enter your first name");
if(!firstName){
    firstName = prompt("Try again!");
}*/
const age = 9;
if (!(age >= 0 && age < 5 || age >= 65)) {
    console.log("You need pay a fee to enter!!!");
}