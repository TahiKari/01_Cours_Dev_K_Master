// Création d'une carte en JS
// Pour commencer, nous allons créer une méthode permettant de créer une carte et de l'ajouter à notre zone de jeu. Depuis le JavaScript, nous allons créer le HTML de la carte et nous allons l'injecter dans notre div#game-board pour l'afficher dans la page.

const cards = [
  'https://picsum.photos/id/237/100/100',
  'https://picsum.photos/id/238/100/100',
  'https://picsum.photos/id/239/100/100',
  'https://picsum.photos/id/240/100/100',
  'https://picsum.photos/id/241/100/100',
  'https://picsum.photos/id/242/100/100',
  'https://picsum.photos/id/243/100/100',
  'https://picsum.photos/id/244/100/100'
]

const gameBoard = document.getElementById('game-board')

function createCard (CardUrl) {
  const card = document.createElement('div')
  card.classList.add('card')
  card.dataset.value = CardUrl

  const cardContent = document.createElement('img')
  cardContent.classList.add('card-content')
  cardContent.src = `${CardUrl}`
  card.appendChild(cardContent)
  return card
}

function duplicateArray (arraySimple) {
  let arrayDouble = []
  arrayDouble.push(...arraySimple)
  arrayDouble.push(...arraySimple)
  return arrayDouble
}

function shuffleArray(arrayToshuffle){
  const arrayShuffled = arrayToshuffle.sort(() => 0.5 - Math.random());
  return arrayShuffled;
}

let allCards = duplicateArray(cards);
//Mélanger le tableau
allCards = shuffleArray(allCards);
allCards.forEach(card => {
    const cardHtml = createCard(card);
    gameBoard.appendChild(cardHtml);
})




