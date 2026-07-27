import React from "react";

interface Props {
  param: string;
  value: string | number;
  iconParam?: React.ReactNode;
  numericValue?: number;
}

const ViewParams = ({ param, value, iconParam, numericValue }: Props) => {
  return (
    <div className="flex flex-col gap-2 justify-center items-center rounded-2xl bg-background-secondary/30 backdrop-blur-xs py-2 px-8 text-sm">
      <p className="text-center">{param}</p>
      {iconParam}
      {!iconParam && <p className="text-center text-h1">{numericValue}</p>}
      <p className="text-center">{value}</p>
    </div>
  );
};

export default ViewParams;
