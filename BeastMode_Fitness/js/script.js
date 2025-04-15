$(document).ready(function () {
  // === Contact Form Logic ===
  const popup = $("#popupModal");
  const form = $("#contactForm");
  const nameField = $("#name");
  const emailField = $("#email");
  const dateField = $("#date");
  const timeField = $("#time");
  const messageField = $("#message");
  const formMsg = $("#formMsg");

  // Load cookies if any
  nameField.val(getCookie("name") || "");
  emailField.val(getCookie("email") || "");

  form.on("submit", function (e) {
    e.preventDefault();

    const name = nameField.val().trim();
    const email = emailField.val().trim();
    const date = dateField.val();
    const time = timeField.val();
    const message = messageField.val().trim();

    if (!name || !email || !date || !time || !message) {
      formMsg.text("Please fill out all fields.").css("color", "red");
      return;
    }

    // Save to localStorage
    const contactData = { name, email, date, time, message };
    localStorage.setItem("contactFormSubmission", JSON.stringify(contactData));

    // Save cookies
    setCookie("name", name, 7);
    setCookie("email", email, 7);

    // Show modal popup
    formMsg.text("");
    popup.show();
    form[0].reset();
  });

  // Close modal
  $(".closeBtn").click(function () {
    popup.hide();
  });

  $(window).click(function (e) {
    if ($(e.target).is("#popupModal")) {
      popup.hide();
    }
  });

  // Cookie Helpers
  function setCookie(name, value, days) {
    const d = new Date();
    d.setTime(d.getTime() + days * 24 * 60 * 60 * 1000);
    document.cookie = `${name}=${value};expires=${d.toUTCString()};path=/`;
  }

  function getCookie(name) {
    const cookies = document.cookie.split("; ");
    for (let c of cookies) {
      const [key, val] = c.split("=");
      if (key === name) return val;
    }
    return "";
  }
});
