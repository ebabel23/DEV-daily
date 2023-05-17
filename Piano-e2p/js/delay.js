const tick = Date.now();
const log = (v) => console.log(`${v} \n Elapsed: ${Date.now() - tick} ms`);
log("Whatever - will be elapsed");

let myObject = {
  id: 1,
  name: "Christian",
};

//Programm Start

function logObj() {
  console.log(myObject);
}

function timedFn(fn, time) {
  setTimeout(fn, time);
}

let retryFc = 10;
let retryMs = 100;

function updateObj() {
  try {
    if (myObject.hasOwnProperty("greet") == true) {
      console.log("Success at Try: " + retryFc);
      myObject.greet();
    } else {
      throw "No Consent, will retry " + (retryFc - 1) + " more times";
    }
  } catch (error) {
    if (retryFc > 0) {
      console.log(error);

      log("Noch ein Fail: " + retryFc);
      retryFc--;
      timedFn(updateObj, retryMs);
    } else {
      console.log("Es reicht");
    }
  }
}

updateObj();

window.addEventListener("DOMContentLoaded", updateObj, false);

function createObj() {
  let someObj = {stuff: "content"};
  return someObj;
}
