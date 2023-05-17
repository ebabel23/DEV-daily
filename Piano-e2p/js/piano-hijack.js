const TPHIJACK_VERSION = 37;
console.log("Hijack TP-Object", "Version", TPHIJACK_VERSION);

const DefaultTimeout = 10000;
const InitTimeout = 10000;
const ExecuteTimeout = 10000;

function logTime(d) {
  function fix(v, l) {
    return ("00" + v).slice(-l);
  }
  if (d == undefined) d = new Date();
  return (
    fix(d.getHours(), 2) +
    ":" +
    fix(d.getMinutes(), 2) +
    ":" +
    fix(d.getSeconds(), 2) +
    "," +
    fix(d.getMilliseconds(), 3)
  );
}

async function overrideWithDelay(obj, name, waitFor) {
  if (obj == undefined) throw "Parameter 'obj' is undefined.";
  if (typeof obj[name] != "function")
    throw {message: "Object doesn't have a method '" + name + "'", object: obj};

  let waitFunction;
  if (typeof waitFor == "function") waitFunction = waitFor;
  else if (typeof waitFor == "object" && waitFor.constructor.name == "Promise")
    waitFunction = () => waitFor;
  else if (typeof waitFor == "number")
    waitFunction = () =>
      new Promise((resolve) => setTimeout(() => resolve(), waitFor));
  else
    waitFunction = () =>
      new Promise((resolve) => setTimeout(() => resolve(), DefaultTimeout));

  console.log("TP-Hijack", "overriding " + name + "()");
  const newName = "__" + name;
  obj[newName] = obj[name];
  obj[name] = function (...args) {
    console.log(
      "TP-Hijack",
      logTime(),
      "calling " + name + "(). Execution will be delayed"
    );

    return new Promise(async (resolve, reject) => {
      console.log("TP-Hijack", logTime(), name + "() is running...");
      const pr = waitFunction();
      console.log("TP-Hijack", pr);
      await pr;
      console.log("TP-Hijack", pr);

      try {
        console.log(
          "TP-Hijack",
          logTime(),
          "executing " + name + "()",
          "START"
        );
        resolve(this[newName](...args));
        console.log(
          "TP-Hijack",
          logTime(),
          "executing " + name + "()",
          "SUCCESS"
        );
      } catch (e) {
        console.log(
          "TP-Hijack",
          logTime(),
          "executing " + name + "()",
          "ERROR",
          e
        );
        reject(e);
      }
    });
  };
}

function getConsent(vendorId) {
  function getConsentValue(vendorId) {
    console.log("get consent", vendorId, 0);
    const result = window
      .__tcfapi("getTCData")
      .vendor.consents.hasOwnProperty(vendorId);
    console.log("get consent", vendorId, "0b", result);
    return result;
  }

  const p = new Promise((resolve, reject) => {
    console.log("get consent", vendorId, 1);
    window.addEventListener("load", () => {
      console.log("get consent", vendorId, 2);
      try {
        console.log("get consent", vendorId, 3);
        if (window.__tcfapi("getTCData").cmpStatus != "loaded")
          throw "not loaded yet";
        resolve(getConsentValue(vendorId));
      } catch (e) {
        console.log("get consent", vendorId, 4, "not loaded yet", e);
        window.__cmp(
          "addEventListener",
          [
            "consent",
            (_event, _undocumented, type) => {
              console.log("get consent", vendorId, 5, type);
              if (type === "consent-loaded") resolve(getConsentValue(vendorId));
            },
            false,
          ],
          null
        );
      }
    });
  });
  console.log("get consent", vendorId, 6, p);
  return p;
}

async function getPianoConsent() {
  console.log("get consent Piano Consent", logTime(), "Start");
  const consent = await getConsent("360" /*'412'*/);
  tp.push(["setCustomVariable", "e2p_consentLevel", consent]);
  console.log("get consent Piano Consent", logTime(), "Finished", consent);
}

(function hijackTP() {
  let originalTP = window.tp || [];
  originalTP._originalPush = originalTP.push;
  originalTP.push = function () {
    console.log("pushing to TP", arguments);
    return this._originalPush(...arguments);
  };

  delete window.tp;
  Object.defineProperties(window, {
    tp: {
      configurable: false,
      enumerable: true,
      set: function (v) {
        if (v === originalTP) return;
        console.log("SETTING TP!", typeof v, v.constructor.name, v);

        originalTP = v;

        if (typeof v == "object" && !Array.isArray(v)) {
          //overrideWithDelay(v.experience, 'init', InitTimeout);
          overrideWithDelay(v.experience, "execute", getPianoConsent);
        }
      },
      get: function () {
        console.log("Getting TP-Object");
        return originalTP;
      },
    },
  });
  console.log("TP-object redefined", window.tp);
})();
