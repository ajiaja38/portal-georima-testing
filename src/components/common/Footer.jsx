import logo from '../../assets/logo/esdm.png';

const Footer = () => {
  return (
    <div className="fixed bottom-3 left-3 flex justify-center items-center gap-1 z-[99999]">
      <img src={logo} alt="Kementrian ESDM" className="w-10 h-10" />
      <div className="uppercase">
        <h1 className="font-extrabold text-[0.5rem] leading-[0.1rem]">
          Kementrian Energi dan Sumber Daya Mineral
        </h1>
        <h2 className="font-extrabold">Badan Geologi</h2>
        <h3 className="font-extrabold text-[0.65rem] leading-[0.5rem]">
          Pusat Sumber Daya Mineral, Batubara dan Panas Bumi
        </h3>
      </div>
    </div>
  );
};

export default Footer;
