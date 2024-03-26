import { useState } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import useLocalStorage from '../../Hooks/useLocalStorage';
import ReadBook from '../ReadBook/ReadBook';

const ListedBooks = () => {
    const [tabIndex, setTabIndex] = useState(0)
    const { localData } = useLocalStorage();
    console.log(localData);

    return (
        <div>
            <div className="py-8 bg-[#1313130D] rounded-xl mb-8">
                <h2 className="text-5xl text-center font-bold">Books</h2>
            </div>
            <div className='flex justify-center mb-8'>
                <a href="#"><button className="btn bg-green hover:bg-green border-green text-white hover:text-white rounded hover:border-green  hover:-translate-y-1 transition-all duration-200">Sort by <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path d="M19.5 8.25L12 15.75L4.5 8.25" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg></button></a>

            </div>
            <Tabs selectedIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
                <TabList>
                    <Tab>Read Books</Tab>
                    <Tab>Wishlist Books</Tab>
                </TabList>
                <TabPanel>
                    <div>
                        {
                            localData.map(book => <ReadBook key={book.bookId} book={book}></ReadBook>)
                        
                        }
                    </div>
                </TabPanel>
                <TabPanel></TabPanel>
            </Tabs>
        </div>
    );
};

export default ListedBooks;