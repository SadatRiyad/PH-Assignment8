import { useRouteError } from "react-router-dom";

const ErrorPage = () => {
    const error = useRouteError();
    console.error(error);

    return (
        // <!-- error page start -->
        <div className="flex justify-center items-center text-center h-screen">
            <div id="error-page">
                <h1 className="mb-2">Oops! Page not found.</h1>
                <p>Sorry, the page you are looking for does not exist.</p>
                <button onClick={() => window.history.back()} className="btn bg-green hover:bg-transparent border-green text-white hover:text-green rounded hover:border-green  hover:-translate-y-1 transition-all duration-200 my-4">Go Back</button>
            </div>
        </div>

    );
};

export default ErrorPage;