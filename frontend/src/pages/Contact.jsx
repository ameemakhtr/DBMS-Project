import React from 'react'
import Title from '../components/Title'
import { assets } from '../assets/assets'
import NewsLetterBox from '../components/NewsLetterBox'

const Contact = () => {
  return (
    <div>
      
      <div className='text-center text-2xl pt-10 border-t'>
        <Title text1={'CONTACT'} text2={'US'} />
      </div>

      <div className='my-10 flex flex flex-col justify-center md:flex-row gap-10 mb-28'>
        <img className='w-full md:max-w-[480px]' src={assets.contact} alt="" />
        <div className='flex flex-col justify-center items-start gap-6'>
          <p className='font-semibold text-xl text-gray-600'>Our Store</p>
          <p className='text-gray-500'>www.mediserve.com  <br /> </p>
          <p className='text-gray-500'>Tel: (+92) 123-4567 <br /> Email: contact@mediserve.com </p>
          <p className='font-semibold text-xl text-gray-600'>Careers at MediServe</p>
          <p className='text-gray-500'>Learn more about our teams and job openings by contacting us on jobs@mediserve.com</p>
        </div>
      </div>
      <NewsLetterBox />
    </div>
  )
}

export default Contact
