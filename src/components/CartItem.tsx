import * as React from 'react';
interface IAppProps { [propName: string]: any }
class CartItem extends React.Component<IAppProps> {
  public render() {
    var { cart: { product, quantity } } = this.props;
    return (
      <tr>
        <th scope="row">
          <img className="img-fluid z-depth-0" src={product.image} alt={product.name} />
        </th>
        <td>
          <h5>
            <strong>{product.name}</strong>
          </h5>
        </td>
        <td>{product.price}$</td>
        <td className="center-on-small-only">
          <span className="qty">{quantity}</span>
          <div className="btn-group radio-group" data-toggle="buttons">
            <label className="btn btn-sm btn-primary btn-rounded waves-effect waves-light" onClick={() => this.props.onUpdateCart(product.id, quantity - 1)}>
              <span>—</span>
            </label>
            <label className="btn btn-sm btn-primary btn-rounded waves-effect waves-light" onClick={() => this.props.onUpdateCart(product.id, quantity + 1)}>
              <span>+</span>
            </label>
          </div>
        </td>
        <td>{quantity * product.price}$</td>
        <td>
          <button type="button" onClick={() => this.props.onDeleteCart(product.id)} className="btn btn-sm btn-primary waves-effect waves-light" data-toggle="tooltip" data-placement="top" data-original-title="Remove item">X</button>
        </td>
      </tr>
    );
  }
}
export default CartItem;