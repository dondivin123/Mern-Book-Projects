import React from 'react'
import BannerCard from '../home/BannerCard'

const Banner = () => {
  return (
    <div className='px-4 lg:px-24 bg-teal-100 flex items-center'>
        <div className='flex flex-col md:flex-row justify-between items-center gap-12 py-40'>
            {/* left side */}
            <div className='md:w-1/2 space-y-8 h-full'>
                <h2 className='text-5xl font-bold leading-snug text-black'>Buy and Sell Your Books <span
                className='text-blue-700'>for the Best Prices</span></h2>
                <p className='md:w-4/5'>Lorem Ipsum consists of a single, 60,000-word sentence. 
                    An epistolary fiction to an unidentified email recipient, 
                    the novel is modelled after the Japanese prose genre of the zu&ihi&tsu, 
                    an unfolding sentence in which resolution and closure are endlessly deferred. </p>
            <div>
                <input type="search" none="search" id="search" placeholder='Search a book' className='py-2
                px-2 rounded-s-sm outline-none bg-white'/>
                <button className='bg-blue-700 px-6 py-2 text-white font-medium hover:bg-black
                transition-all ease-in duration-200'>Search</button>
                </div>        
            </div>

            {/* right side */}
            <div>
                <BannerCard></BannerCard>
            </div>
        </div>
    </div>
  )
}

export default Banner