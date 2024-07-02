import {useSelector, useDispatch} from 'react-redux';

import {setCategory} from '../state/slices/filterSlice';

function Categories() {
    const dispatch = useDispatch();
    const {category} = useSelector((state) => state.filterSlice);
    const categories = ['Все', 'Мясные', 'Вегетарианская', 'Гриль', 'Острые', 'Закрытые'];

    return (
        <div className="categories">
            <ul>
                {categories.map((el, index) => (
                    <li
                        key={index}
                        onClick={() => dispatch(setCategory(index))}
                        className={category === index ? 'active' : null}>
                        {el}
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default Categories;
