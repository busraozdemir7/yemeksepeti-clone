import { useEffect } from 'react';
import { useSelector, useDispatch } from "react-redux";
import Loader from '../components/Loader';
import Error from '../components/Error';
import RestCard from './../components/RestCard';
import { getRestaurants } from '../redux/actions/restaurantActions';

const Main = () => {
    // store'daki restaurant reducer'ına abone olmak
    const { isLoading, error, restaurants } = useSelector((store) => store.restaurant);

    // dispatch kurulumu
    const dispatch = useDispatch();

    // bileşen ekrana basıldığında api isteği at ve reducer'ı güncelle
    useEffect(() => {
        dispatch(getRestaurants())
    }, [])

    return (
        <div className='max-w-[1440px] mx-auto p-5'>
            <h1 className='text-3xl'>Tüm Restoranlar</h1>
            <div>
                {isLoading ? (
                    <Loader />
                ) : error ? (
                    <Error msg={error} retry={() => dispatch(getRestaurants())} />
                ) : (
                    <div className="grid gap-5 mt-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                        {restaurants.map((rest) => (
                            <RestCard key={rest.id} data={rest} />
                        ))}
                    </div>
                )}
            </div>
        </div>
    )
};

export default Main;
