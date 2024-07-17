// HOC (Higher Order Components)
// Farklı components'leri prop olarak alan componentler

const Container = ({ children }) => {
    return <div className="max-w-[1440px] mx-auto p-5">{children}</div>;
};

export default Container;