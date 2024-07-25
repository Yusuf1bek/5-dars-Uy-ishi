// task -1
// const userList = [
//     {
//         id:1,
//         name:"Botir",
//         age:20,
//         hobby:"Football"
//     },
//     {
//         id:2,
//         name:"Anvar",
//         age:22,
//         hobby:"Basketball"
//     },
//     {
//         id:3,
//         name:"Shohruh",
//         age:20,
//         hobby:"Basketball"
//     },
//     {
//         id:3,
//         name:"Akram",
//         age:20,
//         hobby:"Football"
//     },
// ]
// function collectNames(arr){
//     let res =[]
//     for(let user of arr){
//         if(user.age > 20){
//             res.push(user.name);
//         }
//     }
//     return res
// }
// let res = collectNames(userList)
// console.log(res);
// task -1

// task -3
// let numbers = [22,112,3,4,222,123,43]


// function changeArr(arr){
//     let max = arr [0]
//     for(let num of arr){
//         if(num >= max){
//             max = max 
//         }
//     }
//     arr.unshift(max)
//     return arr;
// }
// const res = changeArr(numbers)
// console.log(res);
// task -3

// task -4
// let size = prompt("Size kiriting!")
// let userList = []
// function fillNamesInArr(arr){
//     for(let i = 0; i < size ; i++){
//         let enterName = prompt(`${i + 1} - ism kiriting`)
//         arr.push(enterName)
//     }
//     return arr
// }
// const filledNameList = fillNamesInArr(userList)

// let findName = prompt("Siz topmoqchi bolgan ismni kiriting")

// function findNameFunc(arr,searchName){
//     let isMavjud = 0 
//     for(let userName of arr){
//         if(userName != searchName){
//             isMavjud++
//         }
//     }
//     if(isMavjud > 0){
//         arr.push(searchName)
//     }
//     return arr
// }
// const lastRes = findNameFunc(filledNameList, findName)
// console.log(lastRes);
// task -4

// task -5
// let userNum1 = prompt("Birinchi son kiriting"); -0
// let userNum2 = prompt("Ikkinchi son kiriting"); 

// function reversArr(userNum1, userNum2) { -0 
//     let arr = [];
//     if (userNum1 <= userNum2) {
//         for (let i = userNum2; i >= userNum1; i--) {
//             arr.push(i);
//         }
//     } else {
//         for (let i = userNum1; i >= userNum2; i--) {
//             arr.push(i);
//         }
//     }
//     return arr;
// }
// let reversedArray = reversArr(userNum1, userNum2);
// console.log(reversedArray);
// task -5

// task -6
// let firstArr = [10,10,15,22,];

// function numArr(arr) {
//     let total = 0;

//     for (let i = 0; i < arr.length; i++) {
//         if (typeof arr[i] === 'number') {
//             total += arr[i];
//         }
//     }
//     return total;
// }

// let res = numArr(firstArr);
// console.log(res); 
// task -6

// task -7
// let firstArr = [1, -2 , 3, -4, 5, -6 ];

// function arrPositiveNumber(arr) {
//     let numberPositive = [];

//     for (let i = 0; i < arr.length; i++) {
//         if (typeof arr[i] === 'number' && arr[i] > 0) {
//             numberPositive.push(arr[i]);
//         }
//     }

//     return numberPositive;
// }


// let res = arrPositiveNumber(firstArr);
// console.log(res); 
// task -7

// task -8
// let arr = ["5", 2, "4",];

// function firstArr(arr) {
//     let changeArr = [];
//     for (let i = 0; i < arr.length; i++) {
//         let sum = arr[i];

//         if (typeof sum === 'string' && !isNaN(sum)) {
//             changeArr.push(Number(sum));
//         } else {
//             changeArr.push(sum);
//         }
//     }

//     return changeArr;
// }

// let res = firstArr(arr);
// console.log(res); 
// task -8

// // task -9
// const userList = [
//     {
//         name:"Yusufbek",
//         age:19,
//         status:false
//     },
//     {
//         name:"Komiljon",
//         age:22,
//         status:false
//     },
//     {
//         name:"Hojiakbar",
//         age:19,
//         status:true
//     },
//     {
//         name:"Shahboz aka",
//         age:19,
//         status:false
//     },
// ]
//  let user1 = userList[0].status
//  function collectNames(arr){
//     for(let user of arr){
//         if(user.status == user1){
//             console.log(user.name);
//         }
//     }
//  }
//  let res = collectNames(userList)
// // task -9

