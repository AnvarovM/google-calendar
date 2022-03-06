import dayjs from 'dayjs';
import React from 'react';
import { useReducer } from 'react';
import { useEffect } from 'react';
import { savedEventsReducer } from '../reducer/savedEventsReducer';
import { initEvents } from '../reducer/initEvents';
import GlobalContext from './GlobalContext';

export const ContextWrapper = ({ children }) => {
  const [monthIndex, setMonthIndex] = React.useState(dayjs().month());
  const [smallCalendarMonth, setSmallCalendarMonth] = React.useState(null);
  const [daySelected, setDaySelected] = React.useState(dayjs());
  const [showEventModal, setShowEventModal] = React.useState(null);
  const [showSidebar, setShowSidebar] = React.useState(null);
  const [savedEvents, dispatchEvent] = useReducer(savedEventsReducer, [], initEvents);

  useEffect(() => {

  }, [savedEvents]);
    localStorage.setItem('savedEvents', JSON.stringify(savedEvents));
  useEffect(() => {
    if (smallCalendarMonth !== null) {
      setMonthIndex(smallCalendarMonth);
    };
  }, [smallCalendarMonth])
  return (
    <GlobalContext.Provider value={{
      monthIndex,
      setMonthIndex,
      smallCalendarMonth,
      setSmallCalendarMonth,
      daySelected,
      setDaySelected,
      showEventModal,
      setShowEventModal,
      dispatchEvent,
      savedEvents,
      showSidebar,
      setShowSidebar,
      }}>
        {children}
    </GlobalContext.Provider>
  )
};