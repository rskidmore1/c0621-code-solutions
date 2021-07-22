console.log('Lodash is loaded:', typeof _ !== 'undefined');
//comment
var players = [
  {
    name: 'Bob',
    hand: []
  },
  {
    name: 'Sally',
    hand: []
  },
  {
    name: 'Jeff',
    hand: []
  },
  {
    name: '1950sfemalename',
    hand: []
  }
];

var suit = ['hearts', 'diamonds', 'clubs', 'spades'];

var rank = [2, 3, 4, 5, 6, 7, 8, 9, 10, 'J', 'Q', 'K', 'A'];
function generateDeck(rank, suit) {
  var deck = [];

  for (var i = 0; i < suit.length; i++) {
    var currentSuit = suit[i];
    for (var j = 0; j < rank.length; j++) {
      deck.push({ suit: currentSuit, rank: rank[j] });
    }
  }
  return deck;
}

function shuffle(deckInput) {
  return deckInput.sort(() => Math.random() - 0.5);
}

function dealCards(deckShuffled, playersInput) {
  var playersArr = playersInput;
  for (var i = 0; i < players.length; i++) {
    for (var j = 0; j < 2; j++) {
      playersArr[i].hand.push(deckShuffled[0]);

      deckShuffled.shift();
    }
  }
  return playersArr;
}

function cardValue(card) {
  var value = 0;
  switch (card) {
    case 'J':
    case 'K':
    case 'Q':
      value = 10;
      break;
    case 'A':
      value = 11;
      break;
    default:
      value = card;
      break;

  }
  return value;
}

function determineWinner(playersInput) {
  var playersArr = playersInput;
  var totaledCards = [];

  for (var i = 0; i < playersArr.length; i++) {

    var totalValue = cardValue(playersArr[i].hand[1].rank) + cardValue(playersArr[i].hand[0].rank);
    totaledCards.push(totalValue);
  }

  var largestCards = totaledCards[0];
  for (i = 0; i <= largestCards; i++) {
    if (totaledCards[i] > largestCards) {
      largestCards = totaledCards[i];
    }
  }
  var winningPlayer = totaledCards.indexOf(largestCards) + 1;
  console.log('Winner is player', winningPlayer);

}

determineWinner(dealCards(shuffle(generateDeck(rank, suit)), players));
