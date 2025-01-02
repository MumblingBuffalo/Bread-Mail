document.getElementById('togglePassword').addEventListener('click', function () {
  const passwordInput = document.getElementById('password');
  const type = passwordInput.type === 'password' ? 'text' : 'password';
  passwordInput.type = type;
});

document.getElementById('loginForm').addEventListener('submit', function (event) {
  event.preventDefault();

  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;
  const imapServer = document.getElementById('imapServer').value;
  const imapPort = document.getElementById('imapPort').value;
  const smtpServer = document.getElementById('smtpServer').value;
  const smtpPort = document.getElementById('smtpPort').value;
  const ssl = document.getElementById('ssl').checked;

  console.log({ email, password, imapServer, imapPort, smtpServer, smtpPort, ssl });

  // Ensure window.electronAPI is defined
  if (window.electronAPI) {
    window.electronAPI.login({
      email,
      password,
      imapServer,
      imapPort,
      smtpServer,
      smtpPort,
      ssl,
    });
  } else {
    console.error("window.electronAPI is not defined. Ensure preload script is correctly set up.");
  }
});
