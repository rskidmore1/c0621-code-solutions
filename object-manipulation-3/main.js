console.log('Lodash is loaded:', typeof _ !== 'undefined');

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

// var deck = [
//   {
//     suit: 'hearts',
//     rank: 2
//   },
//   {
//     suit: 'hearts',
//     rank: 3
//   },
//   {
//     suit: 'hearts',
//     rank: 4
//   },
//   {
//     suit: 'hearts',
//     rank: 5
//   },
//   {
//     suit: 'hearts',
//     rank: 6
//   },
//   {
//     suit: 'hearts',
//     rank: 7
//   },
//   {
//     suit: 'hearts',
//     rank: 8
//   },
//   {
//     suit: 'hearts',
//     rank: 9
//   },
//   {
//     suit: 'hearts',
//     rank: 10
//   },
//   {
//     suit: 'hearts',
//     rank: 'J'
//   },
//   {
//     suit: 'hearts',
//     rank: 'Q'
//   },
//   {
//     suit: 'hearts',
//     rank: 'K'
//   },
//   {
//     suit: 'hearts',
//     rank: 'A'
//   },
//   {
//     suit: 'diamonds',
//     rank: 2
//   },
//   {
//     suit: 'diamonds',
//     rank: 3
//   },
//   {
//     suit: 'diamonds',
//     rank: 4
//   },
//   {
//     suit: 'diamonds',
//     rank: 5
//   },
//   {
//     suit: 'diamonds',
//     rank: 6
//   },
//   {
//     suit: 'diamonds',
//     rank: 7
//   },
//   {
//     suit: 'diamonds',
//     rank: 8
//   },
//   {
//     suit: 'diamonds',
//     rank: 9
//   },
//   {
//     suit: 'diamonds',
//     rank: 10
//   },
//   {
//     suit: 'diamonds',
//     rank: 'J'
//   },
//   {
//     suit: 'diamonds',
//     rank: 'Q'
//   },
//   {
//     suit: 'diamonds',
//     rank: 'K'
//   },
//   {
//     suit: 'diamonds',
//     rank: 'A'
//   },
//   {
//     suit: 'clubs',
//     rank: 2
//   },
//   {
//     suit: 'clubs',
//     rank: 3
//   },
//   {
//     suit: 'clubs',
//     rank: 4
//   },
//   {
//     suit: 'clubs',
//     rank: 5
//   },
//   {
//     suit: 'clubs',
//     rank: 6
//   },
//   {
//     suit: 'clubs',
//     rank: 7
//   },
//   {
//     suit: 'clubs',
//     rank: 8
//   },
//   {
//     suit: 'clubs',
//     rank: 9
//   },
//   {
//     suit: 'clubs',
//     rank: 10
//   },
//   {
//     suit: 'clubs',
//     rank: 'J'
//   },
//   {
//     suit: 'clubs',
//     rank: 'Q'
//   },
//   {
//     suit: 'clubs',
//     rank: 'K'
//   },
//   {
//     suit: 'clubs',
//     rank: 'A'
//   },
//   {
//     suit: 'spades',
//     rank: 2
//   },
//   {
//     suit: 'spades',
//     rank: 3
//   },
//   {
//     suit: 'spades',
//     rank: 4
//   },
//   {
//     suit: 'spades',
//     rank: 5
//   },
//   {
//     suit: 'spades',
//     rank: 6
//   },
//   {
//     suit: 'spades',
//     rank: 7
//   },
//   {
//     suit: 'spades',
//     rank: 8
//   },
//   {
//     suit: 'spades',
//     rank: 9
//   },
//   {
//     suit: 'spades',
//     rank: 10
//   },
//   {
//     suit: 'spades',
//     rank: 'J'
//   },
//   {
//     suit: 'spades',
//     rank: 'Q'
//   },
//   {
//     suit: 'spades',
//     rank: 'K'
//   },
//   {
//     suit: 'spades',
//     rank: 'A'
//   }
// ];

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
  var lastCardDelt = 0;
  for (var i = 0; i < players.length; i++) {
    for (var j = 0; j < 2; j++) {
      playersArr[i].hand.push(deckShuffled[lastCardDelt]);
      lastCardDelt++;
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

// var gameDeck = shuffle(deck);

determineWinner(dealCards(generateDeck(rank, suit), players));
