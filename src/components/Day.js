import dayjs from 'dayjs';
import React from 'react';
import { useEffect } from 'react';
import { useContext } from 'react';
import GlobalContext from '../context/GlobalContext';

const Day = ({ day, rowIdx }) => {
  const [dayEvents, setDayEvents] = React.useState([]);
  const {setDaySelected, setShowEventModal, savedEvents, setSelectedEvent} = useContext(GlobalContext);

  useEffect(() => { 
    const events = savedEvents.filter(event => dayjs(event.day).format('DD-MM-YY') === day.format('DD-MM-YY'));
    setDayEvents(events);
  }, [savedEvents, day]);

  const getCurrentDayClass = () => {
      return day.format('DD-MM-YY') === dayjs().format('DD-MM-YY') ? 'bg-blue-600 text-white rounded-full w-7' : ''
  };

  return (
    <div className='border border-gray-200 flex flex-col hover:bg-gray-100'>
        <header className='flex flex-col items-center'>
            {rowIdx === 0 && <p className='text-sm mt-1'>{day.format('ddd').toUpperCase()}</p>}
            <p className={`text-sm p-1 my-1 text-center ${getCurrentDayClass()}`}>{day.format('DD')}</p>
        </header>
        <div className="flex-1 cursor-pointer" onClick={() => {
          setDaySelected(day);
          setShowEventModal(true);
        }}>
          {dayEvents.map((evt, idx) => (
            <div onClick={() => setSelectedEvent(evt)} key={idx} className='p-1 rounded-sm mb-1'> 
              <p className={`bg-${evt.label}-500 truncate text-sm text-gray-600 text-center py-1`}>{evt.title}</p>
            </div>
          ))}
        </div>
    </div>
  )
}

export default Day