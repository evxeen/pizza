import React from 'react';
import Header from './components/Header';
import Categories from './components/Categories';
import Sorting from './components/Sorting';
import PizzaCard from './components/PizzaCard';

import data from './assets/db-1637762081903.json';
import './scss/app.scss';

function App() {
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
                <PizzaCard
                  key={obj.id}
                  image={obj.imageUrl}
                  title={obj.title}
                  types={obj.types}
                  sizes={obj.sizes}
                  price={obj.price}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
