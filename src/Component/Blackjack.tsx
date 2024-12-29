import React, { useState } from "react";
import "../Styles/Blackjack.css";

// Types for card and player
type Card = {
  rank: string;
  suit: string;
  value: number;
};

type Player = {
  name: string;
  hand: Card[];
  score: number;
};

// Constants for suits, ranks, and card values
const suits = ["Hearts", "Diamonds", "Clubs", "Spades"];
const ranks = ["2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K", "A"];
const cardValues: { [key: string]: number } = {
  "2": 2,
  "3": 3,
  "4": 4,
  "5": 5,
  "6": 6,
  "7": 7,
  "8": 8,
  "9": 9,
  "10": 10,
  "J": 10,
  "Q": 10,
  "K": 10,
  "A": 11,
};

const Blackjack: React.FC = () => {
  const [deck, setDeck] = useState<Card[]>([]);
  const [player, setPlayer] = useState<Player>({ name: "Player", hand: [], score: 0 });
  const [dealer, setDealer] = useState<Player>({ name: "Dealer", hand: [], score: 0 });
  const [gameOver, setGameOver] = useState<boolean>(false);
  const [message, setMessage] = useState<string>("");

  // Function to initialize the deck
  const initializeDeck = () => {
    const newDeck: Card[] = [];
    for (let suit of suits) {
      for (let rank of ranks) {
        newDeck.push({ rank, suit, value: cardValues[rank] });
      }
    }
    return shuffleDeck(newDeck);
  };

  // Function to shuffle the deck
  const shuffleDeck = (deck: Card[]) => {
    for (let i = deck.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [deck[i], deck[j]] = [deck[j], deck[i]];
    }
    return deck;
  };

  // Function to deal a card to a player
  const dealCard = (player: Player, deck: Card[]) => {
    const card = deck.pop()!;
    player.hand.push(card);
    player.score += card.value;
    return card;
  };

  // Function to start a new game
  const startGame = () => {
    // Reset state
    setMessage("");
    setGameOver(false);
    setPlayer({ name: "Player", hand: [], score: 0 });
    setDealer({ name: "Dealer", hand: [], score: 0 });
    
    const shuffledDeck = initializeDeck();
    setDeck(shuffledDeck);

    let newPlayer = { ...player };
    let newDealer = { ...dealer };

    // Deal initial cards
    dealCard(newPlayer, shuffledDeck);
    dealCard(newPlayer, shuffledDeck);
    dealCard(newDealer, shuffledDeck);
    dealCard(newDealer, shuffledDeck);

    setPlayer(newPlayer);
    setDealer(newDealer);
    setDeck(shuffledDeck);
  };

  // Function to handle the "Hit" action
  const handleHit = () => {
    if (gameOver) return;

    const newPlayer = { ...player };
    const shuffledDeck = [...deck];
     dealCard(newPlayer, shuffledDeck);

    if (newPlayer.score > 21) {
      setPlayer(newPlayer);
      setMessage("Player busts! You lose.");
      setGameOver(true);
    } else {
      setPlayer(newPlayer);
      setDeck(shuffledDeck);
    }
  };

  // Function to handle the "Stand" action
  const handleStand = () => {
    if (gameOver) return;

    let newDealer = { ...dealer };
    let shuffledDeck = [...deck];

    // Dealer's turn: Keep hitting if the score is less than 17
    while (newDealer.score < 17) {
      dealCard(newDealer, shuffledDeck);
    }

    setDealer(newDealer);
    setDeck(shuffledDeck);

    // Determine the outcome of the game
    if (newDealer.score > 21) {
      setMessage("Dealer busts! You win.");
    } else if (newDealer.score > player.score) {
      setMessage("Dealer wins.");
    } else if (newDealer.score < player.score) {
      setMessage("You win!");
    } else {
      setMessage("It's a tie!");
    }

    setGameOver(true);
  };

  // Function to render each card
  const renderCard = (card: Card) => {
    return `${card.rank} of ${card.suit}`;
  };

  // Reload the page when the replay button is clicked
  const handleReplay = () => {
    window.location.reload();
  };

  return (
    <div className="blackjack-container">
      <h1>Blackjack Game</h1>

      {/* Start New Game Button */}
      {!gameOver && (
        <button onClick={startGame}>
          Start New Game
        </button>
      )}

      {/* Replay Button that appears after game over */}
      {gameOver && (
        <button onClick={handleReplay}>
          Replay
        </button>
      )}

      {/* Player section */}
      <div className="player-section">
        <h2>{player.name}'s Hand</h2>
        <div>{player.hand.map((card, index) => <p key={index}>{renderCard(card)}</p>)}</div>
        <p>Score: {player.score}</p>
        {!gameOver && (
          <>
            <button onClick={handleHit}>Hit</button>
            <button onClick={handleStand}>Stand</button>
          </>
        )}
      </div>

      {/* Dealer section */}
      <div className="dealer-section">
        <h2>{dealer.name}'s Hand</h2>
        <div>
          {dealer.hand.map((card, index) => (
            <p key={index}>{renderCard(card)}</p>
          ))}
        </div>
        <p>Score: {dealer.score}</p>
      </div>

      <p>{message}</p>
    </div>
  );
};

export default Blackjack;
