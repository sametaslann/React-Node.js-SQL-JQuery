import { useEffect, useState } from "react";
import axios from "axios";
import "./style.css";

const API_endpoint = `https://api.openweathermap.org/data/2.5/weather?`;
const API_key = `22cdb0122a1c2ac58622ef50d3d3e3b1`;

function Weather() {
  const [latitute, setLatitute] = useState("");
  const [longitude, setLongitude] = useState("");
  const [weather, setWheather] = useState(null);

  useEffect(() => {
    const getCoordinate = async () => {
      navigator.geolocation.getCurrentPosition((position) => {
        setLatitute(position.coords.latitude);
        setLongitude(position.coords.longitude);
        console.log("Coordinat alınıyor");
      });
    };

    getCoordinate();
  }, []);

  useEffect(() => {
    if (latitute != "" && longitude != "") {
      let finalAPIEndPoint = `${API_endpoint}lat=${latitute}&lon=${longitude}&appid=${API_key}`;
      console.log(latitute);
      console.log(longitude);

      const fetchData = async () => {
        const data = await axios.get(finalAPIEndPoint).then((response) => {
          setWheather(response.data);
          console.log("Hava durumu alınıyor");
        });
      };
      fetchData();
    }
  }, [latitute, longitude]);

  if (weather != null) {
    console.log(weather);

    return (
      <div className="sidebar">
        <img
          className="weather_icon"
          src={require(`../../Assets/icons/weatherIcons/${weather.weather[0].icon}.png`)}
        />
        <h2> {(weather.main.temp - 273).toFixed(2)} &#8451;</h2>
        <p> {weather.weather[0].description}</p>
      </div>
    );
  }
}

export default Weather;
