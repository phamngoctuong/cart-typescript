import * as types from "./../constants/ActionTypes";
export const addToCart = (product: any) => {
  return {
    type: types.ADD_TO_CART,
    product
  }
}
export const deleteCart = (id: string) => {
  return {
    type: types.DELETE_CART,
    id
  }
};
export const updateCart = (id: string, q: number) => {
  return {
    type: types.UPDATE_CART,
    id,
    q
  }
};