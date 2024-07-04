const initialState = {
    isLoading: false,
    error: null,
    products: [],
};

const productReducer = (state = initialState, action) => {
    switch (action.type) {
        case "X AKSİYONU":
            return state;

        case "y AKSİYONU":
            return state;

        case "z AKSİYONU":
            return state;

        default:
            return state;
    }
};

export default productReducer;