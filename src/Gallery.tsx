import React, { useState, useEffect } from "react";
import AlbumDetails from "./AlbumtDetails";
import "./Gallery.css";

const Gallery: React.FC<any> = (album: any) => {
  const [artisDetails, setArtistDetails] = useState<any>(null);
  const [albumDetails, setAlbumDetails] = useState<any>(null);

  useEffect(() => {
    if (album?.data?.album) setArtistDetails(album.data.album[0]);
  }, []);

  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <ul className="gallery">
        {album?.data?.album.map((a: any) => (
          <li onClick={() => setAlbumDetails(a)}>{a.name}</li>
        ))}
      </ul>
      {albumDetails && <AlbumDetails album={albumDetails} />}
    </div>
  );
};

export default Gallery;
