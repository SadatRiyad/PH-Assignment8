import { useLoaderData, useParams } from "react-router-dom";
import Tag from "../Tag/Tag";
import { saveToLocalStorage, saveToLocalStorage1 } from "../../utils/localStorage";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const BookDtails = () => {
    const book = useLoaderData();
    const { Id } = useParams();
    const IdInt = parseInt(Id);
    const theBook = book.find((book) => book.bookId === IdInt);

    const { bookName, image, tags, author, category, rating, review, totalPages, publisher, yearOfPublishing } = theBook;


    const handleRead = () => {
        saveToLocalStorage(theBook);
    }
    const handleWishlist = () => {
        saveToLocalStorage1(theBook);
    }


    return (

        <div className="card lg:card-side bg-base-100 my-20">
            <div className="card-body bg-[#F3F3F3] lg:w-2/4">
                <figure><img src={image} className="rounded-2xl lg:w-full lg:h-full" alt="Album" /></figure>
            </div>
            <div className="card-body mt-6 lg:mt-0 lg:ml-5 p-0 lg:px-8 lg:w-3/4">
                <h2 className="card-title text-2xl md:text-4xl lg:text-5xl">{bookName}</h2>
                <p className="text-tertiary font-semibold text-xs md:text-base lg:text-lg mt-1">By : <span>{author}</span></p>
                <hr className="mt-2 lg:my-4 border-t-2" />
                <p className="text-tertiary font-semibold text-xs md:text-base lg:text-lg mt-1">{category}</p>
                <hr className="mt-2 lg:my-4 border-t-2" />
                <p className="text-tertiary font-semibold text-xs md:text-base lg:text-lg mt-1"><span className="text-primary font-bold">Review : </span> {review}</p>
                <p className="text-green font-semibold text-xs md:text-base lg:text-lg mt-2"><span className="text-primary font-bold">Tags : </span> {
                    tags.map((tag, index) => <Tag key={index} tag={tag}></Tag>)
                }</p>
                <hr className="mt-1 lg:my-4 border-t-2" />
                <p className="text-primary font-semibold text-xs md:text-base lg:text-lg mt-1"><span className="text-tertiary font-bold">Number of Pages : </span> {totalPages}</p>
                <p className="text-primary font-semibold text-xs md:text-base lg:text-lg mt-1"><span className="text-tertiary font-bold">Publisher : </span> {publisher}</p>
                <p className="text-primary font-semibold text-xs md:text-base lg:text-lg mt-1"><span className="text-tertiary font-bold">Year of Publishing : </span> {yearOfPublishing}</p>
                <p className="text-primary font-semibold text-xs md:text-base lg:text-lg mt-1"><span className="text-tertiary font-bold">Rating : </span> {rating}</p>

                <div className="card-actions justify-start mt-3 gap-1 md:gap-3">
                    <a href="#"><button onClick={() => handleRead()} className="btn bg-transparent hover:bg-green border-primary text-primary hover:text-white rounded hover:border-green  hover:-translate-y-1 transition-all duration-200 ml-0">Read</button></a>
                    <a href="#"><button onClick={() => handleWishlist()} className="btn bg-[#59C6D2] hover:bg-transparent border-[#59C6D2] text-white hover:text-[#59C6D2] hover:border-[#7cb1b7] rounded hover:-translate-y-1 transition-all duration-200">Wishlist</button></a>
                </div>
            </div>
            <ToastContainer />
        </div>
    );
};

export default BookDtails;