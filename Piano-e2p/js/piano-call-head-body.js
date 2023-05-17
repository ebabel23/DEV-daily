//Head

tp = window.tp || [];
tp.push(["setAid", "R7dLbhIwJD"]);
tp.push(["setEndpoint", "https://buy.tinypass.com/api/v3"]);
tp.push(["setUseTinypassAccounts", false]);
tp.push(["setCustomVariable", "default", "true"]);
tp.push(["setCxenseSiteId", "1149822477627287819"]);
if (window.fdpConfig === undefined) {
  window.fdpConfig = {};
}
window.fdpConfig["pianoResources"] = [];
window.fdpConfig["pianoConfigParamValue"] = "";
var pianoUserRefUrl = "/secure/sso/dispatch/piano-userRef",
  syncPixelBaseUrl = "https://api.suse.funkedigital.de/public/pushpiano";
jQuery.ajax({
  type: "POST",
  url: pianoUserRefUrl,
  data: "{}",
  dataType: "json",
  contentType: "application/json;charset=UTF-8",
  xhrFields: {withCredentials: true},
  success: function (data) {
    if (data.userRef) {
      tp.push(["setUserRef", data.userRef]);
      var syncPixel = document.createElement("img");
      syncPixel.src = syncPixelBaseUrl + "/WAZ/" + data.userRef;
    }
  },
  error: function () {},
  complete: function () {
    (function (src) {
      var a = document.createElement("script");
      a.type = "text/javascript";
      a.async = true;
      a.src = src;
      var b = document.getElementsByTagName("script")[0];
      b.parentNode.insertBefore(a, b);
    })("https://cdn.tinypass.com/api/tinypass.min.js");
  },
});

//Body
var pageKeywords = "";
var pageAutoKeywords = "";
try {
  var autoKeywordsObj = {},
    autoKeywords =
      "Steuerrecht,Finanzpolitik,Gesetze,Manfred Lehmann,Bundessteuerberaterkammer,Bundesverfassungsgericht,Deutsche Steuer-Gewerkschaft DStG,WAZ-Gruppe,Bund der Steuerzahler BdSt",
    autoKeywordsSplit = autoKeywords.split("|");
  autoKeywordsSplit.forEach(function (item) {
    if (item !== "") {
      var itemSplit = item.split("/"),
        key = itemSplit[0].split("[")[0].replace(/"/g, "");
      if (!autoKeywordsObj.hasOwnProperty(key)) {
        autoKeywordsObj[key] = [];
      }
      autoKeywordsObj[key].push(itemSplit[1].replace(/"/g, ""));
    }
  });
  pageAutoKeywords = JSON.stringify(autoKeywordsObj);
} catch (err) {
  console.log("FDP Piano:", err.message);
}
pageInfos = {
  pageType: "Artikel",
  pagePublication: "nrw-waz",
  pageSourcePublication: "nrw-multiconfig",
  pageTitle: "Grundsteuerreform: Warum B\u00FCrger schon jetzt Post erhalten",
  pageContent: "frei",
  pageURL:
    "https://www.waz.de/politik/landespolitik/grundsteuerreform-warum-buerger-schon-jetzt-post-erhalten-id234347763.html",
  pageArticleID: "234347763",
  pageDate: "2022-01-19T05:00:00MEZ",
  pageAuthor: "Michael Kohlstadt",
  pageCategory: "Politik",
  pageCategory02: "Landespolitik",
  pageCategory03: "",
  pageSource: "dcx",
  pageContentType: "news",
  pageKeywords: pageKeywords,
  pageAutoKeywords: pageAutoKeywords,
};
var tags = [];
tags.push("isPaidContent");
pageInfos.pageContent = "premium";
tp.push(["setTags", tags]);
tp.push(["setContentCreated", "2022-01-19T05:00:00MEZ"]);
tp.push(["setContentAuthor", "Michael Kohlstadt"]);
tp.push(["setContentSection", "politik.landespolitik"]);
tp.push(["setContentId", "234347763"]);
for (pageInfo in pageInfos) {
  tp.push(["setCustomParam", pageInfo, pageInfos[pageInfo], "content"]);
}
tp.push(["setApplePayMerchantId", "m778xwg4vfxq9hzg"]);
jQuery(function () {
  var $paywall_header_logedin = jQuery("#paywall-header-logedin");
  tp.push([
    "init",
    function () {
      if (tp.userRef.length > 0) {
        $paywall_header_logedin.prop("checked", true);
      }
    },
  ]);
});
tp.push([
  "init",
  function () {
    tp.experience.execute();
  },
]);
if (window.fdpConfig === undefined) {
  window.fdpConfig = {pianoResources: []};
} else {
  window.fdpConfig["pianoResources"] = [];
}
function doPianoRegisterComments() {
  var tags = [];
  tags.push("tp_register_comments");
  tp.push(["setCustomVariable", "publicationName", "WAZ"]);
  tp.push(["setTags", tags]);
  tp.experience.execute();
}
