import React from 'react';
import Card from 'react-bootstrap/Card'; // Using Bootstrap Card component
import PlaceholderLogo from '../assets/defaultSupplier.jpg'; // Fallback logo if a supplier logo is missing

const SupplierCard = ({ supplier }) => {
  const supplierLogo = supplier.logo ? require(`../assets/${supplier.logo}`) : PlaceholderLogo;

  return (
    <Card style={{
      width: '100%', 
      margin: '20px auto', 
      boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)', 
      position: 'relative',
      background: 'white',
      borderRadius: '10px',
    }}>
      {/* Supplier Logo and Name */}
      <div style={{
        position: 'absolute', 
        top: '10px', 
        left: '10px',
        zIndex: 10,
        textAlign: 'center',
      }}>
        <h2 style={{ fontFamily: 'Trebuchet MS, sans-serif', fontSize: '24px', fontWeight: 'bold', color: 'black', margin: 0 }}>
          {supplier.name}
        </h2>
        <p style={{ fontFamily: 'Trebuchet MS, sans-serif', fontSize: '18px', margin: '5px 0' }}>{supplier.industry}</p>
      </div>

      {/* Details Section (Positioned above the image but below the name) */}
      <div style={{
        marginTop: '60px',
        padding: '10px 20px',
        backgroundColor: '#f9f9f9',
        borderRadius: '8px',
      }}>
        <p style={{ fontFamily: 'Trebuchet MS, sans-serif', fontSize: '15px', marginBottom: '10px' }}>
          <strong>Details:</strong> {supplier.details}
        </p>
      </div>

      <div style={{ position: 'relative' }}>
        {/* Card image or placeholder */}
        <Card.Img
          variant="top"
          src={supplierLogo} 
          alt={`${supplier.name} Image`} 
          style={{ width: '90%', marginLeft: '20px', marginRight: '10px', height: 'auto', marginTop: '20px', borderRadius:'8px' }}
        />
      </div>

      <Card.Body>
        <div style={{
          backgroundColor: '#007bff', 
          height: '5px', 
          borderRadius: '0px',
          color: 'white',
          display: 'flex',
          justifyContent: 'space-between', 
          alignItems: 'center'
        }}></div>

        <Card.Text style={{ fontFamily: 'Trebuchet MS, sans-serif', marginLeft: '20px', marginRight: '20px', fontSize: '15px' }}>
          <strong>Location:</strong> {supplier.location}
        </Card.Text>
        <Card.Text style={{ fontFamily: 'Trebuchet MS, sans-serif', marginLeft: '20px', marginRight: '20px', fontSize: '15px' }}>
            <strong>Telephone:</strong> <a href={`tel:${supplier.telphone}`} style={{ color: '#007bff', textDecoration: 'none' }}>{supplier.telphone}</a> <br />
            <strong>Email:</strong> <a href={`mailto:${supplier.email}`} style={{ color: '#007bff', textDecoration: 'none' }}>{supplier.email}</a> <br />
            {supplier.website && (
              <>
                <strong>Website:</strong> <a href={supplier.website} target="_blank" rel="noopener noreferrer" style={{ color: '#007bff', textDecoration: 'none' }}>{supplier.website}</a>
              </>
            )}
        </Card.Text>
      </Card.Body>
    </Card>
  );
};

export default SupplierCard;