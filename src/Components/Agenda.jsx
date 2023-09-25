import React, { useState } from 'react';

function Agenda() {
  const [events, setEvents] = useState([]);
  const [newEvent, setNewEvent] = useState('');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [description, setDescription] = useState('');

  const handleAddEvent = () => {
    if (newEvent.trim() !== '' && startDate && endDate) {
      const event = {
        id: new Date().getTime(),
        title: newEvent,
        startDate,
        endDate,
        description,
      };
      setEvents([...events, event]);
      setNewEvent('');
      setStartDate('');
      setEndDate('');
      setDescription('');
    }
  };

  const handleDeleteEvent = (id) => {
    setEvents(events.filter((event) => event.id !== id));
  };

  return (
    <div className="bg-gray-100 min-h-screen flex items-center justify-center">
      <div className="bg-white rounded-lg shadow-lg p-4 w-96">
        <h1 className="text-3xl font-bold mb-4 text-center">AGENDA</h1>
        <div className="mb-4">
          
          <input
            type="text"
            className="w-full p-2 border rounded mb-2"
            placeholder="Nome do evento"
            value={newEvent}
            onChange={(e) => setNewEvent(e.target.value)}
          />
          
          <input
            type="date"
            className="w-full p-2 border rounded mb-2"
            value={startDate}
            onChange={(e) => setStartDate(e.target.value)}
          />
          
          <input
            type="date"
            className="w-full p-2 border rounded mb-2"
            value={endDate}
            onChange={(e) => setEndDate(e.target.value)}
          />
          <textarea
            className="w-full p-2 border rounded mb-4"
            placeholder="Descrição do evento"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>
        <button
          className="bg-blue-500 text-white px-4 py-2 rounded hover:underline"
          onClick={handleAddEvent}
        >
          Adicionar
        </button>
        
        <ul className="mt-4">
          {events.map((event) => (
            <li
              key={event.id}
              className="mb-4 p-4 border rounded bg-gray-200 relative"
            >
              <div className="font-bold">{event.title}</div>
              <div>Data de Início: {event.startDate}</div>
              <div>Data de Fim: {event.endDate}</div>
              <div className="mt-2">Descrição: {event.description}</div>
              <button
                className="absolute top-2 right-2 text-red-500 hover:underline"
                onClick={() => handleDeleteEvent(event.id)}
              >
                Excluir
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Agenda;