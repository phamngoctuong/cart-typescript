import * as types from './../constants/ActionTypes';
import { getItem } from '../helps/localstorage';
const initialState = "";
const products = getItem('products');
const myReducer = (state = initialState, action: any) => {
  var _ = require('lodash');
  var carts = getItem('carts');
  switch (action.type) {
    case types.ADD_TO_CART:
      var { product } = action;
      var index = _.findIndex(carts, function (o: any) {
        // eslint-disable-next-line eqeqeq
        return o.product.id == product.id;
      });
      var index2 = _.findIndex(products, function (o: any) {
        // eslint-disable-next-line eqeqeq
        return o.id == product.id;
      });
      // eslint-disable-next-line eqeqeq
      if (products[index2].total <= carts[index]?.quantity) return types.MESSAGE_OUT_STOCK;
      return types.MESSAGE_SUCCESS;
    case types.DELETE_CART:
      return types.MESSAGE_DELETE;
    case types.UPDATE_CART:
      var { id } = action;
      index = _.findIndex(carts, function (o: any) {
        // eslint-disable-next-line eqeqeq
        return o.product.id == id;
      });
      index2 = _.findIndex(products, function (o: any) {
        // eslint-disable-next-line eqeqeq
        return o.id == id;
      });
      // eslint-disable-next-line eqeqeq
      if (products[index2].total <= carts[index]?.quantity) return types.MESSAGE_OUT_STOCK;
      return types.MESSAGE_UPDATE;
    default:
      if (carts.length) return `Có ${carts.length} sản phẩm trong giỏ hàng!`;
      return types.MESSAGE_EMPTY;
  }
}
export default myReducer;