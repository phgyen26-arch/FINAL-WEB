var form = document.getElementById("contactForm");
var result = document.getElementById("result");

form.addEventListener("submit", function (e) {
  e.preventDefault(); // Ngăn submit mặc định

  var name = document.getElementById("name").value;
  var email = document.getElementById("email").value;
  var message = document.getElementById("message").value;

  // Kiểm tra rỗng
  if (name === "" || email === "" || message === "") {
    result.textContent = "Please fill in all fields!";
    result.style.color = "red";
  } else {
    result.textContent = "Message sent successfully!";
    result.style.color = "green";

    // Reset form (không bắt buộc nhưng hay)
    form.reset();
  }
});
