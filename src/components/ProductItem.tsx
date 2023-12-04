import * as React from 'react';
import { rate } from "./../helps/product";
interface IAppProps { [propName: string]: any }
class ProductItem extends React.Component<IAppProps> {
  public render() {
    var { product } = this.props;
    return (
      <div className="col-lg-4 col-md-6 mb-r">
        <div className="card text-center card-cascade narrower">
          <div className="view overlay hm-white-slight z-depth-1">
            <img src={product.image} alt={product.name} />
            <div className="mask waves-light waves-effect waves-light"></div>
          </div>
          <div className="card-body">
            <h4 className="card-title">
              <strong>{product.name}</strong>
            </h4>
            <ul className="rating">
              {rate(product.rate)}
            </ul>
            <p className="card-text">{product.description}</p>
            <div className="card-footer">
              <span className="left">{product.price}$</span>
              <span className="right" onClick={() => this.props.addToCart(product)}>
                <span className="btn-floating blue-gradient"><i className="fa fa-venus"></i></span>
              </span>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default ProductItem;