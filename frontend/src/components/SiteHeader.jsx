'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { HiOutlineMenu, HiOutlineX } from 'react-icons/hi';
import { AnimatePresence, motion } from 'framer-motion';

const NAV_ITEMS = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/academics', label: 'Academics' },
  { href: '/extra-curricular', label: 'Activities' }
];

export default function SiteHeader() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (open) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  return (
    <>
      <header className="bg-white/20 backdrop-blur-md border-b border-white/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            <Link href="/" className="flex items-center space-x-3">
              <span className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center shadow-lg">
                <span className="text-white font-black text-xl">M</span>
              </span>
              <span className="flex flex-col">
                <span className="text-lg sm:text-xl font-bold text-gray-900 leading-tight">M.D.R.S.</span>
                <span className="text-xs sm:text-sm text-gray-600 font-medium leading-tight">Memorial Public School</span>
              </span>
            </Link>

            <nav className="hidden md:flex items-center space-x-8">
              {NAV_ITEMS.map(item => {
                const isActive = pathname === item.href;
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={`text-base font-semibold transition-colors ${
                      isActive ? 'text-blue-600' : 'text-gray-700 hover:text-blue-600'
                    }`}
                  >
                    {item.label}
                  </Link>
                );
              })}
            </nav>

            <button
              type="button"
              className="md:hidden inline-flex items-center justify-center w-11 h-11 rounded-xl border border-white/40 bg-white/40 backdrop-blur-lg shadow-lg text-slate-700 hover:bg-white focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500/60 transition"
              onClick={() => setOpen(true)}
              aria-label="Open navigation menu"
              aria-expanded={open}
            >
              <HiOutlineMenu className="w-6 h-6" />
            </button>
          </div>
        </div>
      </header>

      <AnimatePresence>
        {open && (
          <motion.div
            className="fixed inset-0 z-50 md:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div
              className="absolute inset-0 bg-slate-900/60 backdrop-blur-[6px]"
              onClick={() => setOpen(false)}
            />
            <motion.aside
              className="absolute top-0 right-0 h-full w-72 max-w-[85vw] bg-white/15 backdrop-blur-2xl border border-white/40 shadow-[0_25px_80px_rgba(15,23,42,0.35)] rounded-l-[2.5rem] flex flex-col overflow-hidden"
              role="dialog"
              aria-modal="true"
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', stiffness: 320, damping: 32 }}
            >
              <div className="relative flex items-center justify-between px-6 h-20 border-b border-white/30 text-white/90">
                <span className="text-lg font-semibold tracking-wide">Navigate</span>
                <button
                  type="button"
                  className="inline-flex items-center justify-center w-10 h-10 rounded-xl bg-white/20 border border-white/30 backdrop-blur-xl text-slate-800 hover:bg-white/30 transition"
                  onClick={() => setOpen(false)}
                  aria-label="Close navigation menu"
                >
                  <HiOutlineX className="w-6 h-6" />
                </button>
                <div className="absolute inset-0 -z-10 bg-gradient-to-br from-blue-500/25 via-transparent to-purple-500/25 opacity-70" />
              </div>
              <ul className="flex-1 overflow-y-auto py-6 space-y-2">
                {NAV_ITEMS.map(item => {
                  const isActive = pathname === item.href;
                  return (
                    <li key={item.href}>
                      <Link
                        href={item.href}
                        className={`mx-6 block rounded-2xl px-5 py-4 text-base font-semibold transition ${
                          isActive
                            ? 'bg-white/70 text-blue-700 shadow-xl backdrop-blur-xl border border-white/80'
                            : 'text-slate-100/80 hover:text-white hover:bg-white/20 border border-transparent backdrop-blur-sm'
                        }`}
                      >
                        {item.label}
                      </Link>
                    </li>
                  );
                })}
              </ul>
              <div className="px-6 py-5 border-t border-white/25 text-sm text-slate-100/70">
                <p className="font-semibold tracking-wide">Explore excellence</p>
                <p className="text-slate-100/60">M.D.R.S. Memorial Public School</p>
              </div>
            </motion.aside>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
