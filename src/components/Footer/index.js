import React from 'react';
import { Link } from 'react-router-dom';

import drinkIcon from '../../images/drinkIcon.svg';
import exploreIcon from '../../images/exploreIcon.svg';
import mealIcon from '../../images/mealIcon.svg';

function Footer() {
  return (
    <div data-testid="footer">
      <Link to="/bebidas">
        <input type="image" src={drinkIcon} alt="Drink Icon" data-testid="drinks-bottom-btn" />
      </Link>
      <Link to="/explorar">
        <input type="image" src={exploreIcon} alt="Search Icon" data-testid="explore-bottom-btn" />
      </Link>
      <Link to="/comidas">
        <input type="image" src={mealIcon} alt="Meal icon" data-testid="food-bottom-btn" />
      </Link>
    </div>
  );
}

export default Footer;
