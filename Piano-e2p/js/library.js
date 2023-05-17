function enhanceObject() {
  myObject.job = "hunter";
  myObject.greet = () => {
    console.log("hello " + myObject.name);
  };
  log("enhanced");
  console.log("from lib ", myObject);
}

//enhanceObject();
setTimeout(enhanceObject, 500);
