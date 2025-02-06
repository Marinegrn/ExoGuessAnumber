// Etape 1.1: Création d'une fonction qui demande un nombre au joueur
function promptNumber(message) {
    let numberPromptPlayer = prompt(message); // Utilisation d'un prompteur
    return numberPromptPlayer;
}


// Création d'une 2eme fonction avec 3 conditions
function didIWin(givenNumber) {

    // Déclaration de la variable winner qui stocke un booléen
    let winner = false;
    
    //Déclaration des conditions
    if (givenNumber < 22) {        
        alert('Plus grand !');

    } else if (givenNumber > 22) {
        alert('Plus petit');

    } else if (givenNumber == 22) {

        winner = true;
        alert('Bravo ! Vous avez deviné le nombre');

    }
    return (winner);
}


// Création de la fonction qui permet de lancer le jeu
function gamePlay() {

    //Déclaration des variables qui stockent en valeurs le return des fonctions qu'on appelle 
    let askNumber = promptNumber('Le joueur 1 commence la partie !');
    let givenNumber = promptNumber('Donne-moi un nombre'); 
    let gameWin = didIWin(givenNumber, askNumber);

    // Boucle "Tant que gameWin est valorisé à false, alors c'est perdu ! Il faut rejouer et donner un autre nombre"
    while (gameWin == false)  {

        givenNumber = promptNumber('Perdu ! Donne-moi un autre nombre'); 
        gameWin = didIWin(givenNumber);

    };

}

gamePlay();


// Création de la fonction du joueur 1
function askPlayerOne() {

    askNumber = promptNumber('Donne-moi un nombre entre 0 et 50');

    if (askNumber > 50) {
        alert('Le nombre doit être compris entre 0 et 50 !');
        return askPlayerOne();
    } else {
        return askNumber;
    }

}



