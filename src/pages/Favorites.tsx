import { PlusIcon } from "@radix-ui/react-icons";
import { use, useState } from "react";
import SearchBar from "../modules/search_by_city/components/SearchBar";
import { FavoriteCityRow } from "../modules/favorites_cities/components/FavoritesCities";
import { TempUnityContext } from "../modules/search_by_city/context/TempUnityContext";
import type { City } from "../infrastructure/interfaces/city.interface";
import favoriteCities from "../modules/favorites_cities/data/favorites_cities.mock.json";

const Favorites = () => {
  const [showInput, setShowInput] = useState<boolean>(false);

  const farenheitContext = use(TempUnityContext);
  const { isFarenheit } = farenheitContext!;

  return (
    <>
      <section className="flex w-full justify-between">
        <div className="mb-4">
          <h1 className="text-h1">My favorites</h1>
          <p className="text-sm">Check the weather n your favorites places</p>
        </div>
        <button
          onClick={() => setShowInput(true)}
          className="px-4 py-2 h-10 flex gap-2 justify-center items-center cursor-pointer active:bg-base-800 transition-all text-xs bg-base-700 rounded-xl"
        >
          <PlusIcon />
          Add favorite
        </button>
      </section>
      <section className="my-10">
        {showInput && (
          <SearchBar
            onQuery={() => {
              console.log("query");
            }}
          />
        )}
      </section>
      <section className="bg-background-secondary/30 backdrop-blur-xs rounded-2xl px-4">
        {favoriteCities.favoriteCities.map((city: City) => (
          <FavoriteCityRow
            key={city.city}
            city={city}
            isFarenheit={isFarenheit}
          />
        ))}
      </section>
    </>
  );
};

export default Favorites;
