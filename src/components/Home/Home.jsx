import { useLoaderData } from "react-router-dom";
import Books from "../Books/Books";
import Header from "../Header/Header";

const Home = () => {
    // getting books data using useLoaderData hook
    const books = useLoaderData();
    // console.log(books)
    return (
        <div>
            <Header></Header>
            <Books allBooks={books}></Books>
        </div>
    );
};

export default Home;