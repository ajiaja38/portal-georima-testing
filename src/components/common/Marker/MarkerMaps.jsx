import { Marker, Popup } from 'react-leaflet';
import { Icon } from 'leaflet';

const MarkerMaps = ({ data, iconName }) => {
  return (
    <Marker
      position={[data.lintang, data.bujur]}
      icon={
        new Icon({
          iconUrl: `https://georima.pptik.id/data/data-georima/icon/${iconName}`,
          iconSize: [10, 10],
          iconAnchor: [10, 10],
        })
      }
      eventHandlers={{
        mouseover: (e) => {
          e.target.openPopup();
        },
      }}
    >
      <Popup>{data.id}</Popup>
    </Marker>
  );
};

export default MarkerMaps;
