import { createContext, useEffect, useState } from "react"
import barsTemplate from '../bars.json'

const MapContext = createContext({})




const MapContextProvider = (props) => {
    const [location, setLocation] = useState(null) 
    const [bars, setBars] = useState(barsTemplate)

    const value = {
        location,
        setLocation,
        bars,
        setBars
      }

      useEffect (() => {
        navigator.geolocation.getCurrentPosition(
            location => {
                setLocation ({
                    lat : location.coords.latitude,
                    lng: location.coords.longitude
                });
            }, 
            error => {
                console.log(error);
            }
        )
    },[])


      return (
        <MapContext.Provider value={value}>
          {props.children}
        </MapContext.Provider>
      )
}

export {
    MapContextProvider,
    MapContext
  }

