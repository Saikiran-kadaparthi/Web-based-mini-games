const board = document.querySelector('.gameboard');
const cards = Array.from(board.children);

cards.sort(() => Math.random() - 0.5);
cards.forEach(card => board.appendChild(card));


let firstCard = null;
let secondCard = null;
let lockBoard = false;

cards.forEach(card => {
  card.addEventListener('click', () => {

    if (lockBoard || card === firstCard) 
      return;
    card.classList.add('flipped');

    if (!firstCard) {
      firstCard = card;
      return;
    }

    secondCard = card;

    checkForMatch();
  });
});

function checkForMatch() {
  const firstValue = firstCard.querySelector('.front').textContent.trim();
  const secondValue = secondCard.querySelector('.front').textContent.trim();

  if (firstValue === secondValue) {
    disableMatchedCards();
  } else {
    unflipCards();
  }
}

function disableMatchedCards() {
  firstCard.style.pointerEvents = 'none';
  secondCard.style.pointerEvents = 'none';
  resetBoard();
}

function unflipCards() {
  lockBoard = true;
  setTimeout(() => {
    firstCard.classList.remove('flipped');
    secondCard.classList.remove('flipped');
    resetBoard();
  }, 1000);
}

function resetBoard() {
  [firstCard, secondCard, lockBoard] = [null, null, false];
}
