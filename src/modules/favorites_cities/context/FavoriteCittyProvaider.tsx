import { useState } from "react";
import { FavoriteCittyContext } from "./FavoriteCittyContext";
import type { City } from "../../../infrastructure/interfaces/city.interface";
import { favoriteCities } from "../data/favorites_cities.mock";

export const FavoriteCittyProvaider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [favor, setFavor] = useState<City[]>(favoriteCities);

  return (
    <FavoriteCittyContext value={{ favor, setFavor }}>
      {children}
    </FavoriteCittyContext>
  );
};
