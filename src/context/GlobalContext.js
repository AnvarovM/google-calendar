import React from 'react'

const GlobalContext = React.createContext({
    monthIndex: 0,
    seMonthIndex: (index) => {},
});

export default GlobalContext;