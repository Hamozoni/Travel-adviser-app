import React, { useEffect, useState} from "react";
import Header from './Components/Header/Header';
import MainContent from './Components/MainContent/MainContent';
import Footer from './Components/Footer/Footer';
import './Global.scss';
import { placesData }  from './api/index';

const App = () =>{

    const [type,setType] = useState('restaurants');
    const [MapOpen,setMapOpen] = useState('0');
    const [isMapOpen,setIsMapOpen] = useState(false);
    const [coordinates,setCoordinates] = useState({lat: 26.374989, lng: 50.1252292 })
    const [bounds,setBounds] = useState({})
    const [places,setPlaces] = useState([]);
    const [isLoading,setIsloading] = useState(true);
    const [placeClicked,setPlaceClicked] = useState(null);
    
    useEffect(()=> {

        const success =  (csords)=>{
            setCoordinates({lat: csords.latitude, lng: csords.longitude })
        }
        const error =()=>{
            setCoordinates({lat: 26.374989, lng: 50.1252292 })
        }

        navigator.geolocation.getCurrentPosition(success,error)   
     },[])

    useEffect(()=> {
         setIsloading(true);
         placesData(type,bounds.sw, bounds.ne)
         .then((data)=>{
            setPlaces(data?.filter((place)=> place.name && place.latitude))
            setIsloading(false);
         })         
    },[ type , bounds])

    return (
        <>
           <Header
               setIsMapOpen={setIsMapOpen}
               isMapOpen={isMapOpen}
               setMapOpen={setMapOpen}
               type={type}
               setType={setType} 
               setCoordinates={setCoordinates}
            />
            <MainContent
               isLoading={isLoading}
               MapOpen={MapOpen}
               places={places}
               setCoordinates={setCoordinates}
               setBounds={setBounds}
               coordinates={coordinates}
               type={type}
               setPlaceClicked={setPlaceClicked}
               placeClicked={placeClicked}
            />
           <Footer />
          </>
    )
};
 
export default App;