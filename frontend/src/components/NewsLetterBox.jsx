import React, { useState } from 'react';
import { toast } from 'react-toastify';

const NewsLetterBox = () => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const onSubmitHandler = async (event) => {
    event.preventDefault();

    if (!email.includes('@')) {
      toast.error('Please enter a valid email address');
      return;
    }

    try {
      const response = await fetch('http://localhost:4000/api/newsletter/subscribe', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      });

      const data = await response.json();

      if (response.ok) {
        toast.success(data.message || 'Subscribed successfully');
        setEmail('');
        setMessage('');
      } else {
        toast.error(data.message || 'Subscription failed');
      }
    } catch (error) {
      console.log(error);
      toast.error('Something went wrong. Please try again.');
    }
  };

  return (
    <div className='my-10 text-center'>
      <div className='py-8 text-3xl'>
        <p className='text-2xl font-medium text-gray-800'>
          Subscribe for Exclusive Health Product Deals & Discounts
        </p>
        <p className='text-gray-400 mt-3 text-sm sm:text-base'>
          Be the first to know about discounts, restocks, and new launches!
        </p>
      </div>

      <form
        onSubmit={onSubmitHandler}
        className='w-full sm:w-1/2 flex items-center gap-3 mx-auto my-6 border pl-3'
      >
        <input
          className='w-full sm:flex-1 outline-none'
          type='email'
          placeholder='Enter your email'
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <button
          type='submit'
          className='bg-green-600 hover:bg-green-700 text-white text-xs px-10 py-4'
        >
          SIGN ME UP
        </button>
      </form>
    </div>
  );
};

export default NewsLetterBox;
