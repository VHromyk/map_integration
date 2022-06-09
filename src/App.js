// import Container from './components/Container/Container';
// import Sidebar from './components/Sidebar/Sidebar';
// import MainSection from './components/MainSection/MainSection';
// import MapSection from './components/Map/Mapjs';
import { useJsApiLoader } from '@react-google-maps/api';
import Autocomplete from './components/Autocomplete'
import style from './App.module.css';

import Map from './components/Map';

const libraries = ['places'];

function App() {
    const { isLoaded } = useJsApiLoader({
        id: 'google-map-script',
        googleMapsApiKey: process.env.REACT_APP_API_KEY,
        libraries,
    });

    return (
        <>
            <div className={style.adress_search_container}>
                <Autocomplete isLoaded={isLoaded}/>
            </div>
            {isLoaded ? (
                <Map
                    center={{
                        lat: 46.4775,
                        lng: 30.7326,
                    }}
                />
            ) : (
                <h2>Sorry...</h2>
            )}
        </>
    );
}

export default App;
