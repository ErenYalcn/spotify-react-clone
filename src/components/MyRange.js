import React from 'react';

import { Range, getTrackBackground } from 'react-range';
import {useAudio} from 'react-use';

export default function MyRange({value, step, min, max, onChange}) {



 
  return (
    
        <Range
            values={[value ]}
            step={step}
            min={min}
            max={max}  
            onChange={values => onChange(values[0])}
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
                        values: [value],
                        colors: ["#1db954", "#535353"],
                        min: min,
                        max: max
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
 
  )
}
