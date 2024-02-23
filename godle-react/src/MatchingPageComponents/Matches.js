import React, { useState, useEffect } from "react";
import Swipeable from "react-swipy";
import Swiper from "./Swiper";
import SwipeableCards from "./SwipeableCard";
import DisplayCardAnimation from "./DisplayCardAnimation";
import Button from "./Button";

const Matches = ({ user, matchedDeities }) => {
  const [cards, setCards] = useState(undefined);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000);
    setCards(matchedDeities);
    console.log(cards);
    return () => clearTimeout(timer);
  }, [matchedDeities, setCards]);

  const remove = () =>
    setCards((prevCards) => prevCards.slice(1, prevCards.length));

  const aboutContainer = {
      overflowY: "auto",
    };

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
              buttons={({ right, left }) => {
                const swipeFunction = { right, left };
                Swiper.initializeSwiper(swipeFunction);
                return (
                  <div style={actionsStyles}>
                    <Button
                      id="SWIPELEFT"
                      onClick={Swiper.swipeLeft}
                      style={leftButtonStyles}
                    >
                      Reject
                    </Button>
                    <Button onClick={Swiper.swipeRight} style={rightButtonStyles}>
                      Accept
                    </Button>
                  </div>
                );
              }}
              onAfterSwipe={() => remove(0)}
            >
              <SwipeableCards
                name={cards[0].name}
                aboutMe={cards[0].description}
                image={"./images/" + cards[0].imagePath}
              ></SwipeableCards>
            </Swipeable>
          </div>
        )}
      </div>
    </div>
  );
};

export default Matches;
