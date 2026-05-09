import React from 'react'
import ExploreBox from './ExploreBox'

const Goods = () => {
  return (
    <div className='mt-[12rem]'>
      <div className='flex w-[100vw] items-center flex-col'>
        <p className='uppercase text-[2rem] mobile:text-[1.6rem] transition-colors duration-400' style={{ color: 'var(--text-secondary)' }}>What we deal with !</p>
        <p className='capitalize text-[1.5rem] transition-colors duration-400' style={{ color: 'var(--text-secondary)' }}> Our major products </p>
      </div>

      <ExploreBox />
    </div>
  )
}

export default Goods