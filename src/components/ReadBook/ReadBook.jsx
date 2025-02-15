/* eslint-disable react/prop-types */

import { Link } from "react-router-dom";
import Tag from "../Tag/Tag";

const ReadBook = ({ book }) => {
    const { bookId, bookName, author, category, rating, tags, image, yearOfPublishing, publisher, totalPages } = book;
    return (
        <div className="card my-6 flex md:flex-row bg-base-100 shadow-md border-[.5px] transition-transform duration-300 transform hover:shadow-2xl">
            <div className="p-4 md:w-1/3 lg:w-1/4">
                <figure className=" pt-4 w-full py-1 rounded-xl bg-[#F3F3F3]">
                    <img src={image} alt="book" className="w-fit p-1 pb-2 transition-transform duration-300 transform hover:scale-[1.03]" />
                </figure>
            </div>
            <div className="card-body items-start text-left px-5 pt-0">

                <h2 className="card-title font-extrabold mt-3">{bookName}</h2>
                <p className="pb-4 text-sm font-semibold text-tertiary">By : {author}</p>
                <div className="flex flex-col md:flex-row gap-2 text-green  font-semibold">
                    <div className="flex">
                        <p className="text-primary p-1">Tag</p>
                        {
                            tags.map((tag, index) => <Tag key={index} tag={tag}></Tag>)
                        }
                    </div>
                    <p className="flex text-tertiary p-1"><svg xmlns="http://www.w3.org/2000/svg" width="18" height="23" viewBox="0 0 24 25" fill="none">
                        <path d="M15 11C15 11.7956 14.6839 12.5587 14.1213 13.1213C13.5587 13.6839 12.7956 14 12 14C11.2044 14 10.4413 13.6839 9.87868 13.1213C9.31607 12.5587 9 11.7956 9 11C9 10.2044 9.31607 9.44129 9.87868 8.87868C10.4413 8.31607 11.2044 8 12 8C12.7956 8 13.5587 8.31607 14.1213 8.87868C14.6839 9.44129 15 10.2044 15 11Z" stroke="#424242" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M19.5 11C19.5 18.142 12 22.25 12 22.25C12 22.25 4.5 18.142 4.5 11C4.5 9.01088 5.29018 7.10322 6.6967 5.6967C8.10322 4.29018 10.0109 3.5 12 3.5C13.9891 3.5 15.8968 4.29018 17.3033 5.6967C18.7098 7.10322 19.5 9.01088 19.5 11Z" stroke="#424242" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg> Year of Publishing: <span className="ml-1">{yearOfPublishing}</span></p>
                </div>
                <div className="flex flex-col md:flex-row gap-6">
                    <p className="flex pb-2 text-sm font-semibold text-tertiary"><svg className="mr-1" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none">
                        <path d="M15 19.128C15.853 19.3757 16.7368 19.5009 17.625 19.5C19.0534 19.5021 20.4633 19.1764 21.746 18.548C21.7839 17.6517 21.5286 16.7675 21.0188 16.0293C20.509 15.2912 19.7724 14.7394 18.9207 14.4575C18.0691 14.1757 17.1487 14.1791 16.2992 14.4674C15.4497 14.7557 14.7173 15.313 14.213 16.055M15 19.128V19.125C15 18.012 14.714 16.965 14.213 16.055M15 19.128V19.234C13.0755 20.3931 10.8706 21.0038 8.62402 21C6.29302 21 4.11202 20.355 2.25002 19.234L2.24902 19.125C2.24826 17.7095 2.71864 16.3339 3.58601 15.2153C4.45338 14.0966 5.6684 13.2984 7.03951 12.9466C8.41063 12.5948 9.85985 12.7093 11.1587 13.2721C12.4575 13.8349 13.5321 14.814 14.213 16.055M12 6.375C12 7.27011 11.6444 8.12855 11.0115 8.76149C10.3786 9.39442 9.52013 9.75 8.62502 9.75C7.72992 9.75 6.87147 9.39442 6.23854 8.76149C5.6056 8.12855 5.25002 7.27011 5.25002 6.375C5.25002 5.47989 5.6056 4.62145 6.23854 3.98851C6.87147 3.35558 7.72992 3 8.62502 3C9.52013 3 10.3786 3.35558 11.0115 3.98851C11.6444 4.62145 12 5.47989 12 6.375ZM20.25 8.625C20.25 9.32119 19.9735 9.98887 19.4812 10.4812C18.9889 10.9734 18.3212 11.25 17.625 11.25C16.9288 11.25 16.2612 10.9734 15.7689 10.4812C15.2766 9.98887 15 9.32119 15 8.625C15 7.92881 15.2766 7.26113 15.7689 6.76884C16.2612 6.27656 16.9288 6 17.625 6C18.3212 6 18.9889 6.27656 19.4812 6.76884C19.9735 7.26113 20.25 7.92881 20.25 8.625Z" stroke="#131313" strokeOpacity="0.6" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg> Publisher: <span className="text-secondary ml-1">{publisher}</span></p>
                    <p className="flex pb-2 text-sm font-semibold text-tertiary"><svg className="mr-1" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none">
                        <path d="M19.5 14.25V11.625C19.5 10.7299 19.1444 9.87145 18.5115 9.23851C17.8786 8.60558 17.0201 8.25 16.125 8.25H14.625C14.3266 8.25 14.0405 8.13147 13.8295 7.9205C13.6185 7.70952 13.5 7.42337 13.5 7.125V5.625C13.5 4.72989 13.1444 3.87145 12.5115 3.23851C11.8785 2.60558 11.0201 2.25 10.125 2.25H8.25M9 16.5V17.25M12 14.25V17.25M15 12V17.25M10.5 2.25H5.625C5.004 2.25 4.5 2.754 4.5 3.375V20.625C4.5 21.246 5.004 21.75 5.625 21.75H18.375C18.996 21.75 19.5 21.246 19.5 20.625V11.25C19.5 8.86305 18.5518 6.57387 16.864 4.88604C15.1761 3.19821 12.8869 2.25 10.5 2.25Z" stroke="#131313" strokeOpacity="0.6" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg> Page: <span className="text-secondary ml-1"> {totalPages}</span></p>
                </div>
                <hr className="mb-2 w-full" />
                <div className="flex w-full gap-2">
                    <div>
                        <button className="px-2 py-1 bg-[#328EFF26] text-[#328EFF] text-sm rounded-2xl font-medium">Category: {category}</button>
                    </div>
                    <div>
                        <button className="px-2 py-1 bg-[#FFAC3326] text-[#FFAC33] text-sm rounded-2xl font-medium">Rating: {rating}</button>
                    </div>
                    <div>
                        <Link to={`/book/${bookId}`}>
                            <button className="px-2 py-1 bg-[#23BE0A] text-white text-sm rounded-2xl font-medium">View Details</button>
                        </Link>
                    </div>


                </div>
            </div>
        </div >
    );
};

export default ReadBook;