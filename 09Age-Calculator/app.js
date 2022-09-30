// get age input value convert in standerd date.
// comparing the standerd date with current date,
// if input date is greated then current date
// show alert , reset input date and date of birth
// else substract current date  with  input standerd date
// and pass to calcAge()
function getAge() {
  const dobInput = document.getElementById("dob");
  dobInput.value = new Date();
  dobInput.addEventListener("change", (e) => {
    dob = new Date(e.target.value);
    if (dob > new Date()) {
      alert("enter valid date of birth");
      dobInput.value = "";
      document.getElementById("years").innerHTML = "";
      document.getElementById("months").textContent = "";
      document.getElementById("days").textContent = "";
      return;
    }
    const stdDate = new Date(new Date() - dob);
    calcAge(stdDate);
  });
}
getAge();

//  convert Standerd date to day, month,year
// and pass to displayAge()

function calcAge(stdDate) {
  const month = stdDate.getMonth();
  const day = stdDate.getDate() - 1;
  const year = stdDate.getFullYear() - 1970;
  displayAge(year, month, day);
}

//  finaly display the age
function displayAge(year, month, day) {
  document.getElementById("years").innerHTML = year;
  document.getElementById("months").textContent = month;
  document.getElementById("days").textContent = day;
}
