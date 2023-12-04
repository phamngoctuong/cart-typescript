import * as React from 'react';
interface IAppProps { [propName: string]: any }
class Header extends React.Component<IAppProps> {
  generateData() {
    var products = [
      {
        id: 1,
        name: "Phòng khám số 1",
        image: "img/1.png",
        rate: 3,
        description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Corporis suscipit earum iure magnam? Expedita, commodi 1.",
        price: 150,
        total: 5
      },
      {
        id: 2,
        name: "Phòng khám số 2",
        image: "img/2.png",
        rate: 4,
        description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Corporis suscipit earum iure magnam? Expedita, commodi 2.",
        price: 450,
        total: 6
      },
      {
        id: 3,
        name: "Phòng khám số 3",
        image: "img/3.png",
        rate: 5,
        description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Corporis suscipit earum iure magnam? Expedita, commodi 3.",
        price: 650,
        total: 2
      }
    ];
    var carts = [
      {
        product: {
          id: 1,
          name: "Phòng khám số 1",
          image: "img/1.png",
          rate: 3,
          description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Corporis suscipit earum iure magnam? Expedita, commodi 1.",
          price: 150,
        },
        quantity: 2
      },
      {
        product: {
          id: 2,
          name: "Phòng khám số 2",
          image: "img/2.png",
          rate: 4,
          description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Corporis suscipit earum iure magnam? Expedita, commodi 2.",
          price: 450,
        },
        quantity: 1
      },
      {
        product: {
          id: 3,
          name: "Phòng khám số 3",
          image: "img/3.png",
          rate: 5,
          description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Corporis suscipit earum iure magnam? Expedita, commodi 3.",
          price: 650,
        },
        quantity: 2
      }
    ];
    localStorage.setItem('products', JSON.stringify(products));
    localStorage.setItem('carts', JSON.stringify(carts));
  }
  public render() {
    return (
      <header>
        <ul id="slide-out" className="side-nav hidden custom-scrollbar sn-bg-2 ps ps--theme_default" data-ps-id="c27390a3-9efc-e0d8-197a-ab96d73a156a">
          <li>
            <ul className="social">
              <li>
                <div className="icons-sm fb-ic">
                  <i className="fa fa-facebook"> </i>
                </div>
              </li>
              <li>
                <div className="icons-sm pin-ic">
                  <i className="fa fa-pinterest"> </i>
                </div>
              </li>
              <li>
                <div className="icons-sm gplus-ic">
                  <i className="fa fa-google-plus"> </i>
                </div>
              </li>
              <li>
                <div className="icons-sm tw-ic">
                  <i className="fa fa-twitter"> </i>
                </div>
              </li>
            </ul>
          </li>
          <li>
            <form className="search-form" role="search">
              <div className="form-group waves-light waves-effect waves-light">
                <input type="text" className="form-control" placeholder="Search" />
              </div>
            </form>
          </li>
          <li>
            <ul className="collapsible collapsible-accordion">
              <li>
                <div className="collapsible-header waves-effect arrow-r">
                  <i className="fa fa-shopping-bag"></i> Product Page
                  <i className="fa fa-angle-down rotate-icon"></i>
                </div>
                <div className="collapsible-body">
                  <ul>
                    <li>
                      <div className="waves-effect">Product Page V.1</div>
                    </li>
                    <li>
                      <div className="waves-effect">Product Page V.2</div>
                    </li>
                    <li>
                      <div className="waves-effect">Product Page V.3</div>
                    </li>
                  </ul>
                </div>
              </li>
              <li className="active">
                <div className="collapsible-header waves-effect arrow-r active">
                  <i className="fa fa-venus"></i> Cart Pages
                  <i className="fa fa-angle-down rotate-icon"></i>
                </div>
                <div className="collapsible-body">
                  <ul>
                    <li>
                      <div className="waves-effect">Page with shopping cart</div>
                    </li>
                    <li>
                      <div className="waves-effect">Page with contact form</div>
                    </li>
                    <li>
                      <div className="waves-effect">Page with contact form V.2</div>
                    </li>
                    <li>
                      <div className="waves-effect">Page with sign in form</div>
                    </li>
                    <li>
                      <div className="waves-effect">Page with 'terms of use'</div>
                    </li>
                    <li>
                      <div className="waves-effect">Page with 'FAQ'</div>
                    </li>
                  </ul>
                </div>
              </li>
              <li>
                <div className="collapsible-header waves-effect arrow-r">
                  <i className="fa fa-dashboard"></i> Homepages
                  <i className="fa fa-angle-down rotate-icon"></i>
                </div>
                <div className="collapsible-body">
                  <ul>
                    <li>
                      <div className="waves-effect">Ecommerce homepage default</div>
                    </li>
                    <li>
                      <div className="waves-effect">Ecommerce homepage full width</div>
                    </li>
                    <li>
                      <div className="waves-effect">Ecommerce homepage V.3 Carousel</div>
                    </li>
                    <li>
                      <div className="waves-effect">Ecommerce homepage V.3 Full Page Carousel</div>
                    </li>
                    <li>
                      <div className="waves-effect">Ecommerce homepage V.3 Half Page Carousel</div>
                    </li>
                    <li>
                      <div className="waves-effect">Ecommerce homepage V.4</div>
                    </li>
                  </ul>
                </div>
              </li>
              <li>
                <div className="collapsible-header waves-effect arrow-r">
                  <i className="fa fa-desktop"></i> Post Pages
                  <i className="fa fa-angle-down rotate-icon"></i>
                </div>
                <div className="collapsible-body">
                  <ul>
                    <li>
                      <div className="waves-effect">Page with column on the right</div>
                    </li>
                    <li>
                      <div className="waves-effect">Page with newsletter on the left</div>
                    </li>
                    <li>
                      <div className="waves-effect">Page with newsletter on the right</div>
                    </li>
                    <li>
                      <div className="waves-effect">Full width page with logged user</div>
                    </li>
                    <li>
                      <div className="waves-effect">Full width page with not logged user</div>
                    </li>
                  </ul>
                </div>
              </li>
              <li>
                <div className="collapsible-header waves-effect arrow-r">
                  <i className="fa fa-diamond"></i> Category Pages
                  <i className="fa fa-angle-down rotate-icon"></i>
                </div>
                <div className="collapsible-body">
                  <ul>
                    <li>
                      <div className="waves-effect">Category list with left column</div>
                    </li>
                    <li>
                      <div className="waves-effect">Category list with right column</div>
                    </li>
                    <li>
                      <div className="waves-effect">Category grid with left column</div>
                    </li>
                    <li>
                      <div className="waves-effect">Category grid with right column</div>
                    </li>
                    <li>
                      <div className="waves-effect">Category grid with left
                        column carousel</div>
                    </li>
                  </ul>
                </div>
              </li>
            </ul>
          </li>
          <div className="sidenav-bg mask-strong"></div>
          <div className="ps__scrollbar-x-rail">
            <div className="ps__scrollbar-x"></div>
          </div>
          <div className="ps__scrollbar-y-rail">
            <div className="ps__scrollbar-y"></div>
          </div>
        </ul>
        <nav className="navbar fixed-top navbar-toggleable-md navbar-expand-lg navbar-dark scrolling-navbar double-nav">
          <div className="float-left">
            <div data-activates="slide-out" className="button-collapse">
              <i className="fa fa-bars"></i>
            </div>
          </div>
          <div className="breadcrumb-dn mr-auto">
            <ol className="breadcrumb header-breadcrumb">
              <li className="breadcrumb-item">
                <button className="btn btn-primary waves-effect waves-light" onClick={() => this.generateData()}>Generate Data</button>
              </li>
            </ol>
          </div>
        </nav>
      </header >
    );
  }
}
export default Header;