'use client';

import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet';

const createIcon = (color) =>
  L.divIcon({
    className: 'map-pin-wrapper',
    html: `<div style="width:18px;height:18px;border-radius:50%;background:${color};border:3px solid white;box-shadow:0 6px 14px rgba(0,0,0,.18)"></div>`,
    iconSize: [18, 18],
    iconAnchor: [9, 9]
  });

export default function MontenegroMap({ points }) {
  return (
    <MapContainer center={[42.286, 18.833]} zoom={10} scrollWheelZoom className="leafletMap">
      <TileLayer
        attribution='&copy; OpenStreetMap contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {points.map((point) => (
        <Marker key={point.name} position={point.coords} icon={createIcon(point.color)}>
          <Popup>
            <strong>{point.name}</strong>
            <br />
            {point.description}
          </Popup>
        </Marker>
      ))}
    </MapContainer>
  );
}
