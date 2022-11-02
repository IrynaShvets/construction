import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import Loader from '../../../components/Loader';

function ProfiledTimberPage() {
  return (
    <>
      <h2>ProfiledTimberPage</h2>
      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
    </>
  );
}

export default ProfiledTimberPage;
