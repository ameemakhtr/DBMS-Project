import React from 'react'
import PropTypes from 'prop-types'
import {assets} from "../assets/assets"

const Navbar = ({setToken}) => {
  return (
    <div className='flex items-center py-2 px-[4%] justify-between'>
      <img className='w-[max(10%,80px)]' src={assets.leaf} alt="" />
      <button onClick={() => setToken("")} className='bg-green-600 hover:bg-green-700 text-white px-5 py-2 sm:px-7 sm:py-2 rounded-full text-xs sm:text-sm'>Logout</button>
    </div>
  );
}

Navbar.propTypes = {
  setToken: PropTypes.func.isRequired
}

export default Navbar
