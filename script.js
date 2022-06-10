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
let time = 10;
let score = 0;
let palabraAleatoria = randomWords();


// etiquetas HTML
const h1 = document.querySelector("#randomWord");
const input = document.querySelector('#text');

// funciones
function randomWords() {
  const indice = Math.floor(Math.random() * words.length);
  return words[indice];

}

function addToDOM() {
  h1.textContent = palabraAleatoria;


}

// inicio del juego
addToDOM()


input.addEventListener('keyup', function (event) {

  if (event.keyCode == 13) {
    console.log('Esto es un enter');
    
    let palabraingresada = input.value;

    if (palabraingresada == palabraAleatoria) {
      console.log('Ganaste')
    

    }
  }


});