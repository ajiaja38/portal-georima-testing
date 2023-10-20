import { useCallback, useState, useMemo } from 'react';
import { useMap, useMapEvent, Rectangle } from 'react-leaflet';
import { useEventHandlers } from '@react-leaflet/core';

const BOUNDS_STYLE = { weight: 1 };

const MinimapBounds = ({ parentMap, zoom }) => {
  const minimap = useMap();

  const onClick = useCallback(
    (e) => {
      parentMap.setView(e.latlng, parentMap.getZoom());
    },
    [parentMap],
  );
  useMapEvent('click', onClick);

  const [bounds, setBounds] = useState(parentMap.getBounds());
  const onChange = useCallback(() => {
    setBounds(parentMap.getBounds());
    minimap.setView(parentMap.getCenter(), zoom);
  }, [minimap, parentMap, zoom]);

  const handlers = useMemo(
    () => ({ move: onChange, zoom: onChange }),
    [onChange],
  );
  useEventHandlers({ instance: parentMap }, handlers);

  return <Rectangle bounds={bounds} pathOptions={BOUNDS_STYLE} />;
};

export default MinimapBounds;
