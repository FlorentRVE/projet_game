function getID() {
    let url = window.location.search; // Récupération de la partie search de l'URL
    let params = new URLSearchParams(url);
    let pseudo = params.get('pseudo') 
    return pseudo // On isole et retourne le pseudo de la page actuelle
}

let pseudo = getID();

let pseudoDisplay = document.getElementById('pseudo_display');

pseudoDisplay.innerHTML = pseudo;

function getItems() {
    return fetch("http://localhost:3000/api/character/") // Récupération des données de l'API
        .then(reponse => reponse.json()) // Permet de lire les données au format JSON
        .catch(err => alert(err))
}

async function displayCharacter() {

    let data = await getItems();

    data.forEach(element => {
        
        let image = document.createElement('img');
        image.src = element.imageUrl;
        image.style.width = '150px'
        image.style.height = '110px'

        let name = document.createElement('p')
        name.innerHTML = element.name;
        name.style.color = 'red';
        name.style.textTransform = 'uppercase';
        name.style.textAlign = 'center';
        name.style.backgroundColor = 'orange';

        let background = document.createElement('a');
        background.href = 'game.html?name=' + element.name;
        background.style.color = 'green'
        background.style.height = '128px'
        background.style.width = '112px'
        background.style.marginLeft = '10px'
        background.style.marginRight = '10px'
        background.appendChild(image)
        background.appendChild(name)

        let container = document.getElementById('container');
        container.appendChild(background)
        
    });
}

displayCharacter();