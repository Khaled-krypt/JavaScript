//STORE MULTIPLE VALUES WITH ARRAYS
var ourArray = ["Jack", 23];

//___________________________________________________________________________________________________________
//NESTED ARRAYS
var myArray = [["This world", 102354687982], ["everything", 1010010]];

//___________________________________________________________________________________________________________
//ACCESS ARRAY DATA WITH INDEXES
var thisArray = [10,20,30];
var thatArray = thisArray[2]; //prints the 3rd value from the thisArray variable
console.log(thatArray);
//___________________________________________________________________________________________________________
//MODIFY ARRAY DATA WITH INDEXES
var demoArray = [10,20,30,40];
demoArray[3] = 56; //our array now equals [10,20,30,56]

console.log(demoArray);
//___________________________________________________________________________________________________________
//ACCESS MULTI-DIMENSIONAL ARRAYS WITH INDEXES
var exArray = [[1,2,3], [4,5,6], [9,8,7], [12,14,16], [15,18,21]];
var myData = exArray[3][2] //myData  now equals to the second character from the 3rd nested sub array. mydata = 16

console.log(myData);
//___________________________________________________________________________________________________________
//MANIPULATE ARRAYS WITH push() - add an element at the end of an array
var kArray = ["Lee", "L", "Dog"];
kArray.push(["Sad", "Depressed"]); // kArray now equals ["Lee", "L", "Dog", ["Sad", "Depressed"]]
//___________________________________________________________________________________________________________
//MANIPULATE ARRAYS WITH pop() - remove the last element in an array
var popArray = [["Lee", 19], ["dog", 3]];
var removedFromPopArray = popArray.pop(); //the second array will be removed from popArray
console.log(removedFromPopArray);
//___________________________________________________________________________________________________________
//MANIPULATE ARRAYS WITH SHIFT() - remove the first element in an array
var shiftArray = [1, 2, 3, [4,5,6]];
var removedFromShiftArray = shiftArray.shift();
console.log(removedFromShiftArray);
//___________________________________________________________________________________________________________
//MANIPULATE ARRAYS WITH UNSHIFT() - add an element at the begiinning of an array
var uArray = ["Lee", 19];
uArray.shift(); // uArray now equals to [19]
uArray.unshift("Williams"); // uArray  now equals to ["Williams", 19]
//___________________________________________________________________________________________________________
