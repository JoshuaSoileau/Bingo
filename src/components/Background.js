import React from "react";
import tw, { styled, css } from "twin.macro";

const Background = () => {
  return (
    <div tw="fixed bottom-0 right-0 left-0 z-0">
      {/** Big hill */}
      <div tw="relative h-36 w-full bg-white">
        &nbsp;
        <div
          className="hill"
          css={[
            tw`absolute bottom-full z-10`,
            css`
              min-width: 800px;
              right: -5%;
            `,
            tw`bg-white w-full h-96`,
            tw`transform translate-x-1/4`,
            rounded,
          ]}
        ></div>
        {/** Little hill */}
        <div
          className="hill"
          css={[
            tw`absolute -left-1/4 bottom-full z-10`,
            tw`bg-white w-full h-96`,
            css`
              min-width: 800px;
              right: -5%;
            `,
            rounded,
          ]}
        ></div>
        {/** Trees */}
        {[...Array(20)].map((_empty, index) => {
          const right = -89 + index * 100 - index;
          const bottom = 310 - (index % 4) * 30;

          const opacity = 1 - Math.random() * 0.5;

          return <Tree right={right} bottom={bottom} opacity={opacity} />;
        })}
      </div>
    </div>
  );
};

const Tree = styled.div(
  ({ right = 400, bottom = 340, height = 300, opacity = 1 }) => [
    tw`absolute right-32 bottom-96 z-0`,
    tw`bg-gray-300 text-gray-300`,
    `height: ${height}px;`,
    `width: ${height}px;`,
    `transform: scaleX(0.22) rotate(45deg);`,
    `filter: drop-shadow(-20px -20px 10px currentColor);`,
    `opacity: ${opacity};`,
    right && `right: ${right}px;`,
    bottom && `bottom: ${bottom}px;`,
  ]
);

const rounded = css`
  border-radius: 50% 50% 0% 0 / 100% 100% 0 0;
  box-shadow: 0 0 10px 10px white;
`;

export default Background;
