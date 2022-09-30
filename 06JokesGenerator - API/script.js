let API =
  "https://v2.jokeapi.dev/joke/Any?blacklistFlags=nsfw,religious,racist,sexist,explicit";

const jokeBtn = document.querySelector("#jokeBtn");
const joke = document.querySelector("#joke");
async function generateJocks() {
  try {
    const response = await fetch(API);
    const data = await response.json();
    return {
      type: data.type,
      joke: data.type == "single" ? data.joke : data.setup,
      delivery: data.type != "single" ? data.delivery : "",
    };
  } catch (error) {
    console.log(error);
    return alert("netWork error");
  }
}

async function showJoks() {
  joke.innerHTML = "loading..........";
  const jockObj = await generateJocks();
  if (jockObj.type == "single") {
    joke.innerHTML = `<p>${jockObj.joke}</p>`;
  } else {
    joke.innerHTML = `<p> <b>Son :</b>${jockObj.joke}</p> <p><b>Dad :</b> ${jockObj.delivery} 
    </p>`;
  }
}

showJoks();

jokeBtn.addEventListener("click", () => showJoks());
