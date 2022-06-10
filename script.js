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
let palabraAleatoria;


// etiquetas HTML
const h1 = document.querySelector("#randomWord");
const input = document.querySelector('#text');
const timeSpan = document.querySelector('#timeSpan')
const scoreSpan = document.querySelector('#score')

// funciones
function randomWords() {
  const indice = Math.floor(Math.random() * words.length);
  return words[indice];
}

function addToDOM() {
  palabraAleatoria= randomWords();
  h1.textContent = palabraAleatoria;
  // ingresar el tiempo restante en la pagina
  span_time.textContent = time;
  // ingresar el puntaje en la pagina
  span_score.textContent = score;
}

// inicio del juego
addToDOM()


input.addEventListener('keyup', function (event) {

  if (event.keyCode == 13) {
    console.log('Esto es un enter');

    let palabraingresada = input.value;

    if (palabraingresada == palabraAleatoria) {
      console.log('Ganaste')
      //tiempo aumente 3 segundos 
      time += 3;
      score += 1;

    }
  }

});


