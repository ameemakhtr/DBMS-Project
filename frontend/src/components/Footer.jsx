import React from 'react'
import { assets } from '../assets/assets'
import { FaFacebook, FaInstagram, FaTwitter, FaYoutube, FaPinterest, FaWhatsapp } from 'react-icons/fa'

const Footer = () => {
  return (
    <div>
      <div className='flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm'>

        <div>
            <img src={assets.leaf} className='mb-5 w-32' alt="" />
            <p className='w-full md:w-2/3 text-gray-600'>
            Mediserve delivers high-quality healthcare solutions, combining advanced technology with compassionate care to ensure optimal health and well-being.
            </p>
            {/* Removed social media icons from this section */}
        </div>
        <div>
            <p className='text-xl font-medium mb-5'>COMPANY</p>
            <ul className='flex flex-col gap-1 text-gray-600'>
                <li><a href="/" className="hover:underline cursor-pointer">Home</a></li>
                <li><a href="/about" className="hover:underline cursor-pointer">About us</a></li>
            </ul>
        </div>

        <div>
            <p className='text-xl font-medium mb-5'>GET IN TOUCH</p>
            <ul className='flex flex-col gap-1 text-gray-600'>
                <li><a href="tel:+961001001" className="hover:underline cursor-pointer">+921234567</a></li>
                <li>
                  <a href="mailto:contact@forever.com" className="hover:underline cursor-pointer">contact@mediserve.com</a>
                </li>
                <li className="flex gap-3 mt-3">
                  <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-blue-600">
                    <FaFacebook />
                  </a>
                  <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-pink-600">
                    <FaInstagram />
                  </a>
                  <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-blue-400">
                    <FaTwitter />
                  </a>
                  <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-red-600">
                    <FaYoutube />
                  </a>
                  <a href="https://wa.me/921234567" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-green-500">
                    <FaWhatsapp />
                  </a>
                </li>
            </ul>
        </div>
      </div>

      <div>
        <hr />
        <p className='py-5 text-sm text-center'>Copyright 2025&copy; mediserve.com - All Right Reserved</p>
      </div>
    </div>
  );
};

export default Footer;