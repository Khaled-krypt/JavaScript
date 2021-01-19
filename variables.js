//CALULATING THE REMAINDER OF 2 INTEGERS
var remainder;
remainder = 11 % 3;
console.log(remainder)
_________________________________________________________________________________________________________________________
//COMPOUND ASSIGNMENT WITH AUGMENTED ADDITION, SUBTRACTION, MULTIPLICATION, ETC
var a = 5;
var b = 6;
var c = 7;

a += 5; //which is equivalent to "a = a + 5;"
b += 6;
c += 7; 

console.log(a, b, c)
___________________________________________________________________________________________________________________________
//DECLARE VARIABLE STRINGS
var firstName = "Khaled";
var lastname = "Naleem";
________________________________________________________________________________________________________________________
//ESCAPING LITERAL QUOTES IN STRINGS
var myStr = "I am a \"double quoted\" string inside \"double quotes\"";
console.log(myStr)
___________________________________________________________________________________________________________________________
//___________________________________________________________________________
/*** CHARACTERS
 *  \' = single quote
 *  \" = double quote
 *  \\ = backlash
 *  \n = newline
 *  \r = carriage return
 *  \t = tab
 *  \b= backspace
 *  \f = form feed 
 */

 var myStr2 = "FirstLine\n\t\\SecondLine\nThirdLine";
 console.log(myStr2)
_____________________________________________________________________________________________________________________
 //CONCATENATE STRINGS WITH THE PLUS OPERATOR
 var ourStr = "I come first. " + "I come second.";
 console.log(ourStr)
_____________________________________________________________________________________________________________________
 //CONCATENATE STRINGS WITH THE PLUS EQUALS OPERATOR
 var ourStr2 = "I come first. ";
 ourStr2 += "I come second.";

 console.log(ourStr2)
______________________________________________________________________________________________________________________
 //CONSTRUCTING STRINGS WITH VARIABLES
var myName = "Khaled";
var myStr3 = "Hello, my name is " + myName + ", how are you?";

console.log(myStr3)
________________________________________________________________________________________________________________________
//APPENDING VARIABLES TO STRINGS
var anAdjective = "awesome!";
var ourStr3 = "I am ";
ourStr3 += anAdjective;

console.log(ourStr3)
___________________________________________________________________________________________________________________________
//FIND LENGTH OF THE STRING
var firstNameLength = 0;
var firstName1 = "Khaled";

firstNameLength = firstName1.length;
console.log(firstNameLength)

___________________________________________________________________________________________________________________________
//BRACKET NOTATION TO FIND FIRST CHARACTER IN STRING






