let oparand = "";
let string = "";
let number = "";
function insert(num) {
  document.querySelector(".textview").value = "";

  if ("*/-+%".includes(num) && number == "") {
    document.querySelector(".textview").value = string + number;
    return;
  } else if ("*/-+%".includes(num) && number != "") {
    oparand = num;
    string = string + number + oparand;
    number = "";
  }
  if (!"*/-+%".includes(num)) {
    if (num == "." && number.includes(".")) {
      document.querySelector(".textview").value = string + number;
      return;
    }
    if (num == "." && !number.includes(".") && number == "") {
      number = 0;
    }
    number = number + num;
  }
  document.querySelector(".textview").value = string + number;
}

function equals() {
  const inputValue = document.querySelector(".textview").value;

  if ("*/-+%".includes(inputValue[inputValue.length - 1])) return;

  const ans = eval(inputValue);
  document.querySelector(".textview").value = ans.toFixed(3);
  oparand = "";
  string = "";
  number = "";
}

function clean() {
  document.querySelector(".textview").value = 0;
  string = "";
  number = "";
  oparand = "";
}

function back() {
  let [...input] = document.querySelector(".textview").value;
  input.pop();
  const clear = input.join("");
  document.querySelector(".textview").value = clear;
}
