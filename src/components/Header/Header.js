import React from "react";
import { COLORS } from "../../constants/colors";
import Theme from "./Theme";

const Header = () => {
  return (
    <header className="bg-white d-flex justify-content-between align-items-center rounded p-3">
      <h1 className="fs-5 fw-normal">Notes</h1>
      <div className="d-flex gap-2">
        <Theme
          bgColor={COLORS.gradientOne.color}
          bgImage={COLORS.gradientOne.image}
        />
        <Theme
          bgColor={COLORS.gradientTwo.color}
          bgImage={COLORS.gradientTwo.image}
        />
        <Theme
          bgColor={COLORS.gradientThree.color}
          bgImage={COLORS.gradientThree.image}
        />
        <Theme
          bgColor={COLORS.gradientFour.color}
          bgImage={COLORS.gradientFour.image}
        />
        <Theme
          bgColor={COLORS.gradientFive.color}
          bgImage={COLORS.gradientFive.image}
        />
        <Theme
          bgColor={COLORS.gradientSix.color}
          bgImage={COLORS.gradientSix.image}
        />
      </div>
    </header>
  );
};

export default Header;
