import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import Loader from '../../../components/Loader';

function RestaurantsPage() {
  return (
    <>
      <h2>RestaurantsPage</h2>
      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
    </>
  );
}

export default RestaurantsPage;
