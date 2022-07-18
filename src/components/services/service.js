import { DateTime } from "luxon";

const API_KEY = "f873c561e82e3ce4928e020d5900b4da";
const BASE_URL = `http://api.openweathermap.org/data/2.5`;

// `http://api.openweathermap.org/data/2.5/weather?q=${currentCity}&appid=410f4d0fdda24873e9cacf4cdbfc1341`

const getWeatherData = (infoType, searchParams) => {
  const url = new URL(BASE_URL + "/" + infoType);
  url.search = new URLSearchParams({ ...searchParams, appid: API_KEY });

  return fetch(url).then((res) => res.json());
};

const formatCurrentWeather = (data) => {
  const {
    coord: { lon, lat },
    main: { temp, feels_like, temp_min, temp_max, humidity },
    name,
    dt,
    weather,
    timezone,
    sys: { country },
    wind: { speed },
  } = data;
  const { main: details, icon } = weather[0];

  return {
    lon,
    lat,
    temp,
    feels_like,
    temp_min,
    temp_max,
    humidity,
    timezone,
    dt,
    name,
    details,
    icon,
    country,
    speed,
  };
};

const getFormattedWeatherData = async (searchParams) => {
  const formattedWeatherData = await getWeatherData(
    "weather",
    searchParams
  ).then(formatCurrentWeather);

  return formattedWeatherData;
};

const formatToLocalTime = (
  secs,
  zone,
  format = "cccc, dd LLL yyyy' | Local time: 'hh:mm a"
) => DateTime.fromSeconds(secs).setZone(zone).toFormat(format);

const iconUrl = (code) => `http://openweathermap.org/img/wn/${code}@2x.png`;

export default getFormattedWeatherData;
export { formatToLocalTime, iconUrl };
