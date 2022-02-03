import React from 'react';
import { useState } from 'react';
import {Icon} from 'components/Icons';
import { Range, getTrackBackground } from 'react-range';
import {useAudio} from 'react-use';
import { secondsToTime } from 'Utils';
 

export default function Player() {

        const STEP = 0.1;
        const MIN = 0;
        const MAX = 100;
        const [values, setValues]  = useState([50])

        const [audio, state, controls, ref] = useAudio({
            src: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3' 
          });

  return (
      <div className='flex justify-between items-center px-4 justify-center'>
        <div className='min-w-[11.25rem] w-[30%]'>
            sol
        </div>
        <div className='flex flex-col items-center max-w-[45.125rem] w-[40%]'>
            <div className='flex gap-x-2'> 
                <button className='w-8 h-8 flex items-center justify-center text-white text-opacity-70 hover:text-opacity-100'>
                    <Icon name="shuffle" />
                </button>
                <button className='w-8 h-8 flex items-center justify-center text-white text-opacity-70 hover:text-opacity-100'>
                    <Icon name="playerprev" />
                </button>
                <button className='w-8 h-8 flex items-center justify-center text-white text-opacity-70 hover:text-opacity-100'>
                    <div className='bg-white rounded-full p-2 hover:scale-105'>
                        <Icon name="play" />
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
                00:00
            </div>
            <Range
            values={values}
            step={STEP}
            min={MIN}
            max={MAX}
            onChange={(values) => setValues( values )}
            renderTrack={({ props, children }) => (
                <div
                onMouseDown={props.onMouseDown}
                onTouchStart={props.onTouchStart}
                className='w-full h-9 flex group'
                style={{...props.style,}}
                >
                <div
                    ref={props.ref}
                    className='h-1 w-full rounded-md self-center'
                    style={{
                    background: getTrackBackground({
                        values: values,
                        colors: ["#1db954", "#535353"],
                        min: MIN,
                        max: MAX
                    }),
                    alignSelf: "center"
                    }}
                >
                    {children}
                </div>
                </div>
            )}
            renderThumb={({ props, isDragged }) => (
                <div
                {...props}
                className={`w-3 h-3 bg-white rounded-full flex justify-center items-center ${!isDragged ? 'opacity-0' : ''} group-hover:opacity-100`}
                style={{
                    ...props.style,

      
           
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    //boxShadow: "0px 2px 6px #AAA"
                }}
                />

            )}
            />
            <div className='text-[11px] text-gribottom'>
                {secondsToTime(state?.duration)}
            </div>


        </div>
        </div>
        <div className='min-w-[11.25rem] w-[30%] flex justify-end'>
            sağ
        </div>
      </div>
  )
}
