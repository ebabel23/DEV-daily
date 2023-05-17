let userState = scope.isUserValid();
switch (true) {
  case (userState = false && sessionStorage.getItem("fdp-user-recentLogin") != true):
    console.log("not loggid in and no recent login");
    console.log("track");
    sessionStorage.setItem("fdp-user-recentLogin", "true");
    break;
  case (userState = false && sessionStorage.getItem("fdp-user-recentLogin") == true):
    console.log("not loggid in and recent login");
    console.log("track");
    sessionStorage.setItem("fdp-user-recentLogin", "true");
    break;
  case (userState = true && sessionStorage.getItem("fdp-user-recentLogin") == true):
    console.log("loggid in and recent login");
    console.log("dont track");
    sessionStorage.removeItem("fdp-user-recentLogin");
    break;
  case (userState = true && sessionStorage.getItem("fdp-user-recentLogin") == true):
    console.log("loggid in and recent login");
    console.log("track");
    break;
  default:
    console.log("some default");
    break;
}
