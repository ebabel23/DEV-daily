console.log("Hello from JS");
let bottomUrls = document.getElementsByClassName("links");
console.log(bottomUrls);
let urlParams = {};
urlParams.url = "https://www.wr.de/salzgitter/staedte/meschede-und-umland/bierverbot-was-mescheder-schalke-und-bvb-fanclubs-sagen-id237850201.html";

//Funktion noch in eine Abfrage wrappen, um den richtigen Link zu finden (Es gibt drei Links da unten, wie erkennen wir den richtigen)

function buildAndPasteUrl(changeUrl) {
  let workUrl = new URL(changeUrl);
  console.log(workUrl.href);
  let refurl = urlParams.url;
  if (workUrl.href.includes("aboshop.")) {
    console.log("Needs Change");
    switch (true) {
      case refurl.includes("/salzgitter/") == true:
        workUrl.host = "aboshop.salzgitter-zeitung.de";
        workUrl.searchParams.set("utm_term", "sz");
        changeUrl.href = workUrl.href;
        break;
      case refurl.includes("/wolfsburg/") == true:
        workUrl.host = "aboshop.wolfsburger-nachrichten.de";
        workUrl.searchParams.set("utm_term", "wn");
        changeUrl.href = workUrl.href;
        break;
      case refurl.includes("/wolfenbuettel/") == true:
        workUrl.host = "aboshop.wolfenbuetteler-zeitung.de";
        workUrl.searchParams.set("utm_term", "wz");
        changeUrl.href = workUrl.href;
        break;
      case refurl.includes("/helmstedt/") == true:
        workUrl.host = "aboshop.helmstedter-nachrichten.de";
        workUrl.searchParams.set("utm_term", "hn");
        changeUrl.href = workUrl.href;
        break;
      default:
        console.log(`No URL to change!`);
    }
  } else {
    console.log("Needs NO Change");
  }
  console.log(changeUrl.href);
}

// Array.from(bottomUrls).forEach((url) => {
//   console.log("Starting Array-OP");
//   buildAndPasteUrl(url);
// });
// console.log(bottomUrls);

function loopedUrlChange() {
  Array.from(bottomUrls).forEach((url) => {
    console.log("Starting Array-OP");
    buildAndPasteUrl(url);
  });
  console.log(bottomUrls);
}

setTimeout(loopedUrlChange, 1000);
