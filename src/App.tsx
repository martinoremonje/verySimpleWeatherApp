import { useActionState, useTransition, version } from "react"
import { useState } from "react";
import { Weather } from "./types/weather";
import WeatherCard from "./components/WeatherCard";
import PreviousWeatherCard from "./components/PreviousWeatherCard";


 const fetchAPI =  async(city: string)=>{
  
   try {
     const BASE_URL = "http://api.weatherapi.com/v1/current.json";
     const API = import.meta.env.VITE_API_KEY

     const res = await fetch(`${BASE_URL}?key=${API}&q=${city}&aqi=no`);
     if(!res.ok){
       throw new Error("Failed fetching data")
     }

     const data = (await res.json()) as Weather;
     return data
   } catch (error) {
     console.log(error)
     return "Error fetching api"
   }
 }

const fetchAPIuseActionState =  async(previousState: Weather, formData: FormData)=>{
  console.log({previousState, formData})

  try {
    const BASE_URL = "http://api.weatherapi.com/v1/current.json";
    const API = import.meta.env.VITE_API_KEY
    const city = formData.get("city") as string

    const res = await fetch(`${BASE_URL}?key=${API}&q=${city}&aqi=no`);
    if(!res.ok){
      throw new Error("Failed fetching data")
    }

    const data = (await res.json()) as Weather;
    return {data, previousState}
  } catch (error) {
    console.log(error)
    return "Error fetching api"
  }
}


const App = () => {

  // const [isPending, startTransition] = useTransition()
  const [city, setCity] = useState("")
  const [weather, setWeather] = useState<Weather | string>()

  

  const [state, formAction] = useActionState(fetchAPIuseActionState, { previousState: null, data: null })

  // const handleSubmit = async() =>{
    
  //   startTransition(async()=>{
  //     const data = await fetchAPI(city)
  //     if(data){
  //       setWeather(data)
  //     } else{
  //       console.log("Error fetching data")
  //     }
  //   })
  // }



  return (
    <div className="container mx-auto py-2">
      <h1>React Version {version}</h1>
      <form action={formAction}>
      <div className="space-x-5">

      <input type="text" name="city" placeholder="insert city name"/>
      <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">
        {/* {isPending ? "loading..." : "Found Weather"}*/}Get Weather
        </button> 
      </div>
      </form>
      <div className="space-y-4">

      {
        state.data && (
          
          <WeatherCard weather={state.data}/>
        )
      }
      
    {
  state?.previousState?.data ? (   
    <>
    <h2>Previous: </h2>
    <PreviousWeatherCard weather={state.previousState.data} />
    </>
  ) : (
    <p>Looking for some Climates?</p>
  )
}
      </div>
    
    </div>
  )
}

export default App