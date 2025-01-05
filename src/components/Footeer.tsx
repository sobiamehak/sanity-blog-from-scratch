

import React from 'react';
import { FaFacebook, FaGithub, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
  return (
    <div>
      <footer className="body-font  border-2 border-t-2   mt-8">
        <div className="container px-5 pt-10 mx-auto">
          <div className="flex flex-wrap md:text-left text-center order-first">
            <div className="lg:w-1/4 md:w-1/2 w-full px-4">
              <h2 className="title-font font-medium text-red-700 tracking-widest  ">
                BLOG CATEGORIES
              </h2>
              <nav className="list-none ">
                <li>
                  <a className=" hover:text-red-800">Tech Insights</a>
                </li>
                <li>
                  <a className=" hover:text-red-800">Lifestyle Tips</a>
                </li>
                <li>
                  <a className=" hover:text-red-800">Travel Adventures</a>
                </li>
                <li>
                  <a className=" hover:text-red-800">Food Recipes</a>
                </li>
              </nav>
            </div>
            <div className="lg:w-1/4 md:w-1/2 w-full px-4">
              <h2 className="title-font font-medium text-red-700 tracking-widest ">
                ABOUT THE BLOG
              </h2>
              <nav className="list-none ">
                <li>
                  <a className=" hover:text-red-800">Our story</a>
                </li>
                <li>
                  <a className=" hover:text-red-800">Blog Mission</a>
                </li>
                <li>
                  <a className=" hover:text-red-800">Contact</a>
                </li>
                <li>
                  <a className=" hover:text-red-800">Privacy Policy</a>
                </li>
              </nav>
            </div>
            <div className="lg:w-1/4 md:w-1/2 w-full px-4">
              <h2 className="title-font font-medium text-red-700 tracking-widest  ">
                FOLLOW US
              </h2>
              <nav className="list-none ">
                <li>
                  <a className=" hover:text-red-800">Facebook</a>
                </li>
                <li>
                  <a className=" hover:text-red-800">Twitter</a>
                </li>
                <li>
                  <a className=" hover:red-blue-800">Instagram</a>
                </li>
                <li>
                  <a className=" hover:text-red-800">LinkedIn</a>
                </li>
              </nav>
            </div>
            <div className="lg:w-1/4 md:w-1/2 w-full px-4">
              <h2 className="title-font font-medium text-red-700 tracking-widest ">
                STAY UPDATED
              </h2>
              <div className="flex xl:flex-nowrap md:flex-nowrap lg:flex-wrap flex-wrap justify-center items-end md:justify-start">
                <div className="relative w-40 sm:w-auto xl:mr-4 lg:mr-0 sm:mr-4 mr-2">
                  <label htmlFor="footer-field" className="leading-7 text-sm ">
                    Subscribe to our newsletter
                  </label>
                  <input
                    type="text"
                    id="footer-field"
                    name="footer-field"
                    placeholder="Enter your Email"
                    className="w-full bg-opacity-50 rounded border border-gray-300 focus:bg-transparent focus:ring-2 focus:ring-indigo-200 focus:border-indigo-500 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  />
                </div>
                <button className="lg:mt-2 xl:mt-0 flex-shrink-0 inline-flex  bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded mt-4">
                  Subscribe
                </button>
              </div>
              <p className="text-gray-500 text-sm mt-2 md:text-left text-center">
                Join us to stay updated with the latest trends, tips, and stories.
                <br className="lg:block hidden" />
                Curated by Sobia, your go-to for all things inspiring.
              </p>
            </div>
          </div>
        </div>
       

<div className='flex justify-center items-center text-4xl gap-8 pb-4'>
 

  <a href="https://www.linkedin.com/in/sobia-mehak-a277362ba/" target="_blank" rel="noopener noreferrer">
    <FaLinkedin className='text-blue-900 transition duration-300 ease-in-out transform hover:scale-105' />
  </a>
  <a href="https://github.com/sobiamehak" target="_blank" rel="noopener noreferrer">
    <FaGithub className=' transition duration-300 ease-in-out transform hover:scale-105' />
  </a>
  <a href="https://www.facebook.com/lal.pari.712714?mibextid=ZbWKwL" target="_blank" rel="noopener noreferrer">
    <FaFacebook className='text-blue-700 transition duration-300 ease-in-out transform hover:scale-105' />
  </a>
</div>

      </footer>
    
    </div>
  );
};

export default Footer;
