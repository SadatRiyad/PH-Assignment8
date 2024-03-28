import { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';

const ContactUs = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        toast("Message sent successfully!", {
            type: "success",
            position: "top-right",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: false,
            draggable: true,
            progress: undefined,
        });
        setTimeout(() => {
            window.location.reload();
        }, 3500);
        // Add your form submission logic here
        console.log(formData);
        // You can send formData to your backend or handle it accordingly
    };

    return (
        <div className="container mx-auto px-4 py-8 ">
            <div className="py-8 bg-[#1313130D] rounded-xl mb-1">
                <h2 className="text-5xl text-center font-bold">Contact Us</h2>
            </div>
            <div className='text-center mb-16'>
                <h1 className="text-3xl font-bold mb-4"></h1>
                <p className="text-base px-2 text-secondary mb-0">
                    Got any questions, suggestions, or feedback? <br />Feel free to reach out to us using the contact information below:
                </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 items-center mb-4 px-8 py-16 bg-[#1313130D] rounded-xl">
                <div>
                    <h2 className="text-3xl font-semibold mb-8">Contact Information</h2>
                    <ul className="space-y-2">
                        <li className="flex items-center space-x-4">
                            <svg className="w-6 h-6 text-gray-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 10v7m0 0 3-3m-3 3-3-3m3 3h6m-6 0-3-3m3 3V10m0 7-3-3m3 3h6m-6 0-3-3m3 3V7a5 5 0 00-5-5 1 1 0 00-1 1 1 1 0 001 1 3 3 0 013 3v10a3 3 0 003 3 1 1 0 001-1 1 1 0 00-1-1 5 5 0 01-5-5z" />
                            </svg>
                            <span>Email: info@bb-book.com</span>
                        </li>
                        <li className="flex items-center space-x-4">
                            <svg className="w-6 h-6 text-gray-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 10v7m0 0 3-3m-3 3-3-3m3 3h6m-6 0-3-3m3 3V10m0 7-3-3m3 3h6m-6 0-3-3m3 3V7a5 5 0 00-5-5 1 1 0 00-1 1 1 1 0 001 1 3 3 0 013 3v10a3 3 0 003 3 1 1 0 001-1 1 1 0 00-1-1 5 5 0 01-5-5z" />
                            </svg>
                            <span>Phone: +1 (123) 456-7890</span>
                        </li>
                        <li className="flex items-center space-x-4">
                            <svg className="w-6 h-6 text-gray-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 10v7m0 0 3-3m-3 3-3-3m3 3h6m-6 0-3-3m3 3V10m0 7-3-3m3 3h6m-6 0-3-3m3 3V7a5 5 0 00-5-5 1 1 0 00-1 1 1 1 0 001 1 3 3 0 013 3v10a3 3 0 003 3 1 1 0 001-1 1 1 0 00-1-1 5 5 0 01-5-5z" />
                            </svg>
                            <span>Address: 123 Main Street, City, Country</span>
                        </li>
                    </ul>
                </div>
                <div>
                    <h2 className="text-3xl font-semibold mb-4 mt-8 ">Send us a Message</h2>
                    <form onSubmit={handleSubmit}>
                        <div className="mb-4">
                            <input
                                type="text"
                                id="name"
                                name="name"
                                placeholder="Your Name"
                                value={formData.name}
                                onChange={handleChange}
                                className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
                                required
                            />
                        </div>
                        <div className="mb-4">
                            <input
                                type="email"
                                id="email"
                                name="email"
                                placeholder="Your Email"
                                value={formData.email}
                                onChange={handleChange}
                                className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
                                required
                            />
                        </div>
                        <div className="mb-4">
                            <textarea
                                id="message"
                                name="message"
                                placeholder="Your Message"
                                value={formData.message}
                                onChange={handleChange}
                                rows="4"
                                className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
                                required
                            />
                        </div>
                        <button onClick={() => handleSubmit()}
                            type="submit"
                            className="w-full px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
                        >
                            Submit
                        </button>
                    </form>
                </div>
            </div>
            <ToastContainer />
        </div>
    );
};

export default ContactUs;
