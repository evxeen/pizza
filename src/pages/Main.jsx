import {useEffect} from 'react';

import {useDispatch, useSelector} from "react-redux";
import {fetchData} from "../state/slices/dataSlice";

import Categories from '../components/Categories';
import Sorting from '../components/Sorting';
import PizzaCard from '../components/PizzaCard';

function Main() {
    const dispatch = useDispatch();
    const {items} = useSelector(state => state.dataSlice);

    useEffect(() => {
        dispatch(fetchData());
    }, []);

    return (
        <>
            <div className="content__top">
                <Categories/>
                <Sorting/>
            </div>
            <h2 className="content__title">Все пиццы</h2>
            <div className="content__items">
                {items.map((obj) => (
                    <PizzaCard key={obj.id} {...obj} />
                ))}
            </div>
        </>
    );
}

export default Main;
