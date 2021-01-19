//DECLARE VARIABLE STRINGS
var firstName = "Khaled";
var lastname = "Naleem";
//________________________________________________________________________________________________________________________
//ESCAPING LITERAL QUOTES IN STRINGS
var myStr = "I am a \"double quoted\" string inside \"double quotes\"";
console.log(myStr)
//___________________________________________________________________________________________________________________________
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
//_____________________________________________________________________________________________________________________
 //CONCATENATE STRINGS WITH THE PLUS OPERATOR
 var ourStr = "I come first. " + "I come second.";
 console.log(ourStr)
//_____________________________________________________________________________________________________________________
 //CONCATENATE STRINGS WITH THE PLUS EQUALS OPERATOR
 var ourStr2 = "I come first. ";
 ourStr2 += "I come second.";

 console.log(ourStr2)
//_________________________________________________________________________________________________________________
 //CONSTRUCTING STRINGS WITH VARIABLES
var myName = "Khaled";
var myStr3 = "Hello, my name is " + myName + ", how are you?";

console.log(myStr3)
//___________________________________________________________________________________________________________________
//APPENDING VARIABLES TO STRINGS
var anAdjective = "awesome!";
var ourStr3 = "I am ";
ourStr3 += anAdjective;

console.log(ourStr3)
//____________________________________________________________________________________________________________________
//FIND LENGTH OF THE STRING
var firstNameLength = 0;
var firstName1 = "Khaled";

firstNameLength = firstName1.length;
console.log(firstNameLength)
//________________________________________________________________________________________________________________
//BRACKET NOTATION TO FIND FIRST CHARACTER IN STRING
var firstLetterofFirstName = "";
var FirstName2 = "Lee";

firstLetterofFirstName = FirstName2[0];
console.log(firstLetterofFirstName)
//_________________________________________________________________________________________________________________
//STRING IMMUTABILITY
var myStr4 = "jello World";

//myStr4[0] = "h"; //THIS LINE OF CODE WILL RETURN AN ERROR SINCE YOU CAN'T CHANGE AN INDIVIDUAL CHARACTER IN A STRRING
myStr4 = "hello world!"; //YOU CAN CHANGE THE WHOLE VARIABLE AND NOT INDIVIDUAL CHARACTERS FROM THE VARIABLE
//_______________________________________________________________________________________________________________________
//BRACKET NOTATION TO FIND THE LAST CHARACTER IN A STRING
var lastName1 = "William";
var lastLetterOfLastName = lastName1[lastName1.length - 1];

console.log(lastLetterOfLastName)
//______________________________________________________________________________________________________________________________
//BRACKET NOTATION TO FIND Nth-TO-LAST CHARACTER IN A STRING
var lastname2 = "Marcus";
var thirdToLastLetterofLastName = lastname2[lastname2.length - 3];

console.log(thirdToLastLetterofLastName)
//______________________________________________________________________________________________________________________________________