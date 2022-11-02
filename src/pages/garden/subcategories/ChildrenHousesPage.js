import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import Loader from '../../../components/Loader';

function ChildrenHousesPage() {
  return (
    <>
      <h2>ChildrenHousesPage</h2>
      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
    </>
  );
}

export default ChildrenHousesPage;
