import React from 'react';
import PlayBox from 'components/PlayBox';
import ArtistBox from 'components/ArtistBox';

import { NavLink } from 'react-router-dom';
import {Icon} from 'components/Icons';
import Song from 'components/Song';


export default function Home() {


  const items =[
    {
      id: 1,
      title: 'Farketmeden',
      artist: 'Eren Yalçın',
      image: 'https://i.scdn.co/image/ab67616d00001e02e9c9fc7a8155861f8db6b28f',
      src: 'https://freesound.org/data/previews/617/617443_1648170-lq.mp3'
    },

    {
      id: 2,
      title: 'Uzunlar',
      artist: 'Evdeki Saat',
      image: 'https://i.scdn.co/image/ab67616d00001e02917b71d0a9aa3396f0031c40',
      src:'https://freesound.org/data/previews/617/617382_7037-lq.mp3'
    },

    {
      id: 3,
      title: 'Kan',
      artist: 'UZI',
      image: 'https://i.scdn.co/image/ab67616d00001e0267c738a703dc979f5c3c52ef',
      src:'https://freesound.org/data/previews/617/617306_5674468-lq.mp3'
    },

   {
      id: 4,
      title: 'Seni Kendime Sakladım',
      artist: 'Duman',
      image: 'https://i.scdn.co/image/ab67616d00001e02d5a587c7de8efc3ba32bede7',
      src:'https://freesound.org/data/previews/617/617305_11861866-lq.mp3'
    },

    {
      id: 5,
      title: 'Seni Dert Etmeler',
      artist: 'Madrigal',
      image: 'https://i.scdn.co/image/ab67616d00001e029aa96c06d5c346ccf6ffaf8d',
      src:'https://freesound.org/data/previews/617/617303_1015240-lq.mp3'
    },

    
  ]

  const singer =[
    {
      id: 1,
      position: 'Sanatçı',
      name: 'Demet Akalın',
      image: 'https://i.scdn.co/image/ab6761610000517493bfdfa9be5d750ef6466886'
    },
    {
      id: 2,
      position: 'Sanatçı',
      name: 'Gülşen',
      image: 'https://i.scdn.co/image/ab67616d00001e02318b9f5934c2f40343ca97c3'
    },
    {
      id: 3,
      position: 'Sanatçı',
      name: 'Hadise',
      image: 'https://i.scdn.co/image/ab676161000051748911c4deb367bd155bf475d0'
    },
    {
      id: 4,
      position: 'Sanatçı',
      name: 'Nil Karaibrahimgil',
      image: 'https://i.scdn.co/image/ab67616100005174c65a994a243b0a881a25017e'
    },
    {
      id: 5,
      position: 'Sanatçı',
      name: 'Sezen Aksu',
      image: 'https://i.scdn.co/image/ab67616100005174b624695e7b95277a7e29adb6'
    }
  ]

  const mixer =[
    {
      id: 1,
      position: 'Emir Can İğrek, Dolu Kadehi Ters Tut',
      name: 'Daily Mix 3',
      image: 'https://dailymix-images.scdn.co/v2/img/ab6761610000e5eb5b685456413fc96b946fc2f2/3/tr/default'
    },
    {
      id: 2,
      position: 'Sonny Fodera, SOMMA, Jay Pryor ve daha fazlası',
      name: 'Daily Mix 4',
      image: 'https://dailymix-images.scdn.co/v2/img/ab6761610000e5ebe03987a142f6ba53d230a58c/4/tr/default'
    },
    {
      id: 3,
      position: 'Gazapizm, Norm Ender ve daha fazlası',
      name: 'Daily Mix 5',
      image: 'https://dailymix-images.scdn.co/v2/img/ab6761610000e5eb2e83342b0f36ba888c77be62/5/tr/default'
    },
    {
      id: 4,
      position: 'Şanışer, Anıl Piyancı ve daha fazlası',
      name: 'Daily Mix 6',
      image: 'https://dailymix-images.scdn.co/v2/img/ab6761610000e5ebcfc63410e20f29a28a05c37c/6/tr/default'
    },
    {
      id: 5,
      position: 'Serdar Ortaç, Hande Yener ve daha fazlası',
      name: 'Daily Mix 1',
      image: 'https://dailymix-images.scdn.co/v2/img/ab6761610000e5ebede6e2c2886ad29725a9ebf5/1/tr/default'
    }

  ]



  return (
    <div>
      <div>
      <h3 className='text-3xl text-white font-bold tracking-tight mb-6'>İyi akşamlar</h3>
      <div className='grid grid-cols-3 items-center justify-center gap-x-6 gap-y-4 mb-6 transition-all'>
        <div className='flex items-center gap-x-4 bg-dortbox group relative hover:bg-dortboxact rounded'>
          <img className='w-[5rem] h-[5rem]' src="https://misc.scdn.co/liked-songs/liked-songs-640.png" />
          <h4 className='text-[16px] font-bold p-4'>Beğenilen Şarkılar</h4>
          <button className='w-12 h-12 bg-primary absolute right-2 transition-opacity rounded-full flex items-center shadow-2xl justify-center opacity-0 group-hover:opacity-100 group-active:opacity-100'>
            <Icon name="play"/>
          </button>
        </div>
        
        
        <div className='flex items-center gap-x-4 bg-dortbox group relative hover:bg-dortboxact rounded'>
          <img className='w-[5rem] h-[5rem]' src="https://i.scdn.co/image/ab67706f000000026e65f020506feb291e366012" />
          <h4 className='text-[16px] font-bold p-4'>Türkçe 2000'ler</h4>
          <button className='w-12 h-12 bg-primary absolute right-2 transition-opacity rounded-full flex items-center shadow-2xl justify-center opacity-0 group-hover:opacity-100 group-active:opacity-100'>
            <Icon name="play"/>
          </button>
        </div>
        
        
        <div className='flex items-center gap-x-4 bg-dortbox group relative hover:bg-dortboxact rounded'>
          <img className='w-[5rem] h-[5rem]' src="https://i.scdn.co/image/ab67706f00000002170d1a781c222aaca28081b4" />
          <h4 className='text-[16px] font-bold p-4'>Hot Hits Turkey</h4>
          <button className='w-12 h-12 bg-primary absolute right-2 transition-opacity rounded-full flex items-center shadow-2xl justify-center opacity-0 group-hover:opacity-100 group-active:opacity-100'>
            <Icon name="play"/>
          </button>
        </div>
        
        
        <div className='flex items-center gap-x-4 bg-dortbox group relative hover:bg-dortboxact rounded'>
          <img className='w-[5rem] h-[5rem]' src="https://i.scdn.co/image/ab67616d0000b273ba632c08e3ca8342c20017a5" />
          <h4 className='text-[16px] font-bold p-4'>Beyaz</h4>
          <button className='w-12 h-12 bg-primary absolute right-2 transition-opacity rounded-full flex items-center shadow-2xl justify-center opacity-0 group-hover:opacity-100 group-active:opacity-100'>
            <Icon name="play"/>
          </button>
        </div>
        
        
        <div className='flex items-center gap-x-4 bg-dortbox group relative hover:bg-dortboxact rounded'>
          <img className='w-[5rem] h-[5rem]' src="https://dailymix-images.scdn.co/v2/img/ab6761610000e5ebede6e2c2886ad29725a9ebf5/1/tr/default" />
          <h4 className='text-[16px] font-bold p-4'>Daily Mix 1</h4>
          <button className='w-12 h-12 bg-primary absolute right-2 transition-opacity rounded-full flex items-center shadow-2xl justify-center opacity-0 group-hover:opacity-100 group-active:opacity-100'>
            <Icon name="play"/>
          </button>
        </div>
        <div className='flex items-center gap-x-4 bg-dortbox group relative hover:bg-dortboxact rounded'>
          <img className='w-[5rem] h-[5rem]' src="https://dailymix-images.scdn.co/v2/img/ab67616d0000b27365a248c766e18522893d44c5/2/tr/default" />
          <h4 className='text-[16px] font-bold p-4'>Daily Mix 2</h4>
          <button className='w-12 h-12 bg-primary absolute right-2 transition-opacity rounded-full flex items-center shadow-2xl justify-center opacity-0 group-hover:opacity-100 group-active:opacity-100'>
            <Icon name="play"/>
          </button>
        </div>

      </div>
      </div>
        <div className='flex justify-between items-end mb-4'>
        <PlayBox title={'ErenYalcn İçin Derlendi'}/>
        <PlayBox see />
        </div>
        <div className='grid grid-cols-5 gap-x-6'>
                {items.map(item => <Song item={item} key={item.id} /> )}
                
        </div>
        <div className='flex justify-between items-end mb-4 mt-6'>
        <PlayBox title={'Türkçe pop kadın yıldızlar'}/>
        <PlayBox see />
        </div>
        <div className='grid grid-cols-5 gap-x-6 mb-8'>
                {mixer.map(item => (
                    <NavLink key={item.id} to="/" className={'bg-footer rounded p-4 transition-all hover:bg-menubg group'}>
                        <div className='relative '> 
                          <img className='w-auto h-auto inset-0 object-cover mb-4' src={item.image} />
                          <button className='w-12 h-12 bg-primary absolute right-2 bottom-2 transition-opacity rounded-full flex items-center shadow-2xl justify-center opacity-0 group-hover:opacity-100 group-active:opacity-100'>
                            <Icon name="play"/>
                          </button>
                        </div>
                        <span className='font-semibold text-white text-[16px] whitespace-nowrap'>{item.name}</span> <br />
                        <span className='mt-1 text-[14px] text-link'>{item.position}</span>
                        
                    </NavLink>
                ))}
        </div>
        <div className='flex justify-between items-end mb-4 mt-6'>
        <PlayBox title={'Türkçe pop kadın yıldızlar'}/>
        <PlayBox see />
        </div>
        <div className='grid grid-cols-5 gap-x-6 mb-8'>
                {singer.map(item => (
                    <NavLink key={item.id} to="/" className={'bg-footer rounded p-4 transition-all hover:bg-menubg group'}>
                        <div className='relative '> 
                          <img className='w-auto h-auto inset-0 object-cover mb-4 rounded-full' src={item.image} />
                          <button className='w-12 h-12 bg-primary absolute right-2 bottom-2 transition-opacity rounded-full flex items-center shadow-2xl justify-center opacity-0 group-hover:opacity-100 group-active:opacity-100'>
                            <Icon name="play"/>
                          </button>
                        </div>
                        <span className='font-semibold text-white text-[16px] whitespace-nowrap'>{item.name}</span> <br />
                        <span className='mt-1 text-[14px] text-link'>{item.position}</span>
                        
                    </NavLink>
                ))}
        </div>

    </div>
  )
}