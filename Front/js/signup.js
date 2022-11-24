//recup back
function getUser() {
    return fetch("http://localhost:3000/api/user") // Récupération des données de l'API
        .then(reponse => reponse.json()) // Permet de lire les données au format JSON
        .catch(err => alert(err))
}

// Récupère les inputs
// let pseudo = document.getElementById("id");
// let mdp = document.getElementById("mdp");

// // Récupère le bouton
let goBtn = document.getElementById("go_btn");

// // Création objet player vide
// let player = {}

// Au click, completion objet player et envoi
async function displayUser(){

let data = await getUser();
return data

};

goBtn.addEventListener("click", () => {

    // e.preventDefault;

    // player = {
    //     pseudo: pseudo.value,
    //     mdp: mdp.value
    // }

    // localStorage.setItem('player', JSON.stringify(player))
    
    console.log(displayUser())

    // window.location.href = "chara_select.html";
})

