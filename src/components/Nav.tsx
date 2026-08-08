import { useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "motion/react";
import { RxCross2, RxHamburgerMenu } from "react-icons/rx";

import { BRAND_NAME } from "../constants/about";
import { fadeIn } from "../lib/motion";

const links = [
  { label: "Work", href: "#work" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
];

const Nav = () => {
  const [open, setOpen] = useState(false);

  const close = () => setOpen(false);

  return (
    <motion.header
      className="absolute inset-x-0 top-0 z-50"
      initial="hidden"
      animate="visible"
      variants={fadeIn}
    >
      <div className="mx-auto flex h-14 max-w-7xl items-center justify-between px-4 sm:h-16 sm:px-6 md:h-20 md:px-10">
        <a
          href="#"
          className="min-w-0 font-display text-sm font-bold tracking-[0.06em] text-white transition-opacity hover:opacity-80 sm:text-base"
        >
          <span className="sm:hidden">Tarun K. Saini</span>
          <span className="hidden sm:inline">{BRAND_NAME}</span>
        </a>

        {/* Desktop / tablet nav */}
        <nav className="hidden items-center gap-0.5 md:flex">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="px-3 py-2 font-display text-[11px] font-semibold uppercase tracking-[0.18em] text-white/75 transition-colors hover:text-white"
            >
              {link.label}
            </a>
          ))}
          <Link
            to="/b"
            className="px-3 py-2 font-display text-[11px] font-semibold uppercase tracking-[0.18em] text-white/75 transition-colors hover:text-white"
          >
            Blog
          </Link>
        </nav>

        {/* Mobile menu toggle */}
        <button
          type="button"
          className="flex h-10 w-10 items-center justify-center text-white md:hidden"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? (
            <RxCross2 className="h-6 w-6" />
          ) : (
            <RxHamburgerMenu className="h-6 w-6" />
          )}
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.nav
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.25 }}
            className="border-t border-white/10 bg-ink/95 px-4 py-4 backdrop-blur-md md:hidden"
          >
            <ul className="flex flex-col gap-1">
              {links.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={close}
                    className="block px-2 py-3 font-display text-sm font-semibold uppercase tracking-[0.16em] text-white/85"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
              <li>
                <Link
                  to="/b"
                  onClick={close}
                  className="block px-2 py-3 font-display text-sm font-semibold uppercase tracking-[0.16em] text-white/85"
                >
                  Blog
                </Link>
              </li>
            </ul>
          </motion.nav>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default Nav;
