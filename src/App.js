import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Categories from './components/Categories';
import Sorting from './components/Sorting';
import PizzaCard from './components/PizzaCard';

import './scss/app.scss';

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch('https://667f0707f2cb59c38dc7d61e.mockapi.io/items')
      .then((res) => res.json())
      .then((data) => setData(data))
      .catch((error) => console.error('Error:', error));
  }, []);

  fetch('https://667f0707f2cb59c38dc7d61e.mockapi.io/items')
    .then((res) => res.json())
    .then((data) => console.log(data))
    .catch((error) => console.error('Error:', error));

  return (
    <div className="App">
      <div className="wrapper">
        <Header />
        <div className="content">
          <div className="container">
            <div className="content__top">
              <Categories />
              <Sorting />
            </div>
            <h2 className="content__title">Все пиццы</h2>
            <div className="content__items">
              {data.map((obj) => (
                <PizzaCard key={obj.id} {...obj} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
