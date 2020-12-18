import React from "react";
import tw from "twin.macro";

const AnimationToggle = ({ enabled, set }) => {
  return (
    <span tw="flex items-center  mt-2">
      <button
        type="button"
        name="animations"
        onClick={() => set(!enabled)}
        css={[
          tw`inline-block  mr-6  rounded-full  relative  transition-all duration-1000 ease-in-out  transform  shadow-inner`,
          `width: 32px; height: 16px;`,
          !enabled && tw`bg-gray-200`,
          enabled && tw`bg-green-400`,
        ]}
      >
        <span
          css={[
            tw`absolute w-6 h-6 rounded-full bg-white`,
            `height: 12px; width: 12px;`,
            `top: 2px;`,
            !enabled && `right: 18px;`,
            enabled && `right: 2px;`,
          ]}
        ></span>
      </button>
      Animations are {enabled ? "enabled" : "disabled"}
    </span>
  );
};

export default AnimationToggle;
