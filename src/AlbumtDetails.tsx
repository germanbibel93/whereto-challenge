import React, { useEffect, useState } from "react";
import axios from "axios";

const AlbumDetails: React.FC<any> = (album: any) => {
  const [currentAlbum, setCurrentAlbum] = useState<any>(null);
  console.log(album);
  useEffect(() => {
    const responseWithoutFormat = axios
      .get("http://demo.subsonic.org/rest/getAlbum", {
        params: {
          u: "guest",
          p: "guest",
          c: "subsonic",
          f: "json",
          v: "1.16.1",
          id: album.album.id,
        },
      })
      .then((response) =>
        setCurrentAlbum(response.data["subsonic-response"].album)
      )
      .catch((error) => console.log(error));
  }, [album]);
  return (
    <>
      {currentAlbum && (
        <ul>
          {currentAlbum.song.map((a: any) => (
            <li>{a.title}</li>
          ))}
        </ul>
      )}
    </>
  );
};
export default AlbumDetails;
