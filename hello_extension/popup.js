document.addEventListener("DOMContentLoaded", function () {
  var githubLink = document.getElementById(
    "https://github.com/shivamshrivaastava"
  );
  githubLink.addEventListener('click', function () {
    // Open GitHub link in a new tab
    chrome.tabs.create({ url: githubLink.href });
});
});