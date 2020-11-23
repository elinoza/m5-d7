/*
1)
Create a function to calculate the sum of the two given integers. If the two values are same, then returns triple their sum.
*/
const sum = function (x, y) {
  let result = x === y ? 3 * (x + y) : x + y;
  return;
};

/*
2)
Create a function to check two given numbers and return true if one of the number is 50 or if their sum is 50.
*/
const calc = function (x, y) {
  let result = x > 50 || y > 50 || x + y == 50 ? true : false;
  return result;
};
/*
3)
Create a function to remove a character at the specified position of a given string and return the new string.
*/

const newStr = function (str, y) {
  let res = str.substr(y);
  return res;
};


///from Mirela
///function removeCharacter(str, num) {
    //let str1 = str.substr(0,num)
    //let str2 = str.substr(num)
    ///console.log(str.substr(0,num -1).concat(str.substr(num)))

    // let str = 'Im here'
    // let toArray = str.split("")//[I, m, h, e, r,e]
    // toArray.splice(1,2)
    // let toStrBack = toArray.join("")
    //console.log();


/*
4)
 Create a function to find the largest of three given integers.
*/

const findHighest = function (x, y, z) {
  let firstCompare = y > x ? y : x;
  let result = z > firstCompare ? z : firstCompare;

  return result;
};

/*
5)
Create a function to check whether two numbers are in range 40..60 or in the range 70..100 inclusive.
*/

const findIfInRange = function (x, y) {
  let result =
    (x < 60 && x > 40 && y < 60 && y > 40) ||
    (x <= 100 && x >= 70 && y <= 100 && y >= 70)
      ? true
      : false;

  return result;
};

/*
6) 
Create a function to create a new string of specified copies (positive number) of a given string.
*/
const copyString = function (string, numberofCopy) {
  for (let i = 0; i < numberofCopy; i++) {
    let newString = string.concat(" ", string);
  }
  return newString;
};

/*
7)
Create a function to display the city name if the string begins with "Los" or "New" otherwise return blank.
*/
const displayCityName = function (string) {
  let x = string.slice(0, 3);

  let result = (x === "Los" || x === "New" ? string : "")
  return result;
};


/*
8)
Create a function to calculate the sum of three elements of a given array of integers of length 3.
*/


function sumArray(myArray) {
    let sum=0
  for (i=0; i<myArray.length; i++) {
    sum+=myArray[i]
  }
  return sum
}

/*let myArray = [ 1, 5, 9 ]; 
console.log(sumArray(myArray))*/

/*
9)
Create a function to test whether an array of integers of length 2 contains 1 or a 3. 
*/

function checkArray(myArray) {
let result= (myArray[0] === 1 || myArray[0]=== 3 || myArray[1] === 1 || myArray[1]=== 3? true : false)
return result
}




/*
10)Use of indexOf(1)
Create a function to test whether an array of integers of length 2 does not contain 1 or a 3
*/



/*
11)
Create a function to find the longest string from a given array of strings.
*/

function findtheLongest(myArray) {
    let longth=0;
  for (i=0; i<myArray.length; i++) {  
    if (myArray[i].length>longth) { 
        longth=myArray[i].length
    }
    
  }
  return longth
}




/*
12)
Create a function to find the types of a given angle.
Types of angles:
    Acute angle: An angle between 0 and 90 degrees.
    Right angle: An 90 degree angle.
    btuse angle: An angle between 90 and 180 degrees.
    Straight angle: A 180 degree angle.
    */

   function findtheLongest(myArray) {
    let longth=0;
  
    if (myAngle<90 && myAngle>0  ) { 
       let type= "This is  Acute Angle" 
    }
     else if ( myAngle===90   ){
        let type= "This is  Right Angle" 
    }
    else if ( myAngle<180 && myAngle>90  ){
        let type= "This is  btuse Angle" 
     }
     else if ( myAngle===180   ){
        let type= "This is  Straight Angle" 
     }     
  
  return type
}


   /*
13)
Create a function to find the index of the greatest element of a given array of integers
  */
 function findtheGreatestIndex(myArray) {
    let greatest=myArray[0];
    let index=0
  for (i=0; i<myArray.length; i++) {  
    if (myArray[i]>greatest) { 
        greatest=myArray[i]
        index=i
    }
    
  }
  console.log(index,greatest)
  return  index
}

   /*
14)
Create a function to get the largest even number from an array of integers.???
*/
function findthelargest(myArray) {
    let largest=0;
        for (let i=0; i<myArray.length; i++){
              if (myArray[i] %  2===0 && myArray[i]>largest) { 
              largest=myArray[i] 
              }               
          }
 
  return  largest
}



/*let Array = [ 1, 5, 9,60,43,21,79,50,45,64,23,24 ] 
console.log(findthelargest(Array))

   /*
15)
Create a function to check two given numbers and return true if one of the number is 50 or if their sum is 50.
*/

   /*
16)
Create a function to check from two given integers, whether one is positive and another one is negative.
*/
const posAndNeg = function (x, y) {
    let result = x > 0 && y < 0 ||  x < 0 &&  y > 0 ? true : false;
    return result;
  };

/*
17)
Create a function to create new string with first 3 characters
 are in lower case and the others in upper case. If the string length is less than 3 convert all the characters in upper case. 
*/


  const newStr2 = function (str) {

    if (str.length>2){
        let first = str.substr(0,3).toLowerCase()
        let second=str.substr(3).toUpperCase()
        
        return first.concat(second)
    }
    else {
    
     return  str.toUpperCase()
    }
    
  }

  
/*
18)
Create a function to calculate the sum of the two given integers, If the sum is in the range 50..80 return 65 other wise return 80.
*/
const ifRangeCalc = function (x, y) {
    let result =80 > (x+y) && (x+y)> 50 ? 65 : 80;
    return result;
  }
/*
19)
Create a function to convert a number to a string, the contents of which depend on the number's factors. Follow next example:

If the number has 3 as a factor, output 'Diego'.
If the number has 5 as a factor, output 'Riccardo'.
If the number has 7 as a factor, output 'Stefano'.
If the number does not have 3, 5, or 7 as a factor, just pass the number's digits straight through.
Examples
28's factors çarpan) are 1, 2, 4, 7, 14, 28.
this would be a simple "Stefano".
30's factors are 1, 2, 3, 5, 6, 10, 15, 30.
this would be a "DiegoRiccardo".
34 has four factors: 1, 2, 17, and 34.
this would be "34".
*/

const numberToString= function (number) {
  let results=[]

  if (number % 3===0){
      results.push("Diego")
      
  }
   if(number % 5===0) {
  
   results.push("Riccardo")
  }
   if(number % 7===0) {
  
   results.push("Stefano")
  }
 
 
  if(results.length ===0){
  results= number.toString()
  }
 else {
   results=results.join("")
}

 return results
}




/*
20)
Create a function that given a phrase returns its acronym, like British Broadcasting Corporation returns BBC
*/

function makeAcronym(string) {
  let acronym=[]
   let array=string.split(" ")
   for(let i=0;i<array.length ;i++) {
    let lettersArray=array[i].split("")
    acronym.push(lettersArray[0])
    }   
   
  return  acronym.join("")
}

