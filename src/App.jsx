
import './App.css';
import Page from './Page';
import { FavoriteProvider, LocationProvider, WeatherProvider } from './provider';
import SearchProvider from './provider/SearchProvider';
import ThemeProvider from './provider/ThemeProvider';

function App() {
  return (
    <>
      <ThemeProvider>
        <LocationProvider>
          <SearchProvider>
            <WeatherProvider>
              <FavoriteProvider>
                <Page />
              </FavoriteProvider>
            </WeatherProvider>
          </SearchProvider>
        </LocationProvider>
      </ThemeProvider>
    </>
  )
}

export default App;
