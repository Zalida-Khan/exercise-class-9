/**
 * Arrays
 * 
 * always use camel case where needed
 * 
 */

/**
 * Question 1
 * 
 * initialise an empty array to the variable `classroom supplies`
 * Add the following items to the array in this order one by one base on the following positions:
 * pen, paper, desk, computer
 * console log out classroom supplies. 
 * Write a single line comment as to what will be displayed
 * then sort the array using .sort() method
 * then console log the array.
 * Write a single line comment as to what will be displayed
 * then add a single line comment to show what is displayed in the terminal
 */

var classroomSupplies = [];

classroomSupplies[0] = "pen";
classroomSupplies[1] = "paper";
classroomSupplies[2] = "desk";
classroomSupplies[3] = "computer";

console.log(classroomSupplies); // [ 'pen', 'paper', 'desk', 'computer' ]

classroomSupplies.sort(); 
console.log(classroomSupplies); // [ 'computer', 'desk', 'paper', 'pen' ]


/**
 * Question 2
 * 
 * initialise an empty array to the variable `travel places`
 * Add the following items to the array one at a time:
 * Toronto, New York, Australia, Spain
 * console log out travel places
 * add a single line comment as to what the output will be
 */

var travelPlaces = [];

travelPlaces[0] = "Toronto";
travelPlaces[1] = "New York";
travelPlaces[2] = "Australia";
travelPlaces[3] = "Spain";

console.log(travelPlaces); // [ 'Toronto', 'New York', 'Australia', 'Spain' ]


/**
 * Question 3
 * 
 * initialise the variable called `baking recipies` to an array containing the values:
 * brownies, cookies, cakes, tarts
 * Then remove the last item in the array using the pop method.
 * Then console log out the baking recipies. Write a single line comment as to what will be displayed.
 */

var bakingRecipies = ["brownies", "cookies", "cakes", "tarts"];

bakingRecipies.pop();
console.log(bakingRecipies); // [ 'brownies', 'cookies', 'cakes' ]


/**
 * Question 4
 * 
 * initialise the variable `schedule` to a 2-Dimensional array containing the values below:
 * 
 *          column[0]   column[1]                           column[2]
 * Row 1    COMP 1170   Fundamentals Frontend Web Tech      3.0
 * Row 2    MDIA 1055   Vector Graphics                     3.0
 * Row 3    MDIA 1106   Design                              3.0
 * Row 4    MDIA 1620   Basic Systems Operations and Prog   3.0
 * 
 * then use console.table() to showcase the information in a table.
 * 
 * Then based on the values stored in the schedule 2D array, console log out the following sentence (use backticks):
 * I am taking _MDIA 1106_, _Design_ that is worth _3.0_ credits.
 * 
 */

var schedule = [
    ["COMP 1170", "Fundamentals Frontend Web Tech", "3.0"],
    ["MDIA 1055", "Vector Graphics", "3.0"],
    ["MDIA 1106", "Design", "3.0"],
    ["MDIA 1620", "Basic Systems Operations and Prog", "3.0"]
]

console.table(schedule);
console.log(`I am taking _${schedule[2][0]}_, _${schedule[2][1]}_ that is worth _${schedule[2][2]}_ credits.`);