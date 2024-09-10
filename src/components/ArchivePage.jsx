import React, { useState, useEffect } from 'react';
import jampot_archive from '../Data/jampot_archives_structure.json';
import FileDisplay from './FileDisplay';

// Extract years and bike models from files
const extractFilters = (folders) => {
  const years = new Set();
  const bikes = new Set();

  const recursiveExtract = (folder) => {
    folder.Files.forEach((file) => {
      const fileName = file.FileName.toLowerCase();
      const yearMatch = fileName.match(/\b(19[0-9]{2}|20[0-9]{2})\b/); // Find years between 1900-2099
      if (yearMatch) years.add(yearMatch[0]);

      const bikeMatch = fileName.match(/\b(matchless|ajs|norton)\b/i); // Sample bike names
      if (bikeMatch) bikes.add(bikeMatch[0]);
    });

    folder.Subfolders.forEach((subfolder) => recursiveExtract(subfolder));
  };

  folders.forEach((folder) => recursiveExtract(folder));

  return {
    years: Array.from(years).sort(),
    bikes: Array.from(bikes).sort(),
  };
};

// ArchivePage Component
const ArchivePage = () => {
  const [openFolders, setOpenFolders] = useState({});
  const [selectedDecade, setSelectedDecade] = useState('All');
  const [selectedYear, setSelectedYear] = useState('All');
  const [selectedBike, setSelectedBike] = useState('All');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [filters, setFilters] = useState({ years: [], bikes: [] });
  const [filteredFiles, setFilteredFiles] = useState([]);

  useEffect(() => {
    // Extract available years and bikes for filtering
    const extractedFilters = extractFilters(jampot_archive.Subfolders);
    setFilters(extractedFilters);
  }, []);

  // Function to filter files based on the selected criteria (year, bike, category)
  const filterFiles = (folders) => {
    const filteredResults = [];

    const recursiveFilter = (folder) => {
      folder.Files.forEach((file) => {
        const fileName = file.FileName.toLowerCase();
        
        // Year and Decade Filtering
        const yearInFile = fileName.match(/\b(19[0-9]{2}|20[0-9]{2})\b/);
        const yearNumber = yearInFile ? parseInt(yearInFile[0]) : null;

        let yearMatch = true;
        if (selectedDecade !== 'All') {
          const decadeStart = parseInt(selectedDecade);
          const decadeEnd = decadeStart + 9;

          if (selectedYear === 'All') {
            // Check if the year falls within the selected decade
            yearMatch = yearNumber && yearNumber >= decadeStart && yearNumber <= decadeEnd;
          } else {
            // Check if the specific year matches
            yearMatch = yearNumber && yearNumber.toString() === selectedYear;
          }
        }

        const bikeMatch = selectedBike === 'All' || fileName.includes(selectedBike.toLowerCase());

        let categoryMatch = true;
        if (selectedCategory !== 'All') {
          if (selectedCategory === 'Manuals') {
            categoryMatch = fileName.includes('manual') || fileName.includes('instruction');
          } else if (selectedCategory === 'PartsLists') {
            categoryMatch = fileName.includes('parts list');
          } else if (selectedCategory === 'Articles') {
            categoryMatch = fileName.includes('article');
          } else if (selectedCategory === 'Photos') {
            categoryMatch = fileName.includes('.jpg') || fileName.includes('.png');
          }
        }

        if (yearMatch && bikeMatch && categoryMatch) {
          filteredResults.push(file);
        }
      });

      folder.Subfolders.forEach((subfolder) => recursiveFilter(subfolder));
    };

    folders.forEach((folder) => recursiveFilter(folder));

    // Sort filtered files by year in ascending order
    return filteredResults.sort((a, b) => {
      const yearA = a.FileName.match(/\b(19[0-9]{2}|20[0-9]{2})\b/);
      const yearB = b.FileName.match(/\b(19[0-9]{2}|20[0-9]{2})\b/);
      return yearA && yearB ? parseInt(yearA[0]) - parseInt(yearB[0]) : 0;
    });
  };

  // Handle search button click to filter and display results
  const handleSearch = () => {
    const results = filterFiles(jampot_archive.Subfolders);
    setFilteredFiles(results);
  };

  return (
    <div style={{ padding: '20px', marginTop: '100px' }}>
      <h1 style={{ textAlign: 'center', color: '#900' }}>Jampot Archives</h1>
      <p style={{ textAlign: 'center' }}>Explore the AJS & Matchless archives below.</p>

      {/* Filters Section */}
      <div style={styles.filterContainer}>
        {/* Decade Filter */}
        <div style={styles.filterItem}>
          <label htmlFor="decade" style={styles.filterLabel}>Decade:</label>
          <select
            id="decade"
            value={selectedDecade}
            onChange={(e) => {
              setSelectedDecade(e.target.value);
              setSelectedYear('All'); // Reset year when changing decade
            }}
            style={styles.select}
          >
            <option value="All">All</option>
            {Array.from({ length: 12 }, (_, i) => {
              const startYear = 1900 + i * 10;
              return (
                <option key={startYear} value={startYear}>
                  {startYear}s
                </option>
              );
            })}
          </select>
        </div>

        {/* Year Filter */}
        {selectedDecade !== 'All' && (
          <div style={styles.filterItem}>
            <label htmlFor="year" style={styles.filterLabel}>Year:</label>
            <select
              id="year"
              value={selectedYear}
              onChange={(e) => setSelectedYear(e.target.value)}
              style={styles.select}
            >
              <option value="All">All</option>
              {Array.from({ length: 10 }, (_, i) => {
                const year = parseInt(selectedDecade) + i;
                return year <= new Date().getFullYear() ? (
                  <option key={year} value={year}>
                    {year}
                  </option>
                ) : null;
              })}
            </select>
          </div>
        )}

        {/* Bike Filter */}
        <div style={styles.filterItem}>
          <label htmlFor="bike" style={styles.filterLabel}>Bike:</label>
          <select id="bike" value={selectedBike} onChange={(e) => setSelectedBike(e.target.value)} style={styles.select}>
            <option value="All">All</option>
            {filters.bikes.map((bike) => (
              <option key={bike} value={bike}>
                {bike.charAt(0).toUpperCase() + bike.slice(1)}
              </option>
            ))}
          </select>
        </div>

        {/* Category Filter */}
        <div style={styles.filterItem}>
          <label htmlFor="category" style={styles.filterLabel}>Category:</label>
          <select
            id="category"
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
            style={styles.select}
          >
            <option value="All">All</option>
            <option value="Manuals">Manuals</option>
            <option value="PartsLists">Parts Lists</option>
            <option value="Articles">Articles</option>
            <option value="Photos">Photos</option>
            <option value="Miscellaneous">Miscellaneous</option>
          </select>
        </div>

        {/* Search Button */}
        <div style={styles.filterItem}>
          <button onClick={handleSearch} style={styles.searchButton}>
            Search
          </button>
        </div>
      </div>

      {/* Render the filtered file list */}
      <div>
        {filteredFiles.length > 0 ? (
          <ul>
            {filteredFiles.map((file) => (
              <FileDisplay key={file.RelativePath} file={file} />
            ))}
          </ul>
        ) : (
          <p>No files match your search criteria.</p>
        )}
      </div>
    </div>
  );
};

// Component styles for a cleaner look
const styles = {
  filterContainer: {
    display: 'flex',
    justifyContent: 'center',
    gap: '20px',
    marginBottom: '20px',
    alignItems: 'center',
    flexWrap: 'wrap',
  },
  filterItem: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  filterLabel: {
    marginBottom: '5px',
    fontWeight: 'bold',
    fontSize: '14px',
    color: '#333',
  },
  select: {
    padding: '10px',
    fontSize: '14px',
    borderRadius: '5px',
    border: '1px solid #ddd',
    outline: 'none',
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
  },
  searchButton: {
    padding: '10px 20px',
    fontSize: '16px',
    backgroundColor: '#007bff',
    color: 'white',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    fontWeight: 'bold',
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
    transition: 'background-color 0.3s ease',
  },
};

export default ArchivePage;