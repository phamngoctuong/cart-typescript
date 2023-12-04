const initialState = JSON.parse(localStorage.getItem('products') || '[]');
const myReducer = (state = initialState, action: any) => {
  switch (action.type) {
    default:
      return state;
  }
}
export default myReducer;