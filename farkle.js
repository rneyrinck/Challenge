var diceArr = [];
// variable holding score of each roll -> could be used to display each roll value
var rolledScore = [];
var diceCounts = {
  1: 0,
  2: 0,
  3: 0,
  4: 0,
  5: 0,
  6: 0,
};

var scoreSheet = {
  "Each 1 Rolled": {
    "Point Value": 100,
    "You Rolled": diceCounts[1],
    "Points Earned": diceCounts[1] * 100,
  },
  "Each 5 Rolled": {
    "Point Value": 50,
    "You Rolled": diceCounts[2],
    "Points Earned": diceCounts[2] * 50,
  },
  "Three 1's": {
    "Point Value": 1000,
    "You Rolled": diceCounts[1],
    "Points Earned": diceCounts[1] == 6 ? 2000 : diceCounts[1] >= 3 ? 1000 : 0
  },
  "Three 2's": {
    "Point Value": 200,
    "You Rolled": diceCounts[2],
    "Points Earned": diceCounts[2] == 6 ? 400 : diceCounts[2] >= 3 ? 200 : 0
  },
  "Three 3's": {
    "Point Value": 300,
    "You Rolled": diceCounts[3],
    "Points Earned": diceCounts[3] == 6 ? this["Points Value"]*2 : diceCounts[2] >= 3 ? 300 : 0
  },
  "Three 4's": {
    "Point Value": 400,
    "You Rolled": diceCounts[4],
    "Points Earned": diceCounts[4] * 400,
  },
  "Three 5's": {
    "Point Value": 500,
    "You Rolled": diceCounts[5],
    "Points Earned": diceCounts[5] * 500,
  },
  "Three 6's": {
    "Point Value": 600,
    "You Rolled": diceCounts[6],
    "Points Earned": diceCounts[6] * 600,
  },
};
// for (const values in scoreSheet) {
//   console.log(scoreSheet[values]["Points Earned"]);
// }
// loop through rolled dice and compare to score sheet
function getRolledDiceScores() {
  for (let i = 0; i < rolledScore.length; i++) {
    // check if value equals key in scoreSheet
    diceCounts[rolledScore[i]] += 1;
	console.log(diceCounts);
  }
  return scoreSheet
}
// total score value
var rolledValue = 0;
function initializeDice() {
  // loop creating dive array values
  for (i = 0; i < 6; i++) {
    diceArr[i] = {};
    // changed id to reflect 1 indexed img parameters
    diceArr[i].id = "die" + (i + 1);
    diceArr[i].value = i + 1;
    diceArr[i].clicked = 0;
  }
  console.log(diceArr);
}

/*Rolling dice values*/
function rollDice() {
  for (var i = 0; i < 6; i++) {
    // default clicked is zero,
    if (diceArr[i].clicked === 1) {
      diceArr[i].value = Math.floor(Math.random() * 6 + 1);
      // need callback for determining dice value
      rolledScore.push(diceArr[i].value);
    }
  }
  rolledValue += rolledScore;
  console.log("rolledScore: ",rolledScore)
  getRolledDiceScores();

  console.log("diceCounts: ", diceCounts)
  console.log(scoreSheet)
  rolledScore.length = 0;
  document.getElementById("score").innerHTML = rolledValue;

  updateDiceImg();
}

/*Updating images of dice given values of rollDice*/
function updateDiceImg() {
  var diceImage;
  // issue with this loop -> should start at 1
  for (let i = 0; i < 6; i++) {
    // images are not zero indexed in their naming parameters
    // changed src route to reflect value of index instead of index
    diceImage = "images/" + diceArr[i].value + ".png";
    // <img src="images/1.png" id="die1" data-number="0" onclick="diceClick(this)">
    document.getElementById(diceArr[i].id).setAttribute("src", diceImage);
  }
}

function diceClick(img) {
  var i = img.getAttribute("data-number");

  img.classList.toggle("transparent");
  // check if dice is clicked, default unclicked = 0, if not clicked change to 1(clicked)
  if (diceArr[i].clicked === 0) {
    diceArr[i].clicked = 1;
  }
  //
  else {
    diceArr[i].clicked = 0;
  }
  console.log("clicked ", diceArr[i], " in ", diceArr);
}
