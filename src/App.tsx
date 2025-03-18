import { useActionState, useTransition, version } from "react";
import { useState } from "react";
import { Weather } from "./types/weather";
import WeatherCard from "./components/WeatherCard";
import PreviousWeatherCard from "./components/PreviousWeatherCard";



// Función para manejar estado y datos previos
const fetchAPIuseActionState = async (
  previousState: { data: Weather } | null, // Ajuste para reflejar `previousState.data`
  formData: FormData
): Promise<{ data: Weather; previousState: { data: Weather } | null } | string> => {
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
    return {
      data,
      previousState, // Mantiene el estado previo
    };
  } catch (error) {
    console.log(error);
    return "Error fetching api";
  }
};

// Componente principal
const App = () => {

  const [state, formAction] = useActionState<
    { data: Weather; previousState: { data: Weather } | null },
    FormData
  >(fetchAPIuseActionState, { previousState: null, data: null });

  return (
    <div className="container mx-auto py-2">
      <h1>React Version {version}</h1>
      <form action={formAction}>
        <div className="space-x-5">
          <input type="text" name="city" placeholder="insert city name" />
          <button
            type="submit"
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
          >
            {/* {isPending ? "loading..." : "Found Weather"} */}
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
