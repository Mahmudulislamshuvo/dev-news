"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const ArticleNotFound = () => {
  const pathName = usePathname();

  const onlyslug = pathName.split("/").pop();

  return (
    <div className="flex min-h-[50vh] flex-col items-center justify-center text-center">
      {/* Outer Glow Wrapper */}
      <div className="relative rounded-2xl bg-gradient-to-br from-white/10 via-white/5 to-transparent p-[1px] shadow-lg shadow-rose-500/5">
        {/* Inner Card Content */}
        <div className="flex max-w-lg flex-col items-center rounded-2xl border border-white/10 bg-[var(--surface)] p-10 shadow-2xl backdrop-blur-sm">
          {/* Error Icon */}
          <div className="mb-6 rounded-full bg-rose-500/10 p-4 ring-1 ring-rose-500/20">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="40"
              height="40"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="text-rose-400"
            >
              <circle cx="12" cy="12" r="10" />
              <line x1="12" y1="8" x2="12" y2="12" />
              <line x1="12" y1="16" x2="12.01" y2="16" />
            </svg>
          </div>

          <h3 className="text-2xl font-bold text-white tracking-tight">
            Article Not Found
          </h3>

          <p className="mt-3 text-zinc-400">
            We couldn't find any article associated with the slug:
          </p>

          {/* The Specific Slug Display */}
          <div className="mt-4 rounded-md border border-white/5 bg-black/30 px-4 py-2">
            <code className="font-mono text-sm text-rose-300">{`/${onlyslug}`}</code>
          </div>

          <Link
            href="/"
            className="group mt-8 inline-flex items-center gap-2 rounded-full bg-white px-6 py-2.5 text-sm font-semibold text-black transition-all hover:bg-zinc-200 hover:shadow-lg hover:shadow-white/10"
          >
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="transition-transform group-hover:-translate-x-1"
            >
              <path
                d="M6.66667 12.6667L2 8.00004M2 8.00004L6.66667 3.33337M2 8.00004L14 8.00004"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ArticleNotFound;
