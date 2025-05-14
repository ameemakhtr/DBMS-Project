import React from 'react'
import Title from '../components/Title'
import { assets } from '../assets/assets'
import NewsLetterBox from "../components/NewsLetterBox"

const About = () => {
  return (
    <div>
      <div className='text-2xl text-center pt-8 border-t'>
        <Title text1={'ABOUT'} text2={'US'}/>
      </div>

      <div className='my-10 flex flex-col md:flex-row gap-16'>
        <img className='w-full md:max-w-[450px]' src={assets.medicine1} alt="" />
        <div className='flex flex-col justify-center gap-6 md:w-2/4 text-gray-600'>
            <p>Mediserve is more than a name—it’s a promise of reliable healthcare solutions and trusted delivery. We believe access to quality medical supplies and medicines empowers communities to thrive. Our curated range combines essential products with modern innovations, ensuring dependable support for every need. Whether for hospitals, clinics, or home care, Mediserve ensures every moment of health is met with confidence and care.</p>
            <p>We take pride in delivering a seamless experience backed by exceptional quality. From trusted medicines to advanced medical equipment, every product reflects our commitment to health, reliability, and accessibility. With Mediserve, you’re not just purchasing supplies—you’re partnering with a company that values well-being, community support, and long-term care solutions for every individual and institution.</p>
            <b className='text-gray-800'>Our Mission</b>
            <p>At Mediserve, our mission is to enhance lives through accessible, dependable healthcare solutions. We are dedicated to providing high-quality medical equipment and medicines that support well-being, ensure safety, and deliver lasting value. By combining innovation, reliability, and care, we aim to build a healthier community where every individual feels supported and confident in their wellness journey.</p>
        </div>
      </div>

      <div className='text-xl py-4'>
        <Title text1={'WHY'} text2={'CHOOSE US'}/>
      </div>
      <div className='flex flex-col md:flex-row text-sm mb-20'>
        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b>Quality Assurance:</b>
          <p className='text-gray-600'>We ensure every product meets the highest medical standards, delivering reliable equipment and medicines you can trust every time.</p>
        </div>
        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b>Convenience:</b>      
          <p className='text-gray-600'>Enjoy a seamless purchasing experience with efficient logistics and easy access to essential healthcare supplies, whenever and wherever needed.</p>
        </div>
        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b>Exceptional Customer Service:</b>
          <p className='text-gray-600'>We are dedicated to providing responsive, knowledgeable support to ensure your experience with Mediserve is smooth, reliable, and reassuring.</p>
        </div>    
      </div>
      <NewsLetterBox />
    </div>
  )
}

export default About
