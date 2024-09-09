import React, { useState } from 'react';
import SupplierCard from './SupplierCard';
import suppliersData from '../Data/Suppliers.json'; // Import the JSON file with supplier data

const SuppliersPage = () => {
  const [suppliers] = useState(suppliersData || []);

  // Style for the suppliers container
  const suppliersContainerStyle = {
    display: 'flex',
    flexWrap: 'wrap',          // Allows the cards to wrap onto the next line
    justifyContent: 'center', // Center the cards within the row
    padding: '20px',
    gap: '20px',               // Add some space between the cards
  };

  const pageHeaderStyle = {
    textAlign: 'center',
    marginTop: '50px',
    fontFamily: 'Arial, sans-serif',
    fontSize: '32px',
    fontWeight: 'bold',
    color: '#333',
  };

  const pageDescriptionStyle = {
    textAlign: 'center',
    fontFamily: 'Arial, sans-serif',
    fontSize: '18px',
    color: '#666',
    marginBottom: '30px',
    maxWidth: '800px',
    margin: '0 auto', // Center the description text
  };

  return (
    <div style={{ padding: '0 20px', marginTop:'150px' }}>
      {/* Page Header */}
      <h1 style={pageHeaderStyle}>Trusted Suppliers</h1>
      
      {/* Page Description */}
      <p style={pageDescriptionStyle}>
        Below is a list of trusted suppliers we highly recommend for their quality, reliability, and commitment to customer satisfaction.
      </p>

      {/* Supplier Cards Container */}
      <div style={suppliersContainerStyle}>
        {suppliers.map((supplier) => (
          <div key={supplier.id} style={{ flex: '1 1 calc(33% - 40px)', maxWidth: '300px', minWidth: '250px' }}>
            <SupplierCard supplier={supplier} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default SuppliersPage;