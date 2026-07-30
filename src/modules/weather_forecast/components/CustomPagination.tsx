import { ArrowLeftIcon, ArrowRightIcon } from "@radix-ui/react-icons";
import ButtonPag from "./ButtonPag";

interface Props {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

const CustomPagination = ({ currentPage, totalPages, onPageChange }: Props) => {
  return (
    <div className="flex gap-4 w-full justify-center my-4">
      <ButtonPag
        variant="offline"
        disabled={currentPage === 1}
        onClick={() => onPageChange(currentPage - 1)}
      >
        <ArrowLeftIcon />
      </ButtonPag>

      {Array.from({ length: totalPages }).map((_, index) => (
        <ButtonPag
          key={index}
          variant={currentPage === index + 1 ? "fill" : "offline"}
          onClick={() => onPageChange(index + 1)}
        >
          {index + 1}
        </ButtonPag>
      ))}

      <ButtonPag
        variant="offline"
        disabled={currentPage === totalPages}
        onClick={() => onPageChange(currentPage + 1)}
      >
        <ArrowRightIcon />
      </ButtonPag>
    </div>
  );
};

export default CustomPagination;
