"use client";

import { FC } from "react";

interface errorProps {
  error: Error;
  reset: () => void;
}

const error: FC<errorProps> = ({ error, reset }) => {
  return (
    <div className="flex flex-col justify-center items-center min-h-screen gap-y-5">
      <h1 className="text-3xl text-rose-500">Error -{error.message}</h1>
      <button
        className="p-3 rounded border-2 border-slate-300 hover:bg-slate-500 hover:text-slate-50 active:bg-slate-600"
        onClick={() => reset()}
      >
        Try Again
      </button>
    </div>
  );
};
export default error;
