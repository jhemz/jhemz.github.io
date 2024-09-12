import React, { useState, useEffect } from 'react';
import wikiArticlesData from '../Data/WikiArticles.json'; // Import the Wiki Articles JSON
import Header from './Header'; // Assuming you already have a Header component

const WikiSearchPage = ({ onNavigate, onSelectArticle }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredArticles, setFilteredArticles] = useState([]);

  useEffect(() => {
    // Filter articles based on the search term
    if (searchTerm) {
      const filtered = wikiArticlesData.filter((article) =>
        article.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        article.content.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setFilteredArticles(filtered);
    } else {
      setFilteredArticles(wikiArticlesData); // Show all articles if no search term
    }
  }, [searchTerm]);

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleArticleClick = (article) => {
    onSelectArticle(article); // Pass the selected article to the parent App component
  };

  // Function to strip HTML tags for the preview
  const stripHtmlTags = (html) => {
    const temporaryElement = document.createElement("div");
    temporaryElement.innerHTML = html;
    return temporaryElement.textContent || temporaryElement.innerText || "";
  };

  // Styling for the search container
  const containerStyle = {
    padding: '50px',
    maxWidth: '900px', // Limit the width of the article content for large screens
    background:'white',
    marginTop: '150px',
    fontFamily: 'Arial, sans-serif',
    minHeight: '100vh',
    borderRadius: '8px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    width: '100vw',
    boxSizing: 'border-box', // Ensure padding doesn't affect overall width
  };

  const searchSectionStyle = {
    display: 'flex',
    alignItems: 'center',
    gap: '10px',
    marginBottom: '20px',
    flexWrap: 'wrap',
  };

  const inputStyle = {
    flex: '1',
    padding: '12px',
    fontSize: '16px',
    borderRadius: '4px',
    border: '1px solid #ccc',
    height: '48px',
    width: '100%',
  };

  const titleStyle = {
    fontFamily: 'Trebuchet MS, sans-serif',
    fontSize: '1.2rem',
    fontWeight: 'bold',
    color: 'black',
    marginBottom: '10px',
    overflow: 'hidden',
    wordWrap: 'break-word',
  };

  const imageStyle = {
    width: '100px',
    height: '100px',
    objectFit: 'cover',
    borderRadius: '8px',
    marginRight: '10px',
  };

  const articleCardStyle = {
    border: '1px solid #ddd',
    padding: '10px',
    borderRadius: '5px',
    marginBottom: '10px',
    cursor: 'pointer',
    maxWidth: '100%',
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    flexWrap: 'wrap', // Make sure content wraps properly on smaller screens
  };

  const noArticlesStyle = {
    textAlign: 'center',
    fontSize: '18px',
    color: '#777',
    padding: '20px',
    minWidth: '100%', // Ensure it doesn't shrink the container
  };

  return (
    <div>
      {/* Header Component */}
      <Header selectedPage="wiki" onNavigate={onNavigate} />

      <div style={containerStyle}>
        {/* Search Bar */}
        <div style={searchSectionStyle}>
          <input
            type="text"
            placeholder="Search wiki articles..."
            value={searchTerm}
            onChange={handleSearchChange}
            style={inputStyle}
          />
        </div>

        {/* List of Articles */}
        <div>
          {filteredArticles.length > 0 ? (
            filteredArticles.map((article) => (
              <div
                key={article.id}
                style={articleCardStyle}
                onClick={() => handleArticleClick(article)}
              >
                {/* Article Image */}
                <img
                  src={require(`../assets/wikiImages/${article.image}`)}
                  alt={article.title}
                  style={imageStyle}
                />

                {/* Article Title and Preview */}
                <div style={{ flex: '1', minWidth: '0' }}>
                  <h3 style={titleStyle}>{article.title}</h3>
                  <p>{stripHtmlTags(article.content).substring(0, 100)}...</p>
                </div>
              </div>
            ))
          ) : (
            <p style={noArticlesStyle}>No articles found for "{searchTerm}"</p>
          )}
        </div>
      </div>

      {/* Media Query for Mobile Responsiveness */}
      <style jsx="true">{`
        @media (max-width: 768px) {
          .container {
            padding: 20px;
            width:100vw;
          }

          .article-card {
            flex-direction: column; /* Stack the image and text on top of each other on smaller screens */
            text-align: center;
          }

          img {
            margin: 0 auto; /* Center the image */
          }
        }
      `}</style>
    </div>
  );
};

export default WikiSearchPage;