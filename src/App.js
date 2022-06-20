import React from 'react'
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import MessageIcon from '@mui/icons-material/Message';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import Avatar from '@mui/material/Avatar';
import image1 from './components/assets/index.jpg'
import image2 from './components/assets/index2.jpg'

const App = () => {
  return (
   <div  className='bg-slate-800 flex w-full justify-around flex-col '>
        <div className='text-white p-3'>
            <ArrowBackIcon/>
        </div>
        <h1 className='text-white px-3 text-2xl'>
            City News
        </h1>
        <div className='flex-col md:flex md:flex-grow md:justify-around'>
          <div>
          <div  className='w-96 m-6 '> 
          <div className='z-0   '>
          <img
            className=' -mb-16 overflow-hidden w-full rounded-2xl'
            src={image1}
            />
          </div>
            <div  className='z-100 flex items-center rounded-xl  w-content mx-3'>
              <div className='bg-white flex flex-col w-full rounded-lg'>
                <div className=' flex items-center'>
                  <div className='m-3'>
                  <Avatar src={image2}/>
                  </div>  
                  <div>
                    <h1> Travis Howard </h1>
                    <p className='text-xs text-slate-600'> 18 Nov 2019 </p>     
                  </div>              
                </div>
                <div className='px-5'>
                    <p className='text-sm text-slate-500'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy </p>
                </div>
                <div className='px-5 my-2 flex justify-between'>
                  <div><ShareIcon/></div>
                  <div className='flex'>
                    <div className='flex'>
                      <p className='px-3'>25</p>
                      <MessageIcon/>
                    </div>
                    <div className='flex'>
                      <p className='px-3'>25</p>
                      <FavoriteIcon/>
                    </div>
                  </div>
                </div>
              </div>      
            </div>
          </div>   
        </div>
          <div className='flex justify-end w-96 m-6'>
            <div className=' z-50 flex h-36 mt-4 -mr-80'>
              <img className='rounded-lg  w-36 h-36' src={image1}/>
              <div className='w-56 h-36'>
                <div className='flex flex-col p-2'>
                  <div className='flex items-center'>
    
                  <div className='ml-4'>
                    <h1> Travis Howard </h1>
                    <p className='text-xs text-slate-600'> 18 Nov 2019 </p>     
                  </div> 
                  <div className='mx-2'>
                      <Avatar src={image2}/>
                    </div> 
                  </div>
                  <div className='m-3'>
                    <p className='text-sm text-slate-500'>Lorem Ipsum is simplyng industry. Lorem Ipsum has been the industry's standard dummy </p>
                  </div>              
                </div>
              </div>
            </div>
            <div className='bg-white w-80 h-44 rounded-xl '/>          
          </div>
      </div>
   </div>
  )
}

export default App