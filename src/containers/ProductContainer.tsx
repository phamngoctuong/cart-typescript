import * as React from 'react';
import Product from '../components/Product';
import { connect } from 'react-redux';
import * as actions from "./../actions";
interface IAppProps { [propName: string]: any }
class ProductContainer extends React.Component<IAppProps> {
  public render() {
    var { products } = this.props;
    return (
      <Product products={products} addToCart={(product: any) => this.props.onAddToCart(product)}>
        {this.props.children}
      </Product>
    );
  }
}
const mapStateToProps = (state: any) => {
  return {
    products: state.products,
    carts: state.carts
  }
};
const mapPropsToState = (dispatch: any, props: any) => {
  return {
    onAddToCart: (product: any) => dispatch(actions.addToCart(product))
  }
};
export default connect(mapStateToProps, mapPropsToState)(ProductContainer);