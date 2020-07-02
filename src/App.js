import React from "react";
import Board from "./components/Board/Board";
import backImg from "./assets/images/question-mark.png";
import monkey from "./assets/images/monkey.png";
import fox from "./assets/images/fox.png";
import cow from "./assets/images/cow.png";
import dog from "./assets/images/dog.png";
import rabbit from "./assets/images/rabbit.png";
import tiger from "./assets/images/tiger.png";
import pig from "./assets/images/pig.png";
import mouse from "./assets/images/mouse.png";

function App() {
  const cards = buildCards();
  return (
    <div className="App">
      <Board cards={cards} />
    </div>
  );
}

export default App;

function buildCards() {
  let id = 0;
  const images = { monkey, fox, cow, dog, rabbit, tiger, pig, mouse };
  const cards = Object.keys(images).reduce((result, item) => {
    const getCard = () => ({
      id: id++,
      type: item,
      backImg,
      frontImg: images[item],
      flipped: false,
    });
    return [...result, getCard(), getCard()];
  }, []);
  return shuffle(cards);
}

function shuffle(arr) {
  let len = arr.length;
  for (let i = 0; i < len; i++) {
    let randomIdx = Math.floor(Math.random() * len);
    let copyCurrent = { ...arr[i] };
    let copyRandom = { ...arr[randomIdx] };
    arr[i] = copyRandom;
    arr[randomIdx] = copyCurrent;
  }
  return arr;
}
