const binaryEl = document.querySelector("#binary");
const result = document.querySelector(".result");
const form = document.querySelector(".container");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const binary = binaryEl.value;
  if (binary.split("").some((e) => e > 1))
    return alert("enter binary no. please");
  const decimal = parseInt(binary, 2);
  result.textContent = decimal;
});
