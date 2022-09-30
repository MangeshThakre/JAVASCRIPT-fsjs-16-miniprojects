function randompickerbtn() {
  const randomValuePara = document.querySelector(".random-value-para");
  const hexCode = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color = color + hexCode[Math.floor(Math.random() * 16)];
  }
  return (randomValuePara.textContent = color);
}

function hexFindbtn() {
  const hexInput = document.querySelector("#hexInput").value;
  const colorBox = document.querySelector("#color-box");
  colorBox.style.background = hexInput;
}

function RGBFindbtn() {
  const RInput = document.querySelector("#RInput").value;
  const GInput = document.querySelector("#GInput").value;
  const BInput = document.querySelector("#BInput").value;

  if (RInput > 255 || GInput > 255 || BInput > 255)
    return alert("enter value between 0 to 255  for Color by RGB Code");

  const rgbColorBox = document.querySelector("#rgb-color-box");
  const rgb = `rgb(${RInput} ,${GInput},${BInput})`;
  rgbColorBox.style.backgroundColor = rgb;
}

function RangeSelector() {
  const RrInput = document.querySelector("#RrInput").value;
  const GrInput = document.querySelector("#GrInput").value;
  const BrInput = document.querySelector("#BrInput").value;
  const rangeColorBox = document.querySelector("#range-color-box");

  const rgb = `rgb(${RrInput} ,${GrInput},${BrInput})`;
  rangeColorBox.style.backgroundColor = rgb;
}

// hex to rgb converter

String.prototype.convertToRGB = function () {};

function hexConvbtn() {}

function rgbConvbtn() {}
