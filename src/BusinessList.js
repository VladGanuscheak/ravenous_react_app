import getBusiness from './Business';

function getBusinessList(businesses){
    return (
        <div>
            {businesses.map(business => <div>{getBusiness(business)}</div>)}
        </div>)
};

export default getBusinessList;