import { useState } from 'react';

function Categories() {
  const [activeCategory, setActiveCategory] = useState(0);
  const categoties = ['Все', 'Мясные', 'Вегетарианская', 'Гриль', 'Острые', 'Закрытые'];

  const selectCategory = (id) => {
    setActiveCategory(id);
  };

  return (
    <div className="categories">
      <ul>
        {categoties.map((el, id) => (
          <li onClick={() => selectCategory(id)} className={activeCategory === id ? 'active' : ''}>
            {el}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Categories;
