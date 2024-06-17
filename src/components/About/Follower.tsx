import { Followers } from '@/common'
import React from 'react'
import { FaInstagram } from 'react-icons/fa'

export const Follower = () => {
  return (
  <>
  <div className='pb-[70px] pt-[100px] '>
    <div className='text-center mb-[50px] ml-auto mr-auto'>
    <span className="font-uppercase text-[17px] font-bold mb-[10px]">What do I love</span>
    <h1 className='text-[36px] text-[#000000] font-bold'>Hello I"m a  follower</h1>
    </div>
    <div className='w-full  flex flex-wrap justify-center  gap-10 lg:gap-20'>
    {Followers.map((item, index) => (
  <div key={index} className='border-gray-200 w-[260px] text-center followers-area items-center justify-center   bg-[#ffffff] border-r-[5px] p-[35px 30px] shadow-md px-8 py-9 border-2 lg:w-[20%]  '>
    <div className='flex-col'>
      <h3 className='text-[46px] '><span>{item.count}</span></h3>
      <h1 className='text-[#666666]  mb-[10px]  text-[22px] font-normal'><span>{item.follow}</span></h1>
      <span className='justify-center  cursor-pointer flex gap-2 items-center '>
        <FaInstagram color={`#800080`}  />
        {item.name}
      </span>
    </div>
    <div>
      <hr className='h-[1px]  mt-[20px] mb-[15px]'/>
      <p className='text-[#666666]  text-[17px] leading-7'>{item.description}</p>
    </div>
  </div>
))}
</div>

  
  </div>
  </>
  )
}
