import React from 'react'
import { BiLogoFacebook } from 'react-icons/bi'
import { AiOutlineTwitter } from 'react-icons/ai'
import { FaPinterest } from 'react-icons/fa'
import { AiFillInstagram } from 'react-icons/ai'
import { BsYoutube } from 'react-icons/bs'
import { MdEmail } from 'react-icons/md'
const Footer = () => {

  const FooterSocailIcons = [
    {
      name: <BiLogoFacebook size={20} />
    }
    ,
    {
      name: <AiOutlineTwitter size={20} />
    }
    ,
    {
      name: <FaPinterest size={20} />
    }
    ,
    {
      name: <AiFillInstagram size={20} />
    }
    ,
    {
      name: <BsYoutube size={20} />
    }
    ,
    {
      name: <MdEmail size={20} />
    }
  ]

  const FooterMenu = [
    {
      name: "All Catageries"
    },
    {
      name: "Site Map"
    },
    {
      name: "About Us"
    },
    {
      name: "Help"
    },
  ]
  return (
    <div className='bg-black'>

      <div className='bg-black text-white max-w-screen-lg mx-auto py-4'>

        <div className='flex justify-between items-center'>
          <div className='socialIcons'>
            <ul className='flex'>
              {FooterSocailIcons.map((items, index) => {
                return <li className='me-4 hover:text-customYellow cursor-pointer' key={index}>{items.name}</li>
              })}
            </ul>
          </div>

          <div className='FooterMenu mt'>
            <ul className='flex'>
              {FooterMenu.map((items, index) => {
                return <li className='me-4 hover:text-customYellow text-xs cursor-pointer' key={index}>{items.name}</li>
              })}
            </ul>
          </div>

        </div>

        <div className='flex justify-between items-center pt-2'>
          <div className='FooterMenu mt-2'>
            <ul className='flex'>
              {FooterMenu.map((items, index) => {
                return <li className='me-4 hover:text-customYellow text-xs cursor-pointer' key={index}>{items.name}</li>
              })}
            </ul>
          </div>
          <div>
            <p className='text-sm'>© 2023 Warner Bros. Discovery, Inc. or its subsidiaries and affiliates. All rights reserved.</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer