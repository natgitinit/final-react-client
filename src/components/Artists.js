import React from 'react';

const Artists = ({ artists }) => {
  const renderArtists = artists.map((artist) =>
    <p key={artist.id}>{artist.name}</p>
  )

  return (
    <div>
      {renderArtists}
    </div>
  )
}


export default Artists;
