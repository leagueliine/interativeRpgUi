let goblinInimigo = document.getElementById('imgGoblin');
let expBar = document.getElementById('barraEvolucao');
let classeChar = document.getElementById('classeChar');
let levelChar = document.getElementById('levelChar');
let arrClasse = ['Súdito','soldado', 'Lord', 'King', 'Lord King', 'God', 'God King'];




goblinInimigo.addEventListener('click', () => {
  if(expBar.value == 3){
      levelUp();
  }else{
  expBar.value += 1;
  };

});

let contadorClasse = 0;
function trocaClasse () {
  classeChar.innerText = arrClasse[contadorClasse++];
};

function levelUp() {
  expBar.value = 0;
  let levelFormatado = parseInt(levelChar.innerText);
  levelFormatado++;
  levelChar.innerText = levelFormatado.toString();
  if(levelChar.innerText.includes('0')){
      trocaClasse();
  }
};



