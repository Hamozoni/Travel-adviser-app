import axios from "axios";

export const placesData = async (type,sw,ne)=> {

    try {
       const {data: {data} }= await axios.get(`https://travel-advisor.p.rapidapi.com/${type}/list-in-boundary`,{
            params: {
                bl_latitude: sw.lat,
                tr_latitude: ne.lat,
                bl_longitude: sw.lng,
                tr_longitude: ne.lng,
            },
            headers: {
            'X-RapidAPI-Key': process.env.REACT_APP_DATA_KEY,
            'X-RapidAPI-Host': 'travel-advisor.p.rapidapi.com'
            }
        });
        return data;
    }catch(error) {
      console.error(error);
    }
};

export const placesCoords = async (name)=> {

  try {
    const { data } = await axios.get( 'https://opentripmap-places-v1.p.rapidapi.com/en/places/geoname',{
    params: {name: name},
    headers: {
      'X-RapidAPI-Key': process.env.REACT_APP_PLACES_KEY,
      'X-RapidAPI-Host': 'opentripmap-places-v1.p.rapidapi.com'
    }
  });
  return data;
  }catch(error) {
    console.error(error);
  }
};
