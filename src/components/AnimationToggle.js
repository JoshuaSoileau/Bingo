import React from "react";

const AnimationToggle = ({ enabled, set }) => {
  return (
    <span className="flex items-center  mt-2">
      <button
        type="button"
        name="animations"
        onClick={() => set(!enabled)}
        className={[
          `inline-block  mr-6  rounded-full  relative  transition-all duration-1000 ease-in-out  transform  shadow-inner`,
          `w-[32px] h-[16px]`,
          !enabled && `bg-gray-200`,
          enabled && `bg-green-400`,
        ].filter(Boolean).join(" ")}
      >
        <span
          className={[
            `absolute w-6 h-6 rounded-full bg-white`,
            `w-[12px] h-[12px]`,
            `top-[2px]`,
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
