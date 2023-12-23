import PhoneIcon from '@mui/icons-material/Phone';
import PlaceIcon from '@mui/icons-material/Place';
import PublicIcon from '@mui/icons-material/Public';
import './PlaceDetails.scss';

const PlaceDetails = ({ places, type }) => {
    return (
        <div className="place-details">
            { places?.length === 0 ?
                <div className='no-data'>
                    <h4>oops there are no {type} in this location try another or select on map</h4>
                </div> :
                <> {places?.map((place,i)=>(
                    <div className="card" key={i} >
                        <h3 className="name">{place?.name}</h3>
                        {place?.photo?.images?.large?.url? <img src={place?.photo?.images?.small?.url} alt={place?.name} />: <div className='isimg'>no image to show</div>}
                        <div className="card-content">
                            <h4 className="price">{place?.price && 'Price Range: '}{place?.price}</h4>
                            <span className='rank'>{ place?.ranking }</span>
                                <ul className="cuisine">
                                {place?.cuisine?.map((cuisin,i)=>(
                                    <li key={i}>{cuisin?.name}</li>
                                ))}
                                </ul>
                            { place?.address && <span className='address'><PlaceIcon />{place?.address}</span>}
                                <div className="phone-website">
                                {place.phone && <a className='phone' href={`tel:${place?.phone}`}><PhoneIcon /> {place?.phone}</a>}
                                {place?.website && <a className='website' href={place?.website} ><PublicIcon /> website</a>}
                                </div>
                        </div>
                        
                    </div>
               ))}</>
            }
        </div>
    )
};

export default PlaceDetails;