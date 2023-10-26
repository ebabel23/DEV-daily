function removeInfoLinks() {
  document.getElementById("infos-link").classList.add("hide-it");
  document.getElementById("infos-link-bottom").classList.add("hide-it");
  console.log("links removed");
}

setTimeout(() => {
  if (scope.params.url.indexOf("/plus/") != -1) {
    removeInfoLinks();
  }
}, 50);
