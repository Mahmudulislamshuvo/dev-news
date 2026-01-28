import Image from "next/image";
import React from "react";

const NewsCard = () => {
  return (
    <>
      <section className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {/* Map here */}
        <div
          className="rounded-2xl bg-gradient-to-br from-white/15 via-white/5 to-transparent p-[1px] reveal"
          style={{ animationDelay: "0ms" }}
        >
          <article className="group h-full rounded-2xl border border-white/10 bg-[var(--surface)] p-5 shadow-[0_24px_50px_rgba(5,8,16,0.55)] transition hover:-translate-y-1 hover:border-cyan-300/40">
            <div className="aspect-video overflow-hidden rounded-xl">
              <Image
                src="https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=800&q=80"
                alt="Circuit board"
                className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                height={450}
                width={800}
              />
            </div>
            <div className="mt-4 flex items-center justify-between text-xs text-zinc-400">
              <div className="flex items-center gap-2">
                <Image
                  src="https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=facearea&w=64&h=64&q=80"
                  alt="Author"
                  className="h-7 w-7 rounded-full object-cover"
                  height={28}
                  width={28}
                />
                <span>Jules Wang</span>
              </div>
              <span>1 day ago</span>
            </div>
            <h3 className="mt-3 text-lg font-semibold text-white">
              Why inference stacks are redesigning the dev workflow
            </h3>
            <div className="mt-4 flex flex-wrap gap-2 text-[11px] text-cyan-200/80">
              <span className="rounded-full border border-cyan-300/20 bg-cyan-300/10 px-2 py-1">
                #ai
              </span>
              <span className="rounded-full border border-cyan-300/20 bg-cyan-300/10 px-2 py-1">
                #infra
              </span>
              <span className="rounded-full border border-cyan-300/20 bg-cyan-300/10 px-2 py-1">
                #workflow
              </span>
            </div>
            <div className="mt-4 flex items-center justify-between text-xs text-zinc-400">
              <div className="flex items-center gap-3">
                <span className="flex items-center gap-1">
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
                  2.4K
                </span>
                <span className="flex items-center gap-1">
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
                  120
                </span>
              </div>
              <span className="flex items-center gap-1">
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
                1M views
              </span>
            </div>
          </article>
        </div>
      </section>
    </>
  );
};

export default NewsCard;
