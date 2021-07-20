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

var deck = [
  {
    suit: 'hearts',
    rank: 2
  },
  {
    suit: 'hearts',
    rank: 3
  },
  {
    suit: 'hearts',
    rank: 4
  },
  {
    suit: 'hearts',
    rank: 5
  },
  {
    suit: 'hearts',
    rank: 6
  },
  {
    suit: 'hearts',
    rank: 7
  },
  {
    suit: 'hearts',
    rank: 8
  },
  {
    suit: 'hearts',
    rank: 9
  },
  {
    suit: 'hearts',
    rank: 10
  },
  {
    suit: 'hearts',
    rank: 'J'
  },
  {
    suit: 'hearts',
    rank: 'Q'
  },
  {
    suit: 'hearts',
    rank: 'K'
  },
  {
    suit: 'hearts',
    rank: 'A'
  },
  {
    suit: 'diamonds',
    rank: 2
  },
  {
    suit: 'diamonds',
    rank: 3
  },
  {
    suit: 'diamonds',
    rank: 4
  },
  {
    suit: 'diamonds',
    rank: 5
  },
  {
    suit: 'diamonds',
    rank: 6
  },
  {
    suit: 'diamonds',
    rank: 7
  },
  {
    suit: 'diamonds',
    rank: 8
  },
  {
    suit: 'diamonds',
    rank: 9
  },
  {
    suit: 'diamonds',
    rank: 10
  },
  {
    suit: 'diamonds',
    rank: 'J'
  },
  {
    suit: 'diamonds',
    rank: 'Q'
  },
  {
    suit: 'diamonds',
    rank: 'K'
  },
  {
    suit: 'diamonds',
    rank: 'A'
  },
  {
    suit: 'clubs',
    rank: 2
  },
  {
    suit: 'clubs',
    rank: 3
  },
  {
    suit: 'clubs',
    rank: 4
  },
  {
    suit: 'clubs',
    rank: 5
  },
  {
    suit: 'clubs',
    rank: 6
  },
  {
    suit: 'clubs',
    rank: 7
  },
  {
    suit: 'clubs',
    rank: 8
  },
  {
    suit: 'clubs',
    rank: 9
  },
  {
    suit: 'clubs',
    rank: 10
  },
  {
    suit: 'clubs',
    rank: 'J'
  },
  {
    suit: 'clubs',
    rank: 'Q'
  },
  {
    suit: 'clubs',
    rank: 'K'
  },
  {
    suit: 'clubs',
    rank: 'A'
  },
  {
    suit: 'spades',
    rank: 2
  },
  {
    suit: 'spades',
    rank: 3
  },
  {
    suit: 'spades',
    rank: 4
  },
  {
    suit: 'spades',
    rank: 5
  },
  {
    suit: 'spades',
    rank: 6
  },
  {
    suit: 'spades',
    rank: 7
  },
  {
    suit: 'spades',
    rank: 8
  },
  {
    suit: 'spades',
    rank: 9
  },
  {
    suit: 'spades',
    rank: 10
  },
  {
    suit: 'spades',
    rank: 'J'
  },
  {
    suit: 'spades',
    rank: 'Q'
  },
  {
    suit: 'spades',
    rank: 'K'
  },
  {
    suit: 'spades',
    rank: 'A'
  }
];
function shuffle(deckInput) {
  return deckInput.sort(() => Math.random() - 0.5);
  console.log('shuffle works');
}

function dealCards(deckShuffled, playersInput) {
  var playersArr = playersInput;
  console.log('from dealcards');
  var lastCardDelt = 0;
  console.log(players.length);
  for (var i = 0; i < players.length; i++) {
    console.log('from first loop');
    for (var j = 0; j < 2; j++) {
      console.log(deckShuffled[lastCardDelt]);
      playersArr[i].hand.push(deckShuffled[lastCardDelt]);
      lastCardDelt++;
    }
  }
  return playersArr;
}

function determineWinner(playersInput) {

}

var gameDeck = shuffle(deck);

dealCards(gameDeck, players);
determineWinner(dealCards(gameDeck, players));

// console.log('players: ', dealCards(gameDeck, players));

// var shuffledDeck = shuffle(deck);

// console.log(shuffle(deck));
