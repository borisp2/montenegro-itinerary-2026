'use client';

import dynamic from 'next/dynamic';

const InteractiveMap = dynamic(() => import('./MontenegroMap'), { ssr: false });

export default function MapSection({ points }) {
  return (
    <div className="mapWrapper">
      <div className="mapCard">
        <InteractiveMap points={points} />
      </div>
      <div className="mapInfoCard">
        <h3>Kľúčové body</h3>
        <ul>
          {points.map((point) => (
            <li key={point.name}>
              <strong>{point.name}</strong>
              <span>{point.description}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
