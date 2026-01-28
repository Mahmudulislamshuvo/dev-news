import React from "react";

const BeforeNav = () => {
  return (
    <>
      <div className="pointer-events-none absolute inset-0">
        <div
          className="absolute -left-32 top-10 h-80 w-80 rounded-full"
          style={{
            background:
              "radial-gradient(circle, var(--glow-strong), transparent 70%)",
          }}
        ></div>
        <div
          className="absolute right-0 top-52 h-72 w-72 rounded-full"
          style={{
            background: "radial-gradient(circle, var(--glow), transparent 70%)",
          }}
        ></div>
        <div className="noise absolute inset-0"></div>
      </div>
    </>
  );
};

export default BeforeNav;
