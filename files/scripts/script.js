fetch('https://blankgames-version.glitch.me/version.json')
.then((response) => response.json())
.then((json) => checkVersions(json.version, version));

function checkVersions(newestVersion, currentVersion) {
  console.log("Newest Version: ", newestVersion);
  console.log("Current Version: ", currentVersion);
  if (newestVersion != currentVersion) {
    console.log("NOT SYNCED");
    document.getElementById("update").innerHTML = "!! SITE NOT UP TO DATE !!";
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
  function getParameterByName(name) {
    name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
    var regex = new RegExp("[\\?&]" + name + "=([^&#]*)");
    var results = regex.exec(location.search);
    return results == null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "));
  }
  parentURL = getParameterByName('parentURL');
  console.log(parentURL);
  path = parentURL + "game.html?game=" + game + ".html";
  console.log(path);
  window.open(path);

}

function suggest() {
  window.open("https://forms.gle/pwTwqgMwUsEdSBk66");
}

function newVersion() {
  window.open("https://docs.google.com/document/d/1ziUHhhbZyTE3vOWQDvwW__YfHLrMeArcS0HHKNH-vd8/edit?usp=sharing")
}