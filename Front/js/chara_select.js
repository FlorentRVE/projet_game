let player = localStorage.getItem('player')

let objPlayer = JSON.parse(player)

let playerDisplay = document.getElementById('pseudo_display')

playerDisplay.innerHTML = objPlayer.pseudo;