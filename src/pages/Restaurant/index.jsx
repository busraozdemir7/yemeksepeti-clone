import { useEffect } from "react";
import Container from '../../components/Container';
import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { getDataByRestId } from '../../redux/actions/productActions';
import ProdDetail from './ProdDetail';
import RestDetail from './RestDetail';

const Restaurant = () => {
    // url'deki restoranın id'sini temsil eden parametreye erişme
    const { id } = useParams();

    // useDispatch kurulum
    const dispatch = useDispatch();

    // bileşen ekrana basıldığında id'den yola çıkarak restoran
    // ve ürünlerinin bilgilerini api'den al reducer'a aktar
    useEffect(() => {
        dispatch(getDataByRestId(id));
    }, []);

    return (
        <div>
            <div className="shadow">
                <Container>
                    <RestDetail />
                </Container>
            </div>

            <Container>
                <ProdDetail />
            </Container>
        </div>
    );
};

export default Restaurant;
