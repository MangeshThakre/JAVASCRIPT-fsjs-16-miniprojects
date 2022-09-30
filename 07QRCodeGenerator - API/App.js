const input = document.querySelector("#input");
const submit = document.querySelector("#submit");
const displayQR = document.querySelector(".qr-code");

function generateQR(text) {
  displayQR.innerHTML = "";
  new QRCode(displayQR, {
    text: text,
    width: 128,
    height: 128,
    colorDark: "#000000",
    colorLight: "#ffffff",
    correctLevel: QRCode.CorrectLevel.H,
  });
}

submit.addEventListener("click", () => {
  const text = input.value;
  if (text == "") {
    return alert("enter text or url");
  }
  const qrCode = generateQR(text);
  displayQR.setAttribute("src", qrCode);
});

function demoQr() {
  input.value = "demo";
  generateQR("demo");
}
demoQr();
