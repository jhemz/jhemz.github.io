import React from 'react';
import Card from 'react-bootstrap/Card'; // Using Bootstrap Card component
import PlaceholderLogo from '../assets/defaultSupplier.jpg'; // Fallback logo if a supplier logo is missing

const SupplierCard = ({ supplier }) => {
  const supplierLogo = supplier.logo ? require(`../assets/${supplier.logo}`) : PlaceholderLogo;

  return (
    <Card style={{
      width: '100%', 
      margin: '20px auto', 
      boxShadow: '0 4px 12px rgba(0, 0, 0, 0.3)', // Darker shadow for vintage feel
      position: 'relative',
      borderRadius: '20px',
      background: 'white', // Muted white for retro look
      zIndex:'1000',
      padding: '30px',
    }}>
      
      {/* Supplier Header */}
      <div style={{
        marginBottom: '20px',
        borderBottom: '2px solid #900', // Bold red line to reflect Matchless theme
        paddingBottom: '10px',
        textAlign: 'center'
      }}>
        <h1 style={{
          textAlign:'left',
          fontFamily: 'Trebuchet MS, sans-serif', 
          fontSize: '28px', 
          fontWeight: 'bold', 
          color: '#900' // Dark red title
        }}>{supplier.category}</h1>
      </div>

      {/* Logo and Details Section */}
      <div style={{
        display: 'flex', 
        flexDirection: 'row', 
        alignItems: 'center', 
        justifyContent: 'space-between',
        padding: '20px', 
        backgroundColor: '#fff',
        borderRadius: '15px',
        boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
        marginBottom: '20px',
      }}>
        {/* Supplier Logo */}
        <div style={{
          minHeight:'120px',
          width: '100px', 
          marginRight: '20px',
        }}>
          <Card.Img
            variant="top"
            src={supplierLogo} 
            alt={`${supplier.name} Image`} 
            style={{
              width: '100px', 
              height: '100px', 
              objectFit: 'cover', 
              borderRadius: '30%', 
              border: '3px solid white', // Red border around logo
              boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)' // Slightly darker shadow
            }}
          />
        </div>

        {/* Supplier Details */}
        <div style={{
          flexGrow: 1,
          textAlign: 'left',
        }}>
          <h2 style={{
            fontFamily: 'Trebuchet MS, sans-serif', 
            fontSize: '22px', 
            fontWeight: 'bold', 
            color: '#333' // Darker font for better contrast
          }}>
            {supplier.name}
          </h2>
          <p style={{ 
            fontFamily: 'Trebuchet MS, sans-serif', 
            fontSize: '16px', 
            color: '#555' // Muted gray for text
          }}>
            {supplier.industry}
          </p>

          <p style={{
            fontFamily: 'Trebuchet MS, sans-serif', 
            fontSize: '15px', 
            marginBottom: '10px', 
            color: '#555'
          }}>
            <strong></strong> {supplier.details}
          </p>
        </div>
      </div>

      {/* Bottom Section Header with Gradient */}
      <div style={{
        padding: '10px 0',
        marginBottom: '0px',
        textAlign: 'center',
        background: 'rgb(81 98 80)', // Gradient with deep red tones
        borderRadius: '10px 10px 0 0'
      }}>
        <h3 style={{
          fontFamily: 'Trebuchet MS, sans-serif',
          fontSize: '20px', 
          fontWeight: 'bold', 
          textAlign: 'left',
          color: '#fff', // White text for contrast
          marginLeft: '20px',
          marginBottom: '0px',
        }}>CONTACT DETAILS</h3>
      </div>

      {/* Location Section */}
      <div style={{
        backgroundColor: '#fff',
        padding: '15px',
        minHeight:'120px',
        background: '#f9f4ef', // Muted white for vintage effect
        boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
        marginBottom: '1px'
      }}>
        <h4 style={{
          fontFamily: 'Trebuchet MS, sans-serif',
          fontSize: '18px',
          color: '#333',
          textAlign: 'left',
          marginBottom: '10px'
        }}>Address:</h4>
        <Card.Text style={{
          fontFamily: 'Trebuchet MS, sans-serif', 
          fontSize: '16px', 
          color: '#555'
        }}>
          {supplier.location}
        </Card.Text>
      </div>

      {/* Contact Information */}
      <div style={{
        textAlign: 'left',
        background: '#f9f4ef', // Muted white
        padding: '15px',
        borderRadius: '0 0 10px 10px',
        boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)'
      }}>
        <Card.Text style={{
          fontFamily: 'Trebuchet MS, sans-serif', 
          fontSize: '14px', 
          color: '#555'
        }}>
          <strong>Telephone:</strong> <a href={`tel:${supplier.telphone}`} style={{ color: '#900', textDecoration: 'none' }}>{supplier.telphone}</a> <br />
          <strong>Email:</strong> <a href={`mailto:${supplier.email}`} style={{ color: '#900', textDecoration: 'none' }}>{supplier.email}</a> <br />
          {supplier.website && (
            <>
              <strong>Website:</strong> <a href={supplier.website} target="_blank" rel="noopener noreferrer" style={{ color: '#900', textDecoration: 'none' }}>{supplier.website}</a>
            </>
          )}
        </Card.Text>
      </div>

      {/* Footer Icons (Optional for action buttons, social links, etc.) */}
      <div style={{
        marginTop: '20px',
        display: 'flex',
        justifyContent: 'center',
        gap: '10px',
      }}>
      
      </div>
    </Card>
  );
};

export default SupplierCard;