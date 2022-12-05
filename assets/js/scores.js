var playerHistoryList = document.querySelector("#highscores");
var storedPlayerHistory = localStorage.getItem("playerHistory");
var clearStorage = document.querySelector("#clear");
var players = storedPlayerHistory ? JSON.parse(storedPlayerHistory) : [];

players.sort((a, b) => b.userScore - a.userScore)

console.log(players);

for (var i = 0; i < players.length; i++) {

 var player = players[i];

 var li = document.createElement("li");
 li.innerHTML = player;
 playerHistoryList.appendChild(li);
}

clearStorage.addEventListener("click", function (evnet) {
 if (event.target === clearStorage) {
  localStorage.clear();
  window.location.reload(true);
 }
 return
})
