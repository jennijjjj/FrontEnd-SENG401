import React, { useState, useEffect } from "react";
import Swipeable from "react-swipy";
import SwipeableCards from "./SwipeableCard";
import DisplayCardAnimation from "./DisplayCardAnimation";
import Button from "./Button";
import { useNavigate } from "react-router-dom";

const Matches = ({ user, matchedDeities, setDeity }) => {
  const [cards, setCards] = useState(undefined);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    setLoading(true);
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000);
    const stringMatchedDeities = localStorage.getItem('MatchedDeities');
    if (stringMatchedDeities){
      const storedMatchedDeities = JSON.parse(stringMatchedDeities);
      setCards(storedMatchedDeities);
    } else{
      setCards(matchedDeities);
    }
    return () => clearTimeout(timer);
  }, [matchedDeities, setCards]);

  const remove = () => {
    setCards((prevCards) => {
      const newCards = prevCards.slice(1);
      if (newCards.length === 0) {
        alert("No more matches - returning to attributes");
        navigate('/');
      }
      return newCards;
    });
  }

  const handleswiperight = (card) => {
    if (user !== undefined) {
      fetch('/UserMatched', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ "email": user.username, card })
      })
        .then(response => {
          if (response.ok) {
            setDeity(card);
            localStorage.setItem("deity", JSON.stringify(card));
          } else {
            alert("Error, please try again");
          }
        })
    } else {
      setDeity(card);
      localStorage.setItem("deity", JSON.stringify(card));
    }
  }

  const containerStyle = {
    display: "flex",
    justifyContent: "top",
    alignItems: "center",
    height: "100vh",
    flexDirection: "column",
  };

  const cardsContainerStyle = {
    display: "flex",
    overflowX: "auto",
    maxWidth: "100vw",
    padding: "20px",
  };

  const cardStyle = {
    marginRight: "10px", // Adjust spacing between cards
  };

  const actionsStyles = {
    display: "flex",
    justifyContent: "space-between",
    marginTop: 0,
  };

  const leftButtonStyles = {
    marginLeft: "10px",
  };

  const rightButtonStyles = {
    marginRight: "10px",
  };

  return (
    <div>
      <div style={containerStyle}>
        <h1>Matching Page</h1>

        {loading && (cards && cards.length > 0) && (
          <div style={cardsContainerStyle}>
            {cards.map((card, index) => (
              <div key={index} style={cardStyle}>
                <DisplayCardAnimation
                  name={card.name}
                  image={"./images/" + card.imagePath}
                ></DisplayCardAnimation>
              </div>
            ))}
          </div>
        )}

        {!loading && (cards && cards.length > 0) && (
          <div>
            <Swipeable
              onSwipe={(direction) => {
                if (direction === "right") {
                  handleswiperight(cards[0]);
                } else {
                  remove();
                }
              }}
              buttons={({ right, left }) => (
                <div style={actionsStyles}>
                  <Button onClick={() => left()} style={leftButtonStyles}>
                    Reject
                  </Button>
                  <Button onClick={() => right()} style={rightButtonStyles}>
                    Accept
                  </Button>
                </div>
              )}
            >
              <SwipeableCards
                name={cards[0].name}
                aboutMe={cards[0].description}
                image={"./images/" + cards[0].imagePath}
              />
            </Swipeable>
          </div>
        )}
      </div>
    </div>
  );
};

export default Matches;
