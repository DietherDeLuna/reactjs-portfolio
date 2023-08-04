import React from 'react'

const Heading = ({title}) => {
  return (
    <div className='text-gray-500 text-[32px] font-medium flex items-center gap-4 py-16 uppercase'>
        {title}
        <div className='bg-[#5050e6] h-[2px] w-[40px] translate-y-1'></div>
    </div>
  )
}

export default Heading