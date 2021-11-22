
import { useContext } from 'react'
import { MapContext } from '../context/Map'
import GoogleMapReact from 'google-map-react'
import styled from 'styled-components'
import Marker from './Marker'




const Container = styled.div`
display: flex;
`
const MapContainer = styled.div`
height: 100vh;
width: 70%;`

const ListContainer = styled.div`
height: 100vh;
width:30%;
overflow: scroll
`
const Bar = styled.div`
border: 2px solid black
`



const Map = () => {
    const {location, bars} = useContext(MapContext) 

    if (!location) {
        return <p>Loading...</p>
      } else {
        return (
            <Container>
                
                <ListContainer> {bars.map (bar => 
                    <Bar>
                        <p>{bar.name}</p>
                        <p>{bar.address}</p>
                        <p>{bar.price}€</p>
                    </Bar>
                    )}
                </ListContainer> 
                <MapContainer>
                    <GoogleMapReact
                    bootstrapURLKeys={{ key: "" }}
                    defaultCenter={location}
                    defaultZoom={14}
                    >
                        {bars.map(bar =>
                        <Marker
                        lat={bar.latitude}
                        lng={bar.longitude}
                        bar={bar.name}
                        />
                        )}
                        
                    
                    </GoogleMapReact>
                </MapContainer>
            </Container>
        );
      }
        
};

export default Map;


