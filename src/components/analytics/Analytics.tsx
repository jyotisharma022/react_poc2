import React from 'react'
import RoutingEx from '../../RoutingEX'

export const Analytics = function () {
    return (
        <div className='wrapper d-flex align-items-stretch'>
            <RoutingEx></RoutingEx>
            <div id="content">
                <div className="container-fluid">
                    <h1>analytics!...</h1>
            </div>
         {/* footer start */}
         <footer>
             <ul>
                 <li><a href="#">terms of service</a></li>
                 <li><a href="#">privacy policy</a></li>
                 <li><a href="#">supported browsers</a></li>
             </ul>
             <p className="copyright">
             &copy; 2021 CBRE, inc.
             </p>
         </footer>
        </div>
        </div>
    )
}



export default Analytics