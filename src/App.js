import { lazy } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Container from './components/Container';
import Navigation from './components/Navigation';

const HomePage = lazy(() =>
  import('./pages/HomePage' /* webpackChunkName: "home-page" */),
);
const ResidentialPage = lazy(() =>
  import(
    './pages/residential/ResidentialPage' /* webpackChunkName: "residential-page" */
  ),
);
const CommercialPage = lazy(() =>
  import(
    './pages/commercial/CommercialPage' /* webpackChunkName: "commercial-page" */
  ),
);
const GardenPage = lazy(() =>
  import('./pages/garden/GardenPage' /* webpackChunkName: "garden-page" */),
);
const AboutCompanyPage = lazy(() =>
  import(
    './pages/AboutCompanyPage' /* webpackChunkName: "about-company-page" */
  ),
);
const OurWorkPage = lazy(() =>
  import('./pages/OurWorkPage' /* webpackChunkName: "our-work-page" */),
);
const ContactsPage = lazy(() =>
  import('./pages/ContactsPage' /* webpackChunkName: "contacts-page" */),
);
const ProfiledTimberPage = lazy(() =>
  import(
    './pages/residential/subcategories/ProfiledTimberPage' /* webpackChunkName: "profiled-timber-page" */
  ),
);
const CylindricalTimberPage = lazy(() =>
  import(
    './pages/residential/subcategories/CylindricalTimberPage' /* webpackChunkName: "cylindrical-timber-page" */
  ),
);
const FrameHousesPage = lazy(() =>
  import(
    './pages/residential/subcategories/FrameHousesPage' /* webpackChunkName: "frame-houses-page" */
  ),
);
const BlockHousesPage = lazy(() =>
  import(
    './pages/residential/subcategories/BlockHousesPage' /* webpackChunkName: "block-houses-page" */
  ),
);
const RecreationCentersPage = lazy(() =>
  import(
    './pages/commercial/subcategories/RecreationCentersPage' /* webpackChunkName: "recreation-centers-page" */
  ),
);
const HotelsPage = lazy(() =>
  import(
    './pages/commercial/subcategories/HotelsPage' /* webpackChunkName: "hotels-page" */
  ),
);
const RestaurantsPage = lazy(() =>
  import(
    './pages/commercial/subcategories/RestaurantsPage' /* webpackChunkName: "restaurants-page" */
  ),
);
const CafePage = lazy(() =>
  import(
    './pages/commercial/subcategories/CafePage' /* webpackChunkName: "cafe-page" */
  ),
);
const ShopsPage = lazy(() =>
  import(
    './pages/commercial/subcategories/ShopsPage' /* webpackChunkName: "shops-page" */
  ),
);
const GardenHousePage = lazy(() =>
  import(
    './pages/garden/subcategories/GardenHousePage' /* webpackChunkName: "garden-house-page" */
  ),
);
const GazeboPage = lazy(() =>
  import(
    './pages/garden/subcategories/GazeboPage' /* webpackChunkName: "gazebo-page" */
  ),
);
const ChildrenPlaygroundsPage = lazy(() =>
  import(
    './pages/garden/subcategories/ChildrenPlaygroundsPage' /* webpackChunkName: "children-playgrounds-page" */
  ),
);
const GaragesPage = lazy(() =>
  import(
    './pages/garden/subcategories/GaragesPage' /* webpackChunkName: "garages-page" */
  ),
);
const ChildrenHousesPage = lazy(() =>
  import(
    './pages/garden/subcategories/ChildrenHousesPage' /* webpackChunkName: "children-houses-page" */
  ),
);
const BarbecueAreasPage = lazy(() =>
  import(
    './pages/garden/subcategories/BarbecueAreasPage' /* webpackChunkName: "barbecue-areas-page" */
  ),
);
const KitchensPage = lazy(() =>
  import(
    './pages/garden/subcategories/KitchensPage' /* webpackChunkName: "kitchens-page" */
  ),
);
const WoodenBathsPage = lazy(() =>
  import(
    './pages/garden/subcategories/WoodenBathsPage' /* webpackChunkName: "wooden-baths-page" */
  ),
);

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Navigation />}>
          <Route index element={<HomePage />} />
          <Route path="/residential" element={<ResidentialPage />} />
          <Route
            path="/residential/profiled-timber"
            element={<ProfiledTimberPage />}
          />
          <Route
            path="/residential/cylindrical-timber"
            element={<CylindricalTimberPage />}
          />
          <Route
            path="/residential/frame-houses"
            element={<FrameHousesPage />}
          />
          <Route
            path="/residential/block-houses"
            element={<BlockHousesPage />}
          />
          <Route path="/commercial" element={<CommercialPage />} />
          <Route
            path="/commercial/recreation-centers"
            element={<RecreationCentersPage />}
          />
          <Route path="/commercial/hotels" element={<HotelsPage />} />
          <Route path="/commercial/restaurants" element={<RestaurantsPage />} />
          <Route path="/commercial/cafe" element={<CafePage />} />
          <Route path="/commercial/shops" element={<ShopsPage />} />
          <Route path="/garden" element={<GardenPage />} />
          <Route path="/garden/garden-house" element={<GardenHousePage />} />
          <Route path="/garden/gazebo" element={<GazeboPage />} />
          <Route
            path="/garden/children-playgrounds"
            element={<ChildrenPlaygroundsPage />}
          />
          <Route path="/garden/garages" element={<GaragesPage />} />
          <Route
            path="/garden/children-houses"
            element={<ChildrenHousesPage />}
          />
          <Route
            path="/garden/barbecue-areas"
            element={<BarbecueAreasPage />}
          />
          <Route path="/garden/kitchens" element={<KitchensPage />} />
          <Route path="/garden/wooden-baths" element={<WoodenBathsPage />} />
          <Route path="/about-company" element={<AboutCompanyPage />} />
          <Route path="/our-work" element={<OurWorkPage />} />
          <Route path="/contacts" element={<ContactsPage />} />
        </Route>
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </>
  );
}

export default App;
