import React from 'react'

const NewsLetterBox = () => {

    const onSubmitHandler = (event) => {
        event.preventDefault();
    }

  return (
    <div className='text-center'>
        <p className='text-2xl font-medium text-gray-800'>Subscribe for Exclusive Health Product Deals & Discounts</p>
        <p className='text-gray-400 mt-3'>Be the first to know about discounts, restocks, and new launches!</p>
        <form onSubmit={onSubmitHandler} className='w-full sm:w-1/2 flex items-center gap-3 mx-auto my-6 border pl-3'>
            <input className='w-full sm:flex-1 outline-none' type="email" placeholder='Enter your email' required />
            <button type='submit' className='bg-green-600 hover:bg-green-700 text-white text-xs px-10 py-4'>SIGN ME UP</button>
        </form>
    </div>
  )
}

export default NewsLetterBox
