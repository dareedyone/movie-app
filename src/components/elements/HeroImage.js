import React from "react";
import PropTypes from "prop-types";

import { StyledHeroImage } from "../styles/StyledHeroImage";
import Header from "./Header";

const HeroImage = ({ image, title, text }) => (
  <StyledHeroImage image={image}>
    <div className="heroimage-content">
      <div className="heroimage-text">
        <h1>{title}</h1>
        <p>{text}</p>
      </div>
    </div>
  </StyledHeroImage>
);
Header.propTypes = {
  image: PropTypes.string,
  title: PropTypes.string,
  text: PropTypes.string,
};
export default HeroImage;
