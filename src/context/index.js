import { createContext } from "react";

const WeatherContext = createContext("");
const FavoriteContext = createContext("");
const LocationContext = createContext("");
const SearchContext = createContext("");
const ModalContext = createContext("");
const ThemeContext = createContext("");

export {
  FavoriteContext,
  LocationContext,
  ModalContext,
  SearchContext,
  ThemeContext,
  WeatherContext,
};
