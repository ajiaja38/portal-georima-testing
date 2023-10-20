import { useMemo } from 'react';
import { useMap, MapContainer, TileLayer } from 'react-leaflet';
import MinimapBounds from './MiniMapsBound';
import logo from '../../assets/logo/minimap.png';

export const MinimapControl = () => {
  const parentMap = useMap();
  const mapZoom = 0.6;

  const minimap = useMemo(
    () => (
      <MapContainer
        style={{ height: 88, width: 140 }}
        center={parentMap.getCenter()}
        zoom={mapZoom}
        dragging={false}
        doubleClickZoom={false}
        scrollWheelZoom={false}
        attributionControl={false}
        zoomControl={false}
      >
        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
        <MinimapBounds parentMap={parentMap} zoom={mapZoom} />
      </MapContainer>
    ),
    [mapZoom, parentMap],
  );

  return (
    <div className="fixed bottom-6 right-2 z-[999999]">
      <div className="relative border-2 border-white h-[6rem]">
        <button className="absolute bottom-0 right-0 p-1 px-2 rounded-tl bg-white z-[999999] cursor-pointer">
          <img src={logo} className="h-3" />
        </button>
        <div className="leaflet-control leaflet-bar">{minimap}</div>
      </div>
    </div>
  );
};
