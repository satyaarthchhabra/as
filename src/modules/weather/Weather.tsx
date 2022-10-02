import { useState, useEffect } from "react";

import { Container } from "./weather.style";

const Bookmarks = () => {
  const [lat, setLat] = useState(null);
  const [long, setLong] = useState(null);
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      navigator.geolocation.getCurrentPosition(function (position) {
        setLat(position.coords.latitude);
        setLong(position.coords.longitude);
      });
      if (lat == null || long == null) return;
      let res = await fetch(
        `https://api.openweathermap.org/data/2.5/weather/?lat=${lat}&lon=${long}&units=metric&APPID=c1479c48d3d26d4ee950ccbc5567db78`
      );
      res = await res.json();
      setData(res);
    };
    fetchData();
  }, [lat, long]);

  return (
    <Container>
      <>
        <div className="tray">
          <p className="tray__empty-text" title="Weather Report ">
            {data?.main?.temp}
            {"  "}
            {data?.weather && data.weather[0]?.description}
            {" ,  "}
            {data?.name}
            {" ,  "}

            {data?.sys?.country}
          </p>
        </div>
      </>
    </Container>
  );
};

export default Bookmarks;
