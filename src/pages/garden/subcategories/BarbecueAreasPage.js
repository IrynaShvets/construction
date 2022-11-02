import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import Loader from '../../../components/Loader';

function BarbecueAreasPage() {
  return (
    <>
      <h2>BarbecueAreasPage</h2>
      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
    </>
  );
}

export default BarbecueAreasPage;
