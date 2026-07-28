import { createContext } from "react";

interface TempUnity {
  isFarenheit: boolean;
  setIsFarenheit: React.Dispatch<React.SetStateAction<boolean>>;
}

export const TempUnityContext = createContext<TempUnity | null>(null);

