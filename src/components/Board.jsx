import React from "react";
import Card from "./Card";

const Board = ({ cards, gutter }) => {
  return (
    <div className="board">
      <h1>Holiday Movie Bingo!</h1>
      {cards.map((row, index) => (
        <div className="row" key={`row-${index}`}>
          {row.map((value, cardIndex) => (
            <Card key={`card-${index}-${cardIndex}`} gutter={gutter}>
              {value}
            </Card>
          ))}
        </div>
      ))}
      <style jsx>{`
        h1 {
          margin-bottom: 40px;
          font-size: 40px;
        }

        .board {
          padding: ${gutter}px;
          max-width: 900px;
          margin: 100px auto;
        }

        .row {
          display: flex;
          justify-content: space-between;
          margin-bottom: ${gutter}px;
          min-height: calc(15vh - ${gutter}px);
        }

        @supports ((background-clip: text) or (-webkit-background-clip: text))
          and
          (
            (text-fill-color: transparent) or
              (-webkit-text-fill-color: transparent)
          ) {
          h1 {
            background-image: linear-gradient(90deg, #ff2b2b 0%, #0eec4b 70%);
            background-size: 400px;
            -webkit-background-clip: text;
            background-clip: text;
            -webkit-text-fill-color: transparent;
            text-fill-color: transparent;
          }
        }
      `}</style>
    </div>
  );
};

export default Board;
