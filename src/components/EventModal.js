import React from "react";
import { MdOutlineDragHandle, MdClose, MdSchedule, MdSegment, MdBookmarkBorder, MdCheck } from 'react-icons/md';
import { useContext } from "react";
import GlobalContext from "../context/GlobalContext";
import { LABEL_CLASSES } from "../constants";

const EventModal = () => {
    const [title, setTitle] = React.useState("");
    const [description, setDescription] = React.useState("");
    const [selectedLabel, setSelectedLabel] = React.useState(LABEL_CLASSES[0]);

    const {setShowEventModal, daySelected, dispatchEvent} = useContext(GlobalContext);

    const handleSubmit = (e) => {
        e.preventDefault();
        const calendarEvent = {
            title,
            description,
            label: selectedLabel,
            day: daySelected.valueOf(),
            id: Date.now()
        };
        
        dispatchEvent({type: "push", payload: calendarEvent});
        setShowEventModal(false);
    };

  return <div className="h-screen w-full fixed flex left-0 top-0 justify-center items-center">
      <form className="bg-white rounded-lg shadow-2xl w-1/4">
        <header className="bg-gray-200 px-4 py-2 flex justify-between items-center">
            <span className="text-gray-400">
                <MdOutlineDragHandle />    
            </span>
            <button onClick={() => setShowEventModal(false)}>
                <span className="text-gray-400">
                    <MdClose />    
                </span>
            </button>
        </header>
        <div className="p-3 bg-gray-100">
            <div className="grid grid-cols-1/5 items-end gap-y-7">
                <div></div>
                <input 
                className="pt-3 pb-2 bg-transparent border-0 text-gray-600 text-xl font-semibold w-full border-b-2 border-gray-200 focus:outline-none focus:ring-0 focus:border-blue-500"
                type="text"
                name="title"
                placeholder="Add title"
                value={title}
                required
                onChange={(e) => setTitle(e.target.value)} />

                <span className="text-gray-400 text-xl">
                    <MdSchedule />    
                </span>
                <p>{daySelected.format("dddd, MMMM DD")}</p>

                <span className="text-gray-400 text-xl">
                    <MdSegment />    
                </span>

                <input 
                className="pt-3 pb-2 bg-transparent border-0 text-gray-600 w-full border-b-2 border-gray-200 focus:outline-none focus:ring-0 focus:border-blue-500"
                type="text"
                name="description"
                placeholder="Add a description"
                value={description}
                required
                onChange={(e) => setDescription(e.target.value)} />

                <span className="text-gray-400 text-xl">
                    <MdBookmarkBorder />    
                </span>

                <div className="flex space-x-2">
                    {LABEL_CLASSES.map((labelClass, i) => {
                        return (
                            <span onClick={() => setSelectedLabel(labelClass)} className={`bg-${labelClass}-500 w-6 h-6 rounded-full flex items-center justify-center cursor-pointer`} key={i}>
                             {selectedLabel === labelClass && <span className="text-white"><MdCheck /></span>}
                        </span>
                        )
                    })}
                </div>
            </div>
        </div>
        <footer className="flex justify-end w-100 border-t p-3 mt-5">
            <button onClick={handleSubmit} type="submit" className="bg-blue-500 hover:bg-blue-600 px-6 py-2 rounded text-white">
                Save
            </button>   
        </footer>
      </form>
  </div>;
};

export default EventModal;
