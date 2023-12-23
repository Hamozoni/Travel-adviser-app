import './Map.scss';
import GoogleMapReact from 'google-map-react';

const Map = ({ setCoordinates, setBounds, coordinates, places }) => {
    return (
        <div className="map">
            <GoogleMapReact
                bootstrapURLKeys={{key: process.env.REACT_APP_MAP_KEY }}
                defaultCenter={coordinates}
                center={coordinates}
                defaultZoom={12}
                margin={[50, 50, 50, 50]}
                options={''}
                onChange={(e)=>{
                    setCoordinates({lat: e.center.lat, lng: e.center.lng});
                    setBounds({ne: e.marginBounds.ne, nw: e.marginBounds.nw, se: e.marginBounds.se, sw: e.marginBounds.sw})
                }}
            >
                {places?.map((place,i)=>(
                    <div className="map-card"
                        key={i}
                        lat={Number(place?.latitude)}
                        lng={Number(place?.longitude)}
                    >
                        <h4 className="name">{place?.name}</h4>
                        <img src={place?.photo?.images?.small?.url} alt={place?.name}/> 
                        <p>{place?.Rating}</p>                  
                    </div>
                ))}

            </GoogleMapReact>
        </div>
    )
}

export default Map;
