//==== VARIABLES ====

//- - - PLAYER POSITION

let Pspeed = 25

let PdistX = 0
let PdistY = 0

//- - - AUDIO

let SD_playerMove = new Audio('../assets/audio/sfx/playerMove2.mp3')
let SD_playerAtk = new Audio('../assets/audio/sfx/playerAtk.mp3')
let SD_playerInter = new Audio('../assets/audio/sfx/')
let SD_itemGot = new Audio('../assets/audio/sfx/playerItemGet.mp3')


//- - - ELEMENT GETTERS?

// - PLAYER -

let player = document.getElementById('player')

let btn_up = document.getElementById("up")
let btn_down = document.getElementById("down")
let btn_right = document.getElementById("right")
let btn_left = document.getElementById("left")
let btn_atk = document.getElementById("atk")
let btn_inter = document.getElementById("inter")

let inventory = document.getElementById('inventory')

let Phealth = document.getElementById("Phealth")
let Pdefense = document.getElementById("Pdefense")
let Pscore = document.getElementById("Pscore")

// - ITEM -

let item = document.getElementById('item')

//==== GAME ====

//---- ITEM ----

let IdistX = IpositionX()
let IdistY = IpositionY()


function IpositionX() {
  let IdistX = Math.floor(Math.random() * 600);
  item.style.top = IdistX + "px"
}
function IpositionY() {
  let IdistY = Math.floor(Math.random() * 400);
  item.style.left = IdistY + "px"
}

//---- CONTROLS ----

// - UP -
function PmoveUp() {
  PdistX = PdistX - Pspeed
  player.style.top = PdistX + "px"
  SD_playerMove.play()
}
btn_up.addEventListener("click", () => {
  PmoveUp()
});

// - DOWN -
function PmoveDown() {
  PdistX = PdistX + Pspeed
  player.style.top = PdistX + "px"
  SD_playerMove.play()
}
btn_down.addEventListener("click", () => {
  PmoveDown()
});

// - RIGHT -
function PmoveRight() {
  PdistY = PdistY + Pspeed
  player.style.left = PdistY + "px"
  SD_playerMove.play()
}
btn_right.addEventListener("click", () => {
  PmoveRight()
});

// - LEFT -
function PmoveLeft() {
  PdistY = PdistY - Pspeed
  player.style.left = PdistY + "px"
  SD_playerMove.play()
}
btn_left.addEventListener("click", () => {
  PmoveLeft()
});

// - ATTACK -

function attack() {

}
btn_atk.addEventListener("click", () => {
  attack()
  SD_playerAtk.play()
});

// - INTERACT -

function interactItem() {
  if (IdistX == PdistX && IdistY == PdistY) {
    SD_itemGot.play()
    intoVentory()
  }
  else {
  //nuffin'
  }
}



btn_inter.addEventListener("click", () => {
  interactItem()
});

//- INVENTORY -

inventory = []

function intoVentory() {
  inventory.push(item)
  IpositionX()
  IpositionY()
}

function outtaVentory() {

}

//---- STATS ----

