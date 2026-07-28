import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { useState } from "react";
import { TempUnityProvider } from "../modules/search_by_city/context/TempUnityProvider";

type ProvidersProps = {
  children: React.ReactNode;
};

export function Providers({ children }: ProvidersProps) {
  const [queryClient] = useState(() => new QueryClient());

  return (
    <TempUnityProvider>
      <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
    </TempUnityProvider>
  );
}
