import * as React from 'react';
import ProductItem from './ProductItem';
interface IAppProps { [propName: string]: any }
class Product extends React.Component<IAppProps> {
  public render() {
    var { products } = this.props;
    var emlProduct = products.map((product: any, index: number) => <ProductItem key={product.id}  addToCart={(product:any) => this.props.addToCart(product)} product={product} />)
    return (
      <section className="section">
        <h1 className="section-heading">Danh Sách Các phòng khám</h1>
        <div className="row">
          {emlProduct}
        </div>
      </section>
    );
  }
}
export default Product;