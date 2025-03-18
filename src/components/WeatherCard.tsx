import { Weather } from "../types/weather"

interface WeatherCardProp{
weather: Weather
}

const WeatherCard = ({weather}: WeatherCardProp) => {
  return (
    <div >
        <a  target="_blank" href={`https://www.google.com/search?q=${weather.location.name}`} className="block max-w-xs p-6 bg-white border border-black-200 rounded-lg shadow-sm hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">

<h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{weather.location.name}</h5>
<h6 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{weather.location.country}</h6>
<div className="flex ">

<p className="font-normal text-gray-700 dark:text-gray-400 mt-5">Temperatura: {weather.current.temp_c}°</p>
<img src={weather.current.condition.icon} alt="" />
</div>
</a>

    </div>
  )
}

export default WeatherCard