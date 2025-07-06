let monitorHome = document.getElementById("monitorHome");
let monitorGuest = document.getElementById("monitorGuest");

let scoreHome = 0;
let scoreGuest = 0;

function updateScore(team, points) {
    if (team === "home") {
        scoreHome += points;
        monitorHome.innerText = scoreHome;
    } else if (team === "guest") {
        scoreGuest += points;
        monitorGuest.innerText = scoreGuest;
    }
}

function resetScores() {
    scoreHome = 0;
    scoreGuest = 0;
    monitorHome.innerText = scoreHome;
    monitorGuest.innerText = scoreGuest;
}