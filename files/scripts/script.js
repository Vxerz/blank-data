function checkVersions(newestVersion, currentVersion) {
  console.log("Newest Version: ", newestVersion);
  console.log("Current Version: ", currentVersion);
  if (newestVersion != currentVersion) {
    console.log("NOT SYNCED");
    document.getElementById("update").innerHTML = "!! OPENER NOT UP TO DATE !!";
  }
}

for (let i = 0; i < Object.keys(games).length; i++) {
  let obj = games[Object.keys(games)[i]];
  let newGame = document.createElement("button");
  newGame.classList.add("grid-item");
  newGame.innerHTML = Object.keys(games)[i];
  newGame.onclick = function() {openGame(games[Object.keys(games)[i]])};
  document.getElementById("game-holder").appendChild(newGame);
}

function openGame(game) {
  console.log(game)
  window.location.href = "./game.html?game=" + game;
  //window.location.href = "../games/" + game + ".html";

}

function suggest() {
  window.open("https://forms.gle/pwTwqgMwUsEdSBk66");
}

function newVersion() {
  window.open("https://drive.google.com/uc?export=download&id=" + id)
}

function share() {
  window.open("https://mail.google.com/mail/u/0/?fs=1&su=Site%20Download&body=" + encodeURIComponent("https://drive.google.com/uc?export=download&id=" + id) + "&tf=cm");
}

const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const myVersion = urlParams.get('version');

const page = localStorage.getItem("page");
if (page == null)
{
  localStorage.setItem("page", {"isHome": true, "currentGame": ""})
}
console.log(page);
if (!page["isHome"])
{
  console.log(page["currentGame"])
  window.location.href = "./game.html?game=" + page["currentGame"];
}