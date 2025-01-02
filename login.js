document.getElementById("loginForm").addEventListener("submit", (event) => {
  event.preventDefault(); // Prevent form from reloading the page

  // Gather form data
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;
  const imapServer = document.getElementById("imapServer").value;
  const imapPort = document.getElementById("imapPort").value;
  const smtpServer = document.getElementById("smtpServer").value;
  const smtpPort = document.getElementById("smtpPort").value;
  const ssl = document.getElementById("ssl").checked;

  const loginData = { email, password, imapServer, imapPort, smtpServer, smtpPort, ssl };

  console.log("Login data:", loginData);

  // Simulate successful login (can add validation logic here)
  if (email && password && imapServer && smtpServer) {
    window.location.href = "breadboard.html";
  } else {
    alert("Please fill in all fields.");
  }
});

// Password toggle logic
document.getElementById("togglePassword").addEventListener("click", () => {
  const passwordInput = document.getElementById("password");
  const type = passwordInput.type === "password" ? "text" : "password";
  passwordInput.type = type;
});
