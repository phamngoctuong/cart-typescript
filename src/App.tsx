import * as React from 'react';
import './App.css';
import { connect } from 'react-redux';
import Header from './components/Header';
import Footer from './components/Footer';
import ProductContainer from './containers/ProductContainer';
import CartContainer from './containers/CartContainer';
import NotificationContainer from './containers/NotificationContainer';
interface IAppProps { [propName: string]: any }
class App extends React.Component<IAppProps> {
  public render() {
    return (
      <div>
        <Header />
        <main id="mainContainer">
          <div className="container">
            <ProductContainer />
            <NotificationContainer />
            <CartContainer />
          </div>
        </main>
        <Footer />
      </div>
    );
  }
}
const mapStateToProps = (state: any) => {
  return {
  }
};
const mapPropsToProps = (state: any) => {
  return {
  }
};
export default connect(mapStateToProps, mapPropsToProps)(App);