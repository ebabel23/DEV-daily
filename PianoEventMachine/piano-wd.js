var pageKeywords = "";
var pageAutoKeywords = "";
try {
  var autoKeywordsObj = {},
    autoKeywords =
      "Image,Politische Linke,politische Aktivität,Margaret Thatcher,Jacques Delors,Milton Friedman,Ken Loach,Neil Kinnock,Friedrich August Von Hayek,Labour Party,Arte,Falkland-Inseln,Argentinien",
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
  pageTitle:
    "\u201EDie Thatcher-Jahre\u201C: Extrem konservativ, extrem radikal",
  pageContent: "frei",
  pageURL:
    "https://www.waz.de/kultur/fernsehen/die-thatcher-jahre-extrem-konservativ-extrem-radikal-id238672431.html",
  pageArticleID: "238672431",
  pageDate: "2023-06-13T05:30:00MESZ",
  pageAuthor: "Karina Krawczyk",
  pageCategory: "Kultur",
  pageCategory02: "Fernsehen",
  pageCategory03: "",
  pageSource: "meth01",
  pageContentType: "news",
  pageKeywords: pageKeywords,
  pageAutoKeywords: pageAutoKeywords,
};
var tags = [];
tags.push("isPaidContent");
pageInfos.pageContent = "premium";
tp.push(["setTags", tags]);
tp.push(["setContentCreated", "2023-06-13T05:30:00MESZ"]);
tp.push(["setContentAuthor", "Karina Krawczyk"]);
tp.push(["setContentSection", "kultur.fernsehen"]);
tp.push(["setContentId", "238672431"]);
for (pageInfo in pageInfos) {
  tp.push(["setCustomParam", pageInfo, pageInfos[pageInfo], "content"]);
}
tp.push(["setApplePayMerchantId", "m778xwg4vfxq9hzg"]);
tp.push([
  "init",
  function () {
    if (tp && tp.userRef && tp.userRef.length && tp.userRef.length > 0) {
      document.querySelector("#paywall-header-logedin").checked = true;
    }
  },
]);
tp.push([
  "init",
  () => {
    tp.push([
      "addHandler",
      "experienceExecute",
      (experience) => {
        window.tpLatestExperienceExecuted = experience;
      },
    ]);
    jQuery(() => {
      tp.experience.execute();
    });
  },
]);
if (window.fdpConfig === undefined) {
  window.fdpConfig = { pianoResources: [] };
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
-.