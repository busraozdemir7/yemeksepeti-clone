import api from "../../utils/api";
import Actions from "../actionTypes";

//! A senkron Thunk Akisyonu 
// Restaurant verilerini alıp store 'a aktaran bir aksiyon fonksiyonu yazacağız
// Normalde redux a senkron işlemler yapabilen akiyonları kabul etmez. Bundan kaynaklı olarak bir thunk aksiyonu oluşturucağız.

// ? Nasıl Tanımlarız ?
// Bir thunk fonksiyonu tanınmlamak için bir fonksiyon içerisinde ikinci fonksiyonu return ederiz ve return ettiğimiz bu fonksiyon dispatch'i parametre olarak alır.
const thunkFonksiyonu = () => {
    return (dispatch) => {
        // api isteklerini buradan atarız ve dispatch'i parametre olarak aldığı için dispatch gerçekleştirebiliriz
    };
};

//* 1.Örnek: Restoran verilerini alıp store'a aktaran bir aksiyon fonksiyonu yazacağız.
export const getRestaurants = () => (dispatch) => {
    dispatch({ type: Actions.REST_LOADING });

    api
        .get("/restaurants")
        .then((res) => dispatch({ type: Actions.REST_SUCCESS, payload: res.data }))
        .catch((err) =>
            dispatch({ type: Actions.REST_ERROR, payload: err.message })
        );
};