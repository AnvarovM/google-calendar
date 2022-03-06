import React from 'react'

const GlobalContext = React.createContext({
    monthIndex: 0,
    seMonthIndex: (index) => {},
    smallCalendarMonth: null,
    setSmallCalendarMonth: (index) => {},
    daySelected: null,
    setDaySelected: (day) => {}
});

export default GlobalContext;