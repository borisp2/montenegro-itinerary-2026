'use client';

import { useMemo, useState } from 'react';

export default function ItineraryTabs({ days }) {
  const [selectedId, setSelectedId] = useState(days[0]?.id ?? 'day-1');

  const selectedDay = useMemo(
    () => days.find((day) => day.id === selectedId) ?? days[0],
    [days, selectedId]
  );

  return (
    <div className="itineraryLayout">
      <div className="dayList" role="tablist" aria-label="Itinerár dní">
        {days.map((day) => (
          <button
            key={day.id}
            className={`dayButton ${selectedDay.id === day.id ? 'active' : ''}`}
            onClick={() => setSelectedId(day.id)}
            role="tab"
            aria-selected={selectedDay.id === day.id}
          >
            <span>{day.label}</span>
            <strong>{day.title}</strong>
            <small>{day.type}</small>
          </button>
        ))}
      </div>

      <article className="dayDetail" aria-live="polite">
        <div className="dayMetaRow">
          <span className="variantBadge">{selectedDay.type}</span>
          <span className="costBadge">{selectedDay.estimatedCost}</span>
        </div>
        <h3>{selectedDay.title}</h3>
        <p>{selectedDay.description}</p>
        <div className="detailGrid">
          <div>
            <h4>Program</h4>
            <ul>
              {selectedDay.agenda.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
          <div>
            <h4>Poznámky</h4>
            <ul>
              {selectedDay.notes.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
      </article>
    </div>
  );
}
