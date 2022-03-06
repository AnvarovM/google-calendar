import React from 'react'
import CreateEventButton from './CreateEventButton'
import SmallCalendar from './SmallCalendar';
import { useContext } from 'react';
import GlobalContext from '../context/GlobalContext';

const Sidebar = () => {
  const { showSidebar } = useContext(GlobalContext);
  return (
    <aside className={showSidebar ? 'border p-5 w-64 hidden transition duration-300' : 'border p-5 w-64 block transition duration-500'}>
      <CreateEventButton />
      <SmallCalendar />
    </aside>
  )
}

export default Sidebar;