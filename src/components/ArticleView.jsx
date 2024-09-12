import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';

// ArticleView Component
const ArticleView = ({ article, onBack }) => {
  const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth < 768); // Set the initial screen size

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth < 768); // Update the state on screen resize
    };

    // Add event listener to listen for window resize
    window.addEventListener('resize', handleResize);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  // Styling for the article content container
  const articleContentStyle = {
    maxWidth: '800px', // Limit the width of the article content
    margin: '0 auto',  // Center the article content
    padding: '20px',
    marginTop: '150px',
    lineHeight: '1.6', // Improve readability
    backgroundColor: '#f9f9f9',
    borderRadius: '8px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', // Subtle shadow for better appearance
  };

  const backButtonStyle = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgb(87, 114, 182)',
    color: 'white',
    padding: '10px 16px',
    borderRadius: '5px',
    border: 'none',
    cursor: 'pointer',
    fontSize: '16px',
    textDecoration: 'none',
    height: '48px',
    marginBottom: '20px',
  };

  // Adjust the image size based on whether it's a small screen
  const articleImageStyle = {
    width: isSmallScreen ? '150px' : '300px', // 150px on small screens, 300px on larger screens
    height: isSmallScreen ? '150px' : '300px',
    objectFit: 'cover',
    borderRadius: '8px',
    marginRight: '20px',
    marginBottom: '20px',
    float: 'left', // Float the image to the left so text wraps around it
  };

  return (
    <div style={articleContentStyle}>
      {/* Back Button */}
      <button onClick={onBack} style={backButtonStyle}>
        <FontAwesomeIcon icon={faArrowLeft} style={{ marginRight: '8px', height: '20px' }} />
        Back to Search
      </button>

      {/* Article Title */}
      <h2>{article.title}</h2>

      {/* Article Image */}
      <img
        src={require(`../assets/wikiImages/${article.image}`)}
        alt={article.title}
        style={articleImageStyle}
      />

      {/* Article Content */}
      <div dangerouslySetInnerHTML={{ __html: article.content }} />
    </div>
  );
};

export default ArticleView;