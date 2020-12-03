import React, { useEffect, useRef, useState } from "react";
import { useAnimationFrame } from "../hooks/useAnimationFrame";

function reset(flake, canvas) {
  flake.x = Math.floor(Math.random() * canvas.width);
  flake.y = 0;
  flake.size = Math.random() * 3 + 2;
  flake.speed = Math.random() * 1 + 0.5;
  flake.velY = flake.speed;
  flake.velX = 0;
  flake.opacity = Math.random() * 0.5;
}

const flakeCount = 450;
let flakes = [];

const initFlakes = (canvas) => {
  for (var i = 0; i < flakeCount; i++) {
    var x = Math.floor(Math.random() * canvas.width),
      y = Math.floor(Math.random() * canvas.height),
      size = Math.random() * 3 + 4,
      speed = Math.random() * 1 + 0.5,
      opacity = Math.random() * 0.5;

    flakes.push({
      speed: speed,
      velY: speed,
      velX: 0,
      x: x,
      y: y,
      size: size,
      stepSize: Math.random() / 160,
      step: 0,
      opacity: opacity,
    });
  }
};

const Snow = () => {
  const canvas = useRef();
  const [mX, setMx] = useState(-100);
  const [mY, setMy] = useState(-100);

  const updateDimensions = () => {
    canvas.current.width = window.innerWidth;
    canvas.current.height = window.innerHeight;
  };

  const handeMouseMove = (event) => {
    setMx(event.clientX);
    setMy(event.clientY);
  };

  const tick = () => {
    const ctx = canvas?.current?.getContext("2d");
    ctx.clearRect(0, 0, canvas?.current?.width, canvas?.current?.height);

    for (var i = 0; i < flakeCount; i++) {
      var flake = flakes[i],
        x = mX,
        y = mY,
        minDist = 250,
        x2 = flake.x,
        y2 = flake.y;

      var dist = Math.sqrt((x2 - x) * (x2 - x) + (y2 - y) * (y2 - y));

      if (dist < minDist) {
        var force = minDist / (dist * dist),
          xcomp = (x - x2) / dist,
          ycomp = (y - y2) / dist,
          // deltaV = force / 2;
          deltaV = force;

        flake.velX -= deltaV * xcomp;
        flake.velY -= deltaV * ycomp;
      } else {
        flake.velX *= 0.98;
        if (flake.velY <= flake.speed) {
          flake.velY = flake.speed;
        }
        flake.velX += Math.cos((flake.step += 0.05)) * flake.stepSize;
      }

      ctx.fillStyle = "rgba(255,255,255," + flake.opacity + ")";
      flake.y += flake.velY;
      flake.x += flake.velX;

      if (flake.y >= canvas?.current?.height || flake.y <= 0) {
        reset(flake, canvas.current);
      }

      if (flake.x >= canvas?.current?.width || flake.x <= 0) {
        reset(flake, canvas.current);
      }

      ctx.beginPath();
      ctx.arc(flake.x, flake.y, flake.size, 0, Math.PI * 2);
      ctx.fill();
    }
  };

  useAnimationFrame(() => tick());

  useEffect(() => {
    updateDimensions();
    window.addEventListener("resize", updateDimensions);
    initFlakes(canvas.current);

    return () => {
      window.removeEventListener("resize", updateDimensions);
    };
  }, []);

  return (
    <canvas
      ref={canvas}
      className="fixed inset-0 z-10 pointer-events-none"
      onMouseMove={handeMouseMove}
    />
  );
};

export default Snow;
