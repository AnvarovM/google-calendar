import dayjs from 'dayjs';
import React from 'react';
import GlobalContext from './GlobalContext';

export const ContextWrapper = ({ children }) => {
  const [monthIndex, setMonthIndex] = React.useState(dayjs().month());
  return (
    <GlobalContext.Provider value={{monthIndex, setMonthIndex}}>
        {children}
    </GlobalContext.Provider>
  )
};