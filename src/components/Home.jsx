import React from 'react';
import '../css/Home.css'; // This will contain the provided CSS

function Home() {
  return (
    <div className="home-content">
      <div className="text-content">
        <div className="header-grid">
          <p className="small-header">AJS & Matchless Owners Club</p>
          <h1 className="jampot-title">Jampot</h1>
          <p className="small-header west-of-england">Devon & Cornwall</p>
        </div>

        <h2>Welcome to the Devon & Cornwall section of the AJS & Matchless Owners Club!</h2>
        <p>
          We are a dedicated group within the broader AJS & Matchless community, focused on preserving the rich legacy of these iconic British motorcycles. Our section, spanning the beautiful regions of Devon and Cornwall, unites enthusiasts, restorers, and riders who share a deep passion for the craftsmanship and heritage of AJS & Matchless machines.
        </p>
        <p>
          Whether you’re an experienced rider or new to classic motorcycles, our section offers a welcoming space to connect with like-minded individuals. Join us in celebrating these historic motorcycles, participating in exciting events, and keeping the AJS & Matchless spirit alive. Explore our site to stay informed about upcoming section events, access valuable resources, and engage with fellow members of the AJS & Matchless community.
        </p>
      </div>

      <div className="image-container">
        <div className="faded-image"></div>
      </div>

      {/* Masonry layout for photos */}
      <div className="masonry-container" id="masonry-container">
        {/* Dynamically insert images and descriptions here */}
      </div>
    </div>
  );
}

export default Home;