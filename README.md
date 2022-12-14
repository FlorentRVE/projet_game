# Sommaire

### 1. Structure et fonctionnement du projet
Présentation du projet

### 2. Frontend : Base html / css avec utilisation de Tailwindcss

Structure html de base 3 pages : index, signup, login
Installation de tailwindcss (détailler)
Utilisation basique Tailwindcss

### 3. Backend : Nodejs et express

Installation Nodejs et express
Mise en place de l’api
Configuration server > app > route > model > controller

### 4. Frontend : ajout du JS pour appeler L’API et récupérer/envoyer données

### 5. Création du jeu avec Kaboom JS



# 1) Structure et fonctionnement du projet

L’utilisateur arrive sur une page d’accueil qui redirige vers une page de connexion. 

La page de connexion demande un couple d’identifiant ( Pseudo/Mot de passe).  
Les identifiants sont prédéfinis dans la partie Backend, pour le test on a 3 users donc:  

id:toto mdp:toto  
id:titi mdp:titi  
id:tata mdp:tata  

Un appel de l’API avec le verbe POST permet d’envoyer les identifiants rentrés en input et de vérifier si ils sont présent dans la base de donnée (Ici un fichier JS).  

Si les identifiant sont bien présent dans la BDD, l’utilisateur est redirigé vers une page permettant de sélectionner son personnage.  
Les personnages sont aussi prédéfinis dans un fichier JSON dans le backend.  
Au chargement de la page, un appel GET est utilisé pour récupérer les informations des personnages et les afficher dynamiquement grâce au DOM.  

En cliquant sur un personnage on est redirigé vers la page du jeu ou celui ci se lance avec le dit personnage.  
Le jeu est crée en utilisant Kaboom,js, une librairie Javascript permettant la création simple de jeux.  


# 2) Frontend : HTML et CSS de base avec TailwindCSS

### 1) Structure HTML :

    • Page d’accueil : index.html
    • Page de connexion : login.html
    • Page de sélection de personnage : chara_select.html
    • Page du jeu : game.html



### 2) Partie CSS : TailwindCSS

Un framework « utility-first » permettant de définir des composants et design grâce à des classes prédéfinis.

***Installation via NPM (On aura déjà installé Nodejs à ce stade):***

Commande pour installer via npm
```javascript
npm install -D tailwindcss
```

Commande pour créer le fichier ‘tailwind.config.js’
```javascript
npx tailwindcss init
```

Le fichier **tailwind.config.js** permet de faire la configuration.  
Dans la partie content on va y mettre le chemin des fichiers à surveiller  

![Cover](https://github.com/FlorentRVE/projet_game/blob/1ec5f1dd7d044d8cf1f1fd15aa0c1fb75c0de6c8/img_1.png)

On crée ensuite un fichier style.css dans un dossier css où on collera :
```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```
Ces directives vont représenter toutes les classes utilitaires , composant etc que l’on peut utiliser avec Tailwind
On exécute ensuite la commande suivante :
```javascript
npx tailwindcss -i ./css/style.css -o ./dist/style.css –watch
```  
Elle va scanner notre fichier style.css contenant les directives en **input** et ressortir un fichier CSS en **output** dans un dossier *dist* créer automatiquement, qu’on utilisera sur nos pages.  

![Cover](https://github.com/FlorentRVE/projet_game/blob/1ec5f1dd7d044d8cf1f1fd15aa0c1fb75c0de6c8/img_2.png)

Ce fichier CSS contient un reset de base. Par la suite à chaque utilisation de Tailwind dans le code HTML, ce code sera modifier dynamiquement et le nouveau css sera ajouté à la suite du reset.  
Le **« --watch »** permet de rester à l’écoute des changements et modifier le fichier CSS dynamiquement.  

![Cover](https://github.com/FlorentRVE/projet_game/blob/1ec5f1dd7d044d8cf1f1fd15aa0c1fb75c0de6c8/img_3.png)

On se retrouve alors avec cette structure.   
**Node_modules** et les autres fichiers ont été généré automatiquement lors de l’installation de Tailwind via NPM.   
Le fichier **gitignore** permet de définir quelles fichiers on ne veut pas uploader sur GitHub. Ici on y ajoute « Node_modules » car volumineux.  


# 3) Backend : Nodejs et Express

Ici on va créer notre API appelé par le Front pour afficher les personnages et vérifier l’utilisateur.

## 1) NodeJS:

Node est le runtime qui permet d'écrire toutes nos tâches côté serveur, en JavaScript.  
Node ajoute également des fonctionnalités que le JavaScript du navigateur standard ne possède pas, comme par exemple l'accès au système de fichiers local  

Installation  de NodeJS:

![Cover](https://github.com/FlorentRVE/projet_game/blob/1ec5f1dd7d044d8cf1f1fd15aa0c1fb75c0de6c8/img_4.png)


Direction le site officiel de Nodejs pour télécharger la dernière version.  
Pour vérifier sa version de node on utilisera les commandes suivantes :
```javascript
node -v
```
ou
```javascript
node --version
```
Initier son projet:

Une fois Node installé et avec lui NPM, on va pouvoir initier notre projet.
Pour cela on exécute la commande :
```javascript
npm init
```
On peut appuyer entrée pour passer toutes les question sauf à la question « définir un point d’entrée » on choisi **server.js** (que l’on va créer ensuite).  

Cela va créer un fichier **package.json** dans lequel on retrouvera les détails des dépendances utilisé dans notre projet.  

![Cover](https://github.com/FlorentRVE/projet_game/blob/1ec5f1dd7d044d8cf1f1fd15aa0c1fb75c0de6c8/img_5.png)


Ce point d’entrée server.js est le fichier JS à partir duquel l’exécution commence.  

## 2) Express:

Express est un framework reposant sur Node, qui facilite la création et la gestion des serveurs Node 

Installation  d’Express:
```javascript
npm install express
```  
Une fois installé, on crée un fichier **app.js** qui contiendra notre application Express.

A ce stade on a nos 2 fichiers server.js et app.js.

On va voir comment va se structurer notre API par la suite.

## 3) Structure de notre application API:

### >server.js est le point d’entrée de l’application et s’occupera seulement de la logique serveur ( écoute de port, gestion d’erreur etc)

### >app.js est notre application Express

Dans la suite on séparera la logique de notre application app en plusieurs morceaux (même si il est possible de tout mettre dans un même fichier.)

### >Un dossier Route qui va contenir des routes qu’on aura défini grâce à la classe express.Router. On peut considérer cela comme une mini application qui gérera exclusivement les routes.

Le Routage fait référence à la définition de points finaux d’application (URI) et à la façon dont ils répondent aux demandes client.

Exemple :
```javascript
 app.get('/exemple', function afficher (req, res) {
  res.send('Hello World!');
});
```
Exécute la fonction afficher si il y a une requête GET à l’adresse ‘ /exemple’


### >Un dossier Controller qui va contenir les middlewares  qu’on aura aussi défini et qui seront liés à une route.
Les **middlewares** sont des fonctions qui peuvent accéder à la requête HTTP (l’objet Request (**req**)) et permet d’établir les réponses à ces requêtes (l’objet Response (**res**)). 

Ainsi pour reprendre l’exemple précédent on aura :

Exemple :
```javascript
 app.get('/exemple', fichierController.afficher);
```
Le middleware **afficher** est alors défini dans un fichier séparé fichierController.
Fichier que l’on va importer pour pouvoir l’utiliser.

Cela permet d’avoir un code mieux organisé et plus lisible surtout quand on aura des middlewares plus long et complexe.


### >Un dossier Model qui va contenir tout ce qui est relatif aux données qu’on utilisera dans notre API, cela pourra être une connection à une BDD ou un fichier JSON par exemple. 

On aura donc en résumé une structure comme tel :

![Cover](https://github.com/FlorentRVE/projet_game/blob/5689e3dc27ab0238947565d923415f0958e9dcfb/schema.png)

### Test avec POSTMAN

Une fois la mise en place achevé, on lance notre API depuis le terminal en se placant dans le dossier BACK puis avec la commande:

```javascript
node server.js
```

On peut alors tester notre API avec un utilitaire comme POSTMAN

![Cover](https://github.com/FlorentRVE/projet_game/blob/ef52239185fd20d508779caf65f75080fd9ae8be/postman.PNG)

On récupère bien le tableau des utilisateurs en effectuant une requête GET à l'adresse défini : 

> http://localhost:3000/api/user

# 4) Frontend : ajout du JS pour appeler L’API et récupérer/envoyer données

Une fois notre backend crée et opérationnell, on peut revenir sur notre Frontend pour y intégrer la logique permettant d'appeller notre API au besoin.  

On prendra ici comme exemple la page de login.html, le reste est à retrouver dans le code lui-même.   

On va donc crée un fichier login.js.   
C'est le script qui sera appelé sur notre page login.html.

Sur cette page on doit envoyer un couple d'identifiant à l'API et recevoir une réponse.  

Pour ce faire on utilisera **FETCH** avec la méthode POST.  
L'API FETCH fournit une interface pour la récupération des ressources à travers le réseau.  

```javascript
// Récupère les inputs grâce au DOM
let pseudo = document.getElementById("id");
let mdp = document.getElementById("mdp");

// // Récupère le bouton grâce au DOM
let goBtn = document.getElementById("go_btn");

// // Création d'objet "player" vide qui viendra acceuillir les données des inputs
let player = {}

// Au click sur le boutton on va déclencher les actions suivantes
goBtn.addEventListener("click", (e) => {

    player = {
        pseudo: pseudo.value,  // On rempli notre objet "player" avec les valeurs récupérés de nos inputs
        mdp: mdp.value
    }

            // Définition du corps de la requête POST
    
            let option = {
                method: 'POST', // La méthode utilisé , ici POST
                headers: {'Content-Type': 'application/json; charset=utf-8' }, // Détail sur le type de donnée envoyé
                body: JSON.stringify(player), // On converti notre objet en JSON pour pouvoir l'envoyer au serveur
            }
    
            // Requête POST à l'API
    
            fetch("http://localhost:3000/api/user/login", option) // On utilise FETCH avec l'URL de la ressource à aller chercher et le corps de requête
            .then(response => response.json())
            .then(() => {
                window.location.href = "chara_select.html?pseudo=" + player.pseudo; // Redirection vers la page choix du personnage avec le pseudo du joueur en paramètre
            })
            .catch(err => console.log(err))
    
            e.preventDefault() // Empeche l'activation du "submit" du boutton qui peut produire une erreur

})


```

# 5) Création du jeu avec Kaboom JS

Kaboom.js est ...
