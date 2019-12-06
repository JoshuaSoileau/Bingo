import React, { useState } from "react";

const Card = ({ children, gutter }) => {
  let [active, setActive] = useState(false);
  return (
    <button
      onClick={() => setActive(!active)}
      className={`${active ? "is-active" : ""}`}
    >
      <span>{children}</span>
      <style jsx>{`
        button {
          background-color: white;
          border-radius: 18px;
          box-shadow: 9px 7px 40px -6px rgba(0, 0, 0, 0.25);
          position: relative;
          width: calc(20% - ${gutter}px);
          font-size: 16px;
        }

        button::before {
          content: "";
          display: block;
          padding-bottom: 100%;
          width: 100%;
        }

        button:focus,
        button:active {
          outline: none;
        }

        button.is-active {
          background: #333;
          color: white;
        }

        span {
          position: absolute;
          left: ${gutter}px;
          right: ${gutter}px;
          text-align: center;
          top: 50%;
          transform: translateY(-50%);
        }

        @media (max-width: 768px) {
          button {
            border-radius: 4px;
          }
          span {
            font-size: 12px;
          }
        }
      `}</style>
    </button>
  );
};

export default Card;
