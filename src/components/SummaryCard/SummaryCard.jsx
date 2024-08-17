import React from "react";

const SummaryCard = ({ data }) => {
  return (
    <div className="flex gap-6 flex-wrap">
      {data?.map((data, index) => (
        <div
          key={index}
          className=" bg-white dark:bg-secondary-dark-bg dark:border-2 shadow px-4 py-8 rounded-lg flex-1 min-w-[200px]"
        >
          <h4 className="text-gray-400 sm:text-xl">{data.title}</h4>
          <h1 className="sm:text-2xl text-lg font-bold pt-5">{data.value}</h1>
        </div>
      ))}
    </div>
  );
};

export default SummaryCard;
