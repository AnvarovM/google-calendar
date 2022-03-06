import React from 'react'

const GlobalContext = React.createContext({
    monthIndex: 0,
    seMonthIndex: (index) => {},
    smallCalendarMonth: null,
    setSmallCalendarMonth: (index) => {},
    daySelected: null,
    setDaySelected: (day) => {},
    showEventModal: false,
    setShowEventModal: () => {},
    dispatchEvent: ({ type, payload }) => {},
    savedEvents: [],
    showSidebar: false,
    setShowSidebar: () => {},
    selectedEvent: null,
    setSelectedEvent: () => {},
});

export default GlobalContext;