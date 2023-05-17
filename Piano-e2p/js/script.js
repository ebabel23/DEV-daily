const tick = Date.now();
const log = (v) => console.log(`${v} \n Elapsed: ${Date.now() - tick} ms`);
log("Whatever - will be elapsed");

let output = (input, arg) => {
  log("I said " + input + " " + arg);
};

let delaydOutput2000 = (input, arg) => {
  setTimeout(output, 2000, input, arg);
};
let delaydOutput4000 = (input, arg) => {
  setTimeout(output, 4000, input, arg);
};

let desyncOp = async (input) => {
  await setTimeout(output, 2000, input, "2000ms");
  await setTimeout(output, 3000, input, "3000ms");
  await setTimeout(output, 4000, input, "4000ms");
};

let syncOp = (arg, callback) => {
  output(arg);
  callback("from within syncOP");
};

//output("just output");

//syncOp("Passed to Synced Operation", desyncOp);

//desyncOp("desync called with argument");
//delaydOutput2000("2000ms", "external");
//delaydOutput4000("4000ms", "external");

//let runstuff = async () => {
//  await delaydOutput2000("2000ms", "external");
//  await delaydOutput4000("4000ms", "external");
//};
function wrapp() {
  let r4000 = setTimeout(() => {
    log("toi1000");
  }, 1000);

  let r24000 = setTimeout(() => {
    log("toi2000");
  }, 2000);
}

function longLoop1() {
  let i = 0;
  while (i < 1000000000) {
    i++;
  }
  return log("did 1000000000 Loops");
}

function longLoop2() {
  let i = 0;
  while (i < 2000000000) {
    i++;
  }
  return log("did 2000000000 Loops");
}
function longLoop3() {
  let i = 0;
  while (i < 3000000000) {
    i++;
  }
  return log("did 3000000000 Loops");
}

let myPromise = new Promise(function (resolve, reject) {
  let something = [1, 2, 3];
  //resolve(longLoop1());
});

//myPromise.then(longLoop2()).then(longLoop3());

let myObject = {
  id: 1,
  name: "Christian",
};

loadstate();

log(myObject);
console.log(myObject);

function loadstate() {
  if (myObject.hasOwnProperty("greet") == true) {
    return myObject.hasOwnProperty("greet");
  } else {
    console.log("no result");
    return false;
  }
}

let static = true;

let obPromise = new Promise(async function (resolve, reject) {
  let i = 0;
  while (i < 50) {
    {
      await loadstate();
      await console.log("loadstate from in if while is ", loadstate());
      log(i);
      i++;
    }

    /*   if (loadstate == false) {
      console.log("loadstate from if is ", loadstate);
    } else {
      console.log("loadstate from else is ", loadstate);
    }
    /* let i = 0;
    let loadstate = myObject.hasOwnProperty("greet");
    while (i < 5 && loadstate == false) {
      i++;
      loadstate = myObject.hasOwnProperty("greet");
      console.log(myObject);
      console.log(i); */
    //resolve(loadstate); */
    //}
  }
});

console.log(obPromise);

/* try update loadstate
catch update loadstate */
function loopinit() {
  for (let i = 0; i < 5; i++) {
    loadstate();
  }
}

loopinit();
loadstate();

function endless() {
  try {
    setTimeout(greet, 5);
  } catch (error) {
    console.log(error);
  }
}
endless();

function greet() {
  myObject.greet();
}
