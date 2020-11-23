/*
ASSIGNMENT RULES
- All the answers must be in JavaScript
- The solution must be pushed to the repository and be available for the tutors by the end of the day
- You can ask for tutor's help
- You can google / use StackOverflow BUT we suggest you to use just the material provided
*/

/* EXERCISE 1
Write a function "area" which receives 2 parameters (l1,l2) and calculate the area of the rectangle.

*/

const area = function(I1,I2) {
    return I1*I2
}
console.log(area(5,6))



/* EXERCISE 2
Write a function "crazySum" which receives two given integers. If the two values are same, then returns triple their sum.
*/
const crazySum = function(x,y){

    
    const req = x === y ? 3*(x+y): x+y ;
    return req
    }
    console.log("CrAZYSUM İS",crazySum(4,4))

/* EXERCISE 3
Write a function "crazyDiff" that computes the 
absolute difference between a given number and 19. 
Returns triple their absolute difference if 
the specified
number is greater than 19.
*/

const crazyDiff= function(x){
    if (x>19)
     {
     const result1=Math.abs(x-9)*3;
     return result1;}
    else {
     const result2=Math.abs(x-9)
    return result2}
    }
    console.log(crazyDiff(30))
/* EXERCISE 4
Write a function "boundary" which accept an integer N and returns true if N is within 20 and 100 (included) or equal to 400.
*/

/* WRITE YOUR CODE HERE */
const boundary = function(N){
    if(N>20 && N<=100 || N===400) { return true} } 
    console.log(boundary(100))
    

/* EXERCISE 5
Write a function "strivify" which accepts a string S. Add to S "Strive" in front of a given string, 
if the given string begins with "Strive" then return the original string.
*/

/* WRITE YOUR CODE HERE */

const strivify =function(s){
    const add="Strive";
    const end = s !== ${add} ?  ${add} s: s;
        return end
        }
    console.log(strivify("asff"))
    

/* EXERCISE 6
Write a function "check3and7" which accepts a positive number and check if it is a multiple of 3 or a multiple of 7.
HINT: Module Operator
*/

/* WRITE YOUR CODE HERE */

const check3and7 = function (p) {
    const multiple3 = "It is a multiple o 3";
    const multiple7 = "It is a multiple o 7";
    if (p > 0 && p % 3 === 0) {
      return multiple3;
    } else if (p > 0 && p % 7 === 0) {
      return multiple7;
    } else {
      return false;
    }
  };
  console.log(check3and7(70));
  

/* EXERCISE 7
Write a function "reverseString" to reverse programmatically a given string (es.: Strive => evirtS).
*/

/* WRITE YOUR CODE HERE */
function reverseString(r){

    const r="strive";
const arrayOfLetters = r.split("")
console.log(arrayOfLetters)
const length= arrayOfLetters.length;
console.log(length)
console.log(arrayOfLetters.lastIndexOf(2))

constLastWord= 

}
/* EXERCISE 8
Write a function "upperFirst" to capitalize the first letter of each word of a given string passed as parameter
*/

/* WRITE YOUR CODE HERE */

/* EXERCISE 9
Write a function "cutString" to create a new string without the first and last character of a given string.
*/

/* WRITE YOUR CODE HERE */

/* EXERCISE 10
Write a function "giveMeRandom" which accepts a number n and returns an array containing n random numbers between 0 and 10
*/

/* WRITE YOUR CODE HERE */

/* WHEN YOU ARE FINISHED
Commit and push the code to your personal GitHub repository and share the link to your commit with your tutor.
*/
