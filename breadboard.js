const imapSimple = require("imap-simple");
const nodemailer = require("nodemailer");

async function fetchEmails(folder = "INBOX") {
  const { IMAP_HOST, IMAP_PORT, IMAP_USER, IMAP_PASS } = require("./config");

  const config = {
    imap: {
      user: IMAP_USER,
      password: IMAP_PASS,
      host: IMAP_HOST,
      port: IMAP_PORT,
      tls: true,
    },
  };

  try {
    const connection = await imapSimple.connect(config);
    await connection.openBox(folder);
    const messages = await connection.search(["ALL"], {
      bodies: ["HEADER", "TEXT"],
      struct: true,
    });

    const emailList = document.getElementById("email-list");
    emailList.innerHTML = "";

    messages.forEach((message) => {
      const subject = message.parts.find((part) => part.which === "HEADER").body.subject[0];
      const from = message.parts.find((part) => part.which === "HEADER").body.from[0];
      emailList.innerHTML += `<div>${from} - ${subject}</div>`;
    });

    await connection.end();
  } catch (error) {
    console.error(error);
  }
}

document.getElementById("refresh").addEventListener("click", () => fetchEmails());
document.getElementById("logout").addEventListener("click", () => window.electron.logout());
fetchEmails();
