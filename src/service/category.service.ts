import request from './index';

export const getAllCategories = (params: any) =>
  request.get('/products/categories', { params });
export const getProductsBySlug = (slug: string, params: any) =>
  request.get(`/products/category/${slug}`, { params });
