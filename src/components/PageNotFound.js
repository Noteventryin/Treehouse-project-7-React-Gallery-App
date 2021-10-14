import React from 'react';
import { NavLink } from 'react-router-dom';

const PageNotFound =() =>(
    <div className="not-found">
        <h2>404 error: Page Not Found</h2>
        <p>Sorry, we couldn't find this page.</p>
        <ul>
            <li><NavLink to="/cats">Back to the home page</NavLink></li>
        </ul>
    </div>    
)

export default PageNotFound;