import React from 'react';
import { NavLink } from 'react-router-dom';

const PageNotFound =() =>(
    <div className="page-not-found">
        <h2>404 error: Page Not Found</h2>
        <p>Sorry, we couldn't find this page.</p>
        <ul>
            <li><NavLink to="/">Back to the home page</NavLink></li>
        </ul>
    </div>    
)

export default PageNotFound;