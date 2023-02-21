import { motion } from "framer-motion";

export const DailyWeatherCard = ({ dt, icon, temp, min, max }) => {
  const date = new Date(dt * 1000).toDateString();

  const getTempColorWarning = (temp: number) => {
    const HOT_TEMP_TRESHOLD = 27;
    const COLD_TEMP_TRESHOLD = 18;

    return temp < COLD_TEMP_TRESHOLD
      ? "w-5 h-5 text-blue-400"
      : temp > HOT_TEMP_TRESHOLD
      ? "w-5 h-5 text-red-400"
      : "w-5 h-5 text-slate-300";
  };

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="w-[500px] p-4 pr-8 bg-white border border-gray-200 rounded-lg flex items-center justify-between shadow-lg shadow-gray-300/75 hover:scale-[1.02] transition"
    >
      <div className="flex items-center">
        <img src={`http://openweathermap.org/img/wn/${icon}@2x.png`} />
        <div className="text-slate-900">
          <h2 className="text-lg">{date}</h2>
          <h3 className="text-3xl font-semibold">{temp}°C</h3>
        </div>
      </div>
      <div className="text-slate-500 flex flex-col items-end gap-2">
        <p className="flex items-center gap-2">
          {max}°C
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className={getTempColorWarning(max)}
          >
            <path
              fillRule="evenodd"
              d="M12 20.25a.75.75 0 01-.75-.75V6.31l-5.47 5.47a.75.75 0 01-1.06-1.06l6.75-6.75a.75.75 0 011.06 0l6.75 6.75a.75.75 0 11-1.06 1.06l-5.47-5.47V19.5a.75.75 0 01-.75.75z"
              clipRule="evenodd"
            />
          </svg>
        </p>
        <p className="flex items-center gap-2">
          {min}°C
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className={getTempColorWarning(min)}
          >
            <path
              fillRule="evenodd"
              d="M12 2.25a.75.75 0 01.75.75v16.19l6.22-6.22a.75.75 0 111.06 1.06l-7.5 7.5a.75.75 0 01-1.06 0l-7.5-7.5a.75.75 0 111.06-1.06l6.22 6.22V3a.75.75 0 01.75-.75z"
              clipRule="evenodd"
            />
          </svg>
        </p>
      </div>
    </motion.section>
  );
};
