// Immediately Invoked Function Expression

//context is lets say we want a DB Connecton successfully when ever we open our website thats the first thing which you expect,


// question is how?

/* 
we can think of a simple solution descussed below
*/

function start(){
    console.log("DB connected successfully");
    
};

start(); // DB connected successfully

/* 
does it work yes,
is it good practice? NOooooOOOOOO

but y?

global score might interfere and may pollute this function

OK!

what can be done?

another method
*/

(function startTwo() { // also called as named iife
    console.log("DB Connected for second function")
})();

// This works simple logic....
/*
but dont ever think of

function startTwo() {
    console.log("DB Connected for second function")
}()

so can we do it using arrow function?

YESSSSSSSSSS
*/

(() => { //simple iife
    console.log("DB Connected for the 3rd time")
})() // error not because we cant write like this its just because we need one ";" after the previous function.

/* so now the output is:
DB connected successfully
DB Connected for second function
DB Connected for the 3rd time
*/