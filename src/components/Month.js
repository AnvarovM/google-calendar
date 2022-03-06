import React from 'react'
import Day from './Day'
import { useContext } from 'react';
import GlobalContext from '../context/GlobalContext';

const Month = ({ month }) => {
  const { showSidebar } = useContext(GlobalContext);
  return (
    <div className='flex-1 grid grid-cols-7 grid-rows-5'>
        {month.map((row, i) => (
            <React.Fragment key={i}>
                {row.map((day, idx) => (
                    <Day day={day} key={idx} rowIdx={i} />
                ))}
            </React.Fragment>
        ))}
    </div>
  )
}

export default Month