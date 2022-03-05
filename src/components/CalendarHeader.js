import dayjs from 'dayjs';
import React from 'react'
import { BsChevronLeft, BsChevronRight } from 'react-icons/bs';
import GlobalContext from '../context/GlobalContext';

const CalendarHeader = () => {
  const { monthIndex, setMonthIndex } = React.useContext(GlobalContext);

  const handlePrevMonth = () => {
    setMonthIndex(monthIndex - 1);
  };

  const handleNextMonth = () => {
    setMonthIndex(monthIndex + 1);
  };

  const handleReset = () => {
    setMonthIndex(dayjs().month());
  };

  return (
    <header className='px-4 py-2 flex items-center'>
      <img className='mr-2 w-12 h-12' src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Google_Calendar_icon_%282020%29.svg/512px-Google_Calendar_icon_%282020%29.svg.png?20201017163428" alt="calendar logo" />
      <h1 className='mr-2 text-xl text-gray-500 font-bold'>Calendar</h1>
      <button onClick={handleReset} className='border rounded py-2 px-4 mx-5 hover:bg-gray-100' title='today'>Today</button>
      <button onClick={handlePrevMonth} className='cursor-pointer text-gray-700 mx-2 stroke-2 ' title='previous'>
          <BsChevronLeft />  
      </button>
      <button onClick={handleNextMonth} className='cursor-pointer text-gray-700 mx-2 stroke-2 ' title='next'>
          <BsChevronRight />  
      </button>
      <h2 className='ml-4 text-xl text-gray-500 font-bold'>{dayjs(new Date(dayjs().year(), monthIndex)).format(
        "MMMM YYYY"
      )}</h2>
    </header>
  )
}

export default CalendarHeader