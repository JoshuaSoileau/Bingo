import React from "react";
import { GlobalStyles } from "twin.macro";

const Head = () => {
  return (
    <>
      <GlobalStyles />
      <link rel="preconnect" href="https://fonts.gstatic.com" />
      <link
        href="https://fonts.googleapis.com/css2?family=Noto+Sans:wght@400;700&display=swap"
        rel="stylesheet"
      />
      <link
        href="https://fonts.googleapis.com/css2?family=Varela+Round&display=swap"
        rel="stylesheet"
      />
    </>
  );
};

export default Head;
