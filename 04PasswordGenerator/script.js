const resultEl = document.getElementById("result");
const lengthEl = document.getElementById("length");
const uppercaseEl = document.getElementById("uppercase");
const lowercaseEl = document.getElementById("lowercase");
const numbersEl = document.getElementById("numbers");
const symbolsEl = document.getElementById("symbols");
const generateEl = document.getElementById("generate");
const clipboardEl = document.getElementById("clipboard");

const randomFunc = {
  lower: getRandomLower,
  upper: getRandomUpper,
  number: getRandomNumber,
  symbol: getRandomSymbol,
};

clipboardEl.addEventListener("click", () => {
  resultEl.style.background = "#0087ff5c";
  navigator.clipboard.writeText(resultEl.textContent);
});

generateEl.addEventListener("click", () => {
  resultEl.style.background = "none";

  const lower = lowercaseEl.checked;
  const upper = uppercaseEl.checked;
  const number = numbersEl.checked;
  const symbol = symbolsEl.checked;
  const length = lengthEl.value;
  generatePassword(lower, upper, number, symbol, length);
});

function generatePassword(lower, upper, number, symbol, length) {
  let password = "";
  while (password.length <= length) {
    lower ? (password = password + randomFunc.lower()) : "";
    upper ? (password = password + randomFunc.upper()) : "";
    number ? (password = password + randomFunc.number()) : "";
    symbol ? (password = password + randomFunc.symbol()) : "";
  }
  resultEl.textContent = password.slice(0, length);
}

function getRandomLower() {
  const lower = "abcdefghijklmnopqrstuvwxyz";
  return lower[Math.floor(Math.random() * lower.length)];
}

function getRandomUpper() {
  const upper = "abcdefghijklmnopqrstuvwxyz".toUpperCase();
  return upper[Math.floor(Math.random() * upper.length)];
}

function getRandomNumber() {
  const number = "1234567890";
  return number[Math.floor(Math.random() * number.length)];
}

function getRandomSymbol() {
  const symbol = "!@#$%^&*";
  return symbol[Math.floor(Math.random() * symbol.length)];
}
