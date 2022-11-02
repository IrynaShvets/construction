import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import Loader from '../../../components/Loader';

function ChildrenPlaygroundsPage() {
  return (
    <>
      <h2>ChildrenPlaygroundsPage</h2>
      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
    </>
  );
}

export default ChildrenPlaygroundsPage;
