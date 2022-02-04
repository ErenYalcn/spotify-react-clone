import React from 'react';
import { NavLink } from 'react-router-dom';
import PlayBox from 'components/PlayBox';
import ArtistBox from 'components/ArtistBox';
import {Icon} from 'components/Icons';
import { useDispatch } from 'react-redux';
import { setCurrent } from 'stores/player';
import { useSelector } from 'react-redux';


export default function Song({item}) {
   const dispatch = useDispatch();
  const {current} = useSelector(state => state.player);
    const updateCurrent = () => {
        dispatch(setCurrent(item));
    }


    return (
    
            <NavLink key={item.id} to="/" className={'bg-footer rounded p-4 transition-all hover:bg-menubg group'}>
                <div className='relative '> 
                  <img className='w-auto h-auto inset-0 object-cover mb-4' src={item.image} />
                  <button onClick={updateCurrent} className='w-12 h-12 bg-primary absolute right-2 bottom-2 transition-opacity rounded-full flex items-center shadow-2xl justify-center opacity-0 group-hover:opacity-100 group-active:opacity-100'>
                    <Icon name={current?.id == item.id ? 'pause' : 'play'}/>
                  </button>
                </div>
                <span className='font-semibold text-white text-[16px] whitespace-nowrap'>{item.title}</span> <br />
                <span className='mt-1 text-[14px] text-link'>{item.artist}</span>
                
            </NavLink>
       
  )
}
