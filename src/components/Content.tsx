import * as React from 'react';
import Product from './Product';
import Notification from './Notification';
import Cart from './Cart';
interface IAppProps { [propName: string]: any }
class Content extends React.Component<IAppProps> {
  public render() {
    return (
      <main id="mainContainer">
        <div className="container">
          <Product />
          <Notification />
          <Cart />
        </div>
      </main>
    );
  }
}
export default Content;