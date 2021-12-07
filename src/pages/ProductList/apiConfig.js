const BASE_URL = 'http://10.58.2.53:8000';

export const API_ADDRESS = {
  product_main: `${BASE_URL}/products?menu=dessert&?offset=1&limit=5`,
  product_all: `${BASE_URL}/products`,
  products: `${BASE_URL}/products/`,
  products_menu: `${BASE_URL}/products?menu=`,
  products_category: `${BASE_URL}/products?category=`,
};
