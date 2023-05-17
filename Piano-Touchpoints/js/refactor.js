console.log("xDEV - 1710 - Bottom-Sticky");
const refurl = document.referrer;
const url = new URL(refurl);
const domain = "https://" + url.hostname;
const variolink = domain + "[%% Link %%]";
const target = "[%% Link-Ziel %%]";
const fieldlink = "[%% Link %%]";
const fullurl = fieldlink.includes("https");
const redirect = "[%% Redirect_Link %%]";

let plusBanner = document.getElementsByClassName("plus-banner")[0];
console.log(plusBanner);
let plusBannerHead = document.getElementsByClassName("plus-banner__head")[0];
console.log(plusBannerHead);
let loginLink = document.getElementsByClassName("plus-banner__login")[0];
console.log(loginLink);
let plusLink = document.getElementsByClassName("plus-banner__link")[0];
console.log(plusLink);

window.addEventListener(
  "DOMContentLoaded",
  function () {
    if (plusBanner.classList.contains("plus-banner")) {
      if (fullurl) {
        plusLink.setAttribute(
          "href",
          fieldlink +
            "?tpcc=[%% Tracking_Variant %%]_subscribe-banner-sticky-bottom-mobile" +
            redirect
        );
      } else {
        plusLink.setAttribute(
          "href",
          variolink +
            "?tpcc=[%% Tracking_Variant %%]_subscribe-banner-sticky-bottom-mobile" +
            redirect
        );
      }
    }
  },
  false
);

plusBannerHead.addEventListener("click", function (e) {
  e.preventDefault();
  plusBanner.classList.toggle("plus-banner--expanded");
  parent.postMessage(
    {
      message: "togglePlusBannerStickyBottom",
    },
    refurl
  );
});

loginLink.addEventListener("click", function (e) {
  e.preventDefault();
  parent.postMessage(
    {
      message: "hidePlusBannerStickyClick",
      expires: 1,
    },
    refurl
  );
  plusBanner.classList.toggle("plus-banner--expanded");
  parent.postMessage(
    {
      message: "openLoginContainer",
    },
    refurl
  );
});
