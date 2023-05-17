var refurl = document.referrer;
var url = new URL(refurl);
var domain = "https://" + url.hostname;
var variolink = domain + "[%% Link %%]";
var target = "[%% Link-Ziel %%]";
var fieldlink = "[%% Link %%]";
var fullurl = fieldlink.includes("https");
var redirect = "[%% Redirect_Link %%]";

document.addEventListener(
  "DOMContentLoaded",
  function () {
    var plusBanner = document.getElementsByClassName("plus-banner")[0];

    if (plusBanner.classList.contains("plus-banner")) {
      if (fullurl == true) {
        plusBanner.setAttribute(
          "href",
          fieldlink + "?tpcc=[%% Tracking_Variant %%]_modal" + redirect
        );
      } else {
        plusBanner.setAttribute(
          "href",
          variolink + "?tpcc=[%% Tracking_Variant %%]_modal" + redirect
        );
      }
    }
  },
  false
);

$(document).ready(function () {
  var $plusBanner = $(".plus-banner");

  if ($plusBanner.hasClass("plus-banner")) {
    if (fullurl == true) {
      $plusBanner.attr(
        "href",
        fieldlink + "?tpcc=[%% Tracking_Variant %%]_modal" + redirect
      );
    } else {
      $plusBanner.attr(
        "href",
        variolink + "?tpcc=[%% Tracking_Variant %%]_modal" + redirect
      );
    }
  }
});
