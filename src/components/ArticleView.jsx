// ArticleView.js
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';

// ArticleView Component
const ArticleView = ({ article, onBack }) => {
  // Styling for the article content container
  const articleContentStyle = {
    maxWidth: '800px', // Limit the width of the article content
    margin: '0 auto',  // Center the article content
    padding: '20px',
    lineHeight: '1.6', // Improve readability
    backgroundColor: '#f9f9f9',
    borderRadius: '8px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', // Subtle shadow for better appearance
  };

  const backButtonStyle = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#007bff',
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

  return (
    <div style={articleContentStyle}>
      {/* Back Button */}
      <button onClick={onBack} style={backButtonStyle}>
        <FontAwesomeIcon icon={faArrowLeft} style={{ marginRight: '8px', height: '20px' }} />
        Back to Search
      </button>

      {/* Article Title and Content */}
      <h2>{article.title}</h2>
      <div dangerouslySetInnerHTML={{ __html: article.content }} />
    </div>
  );
};

export default ArticleView;