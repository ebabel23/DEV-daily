//Consent-State
let consentState = {};
let consentPiano;

//consentState = __tcfapi('getTCData');
//let consentPiano = consentState.customVendorConsents.hasOwnProperty("s410");

//tp.push(['setCustomVariable', 'e2p_consentLevel', consentPiano]);

function getInfos() {
  console.log("did Something");
  consentState = __tcfapi("getTCData");
  consentPiano = consentState.vendor.consents.hasOwnProperty(412);
  console.log("data: ", consentState, consentPiano);
  tp.push(["setCustomVariable", "e2p_consentLevel", consentPiano]);
  console.log("tried to push consent");
  tp.experience.init();
  return consentPiano;
}

function listenForConsent() {
  console.log("listening for consent to content");
  __cmp("addEventListener", ["consent", getInfos, false], null);
}

document.addEventListener("load", listenForConsent, true);

// DOMContentLoaded
