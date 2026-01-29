import { formatCompactNumber } from "@/utils/formatCompactNumber";
import Image from "next/image";
import Link from "next/link";

const SingleArticale = ({ singleArticaleData, dictionary }) => {
  const {
    title,
    description,
    author_name,
    author_avatar,
    published_date,
    tags,
    upvotes,
    downvotes,
    views,
    thumbnail,
  } = singleArticaleData;

  return (
    <>
      <main className="mt-12">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <Link
            href="/"
            className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs font-medium text-white transition hover:border-cyan-300/40 hover:text-cyan-200"
          >
            Back to home
          </Link>
        </div>

        <div className="mt-8 grid gap-8 lg:grid-cols-[minmax(0,1fr)_340px]">
          {/* Main Article Content */}
          <article className="rounded-2xl bg-gradient-to-br from-white/15 via-white/5 to-transparent p-[1px] reveal">
            <div className="rounded-2xl border border-white/10 bg-[var(--surface)] p-6 shadow-[0_24px_50px_rgba(5,8,16,0.55)]">
              <h3 className="text-3xl font-semibold text-white">{title}</h3>

              {/* Using slice(0, 150) for a short intro excerpt if needed, or just description */}
              <p className="mt-3 text-base text-zinc-300">
                {description.slice(0, 150)}...
              </p>

              <div className="mt-5 flex flex-wrap items-center gap-4 text-xs text-zinc-400">
                <div className="flex items-center gap-2">
                  <Image
                    src={`${`/${author_avatar}` || "https://i.pravatar.cc/150"}`}
                    alt={`Author ${author_name}`}
                    className="h-8 w-8 rounded-full object-cover"
                    height={32}
                    width={32}
                  />
                  <span className="text-sm font-medium text-white">
                    {author_name}
                  </span>
                </div>
                <span className="text-xs text-zinc-500">•</span>
                <span>Published on {published_date}</span>
              </div>

              <div className="mt-6 overflow-hidden rounded-2xl border border-white/10">
                <Image
                  src={`${`/${thumbnail}` || "https://placehold.co/600x400"}`}
                  alt={`${title} thumbnail`}
                  className="h-full w-full object-cover"
                  height={340}
                  width={600} // Increased width for better resolution
                />
              </div>

              <div className="mt-6 space-y-4 text-sm leading-7 text-zinc-300 whitespace-pre-wrap">
                {/* whitespace-pre-wrap preserves line breaks from your data string */}
                {description}
              </div>
            </div>
          </article>

          {/* Sidebar */}
          <aside className="space-y-6">
            {/* Engagement Card */}
            <div
              className="rounded-2xl bg-gradient-to-br from-white/15 via-white/5 to-transparent p-[1px] reveal"
              style={{ animationDelay: "120ms" }}
            >
              <div className="rounded-2xl border border-white/10 bg-[var(--surface)] p-5 shadow-[0_24px_50px_rgba(5,8,16,0.55)]">
                <h4 className="text-sm font-semibold text-white">Engagement</h4>
                <div className="mt-4 space-y-3 text-sm text-zinc-300">
                  <div className="flex items-center justify-between">
                    <span className="flex items-center gap-2">
                      <svg
                        viewBox="0 0 24 24"
                        fill="none"
                        className="h-4 w-4 text-emerald-300"
                      >
                        <path
                          d="M12 4L5 11H9V20H15V11H19L12 4Z"
                          fill="currentColor"
                        />
                      </svg>
                      Upvotes
                    </span>
                    <span className="text-white">
                      {formatCompactNumber(upvotes)}
                    </span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="flex items-center gap-2">
                      <svg
                        viewBox="0 0 24 24"
                        fill="none"
                        className="h-4 w-4 text-rose-300"
                      >
                        <path
                          d="M12 20L19 13H15V4H9V13H5L12 20Z"
                          fill="currentColor"
                        />
                      </svg>
                      Downvotes
                    </span>
                    <span className="text-white">
                      {formatCompactNumber(downvotes)}
                    </span>
                  </div>
                </div>
                <div className="mt-4 flex items-center justify-between border-t border-white/10 pt-4 text-xs text-zinc-400">
                  <span className="flex items-center gap-2">
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      className="h-4 w-4 text-zinc-500"
                    >
                      <path
                        d="M2 12C4.5 7 7.5 5 12 5C16.5 5 19.5 7 22 12C19.5 17 16.5 19 12 19C7.5 19 4.5 17 2 12Z"
                        stroke="currentColor"
                        strokeWidth="1.4"
                      />
                      <circle
                        cx="12"
                        cy="12"
                        r="3"
                        stroke="currentColor"
                        strokeWidth="1.4"
                      />
                    </svg>
                    Views
                  </span>
                  <span className="text-white">
                    {formatCompactNumber(views)}
                  </span>
                </div>
              </div>
            </div>

            {/* Tags Card */}
            <div
              className="rounded-2xl bg-gradient-to-br from-white/15 via-white/5 to-transparent p-[1px] reveal"
              style={{ animationDelay: "200ms" }}
            >
              <div className="rounded-2xl border border-white/10 bg-[var(--surface)] p-5 shadow-[0_24px_50px_rgba(5,8,16,0.55)]">
                <h4 className="text-sm font-semibold text-white">Tags</h4>
                <div className="mt-4 flex flex-wrap gap-2 text-[11px] text-cyan-200/80">
                  {tags.map((tag, index) => (
                    <span
                      key={index}
                      className="rounded-full border border-cyan-300/20 bg-cyan-300/10 px-3 py-1"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Author Card */}
            <div
              className="rounded-2xl bg-gradient-to-br from-white/15 via-white/5 to-transparent p-[1px] reveal"
              style={{ animationDelay: "280ms" }}
            >
              <div className="rounded-2xl border border-white/10 bg-[var(--surface)] p-5 shadow-[0_24px_50px_rgba(5,8,16,0.55)]">
                <h4 className="text-sm font-semibold text-white">Author</h4>
                <div className="mt-4 flex items-center gap-3">
                  <div className="rounded-full bg-white/10 p-[2px]">
                    <Image
                      src={`${`/${author_avatar}` || "https://i.pravatar.cc/150"}`}
                      alt={`Author ${author_name}`}
                      className="h-12 w-12 rounded-full object-cover"
                      height={48}
                      width={48}
                    />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-white">
                      {author_name}
                    </p>
                    <p className="text-xs text-zinc-400">Content Creator</p>
                  </div>
                </div>
                <p className="mt-4 text-xs text-zinc-400">
                  Published on{" "}
                  <time dateTime={published_date}>{published_date}</time>
                </p>
              </div>
            </div>
          </aside>
        </div>
      </main>
    </>
  );
};

export default SingleArticale;
