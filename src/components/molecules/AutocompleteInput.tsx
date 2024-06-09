// src/components/AutocompleteInput.tsx
import React, {
  useState,
  useEffect,
  ChangeEvent,
  MouseEvent,
  useRef,
} from "react";
import { db } from "../../utils/firebase";
import { collection, getDocs, limit, query, where } from "firebase/firestore";
import { useDebounce } from "../../app/hooks/useDebounce";
import Spinner from "../atoms/Spinner";

interface AutocompleteInputProps {
  placeholder?: string;
  collectionName: string;
  onSelect?: (suggestion: Suggestion) => void;
}

export interface Suggestion {
  id: string;
  firstName: string;
  lastName: string;
}

const AutocompleteInput: React.FC<AutocompleteInputProps> = ({
  placeholder = "Type to search...",
  collectionName,
  onSelect,
}) => {
  const [inputValue, setInputValue] = useState<string>("");
  const [suggestions, setSuggestions] = useState<Suggestion[]>([]);
  const updateSource = useRef<string | null>(null);
  const [spinner,setSpinner] = useState(false);

  const debouncedValue = useDebounce(
    updateSource.current !== "handleSuggestionClick" && inputValue
  );

  useEffect(() => {
    const fetchSuggestions = async () => {
      console.log(debouncedValue);

      if (debouncedValue && debouncedValue.length > 0) {
        try {
          console.log("calling firebase..");

          const qry = query(collection(db, collectionName));
          const snapshot = await getDocs(qry);
          setSpinner(false);
          const suggestionsData: any[] = [];
          snapshot.forEach((doc) => {
            suggestionsData.push({ id: doc.id, ...doc.data() });
          });

          //   const snapshot = await db
          //     .collection(collectionName)
          //     .where('name', '>=', inputValue)
          //     .where('name', '<=', inputValue + '\uf8ff')
          //     .limit(10)
          //     .get();

          setSuggestions(suggestionsData);
        } catch (error) {
          console.error("Error fetching suggestions:", error);
          setSuggestions([]);
        }
      } else {
        setSuggestions([]);
      }
    };

    fetchSuggestions();
  }, [debouncedValue, collectionName]);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSpinner(true);
    updateSource.current = null;
    setInputValue(e.target.value);
  };

  const handleSuggestionClick = (
    e: MouseEvent<HTMLElement>,
    suggestion: Suggestion
  ) => {
    const { textContent, id } = e.target as HTMLLIElement;
    console.log(textContent, id);

    updateSource.current = "handleSuggestionClick";
    setInputValue(textContent as string);
    setSuggestions([]);
    if (onSelect) {
      onSelect(suggestion);
    }
  };

  return (
    <div>
      <div className="relative flex justify-center items-center gap-2">
        <input
          className="text-2xl border-[3px] rounded-xl px-6 py-2"
          type="text"
          value={inputValue}
          onChange={handleChange}
          placeholder={placeholder}
        />
        {spinner && <Spinner tailwind="absolute right-[5px]"/>}
      </div>
      <ul>
        {suggestions.map((suggestion) => (
          <li
            id={suggestion.id}
            className="text-2xl border rounded-xl px-6 py-2 hover:bg-sky-300 hover:cursor-pointer"
            key={suggestion.id}
            onClick={(e) => handleSuggestionClick(e, suggestion)}
          >
            {suggestion.firstName + " " + suggestion.lastName}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AutocompleteInput;
