import request from './index';

export const getAllProducts = (params: any) =>
  request.get('/products', { params });
