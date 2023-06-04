import { Routes, Route, BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { store, persistor } from 'redux/store';


import Navbar from 'modules/Navbar/Navbar';
// import MainPage from 'Page/MainPage/MainPage';
import ShopPage from 'Page/ShopPage/ShopPage';
import ShoppingCardPage from 'Page/ShoppingCardPage/ShoppingCardPage';
import NotFoundPage from 'Page/NotFoundPage/NotFoundPage';

export const App = () => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <BrowserRouter>
          <Navbar />
          <Routes>
            {/* <Route path="/" element={<MainPage />} /> */}
            <Route path="/shop/:shop" element={<ShopPage />} />
            <Route path="/shop-card" element={<ShoppingCardPage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </BrowserRouter>
      </PersistGate>
    </Provider>
  );
};
