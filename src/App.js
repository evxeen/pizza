import React from 'react';
import Header from './components/Header';
import Categories from './components/Categories';
import Sorting from './components/Sorting';
import PizzaCard from './components/PizzaCard';

import './scss/app.scss';

function App() {
  return (
    <div className="App">
      <div class="wrapper">
        <Header />
        <div class="content">
          <div class="container">
            <div class="content__top">
              <Categories />
              <Sorting />
            </div>
            <h2 class="content__title">Все пиццы</h2>
            <div class="content__items">
              <PizzaCard />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
