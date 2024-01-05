import React from 'react'

const FlexContent = ({ highlight: { heading, title, text, btn, url, img } }) => {
    // console.log(highlight);
    return (
        <>
            <div className="flex items-center justify-between lg:flex-col lg:justify-center bag-container">
                <div className='max-w-lg lg:max-w-none w-full md:text-center  grid items-center lg:justify-items-center'>
                    <h1 className='text-4xl sm:text-3xl font-bold text-gradient  '>{heading}</h1>
                    <h1 className='text-54xl lg:text-3xl md:text-2xl sm:text-2xl font-bold text-slate-900 filter drop-shadow-lg  '>{title}</h1>
                    <p className=' xl:text-sm my-4  text-slate-900 '>{text}</p>
                    <a href={url}>
                        <button type='button' className='button-theme bg-slate-900 shadow-slate-900 py-1.5 text-slate-100'>{btn}</button>
                    </a>
                </div>
                <div className='flex items-center justify-center max-w-xl relative lg:max-w-none w-full '>
                    <img
                        src={img}
                        alt={`img/${heading}`}
                        className='w-auto object-fill transitions-theme h-80 lg:h-60 md:h-60 sm:h-60 xsm:h-36 rotate-6 hover:-rotate-12'
                    />
                </div>
            </div>
        </>
    )
}

export default FlexContent