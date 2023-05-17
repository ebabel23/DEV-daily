let bottomUrls = document.getElementsByClassName("links");

function buildAndPasteUrl(changeUrl) {
  let workUrl = new URL(changeUrl);
  let refurl = urlParams.url;
  if (workUrl.href.includes("aboshop.")) {
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
    }
  } else {
  }
}

function loopedUrlChange() {
  Array.from(bottomUrls).forEach((url) => {
    console.log("Starting Array-OP");
    buildAndPasteUrl(url);
  });
}
setTimeout(loopedUrlChange, 1000);
