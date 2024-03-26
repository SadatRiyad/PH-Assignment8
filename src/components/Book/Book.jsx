/* eslint-disable react/prop-types */
import Tag from "../Tag/Tag";
import ratings from "../../assets/rating.png";
import { Link } from "react-router-dom";


const Book = ({ book }) => {
    const {bookId, bookName, image, tags, author, category, rating } = book;
    
    // const bookDtails = () => {
        
    // }
    return (
        <Link to={`/book/${bookId}`}> 
            <div className="card bg-base-100 shadow-md border-[.5px] transition-transform duration-300 transform hover:shadow-2xl">
            <div className="p-4">
                <figure className=" pt-4 w-full py-1 rounded-xl bg-[#F3F3F3]">
                    <img src={image} alt="book" className="w-fit p-1 pb-2 transition-transform duration-300 transform hover:scale-[1.03]" />
                </figure>
            </div>
            <div className="card-body items-start text-left px-5 pt-0">
                <div className="flex gap-2 text-green  font-semibold">
                    {
                        tags.map((tag, index) => <Tag key={index} tag={tag}></Tag>)
                    }
                </div>
                <h2 className="card-title font-extrabold mt-2">{bookName}</h2>
                <p className="pb-4 text-base font-semibold text-tertiary">By : {author}</p>
                <hr className="mb-2 w-full" />
                <div className="flex justify-between w-full gap-2">
                    <div>
                        <p className="flex items-center text-base font-semibold text-tertiary">{category}</p>
                    </div>
                    <div>
                        <p className="flex items-center text-base font-semibold text-tertiary">{rating} <img src={ratings} alt="" className="ml-1" /></p>
                    </div>
                </div>
            </div>
        </div>
        </Link>
    );
};

export default Book;