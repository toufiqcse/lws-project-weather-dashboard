
import './App.css';
import Page from './Page';
import { FavoriteProvider, LocationProvider, WeatherProvider } from './provider';
import SearchProvider from './provider/SearchProvider';

function App() {
  return (
    <>
      <LocationProvider>
        <SearchProvider>
          <WeatherProvider>
            <FavoriteProvider>
              <Page />
            </FavoriteProvider>
          </WeatherProvider>
        </SearchProvider>
      </LocationProvider>
    </>
  )
}

export default App;
