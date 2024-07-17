import React from 'react';
import { Link } from 'react-router-dom';
 
const Home = () => {
    return (
<div>
<h2>Home</h2>
<nav>
<Link to="/login">Login</Link>
<Link to="/signup">Sign Up</Link>
<Link to="/dashboard">Dashboard</Link>
</nav>
</div>
    );
};
 
export default Home;