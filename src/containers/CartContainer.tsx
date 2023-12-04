import * as React from 'react';
import { connect } from 'react-redux';
import Cart from '../components/Cart';
import * as actions from "./../actions";
interface IAppProps { [propName: string]: any }
class CartContainer extends React.Component<IAppProps> {
  public render() {
    var {carts} = this.props;
    return (
      <Cart carts={carts} onDeleteCart={(product:any) => this.props.onDeleteCart(product)} onUpdateCart={(id:string,q:number) => this.props.onUpdateCart(id,q)}>
        {this.props.children}
      </Cart>
    );
  }
}
const mapStateToProps = (state: any) => {
  return {
    carts: state.carts
  }
};
const mapPropsToState = (dispatch: any, props: any) => {
  return {
    onDeleteCart: (id: string) => dispatch(actions.deleteCart(id)),
    onUpdateCart: (id: string,q:number) => dispatch(actions.updateCart(id,q))
  }
};
export default connect(mapStateToProps, mapPropsToState)(CartContainer);