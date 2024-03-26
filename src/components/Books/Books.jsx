/* eslint-disable react/prop-types */
import Book from "../Book/Book";

const Books = ({ allBooks }) => {
    // console.log(allBooks)
    return (
        <div className="py-20">
            <h2 className="text-5xl text-center font-bold mb-12">Books</h2>
            <div className="text-start">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full">
                    {
                        allBooks.map(book => <Book key={book.bookId} book={book}></Book>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Books;