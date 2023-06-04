import { Routes, Route } from 'react-router-dom';
import { lazy, Suspense } from 'react';


import Navbar from 'modules/Navbar/Navbar';

const MainPage = lazy(() => import('Page/MainPage/MainPage'));
const ShopPage = lazy(() => import('Page/ShopPage/ShopPage'));
const ShoppingCardPage = lazy(() =>
  import('Page/ShoppingCardPage/ShoppingCardPage')
);

const NotFoundPage = lazy(() => import('Page/NotFoundPage/NotFoundPage'));

export const App = () => {
  return (
    <>
      <Suspense fallback={<p>...Loading</p>}>
        <Navbar />
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/shop/:shop" element={<ShopPage />} />
          <Route path="/shop-card" element={<ShoppingCardPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Suspense>
    </>
  );
};

