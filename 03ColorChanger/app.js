const canvas = document.getElementById("canvas");
const button = document.getElementById("button");

function bgChange() {
  const hexadecimal = "0123456789ABCDEF";
  let hexColorCode = "#";
  for (let i = 0; i < 6; i++) {
    hexColorCode = hexColorCode + hexadecimal[Math.floor(Math.random() * 16)];
  }
  return hexColorCode;
}

button.addEventListener("click", () => {
  canvas.style.backgroundColor = bgChange();
});
