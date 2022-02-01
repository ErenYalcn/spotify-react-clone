import React from 'react';
import PlayBox from 'components/PlayBox';
import { NavLink } from 'react-router-dom';

export default function Home() {
  
  const items =[
    {
      id: 1,
      title: 'Farketmeden',
      artist: 'Eren Yalçın',
      image: 'https://i.scdn.co/image/ab67616d00001e02e9c9fc7a8155861f8db6b28f'
    },

    {
      id: 2,
      title: 'Farketmeden',
      artist: 'Eren Yalçın',
      image: 'https://i.scdn.co/image/ab67616d00001e02e9c9fc7a8155861f8db6b28f'
    },

    {
      id: 3,
      title: 'Farketmeden',
      artist: 'Eren Yalçın',
      image: 'https://i.scdn.co/image/ab67616d00001e02e9c9fc7a8155861f8db6b28f'
    },

   {
      id: 4,
      title: 'Farketmeden',
      artist: 'Eren Yalçın',
      image: 'https://i.scdn.co/image/ab67616d00001e02e9c9fc7a8155861f8db6b28f'
    },

    {
      id: 5,
      title: 'Farketmeden',
      artist: 'Eren Yalçın',
      image: 'https://i.scdn.co/image/ab67616d00001e02e9c9fc7a8155861f8db6b28f'
    },

    
  ]

  return (
    <div>
        <div className='flex justify-between items-end mb-4'>
        <PlayBox title={'ErenYalcn İçin Derlendi'}/>
        <PlayBox see />
        </div>
        <div className='grid grid-cols-5 gap-x-6'>
                {items.map(item => (
                    <NavLink key={item.id} to="/" className={'bg-footer rounded-lg p-4'}>
                        <img className='w-[205px] h-auto mb-4' src={item.image} />
                        <span className='font-semibold text-white text-[16px]'>{item.title}</span> <br />
                        <span className='mt-1 text-[14px] text-link'>{item.artist}</span>
                        
                    </NavLink>
                ))}
          </div>

    </div>
  )
}