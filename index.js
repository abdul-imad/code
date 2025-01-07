// const add = (a, b, callback) => {
//   let c = a + b;
//   setTimeout(() => {
//     return callback(c);
//   }, 2000);
// };
// add(2, 3, (answer) => {
//   console.log(answer);
// });

// async function addWithPromise(a, b) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve(a + b);
//     }, 2000);
//   });
// }

// const c = async () => {
//   await addWithPromise(2, 3);
// };
// console.log(c());


// var a = 100;
//  const fast = ()  =>{
//   var a = 10
//   console.log(a)
//   var a = 1000;
//   console.log(a);
// };

// fast()
// console.log(this);


// let a = 10;
// {
//   let a = 100;
//   console.log(a);

// }

// console.log(a);

if (4 > 0.5) {
  const x = 1;
} else {
  const x = 2;
}
// console.log(x);

// function makeFunc() {
//   const name = "Mozilla";
//   function displayName() {
//     console.log(name);
//   }
//   return displayName;
// }

// const myFunc = makeFunc();
// console.log(myFunc);



// function makeAdder(x) {
//   return function (y) {
//     return x + y;
//   };
// }

// const add5 = makeAdder(5);
// const add10 = makeAdder(10);

// console.log(add5); // 7
// console.log(add10); // 12

setTimeout(() => {
  console.log("first timeout");
  setTimeout(() => {
    console.log("second timeout");
  }, 1000);
}, 2000);

function addTwoNum(a,b){
  console.log(a+b);
}

addTwoNum(2,4)