const { $dataMetaSchema } = require("ajv");
const { register } = require("tsconfig-paths");

let artUrl = urlParams.url;
let regUrl = artUrl + "#keycloak-registration";
let logUrl = artUrl + "#keycloak-login";
let pwvUrl = artUrl + "#keycloak-change-password";

function updateKeyUrl(urls) {
  let cta = document.getElementsByClassName("btn--register")[0];
  cta.setAttribute("href", logUrl);
}

$(document).ready(function () {
  let artUrl = urlParams.url;
  let regUrl = artUrl + "#keycloak-registration";
  let logUrl = artUrl + "#keycloak-login";
  let pwvUrl = artUrl + "#keycloak-change-password";
  let cta = document.getElementsByClassName("btn--register")[0];
  cta.setAttribute("href", logUrl);
});

sessionStorage;
