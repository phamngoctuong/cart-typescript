import * as React from 'react';
import CartItem from './CartItem';
interface IAppProps { [propName: string]: any }
class Cart extends React.Component<IAppProps> {
  public render() {
    var { carts } = this.props;
    var total = carts.reduce((sum: any, cur: any) => sum + cur.quantity * cur.product.price, 0);
    var elmCarts = carts.map((cart: any, index: number) => {
      return <CartItem key={index} cart={cart}  onDeleteCart={(id:string) => this.props.onDeleteCart(id)} onUpdateCart={(id:string,q:number) => this.props.onUpdateCart(id,q)}/>
    })
    return (
      <section className="section">
        <div className="table-responsive">
          <table className="table product-table">
            <thead>
              <tr>
                <th></th>
                <th>Tiêu đề</th>
                <th>Giá</th>
                <th>Số Lượng</th>
                <th>Tổng Cộng</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {elmCarts}
              <tr>
                <td></td>
                <td>
                  <h4>
                    <strong>Tổng Tiền</strong>
                  </h4>
                </td>
                <td>
                  <h4>
                    <strong>{total}$</strong>
                  </h4>
                </td>
                <td>
                  <button type="button" className="btn btn-primary waves-effect waves-light">Complete purchase
                    <i className="fa fa-angle-right right"></i>
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
    );
  }
}
export default Cart;