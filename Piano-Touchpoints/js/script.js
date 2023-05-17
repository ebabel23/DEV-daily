console.log("Something happened");

document
  .getElementsByClassName("firstclass")[0]
  .addEventListener("click", function (e) {
    let plusBanner = document.getElementsByClassName("firstclass")[0];
    e.preventDefault();
    this.style.display = "none";
  });

const refurl = document.referrer;
const url = new URL(refurl);
const domain = "https://" + url.hostname;
const variolink = domain + "[%% Link %%]";
const target = "[%% Link-Ziel %%]";
const fieldlink = "[%% Link %%]";
const fullurl = fieldlink.includes("https");
const redirect = "[%% Redirect_Link %%]";

let plusBanner = document.getElementsByClassName("plus-banner")[0];
let closeButton = document.getElementsByClassName("plus-banner__close")[0];

closeButton.addEventListener("click", function (e) {
  e.preventDefault();
  plusBanner.style.display = "none";
  parent.postMessage(
    {
      message: "hidePlusBannerSticky",
      expires: 10,
    },
    refurl
  );
});

window.addEventListener(
  "DOMContentLoaded",
  function () {
    if (plusBanner.classList.contains("has-plus")) {
      plusBanner.setAttribute(
        "href",
        "/angebot-abo/vorteilsprogramm/" + redirect
      );
    }

    if (plusBanner.classList.contains("plus-banner")) {
      if (fullurl) {
        plusBanner.setAttribute(
          "href",
          fieldlink +
            "?tpcc=[%% Tracking_Variant %%]_subscribe-banner-sticky-desktop" +
            redirect
        );
      } else {
        plusBanner.setAttribute(
          "href",
          variolink +
            "?tpcc=[%% Tracking_Variant %%]_subscribe-banner-sticky-desktop" +
            redirect
        );
      }
    }
  },
  false
);
