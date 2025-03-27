import React from 'react'
import { assets } from '../assets/assets'

const Footer = () => {
  return (
    <div className='md:mx-10'>
        <div className='flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm'>
            {/*--------Left section-----------*/}

            <div>
                <img className='mb-5 w-40' src={assets.logo} alt="" />
                <p className='w-full md:w-2/3 text-gray-600 leading-6'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum laoreet dui vel elit dignissim facilisis. Proin metus nulla, eleifend in lectus vel, semper semper sapien. Integer quam elit, imperdiet ac molestie quis, elementum ac purus. Sed et orci quis mauris efficitur vestibulum</p>

            </div>

            {/*--------Center section-----------*/}

            <div>
                <p className='text-xl font-medium mb-5'>COMPANY</p>
                <ul className='flex flex-col gap-2 text-gray-600'>
                    <li>Home</li>
                    <li>About us</li>
                    <li>Contact us</li>
                    <li>Privacy policy</li>
                </ul>
                
            </div>

            {/*--------Right section----------*/}

            <div>
                <p className='text-xl font-medium mb-5'>GET IN TOUCH</p>
                <ul className='flex flex-col gap-2 text-gray-600'>
                    <li>+94-725648743</li>
                    <li>prescripto@gamil.com</li>
                </ul>
            </div>

        </div>

        {/*---------Copyright text--------- */}
        <div>
            <hr />
            <p className='py-5 text-sm text-center'>Copyright 2024@ Prescripto - All rights Reserved.</p>

        </div>
              
    </div>
  )
}

export default Footer
