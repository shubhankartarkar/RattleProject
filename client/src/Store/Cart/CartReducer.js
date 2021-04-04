import { ADD_TO_CART, REMOVE_FROM_CART, UPDATE_QUANTITY, EMPTY_CART } from './CartType';

const initialState = []

function CartReducer(state = initialState, action) {

  switch (action.type) {
    case ADD_TO_CART:
      //Payload is entire Product
      return [...state, action.payload]
      
  case REMOVE_FROM_CART:
      //Payload is Productid
      let copyState = state.filter((item) => item.productId !== action.payload)
      return [...copyState]

    case UPDATE_QUANTITY:
      //Payload is Productid and qty
      let allProducts = state
      let { productId, qty } = action.payload
    
      allProducts.forEach((product) => {
        if(product.productId == productId){
          product.quantity = qty
        }
      })
      return [...allProducts]

      case EMPTY_CART:
          return initialState
    
      default:
        return state
  }
}

export default CartReducer