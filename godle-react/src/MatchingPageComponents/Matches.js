import React, { useState } from "react";
import Swipeable from "react-swipy";
import Swiper from "./Swiper";
import SwipeableCards from "./SwipeableCard";


const Matches = () => {
  const [cards, setCards] = useState([
    { name: "Zeus", aboutMe: "God of Thunder", image: "/images/cardBack.jpg" },
    { name: "ID0", aboutMe: "Description 0", image: "/images/ID0.jpg" },
    { name: "ID1", aboutMe: "Description 1", image: "/images/ID1.jpg" },
    { name: "ID2", aboutMe: "Description 2", image: "/images/ID2.jpg" }
  ]);

  const remove = () =>
    setCards((prevCards) => prevCards.slice(1, prevCards.length));

    const containerStyle = {
      display: 'flex',
      justifyContent: 'top',
      alignItems: 'center',
      height: '100vh', 
      flexDirection: "column", 
    };

  return (
    <div>
      <div style={containerStyle}>
      <h1>Matching Page</h1>
        
        {cards.length > 0 && (
          <div>
            <Swipeable
              buttons={({ right, left }) => {
                const swipeFunction = { right, left };
                Swiper.initializeSwiper(swipeFunction);
              }}
              onAfterSwipe={() => remove(0)}
            >
             <SwipeableCards 
                name={cards[0].name}
                aboutMe={cards[0].aboutMe}
                image={cards[0].image}></SwipeableCards>
            </Swipeable>
          </div>
        )}
      </div>

    </div>
    
  );
};

export default Matches;
