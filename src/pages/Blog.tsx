import { useEffect, useMemo, useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import { motion, AnimatePresence } from "motion/react";
import { RxArrowTopRight, RxArrowLeft } from "react-icons/rx";
import { SiLinkedin } from "react-icons/si";

import { BRAND_NAME } from "../constants/about";
import { BlogFeed, BlogPost } from "../types/blog";
import { easeClassic, fadeUp, staggerContainer } from "../lib/motion";

const formatDate = (value: string) =>
  new Date(value).toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });

const Blog = () => {
  const [feed, setFeed] = useState<BlogFeed | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);
  const [params, setParams] = useSearchParams();

  useEffect(() => {
    let active = true;

    const load = async () => {
      try {
        const res = await fetch("/blog.json", { cache: "no-cache" });
        if (!res.ok) throw new Error("Failed to load posts");
        const data = (await res.json()) as BlogFeed;
        if (active) setFeed(data);
      } catch {
        if (active) setError("Could not load blog posts.");
      } finally {
        if (active) setLoading(false);
      }
    };

    load();
    return () => {
      active = false;
    };
  }, []);

  const posts = useMemo(() => feed?.posts ?? [], [feed]);
  const selectedId = params.get("p");
  const selected: BlogPost | undefined = useMemo(
    () => posts.find((post) => post.id === selectedId) ?? posts[0],
    [posts, selectedId]
  );

  const selectPost = (id: string) => {
    setParams({ p: id }, { replace: true });
    // Keep reader in view on mobile after picking a post
    if (window.matchMedia("(max-width: 1023px)").matches) {
      document.getElementById("blog-reader")?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <div className="noise-surface min-h-svh overflow-x-hidden">
      <header className="sticky top-0 z-50 border-b border-border-primary bg-background-primary/90 backdrop-blur-md">
        <div className="mx-auto flex h-14 max-w-5xl items-center justify-between gap-3 px-4 sm:px-6">
          <Link
            to="/"
            className="inline-flex shrink-0 items-center gap-2 font-display text-xs font-semibold uppercase tracking-[0.16em] text-text-secondary transition-colors hover:text-accent"
          >
            <RxArrowLeft className="text-base" />
            Home
          </Link>
          <p className="font-display text-sm font-bold tracking-tight text-text-primary">
            Blog
          </p>
          <a
            href={feed?.source ?? "https://www.linkedin.com/in/itarunsaini"}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex shrink-0 items-center gap-1.5 font-display text-xs font-semibold text-text-secondary transition-colors hover:text-accent"
            aria-label="LinkedIn"
          >
            <SiLinkedin className="text-sm" />
            <span className="hidden sm:inline">LinkedIn</span>
          </a>
        </div>
      </header>

      <main className="mx-auto max-w-5xl px-4 py-10 sm:px-6 sm:py-16">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
          className="mb-8 max-w-2xl sm:mb-12"
        >
          <motion.p className="section-kicker" variants={fadeUp}>
            Writing
          </motion.p>
          <motion.h1
            className="mt-3 font-display text-3xl font-bold tracking-tight text-text-primary sm:text-5xl"
            variants={fadeUp}
          >
            Notes from LinkedIn
          </motion.h1>
          <motion.p
            className="mt-3 text-sm text-text-secondary sm:mt-4 sm:text-lg"
            variants={fadeUp}
          >
            Posts by {BRAND_NAME} on building Kielo, Matic Studio, and AI
            infrastructure — pulled from{" "}
            <a
              href="https://www.linkedin.com/in/itarunsaini"
              target="_blank"
              rel="noopener noreferrer"
              className="text-text-primary underline decoration-border-primary underline-offset-4 hover:text-accent hover:decoration-accent"
            >
              LinkedIn
            </a>
            .
          </motion.p>
        </motion.div>

        {loading && (
          <p className="font-display text-sm text-text-muted">Loading posts…</p>
        )}

        {error && (
          <p className="font-display text-sm text-accent">{error}</p>
        )}

        {!loading && !error && posts.length > 0 && (
          <div className="grid gap-8 lg:grid-cols-[260px_1fr] lg:gap-14 xl:grid-cols-[280px_1fr]">
            <aside className="min-w-0 lg:sticky lg:top-20 lg:self-start">
              <p className="mb-3 font-display text-[11px] font-semibold uppercase tracking-[0.22em] text-text-muted sm:mb-4">
                Posts
              </p>
              {/* Horizontal chips on mobile/tablet, list on desktop */}
              <ul className="flex gap-2 overflow-x-auto pb-2 lg:block lg:divide-y lg:divide-border-primary lg:overflow-visible lg:border-y lg:border-border-primary lg:pb-0">
                {posts.map((post) => {
                  const active = selected?.id === post.id;
                  return (
                    <li key={post.id} className="shrink-0 lg:shrink lg:w-auto">
                      <button
                        type="button"
                        onClick={() => selectPost(post.id)}
                        className={`w-max max-w-[220px] border px-3 py-2.5 text-left transition-colors lg:w-full lg:max-w-none lg:border-0 lg:px-0 lg:py-4 ${
                          active
                            ? "border-accent text-accent lg:text-accent"
                            : "border-border-primary text-text-secondary hover:text-text-primary"
                        }`}
                      >
                        <span className="block font-display text-xs font-semibold leading-snug sm:text-sm">
                          {post.title}
                        </span>
                        <span className="mt-1 block text-[10px] text-text-muted sm:text-xs">
                          {formatDate(post.date)}
                        </span>
                      </button>
                    </li>
                  );
                })}
              </ul>
            </aside>

            <AnimatePresence mode="wait">
              {selected && (
                <motion.article
                  id="blog-reader"
                  key={selected.id}
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  transition={{ duration: 0.45, ease: easeClassic }}
                  className="min-w-0 scroll-mt-20"
                >
                  <p className="font-display text-xs font-semibold uppercase tracking-[0.18em] text-text-muted">
                    {formatDate(selected.date)}
                  </p>
                  <h2 className="mt-3 font-display text-2xl font-bold tracking-tight text-text-primary sm:text-3xl md:text-4xl">
                    {selected.title}
                  </h2>
                  <p className="mt-3 text-sm text-text-secondary sm:mt-4 sm:text-base">
                    {selected.excerpt}
                  </p>

                  <div className="mt-4 flex flex-wrap gap-2 sm:mt-5">
                    {selected.tags.map((tag) => (
                      <span
                        key={tag}
                        className="font-display text-[10px] font-semibold uppercase tracking-[0.14em] text-text-muted sm:text-[11px]"
                      >
                        #{tag}
                      </span>
                    ))}
                  </div>

                  <div className="mt-6 space-y-4 border-t border-border-primary pt-6 text-sm leading-relaxed text-text-secondary whitespace-pre-line sm:mt-8 sm:pt-8 sm:text-base">
                    {selected.body}
                  </div>

                  <a
                    href={selected.linkedinUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-8 inline-flex items-center gap-2 font-display text-sm font-semibold text-text-primary underline decoration-border-primary underline-offset-4 transition-colors hover:text-accent hover:decoration-accent sm:mt-10"
                  >
                    View on LinkedIn
                    <RxArrowTopRight className="text-base" />
                  </a>
                </motion.article>
              )}
            </AnimatePresence>
          </div>
        )}
      </main>
    </div>
  );
};

export default Blog;
