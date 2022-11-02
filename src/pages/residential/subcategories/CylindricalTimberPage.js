import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import Loader from '../../../components/Loader';

function CylindricalTimberPage() {
  return (
    <>
      <h2>CylindricalTimberPage</h2>
      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
    </>
  );
}

export default CylindricalTimberPage;
