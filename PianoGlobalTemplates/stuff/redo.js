window.addEventListener(
  "load",
  function () {
    if (originUrl.includes("/plus")) {
      plusLink.classList.add("hide-it");
    } else {
      if (plusLink.classList.contains("plusLink")) {
        if (fullurl) {
          plusLink.setAttribute("href", fieldlink + "?tpcc=[%% Tracking_Variant %%]_modal" + redirect);
        } else {
          plusLink.setAttribute("href", variolink + "?tpcc=[%% Tracking_Variant %%]_modal" + redirect);
        }
      }
    }
  },
  false
);
