import { MagnifyingGlassIcon } from "@radix-ui/react-icons";
import { useDebounce } from "../hooks/useDebounce";

interface Props {
  onQuery: (query: string) => void;
}

const SearchBar = ({ onQuery }: Props) => {
  const { query, setQuery, handlekeyDown } = useDebounce(onQuery);

  return (
    <div className="flex gap-4 relative justify-start w-full">
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        onKeyDown={handlekeyDown}
        className="border border-gray-200 px-10 py-2.5 w-md bg-gray-100/10 backdrop-blur-sm rounded-2xl focus:outline-none "
        placeholder="Search for a city or country"
      ></input>
      <MagnifyingGlassIcon
        className="absolute top-3.5 left-4 text-gray-200"
        width={20}
        height={20}
      />
    </div>
  );
};

export default SearchBar;
