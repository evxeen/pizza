import { useState } from 'react';

function Categories() {
  const [activeCategory, setActiveCategory] = useState(0);
  const categoties = ['Все', 'Мясные', 'Вегетарианская', 'Гриль', 'Острые', 'Закрытые'];

  const selectCategory = (index) => {
    setActiveCategory(index);
  };

  return (
    <div className="categories">
      <ul>
        {categoties.map((el, index) => (
          <li
            key={index}
            onClick={() => selectCategory(index)}
            className={activeCategory === index ? 'active' : null}>
            {el}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Categories;
