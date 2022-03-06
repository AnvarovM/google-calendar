import React from 'react';
import dayjs from 'dayjs';
import { useEffect } from 'react';
import { getMonth } from '../util';
import { BsChevronLeft, BsChevronRight } from 'react-icons/bs';
import GlobalContext from '../context/GlobalContext';
import { useContext } from 'react';

const SmallCalendar = () => {
    const [currentMonthIdx, setCurrentMonthIdx] = React.useState(dayjs().month());
    const [currentMonth, setCurrentMonth] = React.useState(getMonth());
    const { monthIndex, setSmallCalendarMonth, daySelected, setDaySelected } = useContext(GlobalContext);

    useEffect(() => {
        setCurrentMonth(getMonth(currentMonthIdx));
    }, [currentMonthIdx]);

    useEffect(() => {
        setCurrentMonthIdx(monthIndex)
    }, [monthIndex])

    const handlePrevMonth = () => {
        setCurrentMonthIdx(currentMonthIdx - 1);
    };

    const handleNextMonth = () => {
        setCurrentMonthIdx(currentMonthIdx - 1);
    };

    const getDayClass = (day) => {
        const format = 'DD-MM-YYYY';
        const today = dayjs().format(format);
        const currDay = day.format(format);
        const selectedDay = daySelected && daySelected.format(format);


        if (currDay === today) {
            return 'bg-blue-500 rounded-full text-white';
        } else if (currDay === selectedDay) {
            return 'bg-green-500 rounded-full text-white';
        } else {
            return '';
        }
    }

  return (
    <div className='mt-9'>
        <header className='flex justify-between items-center'>
            <p className="text-gray-500 font-bold flex flex-grow">
                {dayjs(new Date(dayjs().year(), currentMonthIdx)).format('MMMM YYYY')} 
            </p>
            <button onClick={handlePrevMonth}>
                <span className='cursor-pointer text-gray-600 text-sm mx-4'>
                    <BsChevronLeft />
                </span>
            </button>
            <button onClick={handleNextMonth}>
                <span className='cursor-pointer text-gray-600 text-sm mx-4'>
                    <BsChevronRight />
                </span>
            </button>
        </header>
        <div className="grid grid-cols-7 grid-rows-6">
            {currentMonth[0].map((day, idx) => (
                <span key={idx} className='text-xs py-1 text-center' title={day.format('ddd')}>
                    {day.format('ddd').slice(0, 2)}
                </span>
            ))}
            {currentMonth.map((row, i) => (
                <React.Fragment key={i}>
                    {row.map((day, j) => (
                        <button onClick={() => {
                            setSmallCalendarMonth(currentMonthIdx);
                            setDaySelected(day);
                        }} key={j} className={`py-1 w-full ${getDayClass(day)}`}>
                            <span className='text-sm'>{day.format('D')}</span>
                        </button>
                    ))}
                </React.Fragment>
            ))}
        </div>
    </div>
  )
}

export default SmallCalendar 