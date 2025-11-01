import { create } from "zustand";

const API_URL = import.meta.env.VITE_API_URL;

export const useProductStore = create((set) => ({
  products: [],
  setProducts: (products) => set({ products }),
  createProduct: async (newProduct) => {
    if (!newProduct.name || !newProduct.price || !newProduct.image) {
      return { success: false, message: "Please fill all fields" };
    }
    const res = await fetch(`${API_URL}/api/products`, {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(newProduct),
    });
    const data = await res.json();
    set((state) => ({ products: [...state.products, data.data] }));
    return { success: true, message: "Product created successfully" };
  },
  fetchProducts: async () => {
    const res = await fetch(`${API_URL}/api/products`);
    const data = await res.json();
    set({ products: data.data });
  },
  deleteProduct: async (pid) => {
    const res = await fetch(`${API_URL}/api/products/${pid}`, {
      method: "DELETE",
    });
    const data = await res.json();
    set((state) => ({ products: state.products.filter((p) => p._id !== pid) }));
    return { success: true, message: "Product deleted successfully" };
  },
  updateProduct: async (pid, updatedProduct) => {
    const res = await fetch(`${API_URL}/api/products/${pid}`, {
      method: "PUT",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(updatedProduct),
    });
    const data = await res.json();
    set((state) => ({
      products: state.products.map((p) => (p._id === pid ? data.data : p)),
    }));
    return { success: true, message: "Product updated successfully" };
  },
}));
