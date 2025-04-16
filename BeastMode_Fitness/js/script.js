document.addEventListener("DOMContentLoaded", function() {
    console.log("BeastMode Fitness website is ready!");
});
const popup = $("#popupModal");
const form = $("#contactForm");

form.on("submit", function (e) {
  e.preventDefault();
  popup.show();
  form[0].reset();
});

$(".closeBtn").click(function () {
  popup.hide();
});

$(window).click(function (e) {
  if ($(e.target).is("#popupModal")) {
    popup.hide();
  }
});
