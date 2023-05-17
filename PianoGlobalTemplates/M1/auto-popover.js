sessionStorage.setItem("fdp-term-settime", Math.floor(Date.now() / 1000 - 200));
const sessionStore = sessionStorage.getItem("fdp-term-settime");
const sessionStorageDateQuery = Number(sessionStorage.getItem("fdp-term-settime") ? sessionStorage.getItem("fdp-term-settime") : 0);
console.log("TimeSet:", sessionStorageDateQuery);

let sessionStorageDateEdit = (() => {
  const now = Math.floor(Date.now() / 1000);
  if (300 > now - sessionStorageDateQuery) {
    return true;
  } else {
    return false;
  }
})();
sessionStorage.setItem("gibtsnicht", "selected");
let termMode = sessionStorage.getItem("gibtsnicht");

console.log(termMode);
setTimeout(function () {
  const sessionStorageDateQuery = Number(sessionStorage.getItem("fdp-term-settime") ? sessionStorage.getItem("fdp-term-settime") : 0);
  console.log("TimeSet:", sessionStorageDateQuery);
  try {
    let sessionStorageDateEdit = (() => {
      const now = Math.floor(Date.now() / 1000);
      if (300 > now - sessionStorageDateQuery) {
        return true;
      } else {
        return false;
      }
    })();

    if (sessionStorageDateEdit && termMode === "selected") {
      console.log("if is true ", sessionStorageDateEdit);
      sessionStorage.setItem("fdp-term-selection", "sawautopopover");
      scope.startCheckout(sessionStorage.getItem(termString));
      scope.trackingView("register-" + sessionStorage.getItem(termString));
    } else {
      console.log("Nothing happens");
    }
  } catch (err) {
    // var defaultUserTerm = $(".single-term").eq(parseInt('[%% Preselected_Term_Position %%]') - 1).find(".term-selector").val();
    // scope.startCheckout(defaultUserTerm);
    // scope.trackingView('register-' + 'inkognito-' + defaultUserTerm);
  }
}, 500);
