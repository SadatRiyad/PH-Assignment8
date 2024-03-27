import aboutPic from '../../assets/about.jpg';

const About = () => {
    return (
        <div className="container mx-auto px-4 py-8">
            <div className='w-full h-fit rounded-lg'>
                <img className='w-full rounded-lg' src={aboutPic} alt="" />
            </div>
            <div className='text-center text-tertiary mt-12 mb-8'>
                <h1 className="text-3xl text-primary font-bold mb-4">Welcome to our book review platform <br /><span className='text-primary'>&apos;BB-Book&apos;</span></h1>
                <p className="text-lg mb-4">
                    Where we aim to provide insightful reviews and recommendations to fellow book lovers. Our team of passionate readers carefully curates reviews for a wide range of genres, ensuring that you find the perfect book for your next read.
                </p>
                <p className="text-lg mb-4">
                    Our mission is to foster a vibrant community of readers and create a space where you can engage with others, share your thoughts on books, and discover new literary treasures. Whether you are a casual reader or a dedicated bookworm, you will find something to love on our platform.
                </p>
                <p className="text-lg mb-4">
                    We believe in the power of storytelling to inspire, educate, and connect people from all walks of life. Through our reviews and recommendations, we hope to ignite your passion for reading and guide you on a journey of exploration and discovery through the world of literature.
                </p>
            </div>
        </div>
    );
};

export default About;