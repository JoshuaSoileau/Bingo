import React from "react";

const Background = () => {
  return (
    <div className="fixed -bottom-32 md:bottom-0 right-0 left-0 z-0  hidden 2xs:block">
      {/** Big hill */}
      <div className="relative h-36 w-full bg-white">
        &nbsp;
        <div
          className={[
            "hill",
            `absolute bottom-full z-10`,
            `min-w-[800px] right-[-5%]`,
            `bg-white w-full h-96`,
            `transform translate-x-1/4`,
            "rounded",
          ].join(" ")}
        ></div>
        {/** Little hill */}
        <div
          className={[
            "hill",
            `absolute -left-1/4 bottom-full z-10`,
            `bg-white w-full h-96`,
            `min-w-[800px] right[-5%]`,
            "rounded",
          ].join(" ")}
        ></div>
        {/** Trees */}
        {[...Array(20)].map((_empty, index) => {
          const right = -89 + index * 100 - index;
          const bottom = 310 - (index % 4) * 30;

          const opacity = 1 - Math.random() * 0.5;

          return (
            <Tree2
              key={right}
              right={right}
              bottom={bottom}
              opacity={opacity}
            />
          );
        })}
      </div>
    </div>
  );
};

const Tree2 = ({ right = "", bottom = "", opacity = "" }) => (
  <div
    className={[
      `absolute right-32 bottom-96 z-0`,
      `bg-gray-300 text-gray-300`,
      `opacity: ${opacity};`,
    ]
      .filter(Boolean)
      .join(" ")}
    style={{
      transform: `scaleX(0.22) rotate(45deg)`,
      filter: `drop-shadow(-20px -20px 10px currentColor)`,
      right: `${right}px`,
      bottom: `${bottom}px`,
      opacity,
      width: "300px",
      height: "300px",
    }}
  />
);

// const Tree = styled.div(
//   ({ right = 400, bottom = 340, height = 300, opacity = 1 }) => [
//     tw`absolute right-32 bottom-96 z-0`,
//     tw`bg-gray-300 text-gray-300`,
//     `height: ${height}px;`,
//     `width: ${height}px;`,
//     `transform: scaleX(0.22) rotate(45deg);`,
//     `filter: drop-shadow(-20px -20px 10px currentColor);`,
//     `opacity: ${opacity};`,
//     right && `right: ${right}px;`,
//     bottom && `bottom: ${bottom}px;`,
//   ]
// );

export default Background;
