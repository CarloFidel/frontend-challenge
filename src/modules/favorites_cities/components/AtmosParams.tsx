import { PlusIcon } from "@radix-ui/react-icons";

interface Props {
  iconParam: React.ReactNode;
  iconPlus?: boolean;
  value: number;
  param: string;
  messuereUnity: string;
}

const AtmosParams = ({
  value,
  param,
  messuereUnity,
  iconParam,
  iconPlus,
}: Props) => {
  return (
    <div className="flex flex-col gap-2 justify-center items-start rounded-2xl bg-background-secondary/10 backdrop-blur-xs py-2 pl-4 pr-10 text-xs">
      <div className="flex gap-2 justify-start items-center">
        {iconParam}
        <p>
          {value} {param} {messuereUnity}
        </p>
      </div>
      <div className="flex gap-2 justify-start items-center">
        {iconPlus && <PlusIcon />}
        <p>{param}</p>
      </div>
    </div>
  );
};

export default AtmosParams;
