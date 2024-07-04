const RestCard = ({ data }) => {
    console.log(data);
    return (
        <div>
            <h1 className="text-xl">{data.name}</h1>
        </div>
    )
}

export default RestCard;
