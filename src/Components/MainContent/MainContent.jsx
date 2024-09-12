import './MainContent.scss';
import PlaceDetails from '../PlaceDetails/PlaceDetails';
import Map from '../Map/Map';
import Loading from '../Loading/Loading';

const MainContent = ({
        isLoading,
        MapOpen,
        places,
        setCoordinates,
        setBounds,
        coordinates,
        type,
        SetPlaceClicked,
        placeClicked
    }) => {

    return (
        <div className="main-content">
            <div 
                className="container" 
                style={{transform: `translateX(-${Number(MapOpen) * 100}vw)`}}
                >
                {
                    isLoading ? <Loading />
                    : <PlaceDetails 
                        places={places} 
                        type={type} 
                        placeClicked={placeClicked}
                      />
                } 
                <Map 
                    places={places} 
                    setCoordinates={setCoordinates} 
                    setBounds={setBounds} 
                    coordinates={coordinates} 
                    SetPlaceClicked={SetPlaceClicked}
                    /> 
            </div>
            
        </div>
    )
};

export default MainContent;
