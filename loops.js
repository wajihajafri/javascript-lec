//for loops
// for(let i=0; i<10; i=i+1){

//       console.log(i)
// }

// while loops
// let i =0;
//     while(i<20){
//        i=i+1
//         console.log(i)
//     }

//map
const map1 = new Map();
map1.set('a','1');
map1.set('b','2');

//console.log(map1.get('b'))

const months =['jan','feb','march','april']

const myfavAnimal = ["cat","dog","giraffe","red monkey"]
myfavAnimal.splice(0,2,"red monkey")
//console.log(myfavAnimal);

const array1 = [];

//console.log(array1.unshift(4, 5));

//console.log(array1);

// function addvalue(a,b){
//     console.log(a+b)
// }
// addvalue (14,7)

//ES5 and ES6
//  const newadition = (a,b)  => console.log(a+b)
//  newadition(97,82)

// string array number 5 unique method/property

//string: charAt() method- the charAt() method returns the characters at a specified index in a string
const sentence = "my name is abc"
const index = 4;
//console.log(`the character at index ${index} is ${sentence.charAt(index)}`)

// concat() method: combines two or more strings into one
str1 ='hello';
str2 ='world';
// console.log(str1.concat(' ',str2));
// console.log(str2.concat(',',str1));

//repeat() method: repeat method is used to create new string by repeating an existing string a specified num of times
const mood ="happy"
//console.log(`I feel ${mood.repeat(3)}`);

//substring method: it exract character from a string between two specified indices
const str = "hello"
console.log(str.substring(1,3));

