$(document).ready(function () {
  $(".hamburger").click(function () {
    $("nav ul").toggleClass("show");
  });

  $("nav a").click(function (e) {
    if (this.hash !== "") {
      e.preventDefault();
      const target = this.hash;
      $("html, body").animate({ scrollTop: $(target).offset().top - 60 }, 800);
    }
  });

  $("#show-bmi").click(function () {
    $("#bmi-calculator").slideDown();
    $("#price-calculator").slideUp();
  });

  $("#show-price").click(function () {
    $("#price-calculator").slideDown();
    $("#bmi-calculator").slideUp();
  });

  $("#bmi-form").on("submit", function (e) {
    e.preventDefault();
    const weight = parseFloat($("#weight").val());
    const height = parseFloat($("#height").val()) / 100;
    if (weight && height) {
      const bmi = weight / (height * height);
      let message = `Your BMI is ${bmi.toFixed(2)}. `;
      if (bmi < 18.5) message += "You're underweight.";
      else if (bmi < 25) message += "You're fit!";
      else if (bmi < 30) message += "You're overweight.";
      else message += "You're obese.";
      $("#bmi-result").text(message);
    } else {
      $("#bmi-result").text("Please enter valid weight and height.");
    }
  });

  $("#calculate-price").click(function () {
    const sessions = parseInt($("#sessions").val());
    const plan = $("#plan").val();
    let rate = { basic: 10, premium: 15, elite: 20 }[plan];
    const total = sessions * 4 * rate;
    $("#result").text(`Your estimated monthly cost: $${total}`);
  });

  $(".learn-more-btn").click(function () {
    $(this).siblings(".extra-info").slideToggle();
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
});
