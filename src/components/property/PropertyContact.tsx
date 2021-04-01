import React from "react";
import "./PropertyContact.scss";

export const PropertyContact = function () {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-md-12 d-flex justify-content-between">
          <button type="button" className="btn btn-primary custom_filtr_btn">
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
            filters
          </button>
        </div>
      </div>

      <div className="form-container mb-2">
        <div className="row">
          <div className="col-md-12 d-flex justify-content-between">
            <ul className="social-network table-circle">
              <li className="ml-0">
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
            </ul>
            <div className="form-group has-search col-md-3 p-0">
              <span className="fa fa-search form-control-feedback"></span>
              <input type="text" className="form-control" />
            </div>
          </div>
        </div>
        <div className="col-md-12 table_outer">
          <table className="table table-striped">
            <thead>
              <tr>
                <th>&nbsp;</th>
                <th className="sort">name</th>
                <th className="sort">type</th>
                <th className="sort">emergency</th>
                <th>&nbsp;</th>
              </tr>
              <tr>
                <td>
                  <div className="staySignin d-flex align-items-center">
                    <input id="01" type="checkbox" />
                    <label htmlFor="01"></label>
                  </div>
                </td>
                <td>
                  <div className="form-group has-search position-relative">
                    <span className="fa fa-search form-control-feedback"></span>
                    <input type="text" className="form-control" />
                  </div>
                </td>
                <td>
                  <input
                    type="email"
                    className="form-control"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                  />
                </td>
                <td>
                  <div className="form-group">  
                    <select className="customDropdown">
                      <option>ALL</option>
                      <option>NOT ALL</option>
                    </select>
                  </div>
                </td>
                <td>
                <i className="fa fa-ellipsis-h" aria-hidden="true"></i>
                </td>
              </tr>
            </thead>
            <tbody>
                <tr>
              <td>
                  <div className="staySignin d-flex align-items-center">
                    <input id="01" type="checkbox" />
                    <label htmlFor="01"></label>
                  </div>
                </td>
                <td>
                  Mary
                </td>
                <td>
                  property management
                </td>
                <td>
                  <span className="check-circle"></span>
                </td>
                <td>
                <i className="fa fa-ellipsis-h" aria-hidden="true"></i>
                </td>
              </tr>
              <tr>
              <td>
                  <div className="staySignin d-flex align-items-center">
                    <input id="01" type="checkbox" />
                    <label htmlFor="01"></label>
                  </div>
                </td>
                <td>
                  Mary
                </td>
                <td>
                  property management
                </td>
                <td>
                  <span className="check-circle"></span>
                </td>
                <td>
                <i className="fa fa-ellipsis-h" aria-hidden="true"></i>
                </td>
              </tr>
              <tr>
              <td>
                  <div className="staySignin d-flex align-items-center">
                    <input id="01" type="checkbox" />
                    <label htmlFor="01"></label>
                  </div>
                </td>
                <td>
                  Mary
                </td>
                <td>
                  property management
                </td>
                <td>
                  <span className="check-circle"></span>
                </td>
                <td>
                <i className="fa fa-ellipsis-h" aria-hidden="true"></i>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default PropertyContact;
