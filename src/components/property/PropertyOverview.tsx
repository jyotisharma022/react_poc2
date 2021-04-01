import React, { Component } from "react";
import RoutingEx from "../../RoutingEX";
import PropertyContact from "./PropertyContact";
import "./PropertyOverview.scss";
import items from "./../../property.json";


export class PropertyOverview extends Component<{}, any> {
  //start constructor from here!..
  constructor (props:any) {
    super (props);
    this.state = {
      items: [],
      isLoaded : false,
    }
  }

  //use didMount component for fetch API
  componentDidMount (){
    fetch('https://demo1999110.mockable.io/')
    .then(a => a.json())
    .then(b => {
      this.setState ({
        isLoaded: true,
        items: b,
      })
    })
  }

  render() {
    var  {items, isLoaded} = this.state;

    if(!isLoaded) {
      return <div><h1>its Loaading!....</h1></div>
    }
    else {

    return (
      <div className="wrapper d-flex align-items-stretch">
        <RoutingEx></RoutingEx>
        <div id="content">
          <div className="container-fluid">
            <div className="row">
              <div className="col-md-12 d-flex justify-content-between pt-3">
                <div className="custom_dropdown">
                  <a
                    href="#"
                    id="dropdownMenuButton"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    my properties
                    <i className="fa fa-angle-down" aria-hidden="true"></i>
                  </a>
                  <div
                    className="dropdown-menu"
                    aria-labelledby="dropdownMenuButton"
                  >
                    <a className="dropdown-item" href="#">
                      one
                    </a>
                    <a className="dropdown-item" href="#">
                      two
                    </a>
                  </div>
                </div>
                <ul className="social-network social-circle">
                  <li>
                    <a href="#" className="icoFacebook" title="Facebook">
                      <i className="fa fa-facebook"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#" className="icoLinkedin" title="Linkedin">
                      <i className="fa fa-linkedin"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#" className="icoFacebook" title="Facebook">
                      <i className="fa fa-facebook"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#" className="icoFacebook" title="Facebook">
                      <i className="fa fa-facebook"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#" className="icoFacebook" title="Facebook">
                      <i className="fa fa-facebook"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <section className="tabs_block">
              <div className="row">
                <div className="col-md-12">
                  <nav>
                    <div
                      className="nav nav-tabs nav-fill"
                      id="nav-tab"
                      role="tablist"
                    >
                      <a
                        className="nav-item nav-link active"
                        id="nav-home-tab"
                        data-toggle="tab"
                        href="#nav-home"
                        role="tab"
                        aria-controls="nav-home"
                        aria-selected="true"
                      >
                        overview
                      </a>
                      <a
                        className="nav-item nav-link"
                        id="nav-profile-tab"
                        data-toggle="tab"
                        href="#nav-profile"
                        role="tab"
                        aria-controls="nav-profile"
                        aria-selected="false"
                      >
                        critical dates
                      </a>
                      <a
                        className="nav-item nav-link"
                        id="nav-contact-tab"
                        data-toggle="tab"
                        href="#nav-contact"
                        role="tab"
                        aria-controls="nav-contact"
                        aria-selected="false"
                      >
                        documents
                      </a>
                      <a
                        className="nav-item nav-link"
                        id="nav-about-tab"
                        data-toggle="tab"
                        href="#nav-about"
                        role="tab"
                        aria-controls="nav-about"
                        aria-selected="false"
                      >
                        contacts
                      </a>
                    </div>
                  </nav>
                  <div
                    className="tab-content py-2 px-3 px-sm-0"
                    id="nav-tabContent"
                  >
                    <div
                      className="tab-pane fade show active"
                      id="nav-home"
                      role="tabpanel"
                      aria-labelledby="nav-home-tab"
                    >
                      <div className="row">
                        <div className="col-md-12 d-flex justify-content-between">
                          <button
                            type="button"
                            className="btn btn-primary custom_filtr_btn"
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="16"
                              height="16"
                              fill="currentColor"
                              className="bi bi-filter"
                              viewBox="0 0 16 16"
                            >
                              <path d="M6 10.5a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 0 1h-3a.5.5 0 0 1-.5-.5zm-2-3a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5zm-2-3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5z"></path>
                            </svg>
                            Button
                          </button>
                          <div className="custom_pgn">
                            <span>951 Properties </span>
                            <ul className="kai-pagination">
                              <li className="pagination-item is-prev">
                                <a href="">
                                  <i
                                    className="fa fa-angle-left"
                                    aria-hidden="true"
                                  ></i>
                                </a>
                              </li>
                              <li className="pagination-item is-active">
                                <a href="">1 of 46</a>
                              </li>
                              <li className="pagination-item is-next active">
                                <a href="">
                                  <i
                                    className="fa fa-angle-right"
                                    aria-hidden="true"
                                  ></i>
                                </a>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>

                      <div className="row mt-3">
                        {items.map((item: any) => {
                          return (
                            <div className="col-12 col-sm-8 col-md-6 col-lg-4">
                              <div className="card property_card">
                                <img
                                  className="card-img"
                                  src="https://s3.eu-central-1.amazonaws.com/bootstrapbaymisc/blog/24_days_bootstrap/bologna-3.jpg"
                                  alt="Bologna"
                                />
                                <div className="card-img-overlay text-white d-flex flex-column">
                                  <a className="dots" href="#">
                                    <i
                                      className="fa fa-ellipsis-h"
                                      aria-hidden="true"
                                    ></i>
                                  </a>
                                  <div className="overlay-text">
                                    <h4 className="card-title">3nadh_Group</h4>
                                    <ul className="link d-flex">
                                      <li className="card-list">
                                        <i
                                          className="fa fa-sticky-note"
                                          aria-hidden="true"
                                        ></i>{" "}
                                        2 Total Properties
                                      </li>
                                      <li className="card-list">
                                        <i
                                          className="fa fa-th-large"
                                          aria-hidden="true"
                                        ></i>{" "}
                                        17,124.49 pyg
                                      </li>
                                    </ul>
                                  </div>
                                </div>
                                <div className="card-body">
                                  <label>Properties</label>
                                  <h5 className="card-title">
                                  {item.id} : {item.property_name}
                                  </h5>
                                  <ul className="list-group">
                                    {item.property_benefits.map((a: any) => (
                                      <li className="list-group-item">
                                        <i
                                          className="fa fa-window-restore"
                                          aria-hidden="true"
                                        ></i>
                                        {a}
                                      </li>
                                    ))}
                                  </ul>

                                  <div className="group-link">
                                    <a href="#" className="card-link">
                                      VIEW GROUP
                                    </a>
                                  </div>
                                </div>
                              </div>
                            </div>
                          );
                        })}
                      </div>
                    </div>
                    <div
                      className="tab-pane fade"
                      id="nav-profile"
                      role="tabpanel"
                      aria-labelledby="nav-profile-tab"
                    >
                      second tab
                    </div>
                    <div
                      className="tab-pane fade"
                      id="nav-contact"
                      role="tabpanel"
                      aria-labelledby="nav-contact-tab"
                    >
                      third tab
                    </div>
                    <div
                      className="tab-pane fade"
                      id="nav-about"
                      role="tabpanel"
                      aria-labelledby="nav-about-tab"
                    >
                      <PropertyContact></PropertyContact>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>
          {/* footer start */}
          <footer>
            <ul>
              <li>
                <a href="#">terms of service</a>
              </li>
              <li>
                <a href="#">privacy policy</a>
              </li>
              <li>
                <a href="#">supported browsers</a>
              </li>
            </ul>
            <p className="copyright">&copy; 2021 CBRE, inc.</p>
          </footer>
        </div>
      </div>
    );
        }
  }

}

export default PropertyOverview;
