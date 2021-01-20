//WRITING REUSABLE CODE WITH FUNCTIONS
function ourReusableFunction() {
    console.log("Hello");
}

ourReusableFunction();
//___________________________________________________________________________________________________________
//PASSING VALUES TO FUNCTIONS WITH ARGUMENTS
function ourFunctionWithArgs(x, y) {
    console.log(x - y);
}
ourFunctionWithArgs(20, 8);
//___________________________________________________________________________________________________________
//GLOBAL SCOPE FUNCTIONS
var kGlobal = 20; //This is a global scope variable

function fun1() {
    sGlobal = 10; // Since we didn't declare the word "var" before the variable name, this variable will be available outside this function too.
}

function fun2() {
    var output = "";
    if(typeof kGlobal != "undefined") {
        output += "kGlobal:" + kGlobal;
    }
    if (typeof sGlobal != "undefined") {
        output += "sGlobal: " + sGlobal;
    }
    console.log(output);
}
fun1();
fun2();
//___________________________________________________________________________________________________________
//LOCAL SCOPE AND FUNCTIONS
function myLocalScope() {
    var myVar = 5; //Since this variable has been declared within this function, it cannot be accessed outside this function
    console.log(myVar);
}
myLocalScope();

//console.log(myVar); - This line will return an error.
//___________________________________________________________________________________________________________
//GLOBAL vs LOCAL SCOPE IN FUNCTIONS
var wear = "t-shirt"; // This is a global variable

function myOutfit() {
    var wear = "Sweater"; //This becomes a local variable which will be available only within this function.

    return wear; // This statement will return the local variable which overrode the global variable "wear"
}
console.log(myOutfit());
console.log(wear); //This will print the global variable value
//___________________________________________________________________________________________________________
//RETURN A VALUE FROM A FUNCTION WITH RETURN
function minusEight(num) {
    return num - 8
}

console.log(minusEight(20));
//___________________________________________________________________________________________________________
//UNDERSTANDING UNDEFINED VALUE RETURNED FROM A FUNCTION
var sum = 2;
function addThree() {
    sum = sum + 5; // Since we didn't define a return value, the return value will be undefined.
}
//___________________________________________________________________________________________________________
//ASSIGNMENT WITH A RETURNED VALUE
