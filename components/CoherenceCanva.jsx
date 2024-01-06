'use client'
import React, { useState } from 'react'

// eslint-disable-next-line react/display-name
const CoherenceCanva = React.forwardRef(({ textColor, bgColor, textSize }, ref) => {
  const [text, setText] = useState('');
  console.log(textColor);

  const handleInputChange = (event) => {
    const textarea = event.target;
    textarea.style.height = '1px';
    textarea.style.height = `${textarea.scrollHeight}px`;
    setText(textarea.value);
  };

  return (
    <div
      ref={ref}
      style={{ background: bgColor }}
      className={`w-[359px] h-[359px] max-[360px]:w-[260px] max-[360px]:h-[260px] min-[450px]:w-[450px] min-[450px]:h-[450px] sm:min-w-[512px] sm:min-h-[512px]  relative md:p-4 lg:p-3 px-8 flex items-center justify-center`}
    >
      <div className='flex justify-end w-full sm:w-[85%] h-full shrink-0 flex-col tracking-tighter leading-normal font-medium mb-[4rem]'>
        <div className="h-[90%] w-full flex items-end">
          <textarea 
            id="textarea"
            placeholder="Escribe aqui" 
            style={{ color: textColor, fontSize: `${textSize}px`}}
            value={text}
            onChange={handleInputChange}
            maxLength={150}
          ></textarea>
        </div>

        <div className='h-[10%] flex items-center justify-start'>
          <span
            style={{color: textColor}}
            className='text-base md:text-lg lg:text-xl font-semibold max-[280px]:text-xs'
          >
            Coherencia por favor.
          </span>
        </div>
      </div>
    </div>
  )
})

export default CoherenceCanva