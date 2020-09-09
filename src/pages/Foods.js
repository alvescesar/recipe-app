import React, { useState, useEffect } from 'react';
import ComponentHeader from '../components/Header/ComponenteHeader';
import fetchFoods from '../services/fetchFoods';

const Foods = () => {
  const [loading, setLoading] = useState(true);
  const [foods, setFoods] = useState([]);

  useEffect(() => {
    fetchFoods().then((data) => setFoods(data));
    setLoading(false);
  }, []);

  return loading ? (
    <section>Loading...</section>
  ) : (
    <section>
      <ComponentHeader />
      <h1>Comidas</h1>
      {foods.map((food, index) => {
        if (index < 12) {
          return (
            <div key={food.idMeal}>
              <h3>{food.strMeal}</h3>
              <img src={food.strMealThumb} alt="Meal" />
            </div>
          );
        }
        return null;
      })}
    </section>
  );
};

export default Foods;
