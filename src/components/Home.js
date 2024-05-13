import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import { useSelector } from 'react-redux'; // Import useSelector hook to access Redux store

const Home = () => {
  // Access theme state from Redux store
  const theme = useSelector(state => state.theme.value);

  return (
    <div id="home" className={`home ${theme === 'light' ? 'light-theme' : 'dark-theme'}`}>
      <div className="background-image">
        <div className="content-container">
          <div className={`quote ${theme === 'light' ? 'light-theme-text' : 'dark-theme-text'}`}>
            <h1>"Your Idea Matters!"</h1>
            <p className="subheading">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eget lorem nec sapien blandit placerat.</p>
          </div>
          <div className="logo-container">
            <img src="https://cdn.vectorstock.com/i/1000v/10/25/innovation-logo-for-business-company-simple-vector-27211025.jpg" alt="Logo" className="logo" />
          </div>
        </div>
        <div className="button-container">
          {/* Use Link component to navigate to Contact page */}
          <Link to="/contact" className={`get-started-button ${theme === 'light' ? 'light-theme-button' : 'dark-theme-button'}`}>Get Started</Link>
        </div>
      </div>
    </div>
  );
}

export default Home;
