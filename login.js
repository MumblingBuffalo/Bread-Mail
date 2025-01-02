const { IMAP_HOST, IMAP_PORT } = require("./config");
const imapSimple = require("imap-simple");

document.getElementById("login-form").addEventListener("submit", async (e) => {
  e.preventDefault();
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;
  const status = document.getElementById("status");

  status.textContent = "Logging in...";

  const config = {
    imap: {
      user: email,
      password,
      host: IMAP_HOST,
      port: IMAP_PORT,
      tls: true,
    },
  };

  try {
    const connection = await imapSimple.connect(config);
    await connection.end(); // Close after testing login.
    status.textContent = "Login successful!";
    setTimeout(() => window.electron.navigateToBreadboard(), 1000);
  } catch (error) {
    console.error(error);
    status.textContent = "Login failed. Check credentials.";
  }
});
