import React from 'react';
import { Link } from 'react-router-dom';


const Information = () => {
    return (
        <div>
            <h1>Information Page</h1>
            <p>This is the information page content.</p>
            <Link to="/">
                <button className="btn">Back to Home</button>
            </Link>
        </div>
    );
};

export default Information;
