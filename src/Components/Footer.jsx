import React from 'react'
import { FaFacebook, FaFacebookF, FaTwitter } from 'react-icons/fa'
import { IoLogoFacebook, IoLogoTwitter, IoLogoYoutube } from 'react-icons/io'

const Footer = () => {
  return (
    <div className='py-7 flex flex-col justify-center items-center'>
        <h2 className='font-bold text-xl md:text-2xl '>
          Nisha Kattel
        </h2>

        <p className='font-semibold text-sm pt-5 '>
          Mechinagar-7 , Jhapa Nepal . Near ward Office Ittabhattta
        </p>
        <p className='font-semibold text-sm '>
          we Love To Design and Develop
        </p>

        <div className='flex pt-4 justify-center items-center gap-3 '>
            <FaFacebookF size={'3rem'}  className='rounded-full p-1 bg-pink-600 shadow-lg shadow-pink-700 cursor-pointer'/>
            <FaTwitter size={'3rem'} className='rounded-full p-1 bg-pink-600 shadow-lg shadow-pink-700 cursor-pointer'/>
            <IoLogoYoutube size={'3rem'} className='rounded-full p-1 bg-pink-600 shadow-lg shadow-pink-700 cursor-pointer'/>
        </div>

        <h5 className='text-pink-600 font-semibold text-sm pt-6'>
          Created By <b>Nisha Kattel</b> With Love.
        </h5>
    </div>
  )
}

export default Footer