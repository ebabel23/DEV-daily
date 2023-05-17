//not running on mgt as Typ javascripts-code
console.log("defPvars - PianoGlobalCall-1225");
tp = window["tp"] || [];

//Static-Data
//console.log("defPvars - Statics");

//Prime-Data Logic
let e2p_refUrl = location.href;
let e2p_pureUrl = location.href.split("?")[0];
let e2p_pageCategories = document.location.pathname.split("/");
e2p_pageCategories.pop();
let e2p_path =
  e2p_pageCategories[1] +
  "." +
  e2p_pageCategories[2] +
  "." +
  e2p_pageCategories[3];

//Prime-Data Section-Params
//let e2p_promoSlot = "${promoslot}";
let e2p_isPlusPage = "${isPlusPage}";

//Prime-Data Attributes
let e2p_titleCode = "${titleCode}";
let e2p_isSection = "${pageIsSection}";
let e2p_isArticle = "${pageIsArticle}";
let e2p_articleType = "${articleType}";
let e2p_articleId = "${articleId}";
let e2p_paidState = "${pageIsPaid}";
let e2p_pageTitle = "${pageTitle}";
let e2p_pageDateInt = "${pageDate_last}";
let e2p_merchantId = "${merchantId}";
let e2p_publicationName = "${publicationName}";
let e2p_consentLevel;

//Computeted-Data Attributes
let e2p_paidTag = e2p_paidState == "true" ? "isPaidContent" : "isFreeContent";
let e2p_paidCon = e2p_paidState == "true" ? "premium" : "frei";
let e2p_pageType = e2p_isArticle == "true" ? "Artikel" : "Undefined";
let e2p_pageDate = new Date(parseInt(e2p_pageDateInt)).toISOString();

//Push Primes
tp.push(["setCustomVariable", "e2p_refUrl", e2p_refUrl]);
tp.push(["setCustomVariable", "e2p_promoSlot", "${promoslot}"]);
tp.push(["setCustomVariable", "e2p_titleCode", "${titleCode}"]);
tp.push(["setCustomVariable", "e2p_isSection", "${pageIsSection}"]);
tp.push(["setCustomVariable", "e2p_isArticle", "${pageIsArticle}"]);
tp.push(["setCustomVariable", "e2p_articleType", "${articleType}"]);
tp.push(["setCustomVariable", "e2p_articleId", "${articleId}"]);
tp.push(["setCustomVariable", "e2p_paidState", "${pageIsPaid}"]);
tp.push(["setCustomVariable", "e2p_isPlusPage", "${isPlusPage}"]);

//Push Tags
tp.push(["setTags", e2p_paidTag]);

console.log("defPvars - jsc-global- done");

//collect PageInfos
pageInfos = {
  pageType: e2p_pageType,
  pagePublication: e2p_titleCode, //
  pageSourcePublication: "nrw-multiconfig",
  pageTitle: e2p_pageTitle,
  pageContent: e2p_paidCon,
  pageURL: e2p_pureUrl,
  pageArticleID: e2p_articleId,
  pageDate: e2p_pageDate,
  pageAuthor: "No Info",
  pageCategory: e2p_pageCategories[1],
  pageCategory02: e2p_pageCategories[2],
  pageCategory03: e2p_pageCategories[3],
  pageSource: "No Info",
  pageContentType: e2p_articleType,
  pageKeywords: "No Info",
  pageAutoKeywords: "No Info",
};

//Push more Piano-Data
var tags = [];
tags.push(e2p_paidTag);
pageInfos.pageContent = e2p_paidCon;
tp.push(["setTags", tags]);
tp.push(["setContentCreated", e2p_pageDate]);
tp.push(["setContentAuthor", "No Info"]);
tp.push(["setContentSection", e2p_path]);
tp.push(["setContentId", e2p_articleId]);
for (pageInfo in pageInfos) {
  tp.push(["setCustomParam", pageInfo, pageInfos[pageInfo], "content"]);
}
tp.push(["setApplePayMerchantId", e2p_merchantId]);

//Launch Piano
jQuery(function () {
  var $paywall_header_logedin = jQuery("#paywall-header-logedin");

  tp.push([
    "init",
    function () {
      if (tp.userRef.length > 0) {
        $paywall_header_logedin.prop("checked", true);
        console.log("Piano: JQuery_Execute");
      }
    },
  ]);
});

//Launch Piano again?
/*
tp.push([
  "init",
  function () {
    tp.experience.execute();
    console.log("Piano: Regular_Execute");
  },
]);
*/

//Plattform-related actions
if (window.fdpConfig === undefined) {
  window.fdpConfig = {pianoResources: []};
} else {
  window.fdpConfig["pianoResources"] = [];
}
function doPianoRegisterComments() {
  var tags = [];
  tags.push("tp_register_comments");
  tp.push(["setCustomVariable", "publicationName", e2p_publicationName]);
  tp.push(["setTags", tags]);
  tp.experience.execute();
  console.log("Piano: RegisterComment_Execute");
}

//Conset-Part
//check on Load for Consent
window.addEventListener("load", function (event) {
  window.__cmp(
    "addEventListener",
    [
      "consent",
      (_event, _undocumented, type) => {
        if (type === "consent-loaded") {
          if (
            window
              .__tcfapi("getTCData")
              .vendor.consents.hasOwnProperty("360") === true
          ) {
            console.log("######## You are allowed to run Piano", type);
            e2p_consentLevel = "true";
            tp.push([
              "setCustomVariable",
              "e2p_consentLevel",
              e2p_consentLevel,
            ]);
            tp.push([
              "init",
              function () {
                tp.experience.execute();
                console.log("Piano: Regular_Execute_from_Consent-Part");
              },
            ]);
          } else {
            console.log("######## You are --NOT-- allowed to run Piano", type);
            e2p_consentLevel = "false";
            tp.push([
              "setCustomVariable",
              "e2p_consentLevel",
              e2p_consentLevel,
            ]);
            tp.push([
              "init",
              function () {
                tp.experience.execute();
                console.log("Piano: Regular_Execute_from_Consent-Part");
              },
            ]);
          }
        }
      },
      false,
    ],
    null
  );
});

//Run after CMP-Window closed
window.addEventListener("load", function (event) {
  window.__cmp(
    "addEventListener",
    [
      "consentscreenoff",
      (_event, _undocumented, type) => {
        console.log("CSTP-consentscreenoff", type);
        if (
          window.__tcfapi("getTCData").vendor.consents.hasOwnProperty("360") ===
          true
        ) {
          console.log(
            "######## You are allowed to run Piano after Close",
            type
          );
          e2p_consentLevel = "true";
          tp.push(["setCustomVariable", "e2p_consentLevel", e2p_consentLevel]);
          tp.push([
            "init",
            function () {
              tp.experience.execute();
              console.log("Piano: Regular_Execute_from_Consent-Part");
            },
          ]);
        } else {
          console.log(
            "######## You are --NOT-- allowed to run Piano after Close",
            type
          );
          e2p_consentLevel = "false";
          tp.push(["setCustomVariable", "e2p_consentLevel", e2p_consentLevel]);
          tp.push([
            "init",
            function () {
              tp.experience.execute();
              console.log("Piano: Regular_Execute_from_Consent-Part");
            },
          ]);
        }
      },
      false,
    ],
    null
  );
});
