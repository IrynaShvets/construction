import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import Loader from '../../../components/Loader';

function GazeboPage() {
  return (
    <>
      <h2>GazeboPage</h2>
      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
    </>
  );
}

export default GazeboPage;
