import * as React from 'react';
interface IAppProps { [propName: string]: any }
class Footer extends React.Component<IAppProps> {
  public render() {
    return (
      <footer className="page-footer center-on-small-only">
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-2 ml-auto">
              <h5 className="title social-section-title">Social Media</h5>
              <div className="social-section text-md-left">
                <ul className="text-center">
                  <li>
                    <div className="btn-floating  btn-fb waves-effect waves-light">
                      <i className="fa fa-facebook"></i>
                    </div>
                  </li>
                  <li>
                    <div className="btn-floating  btn-ins waves-effect waves-light">
                      <i className="fa fa-instagram"></i>
                    </div>
                  </li>
                  <li>
                    <div className="btn-floating  btn-tw waves-effect waves-light">
                      <i className="fa fa-twitter"></i>
                    </div>
                  </li>
                  <li>
                    <div className="btn-floating  btn-yt waves-effect waves-light">
                      <i className="fa fa-youtube"></i>
                    </div>
                  </li>
                  <li>
                    <div className="btn-floating  btn-li waves-effect waves-light">
                      <i className="fa fa-linkedin"></i>
                    </div>
                  </li>
                  <li>
                    <div className="btn-floating  btn-dribbble waves-effect waves-light">
                      <i className="fa fa-dribbble left"></i>
                    </div>
                  </li>
                  <li>
                    <div className="btn-floating  btn-pin waves-effect waves-light">
                      <i className="fa fa-pinterest"></i>
                    </div>
                  </li>
                  <li>
                    <div className="btn-floating  btn-gplus waves-effect waves-light">
                      <i className="fa fa-google-plus"></i>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-2">
              <h5 className="title">Delivery</h5>
              <ul>
                <li>
                  <div>Store Delivery</div>
                </li>
                <li>
                  <div>Online Delivery</div>
                </li>
                <li>
                  <div>Delivery Terms &amp; Conditions</div>
                </li>
                <li>
                  <div>Tracking</div>
                </li>
              </ul>
            </div>
            <div className="col-lg-2">
              <h5 className="title">Need help?</h5>
              <ul>
                <li>
                  <div>FAQ</div>
                </li>
                <li>
                  <div>Contact Us</div>
                </li>
                <li>
                  <div>Return Policy</div>
                </li>
                <li>
                  <div>Product Registration</div>
                </li>
              </ul>
            </div>
            <div className="col-lg-4">
              <h5 className="title">Instagram Photos</h5>
              <ul className="instagram-photos">
                <li>
                  <div className="view overlay hm-white-slight z-depth-1">
                    <img className="img-fluid" src="img/1.png" alt="1.png" />
                    <div>
                      <div className="mask waves-light waves-effect waves-light"></div>
                    </div>
                  </div>
                </li>
                <li>
                  <div className="view overlay hm-white-slight z-depth-1">
                    <img className="img-fluid" src="img/1.png" alt="1.png" />
                    <div>
                      <div className="mask waves-light waves-effect waves-light"></div>
                    </div>
                  </div>
                </li>
                <li>
                  <div className="view overlay hm-white-slight z-depth-1">
                    <img className="img-fluid" src="img/1.png" alt="1.png" />
                    <div>
                      <div className="mask waves-light waves-effect waves-light"></div>
                    </div>
                  </div>
                </li>
                <li>
                  <div className="view overlay hm-white-slight z-depth-1">
                    <img className="img-fluid" src="img/1.png" alt="1.png" />
                    <div>
                      <div className="mask waves-light waves-effect waves-light"></div>
                    </div>
                  </div>
                </li>
                <li>
                  <div className="view overlay hm-white-slight z-depth-1">
                    <img className="img-fluid" src="img/1.png" alt="1.png" />
                    <div>
                      <div className="mask waves-light waves-effect waves-light"></div>
                    </div>
                  </div>
                </li>
                <li>
                  <div className="view overlay hm-white-slight z-depth-1">
                    <img className="img-fluid" src="img/1.png" alt="1.png" />
                    <div>
                      <div className="mask waves-light waves-effect waves-light"></div>
                    </div>
                  </div>
                </li>
                <li>
                  <div className="view overlay hm-white-slight z-depth-1">
                    <img className="img-fluid" src="img/1.png" alt="1.png" />
                    <div>
                      <div className="mask waves-light waves-effect waves-light"></div>
                    </div>
                  </div>
                </li>
                <li>
                  <div className="view overlay hm-white-slight z-depth-1">
                    <img className="img-fluid" src="img/1.png" alt="1.png" />
                    <div>
                      <div className="mask waves-light waves-effect waves-light"></div>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="footer-copyright">
          <div className="container-fluid">
            © 2016 Copyright:
            <div>MDBootstrap.com </div>
          </div>
        </div>
      </footer>
    );
  }
}
export default Footer;