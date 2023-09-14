import React, { useState } from 'react';

function Agenda() {
    const [events, setEvents] = useState([]);
    const [newEvent, setNewEvent] = useState('');

    const handleAddEvent = () => {
        if (newEvent.trim() !== '') {
            setEvents([...events, newEvent]);
            setNewEvent('');
        }
    };

    return (
        <div className="container mx-auto p-5">
            <h1 className="text-3xl font-semibold mb-4 text-center">AGENDA</h1>

            <div className="mb-4">
                <input
                    type="text"
                    className="w-full p-2 border rounded"
                    placeholder="Adicionar um evento"
                    value={newEvent}
                    onChange={(e) => setNewEvent(e.target.value)}
                />
            </div>

            <button
                className="bg-blue-500 text-white px-4 py-2 rounded hover:underline"
                onClick={handleAddEvent}
            >
                Adicionar
            </button>

            <ul className="mt-4">
                {events.map((event, index) => (
                    <li
                        key={index}
                        className="bg-gray-100 p-2 rounded shadow mb-2 flex justify-between items-center"
                    >
                        <span>{event}</span>
                        <button
                            className="text-red-500 hover:underline"
                            onClick={() => {
                                const updatedEvents = [...events];
                                updatedEvents.splice(index, 1);
                                setEvents(updatedEvents);
                            }}
                        >
                            Excluir
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default Agenda;
