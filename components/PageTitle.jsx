const PageTitle = ({ dictionbary }) => {
  return (
    <>
      <div className="flex flex-wrap items-center justify-between gap-4">
        <div>
          <h2 className="text-xl font-semibold text-white">
            {dictionbary.pageTitle.trendingToday}
          </h2>
          <p className="mt-1 text-sm text-zinc-400">
            {dictionbary.pageTitle.trendingSlogan}
          </p>
        </div>
      </div>
    </>
  );
};

export default PageTitle;
