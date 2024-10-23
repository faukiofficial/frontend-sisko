import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

// Define Product Type
interface Product {
  id: number;
  name: string;
  price: number;
  photo: string;
  currency: string;
}

// Define State Type
interface ProductState {
  products: Product[];
  productSearch: Product[];
  loading: boolean;
  error: string | null;
}

interface SearchParams {
  searchQuery: string;
}

// Initial state
const initialState: ProductState = {
  products: [],
  productSearch: [],
  loading: false,
  error: null,
};

// Async thunk untuk mengambil produk dari API
export const fetchProducts = createAsyncThunk<Product[]>(
  'products/fetchProducts',
  async () => {
    const response = await axios.get('https://sistemtoko.com/public/demo/product');
    return response.data.aaData;
  }
);

// Async thunk untuk mengambil produk dari API
export const seacrhProducts = createAsyncThunk<Product[], SearchParams>(
  'products/seacrhProducts',
  async ({searchQuery}) => {
    const response = await axios.get('https://sistemtoko.com/public/demo/product', {
      params: {
        search_name: searchQuery
      }
    });
    return response.data.aaData;
  }
);

// Product slice
const productSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.loading = false;
        state.products = action.payload;
      })
      .addCase(fetchProducts.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || 'Failed to fetch products';
      })
      .addCase(seacrhProducts.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(seacrhProducts.fulfilled, (state, action) => {
        state.loading = false;
        state.productSearch = action.payload;
      })
      .addCase(seacrhProducts.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || 'Failed to fetch products';
      })
  },
});

export default productSlice.reducer;
