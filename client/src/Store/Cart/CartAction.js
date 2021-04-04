import { ADD_TO_CART, REMOVE_FROM_CART, UPDATE_QUANTITY, EMPTY_CART } from './CartType';

function addToCart(product){
  return {
    type: ADD_TO_CART,
    payload: product
  }
}

function removeFromCart(productid){
  return {
    type: REMOVE_FROM_CART,
    payload: productid
  }
}

function updateQuantity(productId, qty){
  return {
    type: UPDATE_QUANTITY,
    payload: { productId, qty}
  }
}

function emptyCart(){
  return {
    type: EMPTY_CART
  }
}

export { addToCart, removeFromCart, updateQuantity, emptyCart }