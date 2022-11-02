import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import Loader from '../../components/Loader';
import Container from '../Container';
import Footer from './Footer';
import Header from './Header';
import styles from './Navigation.module.scss';

function Navigation() {
  return (
    <>
      <Header />
      {/* <Container> */}
      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
      {/* </Container> */}
      <Footer />
    </>
  );
}

export default Navigation;
