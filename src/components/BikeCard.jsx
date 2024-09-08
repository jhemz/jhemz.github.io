import React from 'react';
import Card from 'react-bootstrap/Card'; // Import Bootstrap Card
import OldLogo from '../assets/OldLogo.png';
import OriginalLogo from '../assets/OriginalLogo.png';
import MatchlessLogo from '../assets/matchlesslogo.png';
import AJSLogo from '../assets/ajsLogo.png';
import WDMatchlessLogo from '../assets/WDMatchlessLogo.png';
import YearBadge from './YearBadge';
import SmallBadge from './SmallBadge';

// Matchless Card Component
const OldMatchlessCard = ({ bike }) => {
  const bikeImage = require(`../assets/bikes/${bike.image}`);
  const bikeName = bike.name.replace('Matchless', '');

  return (
    <Card style={{
      width: '100%', 
      maxWidth: '39rem', 
      margin: '20px auto', 
      boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)', 
      position: 'relative',
      background: 'white',
      borderRadius: '10px'
    }}>
      {/* Name and engine specs below the logo */}
      <div style={{
        position: 'absolute', 
        top: '10px', // Adjust based on logo size
        left: '10px',
        zIndex: 10,
        textAlign: 'center',
      }}>
        <img 
          src={OriginalLogo} 
          alt="Matchless Logo" 
          style={{
            top: '-10px',
            left: '30px',
            width: '100px',
            height: 'auto',
            zIndex: 10, // Ensure the logo is above other elements
          }} 
        />
        <h2 style={{ fontFamily: 'Trebuchet MS, sans-serif',fontSize: '24px', fontWeight: 'bold', color: 'rgb(189 157 86)', margin: 0, textShadow: '1px 1px 1px rgba(0, 0, 0, 0.9)' }}>
          {bikeName}
        </h2>
        <p style={{ fontFamily: 'Trebuchet MS, sans-serif',fontSize: '18px', margin: '5px 0' }}>{bike.engine}</p>
      </div>

      <div style={{ position: 'relative' }}>
  {/* Flexbox wrapper for the badges with absolute positioning */}
  <div style={{
    position: 'absolute',
    top: '10px',  // Adjust to position the badges vertically
    right: '10px', // Adjust to position the badges horizontally
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'flex-end', // Ensure badges are aligned to the right
    zIndex: 10 // Ensure badges are above other elements
  }}>
    <YearBadge text={bike.year} />
  </div>

  <Card.Img
    variant="top"
    src={bikeImage}
    alt={`${bikeName} Image`}
    style={{ width: '90%', marginLeft:'20px', marginRight:'10px', height: 'auto', marginTop: '100px' }}
  />
</div>

      <Card.Body>
        <div style={{
                backgroundColor: 'rgb(189 157 86)', 
                height: '5px', 
                borderRadius: '0px',
                color: 'white',
                display: 'flex',
                justifyContent: 'space-between', 
                alignItems: 'center' }}>        
        </div>
        <Card.Text
          style={{fontFamily: 'Trebuchet MS, sans-serif', marginLeft: '20px', marginRight: '20px', fontSize: '15px' }}
          >{bike.description}</Card.Text>
      </Card.Body>
    </Card>
  );
};


// Matchless Card Component
const TwentiesMatchlessCard = ({ bike }) => {
  const bikeImage = require(`../assets/bikes/${bike.image}`);
  const bikeName = bike.name.replace('Matchless', '');

  return (
    <Card style={{
      width: '100%', 
      maxWidth: '39rem', 
      margin: '20px auto', 
      boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)', 
      position: 'relative',
      background: 'white',
      borderRadius: '10px'
    }}>
      {/* Name and engine specs below the logo */}
      <div style={{
        position: 'absolute', 
        top: '10px', // Adjust based on logo size
        left: '10px',
        zIndex: 10,
        textAlign: 'center',
      }}>
        <img 
          src={OldLogo} 
          alt="Matchless Logo" 
          style={{
            top: '-10px',
            left: '30px',
            width: '200px',
            height: 'auto',
            zIndex: 10, // Ensure the logo is above other elements
          }} 
        />
        <h2 style={{ fontFamily: 'Trebuchet MS, sans-serif',fontSize: '24px', fontWeight: 'bold', color: 'rgb(189 157 86)', margin: 0, textShadow: '1px 1px 1px rgba(0, 0, 0, 0.9)' }}>
          {bikeName}
        </h2>
        <p style={{ fontFamily: 'Trebuchet MS, sans-serif',fontSize: '18px', margin: '5px 0' }}>{bike.engine}</p>
      </div>

      <div style={{ position: 'relative' }}>
  {/* Flexbox wrapper for the badges with absolute positioning */}
  <div style={{
    position: 'absolute',
    top: '10px',  // Adjust to position the badges vertically
    right: '10px', // Adjust to position the badges horizontally
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'flex-end', // Ensure badges are aligned to the right
    zIndex: 10 // Ensure badges are above other elements
  }}>
    <YearBadge text={bike.year} />
  </div>

  <Card.Img
    variant="top"
    src={bikeImage}
    alt={`${bikeName} Image`}
    style={{ width: '90%', marginLeft:'20px', marginRight:'10px', height: 'auto', marginTop: '100px' }}
  />
</div>

      <Card.Body>
        <div style={{
                backgroundColor: 'rgb(189 157 86)', 
                height: '5px', 
                borderRadius: '0px',
                color: 'white',
                display: 'flex',
                justifyContent: 'space-between', 
                alignItems: 'center' }}>        
        </div>
        <Card.Text
          style={{fontFamily: 'Trebuchet MS, sans-serif', marginLeft: '20px', marginRight: '20px', fontSize: '15px' }}
          >{bike.description}</Card.Text>
      </Card.Body>
    </Card>
  );
};


// Matchless Card Component
const MatchlessCard = ({ bike }) => {
  const bikeImage = require(`../assets/bikes/${bike.image}`);
  const bikeName = bike.name.replace('Matchless', '');

  return (
    <Card style={{
      width: '100%', 
      maxWidth: '39rem', 
      margin: '20px auto', 
      boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)', 
      position: 'relative',
      background: 'white',
      borderRadius: '10px'
    }}>
      {/* Name and engine specs below the logo */}
      <div style={{
        position: 'absolute', 
        top: '10px', // Adjust based on logo size
        left: '10px',
        zIndex: 10,
        textAlign: 'center',
      }}>
        <img 
          src={MatchlessLogo} 
          alt="Matchless Logo" 
          style={{
            top: '-10px',
            left: '30px',
            width: '100px',
            height: 'auto',
            zIndex: 10, // Ensure the logo is above other elements
          }} 
        />
        <h2 style={{ fontFamily: 'Trebuchet MS, sans-serif',fontSize: '24px', fontWeight: 'bold', color: '#d40c0b', margin: 0 }}>
          {bikeName}
        </h2>
        <p style={{ fontFamily: 'Trebuchet MS, sans-serif',fontSize: '18px', margin: '5px 0' }}>{bike.engine}</p>
      </div>

      <div style={{ position: 'relative' }}>
  {/* Flexbox wrapper for the badges with absolute positioning */}
  <div style={{
    position: 'absolute',
    top: '10px',  // Adjust to position the badges vertically
    right: '10px', // Adjust to position the badges horizontally
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'flex-end', // Ensure badges are aligned to the right
    zIndex: 10 // Ensure badges are above other elements
  }}>
    <YearBadge text={bike.year} />
  </div>

  <Card.Img
    variant="top"
    src={bikeImage}
    alt={`${bikeName} Image`}
    style={{ width: '90%', marginLeft:'20px', marginRight:'10px', height: 'auto', marginTop: '100px' }}
  />
</div>

      <Card.Body>
        <div style={{
                backgroundColor: '#d40c0b', 
                height: '5px', 
                borderRadius: '0px',
                color: 'white',
                display: 'flex',
                justifyContent: 'space-between', 
                alignItems: 'center' }}>        
        </div>
        <Card.Text
          style={{fontFamily: 'Trebuchet MS, sans-serif', marginLeft: '20px', marginRight: '20px', fontSize: '15px' }}
          >{bike.description}</Card.Text>
      </Card.Body>
    </Card>
  );
};


// WD Matchless Card Component (identical for now, but you can customize colors later)
const WDMatchlessCard = ({ bike }) => {
  const bikeImage = require(`../assets/bikes/${bike.image}`);
  const bikeName = bike.name.replace('Matchless', '');

  return (
    <Card style={{
      width: '100%', 
      maxWidth: '39rem', 
      margin: '20px auto', 
      boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)', 
      position: 'relative',
      background: 'white',
      borderRadius: '10px'
    }}>
      <div style={{
        position: 'absolute', 
        top: '30px', 
        left: '10px',
        zIndex: 10,
        textAlign: 'center',
      }}>
        <img 
          src={WDMatchlessLogo} 
          alt="Matchless Logo" 
          style={{
            top: '10px',
            left: '30px',
            width: '120px',
            height: 'auto',
            zIndex: 10,
          }} 
        />
        <h2 style={{ fontFamily: 'Trebuchet MS, sans-serif',fontSize: '24px', fontWeight: 'bold', color: '#4D4B1D', margin: 0 }}>
          {bikeName}
        </h2>
        <p style={{ fontFamily: 'Trebuchet MS, sans-serif',fontSize: '18px', margin: '5px 0' }}>{bike.engine}</p>
      </div>

      <div style={{ position: 'relative' }}>
  {/* Flexbox wrapper for the badges with absolute positioning */}
  <div style={{
    position: 'absolute',
    top: '10px',  // Adjust to position the badges vertically
    right: '10px', // Adjust to position the badges horizontally
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'flex-end', // Ensure badges are aligned to the right
    zIndex: 10 // Ensure badges are above other elements
  }}>
    <YearBadge text={bike.year} />
  </div>

  <Card.Img
    variant="top"
    src={bikeImage}
    alt={`${bikeName} Image`}
    style={{ width: '90%', marginLeft:'20px', marginRight:'10px', height: 'auto', marginTop: '100px' }}
  />
</div>

      <Card.Body>
        <div style={{
                backgroundColor: '#4D4B1D', 
                height: '5px', 
                borderRadius: '0px',
                color: 'white',
                display: 'flex',
                justifyContent: 'space-between', 
                alignItems: 'center' }}>        
        </div>
        <Card.Text
          style={{fontFamily: 'Trebuchet MS, sans-serif', marginLeft: '20px', marginRight: '20px', fontSize: '15px' }}
          >{bike.description}</Card.Text>
      </Card.Body>
    </Card>
  );
};




// AJS Card Component
const AJSCard = ({ bike }) => {
  const bikeImage = require(`../assets/bikes/${bike.image}`);
  const bikeName1 = bike.name.replace('Model', '');
  const bikeName = bikeName1.replace('AJS', 'Model');

  return (
    <Card style={{
      width: '100%', // Make card take full width of the container
      maxWidth: '39rem', // Set a maximum width to prevent it from growing too large
      margin: '20px auto', // Center the card horizontally
      boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)', 
      position: 'relative',
      background: 'white',
      borderRadius: '10px'
    }}>
      <div style={{ position: 'relative' }}>
        {/* Year Badge */}
        <YearBadge text={bike.year} />
        <Card.Img variant="top" src={bikeImage} alt={`${bikeName} Image`} style={{ width: '90%', marginLeft:'20px', marginLRight:'10px', height: 'auto', marginTop: '100px' }} />
      </div>

      <Card.Body >
        <div style={{ backgroundColor: '#3b6fc4', height: '15px', padding: '10px', borderRadius: '0px', color: 'white', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <Card.Title style={{fontFamily: 'Trebuchet MS, sans-serif', marginLeft: '20px', fontSize: '25px' }}>{bikeName}</Card.Title>
          <img src={AJSLogo} alt="AJS Logo" style={{ width: '80px', height: 'auto', marginLeft: 'auto', zIndex: '100' }} />
        </div>
        <Card.Text
          style={{fontFamily: 'Trebuchet MS, sans-serif', marginLeft: '20px', marginRight: '20px', fontSize: '15px' }}
          >{bike.description}</Card.Text>
      </Card.Body>
    </Card>
  );
};

const BikeCard = ({ bike }) => {
  const isMatchless = bike.name.toLowerCase().startsWith('matchless');
  const [startYear] = bike.year.split('-').map(Number);

  if (isMatchless && bike.wd) {
    return <WDMatchlessCard bike={bike} />;
  }
  if (isMatchless && startYear < 1920 && !bike.wd) {
    return <OldMatchlessCard bike={bike} />;
  }
  if (isMatchless && startYear < 1939 && !bike.wd) {
    return <TwentiesMatchlessCard bike={bike} />;
  }
 
  return isMatchless ? <MatchlessCard bike={bike} /> : <AJSCard bike={bike} />;
};
export default BikeCard