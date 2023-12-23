import { useMemo, useRef, useState } from 'react';
import SearchIcon from '@mui/icons-material/Search';
import { placesCoords } from '../../api/index';
import './Header.scss';

const Header = ({ setIsMapOpen, isMapOpen, setMapOpen, type, setType, setCoordinates })=> {
    
    const searchInput = useRef();
    const [isSearch,setIsSearch] = useState(false);
    const [isSearchAnimate,setIsSearchAnimate] = useState(false);
     
    const searchOpener = (e)=> {
        setIsSearch(!isSearch)
        searchInput.current.focus();
    }

    useMemo(()=>{
        isMapOpen ? setMapOpen('1') : setMapOpen('0');
    },[isMapOpen, setMapOpen])

    const reaschHandler = ()=> {
        setIsSearchAnimate(false)
        if(searchInput.current.value.length >= 3 && isSearch ){
            setIsSearchAnimate(true)
            placesCoords(searchInput.current.value) 
            .then((data)=>{
                setCoordinates({lat: data.lat , lng : data.lon})
                setIsSearch(false)
                setIsSearchAnimate(false)
            }) 
        };
    };
    
    return (
        <header className="header">
            <div className="container">
               <h2 className="logo">travel advisor</h2>
               <section className="filltering">
                    <select className="categories" value={type} onChange={(e)=> setType(e.target.value)}>
                        <option value="restaurants">restaurants</option>
                        <option value="hotels">hotels</option>
                        <option value="attractions">attractions</option>
                    </select>
                    <button className='open-map' onClick={()=>  setIsMapOpen(!isMapOpen)}>{isMapOpen ? 'back to home':'open on Map'}</button>
               </section>
                <div className={ isSearch ? 'open search': 'search'} onClick={searchOpener} >
                    <SearchIcon onClick={reaschHandler} className={isSearchAnimate && 'rotate'}/>
                    <input ref={searchInput} type="text" placeholder='Explore new places' />
                </div>
            </div>
        </header>
    )
}

export default Header;