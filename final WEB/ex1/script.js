const form = document.getElementById("registerForm");
const username = document.getElementById("username");
const password = document.getElementById("password");
const profilePic = document.getElementById("profilePic")
const usernameError = document.getElementById("usernameError");
const imageError = document.getElementById("imageError");
const passwordStrength = document.getElementById("passwordStrength");

/* ===============================
   PASSWORD STRENGTH (real-time)
================================ */
password.addEventListener("input", function () {
  const value = password.value;

  // Kiểm tra có chữ và số không
  const hasLetter = /[a-zA-Z]/.test(value);
  const hasNumber = /[0-9]/.test(value);

  if (value.length < 6) {
    passwordStrength.textContent = "Weak";
    passwordStrength.style.color = "red";
  } else if (hasLetter && hasNumber) {
    passwordStrength.textContent = "Strong";
    passwordStrength.style.color = "green";
  } else {
    passwordStrength.textContent = "Medium";
    passwordStrength.style.color = "orange";
  }
});

/* ===============================
   FORM SUBMIT VALIDATION
================================ */
form.addEventListener("submit", function (e) {
  e.preventDefault(); // Ngăn submit mặc định

  let valid = true;

  /* Username validation */
  if (username.value.length < 5 || username.value.length > 15) {
    usernameError.textContent = "Username must be 5–15 characters";
    valid = false;
  } else {
    usernameError.textContent = "";
  }

  /* Password validation */
  const hasLetter = /[a-zA-Z]/.test(password.value);
  const hasNumber = /[0-9]/.test(password.value);

  if (!(hasLetter && hasNumber)) {
    passwordStrength.textContent = "Password must contain letters and numbers";
    passwordStrength.style.color = "red";
    valid = false;
  }

  /* Image validation */
  const file = profilePic.files[0];
  if (file) {
    const allowedTypes = ["image/jpeg", "image/png"];
    if (!allowedTypes.includes(file.type)) {
      imageError.textContent = "Image must be JPG or PNG";
      valid = false;
    } else {
      imageError.textContent = "";
    }
  }

  /* Nếu hợp lệ */
  if (valid) {
    alert("Registration successful!");
  }
});