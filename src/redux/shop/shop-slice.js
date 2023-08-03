import { createSlice } from '@reduxjs/toolkit';
import { fetchProducts, addToOrder, dellItemOrder, dellAllOrder } from './shop-operation';
// import { addToOrder } from './action';

const initialState = {
  products: [],
  orders: [],
  loading: false,
  error: null,
};

const shopSlice = createSlice({
  name: 'shops',
  initialState,
  extraReducers: builder => {
    builder
      .addCase(fetchProducts.pending, store => {
        store.loading = true;
        store.error = null;
      })
      .addCase(fetchProducts.fulfilled, (store, { payload }) => {
        store.loading = false;
        store.products = payload;
      })
      .addCase(fetchProducts.rejected, (store, { payload }) => {
        store.loading = false;
        store.error = payload;
      })
      .addCase(addToOrder.fulfilled, (state, { payload }) => {
        const newProduct = payload;

        const existingProduct = state.orders.find(
          product => product.id === newProduct.id
        );

        if (!existingProduct) {
          state.orders.push(newProduct);
        }
      })
      .addCase(dellItemOrder.fulfilled, (state, { payload }) => {
        const index = state.orders.findIndex(item => item.id === payload);
        state.orders.splice(index, 1);
      })
      .addCase(dellAllOrder.fulfilled, (state, { payload }) => {
        state.orders = [];
      });
  },
});
export default shopSlice.reducer;
