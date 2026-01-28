import React from "react";

const PageTitle = () => {
  return (
    <>
      <div class="flex flex-wrap items-center justify-between gap-4">
        <div>
          <h2 class="text-xl font-semibold text-white">Trending Today</h2>
          <p class="mt-1 text-sm text-zinc-400">
            Fresh signals from product teams and indie builders.
          </p>
        </div>
      </div>
    </>
  );
};

export default PageTitle;
