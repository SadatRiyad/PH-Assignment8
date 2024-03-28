import { useEffect, useState } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import useLocalStorage from '../../Hooks/useLocalStorage';
import ReadBook from '../ReadBook/ReadBook';
import useLocalStorage1 from '../../Hooks/useLocalStorageForWishlist';

const ListedBooks = () => {
    const [tabIndex, setTabIndex] = useState(0)
    const { localData } = useLocalStorage();
    const { localData1 } = useLocalStorage1();
    const [readBooks, setReadBooks] = useState(localData);
    const [wishlistBooks, setWishlistBooks] = useState(localData1);


    // for Read Books Sorting
    useEffect(() => {
        setReadBooks(localData);
    }, [localData]);

    const handleReadBookFilter = (filter) => {
        if (filter === "Rating") {
            const sortedBooks = localData.sort((a, b) => b.rating - a.rating);
            setReadBooks([...sortedBooks]);
        } else if (filter === "Number of pages") {
            const pageSortedBooks = localData.sort((a, b) => b.totalPages - a.totalPages);
            setReadBooks([...pageSortedBooks]);
        } else if (filter === "Publisher year") {
            const yearSortedBooks = localData.sort((a, b) => b.yearOfPublishing - a.yearOfPublishing);
            setReadBooks([...yearSortedBooks]);
        } else {
            setReadBooks(localData);
        }
        return localData;
    };


    // for Wishlist Sorting
    useEffect(() => {
        setWishlistBooks(localData1);
    }, [localData1]);

    const handleWishlistBookFilter = (filter) => {
        if (filter === "Rating") {
            const sortedBooks = localData1.sort((a, b) => b.rating - a.rating);
            setWishlistBooks([...sortedBooks]);
        } else if (filter === "Number of pages") {
            const pageSortedBooks = localData1.sort((a, b) => b.totalPages - a.totalPages);
            setWishlistBooks([...pageSortedBooks]);
        } else if (filter === "Publisher year") {
            const yearSortedBooks = localData1.sort((a, b) => b.yearOfPublishing - a.yearOfPublishing);
            setWishlistBooks([...yearSortedBooks]);
        } else {
            setWishlistBooks(localData1);
        }
        return localData;
    };


    return (
        <div>
            <div className="py-8 bg-[#1313130D] rounded-xl mb-8">
                <h2 className="text-5xl text-center font-bold">Books</h2>
            </div>
            <div className='flex justify-center mb-8'>
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn m-1 bg-green hover:bg-green border-green text-white hover:text-white rounded hover:border-green transition-all duration-200">Sort by <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                        <path d="M19.5 8.25L12 15.75L4.5 8.25" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg></div>
                    <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow w-44 bg-green hover:bg-green border-green text-white hover:text-white rounded hover:border-green  transition-all duration-200">
                        <li onClick={() => { handleReadBookFilter('Rating'); handleWishlistBookFilter('Rating'); }}><a>Rating</a></li>
                        <li onClick={() => { handleReadBookFilter('Number of pages'); handleWishlistBookFilter('Number of pages'); }}><a>Number of pages</a></li>
                        <li onClick={() => { handleReadBookFilter('Publisher year'); handleWishlistBookFilter('Publisher year'); }}><a>Publisher year</a></li>
                    </ul>
                </div>
            </div>
            <Tabs selectedIndex={tabIndex} onSelect={(index) => setTabIndex(index)} className={'mb-32'}>
                <TabList>
                    <Tab>Read Books</Tab>
                    <Tab>Wishlist Books</Tab>
                </TabList>
                <TabPanel>
                    <div>
                        {
                            readBooks.map(book => <ReadBook key={book.bookId} book={book}></ReadBook>)
                        }
                    </div>
                </TabPanel>
                <TabPanel>
                    <div>
                        {
                            wishlistBooks.map(book => <ReadBook key={book.bookId} book={book}></ReadBook>)
                        }
                    </div>
                </TabPanel>
            </Tabs>
        </div>
    );
};

export default ListedBooks;