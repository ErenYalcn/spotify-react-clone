import React from 'react';

export default function Search() {
  return (
    <div>
      <h3 className='text-2xl text-white font-bold tracking-tight mb-4'>En çok dinlediğin türler</h3>
      <div className='grid grid-cols-3 gap-x-5 mb-6'>
        <a className='overflow-hidden' href="#" >
          <div className='bg-purplebox h-[220px] rounded-lg p-4 relative'>
              <span className='text-4xl font-bold'>Pop</span>
              <img className='w-[128px] h-[128px] -right-5 bottom-0 absolute rotate-25 shadow-2xl'  src="https://t.scdn.co/images/0a74d96e091a495bb09c0d83210910c3" />
          </div>
        </a>
        <a className='overflow-hidden' href="#" >
          <div className='bg-orangebox h-[220px] rounded-lg p-4 relative'>
              <span className='text-4xl font-bold'>Hip Hop</span>
              <img className='w-[128px] h-[128px] -right-5 bottom-0 absolute rotate-25 shadow-2xl'  src="https://i.scdn.co/image/ab67706f000000029bb6af539d072de34548d15c" />
          </div>
        </a>
        <a className='overflow-hidden' href="#" >
          <div className='bg-redbox h-[220px] rounded-lg p-4 relative'>
              <span className='text-4xl font-bold'>Rock</span>
              <img className='w-[128px] h-[128px] -right-5 bottom-0 absolute rotate-25 shadow-2xl'  src="https://i.scdn.co/image/ab67706f00000002fe6d8d1019d5b302213e3730" />
          </div>
        </a>
      </div>

      <div>
      <h3 className='text-2xl text-white font-bold tracking-tight mb-4'>Hepsine göz at</h3>
      <div className='grid grid-cols-5 gap-5'>
      {new Array(40).fill(

              <a className='overflow-hidden' href="#" >
                <div className='bg-purplebox h-[220px] rounded-lg p-4 relative'>
                    <span className='text-4xl font-bold'>Pop</span>
                    <img className='w-[108px] h-[108px] -right-5 bottom-0 absolute rotate-25 shadow-2xl'  src="https://t.scdn.co/images/0a74d96e091a495bb09c0d83210910c3" />
                </div>
              </a>
              
              
              
      )}
      </div>
      </div>
    </div>
  )
}