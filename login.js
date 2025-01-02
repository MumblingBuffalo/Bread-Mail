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

  console.log({ email, password, imapServer, imapPort, smtpServer, smtpPort });

  // Add your logic to pass this data to main.js or backend processes
  window.electronAPI.login({
    email,
    password,
    imapServer,
    imapPort,
    smtpServer,
    smtpPort,
  });
});
