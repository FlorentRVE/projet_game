// Récupère les inputs
let pseudo = document.getElementById("id");
let mdp = document.getElementById("mdp");

// // Récupère le bouton
let goBtn = document.getElementById("go_btn");

// // Création objet player vide
let player = {}

// Au click, completion objet player et envoi
goBtn.addEventListener("click", (e) => {

    player = {
        pseudo: pseudo.value,
        mdp: mdp.value
    }

            // Définition du corps de la requête POST
    
            let option = {
                method: 'POST',
                headers: {'Content-Type': 'application/json; charset=utf-8' },
                body: JSON.stringify(player),
            }
    
            // Requête POST à l'API
    
            fetch("http://localhost:3000/api/user/login", option)
            .then(response => response.json())
            .then(() => {
                window.location.href = "chara_select.html?pseudo=" + player.pseudo; // Redirection
            })
            .catch(err => console.log(err))
    
            e.preventDefault() // Empeche l'activation du "submit" du boutton qui produit une erreur

            console.log(player)

})

