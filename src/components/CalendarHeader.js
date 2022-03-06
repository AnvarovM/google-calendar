import dayjs from 'dayjs';
import React from 'react'
import { BsChevronLeft, BsChevronRight } from 'react-icons/bs';
import GlobalContext from '../context/GlobalContext';
import { MdMenu } from 'react-icons/md';

const CalendarHeader = () => {
  const { monthIndex, setMonthIndex, showSidebar, setShowSidebar } = React.useContext(GlobalContext);

  const handlePrevMonth = () => {
    setMonthIndex(monthIndex - 1);
  };

  const handleNextMonth = () => {
    setMonthIndex(monthIndex + 1);
  };

  const handleReset = () => {
    setMonthIndex(monthIndex === dayjs().month() ? monthIndex + Math.random() : dayjs().month());
  };

  return (
    <header className='px-4 py-2 flex items-center'>
      <span onClick={() => setShowSidebar(!showSidebar)} className="text-gray-500 text-2xl cursor-pointer mr-4">
          <MdMenu />    
      </span>
      <img className='mr-1 md:mr-2 w-8 h-8 md:w-12 md:h-12' src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Google_Calendar_icon_%282020%29.svg/512px-Google_Calendar_icon_%282020%29.svg.png?20201017163428" alt="calendar logo" />
      <h1 className='mr-1 md:mr-2 text- md:text-xl text-gray-500 font-bold'>Calendar</h1>
      <button onClick={handleReset} className='border rounded py-1 px-3 md:py-2 md:px-4 mx-2 md:mx-5 text-gray-700 hover:bg-gray-100' title='today'>Today</button>
      <button onClick={handlePrevMonth} className='cursor-pointer text-gray-700 mx-0 md:mx-2 stroke-2 ' title='previous'>
          <BsChevronLeft />  
      </button>
      <button onClick={handleNextMonth} className='cursor-pointer text-gray-700 mx-0 md:mx-2 stroke-2 ' title='next'>
          <BsChevronRight />  
      </button>
      <h2 className='ml-2 md:ml-4 text:xs md:text-xl text-gray-500 font-light whitespace-nowrap md:font-bold'>{dayjs(new Date(dayjs().year(), monthIndex)).format(
        "MMMM YYYY"
      )}</h2>
    </header>
  )
}

export default CalendarHeader