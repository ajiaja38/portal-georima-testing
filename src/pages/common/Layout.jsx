import Footer from '../../components/common/Footer';
import Navbar from '../../components/common/Navbar';

const Layout = ({ children }) => {
  return (
    <>
      <Navbar />
      <div>{children}</div>
      <Footer />
    </>
  );
};

export default Layout;
