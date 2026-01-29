import React from "react";

const PageTitle = () => {
  return (
    <>
      <div className="flex flex-wrap items-center justify-between gap-4">
        <div>
          <h2 className="text-xl font-semibold text-white">Trending Today</h2>
          <p className="mt-1 text-sm text-zinc-400">
            Fresh signals from product teams and indie builders.
          </p>
        </div>
      </div>
    </>
  );
};

export default PageTitle;
