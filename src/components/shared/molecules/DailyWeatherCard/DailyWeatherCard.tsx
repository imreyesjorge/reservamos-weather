export const DailyWeatherCard = ({ dt, icon, temp, min, max }) => {
  return (
    <div style={{ border: "1px solid green" }}>
      <img src={`http://openweathermap.org/img/wn/${icon}@2x.png`} />
      <h2>{new Date(dt * 1000).toDateString()}</h2>
      <h3>{temp}°C</h3>
      <p>
        {max}°C – {min}°C
      </p>
    </div>
  );
};
