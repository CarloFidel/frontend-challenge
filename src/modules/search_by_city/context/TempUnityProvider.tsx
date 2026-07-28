import { useState } from "react";
import { TempUnityContext } from "./TempUnityContext";

export const TempUnityProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [isFarenheit, setIsFarenheit] = useState<boolean>(false);

  return (
    <TempUnityContext value={{ isFarenheit, setIsFarenheit }}>
      {children}
    </TempUnityContext>
  );
};
