import React, { type FC } from "react";

interface MemoryFragmentProps {
  memory: string
}

const MemoryFragment: FC<MemoryFragmentProps> = ({ memory }) => {

  return (
    <div
      className={`w-full p-2 rounded-xl border-gray-300 border bg-gray-100`}
    >
      <div className="flex flex-col justify-between">
        <div>
          <span className="text-xs">
            {memory}
          </span>
        </div>
      </div>
    </div>
  );
};

export default MemoryFragment;