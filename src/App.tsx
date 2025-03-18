import { useActionState, version } from "react";
import { useState } from "react";
import { Weather } from "./types/weather";
import WeatherCard from "./components/WeatherCard";
import PreviousWeatherCard from "./components/PreviousWeatherCard";

// Función para obtener datos de la API
const fetchAPI = async (city: string): Promise<Weather | string> => {
  try {
    const BASE_URL = "http://api.weatherapi.com/v1/current.json";
    const API = import.meta.env.VITE_API_KEY;

    const res = await fetch(`${BASE_URL}?key=${API}&q=${city}&aqi=no`);
    if (!res.ok) {
      throw new Error("Failed fetching data");
    }

    const data = (await res.json()) as Weather;
    return data; // Devuelve los datos correctamente tipados
  } catch (error) {
    console.log(error);
    return "Error fetching api"; // Manejo de errores
  }
};

// Función para manejar el estado previo y los datos actuales
const fetchAPIuseActionState = async (
  previousState: Weather | null,
  formData: FormData
): Promise<{ data: Weather; previousState: Weather | null } | string> => {
  console.log({ previousState, formData });

  try {
    const BASE_URL = "http://api.weatherapi.com/v1/current.json";
    const API = import.meta.env.VITE_API_KEY;
    const city = formData.get("city") as string;

    const res = await fetch(`${BASE_URL}?key=${API}&q=${city}&aqi=no`);
    if (!res.ok) {
      throw new Error("Failed fetching data");
    }

    const data = (await res.json()) as Weather;
    return { data, previousState }; // Devuelve un objeto con los datos y el estado previo
  } catch (error) {
    console.log(error);
    return "Error fetching api"; // Manejo de errores
  }
};

// Componente principal
const App = () => {
  const [city, setCity] = useState<string>(""); // Estado para almacenar la ciudad

  const [state, formAction] = useActionState<
    { data: Weather; previousState: Weather | null },
    FormData
  >(fetchAPIuseActionState, { previousState: null, data: null as unknown as Weather }); // Estado inicial tipado

  return (
    <div className="container mx-auto py-2">
      <h1>React Version {version}</h1>
      <form action={formAction}>
        <div className="space-x-5">
          <input
            type="text"
            name="city"
            placeholder="Insert city name"
            onChange={(e) => setCity(e.target.value)}
          />
          <button
            type="submit"
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
          >
            Get Weather
          </button>
        </div>
      </form>
      <div className="space-y-4">
        {state.data && <WeatherCard weather={state.data} />}
        {state?.previousState?.data ? (
          <>
            <h2>Previous:</h2>
            <PreviousWeatherCard weather={state.previousState.data} />
          </>
        ) : (
          <p>Looking for some Climates?</p>
        )}
      </div>
    </div>
  );
};

export default App;
