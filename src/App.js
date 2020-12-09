/* eslint-disable no-restricted-globals */
import React from "react";
import "twin.macro";
import "./styles/tailwind.css";

import { useLocalStorage } from "./hooks/useLocalStorage";
import { getInitialState } from "./utils";

import Octocat from "./components/Octocat";
import Background from "./components/Background";
import Board from "./components/Board";
import Head from "./components/Head";
import Snow from "./components/Snow";

function App() {
  const [state, setState] = useLocalStorage("state", getInitialState());
  const refresh = () => setState(getInitialState());

  return (
    <div tw="flex flex-col min-h-screen justify-evenly bg-gradient-to-b to-lightBlue-200 from-lightBlue-800 relative">
      <Head />
      <Octocat />

      <div tw="max-w-4xl mx-auto  xl:ml-32 relative z-10 py-12 lg:py-32">
        <h1 tw="px-4 md:px-0 font-serif font-extrabold text-5xl lg:text-6xl text-red-600 flex flex-col md:flex-row justify-between items-start mb-8">
          <strong className="headline">Hallmark Movie Bingo!</strong>
          <button
            tw="block my-6 md:my-0 order-first md:order-last"
            type="button"
            onClick={() => {
              if (confirm("Are you sure you want to refresh your tiles?"))
                refresh();
            }}
            aria-label="Refresh tiles?"
          >
            <span role="img" aria-label="Refresh icon">
              🔄
            </span>
          </button>
        </h1>

        <p tw="text-lg md:text-2xl text-green-300 lg:text-white mb-12  px-4 md:px-0">
          Because these movies are just unbearable&nbsp;
          <br tw="hidden md:block" />
          to watch otherwise...
        </p>

        <Board state={state} setState={setState} />

        <div className="prose prose-sm mt-24  px-4 md:px-0">
          <p tw="text-blue-900 mt-12">
            <strong tw="block">What?</strong>
            <span tw="text-sm">
              This is a silly game to play when watching crappy holiday movies
              on netflix.
              <br />
              This is a copy of&nbsp;
              <a
                href="https://tomrasmussen.netlify.app/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Tom Rasmussen
              </a>
              &apos;s awesome&nbsp;
              <a
                href="https://holidaymoviebingo.netlify.app/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Holiday Movie Bingo
              </a>
              &nbsp;game. This is basically just a pretty skin on top of his
              idea &amp; tiles (although I've added a bunch more tiles).
            </span>
          </p>
          <p tw="text-blue-900 mt-12">
            <strong tw="block">How?</strong>
            <span tw="text-sm">
              This is all open source! Click the octocat in the top right corner
              of the page to view the source.
              <br />
              <em tw="block mt-4">Cliffnotes</em>
              It's built with&nbsp;
              <a
                href="https://github.com/facebook/create-react-app"
                target="_blank"
                rel="noopener noreferrer"
              >
                create-react-app
              </a>
              ,&nbsp;
              <a
                href="https://tailwindcss.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                TailwindCSS
              </a>
              ,&nbsp;
              <a
                href="https://github.com/ben-rogerson/twin.macro"
                target="_blank"
                rel="noopener noreferrer"
              >
                Twin.Macro
              </a>
              , and&nbsp;
              <a
                href="https://github.com/JoshuaSoileau/Bingo/blob/master/src/components/Snow.js"
                target="_blank"
                rel="noopener noreferrer"
              >
                HTML Canvas
              </a>
              .
            </span>
          </p>
          <p tw="text-blue-900 mt-12">
            <strong tw="block">Can I suggest a new board tile/option?</strong>
            <span tw="text-sm">
              Heck yeah!
              <br />
              <a
                href="https://github.com/JoshuaSoileau/HolidayMovieBingo/edit/master/src/values.json"
                target="_blank"
                rel="noopener noreferrer"
              >
                Click here
              </a>
              &nbsp;to add in your new option, &amp; submit a PR. Or just get at
              me on&nbsp;
              <a
                href="https://twitter.com/joshua_soileau"
                target="_blank"
                rel="noopener noreferrer"
              >
                twitter
              </a>
              .
            </span>
          </p>
        </div>
      </div>

      <Background />
      <Snow />
    </div>
  );
}

export default App;
