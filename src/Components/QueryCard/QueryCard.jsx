import PropTypes from 'prop-types';

const QueryCard = ({query}) => {
 const {imageURL, queryTitle, productName, authorName, 
    recommendationCount} = query
    return (
        <div className='border p-4 border-green-200 rounded flex flex-col h-full bg-green-50'>
            <div className='flex flex-col flex-grow'>
                <img src={imageURL} alt="Query Img" className='mb-4' />
                <p className='text-gray-500 font-medium'>{productName}</p>
                <h3 className='font-bold my-1'>{queryTitle}</h3>
            </div>
            <div className='flex flex-col justify-start mt-auto'>
                <p className='text-gray-500 font-medium text-sm'>By {authorName}</p>
                <p className='text-gray-500 font-medium text-sm'>Recommendation: {recommendationCount}</p>
            </div>
        </div>
    );
};

export default QueryCard;
QueryCard.propTypes = {
    query: PropTypes.object
}