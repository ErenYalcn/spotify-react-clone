import React from 'react';
import { useState, useEffect } from 'react';
import {Icon} from 'components/Icons';
import {useAudio} from 'react-use';
import { secondsToTime } from 'Utils';
import MyRange from 'components/MyRange';
import { useMemo } from 'react'; 
import { useSelector } from 'react-redux';
import { setControls } from 'stores/player';
import { useDispatch } from 'react-redux';

export default function Player() {

        const dispatch = useDispatch();
        const {current} = useSelector(state => state.player);


        const [audio, state, controls, ref] = useAudio({
            src: current?.src
          });

          useEffect(() => {
            controls.play()
      }, [current]);

          useEffect(() => {
                dispatch(setControls(controls))
          }, []);

          

          const volumeIcon = useMemo(() => {
            if (state.volume === 0 || state.muted)
                return 'mute'
            if (state.volume > 0 && state.volume < 0.33)
                return 'low'
            if (state.volume >= 0.33 && state.volume < 0.66)
                return 'mid'
            return 'full'
        }, [state.volume, state.muted])


  return (
      <div className='flex justify-between items-center px-4 justify-center'>
        <div className='min-w-[11.25rem] w-[30%]ß'>
        {current && (
            <div className='flex items-center'>         
                <div className='flex items-center'>
                    <div className='w-14 h-14 mr-3'>
                        <img src={current.image} />
                    </div>
                    <div>
                        <h4 className='text-sm text-white'>{current.title}</h4>
                        <h6 className='text-[0.688rem] text-tartist'>{current.artist}</h6>
                    </div>
                </div>
                <button
                className="w-8 h-8 flex items-center justify-center text-white text-opacity-70 hover:text-opacity-100 ml-4">
                    <Icon size={16} name="wishlist"/>
                </button>
                <button
                className="w-8 h-8 flex items-center justify-center text-white text-opacity-70 hover:text-opacity-100 ">
                    <Icon size={16} name="screen"/>
                </button>
            </div>
            )}
        </div>
        <div className='flex flex-col items-center max-w-[45.125rem] w-[40%]'>
            <div className='flex gap-x-3'> 
                <button className='w-8 h-8 flex items-center justify-center text-white text-opacity-70 hover:text-opacity-100'>
                    <Icon name="shuffle" />
                </button>
                <button className='w-8 h-8 flex items-center justify-center text-white text-opacity-70 hover:text-opacity-100'>
                    <Icon name="playerprev" />
                </button>
                <button onClick={controls[state?.playing ? 'pause' : 'play']} className='w-8 h-8 flex items-center justify-center text-white text-opacity-70 hover:text-opacity-100'>
                    <div className='bg-white rounded-full p-2 hover:scale-105'>
                        <Icon name={state?.playing ? 'ppause' : 'pplay'} />
                    </div>
                </button>
                <button className='w-8 h-8 flex items-center justify-center text-white text-opacity-70 hover:text-opacity-100'>
                    <Icon name="playernext" />
                </button>
                <button className='w-8 h-8 flex items-center justify-center text-white text-opacity-70 hover:text-opacity-100'>
                    <Icon name="repeat" />
                </button>
            </div>




        <div className='w-full flex items-center gap-x-2'>
            {audio}
            <div className='text-[11px] text-gribottom'>
            {secondsToTime(state?.time)}
            </div>
            <MyRange
                        step={0.1}
                        min={0}
                        max={state?.duration || 1}
                        value={state?.time}
                        onChange={value => controls.seek(value)}
            />

            <div className='text-[11px] text-gribottom'>
                {secondsToTime(state?.duration)}
            </div>


        </div>
        </div>
        <div className='min-w-[11.25rem] flex items-center justify-end'>
        <button className='w-8 h-8 flex items-center justify-center text-white text-opacity-70 hover:text-opacity-100'>
            <Icon name="mic" />
        </button>
       
       <button className='w-8 h-8 flex items-center justify-center text-white text-opacity-70 hover:text-opacity-100'>
            <Icon name="addlist" />
        </button>
        <button className='w-8 h-8 flex items-center justify-center text-white text-opacity-70 hover:text-opacity-100'>
            <Icon name="device" />
        </button>
        <button onClick={controls[state?.muted ? 'unmute' : 'mute']} className='w-8 h-8 flex items-center justify-center text-white text-opacity-70 hover:text-opacity-100'>
            <Icon name={volumeIcon} />
        </button>
        <div className='w-[5.813rem]'>
        <MyRange
            step={0.01}
            min={0}
            max={1}
            value={state.muted ? 0 : state?.volume}
            onChange={(value) => {
                controls.unmute()
                controls.volume(value)}}
            />
        </div>
        <button className='w-8 h-8 flex items-center justify-center text-white text-opacity-70 hover:text-opacity-100'>
            <Icon name="fullscreen" />
        </button>
        </div>
      </div>
  )
}
