import { createContext } from "react";
import type { City } from "../../../infrastructure/interfaces/city.interface";

interface FavorCityContextProps {
  favor: City[];
  setFavor: React.Dispatch<React.SetStateAction<City[]>>;
}

export const FavoriteCittyContext = createContext<FavorCityContextProps | null>(null);

