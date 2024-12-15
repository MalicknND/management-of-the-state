import React from "react";
import { COLORS } from "../../constants/colors";
import Theme from "./Theme";

const Header = ({ setTheme }) => {
  return (
    <header className="bg-white d-flex justify-content-between align-items-center rounded p-3">
      <h1 className="fs-5 fw-normal">Notes</h1>
      <div className="d-flex gap-2">
        <Theme
          setTheme={setTheme}
          bgColor={COLORS.gradientOne.color}
          bgImage={COLORS.gradientOne.image}
        />
        <Theme
          setTheme={setTheme}
          bgColor={COLORS.gradientTwo.color}
          bgImage={COLORS.gradientTwo.image}
        />
        <Theme
          setTheme={setTheme}
          bgColor={COLORS.gradientThree.color}
          bgImage={COLORS.gradientThree.image}
        />
        <Theme
          setTheme={setTheme}
          bgColor={COLORS.gradientFour.color}
          bgImage={COLORS.gradientFour.image}
        />
        <Theme
          setTheme={setTheme}
          bgColor={COLORS.gradientFive.color}
          bgImage={COLORS.gradientFive.image}
        />
        <Theme
          setTheme={setTheme}
          bgColor={COLORS.gradientSix.color}
          bgImage={COLORS.gradientSix.image}
        />
      </div>
    </header>
  );
};

export default Header;
