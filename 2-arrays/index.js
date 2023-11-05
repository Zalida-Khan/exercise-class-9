/**
 * Arrays
 * 
 * always use camel case where needed
 * 
 */

/**
 * Question 5 - concatenate two different arrays using the .concat() method.
 *
 * Initialise a variable called `fast food` and list the items french fries, sandwich, pizza inside this array.
 * Initialise a variable called `healthy food` and list the items avocado, fish, mango inside this array.
 * Then concatenate the two arrays using .concat() method into a variable called `food`.
 * And then, use console.log() to display the 'food' array.
 * Finally, add a single line comment to show what is displayed will be displayed in the terminal
 */

fastFood = ["french fries", "sandwich", "pizza"],
healthyFood = ["avocado", "fish", "mango"]

var food = fastFood.concat(healthyFood);

console.log(food); // [ 'french fries', 'sandwich', 'pizza', 'avocado', 'fish', 'mango' ]


/**
* Question 6 - create a 2 dimensions array that is 2-by-4. Grab some values out of this array to create a sentence using concatenation.
* Initialise the variable `science marks` to a 2-Dimensional array containing the values below:
*
*         column[0]  column[1]  column[2]          column[3]
* Row 1   Jane       55         three bonus marks  A
* Row 2   Kate       45         five bonus marks   B
* then use console.table() to showcase the information in a table.
* then based on the values stored in the schedule 2D array, console log out the following sentence (using concatenation):
* Jane got 55 and three bonus marks, which got her an A on her science test.
*
*/

var scienceMarks = [
    ["Jane", 55, "three bonus marks", "A"],
    ["Kate", 45, "five bonus marks", "B"]
]

var nameColumn1 = scienceMarks[0][0];
var markColumn2 = scienceMarks[0][1];
var bonusColumn3 = scienceMarks[0][2];
var letterGradecolumn4 = scienceMarks[0][3];

console.table(scienceMarks);

var sentence = `${nameColumn1} got ${markColumn2} and ${bonusColumn3}, which got her an ${letterGradecolumn4} on her science test.`;
console.log(sentence);

