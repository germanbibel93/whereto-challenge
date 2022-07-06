import React, { useEffect } from "react";
import logo from "./logo.svg";
import "./App.css";
import axios from "axios";
import Gallery from "./Gallery";

// type AlbumProp = {
//   id: string;
//   name: string;
//   artist: string;
//   coverArt: string;
//   duration: number;
//   playCount: number;
//   year: string;
//   genre: string;
// }

const App: React.FC = () => {
  const [data, setData] = React.useState<any>();

  useEffect(() => {
    const responseWithoutFormat = axios
      .get("http://demo.subsonic.org/rest/getAlbumList2", {
        params: {
          u: "guest",
          p: "guest",
          c: "subsonic",
          f: "json",
          v: "1.16.1",
          type: "newest",
          size: 10,
        },
      })
      .then((response) =>
        setData(response.data["subsonic-response"].albumList2)
      )
      .catch((error) => console.log(error));
  }, []);

  return (
    <div className="App">
      <p>&lArr;</p>
      {data && <Gallery data={data} />}
      <p>&rArr;</p>
    </div>
  );
};

export default App;
