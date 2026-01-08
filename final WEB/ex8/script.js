var form = document.getElementById("subscribeForm");
var result = document.getElementById("result");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  var email = document.getElementById("email").value;
  var interests = document.querySelectorAll(".interest:checked");

  // Email validation
  if (!email.includes("@") || !email.includes(".")) {
    result.textContent = "Invalid email address!";
    result.style.color = "red";
    return;
  }

  // Interests validation
  if (interests.length === 0) {
    result.textContent = "Please select at least one interest!";
    result.style.color = "red";
    return;
  }

  // Success
  result.textContent = "Subscription successful!";
  result.style.color = "green";

  form.reset();
});
