function createCookie(name, value, days) {
  var expires;
  if (days) {
    var date = new Date();
    date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
    expires = "; expires=" + date.toGMTString();
  } else {
    expires = "";
  }
  document.cookie = name + "=" + value + expires + "; path=/";
}
function readCookie(name) {
  var nameEQ = name + "=",
    ca = document.cookie.split(";");
  for (var i = 0; i < ca.length; i++) {
    var c = ca[i];
    while (c.charAt(0) === " ") {
      c = c.substring(1, c.length);
    }
    if (c.indexOf(nameEQ) === 0) {
      return c.substring(nameEQ.length, c.length);
    }
  }
  return null;
}
function pianoAddInit() {
  if (tp && tp.experience && finishedUserRef && finishedUserData) {
    tp.push([
      "init",
      function () {
        tp.experience.init();
      },
    ]);
    return true;
  }
  return false;
}
function loadPianoUserRef() {
  if (!readCookie("sso_data")) {
    finishedUserRef = true;
    return;
  }
  var ts = parseFloat(readCookie("piano_userref_timestamp")),
    userRef = readCookie("piano_userref"),
    now = new Date().getTime(),
    maxTime = 1000 * 60 * 10;
  if (!ts || !userRef || isNaN(ts) || ts < now - maxTime) {
    var url =
      "https://" +
      window.location.hostname +
      "/secure/sso/dispatch/piano-userRef";
    jQuery.ajax({
      type: "POST",
      url: url,
      data: "{}",
      dataType: "json",
      contentType: "application/json;charset=UTF-8",
      xhrFields: { withCredentials: true },
      success: function (data, statusText, $xhr) {
        if (data.userRef) {
          createCookie("piano_userref", data.userRef);
          createCookie("piano_userref_timestamp", now);
          tp = window.tp || [];
          tp.push(["setUserRef", data.userRef]);
        } else {
          console.error(
            "The piano response does not contain a userRef property! Has the Api changed?"
          );
        }
        userRefRequested = true;
        finishedUserRef = true;
      },
      error: function () {
        console.error("Exception in Piano userRef: ", arguments);
        finishedUserRef = true;
      },
    });
  } else {
    if (userRef) {
      tp = window.tp || [];
      tp.push(["setUserRef", userRef]);
      finishedUserRef = true;
    } else {
    }
  }
}
function loadSsoUserDatas() {
  if (!readCookie("sso_data")) {
    finishedUserData = true;
    return;
  }
  function getUserIdBySsoCookieValue(cookieValue) {
    var userId = -1;
    if (/[0-9]*#\-#([0-9]*)#\-#[0-9]*/.test(cookieValue)) {
      var userId = cookieValue.match(/[0-9]*#\-#([0-9]*)#\-#[0-9]*/)[1];
    }
    return userId;
  }
  var userId = getUserIdBySsoCookieValue(readCookie("sso_data")),
    url =
      "https://" +
      window.location.hostname +
      "/secure/sso/users/" +
      userId +
      "?format=piano";
  if (userId !== -1) {
    jQuery.ajax({
      type: "GET",
      url: url,
      xhrFields: { withCredentials: true },
      success: function (data, statusText, $xhr) {
        try {
          var userDatas = {};
          if (data.success && data.code === null) {
            userDatas = data.content;
          }
          tp = window.tp || [];
          for (userData in userDatas) {
            tp.push(["setCustomVariable", userData, userDatas[userData]]);
            tp.push(["setCustomParam", userData, userDatas[userData], "user"]);
          }
        } catch (ex) {
          console.error("Exception in loadSsoUserDatas: ", ex);
        }
        userDataRequested = true;
        finishedUserData = true;
      },
      error: function () {
        console.error("Exception: ", arguments);
        finishedUserData = true;
      },
    });
  } else {
    finishedUserData = true;
  }
}
var userRefRequested = false,
  userDataRequested = false,
  finishedUserRef = false,
  finishedUserData = false,
  pageInfos = {},
  pianoAddInitInterval = null;
loadPianoUserRef();
loadSsoUserDatas();
pageInfos = {
  pageType: "Rubrik",
  pagePublication: "nrw-ikz",
  pageContent: "frei",
  pageURL: "https://www.ikz-online.de/",
  pageCategory: "Home",
  pageCategory02: "",
  pageCategory03: "",
};
var tags = [];
tp = window.tp || [];
tp.push(["setAid", "qrPu7RttTE"]);
tp.push(["setSandbox", false]);
tp.push(["setUseTinypassAccounts", false]);
tp.push(["setCustomVariable", "publicationName", "IKZ"]);
tp.push(["setTags", tags]);
for (pageInfo in pageInfos) {
  tp.push(["setCustomParam", pageInfo, pageInfos[pageInfo], "content"]);
}
function doPianoRegister() {
  tags.push("tp_register");
  tp.push(["setTags", tags]);
  tp.experience.execute();
}
function doPianoRegisterComments() {
  tags.push("tp_register_comments");
  tp.push(["setTags", tags]);
  tp.experience.execute();
}
function doPianoRequestPassword() {
  tags.push("tp_pwForgotten");
  tp.push(["setTags", tags]);
  tp.experience.execute();
}
function doPianoRequestUsername() {
  tags.push("tp_nickForgotten");
  tp.push(["setTags", tags]);
  tp.experience.execute();
}
function doPianoCallMyProfile() {
  tags.push("tp_myProfile");
  tp.push(["setTags", tags]);
  tp.experience.execute();
}
pianoAddInitInterval = window.setInterval(function () {
  if (pianoAddInit()) {
    window.clearInterval(pianoAddInitInterval);
    pianoAddInitInterval = null;
  }
}, 1000);
