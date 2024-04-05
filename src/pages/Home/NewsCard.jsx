import PropTypes from 'prop-types';
import { LuEye } from "react-icons/lu";
import { Link } from 'react-router-dom';
const NewsCard = ({ news }) => {
    const { author, title, image_url, _id, details, rating, total_view } = news;
    return (
        <div className="flex flex-col max-w-lg p-6 space-y-6 overflow-hidden rounded-lg shadow-2xl bg-white text-black mb-3">
            <div className='flex justify-between bg-gray-200 p-2 items-center'>
                <div className="flex space-x-4">
                    <img alt="" src={author.img} className="object-cover w-12 h-12 rounded-full shadow bg-gray-500" />
                    <div className="flex flex-col space-y-1">
                        <a rel="noopener noreferrer" href="#" className="text-sm font-semibold">{author.name}</a>
                        <span className="text-xs text-gray-400">4 hours ago</span>
                    </div>
                </div>
                <div>
                    <div className="space-x-2">
                        <button aria-label="Bookmark this post" type="button" className="p-2">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="w-4 h-4 fill-current text-violet-400">
                                <path d="M424,496H388.75L256.008,381.19,123.467,496H88V16H424ZM120,48V456.667l135.992-117.8L392,456.5V48Z"></path>
                            </svg>
                        </button>
                        <button aria-label="Share this post" type="button" className="p-2 text-center">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="w-4 h-4 fill-current text-violet-400">
                                <path d="M404,344a75.9,75.9,0,0,0-60.208,29.7L179.869,280.664a75.693,75.693,0,0,0,0-49.328L343.792,138.3a75.937,75.937,0,1,0-13.776-28.976L163.3,203.946a76,76,0,1,0,0,104.108l166.717,94.623A75.991,75.991,0,1,0,404,344Zm0-296a44,44,0,1,1-44,44A44.049,44.049,0,0,1,404,48ZM108,300a44,44,0,1,1,44-44A44.049,44.049,0,0,1,108,300ZM404,464a44,44,0,1,1,44-44A44.049,44.049,0,0,1,404,464Z"></path>
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
            <h2 className='text-xl font-bold'>{title}</h2>
            <div>
                <img src={image_url} alt="" className="object-cover w-full mb-4 h-40 sm:h-96 bg-gray-500" />


                {
                    details.length > 200 ? <p className="text-sm text-gray-400">{details.slice(0, 200)} <Link to={`/news/${_id}`} className='text-orange-600 font-bold'>Read More</Link></p> :
                        <p className="text-sm text-gray-400">{details}</p>
                }

            </div>


            <div className="flex justify-between  space-x-2 text-sm text-gray-400">
                <button type="button" className="flex items-center p-1 space-x-1.5">
                    <div className="rating rating-xs">
                        <input type="radio" name="rating-5" className="mask mask-star-2 bg-orange-400" />
                        <input type="radio" name="rating-5" className="mask mask-star-2 bg-orange-400" />
                        <input type="radio" name="rating-5" className="mask mask-star-2 bg-orange-400" />
                        <input type="radio" name="rating-5" className="mask mask-star-2 bg-orange-400" />
                        <input type="radio" name="rating-5" className="mask mask-star-2 bg-orange-400" checked />
                    </div>
                    <span>{rating.number}</span>

                </button>
                <button type="button" className="flex items-center p-1 space-x-1.5">
                    <LuEye />
                    <span>{total_view}</span>
                </button>
            </div>

        </div>
    );
};

NewsCard.propTypes =
{
    news: PropTypes.node,
}

export default NewsCard;