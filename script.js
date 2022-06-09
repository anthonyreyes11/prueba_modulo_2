const words = [
    'californication',
    'plataforma5',
    'black',
    'summer',
    'flea',
    'aeroplane',
    'peppers',
    
    'unlimited',
    'arcadium',
    'love',
    'getaway',
    'stadium',
    'quixoticelixer',
    'quarter',
    'snow',
    'dylan',
    'zephyr',
    'funky',
    'chili'
];
// variables globales
let palabraAleatoria; 
let time = 10;
let score= 0 ;

// etiquetas HTML
const h1= document.querySelector("#randomWord")

// funciones
function randomWords() {
    const indice= Math.floor(Math.random() * words.length)
    return words[indice]

}    

function addToDOM() {
    palabraAleatoria = randomWords();
    h1.textContent= palabraAleatoria
}

// inicio del juego
addToDOM()


