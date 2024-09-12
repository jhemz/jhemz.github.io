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
    padding: '20px',
    marginTop: '170px',
    fontFamily: 'Arial, sans-serif',
    minHeight: '100vh',
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
    maxWidth: '100%',
    wordWrap: 'break-word',
  };

  const imageStyle = {
    width: '100px',
    height: '100px',
    objectFit: 'cover',
    borderRadius: '8px',
    marginRight: '10px',
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
          {filteredArticles.map((article) => (
            <div
              key={article.id}
              style={{
                border: '1px solid #ddd',
                padding: '10px',
                borderRadius: '5px',
                marginBottom: '10px',
                cursor: 'pointer',
                maxWidth: '100%',
                margin: '0 auto',
                width: '100%',
                display: 'flex',
                alignItems: 'center',
              }}
              onClick={() => handleArticleClick(article)}
            >
              {/* Article Image */}
              <img
                src={require(`../assets/wikiImages/${article.image}`)}
                alt={article.title}
                style={imageStyle}
              />

              {/* Article Title and Preview */}
              <div>
                <h3 style={titleStyle}>{article.title}</h3>
                <p>{stripHtmlTags(article.content).substring(0, 100)}...</p>
              </div>
            </div>
          ))}

          {filteredArticles.length === 0 && (
            <p>No articles found for "{searchTerm}"</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default WikiSearchPage;