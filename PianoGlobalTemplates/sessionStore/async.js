console.log("Hi from async.js");

let obj = {
  state: "empty",
};

async function fillTheObj(obj) {
  setTimeout(() => {
    obj.state = "refilled";
    return "ready";
  }, 10000);
}

async function filliIffilled(obj) {
  obj.add = "added";
}

async function main(obj) {
  await fillTheObj(obj);
  filliIffilled(obj);
}

console.log(obj);

// function functionOne(_callback) {
//   // do some asynchronus work
//   _callback();
// }

// function functionTwo() {
//   // do some asynchronus work
//   functionOne(() => {
//     console.log("I am a callback");
//   });
// }

// functionTwo();

// let syncObj = {};
// console.log("🚀 ~ file: async.js:4 ~ syncObj", syncObj);

// try {
//   console.log("early", syncObj.added);
// } catch (error) {
//   console.log("zu früh");
// }

// async function slowMe() {
//   setTimeout(() => {
//     syncObj.added = "2000";
//   }, 2000);
// }

// slowMe();

// // setTimeout(() => {
// //   console.log("after 4: ", syncObj);
// // }, 4000);

// async function task1(input) {
//   setTimeout(() => {
//     syncObj.added = input;
//     console.log("async task1: ", syncObj);
//     return syncObj;
//   }, input);
// }
// async function task2(input) {
//   setTimeout(() => {
//     syncObj.added = input;
//     console.log("async task2: ", syncObj);
//   }, input);
// }

// function resolveAfter2Seconds() {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       resolve("resolved");
//     }, 2000);
//   });
// }

// async function asyncCall() {
//   console.log("calling");
//   const result = await resolveAfter2Seconds();
//   console.log(result);
//   // Expected output: "resolved"
// }

// asyncCall();

// function task3(input) {
//   syncObj.added = input;
//   console.log("sync task3", syncObj);
// }

// async function main(input1, input2, input3) {
//   await Promise.all(task1(input1), task2(input2));
//   await task3(input);
// }

// main(2000, 4000, 6000);
