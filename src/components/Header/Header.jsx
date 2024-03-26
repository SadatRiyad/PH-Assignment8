import '../../App.css'
import headerImage from '../../assets/b1.png'
const Header = () => {
    return (
        <div>
            {/* <!-- header start --> */}
            <header>
                <div className="container md:flex items-center justify-between mx-auto p-6">
                    <div>
                        <h1 className="text-2xl sm:text-4xl md:text-5xl font-bold tracking-wide text-primary">
                            Books to freshen up <br /> your bookshelf
                        </h1>
                        <a href="/listedBooks"><button className="btn bg-green hover:bg-transparent border-green text-white hover:text-green hover:border-green mt-6 md:mt-10 mb-4 rounded hover:-translate-y-1 transition-all duration-200">View The List</button></a>
                    </div>
                    <div className='sm:mt-6 md:mt-0'>
                        <img src={headerImage} className='sm:w-2/4 md:w-[260px] mb-4' alt="" />
                    </div>
                </div>
            </header>
            {/* <!-- header end --> */}
        </div>
    );
};

export default Header;