import { SymbolIcon } from "@radix-ui/react-icons";

function Loading() {
  return (
    <div className="flex flex-col items-center justify-center gap-4 py-10">
      <SymbolIcon className="h-8 w-8 animate-spin" />
    </div>
  );
}

export default Loading;
