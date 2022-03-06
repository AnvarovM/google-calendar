import React, { useState, useContext } from 'react';
import CalendarHeader from './components/CalendarHeader';
import Month from './components/Month';
import Sidebar from './components/Sidebar';
import GlobalContext from './context/GlobalContext';
import { getMonth } from './util';
import './App.css';
import { useEffect } from 'react';
import EventModal from './components/EventModal';

function App() {
  const [currentMonth, setCurrentMonth] = useState(getMonth());
  const { monthIndex, showEventModal } = useContext(GlobalContext);

  useEffect(() => {
    setCurrentMonth(getMonth(monthIndex));
  }, [monthIndex]);

  return (
    <React.Fragment>
      {showEventModal && <EventModal />}
      <div className="h-screen flex flex-col">
        <CalendarHeader />
        <div className="flex flex-1">
          <Sidebar />
          <Month month={currentMonth} />
        </div>
      </div>                
    </React.Fragment>
  );
}

export default App;
