/* scope.keycloakSnfeRegister = function (url) {
  console.log("try scoped keycloakSnfeRegister");
  try {
    sessionStorage.setItem("ssoTry", "EvRegister");
    sessionStorage.setItem("ssoTryTime", Math.floor(Date.now() / 1000));
    sessionStorage.setItem("ssoTryUrl", storeUrl);
    sessionStorage.setItem("ssoState", true);
  } catch (error) {
    console.log("debugPiano: debugMulti: Storage-Errors had errors", error);
  }
  globalUserState = true;
  $("#ssoRegister").trigger("click");
  let articleUrl = new URL(urlParams.url);
  let nohashUrl = articleUrl.origin + articleUrl.pathname + articleUrl.search;
  window.parent.location.href = scope.custom.registerUrl;
};
 */
let url1 =
  "https://auth.cloud.funkedigital.de/auth/realms/funke-bzv/protocol/openid-connect/registrations?client_id=spark-fe-hk&scope=openid+profile+email&response_type=id_token+token&response_mode=form_post&nonce=7bb51941-f604-48cc-8ef1-48bf8fd94819&redirect_uri=https%3A%2F%2Fwww.harzkurier.de%2Fredirect.html%3Fo%3D%252Fplus%252F%253FdebugPiano";
let url2 = "https://www.waz.de";

let urlParams = new URL(url1);
let urlRedirectParams = new URL(urlParams.searchParams.get("redirect_uri"));
let urlRedirectParamsO = encodeURIComponent(urlRedirectParams.searchParams.get("o"));
let appendUrl = urlRedirectParams.searchParams.append("kc", "success");

console.log(urlParams.searchParams.get("redirect_uri"));
console.log(urlRedirectParams.searchParams.get("o"));
console.log(urlRedirectParamsO);
console.log(appendUrl);

function addParamToUrl(url, param, value) {
  let workingUrl = new URL(url);
  workingUrl.searchParams.append(param, value);
  return workingUrl.href;
}

function editParamInUrl(url, param, value) {
  let workingUrl = new URL(url);
  let redirectWorkingUrl = workingUrl.searchParams.get("redirect_uri");
  console.log(redirectWorkingUrl);
}
