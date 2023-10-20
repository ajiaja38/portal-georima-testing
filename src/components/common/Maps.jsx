/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useRef } from 'react';
import { MapContainer, ScaleControl, TileLayer } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import { useDispatch, useSelector } from 'react-redux';
import { setZoomButtonClick } from '../../redux/reducer/zoom.reducer';
import MarkerMaps from './Marker/MarkerMaps';
import { MinimapControl } from './MiniMapControl';

const Maps = () => {
  const mapRef = useRef();
  const dispatch = useDispatch();

  const maxBounds = [
    [-12.0, 94.0],
    [12.0, 143.0],
  ];

  // Batu Bara
  const {
    batuBaraRendah,
    batuBaraSedang,
    batuBaraTinggi,
    batuBaraSangatTinggi,
  } = useSelector((state) => state.batuBara);

  // Panas Bumi
  const { pendahuluanAwal, pendahuluan, rinci, siapDikembangkan, terpasang } =
    useSelector((state) => state.panasBumi);

  // Logam Dasar
  const { airRaksa, antimon, seng, tembaga, timah, timbal } = useSelector(
    (state) => state.logamDasar,
  );

  // Logam Mulia
  const { emasAlluvial, emasPrimer, perak, platina } = useSelector(
    (state) => state.logamMulia,
  );

  // Logam Ringan dan Langka
  const { bauksit, monasit, titanPlaser, titanLaterit, xenotim } = useSelector(
    (state) => state.logamRingan,
  );

  // Logam Besi Paduan Besi
  const {
    besiLaterit,
    besiPrimer,
    besiSedimen,
    kobal,
    kromit,
    kromitPlaser,
    mangan,
    molibdenum,
    nikel,
    pasirBesi,
    vanadium,
  } = useSelector((state) => state.logamBesi);

  // Batu Mulia
  const { ametis, batuHias, intan, jasper, kaldeson, oniks, opal, rijang } =
    useSelector((state) => state.batuMulia);

  // Bahan Bangunan
  const {
    andesit,
    basal,
    batuSabak,
    dasit,
    diorit,
    dolomit,
    granit,
    granodiorit,
    marmer,
    pasirLaut,
    peridotit,
    sirtu,
    tras,
  } = useSelector((state) => state.bahanBangunan);

  // Bahan Keramik
  const {
    ballBonClay,
    felspar,
    kaolin,
    lempung,
    magnesit,
    obsidian,
    perlit,
    pirofilit,
    toseki,
    trakhit,
  } = useSelector((state) => state.bahanKeramik);

  // Mineral Industri
  const {
    barit,
    batuanPembawaKalium,
    batuApung,
    batuGamping,
    batuKuarsa,
    belerang,
    bentonit,
    diatomea,
    fosfat,
    gipsum,
    kalsit,
    kuarsit,
    oker,
    pasirKuarsa,
    pasirZirkon,
    prehnit,
    serpentin,
    talk,
    travertin,
    ultrabasa,
    yodium,
    zeolit,
  } = useSelector((state) => state.mineralIndustri);

  const { isButtonClick } = useSelector((state) => state.zoomButton);

  if (isButtonClick) {
    const targetCenter = [-0.075268, 120.15027];
    const targetZoom = 5;
    const options = {
      animate: true,
      duration: 1,
    };

    mapRef.current.panTo(targetCenter, options);
    mapRef.current.setZoom(targetZoom, options);
  }

  useEffect(() => {
    const map = mapRef.current;

    const handleZoomEnd = () => {
      const currentZoomLevel = map.getZoom();

      if (isButtonClick && currentZoomLevel !== 5) {
        dispatch(setZoomButtonClick(false));
      }
    };

    if (map) {
      map.on('zoomend', handleZoomEnd);
    }

    return () => {
      if (map) {
        map.off('zoomend', handleZoomEnd);
      }
    };
  }, [isButtonClick, dispatch]);

  return (
    <main className="w-full h-screen">
      <MapContainer
        className="w-full h-full"
        center={[-0.075268, 120.15027]}
        zoom={5}
        minZoom={5}
        zoomControl={false}
        scrollWheelZoom={true}
        maxBounds={maxBounds}
        ref={mapRef}
      >
        <TileLayer
          attribution=""
          url="https://vectormap.pptik.id/styles/klokantech-basic/{z}/{x}/{y}.png"
        />

        {/* Batu Bara */}
        {!!batuBaraRendah.length &&
          batuBaraRendah.map((data, index) => (
            <MarkerMaps key={index} data={data} iconName="rendah.png" />
          ))}

        {!!batuBaraSedang.length &&
          batuBaraSedang.map((data, index) => (
            <MarkerMaps key={index} data={data} iconName="sedang.png" />
          ))}

        {!!batuBaraTinggi.length &&
          batuBaraTinggi.map((data, index) => (
            <MarkerMaps key={index} data={data} iconName="tinggi.png" />
          ))}

        {!!batuBaraSangatTinggi.length &&
          batuBaraSangatTinggi.map((data, index) => (
            <MarkerMaps key={index} data={data} iconName="sangat-tinggi.png" />
          ))}

        {/* Mineral Logam */}
        {/* Logam Dasar */}
        {!!airRaksa.length &&
          airRaksa.map((data, index) => (
            <MarkerMaps key={index} data={data} iconName="air-raksa.png" />
          ))}

        {!!antimon.length &&
          antimon.map((data, index) => (
            <MarkerMaps key={index} data={data} iconName="antimon.png" />
          ))}

        {!!seng.length &&
          seng.map((data, index) => (
            <MarkerMaps key={index} data={data} iconName="seng.png" />
          ))}

        {!!tembaga.length &&
          tembaga.map((data, index) => (
            <MarkerMaps key={index} data={data} iconName="tembaga.png" />
          ))}

        {!!timah.length &&
          timah.map((data, index) => (
            <MarkerMaps key={index} data={data} iconName="timah.png" />
          ))}

        {!!timbal.length &&
          timbal.map((data, index) => (
            <MarkerMaps key={index} data={data} iconName="timbal.png" />
          ))}

        {/* Logam Mulia */}
        {!!emasAlluvial.length &&
          emasAlluvial.map((data, index) => (
            <MarkerMaps key={index} data={data} iconName="emas-alluvial.png" />
          ))}

        {!!emasPrimer.length &&
          emasPrimer.map((data, index) => (
            <MarkerMaps key={index} data={data} iconName="emas-primer.png" />
          ))}

        {!!perak.length &&
          perak.map((data, index) => (
            <MarkerMaps key={index} data={data} iconName="perak.png" />
          ))}

        {!!platina.length &&
          platina.map((data, index) => (
            <MarkerMaps key={index} data={data} iconName="platina.png" />
          ))}

        {/* Logam Besi Paduan besi */}
        {!!besiLaterit.length &&
          besiLaterit.map((data, index) => (
            <MarkerMaps key={index} data={data} iconName="besi-laterit.png" />
          ))}

        {!!besiPrimer.length &&
          besiPrimer.map((data, index) => (
            <MarkerMaps key={index} data={data} iconName="besi-primer.png" />
          ))}

        {!!besiSedimen.length &&
          besiSedimen.map((data, index) => (
            <MarkerMaps key={index} data={data} iconName="besi-sedimen.png" />
          ))}

        {!!kobal.length &&
          kobal.map((data, index) => (
            <MarkerMaps key={index} data={data} iconName="kobal.png" />
          ))}

        {!!kromit.length &&
          kromit.map((data, index) => (
            <MarkerMaps key={index} data={data} iconName="kromit.png" />
          ))}

        {!!kromitPlaser.length &&
          kromitPlaser.map((data, index) => (
            <MarkerMaps key={index} data={data} iconName="kromit-plaser.png" />
          ))}

        {!!mangan.length &&
          mangan.map((data, index) => (
            <MarkerMaps key={index} data={data} iconName="mangan.png" />
          ))}

        {!!molibdenum.length &&
          molibdenum.map((data, index) => (
            <MarkerMaps key={index} data={data} iconName="molibdenum.png" />
          ))}

        {!!nikel.length &&
          nikel.map((data, index) => (
            <MarkerMaps key={index} data={data} iconName="nikel.png" />
          ))}

        {!!pasirBesi.length &&
          pasirBesi.map((data, index) => (
            <MarkerMaps key={index} data={data} iconName="pasir-besi.png" />
          ))}

        {!!vanadium.length &&
          vanadium.map((data, index) => (
            <MarkerMaps key={index} data={data} iconName="vanadium.png" />
          ))}

        {/* Logam Ringan dan Langka */}
        {!!bauksit.length &&
          bauksit.map((data, index) => (
            <MarkerMaps key={index} data={data} iconName="bauksit.png" />
          ))}

        {!!monasit.length &&
          monasit.map((data, index) => (
            <MarkerMaps key={index} data={data} iconName="monasit.png" />
          ))}

        {!!titanLaterit.length &&
          titanLaterit.map((data, index) => (
            <MarkerMaps key={index} data={data} iconName="titan-laterit.png" />
          ))}

        {!!titanPlaser.length &&
          titanPlaser.map((data, index) => (
            <MarkerMaps key={index} data={data} iconName="titan-plaser.png" />
          ))}

        {!!xenotim.length &&
          xenotim.map((data, index) => (
            <MarkerMaps key={index} data={data} iconName="xenotim.png" />
          ))}

        {/* Mineral Bukan Logam */}
        {/* Batu Mulia */}
        {!!ametis.length &&
          ametis.map((data, index) => (
            <MarkerMaps key={index} data={data} iconName="ametis.png" />
          ))}

        {!!batuHias.length &&
          batuHias.map((data, index) => (
            <MarkerMaps key={index} data={data} iconName="batu-hias.png" />
          ))}

        {!!intan.length &&
          intan.map((data, index) => (
            <MarkerMaps key={index} data={data} iconName="intan.png" />
          ))}

        {!!jasper.length &&
          jasper.map((data, index) => (
            <MarkerMaps key={index} data={data} iconName="jasper.png" />
          ))}

        {!!kaldeson.length &&
          kaldeson.map((data, index) => (
            <MarkerMaps key={index} data={data} iconName="kalsedon.png" />
          ))}

        {!!oniks.length &&
          oniks.map((data, index) => (
            <MarkerMaps key={index} data={data} iconName="oniks.png" />
          ))}

        {!!opal.length &&
          opal.map((data, index) => (
            <MarkerMaps key={index} data={data} iconName="opal.png" />
          ))}

        {!!rijang.length &&
          rijang.map((data, index) => (
            <MarkerMaps key={index} data={data} iconName="rijang.png" />
          ))}

        {/* Bahan Bangunan */}
        {!!andesit.length &&
          andesit.map((data, index) => (
            <MarkerMaps key={index} data={data} iconName="andesit.png" />
          ))}

        {!!basal.length &&
          basal.map((data, index) => (
            <MarkerMaps key={index} data={data} iconName="basal.png" />
          ))}

        {!!batuSabak.length &&
          batuSabak.map((data, index) => (
            <MarkerMaps key={index} data={data} iconName="batusabak.png" />
          ))}

        {!!dasit.length &&
          dasit.map((data, index) => (
            <MarkerMaps key={index} data={data} iconName="dasit.png" />
          ))}

        {!!diorit.length &&
          diorit.map((data, index) => (
            <MarkerMaps key={index} data={data} iconName="diorit.png" />
          ))}

        {!!dolomit.length &&
          dolomit.map((data, index) => (
            <MarkerMaps key={index} data={data} iconName="dolomit.png" />
          ))}

        {!!granit.length &&
          granit.map((data, index) => (
            <MarkerMaps key={index} data={data} iconName="granit.png" />
          ))}

        {!!granodiorit.length &&
          granodiorit.map((data, index) => (
            <MarkerMaps key={index} data={data} iconName="granodiorit.png" />
          ))}

        {!!marmer.length &&
          marmer.map((data, index) => (
            <MarkerMaps key={index} data={data} iconName="marmer.png" />
          ))}

        {!!pasirLaut.length &&
          pasirLaut.map((data, index) => (
            <MarkerMaps key={index} data={data} iconName="pasir-laut.png" />
          ))}

        {!!peridotit.length &&
          peridotit.map((data, index) => (
            <MarkerMaps key={index} data={data} iconName="peridotit.png" />
          ))}

        {!!sirtu.length &&
          sirtu.map((data, index) => (
            <MarkerMaps key={index} data={data} iconName="sirtu.png" />
          ))}

        {!!tras.length &&
          tras.map((data, index) => (
            <MarkerMaps key={index} data={data} iconName="tras.png" />
          ))}

        {/* Bahan Keramik */}
        {!!ballBonClay.length &&
          ballBonClay.map((data, index) => (
            <MarkerMaps key={index} data={data} iconName="ball.png" />
          ))}

        {!!felspar.length &&
          felspar.map((data, index) => (
            <MarkerMaps key={index} data={data} iconName="felspar.png" />
          ))}

        {!!kaolin.length &&
          kaolin.map((data, index) => (
            <MarkerMaps key={index} data={data} iconName="kaolin.png" />
          ))}

        {!!lempung.length &&
          lempung.map((data, index) => (
            <MarkerMaps key={index} data={data} iconName="lempung.png" />
          ))}

        {!!magnesit.length &&
          magnesit.map((data, index) => (
            <MarkerMaps key={index} data={data} iconName="magnesit.png" />
          ))}

        {!!obsidian.length &&
          obsidian.map((data, index) => (
            <MarkerMaps key={index} data={data} iconName="obsidian.png" />
          ))}

        {!!perlit.length &&
          perlit.map((data, index) => (
            <MarkerMaps key={index} data={data} iconName="perlit.png" />
          ))}

        {!!pirofilit.length &&
          pirofilit.map((data, index) => (
            <MarkerMaps key={index} data={data} iconName="pirofilit.png" />
          ))}

        {!!toseki.length &&
          toseki.map((data, index) => (
            <MarkerMaps key={index} data={data} iconName="toseki.png" />
          ))}

        {!!trakhit.length &&
          trakhit.map((data, index) => (
            <MarkerMaps key={index} data={data} iconName="trakhit.png" />
          ))}

        {/* Mineral Industri */}
        {!!barit.length &&
          barit.map((data, index) => (
            <MarkerMaps key={index} data={data} iconName="barit.png" />
          ))}

        {!!batuanPembawaKalium.length &&
          batuanPembawaKalium.map((data, index) => (
            <MarkerMaps
              key={index}
              data={data}
              iconName="batuan-pembawa-kalium.png"
            />
          ))}

        {!!batuApung.length &&
          batuApung.map((data, index) => (
            <MarkerMaps key={index} data={data} iconName="batuapung.png" />
          ))}

        {!!batuGamping.length &&
          batuGamping.map((data, index) => (
            <MarkerMaps key={index} data={data} iconName="batugamping.png" />
          ))}

        {!!batuKuarsa.length &&
          batuKuarsa.map((data, index) => (
            <MarkerMaps key={index} data={data} iconName="batu-kuarsa.png" />
          ))}

        {!!belerang.length &&
          belerang.map((data, index) => (
            <MarkerMaps key={index} data={data} iconName="belerang.png" />
          ))}

        {!!bentonit.length &&
          bentonit.map((data, index) => (
            <MarkerMaps key={index} data={data} iconName="bentonit.png" />
          ))}

        {!!diatomea.length &&
          diatomea.map((data, index) => (
            <MarkerMaps key={index} data={data} iconName="diatomea.png" />
          ))}

        {!!fosfat.length &&
          fosfat.map((data, index) => (
            <MarkerMaps key={index} data={data} iconName="fosfat.png" />
          ))}

        {!!gipsum.length &&
          gipsum.map((data, index) => (
            <MarkerMaps key={index} data={data} iconName="gipsum.png" />
          ))}

        {!!kalsit.length &&
          kalsit.map((data, index) => (
            <MarkerMaps key={index} data={data} iconName="kalsit.png" />
          ))}

        {!!kuarsit.length &&
          kuarsit.map((data, index) => (
            <MarkerMaps key={index} data={data} iconName="kuarsit.png" />
          ))}

        {!!oker.length &&
          oker.map((data, index) => (
            <MarkerMaps key={index} data={data} iconName="oker.png" />
          ))}

        {!!pasirKuarsa.length &&
          pasirKuarsa.map((data, index) => (
            <MarkerMaps key={index} data={data} iconName="pasir-kuarsa.png" />
          ))}

        {!!pasirZirkon.length &&
          pasirZirkon.map((data, index) => (
            <MarkerMaps key={index} data={data} iconName="pasir-zirkon.png" />
          ))}

        {!!prehnit.length &&
          prehnit.map((data, index) => (
            <MarkerMaps key={index} data={data} iconName="prehnit.png" />
          ))}

        {!!serpentin.length &&
          serpentin.map((data, index) => (
            <MarkerMaps key={index} data={data} iconName="serpentin.png" />
          ))}

        {!!talk.length &&
          talk.map((data, index) => (
            <MarkerMaps key={index} data={data} iconName="talk.png" />
          ))}

        {!!travertin.length &&
          travertin.map((data, index) => (
            <MarkerMaps key={index} data={data} iconName="travertin.png" />
          ))}

        {!!ultrabasa.length &&
          ultrabasa.map((data, index) => (
            <MarkerMaps key={index} data={data} iconName="ultrabasa.png" />
          ))}

        {!!yodium.length &&
          yodium.map((data, index) => (
            <MarkerMaps key={index} data={data} iconName="yodium.png" />
          ))}

        {!!zeolit.length &&
          zeolit.map((data, index) => (
            <MarkerMaps key={index} data={data} iconName="zeolit.png" />
          ))}

        {/* Panas Bumi */}
        {!!pendahuluanAwal.length &&
          pendahuluanAwal.map((data, index) => (
            <MarkerMaps key={index} data={data} iconName="icon1.png" />
          ))}

        {!!pendahuluan.length &&
          pendahuluan.map((data, index) => (
            <MarkerMaps key={index} data={data} iconName="icon2.png" />
          ))}

        {!!rinci.length &&
          rinci.map((data, index) => (
            <MarkerMaps key={index} data={data} iconName="icon3.png" />
          ))}

        {!!siapDikembangkan.length &&
          siapDikembangkan.map((data, index) => (
            <MarkerMaps key={index} data={data} iconName="icon4.png" />
          ))}

        {!!terpasang.length &&
          terpasang.map((data, index) => (
            <MarkerMaps key={index} data={data} iconName="icon5.png" />
          ))}

        <ScaleControl position="bottomright" />
        <MinimapControl />
      </MapContainer>
    </main>
  );
};

export default Maps;
