const camelCaseEl = document.querySelector("#camel-case");
const pascalCase = document.querySelector("#pascal-case");
const snakeCase = document.querySelector("#snake-case");
const screamingSnakeCase = document.querySelector("#screaming-snake-case");
const kebabCase = document.querySelector("#kebab-case");
const screamingKebabCase = document.querySelector("#screaming-kebab-case");

class Conversion {
  constructor(text) {
    this.text = text.toLowerCase();
  }

  camelCase() {
    const arr = this.text.split(" ");
    const upperCase = arr.reduce((acc, crr) => {
      if (arr.indexOf(crr) == 0) {
        acc = acc + crr;
      } else {
        const firstLetter = crr[0].toUpperCase();
        let [...text] = crr;
        text.splice(0, 1);
        acc = acc + firstLetter + text.join("");
      }
      return acc;
    }, "");
    return upperCase;
  }

  pascalCase() {
    const arr = this.text.split(" ");
    const upperCase = arr.reduce((acc, crr) => {
      const firstLetter = crr[0].toUpperCase();
      let [...text] = crr;
      text.splice(0, 1);
      acc = acc + firstLetter + text.join("");
      return acc;
    }, "");
    return upperCase;
  }

  snakeCase() {
    return this.text.toLocaleLowerCase().split(" ").join("_");
  }
  screamingSnakeCase() {
    return this.text.toUpperCase().split(" ").join("_");
  }

  kebabCase() {
    return this.text.toLocaleLowerCase().split(" ").join("-");
  }
  screamingKebabCase() {
    return this.text.toUpperCase().split(" ").join("-");
  }
}

function convert() {
  const input = document.querySelector("#text");
  const convertBtn = document.getElementById("convert-btn");

  convertBtn.addEventListener("click", () => {
    if (input.value == "") return alert("Enter text");
    const conversion = new Conversion(input.value);
    camelCaseEl.textContent = conversion.camelCase();
    pascalCase.textContent = conversion.pascalCase();
    snakeCase.textContent = conversion.snakeCase();
    screamingSnakeCase.textContent = conversion.screamingSnakeCase();
    kebabCase.textContent = conversion.kebabCase();
    screamingKebabCase.textContent = conversion.screamingKebabCase();
  });
}
convert();
