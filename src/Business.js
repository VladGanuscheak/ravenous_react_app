function getBusiness(business) {
    return (
        <div>
            <img alt={business.name} src={business.img} />
            <p>{business.name}</p>
            <p className="">{business.address}</p>
            <p className="">{business.city}</p>
            <p className="">{business.state}</p>
            <p className="">{business.zipCode}</p>
            <p className="">{business.category}</p>
            <p className="">{business.rating}</p>
            <p className="">{business.review}</p>
        </div>
    );
};

export default getBusiness;