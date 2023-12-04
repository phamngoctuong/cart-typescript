import * as types from './../constants/ActionTypes';
import { setItem, getItem } from '../helps/localstorage';
const initialState = getItem('carts');
const products = getItem('products');
const myReducer = (state = initialState, action: any) => {
  var _ = require('lodash');
  switch (action.type) {
    case types.ADD_TO_CART:
      var { product } = action;
      var index = _.findIndex(state, function (o: any) {
        // eslint-disable-next-line eqeqeq
        return o.product.id == product.id;
      });
      var index2 = _.findIndex(products, function (o: any) {
        // eslint-disable-next-line eqeqeq
        return o.id == product.id;
      });
      // eslint-disable-next-line eqeqeq
      if (products[index2].total <= state[index]?.quantity) return state;
      if (index !== -1) {
        state[index]["quantity"] += 1;
        setItem("carts", state);
      } else {
        state.push({ product, quantity: 1 });
        setItem("carts", state);
      }
      return [...state];
    case types.DELETE_CART:
      var { id } = action;
      _.remove(state, function (o: any) {
        // eslint-disable-next-line eqeqeq
        return o.product.id == id;
      });
      setItem("carts", state);
      return [...state];
    case types.UPDATE_CART:
      id = action.id;
      var q = action.q;
      index = _.findIndex(state, function (o: any) {
        // eslint-disable-next-line eqeqeq
        return o.product.id == id;
      });
      index2 = _.findIndex(products, function (o: any) {
        // eslint-disable-next-line eqeqeq
        return o.id == id;
      });
      // eslint-disable-next-line eqeqeq
      if (!q) {
        _.remove(state, function (o: any) {
          // eslint-disable-next-line eqeqeq
          return o.product.id == id;
        });
      } else {
        // eslint-disable-next-line eqeqeq
        if (q <= products[index2].total) {
          state[index].quantity = q;
        };
      }
      setItem("carts", state);
      return [...state];
    default:
      return state;
  }
}
export default myReducer;