// Déclaration de 2 variables, joueur 1 et nombres devinés
let player1 = 'Joueur 1';
let nbGuess1 = 0;

// Déclaration de range minimum et maximum
let rangeMin = 0;
let rangeMax = 50;


// Création d'une fonction qui demande un nombre au joueur
function promptNumber(message) {
    let numberPromptPlayer = prompt(message); // Utilisation d'un prompteur
    return numberPromptPlayer;
}


// Création d'une 2eme fonction avec 3 conditions
function didIWin(givenNumber) {

    // Déclaration de la variable winner qui stocke un booléen
    let winner = false;

     // Incrémentation du nombre de tentatives
     nbGuess1++;
    
    //Déclaration des conditions
    if (givenNumber < 22) {               
        alert('Plus grand ! \nNombre de tentatives: ' + nbGuess1);

        if (givenNumber > rangeMin) { // Si le nombre donnée par le joueur et supérieur au range minimum
            rangeMin = givenNumber;  // Le nombre donée devient le nouveau Range min ! 
        }

    } else if (givenNumber > 22) {
        alert('Plus petit. \nNombre de tentatives: ' + nbGuess1);

        if (givenNumber < rangeMax) { // Si le nombre donnée par le joueur et supérieur au range maximum
            rangeMax = givenNumber; // // Le nombre donnée devient le nouveau Range max !
        }

    } else if (givenNumber == 22) {

        winner = true;
        alert('Bravo ! Vous avez deviné le nombre en ' + nbGuess1 + ' tentatives. ');

    }
    return (winner);
}


// Création de la fonction qui permet de lancer le jeu
function gamePlay() {

    //Déclaration des variables qui stockent en valeurs le return des fonctions qu'on appelle 
    let givenNumber = promptNumber('Donne-moi un nombre entre ' + rangeMin + ' et ' + rangeMax); 
    let gameWin = didIWin(givenNumber);

    // Boucle "Tant que gameWin est valorisé à false, alors c'est perdu ! Il faut rejouer et donner un autre nombre"
    while (gameWin == false)  {

        givenNumber = promptNumber('Perdu ! Donne-moi un autre nombre ' + rangeMin + ' et ' + rangeMax); 
        gameWin = didIWin(givenNumber);

    };

}

gamePlay();


// Création de la fonction pour le joueur 1
function askPlayerOne() {

    let askNumber = promptNumber('Le nombre doit être compris entre 0 et 50. Essaye encore !');

    if (askNumber > 50) {
        alert('Le nombre doit être compris entre 0 et 50 !');
        return askPlayerOne();
    } else {
        return (winner);
    }

}



