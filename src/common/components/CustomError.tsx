import { ExclamationTriangleIcon } from "@radix-ui/react-icons";

interface ErrorMessageProps {
  title?: string;
  message?: string;
}

function CustomError({
  title = "Sorry, something went wrong",
  message = "An unexpected error occurred. Please try again later.",
}: ErrorMessageProps) {
  return (
    <div className="flex items-center justify-center h-full">
      <div className="rounded-3xl bg-background-secondary/5 border border-border backdrop-blur-xs px-8 py-6">
        <div className="flex flex-col items-center gap-4 text-center">
          <ExclamationTriangleIcon className="h-10 w-10 text-gray-400" />

          <div>
            <h2 className="text-lg font-semibold">{title}</h2>
            <p className="text-sm text-gray-400 mt-1">{message}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CustomError;
