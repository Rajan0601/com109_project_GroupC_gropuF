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
  });
  