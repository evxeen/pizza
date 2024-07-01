import { useState, useEffect } from 'react';
import axios from 'axios';

import Categories from '../components/Categories';
import Sorting from '../components/Sorting';
import PizzaCard from '../components/PizzaCard';

function Main() {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get('https://667f0707f2cb59c38dc7d61e.mockapi.io/items').then((res) => {
      setData(res.data);
    });
  }, []);

  return (
    <>
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
    </>
  );
}

export default Main;
