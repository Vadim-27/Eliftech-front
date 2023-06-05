import { createAsyncThunk } from '@reduxjs/toolkit';
import * as api from 'shared/services/shop';

export const fetchProducts = createAsyncThunk(
  'shop/products',
  async (data, { rejectWithValue }) => {
    try {
      const result = await api.getProducts(data);
    
      return result;
    } catch ({  response }) {
      return rejectWithValue(response);
    }
  }
);

export const addToOrder = createAsyncThunk(
  'add/order',
  async (product, { rejectWithValue }) => {
    
    try {
      const result = await product;
      return result;
    } catch ({response }) {
        return rejectWithValue(response);   
    }
}
);
    



