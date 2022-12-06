var playerHistoryList = document.querySelector("#highscores");
var storedPlayerHistory = localStorage.getItem("playerHistory");
var clearStorage = document.querySelector("#clear");
var players = storedPlayerHistory ? JSON.parse(storedPlayerHistory) : [];

players.sort((a, b) => b.userScore - a.userScore)

console.log(players);

playerHistoryList.innerHTML = "";

for (var i = 0; i < players.length; i++) {
 var separator = "  - "
 var player = players[i].userInitials + separator + players[i].userScore;
 var li = document.createElement("li");
 li.textContent = player;
 playerHistoryList.appendChild(li);
}

clearStorage.addEventListener("click", function (event) {
 if (event.target === clearStorage) {
  localStorage.clear();
  window.location.reload(true);
 }
 return
})
