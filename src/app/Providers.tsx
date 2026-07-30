import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { useState } from "react";
import { TempUnityProvider } from "../modules/search_by_city/context/TempUnityProvider";
import { FavoriteCittyProvaider } from "../modules/favorites_cities/context/FavoriteCittyProvaider";

type ProvidersProps = {
  children: React.ReactNode;
};

export function Providers({ children }: ProvidersProps) {
  const [queryClient] = useState(() => new QueryClient());

  return (
    <TempUnityProvider>
      <FavoriteCittyProvaider>
        <QueryClientProvider client={queryClient}>
          {children}
        </QueryClientProvider>
      </FavoriteCittyProvaider>
    </TempUnityProvider>
  );
}
