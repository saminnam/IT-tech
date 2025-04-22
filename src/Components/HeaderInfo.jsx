import React from 'react'
import facebook from '../assets/facebook (1).png'
import instagram from '../assets/insta.png'
import linkedin from '../assets/linkedin.png'

const HeaderInfo = () => {
  return (
    <div className='bg-main-voilet'>
    <div className='px-4 mx-auto max-w-7xl sm:px-6 lg:px-8  flex flex-wrap gap-3 lg:gap-0 justify-between items-center py-3'>
   <div className='flex gap-5'>
    <h4 className='text-main-color'><span className='text-white'>CONTACT NO :</span> 9840234475</h4>
    <h4 className='text-main-color'><span className='text-white'>EMAIL ID :</span> info@inetztech.com</h4>
   </div>
   <div className='flex gap-5 pe-3'>
   <img src={facebook} alt="" className='w-8'/>
   <img src={instagram} alt="" className='w-8'/>
   <img src={linkedin} alt="" className='w-8'/>

   </div>
    </div>

</div>
  )
}

export default HeaderInfo