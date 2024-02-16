import React, { useState, useEffect } from "react";
import Swipeable from "react-swipy";
import Swiper from "./Swiper";
import SwipeableCards from "./SwipeableCard";
import DisplayCardAnimation from "./DisplayCardAnimation";
import Button from "./Button";

const Matches = () => {
  const [cards, setCards] = useState([
    { name: "Zeus", aboutMe: "God of Thunder", image: "/images/zeus.jpg" },
    { name: "ID0", aboutMe: "Description 0", image: "/images/ID0.jpg" },
    { name: "ID1", aboutMe: "Description 1", image: "/images/ID1.jpg" },
    { name: "ID2", aboutMe: "Description 2", image: "/images/ID2.jpg" }
  ]);

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 5000);

    return () => clearTimeout(timer);
  }, []);

  const remove = () =>
    setCards((prevCards) => prevCards.slice(1, prevCards.length));

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

        {loading && cards.length > 0 && (
          <div style={cardsContainerStyle}>
            {cards.map((card, index) => (
              <div key={index} style={cardStyle}>
                <DisplayCardAnimation
                  name={card.name}
                  image={card.image}
                ></DisplayCardAnimation>
              </div>
            ))}
          </div>
        )}

        {!loading && cards.length > 0 && (
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
                aboutMe={cards[0].aboutMe}
                image={cards[0].image}
              ></SwipeableCards>
            </Swipeable>
          </div>
        )}
      </div>
    </div>
  );
};

export default Matches;
