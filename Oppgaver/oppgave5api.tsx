import { fetchWeatherApi } from "openmeteo";

export default async function apiWeather(cityName: string) {
  try {

    const geoRes = await fetch(
      `https://geocoding-api.open-meteo.com/v1/search?name=${cityName}`
    );
    const geoData = await geoRes.json();

    if (!geoData.results || geoData.results.length === 0) {
      throw new Error("Fant ikke byen");
    }

    const { latitude, longitude } = geoData.results[0];


    const url = `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current_weather=true`;
    const res = await fetch(url);
    const data = await res.json();

    const current = data.current_weather;

    const result = {
      city: cityName,
      temperature: current.temperature,
      windspeed: current.windspeed,
      weathercode: current.weathercode,
    };

    console.log("✅ Værdata:", result);
    return result;
  } catch (err) {
    console.error("Feil ved henting av vær:", err);
    return null;
  }
}