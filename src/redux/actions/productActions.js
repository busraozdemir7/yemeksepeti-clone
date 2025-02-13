import api from '../../utils/api';
import Actions from '../actionTypes';

// id'den yola çıkarak hem restoranın hem de restoranın
// ürünlerinin verilerini api'den alıp reducer'a aktarıcak
// bir a senkron thunk aksiyonu yazalım
export const getDataByRestId = (id) => async (dispatch) => {
    // reducer'a yüklenmenin başladığını bildir
    dispatch({ type: Actions.PROD_LOADING });

    // restoranın bilgilerini verir
    const req1 = api.get(`/restaurants/${id}`);

    // restoran ürünlerinin verisi
    const req2 = api.get(`/products?restaurantId=${id}`);

    try {
        // Önceki kullanımda 2.api isteğini atmak için 1.den cevap gelmesi bekleniyordu.İki farklı api isteğini aynı anda atarsak kullanıcya veriyi daha hızlı yansıtabiliriz bunun için promise.all kullandık.
        const responses = await Promise.all([req1, req2]);

        // api'den veriler başarıyla gelirse tetiklenicek aksiyon
        dispatch({ type: Actions.PROD_SUCCESS, payload: responses });
    } catch (err) {
        // api'den veriler gelmezse hata mesajını reducer'a aktar
        dispatch({ type: Actions.PROD_ERROR, payload: err.message });
    }
};