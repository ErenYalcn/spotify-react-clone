import React from 'react';
import { useState } from 'react';
import {Icon} from 'components/Icons';
import { Range, getTrackBackground } from 'react-range';
import {useAudio} from 'react-use';
import { secondsToTime } from 'Utils';
import MyRange from 'components/MyRange';
import { useMemo } from 'react'; 

export default function Player() {


        const [audio, state, controls, ref] = useAudio({
            src: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3' 
          });
          

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
        <div className='min-w-[11.25rem] w-[30%]'>
            sol
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
            max={state?.duration}
            value={state?.time}
            onChange={(value) => controls.seek(value)}
            />

            <div className='text-[11px] text-gribottom'>
                {secondsToTime(state?.duration)}
            </div>


        </div>
        </div>
        <div className='min-w-[11.25rem] w-[30%] flex items-center justify-end'>
        <button className='w-8 h-8 flex items-center justify-center text-white text-opacity-70 hover:text-opacity-100'>
            <Icon name="mic" />
        </button>
       
       <button className='w-8 h-8 flex items-center justify-center text-white text-opacity-70 hover:text-opacity-100'>
            <Icon name="addlist" />
        </button>
        <button className='w-8 h-8 flex items-center justify-center text-white text-opacity-70 hover:text-opacity-100'>
            <Icon name="device" />
        </button>
        <button className='w-8 h-8 flex items-center justify-center text-white text-opacity-70 hover:text-opacity-100'>
            <Icon name={volumeIcon} />
        </button>
        <div className='w-[5.813rem]'>
        <MyRange
            step={0.01}
            min={0}
            max={1}
            value={state?.volume}
            onChange={(value) => controls.volume(value)}
            />
        </div>
        <button className='w-8 h-8 flex items-center justify-center text-white text-opacity-70 hover:text-opacity-100'>
            <Icon name="fullscreen" />
        </button>
        </div>
      </div>
  )
}
