function checkPassword() {
  const correctPassword = "JoyBoy";
  const input = document.getElementById("password-input").value;
  const error = document.getElementById("error-message");

  if (input === correctPassword) {
    document.getElementById("password-screen").style.display = "none";
    document.getElementById("main-site").style.display = "block";
  } else {
    error.textContent = "Incorrect password.";
  }
}
