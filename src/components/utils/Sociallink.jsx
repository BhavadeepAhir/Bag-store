import React from 'react'

const Sociallink = ({ icon }) => {
    return (
        <>
            <img
                src={icon}
                alt='icon/social'
                className="h-8 w-8 flex item-center cursor-pointer md:w-6 md:h-6 sm:w-5 sm:h-5  transition-all hover:scale-100"

            />
        </>
    )
}

export default Sociallink