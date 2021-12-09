const BASE_URL = 'http://10.58.3.234:8000';

export const API_ADDRESS = {
  product_main: `${BASE_URL}/products?menu=dessert&?offset=1&limit=5`,
  product_all: `${BASE_URL}/products`,
  products: `${BASE_URL}/products/`,
  products_menu: `${BASE_URL}/products?menu=`,
  products_category: `${BASE_URL}/products?category=`,
  order_cart: `${BASE_URL}/orders/cart`,
  sign_in: `${BASE_URL}/users/signin`,
  sign_up: `${BASE_URL}/users/signup`,
  id_check: `${BASE_URL}/users/idcheck`,
  order_checkout: `${BASE_URL}/orders/checkout`,
  products_like: `${BASE_URL}/products/like`,
};
