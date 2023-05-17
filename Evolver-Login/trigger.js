console.log("Hello from trigger.js");

let globalUserState = false;
// scope.analyzeSSO = function () {
//   if (scope.isUserValid()) {
//     console.log(scope.isUserValid());
//   }
// };
let passUrl = new URL(parent.location.href);
let storeUrl = passUrl.origin + passUrl.pathname;

function checkSSO() {
  let lastSsoState = sessionStorage.getItem("ssoTry");
  let lastSsoTime = Number(sessionStorage.getItem("ssoTryTime"));
  let lastSsoUrl = sessionStorage.getItem("ssoTryUrl");
  let parentUrl = new URL(parent.location.href);
  let checkurl = parentUrl.origin + parentUrl.pathname;
  let now = Math.floor(Date.now() / 1000);

  console.log(lastSsoState, lastSsoTime, lastSsoUrl, checkurl);

  if (
    globalUserState == true &&
    lastSsoState != null &&
    lastSsoTime != null &&
    lastSsoUrl != null
  ) {
    switch (true) {
      case lastSsoState == "EvLogin" &&
        now - 300 < lastSsoTime &&
        lastSsoUrl == checkurl:
        console.log("was sso-login");
        console.log("Now: ", now, "SS ", lastSsoTime, now - lastSsoTime);
        break;
      case lastSsoState == "EvRegister" &&
        now - 300 < lastSsoTime &&
        lastSsoUrl == checkurl:
        console.log("was sso-register");
        console.log("Now: ", now, "SS ", lastSsoTime, now - lastSsoTime);
        break;
      default:
        console.log("no case found");
        console.log(
          "Now: ",
          now,
          "SS ",
          Number(lastSsoTime),
          now - Number(lastSsoTime)
        );
    }
  } else {
    console.log("User logged in somewhere else or noone logged in");
    console.log("Globaluserstate: ", globalUserState);
  }
}

function checkUserState() {
  let tempState = JSON.parse(sessionStorage.getItem("ssoState"));
  globalUserState = tempState;
  return tempState;
}

function setSSwithRegButton() {
  sessionStorage.setItem("ssoTry", "EvRegister");
  sessionStorage.setItem("ssoTryTime", Math.floor(Date.now() / 1000));
  sessionStorage.setItem("ssoTryUrl", storeUrl);
  sessionStorage.setItem("ssoState", true);
  globalUserState = true;
  console.log("Setting the REG");
}

function setSSwithLogButton() {
  sessionStorage.setItem("ssoTry", "EvLogin");
  sessionStorage.setItem("ssoTryTime", Math.floor(Date.now() / 1000));
  sessionStorage.setItem("ssoTryUrl", storeUrl);
  sessionStorage.setItem("ssoState", true);
  globalUserState = true;
  console.log("Setting the LogIN");
}

function setSSwithlogoutButton() {
  sessionStorage.setItem("ssoTry", "EvLogout");
  sessionStorage.setItem("ssoTryTime", Math.floor(Date.now() / 1000));
  sessionStorage.setItem("ssoTryUrl", storeUrl);
  sessionStorage.removeItem("ssoState");
  globalUserState = false;
  console.log("Setting the LogOUT");
}

function checkWithButton() {
  checkSSO();
  console.log("Checking the SSO-State");
}

let registerButton = document.getElementById("register-button");
registerButton.addEventListener("click", setSSwithRegButton, false);

let loginButton = document.getElementById("login-button");
loginButton.addEventListener("click", setSSwithLogButton, false);

let logoutButton = document.getElementById("logout-button");
logoutButton.addEventListener("click", setSSwithlogoutButton, false);

let checkButton = document.getElementById("checker-button");
checkButton.addEventListener("click", checkWithButton, false);

let fullSS = sessionStorage;
console.log(fullSS);
console.log(fullSS.ssoTry);

document.addEventListener("DOMContentLoaded", checkUserState);
document.addEventListener("DOMContentLoaded", checkSSO);
